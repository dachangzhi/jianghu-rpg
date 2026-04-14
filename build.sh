#!/bin/bash
cd /root/.openclaw/workspace-coder/jianghu-rpg-v2
rm -rf dist
mkdir -p dist

# Use tweego for stricter compilation + stats
TWEEGO_PATH=formats tweego -l -f sugarcube-2 -o dist/index.html src-twee/

echo "Built dist/index.html ($(du -h dist/index.html | cut -f1))"
