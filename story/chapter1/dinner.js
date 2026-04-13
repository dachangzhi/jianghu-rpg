// story_part2.js - 晚餐场景 + NPC深度对话
// 插入到 lobby_free 和 night_falls 之间

// ---- 探索客栈 ----
SCENES['explore_inn'] = () => {
  G.scene = 'explore_inn';
  G.location = 'inn_lobby';
  clearStory();
  narrate(`你决定在客栈里四处走走，趁天色尚早多了解一些这个奇怪的地方。\n\n大堂里弥漫着饭菜的香气，灶房的炉火噼啪作响。客栈虽小，五脏俱全——柜台后的墙上挂着一幅褪色的山水画，壁炉里的火烧得正旺，将整个大堂烘得暖融融的。'`);
  divider();
  narrate(`你可以去这些地方看看：'`);

  const choices = [];
  choices.push({ text: '去后厨看看（说不定能遇到什么人）', id: 'explore_kitchen', next: SCENES['explore_kitchen'] });
  choices.push({ text: '去后院透透气', id: 'explore_backyard', next: SCENES['explore_backyard'] });
  choices.push({ text: '上楼回房整理一下', id: 'explore_upstairs', next: SCENES['explore_upstairs'] });
  if (getRel('shen_guyan') != null) {
    choices.push({ text: '到柜台和沈孤雁再聊聊', id: 'explore_counter', next: SCENES['talk_shen_2'] });
  }
  choices.push({ text: '算了，等开饭吧', id: 'explore_wait', next: SCENES['dinner_scene'] });
  showChoices(choices);
};

SCENES['explore_kitchen'] = () => {
  G.scene = 'explore_kitchen';
  G.location = 'inn_kitchen';
  narrate(`\n你推开厨房的木门，一股浓烈的油烟味和辣椒的呛香扑面而来。\n灶台上架着一口大铁锅，里面咕嘟咕嘟地炖着什么，热气升腾。\n案板上摆着切好的肉丝、姜丝、蒜末，井井有条。'`);
  divider();
  narrate(`灶台边站着一个年轻姑娘，约莫十八九岁，扎着双丫髻，正手脚麻利地翻炒着锅里的菜。她听到门响，回头看了你一眼。'`);
  narrate(`她的眼睛很亮，像两颗黑曜石，但眼底有一圈淡淡的青色——像是长期睡不好觉的人。'`);
  dialog('xiao_lian', '啊！客官您怎么跑厨房来了？这里油烟大，别熏着您。我叫小莲，是客栈帮厨的。您要是饿了，再等一会儿就好啦——今天炖的是红烧肉，沈老板亲自腌的腊肉呢。');
  narrate(`她说完又转回去翻炒，锅铲翻飞，动作行云流水。'`);
  divider();
  narrate(`你注意到灶台旁边的墙上挂着一把${hl('小剪刀')}，剪刃上沾着干涸的红色——不像是番茄汁，更像是……药汁。\n旁边还有一排小瓷瓶，标签上写着各种药名。\n\n这不像是普通帮厨会有的东西。'`);

  showChoices([
    { text: '「小莲姑娘，那些瓷瓶是做什么的？」', id: 'xiao_lian_ask', next: SCENES['xiao_lian_ask'] },
    { text: '「你手艺真好，跟谁学的？」', id: 'xiao_lian_craft', next: SCENES['xiao_lian_craft'] },
    { text: '不动声色，记在心里', id: 'xiao_lian_silent', effects: () => { setFlag('noticed_xiao_lian_medicine'); G.wits += 1; }, next: SCENES['explore_inn'] },
  ]);
};

SCENES['xiao_lian_ask'] = () => {
  G.scene = 'xiao_lian_ask';
  narrate(`\n小莲的动作顿了一下，随即恢复自然。'`);
  dialog('xiao_lian', '哦，这些啊？以前跟着一位大夫学过几年草药，后来大夫去世了，我就来客栈帮忙了。沈老板说我做的药膳好，让我平时也备着些常用药，客人有个头疼脑热的能应付。');
  narrate(`她说得自然，但你注意到她把那些瓷瓶往里推了推——${hl('下意识的遮挡动作')}。\n\n而且她说「大夫去世了」的时候，声音微微发颤，像是触碰到了什么伤痛。'`);

  setFlag('asked_xiao_lian_medicine');
  changeRel('xiao_lian', 3);

  showChoices([
    { text: '「那位大夫……是你的亲人吗？」', id: 'xiao_lian_family', next: SCENES['xiao_lian_family'] },
    { text: '点点头，不再追问', id: 'xiao_lian_drop', next: SCENES['explore_inn'] },
  ]);
};

SCENES['xiao_lian_family'] = () => {
  G.scene = 'xiao_lian_family';
  narrate(`\n小莲放下锅铲，沉默了片刻。'`);
  dialog('xiao_lian', '……是师父。她叫秦素琴，是苍龙镇以前的药师。三年前……镇上来了一伙人，说是朝廷的暗探。师父挡在药铺门前不让他们进去，就被……被他们……');
  narrate(`她深吸一口气，眼眶微红，但没有哭。'`);
  dialog('xiao_lian', '后来胡青娘姐姐接手了药铺。她把我安顿在这里，说跟着沈老板最安全。');
  divider();
  narrate(`她擦了擦手，重新拿起锅铲，声音恢复了平静，但比刚才多了几分硬。'`);
  dialog('xiao_lian', '客官，我没有武功，也不会打架。但我记性好，什么都能记住。谁对我好，谁对我坏，我都记得清清楚楚。');

  setFlag('knows_xiao_lian_past');
  changeRel('xiao_lian', 8);

  showChoices([
    { text: '「放心，我会记住你说的。」', id: 'xiao_lian_promise', effects: () => { setFlag('promised_xiao_lian'); changeRel('xiao_lian', 5); }, next: SCENES['explore_inn'] },
    { text: '继续探索', id: 'xiao_lian_continue', next: SCENES['explore_inn'] },
  ]);
};

SCENES['xiao_lian_craft'] = () => {
  G.scene = 'xiao_lian_craft';
  narrate(`\n小莲笑了，眼睛弯成月牙。'`);
  dialog('xiao_lian', '跟师父学的！她是苍龙镇最好的药师，不光会做药，做饭也一绝。她说啊，做药和做饭其实是一回事——都是把不同的东西配在一起，让它们变成更好的东西。');
  narrate(`她给你夹了一块刚出锅的腊肉，用碟子递过来。'`);
  dialog('xiao_lian', '尝尝！这可是沈老板的秘方，用了十二种香料腌的。');
  divider();
  narrate(`腊肉入口，肥而不腻，带着一丝微甜和浓郁的烟熏味。\n确实好吃。但更让你在意的是——她说「把不同的东西配在一起」，听起来不像是在说做饭，更像是在说……${hl('配药')}。'`);

  addItem('腊肉');
  changeRel('xiao_lian', 3);
  G.charm += 1;

  showChoices([
    { text: '继续探索', id: 'xiao_lian_after_craft', next: SCENES['explore_inn'] },
  ]);
};

SCENES['explore_backyard'] = () => {
  G.scene = 'explore_backyard';
  G.location = 'inn_backyard';
  narrate(`\n你推开客栈后门，来到后院。\n\n雨后的空气清新得像被水洗过，泥土的腥甜味混着远处传来的烧柴烟味。\n院子不大，左边是马厩，右边堆着劈好的柴火，正中有一棵老槐树，树干粗得两人合抱。\n\n树下放着一张石桌、两个石凳。石桌上刻着棋盘的格线，但棋子已经不知去向。'`);

  divider();
  narrate(`你走近马厩——里面只有两匹马，其中一匹是你的。\n另一匹是黑毛骏马，马鞍上刻着一个${hl('「暗」')}字。\n\n这匹马身形矫健，肌肉线条分明，一看就是上等战马。它的眼神警惕，你靠近时轻轻打了个响鼻。\n\n${dg('暗')}……暗星阁？还是巧合？'`);

  if (!hasFlag('met_hei_wuji')) {
    narrate(`\n你还没见过这匹马的主人。但能骑这种战马的人，绝非等闲之辈。'`);
  }

  setFlag('explored_backyard');

  narrate(`\n你回到石桌旁，注意到石桌边缘刻着一行小字，被苔藓半遮半掩：\n\n${hl('"十五月圆时，孤雁归故里。"')}'`);

  if (G.wits >= 12) {
    narrate(`\n你的心思转了转——「孤雁」？沈孤雁的名字里就有「孤雁」二字。${hl('每月十五，他会去某个地方')}。\n\n今天是……初七。离十五还有八天。'`);
    setFlag('found_shen_routine');
    G.wits += 1;
  }

  showChoices([
    { text: '继续探索', id: 'backyard_continue', next: SCENES['explore_inn'] },
  ]);
};

SCENES['explore_upstairs'] = () => {
  G.scene = 'explore_upstairs';
  G.location = 'inn_room';
  narrate(`\n你沿着吱呀作响的木楼梯上了二楼。\n\n走廊狭窄，两侧各三间房，木板地在脚步下微微晃动。\n你的房间是天字三号，在最里面。\n\n经过天字二号房时，你听到里面传来低低的说话声。\n你放轻脚步，贴近门板——'`);

  divider();
  narrate(`是${hl('柳如烟')}的声音，压得很低，像是在跟谁说话。\n\n「……名单上第三十七人已确认在苍龙镇。父亲的名字……也在上面。如果这份名单被带回去——」\n\n她停顿了一下。\n\n「我明白。但……如果我抗命，他们会对付的不只是我。你们手里还有多少人？」\n\n沉默。似乎在听对方说些什么。\n\n「好。我知道了。三天之内，一定有结果。」'`);

  divider();
  narrate(`脚步声向门口移来。你赶紧闪到走廊拐角。'`);
  narrate(`门开了一条缝，你看到柳如烟对着一块${hl('小巧的铜牌')}说了句「熄」，铜牌上的微光就消失了。\n\n${hl('传讯铜牌')}——朝廷锦衣卫的高级通讯工具，百户以上才有资格使用。\n\n她的身份、她的任务、她父亲的秘密——全都在刚才那段对话里了。'`);

  setFlag('overheard_liu_comm');
  setFlag('knows_liu_identity');
  G.wits += 2;

  showChoices([
    { text: '回自己的房间整理一下思绪', id: 'upstairs_room', next: SCENES['in_room'] },
    { text: '下楼继续探索', id: 'upstairs_down', next: SCENES['explore_inn'] },
  ]);
};

