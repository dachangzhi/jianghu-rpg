// story_part11.js - 次要NPC + 环境事件 + 隐藏剧情
// 小莲、老孙头、李婶 + 随机事件 + 隐藏场景

// ---- 小莲任务：身世之谜 ----
SCENES['xiaolian_quest_start'] = () => {
  G.scene = 'xiaolian_quest_start';
  G.location = '听雨客栈';
  narrate(`小莲是客栈的跑堂丫头，十六七岁的年纪，圆圆的脸，笑起来有两个酒窝。她手脚麻利，嘴巴甜，镇上的人都喜欢她。\n\n但今天你注意到一些不对劲的地方。\n\n她端菜的时候，右手腕上露出一截红痕——不是烫伤，是一道细细的勒痕，像是什么东西长期束缚留下的。\n\n而且——她在收拾桌子的时候，你发现她偷偷在看一张小纸片。纸片藏在袖子里，只露出一角。你瞥到了上面的一行字：${hl('「……若见此字，速逃……」')}\n\n她注意到你在看，迅速把纸片塞回袖子里，脸上闪过一丝惊慌——但很快恢复了笑容。\n\n「客官，今天的红烧肉可还合口味？」她甜甜地问。\n\n但她的眼神在笑意之下藏着一丝恐惧。`);
  divider();
  showChoices([
    { text: '「小莲，你手腕上的伤是怎么回事？」', id: 'xl_wrist', effects: () => { G.wits += 1; changeRel('xiao_lian', 3); }, next: SCENES['xiaolian_quest_wrist'] },
    { text: '「你袖子里藏了什么？」', id: 'xl_paper', effects: () => { G.wits += 2; }, next: SCENES['xiaolian_quest_paper'] },
    { text: '「小莲——我不是坏人。你如果遇到麻烦，可以跟我说。」', id: 'xl_kind', effects: () => { G.charm += 2; changeRel('xiao_lian', 5); }, next: SCENES['xiaolian_quest_kind'] },
  ]);
};

SCENES['xiaolian_quest_wrist'] = () => {
  G.scene = 'xiaolian_quest_wrist';
  narrate(`小莲下意识地把手缩了回去。\n\n「没……没什么。干活的磨的。」\n\n她的目光飘忽不定——你见过这种表情。在江湖上，这种表情意味着一个人在害怕某件事，但更害怕被发现。\n\n「小莲。」你的声音很轻，但很认真，「我不是在打听八卦。你手腕上的痕迹——是绳子勒的。长期勒的。有人绑过你吗？」\n\n她的眼圈红了。但她咬着嘴唇，没有说话。\n\n过了好一会儿——像是做了一个重大决定——她低声说：\n\n「客官……你能帮我一个忙吗？」`);
  divider();
  setFlag('xiaolian_quest_active');
  showChoices([
    { text: '「说。」', id: 'xl_wrist_tell', next: SCENES['xiaolian_quest_reveal'] },
  ]);
};

SCENES['xiaolian_quest_paper'] = () => {
  G.scene = 'xiaolian_quest_paper';
  narrate(`小莲的脸唰地白了。\n\n「没有……没什么……」\n\n她转身想走，但你挡在了她面前。\n\n「小莲。那张纸上写着『速逃』。你在逃什么？从谁那里逃？」\n\n她的身体在微微发抖。但最终——也许是因为你说话的语气不是审问，而是关心——她慢慢从袖子里取出了那张纸片。\n\n纸片已经很旧了，边角磨损得厉害。上面只有几行字，字迹苍劲有力：\n\n${hl('「阿昭：若见此字，速逃。此人不可信。爹已遭难。你的身份已暴露。去苍龙镇听雨客栈——那里安全。——母字」')}\n\n「阿昭——是你吗？」你问。\n\n她点了点头。\n\n「我原来的名字叫${hl('赵昭')}。我是……我是京城赵侍郎的女儿。」`);
  divider();
  setFlag('xiaolian_quest_active');
  setFlag('know_xiaolian_identity');
  showChoices([
    { text: '「赵侍郎——三年前因谋反罪被满门抄斩的那个赵侍郎？」', id: 'xl_paper_zhao', effects: () => { G.wits += 2; }, next: SCENES['xiaolian_quest_reveal'] },
  ]);
};

