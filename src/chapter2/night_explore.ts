/// <reference path="../types.ts" />
// story_part14.js - 夜间探索扩写

// ---- 夜间街道区域 ----
SCENES['night_street_east'] = () => {
  G.scene = 'night_street_east';
  G.location = '苍龙镇·东街';
  narrate(`你沿着东街慢慢走着。\n\n月光下的东街和白天完全不同。白天的喧嚣和热闹消失了——取而代之的是一种古老的寂静。石板路在月光下泛着青白色的光，像一条沉睡的河流。\n\n左边是赵铁牛的铁匠铺——炉火灭了，但你能感受到墙壁里残留的热度。铺子的门板上钉着一块木牌，上面歪歪扭扭地写着「赵记铁器」，字迹很丑——显然是赵铁牛自己刻的。\n\n右边是一排已经关门的店铺：布庄、油坊、粮店。每一家门口都挂着已经熄灭的灯笼，灯笼纸在夜风中轻轻摇曳。\n\n街角有一棵老槐树——树干粗到两个人才能合抱。树下面有一口石井，井盖半掩着。你凑近看了看——井水很深，月光在水面上映出一个银色的圆点。\n\n东街的尽头是一个丁字路口——往北通向镇外的山路，往南通向居民区。路口竖着一块石碑，上面刻着「苍龙镇」三个字。石碑的背面长满了青苔——如果你伸手拨开青苔，会看到下面还有一行小字：${hl('「大明洪武十七年立」')}\n\n六百年的老镇。`);
  divider();
  setFlag('explored_east_street');
  G.wits += 1;
  showChoices([
    { text: '继续探索', id: 'nse_cont', next: SCENES['night_town_hub'] },
    { text: '去铁匠铺', id: 'nse_bs', next: SCENES['night_blacksmith_full'] },
  ]);
};

SCENES['night_street_west'] = () => {
  G.scene = 'night_street_west';
  G.location = '苍龙镇·西街';
  narrate(`西街比东街更安静——也更阴森。\n\n月光在这里被两侧高耸的屋檐挡住了大半，只在石板路上投下窄窄的一条银线。\n\n左手边是胡青娘的药铺——铺子的门关得严严实实，但你能闻到一股淡淡的药香从门缝里飘出来。不是白天那种温和的草药味，而是一种更浓烈、更刺鼻的气味。\n\n右手边是一座废弃的老宅——门板已经烂了一半，院子里长满了杂草。但奇怪的是——废宅的门口放着一双鞋。一双干净的、整齐摆放的鞋。\n\n${hl('有人住在这里？还是有人经常来这里？')}\n\n西街的尽头是一座小小的土地庙——庙不大，只有半人高，但打理得很干净。供桌上摆着三炷香——还在燃着，香灰还没有落完。\n\n${danger('有人在深夜来这里上香。')}\n\n你看了看香——不是普通的香。闻到了一股淡淡的药材味——和药铺里飘出来的味道一样。`);
  divider();
  setFlag('explored_west_street');
  G.wits += 2;
  showChoices([
    { text: '去药铺', id: 'nsw_ph', next: SCENES['night_pharmacy_full'] },
    { text: '查看废宅', id: 'nsw_mh', effects: () => { G.wits += 2; setFlag('explored_abandoned_house'); }, next: SCENES['night_abandoned_house'] },
    { text: '回去', id: 'nsw_bk', next: SCENES['night_town_hub'] },
  ]);
};

SCENES['night_street_south'] = () => {
  G.scene = 'night_street_south';
  G.location = '苍龙镇·南街';
  narrate(`南街是苍龙镇最热闹的地方——至少白天是这样。\n\n晚上，南街变成了另一副模样。李婶的茶馆半开着门——里面透出昏黄的灯光。茶馆旁边的戏台子空荡荡的，白天贴着的戏报在夜风中哗哗作响。\n\n一棵歪脖子柳树下有一个棋盘——石制的，固定在地上。棋盘上还有残局——黑子和白子交错，看起来是下到一半就停了。你看了看布局——白子只剩一口气了。\n\n棋盘旁边的石凳上放着一个茶杯——杯里还有半杯茶。茶已经凉了。\n\n继续往南走，是镇上的集市——白天摆满了摊位的地方。现在空荡荡的，只有几根竹竿还插在地上。\n\n集市的尽头是一座小桥——桥下是一条水渠，把苍龙河的水引到了镇上的稻田里。\n\n桥的另一边是居民区——一排排低矮的瓦房，大部分都已经熄灯了。只有几户人家的窗户里还亮着微弱的烛光。\n\n其中一户——门口挂着一盏红灯笼。灯笼上写着一个字：${danger('「奠」')}\n\n有人在守灵。`);
  divider();
  setFlag('explored_south_street');
  G.wits += 2;
  showChoices([
    { text: '去茶馆', id: 'nss_tea', next: SCENES['night_teahouse_full'] },
    { text: '去看看守灵的人家', id: 'nss_mourn', effects: () => { G.wits += 1; setFlag('visited_mourning'); }, next: SCENES['night_mourning_house'] },
    { text: '回去', id: 'nss_bk', next: SCENES['night_town_hub'] },
  ]);
};

