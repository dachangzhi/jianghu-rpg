/// <reference path="../types.ts" />
// story_part3.js - 深夜惊变扩展场景
// 扩展night_falls之后的战斗和混乱场景

// ---- 深夜混乱中的额外场景 ----

// 扩展： rushing out时的更多选择
SCENES['night_rush_extended'] = () => {
  G.scene = 'night_rush_extended';
  narrate(`你拔剑冲出房间——走廊里的景象让你心头一紧。\n\n油灯已经被打翻了，走廊陷入半明半暗。墙壁上有几道新鲜的刀痕，深深嵌入木板。地上有血迹，一路延伸到楼梯口。\n\n空气中弥漫着铁锈味和某种辛辣的气味——像是被打破的药瓶。\n\n你的左边是胡青娘的房间，门被踹开了半扇。右边是楼梯，传来金属碰撞的声音。`);
  
  divider();
  narrate(`${dg('又一声惨叫。')}这次是从楼下传来的。\n\n然后——寂静。\n\n一种比吵闹更可怕的寂静。像是有人突然被捂住了嘴。`);

  showChoices([
    { text: '先去胡青娘的房间', id: 'rush_hu_room', next: SCENES['rush_hu_room'] },
    { text: '直接冲下楼梯', id: 'rush_downstairs', next: SCENES['rush_downstairs'] },
    { text: '检查隔壁求饶的房间', id: 'rush_dead_room', effects: () => { setFlag('checked_dead_room'); G.wits += 1; }, next: SCENES['rush_dead_room'] },
  ]);
};

SCENES['rush_hu_room'] = () => {
  G.scene = 'rush_hu_room';
  narrate(`你冲进胡青娘的房间。\n\n房间一片狼藉——药柜被翻倒，药瓶碎了一地，空气中混合着十几种草药的味道，呛得人眼睛发酸。\n\n胡青娘不在房间里。\n\n但你在床底下发现了一样东西——一块${hl('碎布')}，黑色的，质地精良，上面绣着一个极小的${dg('倒悬七星')}图案。\n\n${dg('暗星阁。')}\n\n他们在天黑之前就已经潜入了客栈。`);

  setFlag('found_assassin_cloth');
  G.wits += 1;

  narrate(`\n你注意到窗户是开着的——夜风卷着雨后的湿气灌进来，吹得残烛摇曳。\n窗台上有一个${hl('脚印')}——有人从窗户翻了出去。\n\n脚印的方向——朝后院。`);

  showChoices([
    { text: '从窗户追出去', id: 'rush_chase', next: SCENES['night_window'] },
    { text: '先下楼看看情况', id: 'rush_go_down', next: SCENES['rush_downstairs'] },
  ]);
};

SCENES['rush_downstairs'] = () => {
  G.scene = 'rush_downstairs';
  narrate(`你快步下楼。\n\n大堂里——一片混乱。\n\n桌椅被推倒了，碗碟碎了一地。壁炉里的火还在烧，将跳跃的光影投射在每个人脸上。\n\n你看到了：\n\n沈孤雁站在柜台前，手中弯刀出鞘，刀身上有新鲜的血迹。他的脸色平静得可怕，但胸口在微微起伏——刚经历过一场激烈的战斗。\n\n赵铁牛站在壁炉旁，铁锤已经「打开」了——锤头脱落在脚边，手里握着那把藏在锤里的${hl('精钢短刀')}。他的左臂在流血，但似乎浑然不觉。\n\n小莲躲在柜台后面，双手抱着膝盖，身体在发抖。但她的眼睛是干的——没有哭，只是怕。`);

  divider();
  narrate(`大堂里还有两具${dg('黑衣人的尸体')}——都是被一刀毙命，手法干净利落。\n\n赵铁牛看到你，喊了一声：`);
  dialog('zhao_tieniu', '你没事就好！外面至少还有四个——不，五个黑衣人。他们在找胡青娘。');
  narrate(`沈孤雁转过头来，目光锐利。`);
  dialog('shen_guyan', '柳如烟不在大堂。白云生也不在。不知道是逃了还是……');
  
  setFlag('saw_lobby_battle');
  
  divider();
  narrate(`就在这时——后院传来一声${dg('尖叫')}。\n\n是女人的声音。但不是胡青娘——这个声音更年轻。\n\n${dg('小莲。')}\n\n不，小莲在你面前。\n\n那是——谁？`);

  showChoices([
    { text: '冲向后院', id: 'rush_backyard', next: SCENES['night_window'] },
    { text: '「沈老板，这到底是怎么回事？」', id: 'rush_ask_shen', next: SCENES['rush_ask_shen'] },
    { text: '先帮赵铁牛处理伤口', id: 'rush_help_zhao', effects: () => { changeRel('zhao_tieniu', 5); G.charm += 1; }, next: SCENES['rush_help_zhao'] },
  ]);
};

