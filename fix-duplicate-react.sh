#!/bin/bash

# Function to process a single file
process_file() {
  local file="$1"
  local temp_file=$(mktemp)
  
  # Check if file has duplicate React imports
  if grep -q "^import.*React.*from 'react'" "$file" | wc -l | grep -q "^[2-9]"; then
    # Keep only the first React import
    awk '!seen && /^import.*React.*from '\''react'\''/ {seen=1; print; next} !/^import.*React.*from '\''react'\''/ {print}' "$file" > "$temp_file"
    mv "$temp_file" "$file"
  fi
}

# Export the function so it can be used by find
export -f process_file

# Find all .tsx files and process them
find client/src -type f -name "*.tsx" -exec bash -c 'process_file "$0"' {} \; 