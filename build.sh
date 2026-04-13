#!/bin/bash
cd /root/.openclaw/workspace-coder/jianghu-rpg-v2
rm -rf dist
mkdir -p dist

# Concatenate all twee files (order matters: header first, footer last)
cat src-twee/story-header.twee \
    src-twee/chapter1.twee \
    src-twee/chapter1-dinner.twee \
    src-twee/chapter2.twee \
    src-twee/chapter3.twee \
    src-twee/endings.twee \
    src-twee/npc-quests.twee \
    src-twee/alliance-endings.twee \
    src-twee/events.twee \
    src-twee/story-footer.twee \
    > /tmp/jianghu-all.twee

npx extwee -c -i /tmp/jianghu-all.twee -s formats/sugarcube-2/format.js -o dist/index.html
rm -f /tmp/jianghu-all.twee

echo "Built dist/index.html ($(du -h dist/index.html | cut -f1))"
