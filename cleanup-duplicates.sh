#!/bin/bash

# Find all .jsx files that have a corresponding .tsx file
find client/src -name "*.jsx" | while read jsx_file; do
    tsx_file="${jsx_file%.jsx}.tsx"
    if [ -f "$tsx_file" ]; then
        echo "Removing duplicate: $jsx_file (keeping $tsx_file)"
        rm "$jsx_file"
    fi
done

# Clean up empty directories
find client/src -type d -empty -delete

echo "Cleanup complete!" 