SCENES['in_room'] = () => {
  G.scene = 'in_room';
  G.location = 'inn_room';
  narrate(`\n你推开天字三号的门。\n\n房间不大，一张木床、一张方桌、一把椅子、一盏油灯。窗户朝向后院，能看到那棵老槐树的树冠。墙角的柜子里放着叠好的被褥，散发出淡淡的薰衣草香。'`);
  divider();
  narrate(`你坐在床边，梳理目前得到的信息：'`);

  const info = [];
  if (hasFlag('noticed_shen_skill') || hasFlag('confronted_shen')) info.push('沈孤雁：前武林高手，可能是前朝遗臣');
  if (hasFlag('knows_liu_identity')) info.push('柳如烟：锦衣卫暗探，她父亲在天机卷上');
  if (hasFlag('knows_zhao_past')) info.push('赵铁牛：前边军百夫长，厌倦杀戮归隐');
  if (hasFlag('bai_secret')) info.push('白云生：装醉自保，知道落雁峰的秘密');
  if (hasFlag('observed_all')) info.push('赵铁牛的铁锤藏有玄机，白云生在装醉');
  if (hasFlag('found_shen_routine')) info.push('沈孤雁每月十五会去某个地方');
  if (hasFlag('overheard_liu_comm')) info.push('柳如烟有传讯铜牌，三天期限');
  if (hasFlag('noticed_xiao_lian_medicine')) info.push('小莲懂草药，师父被朝廷暗探所杀');

  if (info.length > 0) {
    info.forEach(i => narrate(`· ${i}`));
  } else {
    narrate(`· 信息还不多，需要继续探索'`);
  }

  narrate(`\n窗外，天色渐渐暗了下来。远处的山脊在暮色中变成一道深蓝色的剪影。\n\n该吃晚饭了。'`);

  showChoices([
    { text: '下楼吃饭', id: 'room_to_dinner', next: SCENES['dinner_scene'] },
    { text: '再去大堂转转', id: 'room_to_explore', next: SCENES['explore_inn'] },
  ]);
};

// ---- 晚餐场景 ----
SCENES['dinner_scene'] = () => {
  G.scene = 'dinner_scene';
  G.location = 'inn_lobby';
  G.time = 'dusk';
  clearStory();
  chapterTitle('暮色晚餐');
  narrate(`天色暗了下来，客栈大堂里点起了油灯和蜡烛。\n昏黄的光线在每个人脸上投下摇曳的阴影。\n\n小莲端上来满满一桌菜——红烧肉、清蒸鲈鱼、干煸四季豆、一碟花生米、一坛温好的黄酒。\n饭菜的香气在温暖的大堂里弥漫开来，让人暂时忘掉了外面的寒雨。'`);

  divider();
  narrate(`所有人都不约而同地聚到了大堂。\n\n沈孤雁坐在柜台后面，手里端着一杯茶，目光在每个人之间流转，像一只老练的牧羊犬在看管自己的羊群。\n\n柳如烟换了个位置——从角落移到了靠近门口的桌子，面朝大门而坐，筷子几乎没动，酒倒是喝了不少。\n\n赵铁牛坐到了壁炉旁的老位置，端着大海碗呼噜呼噜地扒饭，吃得很香。\n\n白云生……居然也醒了，坐在窗边的位置，面前摆着一碟花生米和一壶酒，慢慢地喝。他看起来清醒了一些，但仍然带着三分醉意。'`);

  divider();
  narrate(`小莲给每人都添了饭，然后躲进了厨房。\n你注意到她给沈孤雁递了一碗汤的时候，两人交换了一个微妙的眼神——那种只有在共事很久的人之间才会有的默契。\n\n晚饭的氛围表面平和，但你能感受到空气中的张力。每个人都在吃自己的饭，但每个人都在用余光打量着其他人。\n\n这是一顿各怀心事的晚饭。'`);

  showChoices([
    { text: '安静吃饭，竖起耳朵听他们说话', id: 'dinner_listen', effects: () => { G.wits += 1; setFlag('dinner_listened'); }, next: SCENES['dinner_listen'] },
    { text: '和赵铁牛碰杯，活跃气氛', id: 'dinner_zhao', effects: () => { changeRel('zhao_tieniu', 3); G.charm += 1; }, next: SCENES['dinner_zhao'] },
    { text: '试着和柳如烟搭话', id: 'dinner_liu', effects: () => { changeRel('liu_ruyin', 2); }, next: SCENES['dinner_liu'] },
    { text: '端着酒去找白云生', id: 'dinner_bai', effects: () => { changeRel('bai_yunsheng', 2); }, next: SCENES['dinner_bai'] },
  ]);
};

SCENES['dinner_listen'] = () => {
  G.scene = 'dinner_listen';
  narrate(`\n你低头扒饭，耳朵却竖得像只野兔。\n\n赵铁牛啃着鸡腿，含混不清地对沈孤雁说：'`);
  dialog('zhao_tieniu', '沈老板，今天后山那边又有动静了。我打铁的时候听到两声闷响，不像雷，倒像……爆炸。');
  narrate(`沈孤雁不动声色地吹了吹茶面的浮沫。'`);
  dialog('shen_guyan', '可能是猎户在炸石头吧。后山那片矿洞早废了，有人去翻废矿渣也说不定。');
  divider();
  narrate(`白云生突然笑了一声，声音不大，但刚好让所有人都听到。'`);
  dialog('bai_yunsheng', '炸石头？沈老板，你信吗？我是不信。苍龙镇的猎户我认识，他们用的是铁夹子，不是炸药。能用炸药的人——要么是军队，要么是……杀手组织。');
  narrate(`大堂里安静了一瞬。沈孤雁放下茶杯，看了白云生一眼。那目光不算凶，但绝对不友善。'`);
  dialog('shen_guyan', '白先生喝多了。早些休息吧。');
  divider();
  narrate(`柳如烟一直在喝酒，没有参与对话。但你注意到她听到「杀手组织」四个字时，手指在桌面上轻轻敲了三下——${hl('某种信号？')}还是在思考？\n\n她放下酒杯，冷冷地说了一句：'`);
  dialog('liu_ruyin', '不管是炸石头还是炸人，天黑之后别出门就行了。这是我给各位的忠告。');
  narrate(`说完，她起身离开了大堂，脚步声消失在楼梯的方向。'`);

  setFlag('heard_explosion_discussion');
  setFlag('dinner_npc_interaction');

  showChoices([
    { text: '继续吃饭，消化这些信息', id: 'dinner_after_listen', next: SCENES['dinner_after'] },
  ]);
};

SCENES['dinner_zhao'] = () => {
  G.scene = 'dinner_zhao';
  narrate(`\n你端起碗走到壁炉旁，和赵铁牛碰了碰杯。'`);
  dialog('zhao_tieniu', '嘿！你来得正好！一个人喝没意思。来来来，这酒不错，沈老板酿的——说是用后山的泉水，窖了三年的黄酒，够味儿！');
  narrate(`他给你倒了一碗，自己也满上。两人碰杯，一饮而尽。\n黄酒入口绵甜，回甘悠长，确实好酒。'`);
  divider();
  narrate(`赵铁牛的脸已经有些红了，说话也更大声了些。'`);
  dialog('zhao_tieniu', '我跟你说个事儿——今天下午我在铺子里打铁，来了个生面孔。穿一身黑，不说话，就站在门口看了我半天的铁锤。后来问我能不能打一把刀——「薄刃、单面开锋、能藏进袖筒里」的那种。');
  narrate(`他压低声音，眼神变得认真。'`);
  dialog('zhao_tieniu', `你知道什么人用这种刀吗？${hl('杀手')}。而且不是一般的杀手——这种制式的袖中刀，是${hl('暗星阁')}的标准配备。'`);
  divider();
  if (hasFlag('observed_all')) {
    narrate(`你想起之前观察到的——赵铁牛自己的铁锤里也藏着东西。他不会不知道有人在打量他的家伙。'`);
  }
  dialog('zhao_tieniu', '我当然没给他打。我说「老赵只会打农具，不会打杀人的玩意儿。」他就走了。但我总觉得……他还会来。');

  setFlag('zhao_told_hei_blade');
  setFlag('dinner_npc_interaction');

  showChoices([
    { text: '「暗星阁是什么？」', id: 'dinner_zhao_ask', next: SCENES['dinner_zhao_ask'] },
    { text: '「你觉得他是冲谁来的？」', id: 'dinner_zhao_target', next: SCENES['dinner_zhao_target'] },
    { text: '先不追问，回到饭桌', id: 'dinner_zhao_end', next: SCENES['dinner_after'] },
  ]);
};

SCENES['dinner_zhao_ask'] = () => {
  G.scene = 'dinner_zhao_ask';
  narrate(`\n赵铁牛犹豫了一下，像是在考虑该不该说。然后他叹了口气。'`);
  dialog('zhao_tieniu', '暗星阁……是前朝的刺客组织。当年专替皇帝做脏活——暗杀、刺探、灭口。据说已经覆灭了，但如果还有人活着……那他们的身份信息一定在天机卷上。');
  narrate(`他看了你一眼，眼神复杂。'`);
  dialog('zhao_tieniu', '天机卷是什么，你可能还不太清楚。这么说吧——它是一份名单。上面有一千七百个名字，每一个都是前朝的遗臣、探子、或者……知道太多的人。谁拿到它，就掌握了这些人的生死。');
  setFlag('knows_tianji');
  setFlag('knows_tianji_truth');
  G.wits += 1;
  showChoices([
    { text: '回到饭桌', id: 'dinner_zhao_ask_end', next: SCENES['dinner_after'] },
  ]);
};