SCENES['night_street_north'] = () => {
  G.scene = 'night_street_north';
  G.location = '苍龙镇·北街';
  narrate(`北街通向河边。\n\n越往北走，空气越湿润——河水的气息越来越浓。街道两旁的房屋渐渐稀疏了，取而代之的是一片片竹林和柳树林。\n\n月光在竹林间投下斑驳的影子——风吹过时，影子像活的一样在地上游动。\n\n路边有一座小小的石桥——桥栏杆上长满了青苔。桥下是一条溪流——不是苍龙河，而是从山上流下来的泉水。\n\n过了石桥，视野豁然开朗——苍龙河就在眼前了。\n\n月光下的苍龙河像一条银色的缎带，从西向东缓缓流淌。河面上偶尔有鱼跳出水面——「啪」的一声，溅起一片水花。\n\n河边的柳树下——有一个人的轮廓。\n\n老孙头。他还在那里。\n\n${danger('但是——他身边还有一个人。')}\n\n老孙头的态度很恭敬——他在朝那个人低头。`);
  divider();
  setFlag('explored_north_street');
  setFlag('spotted_sun_with_stranger');
  G.wits += 3;
  showChoices([
    { text: '靠近偷听', id: 'nsn_ea', effects: () => { G.wits += 3; setFlag('overheard_sun_stranger'); }, next: SCENES['night_sun_stranger'] },
    { text: '躲在竹林里观察', id: 'nsn_hd', effects: () => { G.wits += 2; }, next: SCENES['night_sun_hide'] },
    { text: '回去', id: 'nsn_bk', next: SCENES['night_town_hub'] },
  ]);
};

// ---- 废宅探索 ----
SCENES['night_abandoned_house'] = () => {
  G.scene = 'night_abandoned_house';
  narrate(`你推开了废宅半掩的门。\n\n门轴发出一声刺耳的吱呀声。你走了进去。\n\n正房里不是废墟——而是一个被精心布置过的房间。地面被打扫得干干净净，墙上挂着几幅字画——笔法非常老练。\n\n房间正中摆着一张方桌——桌上放着一只铜香炉、一叠黄纸、一支毛笔、还有一瓶墨汁。\n\n${hl('这不是废宅——这是某人的秘密工作室。')}\n\n黄纸上画着复杂的图案——机关术。还有一张苍龙镇的地下通道图。\n\n${danger('苍龙镇地下有通道。')}\n\n忽然听到门外传来脚步声——有人来了。\n\n你灭了火折子，躲到桌子下面。\n\n门被推开了——一双黑色布鞋走了进来。\n\n「出来吧。」一个女人的声音。冷静、沉着。\n\n${hl('是胡青娘。')}\n\n「黄纸的顺序被调过了——第三张和第四张反了。」`);
  divider();
  setFlag('found_secret_workshop');
  setFlag('found_tunnel_map');
  G.wits += 5;
  showChoices([
    { text: '站出来', id: 'nah_rv', next: SCENES['night_hu_workshop'] },
    { text: '继续躲着', id: 'nah_hd', effects: () => { G.wits += 1; }, next: SCENES['night_hu_workshop'] },
  ]);
};