SCENES['xiaolian_quest_kind'] = () => {
  G.scene = 'xiaolian_quest_kind';
  narrate(`小莲——或者说赵昭——看着你。她的眼泪终于忍不住掉了下来。\n\n「客官……你是第一个这么跟我说的人。」\n\n她擦了擦眼泪，开始说她的故事。\n\n「我爹是京城的赵侍郎——三年前被以谋反罪满门抄斩。但我爹不是反贼——他是被人陷害的。陷害他的人——」\n\n她压低声音。\n\n「——跟暗星阁有关。」\n\n「满门抄斩那天晚上，我娘的一个贴身丫鬟把我藏在了柴房的暗格里。后来我被一个叫刘婶的女人带到了苍龙镇。刘婶说——有人安排好了，让我在听雨客栈做工，等风头过了再说。」\n\n「三年了。风头一直没过。」`);
  divider();
  setFlag('xiaolian_quest_active');
  setFlag('know_xiaolian_identity');
  showChoices([
    { text: '「沈孤雁知道你的身份吗？」', id: 'xl_kind_shen', effects: () => { G.wits += 1; }, next: SCENES['xiaolian_quest_reveal'] },
  ]);
};

SCENES['xiaolian_quest_reveal'] = () => {
  G.scene = 'xiaolian_quest_reveal';
  narrate(`赵昭——小莲——把她的故事完整地讲了出来。\n\n「赵侍郎一案是三年前京城最大的冤案。我爹因为上奏了一份弹劾权臣的折子，被反咬一口——说赵家勾结前朝余孽。证据是一封伪造的密信。」\n\n「那封密信——是暗星阁伪造的。我爹在奏折中提到了暗星阁的活动，暗星阁就先下手为强，伪造了他通敌的证据。」\n\n「我娘在行刑前把这张纸条塞给了我的丫鬟。纸条上让我逃到苍龙镇——因为这里有一个可以信任的人。」\n\n「那个人——」你猜到了。\n\n「沈孤雁。」小莲点头，「我娘说他是天机卷的守护者——会保护被冤枉的人。所以我在这里——一个官家小姐，在客栈端盘子。」\n\n她看着自己的手——手上有茧，有烫伤，但指甲修剪得整整齐齐。\n\n「我不觉得委屈。」她说，「我只是害怕。害怕有一天有人认出我——然后我就跟爹娘一样了。」`);
  divider();
  setFlag('xiaolian_quest_complete');
  changeRel('xiao_lian', 10);
  showChoices([
    { text: '「你不用再害怕了。我会保护你。」', id: 'xl_reveal_protect', effects: () => { changeRel('xiao_lian', 10); setFlag('promised_xiaolian'); G.charm += 2; }, next: SCENES['lobby_free'] },
    { text: '「沈孤雁一直在保护你。你不知道吗？」', id: 'xl_reveal_shen', effects: () => { changeRel('shen_guyan', 5); }, next: SCENES['lobby_free'] },
  ]);
};

// ---- 老孙头任务 ----
SCENES['oldsun_quest_start'] = () => {
  G.scene = 'oldsun_quest_start';
  G.location = '苍龙河边';
  narrate(`老孙头是苍龙镇最老的居民——据说他在这里住了五十年。他每天准时出现在河边钓鱼，风雨无阻。一头花白的头发，晒得黝黑的脸，笑起来露出一口缺了几颗的牙。\n\n今天你走近他的时候，发现他钓上来的不是鱼——而是一个被泥沙裹满的铜盒。\n\n铜盒不大，巴掌大小，外表被河水腐蚀得斑斑驳驳。但盒盖上有一个清晰的印记——${hl('一只展翅的孤雁')}。\n\n和沈孤那本册子封面上的一模一样。\n\n老孙头拿着铜盒翻来覆去地看，一脸困惑。\n\n「这河里什么都有。去年我钓上来一只靴子，前年是一把破刀。今年倒好——一个铁盒子。你说里面能有什么？金子？」\n\n他笑呵呵地看着你。`);
  divider();
  showChoices([
    { text: '「让我看看。」', id: 'os_look', effects: () => { G.wits += 1; }, next: SCENES['oldsun_quest_examine'] },
    { text: '「孙大爷，你在苍龙镇住了很久了吧？见过不少事。」', id: 'os_chat', effects: () => { changeRel('old_sun', 3); }, next: SCENES['oldsun_quest_chat'] },
    { text: '「这盒子是我的——我是说，我认识这个印记。」', id: 'os_claim', effects: () => { G.charm += 1; }, next: SCENES['oldsun_quest_claim'] },
  ]);
};