SCENES['dinner_zhao_target'] = () => {
  G.scene = 'dinner_zhao_target';
  narrate(`\n赵铁牛嚼着花生米，目光沉了下来。'`);
  dialog('zhao_tieniu', `冲谁来的？呵。冲这个镇上所有人来的。你以为苍龙镇是什么地方？这就是个——怎么说呢——${hl('藏身之处')}。镇上一半的人都有不可告人的过去。铁匠、药师、裁缝、渔夫……都是换了名字重新活过的。'`);
  narrate(`他用力拍了一下大腿。'`);
  dialog('zhao_tieniu', '现在有人找到了这里，说明——有人泄露了消息。内鬼。这个镇上有内鬼。');
  setFlag('knows_tianji');
  setFlag('suspects_mole');
  showChoices([
    { text: '回到饭桌', id: 'dinner_zhao_target_end', next: SCENES['dinner_after'] },
  ]);
};

SCENES['dinner_liu'] = () => {
  G.scene = 'dinner_liu';
  narrate(`\n你端着碗走到柳如烟桌旁，在她对面坐下。\n\n她没抬头，只是用筷子拨弄着碗里的米饭。'`);
  dialog('liu_ruyin', '……你胆子不小。别人都不敢靠近我。');
  narrate(`你注意到她面前已经空了两个酒壶。她的脸色微红，眼神比白天柔和了一些——酒意让她卸下了几分戒备。'`);
  divider();
  if (hasFlag('knows_liu_identity')) {
    dialog('liu_ruyin', '你之前……看出了我的身份。但没有到处说。我很意外。大部分人如果知道身边有个锦衣卫，早就跑了或者讨好我了。你倒好，既不跑也不讨好。');
    narrate(`她抬起眼睛看着你，目光中有审视，也有一丝好奇。'`);
    dialog('liu_ruyin', '你到底想要什么？');
    showChoices([
      { text: '「我想知道真相。」', id: 'dinner_liu_truth', next: SCENES['dinner_liu_truth'] },
      { text: '「我想帮你。」', id: 'dinner_liu_help', effects: () => { G.charm += 1; }, next: SCENES['dinner_liu_help'] },
      { text: '「只是想陪你喝一杯。」', id: 'dinner_liu_drink', effects: () => { changeRel('liu_ruyin', 5); G.charm += 2; }, next: SCENES['dinner_liu_drink'] },
    ]);
  } else {
    dialog('liu_ruyin', '你一个人闯江湖？没有同伴？');
    narrate(`她似乎只是随便聊聊，但你注意到她的目光始终没有离开门口。'`);
    showChoices([
      { text: '「习惯了。」', id: 'dinner_liu_brief', next: SCENES['dinner_after'] },
      { text: '「在找一个人。」', id: 'dinner_liu_looking', effects: () => { G.wits += 1; }, next: SCENES['dinner_after'] },
    ]);
  }
};

SCENES['dinner_liu_truth'] = () => {
  G.scene = 'dinner_liu_truth';
  narrate(`\n柳如烟放下筷子，盯着你看了很久。\n\n烛光在她瞳孔中跳动，像两面微型的镜子，映出你的脸。'`);
  dialog('liu_ruyin', '真相？好。那我告诉你一部分——我奉命来找一样东西。这东西关乎很多很多人的生死。我的任务是把它带回去。\n\n但是……');
  divider();
  narrate(`她端起酒杯，仰头灌了一口。放下杯子时，她的声音变得很轻。'`);
  dialog('liu_ruyin', '但是那名单上有我父亲的名字。我父亲……十五年前是前朝的武将。朝代更替时，他没有死，改了名字藏了起来。我从小被母亲带着投奔了亲戚，后来被锦衣卫选中。');
  narrate(`她闭了一下眼睛。'`);
  dialog('liu_ruyin', '讽刺吧？女儿替朝廷做事，父亲是朝廷要抓的人。如果我把天机卷带回去，我父亲就完了。如果不带回去——我自己也完了。');
  setFlag('liu_revealed_truth');
  changeRel('liu_ruyin', 8);
  showChoices([
    { text: '「还有第三条路——销毁天机卷。」', id: 'dinner_liu_destroy', effects: () => { setFlag('suggested_destroy'); changeRel('liu_ruyin', 5); }, next: SCENES['dinner_after'] },
    { text: '「我会帮你想办法的。」', id: 'dinner_liu_promise', effects: () => { setFlag('promised_liu'); changeRel('liu_ruyin', 5); }, next: SCENES['dinner_after'] },
    { text: '沉默，让她自己消化', id: 'dinner_liu_silent', next: SCENES['dinner_after'] },
  ]);
};

SCENES['dinner_liu_help'] = () => {
  G.scene = 'dinner_liu_help';
  narrate(`\n柳如烟挑了挑眉。'`);
  dialog('liu_ruyin', '帮我？你知道我要做什么吗？');
  narrate(`你摇了摇头。她凝视你片刻，然后轻轻笑了——这是你第一次看到她笑。\n虽然只是嘴角微微上扬，但那冰冷的脸上终于有了温度。'`);
  dialog('liu_ruyin', '至少你是坦诚的。好吧——我不需要你帮我，但如果你不挡我的路，我就不会对你出手。这已经是我能给的最大的善意了。');
  changeRel('liu_ruyin', 5);
  showChoices([{ text: '回到饭桌', next: SCENES['dinner_after'] }]);
};

SCENES['dinner_liu_drink'] = () => {
  G.scene = 'dinner_liu_drink';
  narrate(`\n你没有追问，只是给自己和她各倒了一杯酒。\n\n两人默默碰杯，一饮而尽。\n\n柳如烟看着空杯，沉默了很久。然后她说了一句你没预料到的话：'`);
  dialog('liu_ruyin', '……三年没和人喝酒了。上一次是和——算了，不提了。');
  narrate(`她的声音里有一种你白天从未听过的柔软。\n\n但只是一瞬。下一秒，她又恢复了那种拒人千里的冷淡，仿佛刚才的柔软只是你的幻觉。'`);
  setFlag('liu_drink_bond');
  showChoices([{ text: '回到饭桌', next: SCENES['dinner_after'] }]);
};

SCENES['dinner_bai'] = () => {
  G.scene = 'dinner_bai';
  narrate(`\n你端着酒坐到白云生对面。他看了你一眼，举起自己的杯子，做了一个「请」的手势。'`);
  dialog('bai_yunsheng', '来陪我喝酒？还是来套我的话？');
  narrate(`他的语气半是玩笑半是试探。在烛光下，你终于看清了他的脸——三十岁上下，五官端正，但眉宇间有一种深深的倦意，像是被生活磨去了所有锐气。\n但他的眼睛不一样——${hl('清明、锐利、带着审视')}——和那副醉鬼的皮囊完全不搭。'`);

  if (hasFlag('bai_respects')) {
    dialog('bai_yunsheng', '你是白天那个看穿我的人。坐吧，我请你喝一杯。好酒不等人。');
    narrate(`他给你倒了满满一杯，自己也满上。'`);
  }

  divider();
  narrate(`两人碰杯。白云生喝了一口，然后盯着杯中残酒看了好一会儿。'`);
  dialog('bai_yunsheng', '你知不知道，三年前的殿试，我写了什么？我写了一篇策论——《论前朝遗臣处置之法》。洋洋洒洒三千字，论证了为什么不应该赶尽杀绝，而是应该怀柔安抚。');
  narrate(`他苦笑了一声。'`);
  dialog('bai_yunsheng', `你知道结果吗？考官把我的卷子递上去了，上面批示了四个字——${dg('「其心可诛」')}。从此我名字上了黑名单，再无科举资格。三年了，我从一个前途无量的进士候选人，变成了一个在酒馆里装醉的废物。'`);
  divider();
  narrate(`他仰头把杯中酒一口闷了。'`);
  dialog('bai_yunsheng', '但你知道最讽刺的是什么吗？那篇策论里写的每一个字，我现在都还相信。不杀降、不株连、不给仇恨留种子——这些道理不会因为被否定就变成错的。');

  setFlag('bai_revealed_past');
  changeRel('bai_yunsheng', 5);
  G.wits += 1;

  showChoices([
    { text: '「你不是废物。你只是选了一条更难的路。」', id: 'dinner_bai_encourage', effects: () => { changeRel('bai_yunsheng', 8); G.charm += 1; setFlag('bai_encouraged'); }, next: SCENES['dinner_after'] },
    { text: '「那你还装醉？」', id: 'dinner_bai_question', effects: () => { changeRel('bai_yunsheng', 3); }, next: SCENES['dinner_after'] },
    { text: '回到饭桌', id: 'dinner_bai_back', next: SCENES['dinner_after'] },
  ]);
};

SCENES['dinner_after'] = () => {
  G.scene = 'dinner_after';
  G.time = 'dusk';
  narrate(`\n晚饭渐渐结束。小莲收拾了碗碟，赵铁牛打着饱嗝回到壁炉旁，沈孤雁开始擦拭柜台。\n\n大堂重新安静下来，只剩下壁炉中柴火的噼啪声和窗外渐起的风声。\n\n天色已经完全暗了。'`);
  divider();

  const choices = [];
  choices.push({ text: '和大家再聊聊（第二轮对话）', id: 'dinner_to_round2', next: SCENES['round2_hub'] });
  choices.push({ text: '回房休息，等夜深', id: 'dinner_to_room', next: SCENES['go_to_room'] });
  choices.push({ text: '趁天还没全黑，出去走走', id: 'dinner_to_town', next: SCENES['evening_explore'] });

  showChoices(choices);
};

