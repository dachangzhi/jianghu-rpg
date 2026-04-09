// story_part17.js - 落雁峰山路扩写
// 上山准备、山路事件、山洞迷宫

SCENES['mountain_ambush'] = () => {
  G.scene = 'mountain_ambush';
  G.location = '落雁峰山路';
  narrate('山路拐角处——一个黑衣人从树后闪出。匕首直刺你的咽喉。你侧身闪避——匕首擦着你的耳朵划过。沈孤雁/柳如烟/赵铁牛及时出手——一剑封喉。暗杀者倒地——身上搜出了暗星阁的令牌。');
  divider();
  G.wits += 2;
  showChoices([
    { text: '继续前进', id: 'mountain_ambush_c', next: SCENES['mountain_cave_entrance'] },
  ]);
};

SCENES['mountain_trap'] = () => {
  G.scene = 'mountain_trap';
  G.location = '落雁峰山路';
  narrate('你踩到了一个隐藏的绊线——头顶的树枝上掉下来一张大网。你被网住了！沈孤雁/柳如烟/赵铁牛用刀割开了网。赵铁牛说：这是军中的捕兽陷阱——有人在山路上布了防。');
  divider();
  G.wits += 2;
  showChoices([
    { text: '继续前进', id: 'mountain_trap_c', next: SCENES['mountain_cave_entrance'] },
  ]);
};

SCENES['mountain_weather'] = () => {
  G.scene = 'mountain_weather';
  G.location = '落雁峰山路';
  narrate('突然间乌云遮月——山路上伸手不见五指。接着大雨倾盆。雨水冰冷刺骨——你全身湿透。山路变得泥泞不堪——每一步都可能滑倒。沈孤雁/柳如烟/赵铁牛拉着你往前走——在暴风雨中艰难前行。');
  divider();
  G.wits += 2;
  showChoices([
    { text: '继续前进', id: 'mountain_weather_c', next: SCENES['mountain_cave_entrance'] },
  ]);
};

SCENES['mountain_injury'] = () => {
  G.scene = 'mountain_injury';
  G.location = '落雁峰山路';
  narrate('一块落石从山上滚下来——沈孤雁/柳如烟/赵铁牛推开你——但自己被石头砸到了腿。还好伤得不重——但行动速度会慢很多。你需要搀扶着伤者继续前进。');
  divider();
  G.wits += 2;
  showChoices([
    { text: '继续前进', id: 'mountain_injury_c', next: SCENES['mountain_cave_entrance'] },
  ]);
};

SCENES['mountain_fork'] = () => {
  G.scene = 'mountain_fork';
  G.location = '落雁峰山路';
  narrate('山路出现了分岔——左边通往密林深处，右边的路更陡但更短。左边的路有新鲜的脚印——有人刚刚走过。右边有松动的石头——看起来很危险。');
  divider();
  G.wits += 2;
  showChoices([
    { text: '继续前进', id: 'mountain_fork_c', next: SCENES['mountain_cave_entrance'] },
  ]);
};

SCENES['mountain_cave_small'] = () => {
  G.scene = 'mountain_cave_small';
  G.location = '落雁峰山路';
  narrate('你发现了一个小洞穴——刚好够三个人躲避。里面残留着篝火的痕迹——有人在这里过夜。地上还有一根断裂的箭——箭杆上刻着暗星阁的标记。');
  divider();
  G.wits += 2;
  showChoices([
    { text: '继续前进', id: 'mountain_cave_small_c', next: SCENES['mountain_cave_entrance'] },
  ]);
};

SCENES['mountain_wolf'] = () => {
  G.scene = 'mountain_wolf';
  G.location = '落雁峰山路';
  narrate('一只灰色的野狼出现在山路中央——绿色的眼睛在黑暗中闪烁。它没有攻击——只是看着你。然后它转身朝山上跑去——像是在引路。你跟着它走了一段——它把你带到了一条隐秘的近路。');
  divider();
  G.wits += 2;
  showChoices([
    { text: '继续前进', id: 'mountain_wolf_c', next: SCENES['mountain_cave_entrance'] },
  ]);
};