SCENES['oldsun_quest_examine'] = () => {
  G.scene = 'oldsun_quest_examine';
  narrate(`你接过铜盒。盒子很重——比外表看起来重得多。盒盖上的孤雁印记在河水冲刷下反而更加清晰了，像是不怕水蚀的特殊合金。\n\n你试着打开盒盖——锁住了。盒盖的锁孔很小，但做工精密，不是普通的铜锁。\n\n「打不开。」老孙头说，「我试过了。这锁不是咱们现在的锁——太精巧了。少说也有几十年了。」\n\n你把铜盒翻过来。盒底刻着一行小字：\n\n${hl('「遇水而现，逢雁而开。」')}\n\n遇水而现——它确实是从河里捞上来的。\n逢雁而开——「雁」……沈孤雁？\n\n这也许是守护者留下的秘密容器——也许装着某种重要的东西。`);
  divider();
  addItem('铜盒');
  setFlag('found_copper_box');
  showChoices([
    { text: '去找沈孤雁打开它', id: 'os_find_shen', effects: () => { setFlag('need_shen_for_box'); }, next: SCENES['lobby_free'] },
    { text: '跟老孙头聊天', id: 'os_examine_chat', next: SCENES['oldsun_quest_chat'] },
  ]);
};

SCENES['oldsun_quest_chat'] = () => {
  G.scene = 'oldsun_quest_chat';
  narrate(`老孙头是苍龙镇的活历史。\n\n「住了五十年了？」他得意地说，「何止五十年！我在这里出生的——今年六十七了。苍龙镇的每一块石头我都认识。」\n\n你趁机问了一些关于过去的事。\n\n「三十年前？」他想了想，「三十年前……那时候镇上来了一个年轻人——就是现在的沈老板。他来了之后开了客栈。之前这里只有一家小茶棚。」\n\n「在他来之前——有一个老头住在镇上。外号叫『周半仙』——整天念叨着什么天机啊、守护啊。镇上人都以为他疯了。」\n\n${hl('周半仙——也许就是周先生，第六代守护者的副手，把天机卷传给沈孤雁的那个人。')}\n\n「周半仙死了之后——」老孙头忽然压低了声音，「沈老板就来了。像是约好了一样。」\n\n他看了你一眼。\n\n「年轻人，有些事——知道就好，别说出来。在这个镇上住久了你就明白了——有些秘密，不是为了害人，而是为了保护人。」`);
  divider();
  setFlag('heard_oldsun_history');
  changeRel('old_sun', 5);
  showChoices([
    { text: '「你知道三十年前白太傅的事吗？」', id: 'os_chat_bai', effects: () => { G.wits += 2; setFlag('asked_oldsun_about_bai'); }, next: SCENES['oldsun_quest_bai'] },
    { text: '谢谢大爷', id: 'os_chat_thanks', next: SCENES['lobby_free'] },
  ]);
};

SCENES['oldsun_quest_claim'] = () => {
  G.scene = 'oldsun_quest_claim';
  narrate(`老孙头看了你一眼——然后笑了。\n\n「年轻人，这盒子是从河里捞上来的——谁捞到就是谁的。你要的话——拿去吧。不过我有个条件。」\n\n「什么条件？」\n\n「改天帮我钓一天鱼。我这腰不好，坐久了疼。」\n\n你答应了。老孙头把铜盒递给你，又继续钓鱼。\n\n「年轻人——」他忽然说，「那个印记……孤雁……我以前见过。在周半仙的东西上。你要是认识那个印记的人——替我问问他，周半仙到底有没有成仙。」\n\n他笑了起来。\n\n「我等了他五十年了。」`);
  divider();
  addItem('铜盒');
  setFlag('found_copper_box');
  changeRel('old_sun', 5);
  showChoices([
    { text: '继续', id: 'os_claim_continue', next: SCENES['lobby_free'] },
  ]);
};

SCENES['oldsun_quest_bai'] = () => {
  G.scene = 'oldsun_quest_bai';
  narrate(`老孙头的表情变了。\n\n「白太傅……」他低声说，「你怎么知道这个名字？」\n\n「有人告诉我。」\n\n他沉默了很久。鱼竿上的浮漂在水面上轻轻跳动，但他完全不在意。\n\n「三十年前——那年我三十七岁。有一天晚上，一队黑衣人来了苍龙镇。他们不是本地人——口音、打扮、走路的方式都不一样。他们在镇子里待了三天。」\n\n「第三天晚上——」他的声音变得更低，「我听到了哭声。不是一个人的哭声——是很多人。远远的，从山上传来。」\n\n「我后来听人说——是京城来的人，处理什么叛逆。但镇上没有叛逆——只有一个疯老头和一个刚来的年轻人。」\n\n「后来我才明白——他们不是来抓叛逆的。他们是来……」\n\n他没有说下去。\n\n${dg('灭口的。三十年前的守护者——为了保护天机卷——也许做过一些不那么光彩的事。')}`);
  divider();
  setFlag('heard_oldsun_bai_story');
  changeRel('old_sun', 3);
  showChoices([
    { text: '「那些黑衣人——你后来再见过吗？」', id: 'os_bai_again', next: SCENES['lobby_free'] },
  ]);
};