SCENES['rush_dead_room'] = () => {
  G.scene = 'rush_dead_room';
  narrate(`你推开隔壁房间的门。\n\n月光从破窗照进来，照亮了一幅惨烈的画面——\n\n一个中年男子倒在血泊中。他穿着粗布衣裳，像是个普通旅客。但他的手——指甲被拔掉了两根，手臂上有 ${dg('烙铁的烫伤')}。\n\n他在死前被${dg('刑讯逼供')}过。\n\n床头柜上放着一个布包，已经被翻了个底朝天。里面是些换洗衣物和几枚铜板——看起来没什么值钱的东西。\n\n但你在枕头下面发现了一张${hl('皱巴巴的纸条')}：`);
  
  divider();
  narrate(`纸条上写着几行字，墨迹未干：\n\n${hl('"三块玉牌，三把钥匙。\n药铺有一块，老板有一块，书生有一块。\n落雁峰山洞，子时开。\n——记住，别告诉任何人。"')}\n\n这个死者……他也是来找天机卷的。\n\n而且他已经知道了三块玉牌的位置。那么——杀他的人，是灭口？还是从他嘴里问出了同样的信息？`);

  setFlag('found_dead_note');
  setFlag('knows_three_keys');
  addItem('死者的纸条');
  G.wits += 2;

  showChoices([
    { text: '下楼', id: 'dead_room_downstairs', next: SCENES['rush_downstairs'] },
    { text: '从窗户翻到后院', id: 'dead_room_window', next: SCENES['night_window'] },
  ]);
};

SCENES['rush_ask_shen'] = () => {
  G.scene = 'rush_ask_shen';
  narrate(`\n沈孤雁看了你一眼，然后看了看门外。`);
  dialog('shen_guyan', '现在不是解释的时候。但既然你问了——\n\n这些人来自暗星阁。他们的头目叫黑无极，是江湖上排名前十的杀手。他们要找的是一样东西——天机卷。\n\n天机卷上有一千七百个前朝遗臣的身份信息。如果落入他们手中——或者朝廷手中——那些人全部得死。');
  narrate(`他的声音平静，但你能听出压抑的愤怒。`);
  dialog('shen_guyan', '我守护这份名单十五年了。今晚——不会是终点。\n\n你愿意帮我吗？');

  setFlag('shen_explained_night');
  changeRel('shen_guyan', 5);

  showChoices([
    { text: '「我帮你。」', id: 'rush_help_shen', effects: () => { setFlag('shen_night_alliance'); changeRel('shen_guyan', 8); }, next: SCENES['night_window'] },
    { text: '「先救人。」', id: 'rush_save_people', next: SCENES['night_window'] },
  ]);
};