SCENES['mountain_cliff'] = () => {
  G.scene = 'mountain_cliff';
  G.location = '落雁峰山路';
  narrate('山路在这里断了——前面是一段三丈宽的悬崖。对面就是继续上山的路。你需要跳过去——或者用绳索荡过去。赵铁牛/沈孤雁/柳如烟先过去——在对岸接应。');
  divider();
  G.wits += 2;
  showChoices([
    { text: '继续前进', id: 'mountain_cliff_c', next: SCENES['mountain_cave_entrance'] },
  ]);
};

SCENES['mountain_shen_dlg1'] = () => {
  G.scene = 'mountain_shen_dlg1';
  narrate('沈孤雁说：十五年前我第一次走这条路。那时候我还年轻——不知道自己将要背负什么。师父把天机卷传给我的时候说——你准备好了吗？我说准备好了。但我没有。');
  divider();
  changeRel('shen', 3);
  showChoices([{ text: '继续', id: 'mountain_shen_dlg1_c', next: SCENES['mountain_cave_entrance'] }]);
};

SCENES['mountain_shen_dlg2'] = () => {
  G.scene = 'mountain_shen_dlg2';
  narrate('沈孤雁说：青娘比我更适合当守护者。但师父选了我。也许是因为——我不会被诱惑。也许是因为——我足够普通。');
  divider();
  changeRel('shen', 3);
  showChoices([{ text: '继续', id: 'mountain_shen_dlg2_c', next: SCENES['mountain_cave_entrance'] }]);
};

SCENES['mountain_shen_dlg3'] = () => {
  G.scene = 'mountain_shen_dlg3';
  narrate('沈孤雁说：小莲像我的女儿。她不知道我是什么人——只知道我是客栈老板。这样最好。');
  divider();
  changeRel('shen', 3);
  showChoices([{ text: '继续', id: 'mountain_shen_dlg3_c', next: SCENES['mountain_cave_entrance'] }]);
};

SCENES['mountain_shen_dlg4'] = () => {
  G.scene = 'mountain_shen_dlg4';
  narrate('沈孤雁说：你让我想起了年轻时的自己。好奇、勇敢、但不够谨慎。记住——在江湖上，谨慎比勇敢更重要。');
  divider();
  changeRel('shen', 3);
  showChoices([{ text: '继续', id: 'mountain_shen_dlg4_c', next: SCENES['mountain_cave_entrance'] }]);
};

SCENES['mountain_shen_dlg5'] = () => {
  G.scene = 'mountain_shen_dlg5';
  narrate('沈孤雁说：如果今天出了什么事——帮我把这个交给小莲。他从怀里掏出一封信。上面写着：给莲儿。');
  divider();
  changeRel('shen', 3);
  showChoices([{ text: '继续', id: 'mountain_shen_dlg5_c', next: SCENES['mountain_cave_entrance'] }]);
};

SCENES['mountain_liu_dlg1'] = () => {
  G.scene = 'mountain_liu_dlg1';
  narrate('柳如烟说：我父亲失踪的时候我才七岁。我娘带着我投奔了锦衣卫的亲戚。从那以后——我就成了锦衣卫的人。');
  divider();
  changeRel('liu', 3);
  showChoices([{ text: '继续', id: 'mountain_liu_dlg1_c', next: SCENES['mountain_cave_entrance'] }]);
};

SCENES['mountain_liu_dlg2'] = () => {
  G.scene = 'mountain_liu_dlg2';
  narrate('柳如烟说：青锋冷月剑是我父亲的。他失踪后——剑被锦衣卫收了。我用十年的时间从一个小卒升到了千户——才拿回了这把剑。');
  divider();
  changeRel('liu', 3);
  showChoices([{ text: '继续', id: 'mountain_liu_dlg2_c', next: SCENES['mountain_cave_entrance'] }]);
};

