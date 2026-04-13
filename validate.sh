#!/bin/bash
set -e
cd "$(dirname "$0")"

echo "=== 1. Syntax check all JS files ==="
errors=0
for f in $(grep -oP 'src="([^"]+\.js)"' index.html | sed 's/src="//;s/"//'); do
  if [ ! -f "$f" ]; then
    echo "❌ MISSING: $f"
    errors=$((errors+1))
  elif ! node --check "$f" 2>&1; then
    echo "❌ SYNTAX ERROR: $f"
    errors=$((errors+1))
  fi
done

echo "=== 2. Check index.html syntax ==="
# Check startGame function is closed
if ! grep -q "^function startGame" index.html || ! grep -q "^}" index.html; then
  echo "⚠️  startGame might be missing closing brace"
fi

# Count opening/closing braces in inline script
inline_start=$(grep -n "^<script>$" index.html | head -1 | cut -d: -f1)
inline_end=$(grep -n "^</script>" index.html | head -1 | cut -d: -f1)
inline_section=$(sed -n "${inline_start},${inline_end}p" index.html)
open_braces=$(echo "$inline_section" | tr -cd '{' | wc -c)
close_braces=$(echo "$inline_section" | tr -cd '}' | wc -c)
if [ "$open_braces" != "$close_braces" ]; then
  echo "❌ Brace mismatch in inline script: {=$open_braces }=$close_braces"
  errors=$((errors+1))
else
  echo "✅ Braces balanced: $open_braces pairs"
fi

echo "=== 3. Check script paths exist ==="
srcs=$(grep -oP 'src="([^"]+\.js)"' index.html | sed 's/src="//;s/"//')
missing=0
for f in $srcs; do
  if [ ! -f "$f" ]; then
    echo "❌ MISSING: $f"
    missing=$((missing+1))
  fi
done
if [ $missing -eq 0 ]; then
  echo "✅ All $(echo "$srcs" | wc -l) script files found"
fi

echo "=== 4. Node integration test ==="
node -e "
global.document = {
  getElementById: () => ({ innerHTML: '', scrollTop: 0, style: { display: '' }, appendChild:()=>{} }),
  querySelectorAll: () => [],
  createElement: () => ({ className:'', textContent:'', onclick:null, disabled:false, appendChild:()=>{} })
};
global.G = { hp:100, maxHp:100, sword:10, wits:10, charm:10, scene:null, chapter:0, inventory:[], flags:{}, relationships:{} };
global.SCENES = {};
global.localStorage = { getItem: ()=>null, setItem: ()=>{} };
// Mock game functions used in story scenes
global.highlight = t => t;
global.dialog = () => {};
global.narrate = () => {};
global.divider = () => {};
global.chapterTitle = () => {};
global.clearStory = () => {};
global.locTag = () => {};
global.showChoices = () => {};
global.setFlag = () => {};
global.hasFlag = () => false;
global.addItem = () => {};
global.hasItem = () => false;
global.removeItem = () => {};
global.changeRel = () => {};
global.getRel = () => 0;
global.addHp = () => {};
global.ok = t => t;
global.req = (a,b) => false;
const fs = require('fs');
const srcs = [...fs.readFileSync('index.html','utf8').matchAll(/src=\"([^\"]+\.js)\"/g)].map(m=>m[1]);
for (const src of srcs) eval(fs.readFileSync(src,'utf8'));
// Test inline script
const html = fs.readFileSync('index.html','utf8');
const inline = html.match(/<script>([\s\S]*?)<\/script>/)[1];
eval(inline);
if (typeof startGame !== 'function') throw new Error('startGame not defined');
if (!SCENES['start']) throw new Error('SCENES.start not defined');
SCENES['start']();
console.log('✅ startGame and SCENES.start execute OK');
"

if [ $errors -gt 0 ]; then
  echo "❌ $errors errors found"
  exit 1
else
  echo "✅ All checks passed"
fi