SCENES['rush_help_zhao'] = () => {
  G.scene = 'rush_help_zhao';
  narrate(`\n你快步走到赵铁牛身边，撕下一块衣角，帮他绑住伤口。\n\n赵铁牛看着你的动作，嘴角咧了一下——分不清是疼还是笑。`);
  dialog('zhao_tieniu', '嘿……小伤，不碍事。打十年仗，比这重的伤多了去了。\n\n不过——谢了。不是每个人都会在这种时候先想到帮别人。');
  
  divider();
  narrate(`你注意到他伤口的形状——不是刀伤，是${hl('掌伤')}。能一掌打伤赵铁牛这种壮汉的人，内力深厚。\n\n黑无极……远比想象中更危险。`);

  setFlag('noticed_hei_power');
  addHp(-5);
  
  showChoices([
    { text: '继续行动', id: 'help_zhao_continue', next: SCENES['night_window'] },
  ]);
};

// ---- 黑无极对峙扩展 ----
SCENES['confront_hei_extended'] = () => {
  G.scene = 'confront_hei_extended';
  narrate(`黑无极站在走廊尽头。月光从他身后的窗户照进来，将他的剪影拉得很长。\n\n他终于摘下了面罩——露出一张瘦削的脸，颧骨高耸，眼窝深陷。脸上最显眼的是一道从左眉划到右颧骨的${dg('十字伤疤')}，让他的表情永远带着一种扭曲的笑意。\n\n但他的眼睛不笑。那双眼睛冷得像两口枯井。`);

  divider();
  dialog('hei_wuji', '你挡了我的路。');
  narrate(`他的声音很低，像是从胸腔深处挤出来的。`);
  dialog('hei_wuji', '我不认识你。你也不认识我。你我之间没有恩怨。\n\n但——天机卷的事，与你无关。让开，我可以不杀你。\n\n这是我能给的最大善意。');

  showChoices([
    { text: '「你杀了无辜的人。仅凭这一点，我就不能让开。」', id: 'hei_moral', effects: () => { setFlag('hei_moral_stand'); changeRel('hei_wuji', 3); G.charm += 1; }, next: SCENES['hei_moral_response'] },
    { text: '「我不让开。但我也不想打。告诉我你的理由。」', id: 'hei_reason', effects: () => { G.wits += 1; }, next: SCENES['hei_reason_response'] },
    { text: '「如果我让开——你保证不杀其他人？」', id: 'hei_deal2', next: SCENES['deal_hei'] },
  ]);
};

SCENES['hei_moral_response'] = () => {
  G.scene = 'hei_moral_response';
  narrate(`\n黑无极沉默了片刻。你不确定那是嘲讽还是思考。\n\n然后他说了一句让你意想不到的话：`);
  dialog('hei_wuji', '……无辜？你知道今晚死的那个人是做什么的吗？他是朝廷安插在苍龙镇的密探——专门搜集前朝遗臣情报的暗桩。三年来，他出卖了七个人的藏身之处。七个人，连带家眷，二十三条人命。\n\n你说他无辜？');
  narrate(`你怔住了。\n\n黑无极继续说，声音依然平静：`);
  dialog('hei_wuji', '在江湖上，「无辜」这两个字，比你想象的奢侈得多。\n\n我不杀无辜——但我杀的人，从来都不是无辜的。');

  setFlag('hei_justified_killing');

  showChoices([
    { text: '「就算他有罪，也轮不到你来审判。」', id: 'hei_judge', effects: () => { changeRel('hei_wuji', -3); }, next: SCENES['hei_refuse'] },
    { text: '「……你说的有道理。但我不信任你。」', id: 'hei_skeptical', effects: () => { G.wits += 1; }, next: SCENES['confront_hei'] },
  ]);
};