SCENES['mountain_liu_dlg3'] = () => {
  G.scene = 'mountain_liu_dlg3';
  narrate('柳如烟说：锦衣卫让我来取天机卷。但我已经决定了——天机卷不属于朝廷。它属于守护者。');
  divider();
  changeRel('liu', 3);
  showChoices([{ text: '继续', id: 'mountain_liu_dlg3_c', next: SCENES['mountain_cave_entrance'] }]);
};

SCENES['mountain_liu_dlg4'] = () => {
  G.scene = 'mountain_liu_dlg4';
  narrate('柳如烟说：你比我想象的要可靠。我以为外来人都是靠不住的。你证明了我是错的。');
  divider();
  changeRel('liu', 3);
  showChoices([{ text: '继续', id: 'mountain_liu_dlg4_c', next: SCENES['mountain_cave_entrance'] }]);
};

SCENES['mountain_liu_dlg5'] = () => {
  G.scene = 'mountain_liu_dlg5';
  narrate('柳如烟说：如果找到了我父亲的下落——我想在这里了结一切。不再做锦衣卫。');
  divider();
  changeRel('liu', 3);
  showChoices([{ text: '继续', id: 'mountain_liu_dlg5_c', next: SCENES['mountain_cave_entrance'] }]);
};

SCENES['mountain_zhao_dlg1'] = () => {
  G.scene = 'mountain_zhao_dlg1';
  narrate('赵铁牛说：二十年了——我一直在找那个军需官。也许他就在这个镇上。也许他就在我身边。');
  divider();
  changeRel('zhao', 3);
  showChoices([{ text: '继续', id: 'mountain_zhao_dlg1_c', next: SCENES['mountain_cave_entrance'] }]);
};

SCENES['mountain_zhao_dlg2'] = () => {
  G.scene = 'mountain_zhao_dlg2';
  narrate('赵铁牛说：打铁和打仗其实一样。都是耐心活。等铁烧到火候了再下锤——等敌人露出破绽了再出刀。');
  divider();
  changeRel('zhao', 3);
  showChoices([{ text: '继续', id: 'mountain_zhao_dlg2_c', next: SCENES['mountain_cave_entrance'] }]);
};

SCENES['mountain_zhao_dlg3'] = () => {
  G.scene = 'mountain_zhao_dlg3';
  narrate('赵铁牛说：我腿不行了——但手还行。只要有我在——你就不用怕身后。');
  divider();
  changeRel('zhao', 3);
  showChoices([{ text: '继续', id: 'mountain_zhao_dlg3_c', next: SCENES['mountain_cave_entrance'] }]);
};

SCENES['mountain_zhao_dlg4'] = () => {
  G.scene = 'mountain_zhao_dlg4';
  narrate('赵铁牛说：你是个好人。在这个江湖上——好人不多。你要保护好自己。');
  divider();
  changeRel('zhao', 3);
  showChoices([{ text: '继续', id: 'mountain_zhao_dlg4_c', next: SCENES['mountain_cave_entrance'] }]);
};

SCENES['mountain_zhao_dlg5'] = () => {
  G.scene = 'mountain_zhao_dlg5';
  narrate('赵铁牛说：如果今天我回不去了——帮我把铁盒寄回老家。给我兄弟五个。告诉他们——赵铁牛没丢人。');
  divider();
  changeRel('zhao', 3);
  showChoices([{ text: '继续', id: 'mountain_zhao_dlg5_c', next: SCENES['mountain_cave_entrance'] }]);
};

SCENES['mountain_cave_entrance'] = () => {
  G.scene = 'mountain_cave_entrance';
  G.location = '落雁峰·石室入口';
  narrate('你们终于到达了石室入口。巨石矗立在峰顶——东侧有一个黑黝黝的洞口。但——洞口前站着两个人。暗星阁的守卫。他们显然已经先到了。沈孤雁拔剑。柳如烟拔剑。赵铁牛举起铁锤。战斗一触即发。');
  divider();
  setFlag('reached_cave');
  showChoices([
    { text: '正面强攻', id: 'mce_charge', effects: () => { G.sword += 2; addHp(-10); setFlag('frontal_assault'); }, next: SCENES['cave_victory'] },
    { text: '胡青娘的迷魂散', id: 'mce_smoke', effects: () => { G.wits += 3; setFlag('used_smoke'); }, next: SCENES['cave_victory'] },
    { text: '白云生的暗号诱惑', id: 'mce_trick', effects: () => { G.charm += 3; setFlag('tricked_guards'); }, next: SCENES['cave_victory'] },
  ]);
};