// ---- 第二轮NPC对话 ----
SCENES['round2_hub'] = () => {
  G.scene = 'round2_hub';
  G.location = 'inn_lobby';
  narrate(`\n晚饭后的客栈大堂变得安静了些。壁炉的火光将每个人的影子拉得很长。\n你还有时间再找人说说话。'`);

  const choices = [];

  if (getRel('shen_guyan') != null) {
    choices.push({ text: '找沈孤雁聊聊', id: 'round2_shen', next: SCENES['talk_shen_2'] });
  }
  if (getRel('liu_ruyin') != null) {
    choices.push({ text: '找柳如烟聊聊', id: 'round2_liu', next: SCENES['talk_liu_2'] });
  }
  if (getRel('zhao_tieniu') != null) {
    choices.push({ text: '找赵铁牛聊聊', id: 'round2_zhao', next: SCENES['talk_zhao_2'] });
  }
  if (getRel('bai_yunsheng') != null) {
    choices.push({ text: '找白云生聊聊', id: 'round2_bai', next: SCENES['talk_bai_2'] });
  }
  choices.push({ text: '够了，回房休息', id: 'round2_done', next: SCENES['go_to_room'] });
  choices.push({ text: '出去走走', id: 'round2_explore', next: SCENES['evening_explore'] });

  showChoices(choices);
};

// ---- 沈孤雁深度对话 ----
SCENES['talk_shen_2'] = () => {
  G.scene = 'talk_shen_2';
  narrate(`\n你走到柜台前。沈孤雁正在整理账本，手边放着一杯已经凉透的茶。\n看到你过来，他放下笔，微微一笑。'`);
  dialog('shen_guyan', '又来找我？看来我的酒没白请。坐吧，这几天难得有能聊得来的人。');

  divider();
  narrate(`你注意到他身后的墙上，那幅褪色的山水画——画的是一座山，山腰有一间亭子，亭中有两个模糊的人影。画的落款处有几个字被墨迹遮盖了，只隐约能看到一个「${hl('雁')}」字。'`);

  const choices = [];
  if (hasFlag('noticed_shen_skill') || hasFlag('confronted_shen') || hasFlag('shen_respects_you')) {
    choices.push({ text: '「沈老板，我们打开天窗说亮话——你到底是什么人？」', id: 'shen2_truth', effects: () => { setFlag('asked_shen_truth'); }, next: SCENES['shen2_truth'] });
  }
  if (hasFlag('found_shen_routine')) {
    choices.push({ text: `「后院石桌上刻着'十五月圆时，孤雁归故里'——是你刻的吧？」`, id: 'shen2_poem', effects: () => { setFlag('asked_shen_poem'); G.wits += 1; }, next: SCENES['shen2_poem'] });
  }
  choices.push({ text: '「这客栈开了多久了？」', id: 'shen2_history', next: SCENES['shen2_history'] });
  choices.push({ text: '不聊了，告辞', id: 'shen2_leave', next: SCENES['round2_hub'] });

  showChoices(choices);
};

SCENES['shen2_truth'] = () => {
  G.scene = 'shen2_truth';
  narrate(`\n沈孤雁的笔停了。他抬起头，看着你，眼神平静如水。'`);
  dialog('shen_guyan', '……你是我十五年来见过的最敏锐的年轻人。好吧。');
  narrate(`他站起身，走到门口看了看大堂——确认没有其他人在附近听——然后回到柜台后面，从暗格里取出一样东西。\n\n是一枚铜印。上面刻着「${hl('禁卫副统领')}」四个字。'`);
  dialog('shen_guyan', '我本名沈承风，前朝禁卫军副统领。朝代更替那天，我带着一批名单和印信逃了出来。这份名单——也就是后来被称为天机卷的东西——被分成了三份藏起来，密码钥匙分别交给了三个最信任的人。');
  divider();
  narrate(`他将铜印收起，声音变得低沉。'`);
  dialog('shen_guyan', '我妻子……也参与了保护名单的行动。她叫林清婉，是前朝的宫廷女官。五年前，朝廷的暗探找到了她的藏身之处。我赶到的时候……');
  narrate(`他的声音哽了一下，然后恢复了平静。'`);
  dialog('shen_guyan', '她用自己的命换来了玉牌的安全。临死前跟我说了一句话——「把这些人藏好，替我活着。」');
  divider();
  narrate(`他看着你的眼睛，目光恳切。'`);
  dialog('shen_guyan', '所以你明白了吗？这客栈不只是客栈，是我守护了十五年的阵地。每一个住在苍龙镇的人——赵铁牛、胡青娘、李裁缝、老孙头——他们的命，都在我肩上。');
  narrate(`他拍了拍柜台，声音变得坚定。'`);
  dialog('shen_guyan', `现在有人来了。他们要打破这一切。但我不会让他们得逞。\n\n问题是——${hl('你站在哪一边？')}'`);

  setFlag('shen_revealed');
  changeRel('shen_guyan', 10);
  G.wits += 2;

  showChoices([
    { text: '「我站在你这边。」', id: 'shen2_ally', effects: () => { setFlag('shen_alliance'); changeRel('shen_guyan', 10); }, next: () => { dialog('shen_guyan', '好。从现在起，你就是我的自己人。有什么需要——尽管开口。'); setFlag('shen_promised_help'); showChoices([{ text: '继续', next: SCENES['round2_hub'] }]); } },
    { text: '「我需要更多信息才能做决定。」', id: 'shen2_cautious', effects: () => { G.wits += 1; }, next: SCENES['round2_hub'] },
  ]);
};

SCENES['shen2_poem'] = () => {
  G.scene = 'shen2_poem';
  narrate(`\n沈孤雁的身体僵了一瞬。然后他苦笑了一声。'`);
  dialog('shen_guyan', '被你发现了。那是我……每年去祭拜妻子时留下的记号。每月十五，我会去镇外的祠堂——那里有她的牌位。');
  narrate(`他低下头，声音很轻。'`);
  dialog('shen_guyan', '清婉喜欢月亮。她说月亮是最好的密码——因为它每晚都在，但只有十五那天才完整。\n\n我们就用这个约定——每月十五，不管发生什么，我都会去看她。');
  divider();
  narrate(`他抬起头，看着窗外的夜空。月亮还只是一弯银钩。'`);
  dialog('shen_guyan', '还有八天。八天后的月圆夜，我会去祠堂。如果你愿意——可以跟我一起去。有些事情，只有在那里才能说清楚。');

  setFlag('shen_temple_invitation');
  changeRel('shen_guyan', 8);

  showChoices([{ text: '继续', next: SCENES['round2_hub'] }]);
};

SCENES['shen2_history'] = () => {
  G.scene = 'shen2_history';
  narrate(`\n沈孤雁微微一笑，目光变得悠远。'`);
  dialog('shen_guyan', '这客栈啊……十五年了。我刚来苍龙镇的时候，这里只是一间破屋。屋顶漏雨，墙壁透风。我一个人一砖一瓦地修起来的。');
  narrate(`他指了指柜台后面的横梁——上面密密麻麻地刻着划痕。'`);
  dialog('shen_guyan', '每一条划痕代表一个月。你看——一百八十道。十五年，一百八十个月。每天都在这柜台后面站着，看来来往往的人。有些是过客，有些是来找东西的，有些……是来杀我的。');
  narrate(`他轻描淡写地说着「来杀我的」，仿佛在说今天天气不好。'`);
  setFlag('shen_told_history');
  changeRel('shen_guyan', 3);
  showChoices([{ text: '继续', next: SCENES['round2_hub'] }]);
};

// ---- 柳如烟深度对话 ----
SCENES['talk_liu_2'] = () => {
  G.scene = 'talk_liu_2';
  narrate(`\n你走向柳如烟。她已经从大堂挪到了窗边，背对着所有人，手里把玩着一枚铜钱。\n\n听到你的脚步声，她没有转身。'`);
  dialog('liu_ruyin', '又来了。你这个人倒是执着。');

  const choices = [];
  if (hasFlag('liu_revealed_truth') || hasFlag('overheard_liu_comm')) {
    choices.push({ text: '「你父亲……他还活着吗？」', id: 'liu2_father', next: SCENES['liu2_father'] });
  }
  choices.push({ text: '「你为什么选择做锦衣卫？」', id: 'liu2_why_jinyi', next: SCENES['liu2_why_jinyi'] });
  if (getRel('liu_ruyin') >= 5) {
    choices.push({ text: '「你信任我吗？」', id: 'liu2_trust', next: SCENES['liu2_trust'] });
  }
  choices.push({ text: '告辞', id: 'liu2_leave', next: SCENES['round2_hub'] });

  showChoices(choices);
};

SCENES['liu2_father'] = () => {
  G.scene = 'liu2_father';
  narrate(`\n柳如烟的手指停住了。铜钱在她指间旋转了最后一圈，然后被握紧。'`);
  dialog('liu_ruyin', '……活着。至少一个月前还活着。他在岭南一个渔村，化名「周三」，以打鱼为生。母亲三年前病死了。他一个人在那边。');
  narrate(`她将铜钱收进袖中，声音变得像是从很远的地方传来。'`);
  dialog('liu_ruyin', '你知道吗，我之所以能活到今天——在锦衣卫那种地方——就是因为我告诉自己，我必须活着。活着才能保护他。我做的每一个任务、杀的每一个人、流的每一滴血，都是为了换一个——他不被找到的可能。');
  divider();
  narrate(`她终于转过头来看你。月光透过窗户照在她脸上，你第一次看到她眼角有一点水光——不是泪水，是月光在虹膜上的折射。\n\n但也许是泪水。'`);
  dialog('liu_ruyin', '所以现在你知道了。柳如烟不是什么冷酷无情的锦衣卫。她只是一个——想要保护父亲的女儿。\n\n你觉得可笑吗？');

  setFlag('liu_deep_truth');
  changeRel('liu_ruyin', 10);

  showChoices([
    { text: '「不可笑。这比大多数人的理由都值得尊敬。」', id: 'liu2_respect', effects: () => { changeRel('liu_ruyin', 8); setFlag('liu_respect'); G.charm += 1; }, next: SCENES['round2_hub'] },
    { text: '「所以你打算怎么做？」', id: 'liu2_plan', next: SCENES['round2_hub'] },
  ]);
};