SCENES['hei_reason_response'] = () => {
  G.scene = 'hei_reason_response';
  narrate(`\n黑无极审视了你一会儿。\n\n然后——出乎意料的——他收刀入鞘，靠在墙上，双手抱胸。`);
  dialog('hei_wuji', '……你是今晚第一个不是上来就打的人。行，我给你一个理由。\n\n暗星阁——你听过吗？前朝的地下刺客组织。三年前被朝廷连根拔起，成员被追杀殆尽。\n\n我是最后一批活着的人之一。天机卷上有我们所有成员的真名。如果它落入朝廷手中——暗星阁仅存的七十多人，全都会死。');
  divider();
  narrate(`他的声音没有波动，但你能感觉到每个字背后的重量。`);
  dialog('hei_wuji', '七十多条人命。有人已经改行了——有做木匠的，有种地的，有教书的。他们以为自己安全了。\n\n但天机卷上写着他们的真名。只要这份名单还在——他们就永远不会安全。');
  narrate(`他看着你的眼睛，目光中第一次出现了某种接近恳求的东西——虽然只是一闪而过。`);
  dialog('hei_wuji', `我不是来抢天机卷的。我是来——${hl('毁掉')}它的。\n\n只要天机卷不存在了，所有人就都安全了。\n\n你愿意帮我吗？'`);

  setFlag('knows_hei_true_goal');
  changeRel('hei_wuji', 5);

  showChoices([
    { text: '「毁掉天机卷……这个想法不坏。」', id: 'hei_agree_destroy', effects: () => { setFlag('hei_destroy_alliance'); changeRel('hei_wuji', 10); }, next: SCENES['chapter2_hub'] },
    { text: '「我需要考虑。」', id: 'hei_need_time', next: SCENES['chapter2_hub'] },
    { text: '「毁掉它不一定是最好的办法。」', id: 'hei_disagree', next: SCENES['confront_hei'] },
  ]);
};

// ---- 柳如烟在夜战中的扩展 ----
SCENES['find_liu_extended'] = () => {
  G.scene = 'find_liu_extended';
  narrate(`你在混乱中寻找柳如烟。\n\n你最终在客栈的屋顶上找到了她。\n\n她盘腿坐在屋脊上，青锋冷月剑横放膝头。月光洒在她身上，整个人像一尊冷玉雕像。\n\n下方的战斗、尖叫、厮杀——似乎都与她无关。但她的眼睛是睁着的，瞳孔中映着下面的火光和人影。`);

  divider();
  narrate(`她没有回头，但显然感知到了你的存在。`);
  dialog('liu_ruyin', '……你上来了。');
  narrate(`你翻上屋顶，在她旁边坐下。瓦片在身下微微倾斜，但很稳固。从这里可以看到整个苍龙镇——黑漆漆的屋顶、零星的灯火、远处山脉的轮廓。`);
  dialog('liu_ruyin', '你问我为什么不下去帮忙？\n\n因为——我接到的命令是「旁观、等待、在天机卷出现时出手」。\n\n换句话说，我的任务是坐在这里，看着这些人死。然后在天机卷露出水面的时候——把它带回朝廷。');
  
  divider();
  narrate(`她的声音平静得可怕。但你注意到她握剑的手指关节发白——她在用力。\n\n不是因为恐惧，而是因为${hl('愤怒')}。\n\n对自己的愤怒。`);
  dialog('liu_ruyin', `我知道你觉得我冷血。也许吧。但你想过没有——如果我下去帮忙，暴露了身份，朝廷会派更多的人来。到时候不只是暗星阁的杀手——是正规的军队。\n\n一个小镇上的暗杀，死几个人，可以掩盖。\n\n军队出动——${dg('满门抄斩，鸡犬不留。')}'`);

  if (hasFlag('liu_revealed_truth') || hasFlag('overheard_liu_comm')) {
    narrate(`\n她转过头来看你，月光在她的虹膜中碎成银色的光点。`);
    dialog('liu_ruyin', '你知道我父亲在名单上。如果天机卷被带回去——他也得死。\n\n所以你以为我不想毁掉它吗？我做梦都想。\n\n但我毁不掉。因为我一旦动了——锦衣卫会知道是我做的。到时候不只是一个苍龙镇的事——是整个情报网都会被连根拔起。');
  }

  setFlag('liu_rooftop_confession');
  changeRel('liu_ruyin', 5);

  showChoices([
    { text: '「如果你不行动，更多人会死。」', id: 'liu_push', effects: () => { G.wits += 1; }, next: () => {
      dialog('liu_ruyin', '……我知道。');
      narrate(`沉默。风吹过屋脊，带走了她最后一丝温度。`);
      dialog('liu_ruyin', '好吧。我下去。不是为了任务，不是为了朝廷——是为了你刚才那句话。');
      setFlag('liu_will_fight');
      showChoices([{ text: '继续', next: SCENES['chapter2_hub'] }]);
    }},
    { text: '「我理解你的处境。」', id: 'liu_understand', effects: () => { changeRel('liu_ruyin', 5); G.charm += 1; }, next: () => {
      narrate(`\n柳如烟看着你，第一次露出了不确定的表情。`);
      dialog('liu_ruyin', '……你是第一个说理解我的人。连我的上级都不理解。\n\n也许……我应该重新考虑一下自己的立场。');
      setFlag('liu_reconsidering');
      showChoices([{ text: '继续', next: SCENES['chapter2_hub'] }]);
    }},
    { text: '不再多说，跳下屋顶', id: 'liu_leave_roof', next: SCENES['night_window'] },
  ]);
};