// ---- 胡青娘工作室 ----
SCENES['night_hu_workshop'] = () => {
  G.scene = 'night_hu_workshop';
  narrate(`你从桌子下面钻了出来。\n\n胡青娘举着灯笼看着你——然后露出了一种「果然如此」的笑容。\n\n「新来的人——总是最好奇的。」\n\n「这个地方是你的？」\n\n「白天的药铺是我的明面，这个废宅是我的暗面。」\n\n她指了指桌上的黄纸：「我在研究石室的机关。落雁峰的石室——有三道门。每道门的机关都不同。我用了三年时间才破解了第一道门的开法。」\n\n${danger('她知道天机卷。')}\n\n「我和沈孤雁是同门。」她说，「你以为只有他知道天机卷的事？」\n\n她从怀里取出一样东西——一块碧绿色的玉牌。上面刻着一只展翅的大雁。\n\n「这是打开石室第二道门的钥匙。沈孤雁有第一块，我有第二块。第三块——在一个你意想不到的人手里。」`);
  divider();
  setFlag('hu_revealed_workshop');
  setFlag('saw_hu_jade');
  changeRel('hu_qingniang', 5);
  G.wits += 3;
  showChoices([
    { text: '「第三块在谁手里？」', id: 'nhw_3rd', effects: () => { G.wits += 2; }, next: SCENES['night_hu_third_jade'] },
    { text: '「你为什么信任我？」', id: 'nhw_tr', effects: () => { changeRel('hu_qingniang', 3); G.charm += 2; }, next: SCENES['night_hu_why_trust'] },
    { text: '「机关图……你画了三年？」', id: 'nhw_mc', next: SCENES['night_hu_mechanism'] },
  ]);
};

SCENES['night_hu_third_jade'] = () => {
  G.scene = 'night_hu_third_jade';
  narrate(`胡青娘微微一笑。\n\n「你觉得会是谁？」\n\n你想了想：「不是赵铁牛——他太直了。也不是柳如烟——她是外来者。小莲年纪太小。老孙头……不像。」\n\n「那你觉得是谁？」\n\n「白云生。」\n\n胡青娘的笑意更深了。\n\n「聪明。白云生手里确实有第三块玉牌。但他自己不知道——他以为那只是老师白太傅留给他的遗物。一块普通的玉佩。」\n\n「你怎么知道？」\n\n「三年前他刚来苍龙镇——喝醉了——玉佩从他怀里掉了出来。我看到了上面的雁纹。」\n\n「你为什么没有直接拿走？」\n\n「三块玉牌必须同时使用才能打开石室。而且——使用玉牌的人必须得到守护者的认可。强行拿走的玉牌是没有用的。」\n\n「所以——我们需要白云生自愿交出那块玉牌。而要让一个醉鬼自愿交出他老师的遗物——」她摇了摇头，「比破解机关还难。」`);
  divider();
  setFlag('know_bai_has_jade');
  G.wits += 3;
  showChoices([
    { text: '「也许我可以说服他。」', id: 'nhj_ps', effects: () => { G.charm += 2; }, next: SCENES['night_town_hub'] },
    { text: '继续探索', id: 'nhj_ex', next: SCENES['night_town_hub'] },
  ]);
};

SCENES['night_hu_why_trust'] = () => {
  G.scene = 'night_hu_why_trust';
  narrate(`胡青娘看着你，目光深邃。\n\n「信任？在苍龙镇——没有人会真正信任一个刚来一天的外来者。」\n\n「那你为什么告诉我这些？」\n\n「因为你今晚走进了这个房间。这说明两件事：你够大胆，也够细心。这两个品质同时出现在一个人身上——很少见。」\n\n「所以我决定赌一把。把你当朋友——或者当敌人——都是以后的事。但现在——苍龙镇需要一个站对边的人。」\n\n「你站在哪边？」\n\n「哪边是对的，我就站在哪边。」\n\n她沉默了几秒钟——然后第一次露出了真诚的笑容。\n\n「好答案。沈孤雁的眼光果然不差。」`);
  divider();
  changeRel('hu_qingniang', 8);
  showChoices([
    { text: '告辞', id: 'nhwt_lv', next: SCENES['night_town_hub'] },
  ]);
};