SCENES['liu2_why_jinyi'] = () => {
  G.scene = 'liu2_why_jinyi';
  narrate(`\n柳如烟冷冷地笑了一声。'`);
  dialog('liu_ruyin', '选择？你以为锦衣卫是你自己选的？\n\n十二岁那年，朝廷清查前朝遗臣的家属。我母亲带着我东躲西藏，最后还是被抓了。他们没有杀我们——因为锦衣卫觉得我有用。');
  narrate(`她的声音平静得可怕。'`);
  dialog('liu_ruyin', '「你的父亲是前朝叛将，」他们对我说，「如果你替我们做事，他就不用死。否则——你知道后果。」\n\n那年我十二岁。你觉得一个十二岁的孩子能说什么？');
  divider();
  narrate(`她抬起下巴，眼神倔强。'`);
  dialog('liu_ruyin', '所以我当了锦衣卫。八年了。杀人、刺探、伪装——什么脏活都干过。但我从来没有忘记我为什么要做这些。\n\n现在你知道了。你满意了吗？');

  setFlag('liu_full_past');
  changeRel('liu_ruyin', 5);

  showChoices([{ text: '继续', next: SCENES['round2_hub'] }]);
};

SCENES['liu2_trust'] = () => {
  G.scene = 'liu2_trust';
  narrate(`\n柳如烟看了你很久。然后她做了一件出乎你意料的事——她从袖中取出了那块传讯铜牌，放在桌上。'`);
  dialog('liu_ruyin', '这是锦衣卫百户级的传讯铜牌。整个苍龙镇只有这一块。如果我把这个交给你——相当于把我的命交给你。\n\n我不会交。但现在——至少——我可以把它放在桌上，当着你的面。\n\n这已经是我能做到的最大的信任了。');

  narrate(`她收回铜牌，但动作不像白天那样迅速戒备，而是慢慢地、从容地收回。\n\n像是在说：我愿意让你看到我的弱点。'`);

  setFlag('liu_showed_trust');
  changeRel('liu_ruyin', 8);
  G.charm += 1;

  showChoices([{ text: '继续', next: SCENES['round2_hub'] }]);
};

// ---- 赵铁牛深度对话 ----
SCENES['talk_zhao_2'] = () => {
  G.scene = 'talk_zhao_2';
  narrate(`\n你走到赵铁牛身边。他正对着壁炉发呆，铁锤搁在脚边，手里攥着一个铜酒壶。\n\n看到你，他拍了拍旁边的椅子。'`);
  dialog('zhao_tieniu', '来，坐。今晚这火烤得舒服。');

  const choices = [];
  if (hasFlag('knows_zhao_past') || hasFlag('zhao_told_hei_blade')) {
    choices.push({ text: '「赵大哥，你说你在边军当过百夫长——是哪一场仗之后不想打了？」', id: 'zhao2_war', next: SCENES['zhao2_war'] });
  }
  if (hasFlag('suspects_mole')) {
    choices.push({ text: '「你说的内鬼……你有怀疑的对象吗？」', id: 'zhao2_mole', next: SCENES['zhao2_mole'] });
  }
  choices.push({ text: '「赵大哥，你为什么这么信任我？我们才认识半天。」', id: 'zhao2_trust', next: SCENES['zhao2_trust'] });
  choices.push({ text: '告辞', id: 'zhao2_leave', next: SCENES['round2_hub'] });

  showChoices(choices);
};

SCENES['zhao2_war'] = () => {
  G.scene = 'zhao2_war';
  narrate(`\n赵铁牛盯着壁炉里的火，眼中的光芒跟着火焰跳动。\n\n沉默了很久，他才开口。'`);
  dialog('zhao_tieniu', '最后一仗……是北疆的乌兰关。我们三百人守关，对面是两千骑兵。打了三天三夜。');
  narrate(`他的声音变得很轻，像是在自言自语。'`);
  dialog('zhao_tieniu', '最后活下来的，包括我在内，只有七个人。我最好的兄弟——张二狗、李大嘴、刘瘸子——都死在那儿了。张二狗临死前拉着我的手说：「老赵，我老婆怀着孩子……你替我去看看……」');
  divider();
  narrate(`他仰头灌了一大口酒，擦了擦嘴。'`);
  dialog('zhao_tieniu', '我去了。他的老婆生了，是个儿子。但朝廷的人比我先到——他们把张二狗的遗物翻了个底朝天，因为他也是前朝禁卫军的。\n\n我到的时候，那个女人抱着孩子跪在废墟里。她什么都没有了。丈夫死了，家被烧了，朝廷还追着她要什么「名单」。');
  narrate(`赵铁牛的拳头握得咯咯响。'`);
  dialog('zhao_tieniu', '从那天起，我就不想再当兵了。不为朝廷打仗，也不为谁打仗。我就想——保护好身边的人。\n\n打铁，至少打出来的是有用的东西。每一锤下去，都是实实在在的。\n不像杀人。杀人是空的。杀完了什么都没有。');

  setFlag('zhao_full_past');
  changeRel('zhao_tieniu', 10);
  G.wits += 1;

  showChoices([{ text: '继续', next: SCENES['round2_hub'] }]);
};

SCENES['zhao2_mole'] = () => {
  G.scene = 'zhao2_mole';
  narrate(`\n赵铁牛的表情变得凝重。他左右看了看，压低声音。'`);
  dialog('zhao_tieniu', '我不能确定。但有一个人……我一直觉得不太对劲。');
  narrate(`他犹豫了一下。'`);
  dialog('zhao_tieniu', '胡青娘。她是十年前来的苍龙镇，接手了药铺。人很精明，做生意也厉害。但是——她的情报来源太多了。有时候我甚至觉得，她知道的比沈老板还多。\n\n一个开药铺的，怎么会知道那么多？');

  if (hasFlag('saved_hu') || getRel('hu_qingniang') > 10) {
    narrate(`\n你对胡青娘的印象不错，但赵铁牛说的也不无道理。一个普通的药铺掌柜，确实不可能掌握那么多秘密。'`);
  }

  setFlag('zhao_suspects_hu');
  showChoices([{ text: '继续', next: SCENES['round2_hub'] }]);
};

SCENES['zhao2_trust'] = () => {
  G.scene = 'zhao2_trust';
  narrate(`\n赵铁牛咧嘴笑了，露出一口大白牙。'`);
  dialog('zhao_tieniu', '哈！你这人说话直，我喜欢。为什么信任你？——因为你看人的眼神对。');
  narrate(`他敲了敲自己的太阳穴。'`);
  dialog('zhao_tieniu', '我打了十年仗，见过形形色色的人。有些人看你的眼神是在算计你，有些人看你是想利用你，有些人根本不看你——这种人最危险。\n\n但你看我的时候，是正眼看的。不躲不闪，不卑不亢。这种人——要么是真君子，要么是大奸。\n\n我赌你是前者。');

  changeRel('zhao_tieniu', 5);
  G.charm += 1;
  showChoices([{ text: '继续', next: SCENES['round2_hub'] }]);
};

// ---- 白云生深度对话 ----
SCENES['talk_bai_2'] = () => {
  G.scene = 'talk_bai_2';
  narrate(`\n你走到白云生身边。他坐在窗边，月光洒在他的半边脸上，另一半沉在阴影里。\n\n他正对着一杯酒出神，听到你过来，微微笑了。'`);
  dialog('bai_yunsheng', '月色不错。在苍龙镇能看到这么干净的月亮，难得。');

  const choices = [];
  if (hasFlag('bai_revealed_past')) {
    choices.push({ text: '「白先生，你既然知道落雁峰的秘密——为什么不自己去？」', id: 'bai2_why_not_go', next: SCENES['bai2_why_not_go'] });
  }
  if (hasFlag('bai_secret') || hasFlag('bai_respects')) {
    choices.push({ text: '「你那天机卷到底是怎么回事？」', id: 'bai2_tianji', next: SCENES['bai2_tianji'] });
  }
  choices.push({ text: '「你平时一个人待着不闷吗？」', id: 'bai2_lonely', next: SCENES['bai2_lonely'] });
  choices.push({ text: '告辞', id: 'bai2_leave', next: SCENES['round2_hub'] });

  showChoices(choices);
};

SCENES['bai2_why_not_go'] = () => {
  G.scene = 'bai2_why_not_go';
  narrate(`\n白云生苦笑了一下，摇了摇头。'`);
  dialog('bai_yunsheng', '因为我知道自己是什么人——一个手无缚鸡之力的书生。落雁峰的山路不好走，而且到了那里——还需要打架。\n\n你看今晚这客栈里的人：沈老板深藏不露，柳如烟身手了得，赵铁牛力大无穷，还有那个还没露面的杀手……我呢？我连剑都拿不稳。');
  narrate(`他低头看着自己的手——修长、白净、指尖沾着墨迹。这双手确实不像拿剑的手。'`);
  dialog('bai_yunsheng', '但我有一件他们都没有的东西。');
  divider();
  narrate(`他从怀里掏出一块玉牌，在月光下翻转。玉牌泛着淡淡的青光，上面刻着一个古篆「${hl('书')}」字。'`);
  dialog('bai_yunsheng', '这是三年前我在落雁峰上找到的。我当时一个人爬上去，差点摔死。找到这块玉牌的时候，我浑身是血。\n\n但我知道，这块东西比我的命重要。所以这三年来，我走遍了大半个中原，一直在找另外两块。');
  narrate(`他看着你，眼神认真。'`);
  dialog('bai_yunsheng', `你是第一个让我觉得——可以托付的人。不是因为你能打，而是因为你……${hl('不会因为拿到权力就变成另一个人。')}至少我是这么觉得的。\n\n希望我没看错。'`);

  setFlag('bai_showed_key');
  changeRel('bai_yunsheng', 5);

  showChoices([{ text: '继续', next: SCENES['round2_hub'] }]);
};