// ---- 胡青娘被救后的扩展 ----
SCENES['hu_rescued_extended'] = () => {
  G.scene = 'hu_rescued_extended';
  narrate(`\n胡青娘靠着柜台，左臂上的血已经把半边袖子染红了。但你注意到——她的表情不是恐惧，而是${hl('愤怒')}。\n\n一种冷静的、克制的愤怒。`);
  dialog('hu_qingniang', '……你来得及时。再晚一刻钟，他们就能撬开我的嘴了。迷魂散加刑讯——再硬的嘴也扛不过一个时辰。');
  narrate(`她从柜台下面摸出一瓶药粉，熟练地洒在伤口上，然后用布条缠紧。动作利落得像做过无数次。`);
  divider();
  narrate(`她站起身，走到药铺后墙，按下一个隐蔽的机关——墙壁无声地向两侧滑开，露出一个不大的${hl('密室')}。\n\n密室里，一面墙上贴满了纸条、地图、和人物画像。每张纸条上都有日期、人名、和一段简短的描述。`);
  dialog('hu_qingniang', '这是我十年情报工作的全部家当。每一个纸条代表一个人——他们的过去、现在、和可能面临的危险。\n\n你猜怎么着？最近三个月，有人在我的情报网里安插了眼线。有五条消息被泄露了——直接导致三个人暴露。');
  
  divider();
  narrate(`她从密室里取出一块${hl('玉牌')}——正是三把钥匙之一。\n然后她把密室的灯灭了，机关重新合上。`);
  dialog('hu_qingniang', `钥匙给你。但你要帮我一件事——${hl('找出内鬼')}。\n\n我的直觉告诉我，内鬼就在这个镇上。而且——很可能是今晚还在场的人之一。`);

  addItem('玉牌·药');
  setFlag('hu_key');
  setFlag('hu_show_secret_room');
  changeRel('hu_qingniang', 8);

  showChoices([
    { text: '「我答应你。」', id: 'hu_promise_spy', effects: () => { setFlag('promised_find_mole'); changeRel('hu_qingniang', 5); }, next: SCENES['chapter2_hub'] },
    { text: '「你有怀疑的对象吗？」', id: 'hu_suspect', next: SCENES['hu_suspect'] },
  ]);
};