// ---- 李婶任务：情报网络 ----
SCENES['lishen_quest_start'] = () => {
  G.scene = 'lishen_quest_start';
  G.location = '苍龙镇街道';
  narrate(`李婶是镇上的「万事通」——她经营一个小小的杂货摊，卖些针线、干货和日常用品。但她的真正身份，远比一个杂货摊老板复杂。\n\n你偶然发现这一点——是因为你注意到她的小摊上有一个奇怪的商品分类方式。每种颜色的线代表不同的信息：\n\n红线——镇上新来的人\n蓝线——官府的消息\n绿线——山上的异常\n黄线——外来商人的动向\n黑线——${danger('危险')}的警告\n\n今天，她的线架上多了一根黑线。\n\n你走过去。李婶看到你，笑眯眯地招呼。\n\n「客官好！今天要点什么？线？针？还是——消息？」\n\n最后两个字说得很轻，只有你能听到。`);
  divider();
  showChoices([
    { text: '「黑线代表什么？」', id: 'ls_black', effects: () => { G.wits += 2; }, next: SCENES['lishen_quest_black'] },
    { text: '「你怎么知道我在打听消息？」', id: 'ls_how', effects: () => { G.wits += 1; changeRel('li_tiejiang2', 3); }, next: SCENES['lishen_quest_how'] },
    { text: '先买点东西，再聊天', id: 'ls_buy', effects: () => { changeRel('li_tiejiang2', 3); }, next: SCENES['lishen_quest_buy'] },
  ]);
};