SCENES['bai2_tianji'] = () => {
  G.scene = 'bai2_tianji';
  narrate(`\n白云生压低声音，凑近了一些。'`);
  dialog('bai_yunsheng', '天机卷……你真的想知道？好。天机卷是前朝皇帝在覆灭前留下的最后一样东西。上面记载着一千七百个前朝遗臣的真名、藏身之处、和他们的家人信息。');
  narrate(`他竖起一根手指。'`);
  dialog('bai_yunsheng', `但这里有一个绝大多数人都不知道的秘密——天机卷上不只是名字。在卷轴的最后一段，用暗文写着另一段信息。\n\n${hl('前朝覆灭时，从皇宫里运出了一批财宝。那批财宝的藏匿地点，就在天机卷里。')}\n\n这个秘密，连沈孤雁都不一定知道。'`);
  divider();
  narrate(`他的表情变得复杂。'`);
  dialog('bai_yunsheng', '你知道这意味着什么吗？如果只是一份名单，朝廷想要，遗臣想要，各怀目的但规模有限。\n但如果加上那批财宝——价值连城的财宝——那就不是一千七百人的事了。是整个天下的事。\n\n到时候想要那份卷轴的人会多出十倍。为了钱，什么人都可能来。');

  setFlag('knows_tianji_treasure');
  G.wits += 2;
  changeRel('bai_yunsheng', 5);

  showChoices([{ text: '继续', next: SCENES['round2_hub'] }]);
};

SCENES['bai2_lonely'] = () => {
  G.scene = 'bai2_lonely';
  narrate(`\n白云生愣了一下，然后笑了——是真的笑，不是苦笑也不是装醉时的傻笑。'`);
  dialog('bai_yunsheng', '闷？当然闷。三年了，没有一个人可以正常说话。要么装醉，要么装傻，要么装疯。你知道最难受的是什么吗？不是没有朋友，是不能有朋友。\n\n因为一旦你让别人了解你，你就暴露了。暴露了，就完了。');
  narrate(`他看着窗外的月亮，声音轻了下去。'`);
  dialog('bai_yunsheng', '所以——谢谢你愿意跟我正常聊天。三年了，你是第一个。');

  setFlag('bai_appreciation');
  changeRel('bai_yunsheng', 5);
  G.charm += 1;

  showChoices([{ text: '继续', next: SCENES['round2_hub'] }]);
};

// ---- 回房休息（衔接night_falls） ----
SCENES['go_to_room'] = () => {
  G.scene = 'go_to_room';
  G.location = 'inn_room';
  G.time = 'night';
  narrate(`\n你回到天字三号房，关上门，在油灯下坐了一会儿。\n\n窗外的风大了起来，吹得窗棂咯吱作响。远处的山脊完全沉入了黑暗中，只剩下天空中的星星和半弯月亮。\n\n今天得到的信息太多了，需要在脑子里好好理一理。'`);

  divider();

  if (hasFlag('knows_tianji')) {
    narrate(`天机卷——一千七百个名字。近万人的生死。这份卷轴就在落雁峰上。\n\n每个人都在找它，每个人对它的打算都不同。\n沈孤雁想守护，柳如烟想销毁，黑无极想带走……还有白云生说的财宝秘密。\n\n${dg('而你想怎么做？')}你还不确定。'`);
  }

  narrate(`\n你脱了外衣，和衣躺在床上。枕头下面是你的剑——手一伸就能碰到。\n\n隔壁传来轻微的响动，像是有人在整理东西。走廊尽头偶尔有脚步声经过。\n\n${hl('这个客栈里，没有人真的在睡觉。')}'`);

  divider();
  narrate(`你的眼皮越来越重……白天的疲惫终于涌上来……\n\n不知过了多久——'`);

  showChoices([
    { text: '……', id: 'go_to_sleep', next: SCENES['night_falls'] },
  ]);
};

// ---- 傍晚外出探索 ----
SCENES['evening_explore'] = () => {
  G.scene = 'evening_explore';
  G.location = 'town_street';
  G.time = 'dusk';
  clearStory();
  narrate(`你推门走出客栈。\n\n苍龙镇的街道在暮色中显得格外安静。石板路面上积着白天的雨水，倒映出天边最后一抹橘红的晚霞。\n沿街的店铺大多已经打烊，只有几盏昏黄的灯笼挂在门口，在晚风中轻轻摇晃。\n\n远处的山脊像一道黑色的锯齿，将天空切割成不规则的形状。'`);

  divider();
  narrate(`你可以去这些地方：'`);

  const choices = [];
  choices.push({ text: '胡青娘的药铺（还亮着灯）', id: 'visit_pharmacy', next: SCENES['visit_pharmacy'] });
  choices.push({ text: '街角的茶馆（似乎还有人）', id: 'visit_teahouse', next: SCENES['visit_teahouse'] });
  choices.push({ text: '铁匠铺（炉火未熄）', id: 'visit_blacksmith', next: SCENES['visit_blacksmith'] });
  choices.push({ text: '河边（月光照在水面，隐约有人影）', id: 'visit_riverside', next: SCENES['visit_riverside'] });
  choices.push({ text: '祠堂（黑漆漆的，但门开着）', id: 'visit_hall', next: SCENES['visit_hall'] });
  choices.push({ text: '回客栈', id: 'explore_back_inn', next: SCENES['explore_inn'] });

  showChoices(choices);
};

// ---- 药铺 ----
SCENES['visit_pharmacy'] = () => {
  G.scene = 'visit_pharmacy';
  G.location = 'pharmacy';
  narrate(`\n你推开药铺的门，铜铃叮当作响。\n\n药铺不大，但收拾得很整齐。三面墙都是药柜，每个抽屉上贴着手写的标签——黄芪、当归、川芎、白芍……空气里弥漫着草药混合的苦香。\n\n柜台后面站着一个三十来岁的女子，正在用小秤称量药材。她穿着一身素色布衣，头发松松地挽着，面容清秀但眼神极为锐利。'`);

  divider();
  narrate(`她抬起头，打量了你一眼。那目光像一把小刀，三两下就把你从上到下量了个透。'`);
  dialog('hu_qingniang', '哦？客栈来的？沈老板的客人。坐吧，要买药还是问话？\n\n提醒你一句——在我这里，买药便宜，问话贵。');

  if (!G.relationships.hu_qingniang) G.relationships.hu_qingniang = 0;
  setFlag('met_hu_qingniang');

  showChoices([
    { text: '「买药。」（掏出几枚铜板）', id: 'pharmacy_buy', effects: () => { changeRel('hu_qingniang', 2); }, next: SCENES['pharmacy_buy'] },
    { text: '「听说你的药铺不只是卖药的。」', id: 'pharmacy_info', effects: () => { G.wits += 1; }, next: SCENES['pharmacy_info'] },
    { text: '「随便看看。」', id: 'pharmacy_look', next: SCENES['pharmacy_look'] },
  ]);
};

SCENES['pharmacy_buy'] = () => {
  G.scene = 'pharmacy_buy';
  narrate(`\n胡青娘微微一笑，从柜台下面取出一个小布包。'`);
  dialog('hu_qingniang', '聪明人。先买东西再说话，大家都不尴尬。\n\n这是金创药，江湖人必备。给你打八折——因为你是沈老板介绍来的。');
  narrate(`她把布包推过来，然后压低声音。'`);
  dialog('hu_qingniang', '不过……看你的气色，你需要的不是金创药。你今天喝了不少酒吧？沈老板的酒里加了「安神散」，量不大，但足以让人反应变慢。我给你配一副解药，免费的——算我送你的人情。');
  divider();
  narrate(`她转身从药柜深处取出一瓶绿色的小药丸，放在柜台上。'`);
  dialog('hu_qingniang', '至于为什么要送你人情——因为我需要你帮我一个忙。你觉得这镇上最近来了多少人？我告诉你：至少十二个。其中四个是朝廷的暗探，两个是杀手组织的人，还有几个……来历不明。');
  narrate(`她看着你的眼睛，语气变得认真。'`);
  dialog('hu_qingniang', '我的情报网被人渗透了。有人在出卖我的消息。如果我找不到内鬼——下一个死的就是我。');

  addItem('金创药');
  addItem('解药');
  setFlag('hu_gave_antidote');
  setFlag('knows_hu_spy_problem');

  showChoices([
    { text: '「我帮你查内鬼。」', id: 'pharmacy_help', effects: () => { setFlag('promised_hu_spy'); changeRel('hu_qingniang', 10); }, next: SCENES['evening_explore'] },
    { text: '「这个忙太大了，我需要想想。」', id: 'pharmacy_think', next: SCENES['evening_explore'] },
  ]);
};

SCENES['pharmacy_info'] = () => {
  G.scene = 'pharmacy_info';
  narrate(`\n胡青娘的眼神闪了一下，然后笑了——不是友善的笑，更像是猎手发现了猎物的笑。'`);
  dialog('hu_qingniang', '消息灵通嘛。是的，我不只是卖药的。我做的生意——怎么形容呢——是信息的买卖。你想要什么消息？来路、去路、秘密、真相——只要出得起价，我都有。');
  divider();
  narrate(`她从柜台后面绕出来，靠在门框上，抱着手臂。'`);
  dialog('hu_qingniang', '不过先说好，我没有免费的消息。等价交换——这是我的规矩。你给我一条有用的消息，我给你一条。公平。');

  setFlag('knows_hu_info_broker');

  showChoices([
    { text: '「你知道这镇上有哪些人在找天机卷？」', id: 'pharmacy_tianji', effects: () => { setFlag('asked_hu_about_tianji'); }, next: SCENES['pharmacy_tianji'] },
    { text: '「我暂时没有消息跟你换。」', id: 'pharmacy_no_trade', next: SCENES['evening_explore'] },
  ]);
};

SCENES['pharmacy_tianji'] = () => {
  G.scene = 'pharmacy_tianji';
  narrate(`\n胡青娘歪了歪头，似乎在权衡值不值得说。然后她笑了。'`);
  dialog('hu_qingniang', '你还没给我消息呢，就要我爆料？不过——看你像是真的什么都不知道的样子，我就大方一次。\n\n据我所知，目前至少有三拨人在找天机卷：第一拨是朝廷的暗探——就是你客栈里那位柳姑娘；第二拨是杀手组织的人——暗星阁的残部，头目叫黑无极；第三拨……是你自己。');
  narrate(`她竖起三根手指，一根一根地弯下去。'`);
  dialog('hu_qingniang', '三拨人，三个目的，都在一个小镇上。你觉得会发生什么？\n\n我告诉你——会死人。\n\n而且已经死了。三天前，镇东的李裁缝死了，说是「失足落井」。两天前，河边老孙头的渔船翻了，人也没了。\n\n你不觉得太巧了吗？一个「失足落井」，一个「渔船翻覆」——两个人，三天之内，接连出事？');

  setFlag('knows_deaths');
  setFlag('knows_tianji');
  changeRel('hu_qingniang', 3);

  showChoices([{ text: '继续探索', next: SCENES['evening_explore'] }]);
};

