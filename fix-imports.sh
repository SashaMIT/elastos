#!/bin/bash

# Function to process a file
process_file() {
    local file="$1"
    local temp_file=$(mktemp)
    local in_multiline=false
    local multiline_content=""

    while IFS= read -r line || [[ -n "$line" ]]; do
        # Skip empty lines
        if [[ -z "$line" ]]; then
            echo "" >> "$temp_file"
            continue
        fi

        # Handle multiline imports
        if $in_multiline; then
            multiline_content="$multiline_content$line"
            if [[ "$line" == *";" ]]; then
                in_multiline=false
                if [[ "$multiline_content" == *"React"* ]]; then
                    # Process multiline content
                    processed_line=$(echo "$multiline_content" | sed -E 's/import React, \{/import {/g' | sed -E 's/import React from .react.;//g')
                    if [[ -n "$processed_line" ]]; then
                        echo "$processed_line" >> "$temp_file"
                    fi
                else
                    echo "$multiline_content" >> "$temp_file"
                fi
                multiline_content=""
            fi
            continue
        fi

        # Check for start of multiline import
        if [[ "$line" == "import"* ]] && [[ "$line" != *";"* ]]; then
            in_multiline=true
            multiline_content="$line"
            continue
        fi

        # Process single-line imports
        if [[ "$line" == *"from 'react'"* ]] || [[ "$line" == *'from "react"'* ]]; then
            if [[ "$line" == *"import React from"* ]]; then
                # Skip standalone React imports
                continue
            elif [[ "$line" == *"import React, {"* ]]; then
                # Convert "import React, { something } from 'react';" to "import { something } from 'react';"
                processed_line=$(echo "$line" | sed -E 's/import[[:space:]]+React,[[:space:]]*\{/import {/g')
                echo "$processed_line" >> "$temp_file"
            elif [[ "$line" == *"import { "* ]] || [[ "$line" == *"import {"* ]]; then
                # Keep other react imports as is
                echo "$line" >> "$temp_file"
            fi
        else
            # Keep non-react imports and other lines as is
            echo "$line" >> "$temp_file"
        fi
    done < "$file"

    # Replace original file with processed content
    mv "$temp_file" "$file"
}

# Find and process all .tsx files in client/src directory
find client/src -name "*.tsx" -type f | while read -r file; do
    echo "Processing $file..."
    process_file "$file"
done 