#!/bin/bash

# Function to process a single file
process_file() {
  local file="$1"
  local temp_file=$(mktemp)
  
  # Check if file uses React hooks
  if grep -q "useState\|useEffect\|useRef\|useCallback\|useMemo" "$file"; then
    # Get the first line that imports from 'react'
    local react_import=$(grep "^import.*from 'react'" "$file" | head -n 1)
    
    if [ -z "$react_import" ]; then
      # No React import found, add a new one
      echo "import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';" > "$temp_file"
      cat "$file" >> "$temp_file"
    else
      # React import found, modify it
      while IFS= read -r line; do
        if [[ "$line" == "$react_import" ]]; then
          # Extract existing named imports
          local existing_imports=$(echo "$line" | grep -o "{.*}" | tr -d "{}")
          if [ -z "$existing_imports" ]; then
            # No named imports, add them
            echo "import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';"
          else
            # Add missing hooks to existing imports
            local new_imports="$existing_imports"
            for hook in useState useEffect useRef useCallback useMemo; do
              if ! echo "$existing_imports" | grep -q "$hook"; then
                new_imports="$new_imports, $hook"
              fi
            done
            echo "import React, { $new_imports } from 'react';"
          fi
        else
          echo "$line"
        fi
      done < "$file" > "$temp_file"
    fi
    mv "$temp_file" "$file"
  fi
}

# Export the function so it can be used by find
export -f process_file

# Find all .tsx files and process them
find client/src -type f -name "*.tsx" -exec bash -c 'process_file "$0"' {} \; 