SCENES['lishen_quest_black'] = () => {
  G.scene = 'lishen_quest_black';
  narrate(`李婶的笑容微微一僵——然后恢复了。\n\n「客官好眼力。看来你不是普通人。」\n\n她左右看了看，确认周围没有人，然后压低声音。\n\n「黑线——代表有人在打听你的事。」\n\n「打听我？」\n\n「一个穿灰衣的跛子——还有一个黑衣蒙面的人。他们分别来问过我——你是谁，你来苍龙镇做什么，你在跟谁接触。」\n\n「你怎么回答的？」\n\n「我说你是个过路的旅客，住两天就走。」她笑了，「但我多加了一句——我说你出手阔绰，打赏了我两文钱。他们就不太在意了。」\n\n${ok('李婶——这个看起来普普通通的杂货摊老板——居然是苍龙镇的情报中心。她用针线的颜色来传递信息，价格来表示紧急程度。在这 个小镇上，没有什么事能瞒过她。')}`);
  divider();
  setFlag('know_lishen_network');
  setFlag('know_people_asking_about_you');
  showChoices([
    { text: '「以后有人打听我——你告诉我。」', id: 'ls_black_deal', effects: () => { changeRel('li_tiejiang2', 5); setFlag('lishen_deal'); }, next: SCENES['lobby_free'] },
    { text: '「你知道苍龙镇所有人的秘密吗？」', id: 'ls_black_secrets', effects: () => { G.wits += 1; }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['lishen_quest_how'] = () => {
  G.scene = 'lishen_quest_how';
  narrate(`李婶笑而不答。\n\n「客官——在这个镇上住了五十年，什么人没见过？你的眼神跟别人不一样——你在看东西的时候，不是在看它的表面，而是在看它的用处。」\n\n「这就是为什么你注意到我的线架。普通人只会看到一堆彩色的线——你看到了一个分类系统。」\n\n她靠过来。\n\n「你是习武之人，而且不是一般的江湖混混。你的步法、你的眼神、你说话的方式——都说明你受过训练。」\n\n「苍龙镇最近来了不少你这样的人。我都在看。」\n\n${hl('李婶也许不识字——但她读人比读书更厉害。')}`);
  divider();
  showChoices([
    { text: '继续', id: 'ls_how_continue', next: SCENES['lobby_free'] },
  ]);
};

SCENES['lishen_quest_buy'] = () => {
  G.scene = 'lishen_quest_buy';
  narrate(`你买了些针线和干粮。李婶一边收钱一边说：「客官，这包干粮里我多放了两块肉干——不要钱。算是……见面礼。」\n\n她眨了眨眼。\n\n「以后有什么需要——不管是东西还是消息——来找我。杂货摊虽然小，但什么都有。」\n\n${hl('在苍龙镇，李婶的杂货摊是比客栈更安全的地方。因为这里不卖酒——只卖有用的东西。')}`);
  changeRel('li_tiejiang2', 5);
  addItem('肉干');
  showChoices([
    { text: '继续', id: 'ls_buy_continue', next: SCENES['lobby_free'] },
  ]);
};

// ---- 随机事件 ----
SCENES['random_event_1'] = () => {
  G.scene = 'random_event_1';
  narrate(`你在镇子里走着，忽然听到巷子深处传来一声惨叫。\n\n你循声跑去，发现一个老妇人摔倒在地上，脚踝扭伤了。她旁边散落着一篮子鸡蛋——全碎了。\n\n老妇人满脸是泪，一边揉着脚一边念叨：「完了完了……这是给李婶家的孙子准备的……全碎了……」`);
  divider();
  showChoices([
    { text: '扶她起来，帮她把鸡蛋收拾了', id: 're1_help', effects: () => { G.charm += 2; changeRel('li_tiejiang2', 3); addHp(-3); }, next: SCENES['lobby_free'] },
    { text: '检查一下她是不是真的摔倒——也许是陷阱', id: 're1_check', effects: () => { G.wits += 1; }, next: SCENES['lobby_free'] },
    { text: '路过，不管', id: 're1_ignore', next: SCENES['lobby_free'] },
  ]);
};

SCENES['random_event_2'] = () => {
  G.scene = 'random_event_2';
  narrate(`傍晚时分，你在镇口遇到了一队行商。领头的是个四十来岁的精瘦汉子，赶着三辆骡车，车上装满了布匹和干货。\n\n他看到你，停下骡车。\n\n「客官，苍龙镇怎么走？这破路太绕了——走了一下午还没到。」\n\n你指了指前面的路。\n\n他道了谢，又问了一句：「对了——这镇子最近安不安全？我听说山上有……不太对的东西？」`);
  divider();
  showChoices([
    { text: '「安全的。山上的事跟你没关系。」', id: 're2_safe', effects: () => { G.charm += 1; }, next: SCENES['lobby_free'] },
    { text: '「不安全。你最好别在镇上久留。」', id: 're2_unsafe', effects: () => { G.wits += 1; }, next: SCENES['lobby_free'] },
    { text: '「你是从哪里来的？路上有没有遇到什么奇怪的人？」', id: 're2_info', effects: () => { G.wits += 2; setFlag('know_merchant_info'); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['random_event_3'] = () => {
  G.scene = 'random_event_3';
  narrate(`夜里，你被一阵急促的敲门声惊醒。\n\n开门一看——是一个浑身湿透的年轻人，气喘吁吁，脸上满是惊恐。\n\n「救命……有人追我……他们在后面……」\n\n你往他身后看去——夜色中确实有几个模糊的身影在远处移动。\n\n年轻人几乎是瘫倒在你脚边的。他穿着一件普通的长衫，但衣服的里子是锦缎——${hl('这不是普通人穿得起的料子')}。`);
  divider();
  showChoices([
    { text: '让他进来，关上门', id: 're3_let_in', effects: () => { G.charm += 2; addHp(-5); setFlag('helped_stranger'); }, next: SCENES['lobby_free'] },
    { text: '「你先说你是什么人。」', id: 're3_ask', effects: () => { G.wits += 1; }, next: SCENES['lobby_free'] },
    { text: '关上门，不管他', id: 're3_reject', next: SCENES['lobby_free'] },
  ]);
};

SCENES['random_event_4'] = () => {
  G.scene = 'random_event_4';
  narrate(`清晨，你在镇外的田埂上散步。雾气很大，能见度不到十步。\n\n你隐约听到前方有说话声——两个人在低声交谈。\n\n「……三天之后动手……从后山上去……」\n\n「……石室的入口在哪里？」\n\n「……沈孤雁知道……得想办法让他开口……」\n\n你屏住呼吸，慢慢靠近。但脚下一根枯枝发出了咔嚓一声——\n\n声音立刻停了。当你走到那个位置时，雾中已经空无一人。只有地上的两个脚印——一个正常，一个很浅。\n\n${danger('一个跛子。他在跟谁说话？三天之后动手——三天后会发生什么？')}`);
  divider();
  setFlag('overheard_plot');
  G.wits += 2;
  showChoices([
    { text: '把这个消息告诉沈孤雁', id: 're4_tell_shen', effects: () => { setFlag('told_shen_plot'); changeRel('shen_guyan', 5); }, next: SCENES['lobby_free'] },
    { text: '自己记住，先不告诉任何人', id: 're4_keep', effects: () => { G.wits += 1; }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['random_event_5'] = () => {
  G.scene = 'random_event_5';
  narrate(`午后，你在客栈大堂喝茶。阳光从窗户照进来，尘埃在光柱中缓缓飘浮。\n\n一个卖糖人的老头推着小车经过客栈门口。他的叫卖声很有节奏：「糖人儿——好看的糖人儿——龙啊凤啊什么都有——」\n\n你注意到他的小车底下——挂着一个小小的布袋。布袋的颜色和形状……跟李婶的线架上的分类方式一模一样。\n\n卖糖人的老头在客栈门口停下，看了看四周，然后推着车继续走了。布袋在他走后消失了——像是被谁取走了。\n\n${hl('李婶的情报网络比你想的更广。连卖糖人的都是她的线人。')}`);
  divider();
  setFlag('know_lishen_network_broad');
  showChoices([
    { text: '继续', id: 're5_continue', next: SCENES['lobby_free'] },
  ]);
};

SCENES['random_event_6'] = () => {
  G.scene = 'random_event_6';
  narrate(`你在铁匠铺附近发现了一块奇怪的铁片。铁片不大，巴掌大小，上面刻着密密麻麻的小字。\n\n你辨认了一下——是一种很古老的密码。你只能看懂几个字：${hl('「落雁……石室……钥匙……」')}\n\n这块铁片也许是打开落雁峰石室的关键物品之一。\n\n赵铁牛从铺子里走出来，看到你手里的铁片。\n\n「哦，这个啊——我十年前在山上捡到的。一直当镇纸用。你感兴趣？拿去吧——我那儿多的是。」`);
  divider();
  addItem('刻有密码的铁片');
  setFlag('found_iron_key_fragment');
  showChoices([
    { text: '收好铁片', id: 're6_keep', next: SCENES['lobby_free'] },
  ]);
};

SCENES['random_event_7'] = () => {
  G.scene = 'random_event_7';
  narrate(`深夜，你被一阵奇异的琴声惊醒。\n\n琴声从山上传来——悠扬、空灵，像是从很远很远的地方飘来的。你不由自主地走到窗边，侧耳倾听。\n\n琴声持续了大约一盏茶的时间，然后戛然而止。\n\n第二天你问镇上的人——没有人听到琴声。只有你一个人听到了。\n\n「山上？」老孙头想了想，「以前有个传说——落雁峰的石室里，住着一个弹琴的鬼。三十年前有人听到过一次。之后再也没人听到了。」\n\n${hl('或者——不是鬼。是有人在石室里。一个等了很久很久的人。')}`);
  divider();
  setFlag('heard_mountain_music');
  showChoices([
    { text: '继续', id: 're7_continue', next: SCENES['lobby_free'] },
  ]);
};

SCENES['random_event_8'] = () => {
  G.scene = 'random_event_8';
  narrate(`你在镇外的树林里发现了一具动物的尸体——一只狐狸。但死状很诡异：它的身体完好无损，没有任何外伤，但眼睛是紫色的。\n\n${dg('紫色——中毒的征兆。但这不是普通的毒。')}\n\n你蹲下来仔细查看。狐狸身边的泥土呈现出不正常的暗红色——像是有什么东西从地下渗透上来。\n\n这不是自然现象。有人在附近的某个地方埋藏了毒药——也许是大量的毒药。\n\n如果这是枯松谷的方向——那也许跟胡青娘的制药活动有关。或者……跟暗星阁有关。\n\n无论哪种可能，都意味着一件事：${danger('苍龙镇的地下，藏着比你想的更危险的东西。')}`);
  divider();
  setFlag('found_poisoned_fox');
  showChoices([
    { text: '去告诉胡青娘', id: 're8_hu', effects: () => { changeRel('hu_qingniang', 3); }, next: SCENES['lobby_free'] },
    { text: '去告诉沈孤雁', id: 're8_shen', effects: () => { changeRel('shen_guyan', 3); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['random_event_9'] = () => {
  G.scene = 'random_event_9';
  narrate(`你在客栈的藏书角找到了一本旧书——《苍龙镇风物志》。这本书不知道被谁塞在角落里，积了一层厚厚的灰。\n\n翻了几页，你发现其中一页被人折了角。折角的那一页记载的是落雁峰的地形：\n\n${hl('「落雁峰，镇北三里。峰顶有巨石，状如展翅之雁。巨石之下有石室，深不可测。先人传言，石室乃上古遗迹，内有机关阵法。非有缘者不得入。」')}\n\n${hl('「石室入口在巨石东侧，需三把钥匙同时开启。钥匙分别由三任守护者保管。」')}\n\n三把钥匙。三任守护者。你知道沈孤雁是第七代——那钥匙在他手里。但另外两把呢？\n\n也许——就是那个铜盒里的东西。`);
  divider();
  setFlag('found_mountain_guide');
  addItem('苍龙镇风物志');
  showChoices([
    { text: '继续', id: 're9_continue', next: SCENES['lobby_free'] },
  ]);
};

SCENES['random_event_10'] = () => {
  G.scene = 'random_event_10';
  narrate(`黄昏时分，你独自走在镇外的田埂上。夕阳把天边染成了血红色，空气中弥漫着稻田和泥土的气味。\n\n远处传来牧童的歌声——一首苍龙镇的民谣：\n\n${hl('「落雁飞，落雁归，\n雁背上驮着谁的泪。\n石头门，石头锁，\n锁住了多少人的心。\n雨不停，夜不黑，\n有人等在石阶上。\n等了三年又三年，\n等白了头也心甘。」')}\n\n歌声渐行渐远，最后消失在暮色中。你站在田埂上，看着远处的落雁峰。峰顶的巨石在夕阳中投下长长的影子——像一只展翅的雁。\n\n${hl('有人等在石阶上……也许石室里真的有人在等。等了很久很久。')}`);
  divider();
  setFlag('heard_folk_song');
  showChoices([
    { text: '继续', id: 're10_continue', next: SCENES['lobby_free'] },
  ]);
};

// ---- 隐藏场景 ----

// 隐藏场景1：需要剑术≥18
SCENES['hidden_sword_master'] = () => {
  G.scene = 'hidden_sword_master';
  G.location = '镇外竹林';
  narrate(`你在镇外的竹林中迷了路。\n\n竹林很密，阳光只能从缝隙中漏下来，在地上投下斑驳的光影。竹叶在风中沙沙作响，像是在低声交谈。\n\n你走了大约一刻钟，忽然发现竹林中央有一小块空地。空地上有一个石桩——石桩上有密密麻麻的剑痕。\n\n不是随意的砍削——而是一套完整的剑法。每一道剑痕都精确到了不可思议的程度，深浅、角度、间距都像是用尺子量过的。\n\n你试着按照剑痕的顺序挥剑——\n\n第一式：起手式，稳健如山。\n第二式：转折，行云流水。\n第三式：……你停下来。第三式的剑痕明显比前两式深了很多——需要极大的力量才能留下这样的痕迹。\n\n你运足力气挥出第三式——\n\n${ok('一股从未有过的感觉从剑身传到手臂——像是你的剑突然活了一样。你感到自己的剑术在这一瞬间突破了某个瓶颈。')}\n\n${hl('你学会了「落雁剑法」的前三式。竹林里的剑痕——也许是某一代守护者留下的。他用剑法代替文字，把自己的绝学刻在了石头上。')}`);
  divider();
  G.sword += 5;
  setFlag('learned_luoyan_sword');
  addItem('落雁剑法·前三式');
  showChoices([
    { text: '继续', id: 'hs1_continue', next: SCENES['lobby_free'] },
  ]);
};

// 隐藏场景2：需要与沈孤雁好感度>25
SCENES['hidden_shen_gift'] = () => {
  G.scene = 'hidden_shen_gift';
  G.location = '听雨客栈';
  narrate(`深夜。沈孤雁敲开了你的房门。\n\n他手里拿着一样东西——一个古旧的锦盒。锦盒上绣着一只孤雁，跟铜盒上的印记一模一样。\n\n「你是我这十五年来遇到的第二个让我觉得可以信任的人。」他说，「第一个人已经不在了。」\n\n他把锦盒递给你。\n\n「打开看看。」\n\n你打开锦盒——里面是一把钥匙。钥匙很旧，铜绿色的表面上有精细的花纹。\n\n「这是落雁峰石室的三把钥匙之一。」他说，「第六代守护者交给我的。本来应该传给第八代——但我没有传人。」\n\n「现在——我把它暂时交给你保管。上山的时候，你会用到它。」\n\n${hl('这是沈孤雁给你的最高信任——他交出了守护了十五年的钥匙。')}`);
  divider();
  addItem('石室钥匙·第一把');
  setFlag('got_shen_key');
  changeRel('shen_guyan', 10);
  showChoices([
    { text: '「我不会让你失望的。」', id: 'hs2_promise', effects: () => { changeRel('shen_guyan', 5); }, next: SCENES['lobby_free'] },
  ]);
};

// 隐藏场景3：需要心机≥18
SCENES['hidden_letter'] = () => {
  G.scene = 'hidden_letter';
  G.location = '听雨客栈';
  narrate(`你在客栈的藏书角翻到了一本奇怪的书——夹在两本游记之间，没有任何标记。翻开一看，里面是空白的——但书页之间有一封信。\n\n信是写给「第七代守护者」的——也就是沈孤雁。\n\n写信人是第六代守护者——周先生。\n\n${hl('「孤雁：\n\n你看到这封信的时候，我已经不在了。\n\n有些事我没有当面告诉你——不是不信任你，而是怕你背上太多的包袱。\n\n三十年前的白太傅案——不是我们做的。\n\n是的，最后通牒是我发的。但动手的不是我们——是暗星阁。\n\n暗星阁截获了白太傅的奏折，发现里面提到了天机卷。他们杀了白太傅全家，然后伪装成守护者的手法。\n\n目的是两个：一、阻止奏折到达皇帝手中；二、嫁祸守护者，让白家的后人来寻仇。\n\n他们成功了。三十年来，白家的遗孤一直在找守护者报仇——而真正的凶手一直在暗处嘲笑我们。\n\n孤雁，如果有一天白家的后人找到了你——请告诉他真相。不要让他被暗星阁利用。\n\n这是我能为你做的最后一件事。\n\n——周半仙 绝笔」')}`);
  divider();
  narrate(`${ok('真相。三十年前的真相。白太傅不是被守护者杀的——是被暗星阁杀的。守护者背负了三十年的冤屈。\n\n如果白云生知道这个真相……')}`);
  setFlag('found_zhou_letter');
  showChoices([
    { text: '把信给白云生看', id: 'hl_give_bai', effects: () => { changeRel('bai_yunsheng', 15); setFlag('bai_knows_truth'); }, next: SCENES['lobby_free'] },
    { text: '把信给沈孤雁看', id: 'hl_give_shen', effects: () => { changeRel('shen_guyan', 5); setFlag('shen_knows_letter_found'); }, next: SCENES['lobby_free'] },
    { text: '暂时不说', id: 'hl_keep', effects: () => { G.wits += 2; }, next: SCENES['lobby_free'] },
  ]);
};

// 隐藏场景4：需要持有铜盒+铁片
SCENES['hidden_decode'] = () => {
  G.scene = 'hidden_decode';
  G.location = '听雨客栈';
  narrate(`你把铜盒和铁片放在一起。铁片上的密码——在铜盒的映照下——忽然变得可读了。\n\n原来铁片本身就是一个解码工具。密码的文字在铜盒表面的反射中，变成了一份完整的地图——落雁峰石室的详细布局图。\n\n${hl('石室分三层：\n\n第一层：入口大厅，有简单的机关——需要剑术来通过。\n第二层：迷宫通道，需要心机来辨别方向。\n第三层：石室核心，天机卷的存放处。需要三把钥匙同时开启。')}\n\n你把地图牢牢地记在心里。这将是上山时最宝贵的信息。`);
  divider();
  setFlag('decoded_mountain_map');
  addItem('石室布局图');
  G.wits += 3;
  showChoices([
    { text: '继续', id: 'hd_continue', next: SCENES['lobby_free'] },
  ]);
};

// 隐藏场景5：需要夜间+魅力≥15
SCENES['hidden_midnight'] = () => {
  G.scene = 'hidden_midnight';
  G.location = '听雨客栈';
  narrate(`你深夜下楼喝水的时候，发现客栈大堂里有人。\n\n月光从窗户照进来，照亮了一个人的侧脸——是胡青娘。她坐在沈孤雁惯常坐的位置上，手里拿着一杯茶——但茶已经凉了。\n\n她没有发现你。你站在楼梯的阴影里，看着她。\n\n她在看窗外的月亮。月光照在她脸上——你第一次看到她的表情没有任何伪装。不是白天那种妖媚的笑，也不是面对危险时的冷静——而是一种深沉的、无法言说的悲伤。\n\n她的嘴唇微微动了动——像是在说什么。你竖起耳朵，只听到了几个字：\n\n「……再等一等……就快结束了……」\n\n她站起来，把茶杯留在桌上，轻手轻脚地走了出去。门在她身后无声地关上。\n\n你走到桌边，拿起那个茶杯。茶已经凉透了——但杯壁上有一道浅浅的痕迹。\n\n是泪痕。\n\n${hl('胡青娘在深夜独自坐在这里——对着月亮流泪。她在等什么？什么快结束了？')}`);
  divider();
  setFlag('witnessed_hu_moment');
  showChoices([
    { text: '继续', id: 'hm_continue', next: SCENES['lobby_free'] },
  ]);
};
