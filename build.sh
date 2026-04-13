#!/bin/bash
set -e
cd "$(dirname "$0")"

echo "=== TypeScript 编译 ==="
npx tsc --noEmit
echo "✅ 类型检查通过"

npx tsc
echo "✅ 编译完成"

# 删除 types.js（类型声明文件不需要运行时）
rm -f story/types.js

# 同步到 game/story/
rm -rf game/story
cp -r story game/story

echo "=== 验证 ==="
bash validate.sh

echo "✅ 构建完成！"
