/// <reference path="../types.ts" />
// story_part21.js - NPC深度对话第二轮+特殊触发
SCENES['shen_secret_basement'] = () => {
  setFlag('shen_basement_done');
  G.scene = 'inn_lobby';
  narrate(`深夜沈孤雁确认无人，拿出暗绿色旧钥匙。`);
  dialog('shen_guyan', '你是我十五年来最信任的人。这客栈下面有间密室。');
  narrate(`他带你到后厨角落。墙壁上有块颜色微异的砖——他按下去，地面传来沉闷的机械声，一块石板缓缓移开露出向下的台阶。阴冷潮湿的空气涌上来，带着泥土和铁锈味。`);
  divider();
  narrate(`密室不大，约一丈见方。墙壁上挂着七幅画像——七个人，表情各异但都目光坚毅。每幅画像下面写着名字和年份。第七幅画像的位置空着，只放了一支毛笔和一小碟墨。石室中央有一张石桌，桌上放着一个铜匣子。匣子表面刻着密密麻麻的小字——你凑近看，是一千二百个名字。`);
  dialog('shen_guyan', '这就是天机卷。或者说——天机卷的副本。原本在暗星阁总部。这上面的每一个名字，都是暗星阁要控制或消灭的人。我是第八代守护者。我等了十五年，就是在等一个人来接替我。');
  setFlag('found_basement');
  setFlag('know_tianji');
  changeRel('shen_guyan', 10);
  divider();
  showChoices([{ text: '继续', id: 'lobby_free', next: SCENES['lobby_free'] }]);
};
SCENES['liu_true_reason'] = () => {
  setFlag('liu_truth_done');
  G.scene = 'inn_lobby';
  narrate(`柳如烟看着窗外。月光洒在她脸上，她的表情第一次完全卸下了防备。`);
  dialog('liu_ruyin', '我来苍龙镇真正的原因……是因为天机卷上有我父亲的名字。他是锦衣卫前指挥使，三年前被暗星阁陷害，以谋反罪被处死。我知道他是清白的。天机卷里有他被害的真相。我来这里不是为了任务——是为了复仇。');
  narrate(`她的声音很平静，但你看到她握茶杯的手在微微发抖。三年了。她追查了三年。从锦衣卫的密档到江湖上的风言风语，所有的线索都指向苍龙镇。指向这间客栈。`);
  setFlag('liu_father_truth');
  changeRel('liu_ruyin', 10);
  G.wits += 2;
  divider();
  showChoices([{ text: '继续', id: 'lobby_free', next: SCENES['lobby_free'] }]);
};
SCENES['zhao_river_secret'] = () => {
  setFlag('zhao_river_done');
  G.scene = 'outside';
  narrate(`赵铁牛带你到镇外的河边。月光下河水泛着银光。他在一棵老柳树旁蹲下，拨开杂草——露出一个被石板盖住的地洞。`);
  dialog('zhao_tieniu', '我到苍龙镇第一天就发现了这个。不敢告诉别人。你看看。');
  narrate(`石板下面是一个狭长的空间，里面放着一口木箱。木箱已经朽烂了大半，但箱盖上的暗星阁标记清晰可见。箱子里有几卷泛黄的卷轴——你展开一卷，上面画着苍龙镇的详细地图，标注了各种暗道和机关。`);
  setFlag('found_river_cache');
  changeRel('zhao_tieniu', 8);
  G.wits += 2;
  divider();
  showChoices([{ text: '回去', id: 'lobby_free', next: SCENES['lobby_free'] }]);
};
SCENES['bai_investigation'] = () => {
  setFlag('bai_invest_done');
  G.scene = 'inn_lobby';
  narrate(`白云生从怀里掏出一本薄册子——封面写着"暗星阁·苍龙分部调查记录"。`);
  dialog('bai_yunsheng', '这是我三年来收集的所有情报。暗星阁在苍龙镇设了一个秘密据点——就在这间客栈的地下。沈孤雁不是普通的客栈老板。他曾经是暗星阁的高级成员，后来叛逃了。天机卷就在他手里。');
  narrate(`他翻开册子给你看——里面有手绘的地图、时间表、人物关系图。白云生的调查比任何人想象的都要深入。`);
  setFlag('bai_full_investigation');
  changeRel('bai_yunsheng', 8);
  G.wits += 2;
  divider();
  showChoices([{ text: '继续', id: 'lobby_free', next: SCENES['lobby_free'] }]);
};
SCENES['npc_interaction_shen_liu'] = () => {
  setFlag('shen_liu_interact_done');
  G.scene = 'inn_lobby';
  narrate(`你注意到一个有趣的场景——沈孤雁和柳如烟在大堂角落低声交谈。两人的距离很近，但姿态都很克制。沈孤雁的手放在柜台上，手指微微弯曲——随时可以拿到下面的东西。柳如烟的右手始终靠近折扇。两个人在暗中较量，表面上却在说天气。`);
  dialog('shen_guyan', '柳姑娘今天气色不错。这雨停了之后，山上的路应该好走了吧？');
  dialog('liu_ruyin', '嗯。不过我倒觉得这雨下得正好。雨洗过后，很多东西会变得更清楚。');
  narrate(`他们的对话像是在下棋——每一句话都是试探，每一个停顿都是评估。你从他们的对话中读出了两个信息：第一，他们彼此知道对方的真实身份。第二，他们在互相警告——不要轻举妄动。`);
  setFlag('witnessed_shen_liu');
  G.wits += 1;
  divider();
  showChoices([{ text: '继续', id: 'lobby_free', next: SCENES['lobby_free'] }]);
};
SCENES['npc_interaction_zhao_bai'] = () => {
  setFlag('zhao_bai_interact_done');
  G.scene = 'inn_lobby';
  narrate(`深夜，赵铁牛和白云生坐在壁炉旁。赵铁牛难得清醒——也许是因为酒喝完了。白云生也不再装醉。两个"假装"的人在一起，反而露出了真实的一面。`);
  dialog('zhao_tieniu', '白云生，你说你来赶考。你骗谁呢。你的手不是握笔的手。');
  dialog('bai_yunsheng', '赵大哥，你也不只是来喝酒的吧。军人的直觉不会错。');
  narrate(`两人对视片刻，然后赵铁牛哈哈大笑——这次的笑是真实的，没有夸张的豪爽，只有两个聪明人互相看穿后的惺惺相惜。`);
  dialog('zhao_tieniu', '行。咱们都不装了。你想知道什么，赵铁牛知无不言。');
  setFlag('witnessed_zhao_bai');
  changeRel('zhao_tieniu', 2);
  changeRel('bai_yunsheng', 2);
  divider();
  showChoices([{ text: '继续', id: 'lobby_free', next: SCENES['lobby_free'] }]);
};
