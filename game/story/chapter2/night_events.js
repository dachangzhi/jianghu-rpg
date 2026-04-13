// story_part22.js - 夜间事件扩写
SCENES['night_eavesdrop_1'] = () => {
  G.scene = 'bedroom';
  narrate(`深夜。你被一阵轻微的声响惊醒——隔壁房间传来压低声音的对话。你屏住呼吸贴着墙壁听。`);
  dialog('unknown_m', '……东西还在原来的位置吗？');
  dialog('unknown_f', '在。他每天晚上都会检查。但今晚他出去了——也许是时候了。');
  narrate(`两个声音你都不认识。男声低沉沙哑，女声清脆但刻意压低。他们在说"东西"——什么东西？明天该留意隔壁住的是谁。`);
  setFlag('eavesdrop_1');
  G.wits += 1;
  divider();
  showChoices([{ text: '继续听', id: 'night_eavesdrop_2', next: SCENES['night_eavesdrop_2'] }, { text: '睡觉', id: 'lobby_free', next: SCENES['lobby_free'] }]);
};
SCENES['night_eavesdrop_2'] = () => {
  G.scene = 'bedroom';
  narrate(`隔壁的声音继续。`);
  dialog('unknown_m', '暗星阁的人已经到了镇上。最多还有三天。');
  dialog('unknown_f', '三天……够了。我来处理那个客栈老板。你来负责拿东西。');
  narrate(`暗星阁的人来了。他们对沈孤雁有行动计划。你必须决定——警告他，还是继续观察？`);
  setFlag('eavesdrop_2');
  divider();
  showChoices([{ text: '明天警告沈孤雁', id: 'night_sleep_warn', effects: () => { setFlag('plan_warn_shen'); }, next: SCENES['lobby_free'] }, { text: '先不声张', id: 'night_sleep_quiet', next: SCENES['lobby_free'] }]);
};
SCENES['night_eavesdrop_3'] = () => {
  G.scene = 'bedroom';
  narrate(`又是一个深夜。这次你听到的不是隔壁——而是楼下。大堂方向传来石板移动的声音，持续了大约十息，然后归于寂静。`);
  narrate(`你等了一会儿，然后听到轻微的脚步声从楼下上来。你从门缝往外看——走廊尽头，一个人影正沿着楼梯往上走。那人穿着深色衣服，手里提着一盏极小的油灯，光线只够照亮脚下的三级台阶。是沈孤雁。`);
  setFlag('eavesdrop_shen_night');
  G.wits += 1;
  divider();
  showChoices([{ text: '继续', id: 'lobby_free', next: SCENES['lobby_free'] }]);
};
SCENES['night_eavesdrop_4'] = () => {
  G.scene = 'bedroom';
  narrate(`这次你听到了后院方向的声响——铁铲挖土的声音。你透过窗户看出去，月光下有一个人影在后院的角落里弯腰挖掘。白云生。`);
  narrate(`他挖了大约一刻钟，然后从坑里取出了一个拳头大小的东西，用布包好揣进怀里。他回客栈时经过了你的窗户下方——你听到他嘴里嘟囔了一句：「找到了。」`);
  setFlag('saw_bai_night_dig');
  G.wits += 2;
  divider();
  showChoices([{ text: '继续', id: 'lobby_free', next: SCENES['lobby_free'] }]);
};
SCENES['night_eavesdrop_5'] = () => {
  G.scene = 'bedroom';
  narrate(`最后一次深夜偷听。这次不是人声——是音乐。极其微弱的、像是某种弦乐的声音。从客栈正下方的地板缝隙里传上来。`);
  narrate(`曲调很古旧，你不认识。但那旋律让你莫名地感到悲伤——像是一个人在黑暗中独自弹奏，弹给已经不在的人听。音乐持续了大约半柱香，然后突然停止了。`);
  setFlag('heard_underground_music');
  G.wits += 1;
  divider();
  showChoices([{ text: '继续', id: 'lobby_free', next: SCENES['lobby_free'] }]);
};
SCENES['night_knock_shen'] = () => {
  G.scene = 'bedroom';
  narrate(`深夜有人敲门。你打开门——是沈孤雁。他穿着一件灰色单衣，手里端着一碗姜汤。`);
  dialog('shen_guyan', '睡不着？我猜你会醒。给你送碗姜汤。顺便跟你说件事——明天不要去后山。有人在那里布置了陷阱。');
  narrate(`他没等你回答就转身下楼了。你端着姜汤，闻到了一股淡淡的药味——不只是姜，还有什么别的。喝了一口，温暖从胃里散开。你很快就会睡着的。`);
  changeRel('shen_guyan', 3);
  divider();
  showChoices([{ text: '睡觉', id: 'lobby_free', next: SCENES['lobby_free'] }]);
};
SCENES['night_knock_liu'] = () => {
  G.scene = 'bedroom';
  narrate(`深夜敲门。柳如烟站在门口，表情比平时更冷。`);
  dialog('liu_ruyin', '……我能进来吗？我需要一个不在走廊里说的对话。');
  narrate(`你让她进来。她环顾四周确认没有其他人，然后低声说：「暗星阁的人今晚进了镇。我看到三个黑影从北门进来。你的房间窗户朝南——如果你需要逃跑，从窗户翻出去，沿着屋檐走到东面的楼梯。记住这条路线。」她说完就离开了。`);
  setFlag('liu_escape_route');
  changeRel('liu_ruyin', 5);
  divider();
  showChoices([{ text: '睡觉', id: 'lobby_free', next: SCENES['lobby_free'] }]);
};
SCENES['night_knock_zhao'] = () => {
  G.scene = 'bedroom';
  narrate(`赵铁牛堵在门口——他太高大了，门框显得窄了。他手里拿着一只烤鸡腿。`);
  dialog('zhao_tieniu', '兄弟！睡不着吧？赵铁牛也是。来，吃个鸡腿。我有个事想跟你说——我觉得这客栈不安全。我当过兵，对危险有直觉。今晚把门锁好，短刀放枕边。如果听到什么——别出来。等天亮。');
  narrate(`他说完把鸡腿塞给你就走了。你看着手里的鸡腿——温热的，刚烤的。这个人粗犷外表下有细腻的关心。`);
  changeRel('zhao_tieniu', 3);
  divider();
  showChoices([{ text: '睡觉', id: 'lobby_free', next: SCENES['lobby_free'] }]);
};
SCENES['night_explore_hallway'] = () => {
  G.scene = 'night_hallway';
  narrate(`你悄悄打开房门。走廊一片漆黑，只有楼梯口透上来一点壁炉余烬的微光。地板在脚下轻微作响——但你已经记住了哪些木板会响，避开了它们。`);
  narrate(`走廊里弥漫着一种夜晚特有的气味——木头、旧毯子、以及淡淡的草药味从某个房间里飘出来。你经过赵铁牛的房间——鼾声如雷。白云生的房间——安静，门缝下没有光。柳如烟的房间——门缝下也没有光，但你注意到她的门没有上锁。`);
  narrate(`楼梯口旁边有一扇小门——你之前没注意过。门上挂着一把铁锁。你试着推了一下——锁很紧，但门缝处你感觉到了一丝气流。门的另一面不是墙壁——是一条通道。`);
  setFlag('night_explored');
  G.wits += 2;
  divider();
  showChoices([{ text: '回房', id: 'lobby_free', next: SCENES['lobby_free'] }]);
};
SCENES['night_rooftop'] = () => {
  G.scene = 'rooftop';
  narrate(`你从窗户翻出，沿着屋檐爬到了屋顶。瓦片在脚下凉凉的，被夜露打湿了。苍龙镇在脚下展开——夜色中像一幅水墨画。大部分灯火已灭，只有几处还亮着。`);
  narrate(`你注意到两个异常：镇西废弃祠堂的方向有一道极微弱的蓝光在闪烁——不像是灯火，更像某种荧光。药铺方向灯火通明——胡青娘的药铺在深夜还亮着，你看到她的身影在窗前移动，似乎在研磨什么。`);
  setFlag('rooftop_observations');
  G.wits += 2;
  divider();
  showChoices([{ text: '回去', id: 'lobby_free', next: SCENES['lobby_free'] }]);
};
SCENES['night_hu_qingniang'] = () => {
  G.scene = 'outside';
  narrate(`你来到药铺门前。门没锁——推开后一股浓烈的草药味扑面而来。胡青娘正背对着你，在药柜前忙碌。她穿着一身灰色布衣，头发挽成一个髻，动作麻利地用小秤称量药材。`);
  dialog('hu_qingniang', '……你来了。我等你很久了。');
  narrate(`她转过身——她的脸让你微微吃惊。三十多岁，清秀但疲惫，眼底有深深的阴影。她看着你，嘴角浮现一丝苦笑。`);
  dialog('hu_qingniang', '别惊讶。沈孤雁跟我说过会有人来。他说那个人会在深夜来找我。坐吧——我给你配一剂安神药。接下来的日子，你会需要它的。');
  setFlag('met_hu_qingniang');
  changeRel('hu_qingniang', 5);
  divider();
  showChoices([{ text: '继续', id: 'lobby_free', next: SCENES['lobby_free'] }]);
};