SCENES['pharmacy_look'] = () => {
  G.scene = 'pharmacy_look';
  narrate(`\n你在药铺里随便逛了逛。药柜整整齐齐，空气中弥漫着各种草药的味道。\n\n你注意到药柜最下面一排的抽屉上没有标签，而且比其他抽屉新——木头的颜色更浅，像是后来加上去的。\n\n其中一个抽屉没有完全关紧，你瞥到里面放着几封${hl('信件')}和一块${hl('玉牌')}的边缘。'`);
  dialog('hu_qingniang', '看够了？那些是私人物品。请自重。');
  narrate(`胡青娘的声音从身后传来，不冷不热，但有一种不容置疑的威压。'`);

  setFlag('saw_hu_hidden_drawer');
  G.wits += 1;

  showChoices([{ text: '离开药铺', next: SCENES['evening_explore'] }]);
};

// ---- 茶馆 ----
SCENES['visit_teahouse'] = () => {
  G.scene = 'visit_teahouse';
  G.location = 'teahouse';
  narrate(`\n茶馆在街角，门口挂着一块掉漆的招牌——「品茗轩」。\n\n推门进去，茶馆不大，四五张方桌，只有一个老太太在柜台后面嗑瓜子。她五十来岁，圆脸、小眼，看起来慈眉善目，但嘴巴一直在动——不是嗑瓜子就是在说话。'`);
  dialog('li_tiejiang2', '哎呀，又来一个生面孔！最近这镇上外乡人可真多。来来来，坐坐坐！我这里的碧螺春是全镇最好的，五文钱一壶，续水免费！');
  divider();
  narrate(`她给你倒了茶，嘴巴一刻不停。'`);
  dialog('li_tiejiang2', '你是打哪儿来的？来干嘛的？住客栈的吧？沈孤雁那人我知道，开了十几年客栈了，人不错，就是太安静了——不合群。不像我，整天跟街坊邻居聊天，什么都知道！');
  narrate(`她凑近了一些，压低声音，但音量还是跟正常人说话差不多。'`);
  dialog('li_tiejiang2', '你知道最近这镇上不太平吗？前两天李裁缝死了——对，就是镇东做衣服的老李。说是落井了，但我不信！他每天早上五点起来打太极拳，身手利索得很，怎么可能落井？');

  setFlag('met_li_shen');

  showChoices([
    { text: '「你觉得他是怎么死的？」', id: 'teahouse_ask', next: SCENES['teahouse_ask'] },
    { text: '「你还知道什么？」', id: 'teahouse_more', next: SCENES['teahouse_more'] },
    { text: '喝完茶离开', id: 'teahouse_leave', next: SCENES['evening_explore'] },
  ]);
};

SCENES['teahouse_ask'] = () => {
  G.scene = 'teahouse_ask';
  narrate(`\n李婶左右看了看，确认没有其他人，然后用她那并不算小的声音说：'`);
  dialog('li_tiejiang2', '我跟你说啊——老李不是普通人！他以前在京城做什么……翰什么……翰林！对，翰林院的官！十年前来苍龙镇改行做了裁缝。你说一个翰林院的官能不会躲井？肯定是被推下去的！');
  narrate(`她拍了一下桌子，震得茶杯都跳了一下。'`);
  dialog('li_tiejiang2', '还有河边老孙头，也是前两天没的。他们俩跟沈孤雁走得近——经常半夜三更聚在客栈后院嘀嘀咕咕。你说他们嘀咕什么？');
  divider();
  narrate(`她看着你，眼睛亮得像两颗探照灯。'`);
  dialog('li_tiejiang2', `我什么都知道，但我不说——因为说了我也得死。不过你不一样，你是外乡人，查完就走了。所以我可以告诉你——\n\n${hl('小心那个铁匠。')}不是说他坏，而是他知道的比你想象的多得多。\n\n还有——${dg('最近镇子外面来了几个人。黑衣的。晚上不要出门。')}'`);

  setFlag('li_shen_info');
  G.wits += 1;

  showChoices([{ text: '继续探索', next: SCENES['evening_explore'] }]);
};

SCENES['teahouse_more'] = () => {
  G.scene = 'teahouse_more';
  narrate(`\n李婶来了兴致，瓜子也不嗑了。'`);
  dialog('li_tiejiang2', '哎哟，你想听什么？这镇上的事我全知道——谁家鸡被偷了、谁和谁好上了、谁半夜偷偷出门了——我全知道！\n\n比如说，那个药铺的胡青娘——她每个月都会收到从外地寄来的信，但从来不让人看。还有那个书生白云生——白天醉成烂泥，晚上清醒得跟猫头鹰似的，我亲眼看到他半夜在街上走，步伐稳得很。\n\n还有那个黑衣姑娘——');
  narrate(`她突然收住了嘴，像是说多了。'`);
  dialog('li_tiejiang2', '算了算了，有些事还是不说了。总之你小心着点。这镇上……不简单。');

  setFlag('li_shen_gossip');
  G.wits += 1;

  showChoices([{ text: '继续探索', next: SCENES['evening_explore'] }]);
};

// ---- 铁匠铺 ----
SCENES['visit_blacksmith'] = () => {
  G.scene = 'visit_blacksmith';
  G.location = 'blacksmith';
  narrate(`\n赵铁牛的铁匠铺在镇子西头。你到的时候，炉火还没完全熄灭，红红的炭火映照着满墙的工具——锤子、钳子、铁砧、模具。\n\n但赵铁牛不在。\n\n铺子后面有一扇木门，虚掩着。你推开门——里面是一个小院子，院子角落有一扇${hl('地窖的门')}，门上挂着一把铁锁。\n\n但锁是开的。'`);

  divider();
  narrate(`你应该进去吗？这是别人的地盘。\n\n但你的直觉告诉你——地窖里藏着重要的东西。'`);

  showChoices([
    { text: '进去看看（心机检定）', id: 'blacksmith_cellar', req: [[() => req('wits', 12), '心机≥12']], next: SCENES['blacksmith_cellar'] },
    { text: '不进去了，等人回来', id: 'blacksmith_wait', next: SCENES['blacksmith_wait'] },
    { text: '离开', id: 'blacksmith_leave', next: SCENES['evening_explore'] },
  ]);
};

SCENES['blacksmith_cellar'] = () => {
  G.scene = 'blacksmith_cellar';
  narrate(`\n你确认周围没人，然后悄悄走下地窖的台阶。\n\n地窖不大，但收拾得非常整齐。左边墙上挂着一面${hl('旗帜')}——深红色的底，上面绣着一条金色的龙。旗帜虽然旧了，但保存得很好，被仔细地叠好挂在墙上。\n\n${hl('前朝禁卫军的军旗。')}'`);
  narrate(`旗帜下面是一个木架子，上面摆着几十个木牌。每个木牌上刻着一个名字和日期。你凑近看了看——\n\n「赵承志 · 永安元年入」\n「张铁柱 · 永安二年入」\n「孙大力 · 永安三年入」\n……\n\n一共四十七个名字。${hl('这是一份名册')}——前朝禁卫军某个小队的名册。'`);
  divider();
  narrate(`你正要继续看，身后传来了沉重的脚步声。\n\n${dg('赵铁牛站在地窖门口，堵住了你的退路。')}\n\n他的表情……很难形容。不是愤怒，不是惊慌，而是一种……${hl('认命')}。'`);
  dialog('zhao_tieniu', '……你看到了。');
  narrate(`沉默。地窖里的空气像凝固了一样。\n\n然后赵铁牛长叹一声，走下台阶，在你对面坐了下来。'`);
  dialog('zhao_tieniu', '四十七个兄弟。活着的……加上我，还有十一个。其他三十六个——全死了。\n\n这面旗和这本名册，是我唯一能替他们留下来的东西。');

  setFlag('found_zhao_cellar');
  setFlag('knows_zhao_real_name');
  changeRel('zhao_tieniu', -5);

  showChoices([
    { text: '「赵大哥——赵承志——我不会告诉任何人。」', id: 'cellar_promise', effects: () => { setFlag('promised_zhao_secret'); changeRel('zhao_tieniu', 15); G.charm += 1; }, next: SCENES['cellar_promise'] },
    { text: '「为什么把这些藏在地窖里？」', id: 'cellar_ask_why', next: SCENES['cellar_ask_why'] },
  ]);
};

SCENES['cellar_promise'] = () => {
  G.scene = 'cellar_promise';
  narrate(`\n赵铁牛——不，赵承志——看着你的眼睛，审视了很久。\n\n然后他伸出一只大手，重重地拍在你的肩上。'`);
  dialog('zhao_tieniu', '……好。我信你。\n\n你叫我赵铁牛就好。赵承志这个人已经死了十年了。现在站在这里的，只是一个打铁的粗人。');
  narrate(`他站起身，从名册旁边取出一把包了布的刀，递给你。'`);
  dialog('zhao_tieniu', '这把刀是我当年用过的。虽然不如新刀锋利，但经过战阵的东西，有灵性。你拿着——比你那把好。');

  addItem('赵铁牛的旧刀');
  G.sword += 2;

  showChoices([{ text: '继续探索', next: SCENES['evening_explore'] }]);
};

