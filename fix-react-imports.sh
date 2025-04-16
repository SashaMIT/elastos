#!/bin/bash

# Function to process a single file
process_file() {
  local file="$1"
  if grep -q "useState\|useEffect\|useRef\|useCallback\|useMemo\|React\." "$file"; then
    if ! grep -q "import React" "$file"; then
      sed -i '' '1s/^/import React from '"'"'react'"'"';\n/' "$file"
    fi
  fi
}

# Export the function so it can be used by find
export -f process_file

# Find all .tsx files and process them
find client/src -type f -name "*.tsx" -exec bash -c 'process_file "$0"' {} \; 