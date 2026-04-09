// story_part26.js - 属性检定和隐藏内容

// ==================== 剑术检定场景 ====================

SCENES['sword_check_1'] = () => {
  G.scene = 'backyard';
  narrate(`赵铁牛递给你一把木剑。"来——跟我过两招。"他举起木锤朝你肩膀横扫过来。速度很快——你需要足够剑术才能反应。`);
  divider();
  showChoices([
    { text: '格挡！（剑术≥10）', id: 'sc1_b', req: [[() => req('sword', 10), '剑术≥10']], effects: () => { G.sword += 1; narrate(`你举剑格挡——木剑和木锤撞在一起。赵铁牛笑了："不错！有基础。"`); }, next: SCENES['lobby_free'] },
    { text: '闪避！（剑术≥8）', id: 'sc1_d', req: [[() => req('sword', 8), '剑术≥8']], effects: () => { G.wits += 1; narrate(`你侧身闪开。赵铁牛点头："身法不错。"`); }, next: SCENES['lobby_free'] },
    { text: '被砸中了', id: 'sc1_h', effects: () => { addHp(-10); narrate(`木锤砸在你肩膀上——疼得你龇牙咧嘴。赵铁牛挠头："呃……下次注意点。"`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['sword_check_2'] = () => {
  G.scene = 'street';
  narrate(`一个醉汉在街上拔刀闹事——朝你挥刀过来。刀法混乱但力气大。`);
  divider();
  showChoices([
    { text: '用剑拨开！（剑术≥12）', id: 'sc2_d', req: [[() => req('sword', 12), '剑术≥12']], effects: () => { G.sword += 1; narrate(`你精准地用剑背拨开了他的刀——刀脱手飞出。醉汉愣了一下然后瘫倒在地睡着了。`); }, next: SCENES['lobby_free'] },
    { text: '空手夺刀！（剑术≥15）', id: 'sc2_a', req: [[() => req('sword', 15), '剑术≥15']], effects: () => { G.sword += 2; narrate(`你不用剑——直接抓住他手腕一拧。刀掉了。围观的人鼓起了掌。`); }, next: SCENES['lobby_free'] },
    { text: '后退避让', id: 'sc2_b', effects: () => { narrate(`你后退几步——醉汉踉跄追了两步就倒了。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['sword_check_3'] = () => {
  G.scene = 'cave';
  narrate(`石室入口有一个机关——一道旋转刀阵。三把刀从墙壁两侧交替伸出。你需要足够快的剑术才能安全通过。`);
  divider();
  showChoices([
    { text: '冲过去拨开所有刀！（剑术≥16）', id: 'sc3_r', req: [[() => req('sword', 16), '剑术≥16']], effects: () => { G.sword += 1; narrate(`你冲入刀阵——剑光闪烁。三把刀全被拨开了。安全通过。`); }, next: SCENES['lobby_free'] },
    { text: '慢慢走找规律', id: 'sc3_s', effects: () => { G.wits += 1; narrate(`你观察了一会儿——发现刀阵有节奏。左、右、左。你趁间隙走了过去。`); }, next: SCENES['lobby_free'] },
    { text: '硬闯', id: 'sc3_f', effects: () => { addHp(-20); narrate(`你硬闯了——被两把刀划伤。不深但很疼。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['sword_check_4'] = () => {
  G.scene = 'combat';
  narrate(`黑无极向你发起切磋。"让我看看你的剑法有没有进步。"他出刀了——速度比之前慢但刀路刁钻。`);
  divider();
  showChoices([
    { text: '正面迎敌！（剑术≥18）', id: 'sc4_f', req: [[() => req('sword', 18), '剑术≥18']], effects: () => { G.sword += 2; changeRel('hei_wuji', 5); narrate(`你的剑和他的刀交了十招——最后一剑点在他喉结前。他笑了："好。你进步了。"`); }, next: SCENES['lobby_free'] },
    { text: '防守反击（剑术≥14）', id: 'sc4_c', req: [[() => req('sword', 14), '剑术≥14']], effects: () => { G.sword += 1; narrate(`你守了十招——找到了反击机会。被逼退了但黑无极点头表示认可。`); }, next: SCENES['lobby_free'] },
    { text: '认输', id: 'sc4_y', effects: () => { narrate(`"我打不过你。"黑无极收刀："知道打不过比打了还好。知道差距才能进步。"`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['sword_check_5'] = () => {
  G.scene = 'training';
  narrate(`沈孤雁教你"守夜剑法"——七代守护者传承下来的。不为杀敌只为保护。"每一招都可以转化为防御。"你需要足够剑术基础才能学会。`);
  divider();
  showChoices([
    { text: '学习守夜剑法（剑术≥13）', id: 'sc5_l', req: [[() => req('sword', 13), '剑术≥13']], effects: () => { G.sword += 3; setFlag('learned_guardian_sword'); narrate(`你学了三个时辰——掌握了守夜剑法基本招式。七招：守门、关窗、落锁、点灯、添柴、关门、吹灯。每招都是防御——但暗藏杀机。`); }, next: SCENES['lobby_free'] },
    { text: '先练基本功', id: 'sc5_b', effects: () => { G.sword += 1; narrate(`沈孤雁点头："不急。剑法可以慢慢学。但守护的心——你已经有了。"`); }, next: SCENES['lobby_free'] },
  ]);
};

// ==================== 心机检定场景 ====================

SCENES['wits_check_1'] = () => {
  G.scene = 'tavern';
  narrate(`一个自称商人的旅客和你搭话——但他手上有刀茧而非丝绸商人的茧。你需要判断他是否在说真话。`);
  divider();
  showChoices([
    { text: '试探他（心机≥10）', id: 'wc1_t', req: [[() => req('wits', 10), '心机≥10']], effects: () => { G.wits += 1; setFlag('spotted_fake_merchant'); narrate(`你问："今年苏杭丝价涨了还是跌了？"他犹豫后说了一个错误数字。这个人不是商人。`); }, next: SCENES['lobby_free'] },
    { text: '保持警惕但不追问', id: 'wc1_c', effects: () => { G.wits += 1; narrate(`你不动声色——但暗暗记住了他的特征。`); }, next: SCENES['lobby_free'] },
    { text: '完全相信他', id: 'wc1_tr', effects: () => { narrate(`你选择相信他——但直觉告诉你有些不对劲。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['wits_check_2'] = () => {
  G.scene = 'street';
  narrate(`胡青娘告诉你——有人在她的药里做了手脚。一种毒药被混进了药柜。你需要分析谁有动机、谁有机会、谁有能力。`);
  divider();
  showChoices([
    { text: '分析线索（心机≥12）', id: 'wc2_a', req: [[() => req('wits', 12), '心机≥12']], effects: () => { G.wits += 2; narrate(`你分析了三个条件：能进入药铺的人——客栈里的人。懂毒术的人——胡青娘和白云生。有动机的人——找天机卷线索的人。你把分析告诉了胡青娘——她的脸色变了。`); }, next: SCENES['lobby_free'] },
    { text: '帮胡青娘检查所有药品', id: 'wc2_h', effects: () => { narrate(`你花了两时辰检查——找到了三瓶被下毒的药。但没能推断出是谁干的。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['wits_check_3'] = () => {
  G.scene = 'tavern';
  narrate(`白云生醉醺醺地对你说："最危险的人不是拿刀的人——是笑眯眯递给你酒杯的人。"你需要理解这句话的真正含义。`);
  divider();
  showChoices([
    { text: '理解暗示（心机≥14）', id: 'wc3_u', req: [[() => req('wits', 14), '心机≥14']], effects: () => { G.wits += 2; setFlag('understood_bai_hint'); narrate(`你看了看客栈——谁一直在微笑？白云生的意思是：笑眯眯的人不一定可信。你需要自己判断——而不是被表面的温和所迷惑。`); }, next: SCENES['lobby_free'] },
    { text: '没听懂', id: 'wc3_m', effects: () => { narrate(`你点了点头——但没有理解白云生话中的深意。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['wits_check_4'] = () => {
  G.scene = 'tavern';
  narrate(`你在沈孤雁的房间里发现了一张纸条——上面写着：三、七、十二、五、九。这些数字代表什么？`);
  divider();
  showChoices([
    { text: '破解密码（心机≥15）', id: 'wc4_d', req: [[() => req('wits', 15), '心机≥15']], effects: () => { G.wits += 2; setFlag('decoded_numbers'); narrate(`这些数字是天机卷上的页码。沈孤雁在标记某些名字的位置。三个名字——他为什么特别标记这三个？`); }, next: SCENES['lobby_free'] },
    { text: '直接问沈孤雁', id: 'wc4_q', effects: () => { narrate(`沈孤雁微笑着接过纸条。"只是些记账的数字。"但他的笑容不太对。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['wits_check_5'] = () => {
  G.scene = 'street';
  narrate(`你发现有人在跟踪你——但回头时只看到一个普通路人。需要判断是否真有人在跟踪。`);
  divider();
  showChoices([
    { text: '设置陷阱验证（心机≥11）', id: 'wc5_t', req: [[() => req('wits', 11), '心机≥11']], effects: () => { G.wits += 1; setFlag('confirmed_tail'); narrate(`你故意绕了三个圈——那个路人每次都出现在身后。确实有人在跟踪你。但你假装没发现。`); }, next: SCENES['lobby_free'] },
    { text: '加速离开', id: 'wc5_r', effects: () => { narrate(`你加快脚步回了客栈。回头看——什么都没有。`); }, next: SCENES['lobby_free'] },
  ]);
};

// ==================== 魅力检定场景 ====================

SCENES['charm_check_1'] = () => {
  G.scene = 'tavern';
  narrate(`沈孤雁不太愿意告诉你关于天机卷的更多细节。`);
  divider();
  showChoices([
    { text: '真诚地表达关心（魅力≥10）', id: 'cc1_s', req: [[() => req('charm', 10), '魅力≥10']], effects: () => { changeRel('shen_guyan', 5); narrate(`"沈老板——我不是来抢天机卷的。我只是想帮忙。"他看了你很久——然后叹了口气："好吧——我告诉你一些……"`); }, next: SCENES['lobby_free'] },
    { text: '直接问', id: 'cc1_d', effects: () => { narrate(`"告诉我天机卷的事。"沈孤雁摇头："有些事不是问了就能知道的。"`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['charm_check_2'] = () => {
  G.scene = 'apothecary';
  narrate(`胡青娘对你的态度一直很冷淡。你需要打破她的防线。`);
  divider();
  showChoices([
    { text: '夸赞她的医术（魅力≥8）', id: 'cc2_p', req: [[() => req('charm', 8), '魅力≥8']], effects: () => { changeRel('hu_qingniang', 3); narrate(`"胡姐姐——你的医术真厉害。王大爷说你是全镇恩人。"她的嘴角微微上翘了。"……少说好话。"`); }, next: SCENES['lobby_free'] },
    { text: '直接问亡夫的事', id: 'cc2_a', effects: () => { changeRel('hu_qingniang', -5); narrate(`"你亡夫怎么死的？"她的脸色瞬间冷了。"不关你的事。"`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['charm_check_3'] = () => {
  G.scene = 'outskirts';
  narrate(`你遇到一群山匪堵路。打还是谈？`);
  divider();
  showChoices([
    { text: '说服他们让路（魅力≥12）', id: 'cc3_p', req: [[() => req('charm', 12), '魅力≥12']], effects: () => { G.charm += 1; narrate(`"兄弟们——我身上没值钱东西。但苍龙镇有间好客栈。听雨客栈——赵记铁器的锄头全镇最好。"山匪头目犹豫了——最后挥手让你过去了。`); }, next: SCENES['lobby_free'] },
    { text: '拔剑', id: 'cc3_f', effects: () => { addHp(-15); narrate(`你打了一架。赢了但受了伤。也许下次可以试试动嘴。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['charm_check_4'] = () => {
  G.scene = 'tavern';
  narrate(`赵铁牛和白云生吵了起来——赵铁牛说白云生字丑，白云生说赵铁牛是莽夫。你需要调解。`);
  divider();
  showChoices([
    { text: '两边说好话（魅力≥10）', id: 'cc4_m', req: [[() => req('charm', 10), '魅力≥10']], effects: () => { G.charm += 1; narrate(`"赵大哥的铁器全镇最好。白先生的诗写得不错。你们加一起——就是一个能写诗的铁匠。苍龙镇独一份。"两人都笑了——和解了。`); }, next: SCENES['lobby_free'] },
    { text: '不管', id: 'cc4_i', effects: () => { narrate(`你让他们吵。反正过一会儿赵铁牛就会忘记——白云生又会喝醉。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['charm_check_5'] = () => {
  G.scene = 'tavern';
  narrate(`柳如烟坐在角落一个人喝酒。你想过去聊聊——但她不容易接近。`);
  divider();
  showChoices([
    { text: '自然地走过去坐下（魅力≥14）', id: 'cc5_a', req: [[() => req('charm', 14), '魅力≥14']], effects: () => { changeRel('liu_ruyin', 5); narrate(`你走过去什么都没说——只是坐在她对面给她倒了一杯酒。她看了你一眼然后接过了杯子。过了一会儿她开口："你这个人——挺奇怪的。""哪里奇怪？""不让人讨厌的——就挺奇怪的。"`); }, next: SCENES['lobby_free'] },
    { text: '打个招呼就走', id: 'cc5_w', effects: () => { narrate(`你朝她点了点头——她也点了点头。没有多余的话。`); }, next: SCENES['lobby_free'] },
  ]);
};

// ==================== 组合检定场景 ====================

SCENES['combo_check_1'] = () => {
  G.scene = 'combat';
  narrate(`你在战斗中遇到难题——敌人刀法有破绽但你需要在正确时机用话术瓦解他的意志。需要剑术和魅力同时达标。`);
  divider();
  showChoices([
    { text: '边打边说！（剑术≥12且魅力≥10）', id: 'cb1', req: [[() => req('sword', 12), '剑术≥12'], [() => req('charm', 10), '魅力≥10']], effects: () => { G.sword += 1; G.charm += 1; narrate(`你一边格挡一边说："你的刀法不错——但你不想打。为什么不去客栈喝一杯？"对方犹豫了——刀慢了一拍。你们同时收了武器。`); }, next: SCENES['lobby_free'] },
    { text: '只管打', id: 'cb1_f', effects: () => { addHp(-10); narrate(`你赢了但对方逃了。也许错过了获得信息的机会。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['combo_check_2'] = () => {
  G.scene = 'tavern';
  narrate(`你需要在沈孤雁面前证明自己——既要有武力保护天机卷，也要有智慧理解它的含义。需要剑术和心机同时达标。`);
  divider();
  showChoices([
    { text: '展示实力（剑术≥14且心机≥12）', id: 'cb2', req: [[() => req('sword', 14), '剑术≥14'], [() => req('wits', 12), '心机≥12']], effects: () => { changeRel('shen_guyan', 8); narrate(`你用剑法展示了武力——用对局势的分析展示了智慧。沈孤雁眼中闪过认可："你……也许是等了十五年的那个人。"`); }, next: SCENES['lobby_free'] },
    { text: '只展示剑术', id: 'cb2_s', effects: () => { narrate(`你展示了剑法——沈孤雁点头。但他似乎在等更多东西。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['combo_check_3'] = () => {
  G.scene = 'negotiation';
  narrate(`你需要在三方谈判中斡旋——暗星阁、白太傅旧部、朝廷代表。需要心机和魅力同时达标。`);
  divider();
  showChoices([
    { text: '居中调停（心机≥14且魅力≥12）', id: 'cb3', req: [[() => req('wits', 14), '心机≥14'], [() => req('charm', 12), '魅力≥12']], effects: () => { G.wits += 2; G.charm += 2; setFlag('successful_negotiator'); narrate(`你用分析找到三方都能接受的方案——用说服力让他们都点头。不是完美方案——但没人拔刀。`); }, next: SCENES['lobby_free'] },
    { text: '让沈孤雁处理', id: 'cb3_s', effects: () => { narrate(`你退了一步——让沈孤雁来处理。他做了十五年守护者——比你擅长。但你错过了一个证明自己的机会。`); }, next: SCENES['lobby_free'] },
  ]);
};

// ==================== 隐藏场景 ====================

SCENES['hidden_scene_1'] = () => {
  G.scene = 'hidden';
  narrate(`你在客栈地下室发现了一块松动的砖——后面有一封信。\n\n"如果你找到了这封信——说明你是个细心的人。我第七代守护者留此信——告诉后人：天机卷的真正秘密不在卷轴上。而在第一页和最后一页之间的空白处。用火烤——会出现隐藏的字。"`);
  setFlag('found_hidden_letter');
  G.wits += 2;
  addItem('第七代守护者密信');
  divider();
  showChoices([{ text: '继续', id: 'hs1_e', next: SCENES['lobby_free'] }]);
};

SCENES['hidden_scene_2'] = () => {
  G.scene = 'hidden';
  narrate(`深夜——你跟踪地板下传来的音乐声。在地下室角落找到了一块可推动的石板。下面是一间密室。\n\n密室里有一面铜镜——镜面上映出的不是你的脸：\n\n"天机卷的守护者——不是一个人。是一群人。你在客栈遇到的每一个人——都可能是守护者的一部分。"`);
  setFlag('found_underground_room');
  G.wits += 3;
  divider();
  showChoices([{ text: '继续', id: 'hs2_e', next: SCENES['lobby_free'] }]);
};

SCENES['hidden_scene_3'] = () => {
  G.scene = 'hidden';
  narrate(`你在后山古松上发现了一行刻字：\n\n"白太傅不是被杀的。他选择了死——为了保护天机卷不落入暗星阁手中。他临死前把天机卷交给了女婿——第一代守护者。然后走进了暗星阁的大火中。"\n\n白太傅——是自愿死的。这个真相改变了一切。`);
  setFlag('truth_bai_sacrifice');
  G.wits += 3;
  addItem('白太傅真相拓片');
  divider();
  showChoices([{ text: '继续', id: 'hs3_e', next: SCENES['lobby_free'] }]);
};

SCENES['hidden_scene_4'] = () => {
  G.scene = 'hidden';
  narrate(`你偷看了白云生的日记——翻到三十五年前的第一页。\n\n"师父说——天机卷不只是白太傅的遗物。它是白太傅写给女儿的信。上面的一千二百个名字——都是白家要保护的人。"\n\n白云生从一开始就知道天机卷的真相。他来苍龙镇是为了找师兄——天机卷只是顺道确认。`);
  setFlag('read_bai_truth');
  G.wits += 3;
  divider();
  showChoices([{ text: '继续', id: 'hs4_e', next: SCENES['lobby_free'] }]);
};

SCENES['hidden_scene_5'] = () => {
  G.scene = 'hidden';
  narrate(`你在石室天窗正下方——月光照在一个特定位置。石板上有一行极细的针刻文字：\n\n"第八代守护者——如果你看到了这行字——说明你已经准备好了。天机卷的最后一页不在卷轴上——而在你自己的记忆中。你遇到的每一个人、听过的每一个故事、喝过的每一杯茶——都是天机卷的一部分。"\n\n天机卷不是一个物品。它是一段经历。`);
  setFlag('found_final_hidden');
  G.wits += 3;
  divider();
  showChoices([{ text: '继续', id: 'hs5_e', next: SCENES['lobby_free'] }]);
};

// ==================== 秘密结局碎片 ====================

SCENES['secret_shard_1'] = () => {
  G.scene = 'hidden';
  narrate(`你在胡青娘药铺的后院——发现了一块碎瓷片。上面刻着：\n\n"……第八代守护者之钥，藏于落雁峰巨石之下……"\n\n后面的字被磨损了。但这是一条重要线索。`);
  addItem('碎片·守护者之钥');
  setFlag('found_shard_1');
  G.wits += 1;
  divider();
  showChoices([{ text: '继续', id: 'ss1_e', next: SCENES['lobby_free'] }]);
};

SCENES['secret_shard_2'] = () => {
  G.scene = 'hidden';
  narrate(`你在沈孤雁的旧账本后面发现了几页文字：\n\n"天机卷的真正秘密不在卷轴上——而在守护者的记忆中。每一代守护者都会在天窗下看到一段只有自己能看到的文字。"`);
  addItem('碎片·天窗文字');
  setFlag('found_shard_2');
  G.wits += 1;
  divider();
  showChoices([{ text: '继续', id: 'ss2_e', next: SCENES['lobby_free'] }]);
};

SCENES['secret_shard_3'] = () => {
  G.scene = 'hidden';
  narrate(`白云生的酒壶里藏着一张纸条：\n\n"暗星阁的创始人不是别人——是白太傅本人。他创建暗星阁是为了保护天机卷上的人。但后来暗星阁失控了。白太傅试图解散它——为时已晚。他的死不是守护者造成的。是他自己的选择。"`);
  addItem('碎片·暗星阁起源');
  setFlag('found_shard_3');
  G.wits += 2;
  divider();
  showChoices([{ text: '继续', id: 'ss3_e', next: SCENES['lobby_free'] }]);
};

SCENES['secret_shard_4'] = () => {
  G.scene = 'hidden';
  narrate(`后山古松上的刻痕：\n\n"天机卷的名字不是白太傅写的。是他女儿写的。白太傅的女儿嫁给了第一代守护者。这份名单——是父女之间的约定。"`);
  addItem('碎片·父女约定');
  setFlag('found_shard_4');
  G.wits += 2;
  divider();
  showChoices([{ text: '继续', id: 'ss4_e', next: SCENES['lobby_free'] }]);
};

SCENES['secret_shard_5'] = () => {
  G.scene = 'hidden';
  narrate(`你在石室天窗下方发现了一行针刻文字——必须在月光照进来的那一刻才能看到：\n\n"天机卷不是武器。不是把柄。不是秘密。它是一封家书。白太傅写给女儿的家书。一千二百个名字是白家要保护的人。守护天机卷——就是守护一个父亲对女儿的爱。"`);
  if (hasFlag('found_shard_1') && hasFlag('found_shard_2') && hasFlag('found_shard_3') && hasFlag('found_shard_4')) {
    addItem('天机卷真相');
    setFlag('knows_full_truth');
    narrate(`\n你收集了所有碎片。真相终于完整了。\n\n天机卷——是白太傅写给女儿的家书。一辈子的守护——全部源于一个父亲对女儿的爱。`);
  } else {
    narrate(`\n你看到了这行字——但缺少一些碎片。真相还不完整。苍龙镇的其他角落还有更多线索。`);
  }
  divider();
  showChoices([{ text: '继续', id: 'ss5_e', next: SCENES['lobby_free'] }]);
};

// ==================== 更多组合检定 ====================

SCENES['combo_check_4'] = () => {
  G.scene = 'apothecary';
  narrate(`胡青娘的药铺被人纵火了。你需要既用武力灭火又用智慧判断谁放的火。需要剑术和心机同时达标。`);
  divider();
  showChoices([
    { text: '灭火+调查（剑术≥10且心机≥12）', id: 'cb4', req: [[() => req('sword', 10), '剑术≥10'], [() => req('wits', 12), '心机≥12']], effects: () => { G.sword += 1; G.wits += 1; narrate(`你用剑劈断了着火的横梁——阻止了火势。同时注意到了地上的油渍——有人泼油放火。脚印朝后山去了。`); }, next: SCENES['lobby_free'] },
    { text: '只管灭火', id: 'cb4_f', effects: () => { narrate(`你全力灭火——火扑灭了。但放火的人跑了。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['combo_check_5'] = () => {
  G.scene = 'tavern';
  narrate(`客栈来了一群官差要搜查。你需要既用魅力安抚又用心机找借口拖延。`);
  divider();
  showChoices([
    { text: '安抚+拖延（魅力≥12且心机≥13）', id: 'cb5', req: [[() => req('charm', 12), '魅力≥12'], [() => req('wits', 13), '心机≥13']], effects: () => { G.charm += 1; G.wits += 1; narrate(`"差爷辛苦！喝茶——沈老板的茶全镇最好。搜查令？按规定要有县令大印——这份好像少了个印？"官差检查了——确实少了个章。悻悻地走了。`); }, next: SCENES['lobby_free'] },
    { text: '让沈孤雁处理', id: 'cb5_s', effects: () => { narrate(`沈孤雁出面应付了官差——温和态度化解了危机。但你能看出他在担心。`); }, next: SCENES['lobby_free'] },
  ]);
};

// ==================== 更多隐藏场景 ====================

SCENES['hidden_bai_identity'] = () => {
  G.scene = 'hidden';
  narrate(`你偶然看到了白云生没有装醉时的样子。\n\n他站在河边——背对所有人。手中毛笔在空中虚划。站姿重心在前脚掌——随时可以发力。\n\n白云生不是普通醉鬼。他是装醉的武林中人。而且他姓白——白太傅的白。`);
  setFlag('suspected_bai_identity');
  G.wits += 2;
  divider();
  showChoices([{ text: '继续', id: 'hbi_e', next: SCENES['lobby_free'] }]);
};

SCENES['hidden_liu_father'] = () => {
  G.scene = 'hidden';
  narrate(`你在石室隐蔽角落发现了一本旧日记——柳青松的日记。\n\n"第一天。我自愿留在石室。天机卷上第一百零三个是我祖父。我必须守着它。"\n\n"第三百六十五天。锦衣卫调令来了。我带走了天机卷的一个秘密——它的最后一页是空白的。也许只有下一代守护者才能看到上面的字。"\n\n柳青松——不只是锦衣卫百户。他是守护者的助手。自愿守了天机卷三年。`);
  setFlag('found_liu_father_diary');
  addItem('柳青松日记');
  G.wits += 3;
  divider();
  showChoices([{ text: '继续', id: 'hlf_e', next: SCENES['lobby_free'] }]);
};

SCENES['hidden_xiao_lian'] = () => {
  G.scene = 'hidden';
  narrate(`你无意中听到沈孤雁和小莲的对话——\n\n"小莲——你的爹娘很好。他们在很远的地方工作。"\n\n"他们为什么不来看我？"\n\n"沈叔叔——你是不是在骗我？"\n\n沈孤雁沉默很久。\n\n"……是。但有些谎话是为了保护你。等你长大了——我会告诉你真相。"\n\n小莲的爹娘——也许在天机卷上。`);
  setFlag('suspected_lian_parents');
  G.wits += 2;
  divider();
  showChoices([{ text: '继续', id: 'hxl_e', next: SCENES['lobby_free'] }]);
};

SCENES['hidden_zhao_truth'] = () => {
  G.scene = 'hidden';
  narrate(`赵铁牛喝多了——开始说真话。\n\n"我那十七个兄弟……不是冻死的。是暗星阁的人杀了他们。十七个人一个冬天全没了。我用了一年把十七个杀手全杀了。"\n\n他看着酒碗。\n\n"每天打铁——每一锤都是那十七个人的名字。叮——张三。叮——李四……十七个。忘不了。也不想忘。"`);
  setFlag('know_zhao_truth');
  changeRel('zhao_tieniu', 5);
  divider();
  showChoices([{ text: '继续', id: 'hzt_e', next: SCENES['lobby_free'] }]);
};

SCENES['hidden_scroll_blank'] = () => {
  G.scene = 'hidden';
  narrate(`你深夜去了石室——拿到天机卷。翻到最后一页——空白的。\n\n你想起了第七代守护者密信说的："用火烤会出现隐藏的字。"\n\n你用火折子小心地烤了最后一页——文字浮现了：\n\n"天机卷的真正含义不在这些名字里。而在守护它们的人心里。天机不是秘密。天机是选择——选择保护而不是利用。选择记住而不是遗忘。选择站在暗处——让名字在光明中自由地活着。\n\n——白鹤鸣 绝笔"\n\n白鹤鸣——白太傅的女儿。天机卷——真的是她写的。`);
  setFlag('found_blank_page');
  G.wits += 3;
  divider();
  showChoices([{ text: '继续', id: 'hsb_e', next: SCENES['lobby_free'] }]);
};

SCENES['sword_training_dawn'] = () => {
  G.scene = 'backyard';
  narrate(`天还没亮——你在后院练剑。\n\n赵铁牛走出来看到了你。"你的剑法有灵气。但缺一股劲儿——杀气。剑是用来杀人的——即使你不杀。别人才会怕你。不怕你——就敢欺负你保护的人。"\n\n他拍了拍你肩膀。\n\n"但别让杀气控制你。是工具不是主人。用的时候拿出来。不用的时候收起来。"\n\n天渐渐亮了。你的剑比昨天快了一点。`);
  G.sword += 1;
  divider();
  showChoices([{ text: '继续', id: 'std_e', next: SCENES['lobby_free'] }]);
};

SCENES['wits_final_analysis'] = () => {
  G.scene = 'analysis';
  narrate(`你把所有线索摊开——排列、组合、交叉对比。\n\n然后你看到了一个所有人都没有注意到的联系：\n\n白太傅创建暗星阁是为了保护天机卷上的名字。暗星阁失控后他解散了它。但一些人没离开——继续以暗星阁的名义活动。\n\n黑无极——暗星阁的杀手——他的师父应天南其实是守护者之一。\n白云生——暗星阁弟子——他一直在找师兄。\n赵铁牛——他的兄弟被暗星阁残余势力杀害。\n\n所有人——都被同一条线串起来了。\n\n这条线就是——白太傅的选择。他创建了暗星阁——也创造了所有的悲剧。\n\n但他的初衷——是爱。对女儿的爱。对一千二百个名字的爱。\n\n动机是爱。结果是悲剧。\n\n也许——这就是天机卷最深的秘密。`);
  setFlag('final_analysis_done');
  G.wits += 3;
  divider();
  showChoices([{ text: '继续', id: 'wfa_e', next: SCENES['lobby_free'] }]);
};

SCENES['charm_final_bond'] = () => {
  G.scene = 'tavern';
  narrate(`这是最后一个夜晚。你端起酒杯——看着客栈里的每一个人。\n\n"我敬你们。"你说。\n\n赵铁牛："敬什么？"\n\n"敬——每一个人的选择。沈老板守了十五年。柳姑娘放弃了锦衣卫。赵大哥为兄弟报了仇。胡姐姐用医术替代了毒术。白先生找了三十五年。黑无极……"\n\n你看了看窗外的夜色。\n\n"黑无极——还在找回家的路。"\n\n所有人都沉默了。\n\n然后——赵铁牛第一个举起了杯子。\n\n"敬选择。"\n\n一个接一个——所有人都举起了杯子。\n\n"敬选择。"\n\n你喝了一口。酒很烈。但你感到前所未有的温暖。\n\n因为你被接纳了。\n\n不是作为一个旅客——而是作为他们中的一员。`);
  setFlag('final_bond');
  G.charm += 3;
  divider();
  showChoices([{ text: '继续', id: 'cfb_e', next: SCENES['lobby_free'] }]);
};

SCENES['sword_vs_trap'] = () => {
  G.scene = 'cave';
  narrate(`通往石室的路上——你遇到了一个陷阱。一根圆木从头顶落下来——你需要足够快的反应才能避开或切断它。`);
  divider();
  showChoices([
    { text: '一剑两段！（剑术≥17）', id: 'svt_c', req: [[() => req('sword', 17), '剑术≥17']], effects: () => { G.sword += 1; narrate(`你出剑——圆木在空中被劈成了两半。两截木头落在你两侧。干净利落。`); }, next: SCENES['lobby_free'] },
    { text: '侧翻闪避', id: 'svt_d', effects: () => { addHp(-5); narrate(`你翻滚闪避——但还是被木头擦了一下肩膀。不严重。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['wits_deception'] = () => {
  G.scene = 'tavern';
  narrate(`一个陌生人来到客栈——声称是沈孤雁的老朋友。但他的眼神不对。

你需要足够的心机来判断他说的是否是真话。`);
  divider();
  showChoices([
    { text: '设局试探（心机≥13）', id: 'wd_t', req: [[() => req('wits', 13), '心机≥13']], effects: () => { G.wits += 1; setFlag('spotted_deceiver'); narrate(`你提到了一个不存在的张三——说他是沈老板的旧友。对方立刻附和：对！张三！好久不见了！骗局——确认了。`); }, next: SCENES['lobby_free'] },
    { text: '观察沈孤雁的反应', id: 'wd_o', effects: () => { narrate(`你看了看沈孤雁——他的微笑没变。但他的手悄悄伸向了柜台下面。\他知道对方不是朋友。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['charm_peacekeeper'] = () => {
  G.scene = 'street';
  narrate(`镇上两个人因为地界纠纷差点打起来。你需要调解。`);
  divider();
  showChoices([
    { text: '两边劝和（魅力≥11）', id: 'cp_p', req: [[() => req('charm', 11), '魅力≥11']], effects: () => { G.charm += 1; narrate(`两位——都是邻居。何必伤了和气？不如这样——地界的事请赵铁牛来量。他打的尺子——全镇最准。两人想了想——同意了。`); }, next: SCENES['lobby_free'] },
    { text: '不掺和', id: 'cp_i', effects: () => { narrate(`你走开了。身后传来了打斗声。后来听说两人各断了一根肋骨。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['hidden_stone_key'] = () => {
  G.scene = 'hidden';
  narrate(`你在落雁峰的巨石下——找到了一把石钥匙。

钥匙很小——用青石磨成。上面刻着一个八字。

第八代守护者的钥匙。

你不知道它能打开什么——但你知道——这一定很重要。`);
  addItem('石钥匙');
  setFlag('found_stone_key');
  G.wits += 2;
  divider();
  showChoices([{ text: '继续', id: 'hsk_e', next: SCENES['lobby_free'] }]);
};

SCENES['secret_ending_unlock'] = () => {
  G.scene = 'hidden';
  narrate(`你把所有碎片拼在了一起——碎瓷片、旧账本笔记、白云生纸条、古松刻痕、石室文字、石钥匙。

当最后一块碎片归位的时候——你手中的石钥匙开始发热。

它指向了石室的方向。

你来到石室——在石台下方找到了一个不起眼的钥匙孔。你把石钥匙插了进去。

咔。

石台移开了——露出了下面的一个暗格。

暗格里只有一样东西——一封信。

白鹤鸣写给下一代守护者的信：

如果你打开了这封信——说明你已经找到了所有的真相。nn天机卷是我父亲留下的遗愿。我完成了它——用了一千二百个名字。nn每一个名字都是我父亲想保护的人。nn现在——它们是你的了。nn记住——不要用它们来伤害任何人。nn保护他们。nn就像我父亲保护了我一样。

——白鹤鸣

你合上了信。手在发抖。

这就是天机卷的全部秘密。

一个父亲的爱。一个女儿的承诺。一千二百个需要保护的名字。

和——一个选择。

你的选择。`);
  setFlag('unlocked_secret_ending');
  addItem('白鹤鸣亲笔信');
  G.wits += 5;
  divider();
  showChoices([{ text: '继续', id: 'seu_e', next: SCENES['lobby_free'] }]);
};

SCENES['sword_guard_test'] = () => {
  G.scene = 'training';
  narrate(`沈孤雁要测试你的守护能力。他让你保护一盏蜡烛——不让风吹灭它。

他用各种方式制造风——扔东西、泼水、扇扇子。

你需要用剑术和心机同时来保护蜡烛。`);
  divider();
  showChoices([
    { text: '全力保护（剑术≥13且心机≥10）', id: 'sgt_p', req: [[() => req('sword', 13), '剑术≥13'], [() => req('wits', 10), '心机≥10']], effects: () => { G.sword += 1; G.wits += 1; narrate(`你用剑挡住了飞来的杂物——用心机预判了他下一步的动作。蜡烛始终没灭。沈孤雁看了很久——然后笑了。通过了。`); }, next: SCENES['lobby_free'] },
    { text: '蜡烛灭了……', id: 'sgt_f', effects: () => { narrate(`蜡烛灭了。沈孤雁摇了摇头——但没有失望的表情。没关系。守护——不是一天能学会的。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['wits_read_person'] = () => {
  G.scene = 'tavern';
  narrate(`一个新的客人走进客栈。你需要在三息之内判断他的身份。

他穿着粗布衣服。手上有茧。走路时右脚微微拖地——旧伤。腰间鼓起——藏着武器。`);
  divider();
  showChoices([
    { text: '分析他的身份（心机≥16）', id: 'wrp_a', req: [[() => req('wits', 16), '心机≥16']], effects: () => { G.wits += 2; narrate(`茧的分布——握刀的茧。旧伤——右腿中过箭。隐藏武器——短刀。走路姿势——当过兵的人的步伐。结论：退伍军人。可能是暗星阁的外围人员——也可能是赵铁牛那样的旧军人。你需要更多观察。`); }, next: SCENES['lobby_free'] },
    { text: '不判断——先观察', id: 'wrp_o', effects: () => { narrate(`你决定先观察。有些事——三息不够。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['charm_farewell'] = () => {
  G.scene = 'tavern';
  narrate(`你也许要离开了。你需要用你的魅力——让所有人知道你不会忘记他们。`);
  divider();
  showChoices([
    { text: '逐一告别（魅力≥13）', id: 'cf_b', req: [[() => req('charm', 13), '魅力≥13']], effects: () => { G.charm += 2; narrate(`你走到每个人面前——说了不同的话。

沈孤雁：谢谢你的信任。
赵铁牛：改天一起喝酒。
胡青娘：保重身体。
白云生：你的字没那么丑。
柳如烟什么都没说——只是看了你一眼。但那一眼里——有千言万语。

小莲哭了。

你摸了摸她的头：我会回来的。`); }, next: SCENES['lobby_free'] },
    { text: '不告别——悄悄走', id: 'cf_q', effects: () => { narrate(`你选择不告别——推门出去的那一刻——你回头看了一眼客栈。

灯火通明。壁炉的火在跳。赵铁牛在打铁。胡青娘在收药。沈孤雁在擦碗。

你转身——走进了夜色中。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['all_secrets_revealed'] = () => {
  G.scene = 'hidden';
  narrate(`你终于揭开了所有的秘密——

天机卷是白太傅写给女儿白鹤鸣的家书。
一千二百个名字是白家要保护的人。
暗星阁是白太傅创建的保护组织——后来失控了。
白太傅选择走进大火——为了保护天机卷。
白鹤鸣嫁给了第一代守护者。
七代守护者传承至今——沈孤雁是第七代。
柳青松是第七代的助手。
白云生和黑无极是暗星阁创始人应天南的徒弟。
赵铁牛的兄弟被暗星阁残余杀害。
胡青娘的亡夫在试验真话水时意外死亡。
小莲的爹娘在天机卷上。

所有的线索——所有人的命运——都指向同一个起点：

一个父亲对女儿的爱。

和一千二百个需要保护的名字。

这就是江湖夜雨的全部真相。

不华丽。不惊天动地。

只是——爱。`);
  setFlag('all_secrets_revealed');
  G.wits += 5;
  divider();
  showChoices([{ text: '继续', id: 'asr_e', next: SCENES['lobby_free'] }]);
};

SCENES['sword_dual_wield'] = () => {
  G.scene = 'combat';
  narrate(`你遇到了两个敌人同时攻击——左右夹击。你需要足够剑术应对。`);
  divider();
  showChoices([
    { text: '旋风斩！（剑术≥19）', id: 'sdw_s', req: [[() => req('sword', 19), '剑术≥19']], effects: () => { G.sword += 2; narrate(`你一个旋身——剑画了一个完整的圆。两个敌人同时被逼退。`); }, next: SCENES['lobby_free'] },
    { text: '后退逐个击破', id: 'sdw_r', effects: () => { G.wits += 1; narrate(`你后退拉距离——然后逐个击破。聪明但不够帅。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['wits_interrogation'] = () => {
  G.scene = 'tavern';
  narrate(`你抓到一个可疑的人。他什么都不肯说。你需要心机来撬开他的嘴。`);
  divider();
  showChoices([
    { text: '心理战（心机≥17）', id: 'wi_p', req: [[() => req('wits', 17), '心机≥17']], effects: () => { G.wits += 2; narrate(`"你不用告诉我任何事。我已经知道了——你的同伴在后山。暗星阁正在撤退。你没有必要隐瞒了。"你说的每一句都是猜的——但他的表情告诉你全猜对了。他崩溃了。`); }, next: SCENES['lobby_free'] },
    { text: '让赵铁牛吓他', id: 'wi_z', effects: () => { narrate(`赵铁牛手里的铁锤比任何审讯都有效。对方立刻招了。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['charm_rally'] = () => {
  G.scene = 'tavern';
  narrate(`客栈即将遭到攻击——你需要用魅力鼓舞士气。`);
  divider();
  showChoices([
    { text: '慷慨陈词（魅力≥15）', id: 'cr_s', req: [[() => req('charm', 15), '魅力≥15']], effects: () => { G.charm += 2; narrate(`"各位——我们都有不想失去的东西。沈老板的客栈。赵大哥的铁匠铺。胡姐姐的药铺。白先生……的酒。值得战斗——不是为了天机卷——是为了自己的家。"\n\n所有人都站了起来。赵铁牛拿起铁锤。胡青娘拿出石灰粉。白云生罕见地放下了酒杯。`); }, next: SCENES['lobby_free'] },
    { text: '让沈孤雁来说', id: 'cr_s2', effects: () => { narrate(`沈孤雁说了一句话："听雨客栈——从没被人砸过。今天也不会。"够了。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['hidden_mirror_truth'] = () => {
  G.scene = 'hidden';
  narrate(`你在地下密室的铜镜前站了很久。镜面上映出你的脸——但逐渐变成了文字：\n\n"你看到了所有人的秘密。但有一个秘密你还没看到——你自己的。\n\n你为什么来到苍龙镇？为什么留下来？为什么在乎这些陌生人？\n\n天机卷的最终秘密是——每个人都是守护者。每个人都在保护着什么。你也不例外。"\n\n镜面恢复了。你的脸回来了。但你的眼神变了。`);
  setFlag('saw_mirror_truth');
  G.wits += 5;
  divider();
  showChoices([{ text: '继续', id: 'hmt_e', next: SCENES['lobby_free'] }]);
};

SCENES['ultimate_check'] = () => {
  G.scene = 'final';
  narrate(`所有检定的终点——你需要同时展示剑术、心机和魅力。面前是天机卷——身后是需要你保护的人。你要证明你有资格做出最终选择。`);
  divider();
  showChoices([
    { text: '全面展示（剑术≥15且心机≥13且魅力≥12）', id: 'uc_a', req: [[() => req('sword', 15), '剑术≥15'], [() => req('wits', 13), '心机≥13'], [() => req('charm', 12), '魅力≥12']], effects: () => { G.sword += 1; G.wits += 1; G.charm += 1; setFlag('passed_ultimate'); narrate(`你拔剑展示武力——分析局势展示智慧——然后看着每个人说了三个字："信我吗？"\n\n所有人点了头。\n\n你通过了。`); }, next: SCENES['ending_selector'] },
    { text: '不需要证明——选择就在眼前', id: 'uc_d', effects: () => { narrate(`你走向天机卷——不需要向任何人证明。选择是你的。`); }, next: SCENES['ending_selector'] },
  ]);
};

SCENES['sword_defense_test'] = () => {
  G.scene = 'training';
  narrate(`赵铁牛向你扔了三把飞刀——同时。你需要足够剑术才能全部挡下。`);
  divider();
  showChoices([
    { text: '三刀全挡！（剑术≥18）', id: 'sdt_a', req: [[() => req('sword', 18), '剑术≥18']], effects: () => { G.sword += 2; narrate(`叮！叮！叮！三把飞刀全被你拨飞了。赵铁牛目瞪口呆：……你什么时候变这么快的？`); }, next: SCENES['lobby_free'] },
    { text: '挡住两把——被第三把擦伤', id: 'sdt_b', effects: () => { addHp(-8); narrate(`你挡住了两把——第三把擦过你的手臂。不深但流血了。赵铁牛挠头：两把也不错。`); }, next: SCENES['lobby_free'] },
    { text: '全躲开了', id: 'sdt_c', effects: () => { G.wits += 1; narrate(`你一招都没挡——全躲了。赵铁牛摇头：我是让你练剑不是练跑。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['wits_spot_liar'] = () => {
  G.scene = 'tavern';
  narrate(`有两个人——一真一假。一个说暗星阁今晚会来。一个说明天才会来。

你需要判断谁在说谎。`);
  divider();
  showChoices([
    { text: '交叉验证（心机≥14）', id: 'wsl_a', req: [[() => req('wits', 14), '心机≥14']], effects: () => { G.wits += 1; narrate(`你分别问了他们暗星阁的人数、来路和装备。两个人的大部分回答一致——但关于时间的细节不同。你分析了他们的语气和微表情——第一个人在说真话。暗星阁今晚会来。`); }, next: SCENES['lobby_free'] },
    { text: '两个都信——做好准备', id: 'wsl_b', effects: () => { narrate(`你选择两个都信——做好了万全准备。不管是今晚还是明天——你都不会被打个措手不及。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['charm_comfort_lian'] = () => {
  G.scene = 'tavern';
  narrate(`小莲偷偷在哭——她听到了一些关于天机卷的对话。她害怕了。

你需要安慰她。`);
  divider();
  showChoices([
    { text: '温柔安慰（魅力≥9）', id: 'ccl_a', req: [[() => req('charm', 9), '魅力≥9']], effects: () => { G.charm += 1; narrate(`你蹲下来看着她：小莲——你知道苍龙镇为什么叫苍龙镇吗？因为很久以前有一条龙住在这里。龙保护着镇子。现在——龙不在了。但镇子还在。因为我们互相保护。你不用怕——大家都在。

小莲擦了擦眼泪——然后点了点头。`); }, next: SCENES['lobby_free'] },
    { text: '叫沈孤雁来', id: 'ccl_b', effects: () => { narrate(`你去找了沈孤雁。他走过去——摸了摸小莲的头。什么都没说——但小莲不哭了。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['combo_sword_wits_ambush'] = () => {
  G.scene = 'combat';
  narrate(`你被伏击了——敌人设了陷阱。你需要剑术来战斗——同时需要心机来判断陷阱的触发机制。`);
  divider();
  showChoices([
    { text: '边打边分析（剑术≥14且心机≥13）', id: 'cswa', req: [[() => req('sword', 14), '剑术≥14'], [() => req('wits', 13), '心机≥13']], effects: () => { G.sword += 1; G.wits += 1; narrate(`你格挡了敌人的攻击——同时注意到了地上的绳索。陷阱是绊索触发的——你割断了绳索。陷阱失效了。敌人失去了优势。`); }, next: SCENES['lobby_free'] },
    { text: '全力战斗', id: 'cswa_f', effects: () => { addHp(-15); narrate(`你全力战斗——赢了但踩中了陷阱。一根木桩打在了你腿上。很疼。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['combo_charm_wits_negotiate'] = () => {
  G.scene = 'negotiation';
  narrate(`黑无极愿意谈判——但条件很苛刻。你需要魅力来说服他——同时需要心机来判断他真正的底线。`);
  divider();
  showChoices([
    { text: '谈判（魅力≥13且心机≥14）', id: 'ccwn', req: [[() => req('charm', 13), '魅力≥13'], [() => req('wits', 14), '心机≥14']], effects: () => { G.charm += 1; G.wits += 1; changeRel('hei_wuji', 5); narrate(`你分析了黑无极的条件——发现他真正想要的不是天机卷上的信息——而是师父应天南的真名。你用真诚的态度告诉他——你愿意帮他找。他放下了刀。`); }, next: SCENES['lobby_free'] },
    { text: '接受他的条件', id: 'ccwn_a', effects: () => { narrate(`你接受了他的条件。谈判达成了——但你知道这个条件对你不利。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['secret_ending_hints'] = () => {
  G.scene = 'hidden';
  narrate(`你在客栈的各个角落发现了碎片——每一个碎片上都有一行字：

碎片一：天机卷的守护不只是一个人。（厨房的灶台下）
碎片二：客栈里的每一个人都有秘密。（二楼地板缝）
碎片三：最深的秘密藏在最显眼的地方。（柜台后面的墙上）
碎片四：镜子里看到的——才是真相。（地下密室）
碎片五：天机不是秘密——是选择。（石室天窗下）

五块碎片。五行字。当你把它们排列在一起时——

你看到了一首藏头诗：

天客最镜天

天客最镜天——什么意思？

你仔细看——这是每个碎片的第一个字组成的。

但它们排列的顺序不对。你重新排列——

最天客镜天

还是不对。

你换了一种方式——看每个碎片的最后一个字：

人密方相择

不对。

你把所有碎片翻过来——背面还有字：

每个人都值得被守护。

原来——没有密码。没有谜题。只有这一句简单的话。

每个人都值得被守护。

也许这就是天机卷从头到尾想要说的。`);
  setFlag('found_all_hints');
  G.wits += 3;
  divider();
  showChoices([{ text: '继续', id: 'seh_e', next: SCENES['lobby_free'] }]);
};

SCENES['sword_final_test'] = () => {
  G.scene = 'training';
  narrate(`沈孤雁拿出木剑——"最后一课。挡住我十招。"他的木剑看似温和但暗藏杀机。`);
  divider();
  showChoices([
    { text: '十招全挡！（剑术≥20）', id: 'sft_a', req: [[() => req('sword', 20), '剑术≥20']], effects: () => { G.sword += 2; addItem('守护者之剑'); narrate(`十招全挡。沈孤雁放下木剑——第一次露出真正的笑容。"你的剑术已经超过我了。"他递给你一把真正的剑。"守护者需要好剑。"`); }, next: SCENES['lobby_free'] },
    { text: '挡住七招', id: 'sft_b', effects: () => { G.sword += 1; narrate(`你挡了七招——第八招被击中肩膀。沈孤雁点头："不错。但还需要练。"`); }, next: SCENES['lobby_free'] },
    { text: '三招就败了', id: 'sft_c', effects: () => { narrate(`三招败了。沈孤雁："知道差距才能进步。明天继续。"`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['wits_final_deduction'] = () => {
  G.scene = 'analysis';
  narrate(`你面前摆着所有线索。你需要推断——白太傅为什么创建暗星阁？`);
  divider();
  showChoices([
    { text: '得出结论（心机≥18）', id: 'wfd_a', req: [[() => req('wits', 18), '心机≥18']], effects: () => { G.wits += 3; narrate(`"白太傅创建暗星阁不是为了杀戮——而是建立保护网。天机卷上一千二百个名字需要一千二百双眼睛守护。暗星阁成员就是那些眼睛。但白太傅死后——暗星阁失去方向，从保护者变成了杀手。"\n\n这就是一切悲剧的根源——好的初衷，坏的结果。`); }, next: SCENES['lobby_free'] },
    { text: '没有答案', id: 'wfd_b', effects: () => { narrate(`有些问题也许永远没有完整答案。但没关系——理解不了全部不代表不能做出选择。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['charm_last_night'] = () => {
  G.scene = 'tavern';
  narrate(`最后一个夜晚——你坐在壁炉旁。所有人都在。你需要说出最后一句话让这个夜晚被记住。`);
  divider();
  showChoices([
    { text: '敬苍龙镇（魅力≥16）', id: 'cln_a', req: [[() => req('charm', 16), '魅力≥16']], effects: () => { G.charm += 3; narrate(`"各位——我不知道明天会怎样。但今夜雨声很好听。酒很好喝。火很暖。人——很好。"\n\n你举杯。\n\n"敬苍龙镇。敬听雨客栈。敬在座的每一个人。"\n\n所有人举杯。"敬苍龙镇。"\n\n壁炉的火在烧。窗外的雨在下。这一刻——被所有人记住了。`); }, next: SCENES['lobby_free'] },
    { text: '默默喝酒', id: 'cln_b', effects: () => { narrate(`你什么都没说——一杯接一杯地喝。赵铁牛坐在旁边也没说话。两个人沉默着喝酒。有时候沉默比语言更有力量。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['hidden_final_door'] = () => {
  G.scene = 'hidden';
  narrate(`你在石室最深处发现了一个暗门。门上一行字：\n\n"如果你打开这扇门——你就不能回头。天机卷的真相一旦看到就永远改变你。"`);
  divider();
  showChoices([
    { text: '推开暗门', id: 'hfc_a', effects: () => { setFlag('opened_final_door'); narrate(`你推开门——密室里只有一幅画。\n\n一个老人、一个年轻女子、一个年轻男子。老人在笑——女子在写字——男子在一旁守护。\n\n画下写着："白太傅。白鹤鸣。第一代守护者。"\n\n三个人——一个写了天机卷——一个守护了它——一个为此献出生命。\n\n你站了很久。然后轻轻关上了门。有些真相——看到了就够了。`); }, next: SCENES['lobby_free'] },
    { text: '不推——转身离开', id: 'hfc_b', effects: () => { narrate(`你收回了手。不是所有门都需要打开。有些真相留给自己就好。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['attribute_summary'] = () => {
  G.scene = 'stats';
  narrate(`—— 属性总览 ——\n\n剑术：${G.sword || 0}\n心机：${G.wits || 0}\n魅力：${G.charm || 0}\n\n${(G.sword >= 20) ? '✦ 剑术宗师' : (G.sword >= 15) ? '○ 剑术精湛' : '○ 剑术入门'}\n${(G.wits >= 18) ? '✦ 洞察一切' : (G.wits >= 13) ? '○ 心机深沉' : '○ 初窥门径'}\n${(G.charm >= 16) ? '✦ 万众归心' : (G.charm >= 12) ? '○ 以德服人' : '○ 默默无闻'}\n\n${hasFlag('all_secrets_revealed') ? '✦ 已揭开所有秘密' : '○ 尚有未发现的秘密'}\n${hasFlag('passed_ultimate') ? '✦ 通过终极检定' : '○ 尚未通过终极检定'}`);
  divider();
  showChoices([{ text: '继续', id: 'as_e2', next: SCENES['lobby_free'] }]);
};

SCENES['sword_break_through'] = () => {
  G.scene = 'combat';
  narrate(`你被困在一间小屋中——门外有三个敌人。你需要突破出去。`);
  divider();
  showChoices([
    { text: '破门而出！（剑术≥16）', id: 'sbt_a', req: [[() => req('sword', 16), '剑术≥16']], effects: () => { G.sword += 1; narrate(`你一脚踹开门——剑光闪烁。三个敌人还没反应过来就被逼退了。你冲出了包围。`); }, next: SCENES['lobby_free'] },
    { text: '从窗户翻出去', id: 'sbt_b', effects: () => { G.wits += 1; narrate(`你从窗户翻了出去——绕到了敌人身后。不用打——直接跑了。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['wits_detect_poison'] = () => {
  G.scene = 'tavern';
  narrate(`你觉得今天的茶味道不太对——有一种极淡的苦味。

你需要判断——是不是有人在茶里下了毒。`);
  divider();
  showChoices([
    { text: '识别毒药（心机≥16）', id: 'wdp_a', req: [[() => req('wits', 16), '心机≥16']], effects: () => { G.wits += 2; narrate(`你仔细品尝了茶的味道——苦味不是茶叶的苦。是夹竹桃。微量——不会致命但会让人头晕。有人想让你在关键时刻失去战斗力。`); }, next: SCENES['lobby_free'] },
    { text: '不喝了', id: 'wdp_b', effects: () => { narrate(`你放下了茶杯。不管有没有毒——不舒服就不喝。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['charm_town_meeting'] = () => {
  G.scene = 'street';
  narrate(`苍龙镇的居民聚集在一起——他们听说了天机卷的事，感到恐慌。

你需要安抚他们。`);
  divider();
  showChoices([
    { text: '镇定人心（魅力≥14）', id: 'ctm_a', req: [[() => req('charm', 14), '魅力≥14']], effects: () => { G.charm += 2; narrate(`各位——天机卷上的名字是我们的家人、邻居、朋友。保护它——就是保护我们自己。苍龙镇从来没有被外人打倒过——今天也不会。

人群安静了下来。恐慌消退了。`); }, next: SCENES['lobby_free'] },
    { text: '让沈孤雁来说', id: 'ctm_b', effects: () => { narrate(`沈孤雁站出来——大家别怕。客栈的灯不会灭。简单一句话——但镇上的人信任他。`); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['combo_all_three'] = () => {
  G.scene = 'final';
  narrate(`终极挑战——你需要同时运用剑术、心机和魅力来应对一个复杂的局面：

天机卷的争夺者同时到达了石室。你需要战斗、分析和说服同时进行。`);
  divider();
  showChoices([
    { text: '三合一应对（剑术≥16且心机≥14且魅力≥13）', id: 'cat_a', req: [[() => req('sword', 16), '剑术≥16'], [() => req('wits', 14), '心机≥14'], [() => req('charm', 13), '魅力≥13']], effects: () => { G.sword += 1; G.wits += 1; G.charm += 1; setFlag('mastered_all'); narrate(`你用剑逼退了最危险的敌人——用心机看穿了谁是真正的威胁——用魅力说服了中立方加入你这边。

三管齐下——完美的应对。

沈孤雁在旁边看着——他的眼里有骄傲。

你准备好了。`); }, next: SCENES['ending_selector'] },
    { text: '专注一项', id: 'cat_b', effects: () => { narrate(`你选择专注战斗——击退了所有敌人。但错过了说服和判断的机会。也许——有些事不能只靠一把剑。`); }, next: SCENES['ending_selector'] },
  ]);
};