SCENES['hu_suspect'] = () => {
  G.scene = 'hu_suspect';
  narrate(`\n胡青娘的表情变得凝重。她左右看了看，压低声音。`);
  dialog('hu_qingniang', `我有三个怀疑对象。\n\n第一——${hl('白云生')}。他来苍龙镇三年了，装醉度日，但你知道太多秘密的人最危险。而且——他怎么可能在落雁峰上找到玉牌？除非有人告诉他位置。\n\n第二——${hl('小莲')}。她是秦素琴的徒弟。秦素琴是我的前辈，但她的徒弟为什么会出现在我的药铺附近？巧合吗？\n\n第三——'`);
  narrate(`她犹豫了一下。`);
  dialog('hu_qingniang', `第三——${dg('沈孤雁')}。我知道他守护天机卷十五年了。但正因为他守了这么久——他最清楚每个人的弱点。\n\n如果他想出卖谁，根本不需要天机卷——他全都知道。'`);

  setFlag('hu_three_suspects');

  showChoices([
    { text: '「你觉得三个人里谁最可疑？」', id: 'hu_most_suspect', next: () => {
      dialog('hu_qingniang', '说实话——我下不了结论。但我有一个办法：今晚谁的表现最反常，谁就最可疑。\n\n你帮我盯着。我信你的判断。');
      showChoices([{ text: '继续', next: SCENES['chapter2_hub'] }]);
    }},
    { text: '继续行动', id: 'hu_suspect_done', next: SCENES['chapter2_hub'] },
  ]);
};

// ---- 白云生夜战扩展 ----
SCENES['bai_night_extended'] = () => {
  G.scene = 'bai_night_extended';
  narrate(`\n你在混乱中发现了白云生。\n\n他没有躲，也没有逃。他站在客栈二楼的走廊上，靠在栏杆边，手里拿着那块玉牌，在月光下翻转。\n\n他的表情——你第一次从他脸上看到了${hl('清醒')}。不是装醉时的半梦半醒，也不是白天那种掩饰过的警觉。\n\n是一种${hl('决然')}。像是终于做了一个等了很久的决定。`);

  divider();
  dialog('bai_yunsheng', '你来了。我猜你是来找我要这块玉牌的。');
  narrate(`他举起玉牌，月光穿透了半透明的玉石，在他掌心投下一片青色的光斑。`);
  dialog('bai_yunsheng', `三年前我找到它的时候，以为它是通往荣华富贵的钥匙。后来才知道——它是通往地狱的钥匙。\n\n你知道天机卷里还藏着什么吗？不只是名字——还有${hl('前朝宝藏的藏匿地点')}。价值连城的宝藏。足够买下半个中原。`);

  if (hasFlag('knows_tianji_treasure')) {
    narrate(`\n你已经从白云生本人那里得知了这个秘密。看来他是想确认你是否值得信任——如果你知道了宝藏的存在还会选择保护名单上的人，那你就通过了他的考验。`);
  } else {
    setFlag('knows_tianji_treasure');
    G.wits += 1;
  }

  divider();
  narrate(`他将玉牌收入怀中，看着楼下的混乱。`);
  dialog('bai_yunsheng', '我曾经想过——拿着天机卷去找宝藏，从此飞黄腾达。但每次想到那些在名单上的人——他们只是想活着，只是想安安静静地过日子——我就觉得……\n\n我的贪念，不值得用别人的命来换。');

  showChoices([
    { text: '「那就把玉牌给我。」', id: 'bai_give_now', effects: () => { addItem('玉牌·书'); setFlag('bai_key'); changeRel('bai_yunsheng', 5); }, next: () => {
      narrate(`\n白云生看了你很久。然后把玉牌放在栏杆上，轻轻推向你。`);
      dialog('bai_yunsheng', '拿去吧。这是我这三年做的最轻松的决定。');
      showChoices([{ text: '继续', next: SCENES['chapter2_hub'] }]);
    }},
    { text: '「你先留着。我们还有更重要的事。」', id: 'bai_keep', effects: () => { changeRel('bai_yunsheng', 8); }, next: SCENES['chapter2_hub'] },
  ]);
};