SCENES['night_hu_mechanism'] = () => {
  G.scene = 'night_hu_mechanism';
  narrate(`胡青娘拿起一张黄纸——上面画着石室第一道门的机关图。\n\n「石室的第一道门——是机械锁。门后面有七根铁栓，每根铁栓对应一个齿轮。用声音控制——特定的声音频率会让齿轮转动。你需要在石台上敲出正确的节奏。」\n\n她掏出一张小纸条：「宫商角徵羽变宫变商——对应的音阶是1、2、3、5、6、7、1。」\n\n「这是天机阁历代守护者传下来的暗号。」\n\n「你为什么告诉我？」\n\n「因为我跟沈孤雁不一样。他等到确认了才行动。而我——喜欢先行动，再确认。」\n\n她把那张黄纸递给你。「拿去。也许用得上。」`);
  divider();
  setFlag('got_mechanism_info');
  G.wits += 3;
  showChoices([
    { text: '收下黄纸', id: 'nhm_tk', effects: () => { setFlag('has_mechanism_map'); }, next: SCENES['night_town_hub'] },
    { text: '「你不怕我拿去给暗星阁？」', id: 'nhm_dg', effects: () => { changeRel('hu_qingniang', 3); }, next: SCENES['night_town_hub'] },
  ]);
};

// ---- 铁匠铺夜访 ----
SCENES['night_blacksmith_full'] = () => {
  G.scene = 'night_blacksmith_full';
  G.location = '赵记铁器铺';
  narrate(`你走到铁匠铺的后门——敲了三下。\n\n「谁？」赵铁牛的声音从里面传来——带着一种警觉。\n\n「是我。」\n\n门开了——赵铁牛看到是你，表情松弛了下来。\n\n「大半夜的——你怎么来了？」\n\n「睡不着。」\n\n他让你进去。后屋比想象的整洁——一张木床、一个柜子、一张桌子。墙上挂着几件兵器——做工粗糙，但古朴有力。\n\n桌上放着一盏油灯和一壶酒。\n\n「坐吧。睡不着的时候就喝酒——军中学的。」\n\n他给你倒了一碗酒。\n\n「你大半夜来找我——不只是睡不着吧？」`);
  divider();
  setFlag('visited_zhao_night');
  changeRel('zhao_tieniu', 3);
  showChoices([
    { text: '「赵大哥，你在北疆待了多少年？」', id: 'nbf_mil', next: SCENES['zhao_military_story'] },
    { text: '「我能看看你的地窖吗？」', id: 'nbf_cel', next: SCENES['zhao_cellar'] },
    { text: '「你对沈孤雁了解多少？」', id: 'nbf_sh', next: SCENES['zhao_about_shen'] },
    { text: '「没什么，就想找人说话。」', id: 'nbf_ch', effects: () => { changeRel('zhao_tieniu', 5); G.charm += 2; }, next: SCENES['zhao_night_chat'] },
  ]);
};

// ---- 赵铁牛军旅故事 ----
SCENES['zhao_military_story'] = () => {
  G.scene = 'zhao_military_story';
  narrate(`赵铁牛靠在椅背上。\n\n「十二年。从十七岁到二十九岁。最好的年华全给了北疆。」\n\n他拿起桌上的一个旧铁盒——盒盖上刻着一个「赵」字。打开盒盖，里面放着：一枚铜质军牌、一块褪色的红布、一封发黄的信。\n\n「这是我的军牌。」他递给你看。铜牌上刻着：「北疆左营第三哨·赵铁牛·兵字号」。\n\n「这个红布——是我小队十二个人每人一条。谁活着回去，就把所有红布都带回去。」\n\n他的声音低了下去。\n\n「十二个人——只有我活着回来了。」\n\n他拿起那封信。\n\n「这是我娘写给我的最后一封信。她不识字——是求村里教书先生代写的。她说：${hl('「铁牛啊，家里一切都好，不用惦记。你在军中好好干，争取立个功回来。你爹的腰不好了，但他说不让你回来种地——种地没出息。」')}」\n\n他把信放回盒子。\n\n「我没立功。我只是活着回来了。连一等地都没分到——因为我的腿。」他拍了拍自己的左腿，「撤退的时候被箭射穿了膝盖。军医说能保住命就不错了。」`);
  divider();
  setFlag('zhao_military_full');
  G.wits += 2;
    showChoices([
    { text: '那十七个弟兄是怎么死的', id: 'zms_17', effects: () => { G.wits += 2; setFlag('zhao_told_17'); }, next: SCENES['zhao_17_brothers'] },
    { text: '你是怎么来苍龙镇的', id: 'zms_cg', next: SCENES['zhao_canglong_story'] },
    { text: '沉默喝酒', id: 'zms_dr', effects: () => { changeRel('zhao_tieniu', 5); }, next: SCENES['night_town_hub'] },
  ]);
};

