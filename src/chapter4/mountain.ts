/// <reference path="../types.ts" />
// story_part5.js - 落雁峰扩展场景
// 扩展mountain_approach和山洞内的场景

// ---- 上山路上的扩展场景 ----
SCENES['mountain_path_encounter'] = () => {
  G.scene = 'mountain_path_encounter';
  G.location = 'mountain_path';
  narrate(`山路越来越陡。月光在树冠间时隐时现，地上的落叶被夜风吹得沙沙作响。\n\n你突然停下了脚步——前方十丈处，有一个人影靠在路边的岩石上。\n\n走近一看——是一个受伤的${hl('黑衣人')}。他的腹部被刺了一刀，血浸透了黑衣，正在缓慢地死去。\n\n他看到你，嘴角扯出一个惨笑。`);
  dialog('', '你……也是来找天机卷的？来晚了……黑无极大人……已经在前面了……');
  narrate(`他咳了一口血，继续说：`);
  dialog('', '我……我是暗星阁的人……不是来抢天机卷的……我是来……阻止黑无极的……');
  
  divider();
  narrate(`你的心猛跳了一下——暗星阁的人在阻止黑无极？`);
  dialog('', '黑无极……他疯了……天机卷上……有我们所有人的名字……他想毁掉它……但如果毁掉天机卷……暗星阁的历史就没了……七十多个兄弟……他们的过去就彻底没了……');
  narrate(`他抓住你的衣角，用尽最后的力气。`);
  dialog('', `求你……不要让他毁掉天机卷……那不只是名单……那是我们的……${hl('证明')}……证明我们存在过……`);
  narrate(`他的手松开了。眼睛还睁着，但已经没有了光。`);

  setFlag('met_dying_assassin');
  G.wits += 1;

  showChoices([
    { text: '继续上山', id: 'path_continue', next: SCENES['mountain_approach'] },
    { text: '搜索他的尸体', id: 'path_search', effects: () => { setFlag('searched_assassin'); addItem('暗星阁令牌'); G.wits += 1; }, next: SCENES['mountain_approach'] },
  ]);
};

// ---- 山洞内的探索 ----
SCENES['mountain_cave_explore'] = () => {
  G.scene = 'mountain_cave_explore';
  G.location = 'mountain_cave';
  narrate(`天机卷的石室旁边，还有一条更深的甬道。你举着火把走了进去。\n\n甬道越来越窄，空气越来越冷。墙壁上开始出现壁画——年代久远，但仍然可以辨认。\n\n第一幅：一个帝王坐在龙椅上，将一卷卷轴交给一个跪着的大臣。\n第二幅：大臣将卷轴藏入山洞，用巨石封门。\n第三幅：一群士兵围攻山洞，但被一条龙形的机关阻挡。\n第四幅——${dg('被人为地凿掉了')}，只剩下一个模糊的轮廓。`);

  divider();
  narrate(`你继续往前走。甬道尽头是一个更小的石室。\n\n石室里只有一样东西——一面${hl('铜镜')}，镶嵌在石壁上。\n\n铜镜比外面那面更大，更古老。镜面虽然覆了一层灰尘，但擦拭之后依然光滑如新。\n\n你凑近一看——镜面映出的不是你的脸。\n\n而是一行字：\n\n${hl('"你想要什么？"')}\n\n这面镜子……在问你。`);

  setFlag('found_mirror_question');

  showChoices([
    { text: '「我想保护无辜的人。」', id: 'mirror_protect', effects: () => { setFlag('mirror_protect'); G.charm += 2; }, next: SCENES['mirror_response'] },
    { text: '「我想要真相。」', id: 'mirror_truth', effects: () => { setFlag('mirror_truth'); G.wits += 2; }, next: SCENES['mirror_response'] },
    { text: '「我想要力量。」', id: 'mirror_power', effects: () => { setFlag('mirror_power'); G.sword += 2; }, next: SCENES['mirror_response'] },
    { text: '不回答，转身离开', id: 'mirror_leave', effects: () => { setFlag('mirror_no_answer'); }, next: SCENES['final_chamber'] },
  ]);
};

