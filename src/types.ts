// ==================== 类型定义 ====================

// 游戏状态
interface GameState {
  hp: number;
  maxHp: number;
  sword: number;
  wits: number;
  charm: number;
  scene: string | null;
  chapter: number;
  inventory: string[];
  flags: Record<string, boolean>;
  relationships: Record<string, number>;
  choices_made?: any[];
  location?: string;
  time?: string;
}

// NPC定义
interface NPCDef {
  name: string;
  title: string;
  defaultRel: number;
}

// 选择项
interface Choice {
  text: string;
  id?: string;
  next?: () => void;
  effects?: () => void;
  disabled?: boolean;
  req?: any[][];
}

// 场景函数
type SceneFunction = () => void;

// 引擎函数声明（在index.html内联script中定义）
declare function narrate(t: string): void;
declare function dialog(npcId: string, t: string): void;
declare function divider(): void;
declare function chapterTitle(t: string): void;
declare function clearStory(): void;
declare function locTag(name: string): void;
declare function showChoices(choices: Choice[]): void;
declare function setFlag(f: string, v?: string | boolean): void;
declare function hasFlag(f: string): boolean;
declare function addItem(item: string): void;
declare function hasItem(item: string): boolean;
declare function removeItem(item: string): void;
declare function changeRel(id: string, delta: number): void;
declare function getRel(id: string): number;
declare function addHp(delta: number): void;
declare function ok(t: string): string;
declare function highlight(t: string): string;
declare function danger(t: string): string;
declare function success(t: string): string;
declare function hl(t: string): string;
declare function dg(t: string): string;
declare function req(attr: string, val: number): boolean;
declare function showEnding(title: string, text: string, id: string): void;
declare function keyCount(): number;
declare function checkFlag(f: string): boolean;

declare const G: GameState;
declare const NPCS: Record<string, NPCDef>;
declare const SCENES: Record<string, SceneFunction>;