// ---- 小莲在夜战中的场景 ----
SCENES['xiao_lian_night'] = () => {
  G.scene = 'xiao_lian_night';
  narrate(`\n你在柜台后面找到了小莲。她蜷缩成一团，双手抱着膝盖，身体在发抖。\n\n但你走近时，她抬起头——眼睛是干的。没有泪水，只有一种……${hl('难以置信')}。\n\n像是看到了什么不该看到的东西。`);
  dialog('xiao_lian', '他们……他们杀了人。就在我面前。那个住天字二号的客人——他们把他拖出来，问他「名单在哪里」。他不说，他们就……');
  narrate(`她的声音在发抖，但越说越稳。`);
  dialog('xiao_lian', '我师父教过我——遇到危险不能慌，要把看到的一切都记住。所以我记住了：三个黑衣人，领头的手臂上有刺青，是一个倒着的七星。他们的刀法很快——一刀一个，不拖泥带水。');

  divider();
  narrate(`她从怀里掏出一样东西——一个小布包。`);
  dialog('xiao_lian', '沈老板让我把这个给你——如果你活着下来的话。他说这是「保命的东西」。');
  narrate(`你打开布包——里面是一颗${hl('丹药')}，散发着淡淡的药香。\n\n还有一张纸条，上面是沈孤雁的字迹：\n\n${hl('"如果局势失控，吞下这颗丹药。它会让你在一个时辰内力量倍增，但之后会虚弱三天。——沈"')}`);

  addItem('沈孤雁的丹药');
  setFlag('xiao_lian_gave_pill');
  changeRel('xiao_lian', 5);

  showChoices([
    { text: '「你躲好，别出来。」', id: 'lian_hide', effects: () => { setFlag('told_lian_hide'); }, next: SCENES['night_window'] },
    { text: '「跟我走，我保护你。」', id: 'lian_follow', effects: () => { setFlag('lian_follows'); changeRel('xiao_lian', 8); G.charm += 1; }, next: SCENES['night_window'] },
  ]);
};

// ---- 赵铁牛和沈孤雁的夜战对话 ----
SCENES['zhao_shen_night'] = () => {
  G.scene = 'zhao_shen_night';
  narrate(`\n战斗的间隙，你看到赵铁牛和沈孤雁交换了一个眼神。\n\n那是只有并肩作战多年的人才会有的默契——不需要语言，一个眼神就够了。\n\n赵铁牛守住正门，沈孤雁守住后门。两把刀，一左一右，像两道铁闸。\n\n他们是老搭档。不是开客栈认识的那种老——是${hl('战场上活下来的那种老')}。`);

  divider();
  dialog('zhao_tieniu', '老沈——十几年没打了，手还稳吧？');
  dialog('shen_guyan', '比你稳。你的左手一直在抖。');
  dialog('zhao_tieniu', '那是旧伤。不碍事。');
  dialog('shen_guyan', '……当年守乌兰关，你也是这么说的。');
  
  narrate(`两人同时沉默了一瞬。那个名字——乌兰关——像一根刺，扎在空气里。`);

  setFlag('zhao_shen_war_bond');

  showChoices([
    { text: '「你们一起打过仗？」', id: 'zhao_shen_ask', next: () => {
      dialog('shen_guyan', '……那是很久以前的事了。赵承志——不对，赵铁牛——是我手下最猛的百夫长。乌兰关一战，他替我挡了一刀。那道疤……');
      narrate(`赵铁牛摸了摸自己的左臂。`);
      dialog('zhao_tieniu', '别提了。都过去了。现在——打眼前的仗。');
      setFlag('knows_zhao_shen_past');
      showChoices([{ text: '继续', next: SCENES['night_window'] }]);
    }},
    { text: '继续战斗', id: 'zhao_shen_fight', next: SCENES['night_window'] },
  ]);
};
