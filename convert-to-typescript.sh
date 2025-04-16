#!/bin/bash

# Convert hooks files
for file in client/src/hooks/*.js; do
    if [ -f "$file" ]; then
        ts_file="${file%.js}.ts"
        echo "Converting $file to $ts_file"
        mv "$file" "$ts_file"
    fi
done

# Convert lib files
for file in client/src/lib/*.js; do
    if [ -f "$file" ]; then
        ts_file="${file%.js}.ts"
        echo "Converting $file to $ts_file"
        mv "$file" "$ts_file"
    fi
done

echo "Conversion complete!" 