SCENES['mirror_response'] = () => {
  G.scene = 'mirror_response';
  narrate(`\n镜面上的字消失了。\n\n然后，新的字浮现出来：`);
  
  if (hasFlag('mirror_protect')) {
    narrate(`${hl('"保护需要力量，力量需要牺牲。\n你愿意为保护他人而失去什么？\n\n记住这个问题的答案。\n它会决定你的结局。')}`);
  } else if (hasFlag('mirror_truth')) {
    narrate(`${hl('"真相是一把双刃剑。\n它可以让黑暗重见天日，也可以让光明化为灰烬。\n\n你准备好承受真相的重量了吗？')}`);
  } else if (hasFlag('mirror_power')) {
    narrate(`${dg('"力量从来不免费。\n每一分力量的背后，都有一分代价。\n\n你确定你付得起吗？')}`);
  }

  divider();
  narrate(`镜面重新变得空白。但你在镜中看到了另一个画面——\n\n${hl('未来的某个瞬间')}——你站在一个十字路口，左边是光明，右边是黑暗。\n\n画面一闪而过，但那个印象深深刻在了你的脑海里。`);

  showChoices([
    { text: '回到主石室', id: 'mirror_to_main', next: SCENES['final_chamber'] },
  ]);
};

// ---- 山洞内的战斗场景 ----
SCENES['cave_battle'] = () => {
  G.scene = 'cave_battle';
  narrate(`黑无极的人发起了进攻！\n\n狭窄的石室里，刀光剑影交错。火把被踢翻了，石室陷入半明半暗的混乱。\n\n你拔剑迎敌——`);

  divider();
  
  const allies = [];
  if (hasFlag('liu_alliance') || getRel('liu_ruyin') > 10) allies.push('柳如烟');
  if (hasFlag('hei_alliance') || hasFlag('hei_redemption')) allies.push('黑无极');
  if (getRel('zhao_tieniu') > 15 || hasFlag('fought_with_zhao')) allies.push('赵铁牛');
  
  if (allies.length > 0) {
    narrate(`${ok('你的盟友们和你并肩作战！')}\n`);
    allies.forEach(a => narrate(`· ${a} 加入了战斗`));
    divider();
  }

  narrate(`战斗在混乱中持续。石壁上火星飞溅，刀剑碰撞的声音在封闭的石室中回荡，震得人耳膜发痛。\n\n你一刀砍倒了一个黑衣人——但另一个从侧面袭来！`);

  showChoices([
    { text: '格挡反击（剑术检定）', id: 'cave_fight', req: [[() => req('sword', 13), '剑术≥13']], effects: () => { G.sword += 1; addHp(-10); }, next: () => { narrate(`\n${ok('你挡住了攻击，反手一剑刺穿了他的肩膀！')}黑衣人倒地不起。`); showChoices([{ text: '继续', next: SCENES['final_chamber'] }]); }},
    { text: '利用地形——踢翻石台上的铜炉', id: 'cave_trick', effects: () => { G.wits += 1; addHp(-5); }, next: () => { narrate(`\n你一脚踢翻铜炉，滚烫的炭火洒向黑衣人！${ok('他们惨叫着后退！')}你趁机摆脱了包围。`); showChoices([{ text: '继续', next: SCENES['final_chamber'] }]); }},
    { text: '使用沈孤雁的丹药（如果有的话）', id: 'cave_pill', disabled: !hasItem('沈孤雁的丹药'), effects: () => { removeItem('沈孤雁的丹药'); G.sword += 5; addHp(30); setFlag('used_pill'); }, next: () => { narrate(`\n你吞下丹药——一股热流从腹部涌向四肢百骸！${ok('力量倍增！你的反应速度和力量瞬间提升了数倍！')}\n黑衣人在你面前如同纸糊的一般，三两下就被击倒。`); showChoices([{ text: '继续', next: SCENES['final_chamber'] }]); }},
  ]);
};
