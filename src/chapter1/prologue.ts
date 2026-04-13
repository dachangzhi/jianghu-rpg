/// <reference path="../types.ts" />
// story_part19.js - 开场前传扩写
SCENES['prologue_road_rain'] = () => {
  G.scene = 'prologue_road';
  clearStory();
  narrate(`你已经在山路上走了整整四个时辰。雨势大到无法忽视，雨水顺着斗笠边缘滴落，打在包袱上发出沉闷声响。脚下泥浆没脚，裤脚湿透贴腿，山风裹松针湿土味。远处山涧水声轰隆。你的肚子又叫了一声。透过雨幕，你看到远处暖黄色灯火——那就是${hl('苍龙镇')}。贩盐妇人叮嘱过：「到了苍龙镇，就住${hl('龙凤客栈')}。」`);
  divider();
  showChoices([
    { text: '加快脚步赶路', id: 'prologue_rush', next: SCENES['prologue_rush'] },
    { text: '观察环境', id: 'prologue_observe', next: SCENES['prologue_observe'] },
    { text: '找避雨处', id: 'prologue_shelter', next: SCENES['prologue_shelter'] },
  ]);
};
SCENES['prologue_rush'] = () => {
  G.scene = 'prologue_road';
  narrate(`你咬牙加快步伐。泥水四溅冷雨如针。下山差点滑倒但你没停——灯火意味着火炉干床热汤。山路最后拐弯变石板路。苍龙镇到了。`);
  setFlag('rushed_to_town');
  divider();
  showChoices([{ text: '寻找客栈', id: 'prologue_find_inn', next: SCENES['prologue_find_inn'] }]);
};
SCENES['prologue_observe'] = () => {
  G.scene = 'prologue_road';
  narrate(`山路边缘有深脚印——一个特别大。旁边拖痕延伸到悬崖消失。老松树刻着圆圈五角星符号，刻痕很新。不是普通路标。`);
  setFlag('observed_cliff_tracks');
  G.wits += 1;
  divider();
  showChoices([{ text: '前往镇上', id: 'prologue_find_inn', next: SCENES['prologue_find_inn'] }]);
};
SCENES['prologue_shelter'] = () => {
  G.scene = 'prologue_road';
  narrate(`你在岩石裂缝避雨。两个人影穿深色斗篷从山下来。你缩进深处。他们经过时你隐约听到：${hl('"……天机……交接……"')}。半个时辰后到了苍龙镇。`);
  setFlag('overheard_tianji');
  G.wits += 2;
  divider();
  showChoices([{ text: '寻找客栈', id: 'prologue_find_inn', next: SCENES['prologue_find_inn'] }]);
};
SCENES['prologue_find_inn'] = () => {
  G.scene = 'prologue_town';
  narrate(`苍龙镇不大。街道尽头酒旗：${hl('"龙凤客栈"')}。门半开，温暖灯光泻出，饭菜香扑鼻。你推开门。`);
  divider();
  showChoices([{ text: '走进客栈', id: 'prologue_enter_inn', next: SCENES['prologue_enter_inn'] }]);
};
SCENES['prologue_enter_inn'] = () => {
  G.scene = 'prologue_inn';
  narrate(`暖意裹住你。大堂三丈见方。柜台油光发亮，山水画落款${hl('"丙子年秋，孤雁题"')}。酒架有女儿红烧刀子药酒。四张方桌残棋。壁炉火烧正旺上方交叉短剑。空气混合松木烟香酒味饭菜香草药味。`);
  divider();
  showChoices([
    { text: '观察人', id: 'prologue_observe_npcs', next: SCENES['prologue_observe_npcs'] },
    { text: '走向柜台', id: 'prologue_shen_intro', next: SCENES['prologue_shen_intro'] },
    { text: '去壁炉旁', id: 'prologue_fireplace', next: SCENES['prologue_fireplace'] },
  ]);
};
SCENES['prologue_observe_npcs'] = () => {
  G.scene = 'prologue_inn';
  narrate(`四个人。柜台后四十岁蓝布长衫男，手指有剑茧。壁炉旁${hl('大个子')}像座小山五空酒坛。旁边${hl('书生')}装醉但眼神偶尔锐利。${hl('窗边女人')}暗红衣裙坐的位置能看到每个角落。`);
  setFlag('observed_npcs_before_approach');
  G.wits += 1;
  divider();
  showChoices([
    { text: '走向柜台', id: 'prologue_shen_intro', next: SCENES['prologue_shen_intro'] },
    { text: '去壁炉旁', id: 'prologue_fireplace', next: SCENES['prologue_fireplace'] },
    { text: '走向窗边', id: 'prologue_liu_intro', next: SCENES['prologue_liu_intro'] },
  ]);
};
SCENES['prologue_shen_intro'] = () => {
  G.scene = 'prologue_inn';
  narrate(`你走向柜台。男人抬头微笑倒茶。`);
  dialog('shen_guyan', '外面雨大吧？先喝茶。在下沈孤雁，客栈老板。怎么称呼？');
  narrate(`他的手指有剑茧。客栈老板的手不该这样。`);
  changeRel('shen_guyan', 3);
  divider();
  showChoices([
    { text: '报名字', id: 'prologue_give_name', next: SCENES['prologue_give_name'] },
    { text: '不说真名', id: 'prologue_hide_name', next: SCENES['prologue_hide_name'] },
  ]);
};
SCENES['prologue_give_name'] = () => {
  G.scene = 'prologue_inn';
  narrate(`你报了名字。他点头递钥匙。上房二两，普通房一两。`);
  setFlag('gave_real_name');
  changeRel('shen_guyan', 2);
  divider();
  showChoices([
    { text: '上房', id: 'prologue_rg', effects: () => { setFlag('room_quality', 'good'); }, next: SCENES['prologue_room_assigned'] },
    { text: '普通房', id: 'prologue_rb', effects: () => { setFlag('room_quality', 'basic'); }, next: SCENES['prologue_room_assigned'] },
  ]);
};
SCENES['prologue_hide_name'] = () => {
  G.scene = 'prologue_inn';
  narrate(`你含糊应付。他没追问。上房二两，普通房一两。`);
  divider();
  showChoices([
    { text: '上房', id: 'prologue_rg2', effects: () => { setFlag('room_quality', 'good'); }, next: SCENES['prologue_room_assigned'] },
    { text: '普通房', id: 'prologue_rb2', effects: () => { setFlag('room_quality', 'basic'); }, next: SCENES['prologue_room_assigned'] },
  ]);
};
SCENES['prologue_fireplace'] = () => {
  G.scene = 'prologue_inn';
  narrate(`你在壁炉前坐下。温暖渗入骨骼。壁炉上方短剑防滑绳磨光滑。大个子冲你举碗。`);
  dialog('zhao_tieniu', '嘿兄弟！赵铁牛请你喝酒！');
  narrate(`书生被震抬头又趴回，但手指微动——习武之人戒备。`);
  changeRel('zhao_tieniu', 2);
  divider();
  showChoices([
    { text: '喝他的酒', id: 'prologue_drink_zhao', next: SCENES['prologue_drink_zhao'] },
    { text: '走向柜台', id: 'prologue_shen_intro', next: SCENES['prologue_shen_intro'] },
  ]);
};
SCENES['prologue_drink_zhao'] = () => {
  G.scene = 'prologue_inn';
  narrate(`你灌口烧酒入喉如火。赵铁牛大笑。他递鸡腿时手上动作极快——喝五坛酒还矫健绝非普通人。`);
  setFlag('drank_zhao_wine');
  changeRel('zhao_tieniu', 5);
  divider();
  showChoices([{ text: '去开房', id: 'prologue_shen_intro', next: SCENES['prologue_shen_intro'] }]);
};
SCENES['prologue_liu_intro'] = () => {
  G.scene = 'prologue_inn';
  narrate(`你走向窗边。暗红衣裙女人端凉茶。她脸精致冷冽眼睛深棕带金圈。桌上折扇有暗器机括。`);
  dialog('liu_ruyin', '……有什么事？');
  narrate(`三个字。没有寒暄。`);
  changeRel('liu_ruyin', 2);
  divider();
  showChoices([{ text: '去开房', id: 'prologue_shen_intro', next: SCENES['prologue_shen_intro'] }]);
};
SCENES['prologue_room_assigned'] = () => {
  G.scene = 'prologue_inn';
  narrate(`沈孤雁递来钥匙。墙上字：${hl('"江湖夜雨十年灯，桃李春风一杯酒。"')}落款只余"雁"字。窗边女人已不在。`);
  setFlag('got_room_key');
  divider();
  showChoices([
    { text: '上楼', id: 'prologue_upstairs', next: SCENES['prologue_upstairs'] },
    { text: '在大堂转转', id: 'prologue_explore_lobby', next: SCENES['prologue_explore_lobby'] },
  ]);
};
SCENES['prologue_upstairs'] = () => {
  G.scene = 'prologue_upstairs';
  narrate(`你上楼回房。干净。放下包袱短刀压枕下。窗外风里带火药味。铜锣响——开饭。`);
  setFlag('explored_upstairs');
  divider();
  showChoices([{ text: '下楼吃饭', id: 'prologue_dinner', next: SCENES['prologue_dinner'] }]);
};
SCENES['prologue_explore_lobby'] = () => {
  G.scene = 'prologue_inn';
  narrate(`书架有本草纲目孙子兵法洗冤集录，还有密码手抄本。柜台后有上锁小门。台面有钥匙轮廓凹槽。`);
  setFlag('explored_lobby_details');
  G.wits += 1;
  divider();
  showChoices([{ text: '吃饭', id: 'prologue_dinner', next: SCENES['prologue_dinner'] }]);
};
SCENES['prologue_dinner'] = () => {
  G.scene = 'prologue_inn';
  narrate(`红烧肉清蒸鱼蛋花汤。赵铁牛盯肉放光白云生被拉到桌旁。饭后沈孤雁说：「天黑后不要出门。这是苍龙镇的规矩。」`);
  setFlag('had_first_dinner');
  setFlag('warned_curfew');
  divider();
  showChoices([{ text: '上楼休息', id: 'prologue_bed', next: SCENES['prologue_bed'] }]);
};
SCENES['prologue_bed'] = () => {
  G.scene = 'prologue_bedroom';
  narrate(`你关好门闩换干衣。窗外雨声。苍龙镇第一夜。`);
  setFlag('first_night');
  divider();
  showChoices([{ text: '入睡', id: 'lobby_free', next: SCENES['lobby_free'] }]);
};