SCENES['cellar_ask_why'] = () => {
  G.scene = 'cellar_ask_why';
  narrate(`\n赵承志看了看那面军旗。'`);
  dialog('zhao_tieniu', '因为……如果有一天，我死了，或者被抓了，总得有人知道这些人曾经存在过。这面旗、这本名册，就是我替他们守着的——记忆。\n\n活着的人可以换名字、换身份、换生活。但死了的人不能。至少……他们的名字不该被遗忘。');
  narrate(`他沉默了一会儿，然后看了你一眼。'`);
  dialog('zhao_tieniu', '你是个好人。但这事到此为止。出去吧，忘掉你看到的。\n\n或者——如果你愿意帮我守住这个秘密——你就是我赵承志的朋友。一辈子的那种。');

  changeRel('zhao_tieniu', 5);
  showChoices([{ text: '继续探索', next: SCENES['evening_explore'] }]);
};

SCENES['blacksmith_wait'] = () => {
  G.scene = 'blacksmith_wait';
  narrate(`\n你在铺子里等了一会儿。不久，赵铁牛回来了，手里提着一捆铁条。\n看到你在，他咧嘴笑了。'`);
  dialog('zhao_tieniu', '嘿！跑我这儿来了？怎么，想学打铁？来来来，我教你——打铁跟练剑一样，都是手上的活儿。');
  narrate(`你帮他把铁条搬进去。在搬运的过程中，你注意到他打开地窖门时，动作很自然——像是每天都要进去看看的样子。'`);

  changeRel('zhao_tieniu', 3);
  showChoices([{ text: '继续探索', next: SCENES['evening_explore'] }]);
};

// ---- 河边 ----
SCENES['visit_riverside'] = () => {
  G.scene = 'visit_riverside';
  G.location = 'riverside';
  narrate(`\n你沿着小路来到河边。\n\n苍龙镇依水而建，一条宽约十丈的河流从镇边蜿蜒而过。月光洒在水面上，碎成千万片银色的鳞光。\n\n河边停着几条渔船，但都空着。芦苇丛在夜风中沙沙作响，偶尔有水鸟从水面掠过，留下一圈圈涟漪。\n\n在渡口的石阶上，坐着一个老人。'`);

  divider();
  narrate(`他约莫六十来岁，花白头发，穿着打了补丁的粗布衣裳。手里握着一根鱼竿，但浮标一动不动——他显然不是在钓鱼。\n\n他在看着水面发呆。月光下，他的脸上有一道从左额延伸到右颊的${hl('旧伤疤')}，像一条蜿蜒的蜈蚣。'`);
  dialog('old_sun', '……年轻人，这么晚了还出来晃？河边风大，小心着凉。');
  narrate(`他的声音沙哑但沉稳，带着一种老军人才有的笃定。'`);

  if (!G.relationships.old_sun) G.relationships.old_sun = 0;
  setFlag('met_old_sun');

  showChoices([
    { text: '坐下来，陪他一起看水', id: 'riverside_sit', effects: () => { changeRel('old_sun', 5); }, next: SCENES['riverside_sit'] },
    { text: '「老人家，你是打渔的？」', id: 'riverside_ask', next: SCENES['riverside_ask'] },
    { text: '看了一眼就离开', id: 'riverside_leave', next: SCENES['evening_explore'] },
  ]);
};

SCENES['riverside_sit'] = () => {
  G.scene = 'riverside_sit';
  narrate(`\n你在他旁边坐下。两人沉默了很久。\n\n河水在月光下静静地流。远处的山脊在夜色中像一道黑色的城墙。\n\n老人突然开口了。'`);
  dialog('old_sun', '你闻到了吗？河水的味道。不是鱼腥味，是——泥味。河底的泥。只有打了二十年鱼的人才能闻出来。\n\n这条河，我守了二十年了。比沈孤雁的客栈还久。');
  narrate(`他转头看你，老眼里闪着光。'`);
  dialog('old_sun', `你猜我为什么守在这里？不是因为喜欢打鱼。是因为——${hl('渡口')}。所有进出苍龙镇的人，都要经过这个渡口。谁来了、谁走了、谁带了什么东西——我全知道。'`);

  divider();
  narrate(`他从怀里掏出一本皱巴巴的小册子，翻了几页。'`);
  dialog('old_sun', '最近半个月，有十二个外乡人进了苍龙镇。其中四个从北边来——朝廷的方向。两个从西边来——杀手出没的方向。还有几个……来路不明。');
  narrate(`他合上册子，塞回怀里。'`);
  dialog('old_sun', '你问我要消息？我什么都知道。但我只告诉——信得过的人。你想想，你值不值得我信任。');

  setFlag('old_sun_records');
  changeRel('old_sun', 3);
  G.wits += 1;

  showChoices([{ text: '继续探索', next: SCENES['evening_explore'] }]);
};

SCENES['riverside_ask'] = () => {
  G.scene = 'riverside_ask';
  narrate(`\n老人笑了一声，摇了摇头。'`);
  dialog('old_sun', `打鱼的？算是吧。不过我以前干的是另一行——${hl('看门')}。\n\n不是看院子的门。是看——城门。\n\n前朝的京城北门，我守了十五年。每天看多少人进多少出。练出来的眼力——到现在还管用。'`);
  narrate(`他拍了拍自己的眼睛。'`);
  dialog('old_sun', '这双老眼，还没瞎。谁在说谎、谁在假装、谁心怀鬼胎——看一眼就知道。\n\n比如你——你不是坏人。但你在找什么东西。对吧？');

  setFlag('knows_old_sun_past');
  showChoices([{ text: '继续探索', next: SCENES['evening_explore'] }]);
};

// ---- 祠堂 ----
SCENES['visit_hall'] = () => {
  G.scene = 'visit_hall';
  G.location = 'ancestral_hall';
  narrate(`\n苍龙镇的祠堂在镇子最北端，背靠后山，孤零零地立着。\n\n白天的雨水让石阶变得湿滑。祠堂的大门虚掩着，门上的红漆已经剥落了大半，露出灰白色的木头。\n\n门楣上刻着「${hl('苍龙祠')}」三个字，字迹苍劲有力，但被风雨侵蚀得模糊了。'`);
  divider();
  narrate(`你推门进去。\n\n祠堂内部比想象中大。正中是一张供桌，上面摆着几十个牌位。香炉里的香已经灭了很久，只留下半截灰烬。\n\n供桌后面的墙上挂着一幅巨大的画像——一个穿官服的中年男子，面容威严。\n画像下方有一行小字：${hl('"前朝苍龙镇守备 陈伯庸之像"')}'`);

  narrate(`\n你环顾四周。祠堂左边有一扇小门，通向${hl('偏殿')}。右边墙角有一个被布帘遮住的东西——布帘下面的形状像是一扇${hl('地下通道的门')}。'`);

  setFlag('visited_hall');

  showChoices([
    { text: '查看偏殿', id: 'hall_side', next: SCENES['hall_side'] },
    { text: '掀开布帘看看', id: 'hall_hidden', next: SCENES['hall_hidden'] },
    { text: '查看牌位', id: 'hall_tablets', next: SCENES['hall_tablets'] },
    { text: '离开祠堂', id: 'hall_leave', next: SCENES['evening_explore'] },
  ]);
};

SCENES['hall_side'] = () => {
  G.scene = 'hall_side';
  narrate(`\n你走进偏殿。\n\n偏殿很小，只有一间屋子大小。墙上挂着几幅字画，都已经泛黄了。但其中一幅引起了你的注意——\n\n那是一首诗：\n\n${hl('"雁过长空影自寒，\n故人坟前草已斑。\n一卷天机藏万象，\n三枚玉钥启重关。"')}'`);
  narrate(`\n你的心猛跳了一下。\n\n「一卷天机藏万象，三枚玉钥启重关」——天机卷、三把钥匙。\n\n这首诗是线索。它明确告诉了后人：天机卷需要三把钥匙才能打开。\n而这三把钥匙，分散在不同人手中。\n\n落款处写着：${hl('"清婉 林氏 绝笔"')}。\n\n${dg('绝笔。')}写这首诗的人，已经死了。'`);

  setFlag('found_hall_poem');
  setFlag('knows_three_keys');
  G.wits += 2;

  showChoices([
    { text: '记下这首诗，继续查看', id: 'hall_side_continue', next: SCENES['visit_hall'] },
  ]);
};

SCENES['hall_hidden'] = () => {
  G.scene = 'hall_hidden';
  narrate(`\n你掀开布帘——果然是一扇石门，表面刻着复杂的纹路。\n\n石门上有一个圆形的凹槽，被分成三个扇形区域。每个区域的大小和形状，正好对应一块${hl('玉牌')}。\n\n这就是——${hl('通往地下密道的入口')}。'`);
  narrate(`\n你试着推了推石门，纹丝不动。没有玉牌，这扇门打不开。\n\n但你在石门旁边的地面上发现了一些痕迹——${dg('新鲜脚印')}。不止一个人的。\n\n有人最近来过这里。而且不止一次。'`);

  setFlag('found_hall_passage');
  G.wits += 1;

  showChoices([{ text: '继续查看', next: SCENES['visit_hall'] }]);
};

SCENES['hall_tablets'] = () => {
  G.scene = 'hall_tablets';
  narrate(`\n你走近供桌，查看牌位。\n\n大部分牌位都是正常的老祖宗名字——张王李赵，苍龙镇的寻常姓氏。但其中有几个牌位……${hl('不对劲')}。\n\n它们的木料比其他的更新，而且摆放的位置刻意避开了正中——像是后来加上去的。\n\n你仔细看了看：\n\n「林清婉之灵位」\n「张铁柱之灵位」\n「陈伯庸之灵位」\n……\n\n一共十七个。\n\n${hl('林清婉。')}这个名字——如果沈孤雁说的是真的——就是他的亡妻。\n\n这些牌位不是普通的祖先牌位。它们是${hl('活人的灵位')}——被立了牌位但人还没死，是一种「假死」的仪式。\n\n这些名字对应的人，都在苍龙镇或者附近用假名活着。而他们的牌位被放在这里，是为了${hl('掩人耳目')}——如果有人来查，看到牌位就会以为这些人已经死了。'`);

  setFlag('found_fake_tablets');
  G.wits += 2;

  showChoices([{ text: '继续查看', next: SCENES['visit_hall'] }]);
};