SCENES['cave_victory'] = () => {
  G.scene = 'cave_victory';
  narrate('守卫被解决了。石室的入口终于打开。三块玉牌在月光下闪烁着碧绿色的光芒。');
  divider();
  setFlag('guards_defeated');
  showChoices([{ text: '进入石室', id: 'cv_enter', next: SCENES['cave_level1'] }]);
};

SCENES['cave_level1'] = () => {
  G.scene = 'cave_level1';
  G.location = '石室·第一层';
  narrate('第一层——声音之谜。石室大厅中央有一个石台。石台上有七个凹槽——对应宫商角徵羽变宫变商七个音。你需要按正确的顺序敲击。');
  divider();
  showChoices([
    { text: '用胡青娘告诉你的音阶（1-2-3-5-6-7-1）', id: 'cl1_correct', effects: () => { G.wits += 5; setFlag('solved_level1'); }, next: SCENES['cave_level2'] },
    { text: '随机试', id: 'cl1_random', effects: () => { addHp(-20); setFlag('failed_level1'); }, next: SCENES['cave_level2'] },
  ]);
};

SCENES['cave_level2'] = () => {
  G.scene = 'cave_level2';
  G.location = '石室·第二层';
  narrate('第二层——机关之路。通道两侧有暗箭和翻板。你需要仔细观察地面的纹路——安全路线用微弱的刻痕标记。赵铁牛的军旅经验在这里派上了用场——他认出了这是标准的军用防御工事。');
  divider();
  showChoices([
    { text: '让赵铁牛带路', id: 'cl2_zhao', effects: () => { changeRel('zhao_tieniu', 5); setFlag('zhao_led_level2'); }, next: SCENES['cave_level3'] },
    { text: '自己摸索', id: 'cl2_self', effects: () => { addHp(-15); setFlag('self_level2'); }, next: SCENES['cave_level3'] },
  ]);
};

SCENES['cave_level3'] = () => {
  G.scene = 'cave_level3';
  G.location = '石室·第三层';
  narrate('第三层——天机卷所在。石室的尽头——一个石匣静静地放在石台上。石匣上刻着三只大雁——每只雁的嘴里有一个凹槽——正好对应三块玉牌。你把三块玉牌嵌入凹槽。咔哒——石匣缓缓打开。里面——一卷泛黄的绢帛。天机卷。一千二百个名字。一千二百个秘密。一千二百个人的命运。就握在你手里。');
  divider();
  setFlag('found_tianji');
  G.wits += 10;
  showChoices([
    { text: '打开天机卷', id: 'cl3_open', next: SCENES['tianji_reveal'] },
    { text: '先看看周围有没有危险', id: 'cl3_check', effects: () => { G.wits += 2; setFlag('checked_before_open'); }, next: SCENES['tianji_reveal'] },
  ]);
};

SCENES['tianji_reveal'] = () => {
  G.scene = 'tianji_reveal';
  narrate('你展开天机卷。绢帛很轻——但上面的名字很重。一千二百个名字——每一个名字后面都有注释：身份、位置、以及他们所知道秘密。其中一些名字让你震惊——有朝廷官员、有江湖大侠、有商贾巨富。还有一些——是你认识的人的名字。柳如烟的父亲——柳青松——就在名单上。白云生的老师——白太傅——也在名单上。甚至——小莲的母亲——也在名单上。');
  divider();
  setFlag('read_tianji');
  showChoices([{ text: '做出选择', id: 'tr_choice', next: SCENES['ending_judge'] }]);
};