SCENES['zhao_17_brothers'] = () => {
  G.scene = 'zhao_17_brothers';
  narrate('赵铁牛拿出一张纸——上面写着十七个名字。他们不是战死的——是冻死的。军需官贪污了冬衣银子。他一直在找那个军需官讨公道。');
  divider();
  setFlag('zhao_17_names');
  changeRel('zhao_tieniu', 8);
  showChoices([
    { text: '我帮你', id: 'z17_h', effects: () => { changeRel('zhao_tieniu', 10); setFlag('promised_zhao_justice'); G.charm += 3; }, next: SCENES['zhao_cellar_offer'] },
    { text: '军需官叫什么', id: 'z17_n', effects: () => { G.wits += 3; setFlag('asked_quartermaster_name'); }, next: SCENES['zhao_cellar_offer'] },
  ]);
};

SCENES['zhao_canglong_story'] = () => {
  G.scene = 'zhao_canglong_story';
  narrate('赵铁牛说：从北疆回来后遇到沈孤雁，就这样当了铁匠。但他从未忘记那十七个弟兄。');
  divider();
  changeRel('zhao_tieniu', 5);
  showChoices([
    { text: '告辞', id: 'zcs_b', next: SCENES['zhao_cellar_offer'] },
  ]);
};

SCENES['zhao_about_shen'] = () => {
  G.scene = 'zhao_about_shen';
  narrate('赵铁牛说：沈孤雁跟他喝了一百次酒从没醉过。每月十五都消失一整夜，回来衣服上有泥——只有落雁峰能弄一身泥。');
  divider();
  setFlag('zhao_told_shen_disappears');
  G.wits += 2;
  showChoices([{ text: '继续', id: 'zas_c', next: SCENES['night_town_hub'] }]);
};

SCENES['zhao_night_chat'] = () => {
  G.scene = 'zhao_night_chat';
  narrate('赵铁牛说：如果有朝一日需要出力就说话。打铁的手——杀人也够用。你们碰碗痛饮。');
  divider();
  changeRel('zhao_tieniu', 8);
  setFlag('zhao_loyalty_pledge');
  showChoices([{ text: '告辞', id: 'znc_b', next: SCENES['night_town_hub'] }]);
};

SCENES['night_teahouse_full'] = () => {
  G.scene = 'night_teahouse_full';
  G.location = '李婶茶馆';
  narrate('你推开茶馆半掩的门。李婶在柜台后面——目光锐利。她给你倒了杯老白茶。');
  divider();
  setFlag('found_li_spy');
  showChoices([
    { text: '你是做什么的', id: 'ntf_w', next: SCENES['li_identity_reveal'] },
    { text: '买情报', id: 'ntf_b', next: SCENES['li_intel_shop'] },
  ]);
};

SCENES['li_identity_reveal'] = () => {
  G.scene = 'li_identity_reveal';
  narrate('李婶说：二十年茶馆老板，听过了所有人的闲话。我是一个情报贩子。情报换情报。');
  divider();
  setFlag('li_revealed');
  showChoices([{ text: '买情报', id: 'lir_b', next: SCENES['li_intel_shop'] }]);
};

SCENES['li_intel_shop'] = () => {
  G.scene = 'li_intel_shop';
  narrate('李婶拿出小本子。甲等五十两：沈孤雁身份、天机卷藏处、暗星阁动向。乙等二十两：柳如烟任务、白云生调查、胡青娘过往、赵铁牛军旅、老孙头来历。丙等五两：小莲母亲之死、地下通道、月圆异象。');
  divider();
  showChoices([
    { text: '买甲等', id: 'lis_a', effects: () => { G.wits += 5; setFlag('bought_a_intel'); }, next: SCENES['li_intel_a'] },
    { text: '买乙等', id: 'lis_b', effects: () => { G.wits += 3; setFlag('bought_b_intel'); }, next: SCENES['li_intel_b'] },
    { text: '买丙等', id: 'lis_c', effects: () => { G.wits += 1; setFlag('bought_c_intel'); }, next: SCENES['li_intel_c'] },
    { text: '没钱', id: 'lis_p', next: SCENES['li_intel_trade'] },
  ]);
};

SCENES['li_intel_a'] = () => {
  G.scene = 'li_intel_a';
  narrate('沈孤雁真名不详，每月十五消失。暗星阁已有三人镇外徘徊三个月。');
  divider();
  showChoices([{ text: '继续', id: 'lia_c', next: SCENES['night_town_hub'] }]);
};

SCENES['li_intel_b'] = () => {
  G.scene = 'li_intel_b';
  narrate('柳如烟来镇第一天就去落雁峰。白云生三年装醉但酒从不咽。胡青娘和沈孤雁明显认识。赵铁牛来镇第一天打了一架。老孙头带了个女人来又消失了。');
  divider();
  showChoices([{ text: '继续', id: 'lib_c', next: SCENES['night_town_hub'] }]);
};

SCENES['li_intel_c'] = () => {
  G.scene = 'li_intel_c';
  narrate('小莲母亲溺亡但手腕有勒痕。苍龙镇地下有通道连通客栈药铺落雁峰。月圆之夜落雁峰有宝石般反光。');
  divider();
  setFlag('know_xiaolian_mother_murder');
  showChoices([{ text: '继续', id: 'lic_c', next: SCENES['night_town_hub'] }]);
};

SCENES['li_intel_trade'] = () => {
  G.scene = 'li_intel_trade';
  narrate('李婶说：用情报换情报。告诉我你今天的观察——我给你免费情报。');
  divider();
  showChoices([
    { text: '告诉她', id: 'lit_t', effects: () => { G.wits += 2; setFlag('traded_intel_with_li'); }, next: SCENES['li_trade_reward'] },
    { text: '拒绝', id: 'lit_r', next: SCENES['night_town_hub'] },
  ]);
};

SCENES['li_trade_reward'] = () => {
  G.scene = 'li_trade_reward';
  narrate('李婶给你一张苍龙镇地下通道图。入口在客栈后院锁着的小门后。通到落雁峰石室。');
  divider();
  setFlag('got_tunnel_map_li');
  G.wits += 5;
  showChoices([{ text: '告辞', id: 'ltr_b', next: SCENES['night_town_hub'] }]);
};

SCENES['night_sun_stranger'] = () => {
  G.scene = 'night_sun_stranger';
  narrate('你躲在河边大石头后偷听。陌生人说时间不多了，他们已到镇外。老孙头在守着什么。他们知道你来了。');
  divider();
  setFlag('overheard_sun_secret');
  G.wits += 3;
  showChoices([
    { text: '继续偷听', id: 'nss_e', effects: () => { G.wits += 2; setFlag('sun_full_overhear'); }, next: SCENES['night_sun_full'] },
    { text: '撤退', id: 'nss_r', next: SCENES['night_town_hub'] },
  ]);
};

SCENES['night_sun_full'] = () => {
  G.scene = 'night_sun_full';
  narrate('陌生人问玉牌还在不在。让老孙头守河边入口拦住接近落雁峰的人。然后朝落雁峰方向离去。');
  divider();
  setFlag('sun_guarding_river');
  G.wits += 5;
  showChoices([{ text: '回去', id: 'nsf_r', next: SCENES['night_town_hub'] }]);
};

SCENES['night_sun_hide'] = () => {
  G.scene = 'night_sun_hide';
  narrate('你躲在竹林里。陌生人和老孙头交谈后离去。老孙头掏出玉看了看，又拿起没有鱼线的鱼竿。他不是在钓鱼——在守着什么。');
  divider();
  setFlag('sun_river_guard');
  G.wits += 2;
  showChoices([{ text: '回去', id: 'nsh_r', next: SCENES['night_town_hub'] }]);
};

SCENES['night_mourning_house'] = () => {
  G.scene = 'night_mourning_house';
  narrate('守灵妇人说丈夫张永年是木匠，三天前心疾猝死。苍龙镇唯一的木匠。');
  divider();
  setFlag('visited_mourning_house');
  G.wits += 2;
  showChoices([
    { text: '了解详情', id: 'nmh_d', effects: () => { G.wits += 3; setFlag('carpenter_death_suspicious'); }, next: SCENES['night_mourning_detail'] },
    { text: '告辞', id: 'nmh_l', next: SCENES['night_town_hub'] },
  ]);
};

SCENES['night_mourning_detail'] = () => {
  G.scene = 'night_mourning_detail';
  narrate('妇人说丈夫死前那天回来得晚——去修了客栈的桌子。但工具箱少了一把凿子。');
  divider();
  setFlag('carpenter_mystery');
  G.wits += 3;
  showChoices([{ text: '告辞', id: 'nmd_l', next: SCENES['night_town_hub'] }]);
};

SCENES['night_pharmacy_full'] = () => {
  G.scene = 'night_pharmacy_full';
  G.location = '济世堂药铺';
  narrate('药铺关着门但亮着灯。浓烈药香从门缝飘出。');
  divider();
  showChoices([
    { text: '前门敲门', id: 'npf_d', next: SCENES['pharmacy_enter_door'] },
    { text: '后院侧门', id: 'npf_s', effects: () => { G.wits += 2; setFlag('pharmacy_side_entry'); }, next: SCENES['pharmacy_enter_side'] },
    { text: '屋顶天窗', id: 'npf_r', effects: () => { G.wits += 3; setFlag('pharmacy_roof_spy'); }, next: SCENES['pharmacy_enter_roof'] },
  ]);
};

SCENES['pharmacy_enter_door'] = () => {
  G.scene = 'pharmacy_enter_door';
  narrate('你敲门。胡青娘让你进去。她在铜炉前忙碌——煮着深绿色液体。她说在炼解毒药，三天前有人中了断肠红。');
  divider();
  setFlag('pharmacy_door_enter');
  G.wits += 2;
  showChoices([
    { text: '中毒者是谁', id: 'ped_w', effects: () => { G.wits += 2; setFlag('asked_poison_victim'); }, next: SCENES['pharmacy_poison_victim'] },
    { text: '看看药铺', id: 'ped_l', next: SCENES['pharmacy_poison_victim'] },
  ]);
};

SCENES['pharmacy_enter_side'] = () => {
  G.scene = 'pharmacy_enter_side';
  narrate('你从侧门进入。走廊尽头——胡青娘面前是一整面墙的暗格，全是毒药。她转过身平静地说：看够了吗？');
  divider();
  setFlag('pharmacy_poison_wall');
  G.wits += 5;
  showChoices([
    { text: '继续', id: 'pes_c', next: SCENES['pharmacy_poison_victim'] },
  ]);
};

SCENES['pharmacy_enter_roof'] = () => {
  G.scene = 'pharmacy_enter_roof';
  narrate('你从天窗看到胡青娘在用断肠草炼药。柜台暗格里有碧绿玉牌。她说：下来吧，我听到屋顶有人了。');
  divider();
  setFlag('pharmacy_roof_saw');
  setFlag('saw_hu_jade');
  G.wits += 3;
  showChoices([
    { text: '下去', id: 'per_d', next: SCENES['pharmacy_poison_victim'] },
    { text: '离开', id: 'per_l', next: SCENES['night_town_hub'] },
  ]);
};

SCENES['pharmacy_poison_victim'] = () => {
  G.scene = 'pharmacy_poison_victim';
  narrate('胡青娘说：三天前木匠张永年来找她——他在客栈桌腿暗格里发现了暗星阁的联络密码。当天晚上他就死于断肠红。');
  divider();
  setFlag('know_carpenter_murder');
  setFlag('know_desk_cipher');
  G.wits += 5;
  showChoices([
    { text: '纸条还在吗', id: 'ppv_n', effects: () => { G.wits += 3; setFlag('asked_for_cipher'); }, next: SCENES['pharmacy_cipher'] },
    { text: '谁下的毒', id: 'ppv_w', next: SCENES['pharmacy_poison_knowledge'] },
  ]);
};

SCENES['pharmacy_cipher'] = () => {
  G.scene = 'pharmacy_cipher';
  narrate('纸条上写着：三七一五·落雁东麓·石门三叩·玉雁南飞。三七一五是明天。暗星阁已知道石室位置和开法——只缺玉牌。');
  divider();
  setFlag('has_cipher_note');
  G.wits += 5;
  showChoices([{ text: '继续', id: 'pc_c', next: SCENES['night_town_hub'] }]);
};

SCENES['pharmacy_poison_knowledge'] = () => {
  G.scene = 'pharmacy_poison_knowledge';
  narrate('胡青娘说她精通毒术但从未杀过人。毒和药只是一线之隔。');
  divider();
  changeRel('hu_qingniang', 3);
  showChoices([{ text: '继续', id: 'ppk_c', next: SCENES['night_town_hub'] }]);
};

SCENES['pharmacy_night_tour'] = () => {
  G.scene = 'pharmacy_night_tour';
  narrate('胡青娘带你看了药铺。药柜有三千多个抽屉。但她特别提醒不要碰后墙暗格。');
  divider();
  showChoices([{ text: '继续', id: 'pnt_c', next: SCENES['pharmacy_poison_victim'] }]);
};
