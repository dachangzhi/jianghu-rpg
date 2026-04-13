// story_part9.js - 沈孤雁完整任务线 + 胡青娘完整任务线
// 沈孤雁：温和但滴水不漏的客栈老板，天机卷守护者
// 胡青娘：妖媚神秘的药铺掌柜，医者与杀手的双面人生

// ---- 沈孤雁任务：起始 ----
SCENES['shen_quest_start'] = () => {
  G.scene = 'shen_quest_start';
  G.location = '听雨客栈';
  narrate(`又一个雨夜。苍龙镇的雨似乎永远不会停。\n\n你从楼上下来，发现客栈大堂已经熄了灯。只有柜台后面点着一盏小油灯，沈孤雁坐在灯下，面前摊着一本旧册子。\n\n他听到你的脚步声，抬头看了一眼——然后做了一个意外的动作。他把册子合上了。\n\n「还没睡？」他微笑着问。和平日一样温和，但你注意到他的手指在封面上停留了一下——像是在确认什么没有被你看到。\n\n你走到柜台前。油灯的火苗在他脸上投下跳动的阴影，让他的表情变得难以捉摸。\n\n「睡不着。」你说。\n\n「我理解。」他给你倒了一杯茶——不是白天的女儿红，而是一杯清茶。「这种雨夜，容易让人想起很多事情。」`);
  divider();
  narrate(`你注意到他刚才在看的那本册子——封面上没有书名，但有一个小小的印记：${hl('一只展翅的孤雁')}。\n\n这个印记……你以前在某个地方见过。不，不是见过——是听人说过。\n\n天机卷。守护者的标记——一只孤雁。\n\n你装作不经意地扫了一眼那本册子。沈孤雁的手微微移动了一下，不着痕迹地把它推到了柜台下面。\n\n但你的眼睛已经看到了——册子的边角露出一个字：${hl('「卷」')}。`);
  divider();
  showChoices([
    { text: '「沈老板，那本册子——是天机卷吗？」', id: 'sq_direct', effects: () => { G.wits += 2; setFlag('asked_shen_scroll_directly'); changeRel('shen_guyan', -5); }, next: SCENES['shen_quest_reveal'] },
    { text: '不提册子，聊别的试探他', id: 'sq_subtle', effects: () => { G.wits += 1; setFlag('shen_subtle_approach'); }, next: SCENES['shen_quest_subtle'] },
    { text: '「沈老板，你知道天机卷是什么吗？」', id: 'sq_ask_whatis', effects: () => { G.wits += 1; }, next: SCENES['shen_quest_ask'] },
    { text: '（夜深了，明天再说）', id: 'sq_wait', next: SCENES['lobby_free'] },
  ]);
};

SCENES['shen_quest_subtle'] = () => {
  G.scene = 'shen_quest_subtle';
  narrate(`你端起茶杯，慢慢喝了一口。茶是上好的龙井——在这个偏僻的小镇上喝到龙井，本身就是一件不寻常的事。\n\n「好茶。」你说，「沈老板的茶品不输京城的茶馆。不知道沈老板以前……是在哪里品到的这种好茶？」\n\n沈孤雁的笑容纹丝不动。\n\n「年轻时走过一些地方。京城的茶馆——嗯，去过几次。不值一提。」\n\n「京城哪一家？」你追问。\n\n他顿了一下——极短的一瞬，但足以让你捕捉到。\n\n「……太和楼。不过那是很久以前的事了。」\n\n太和楼。你知道那家茶楼——它不在京城的主街上，而是在城东一条僻静的巷子里。那家茶楼有一个特点：它只有两层，二楼从不对外开放。\n\n因为二楼的客人，都是前朝遗臣的后裔。他们在那里秘密联络，交换情报，保存着前朝的最后一缕余温。\n\n太和楼在十五年前被锦衣卫查封了。所有在场的人——要么被捕，要么失踪，要么……死了。\n\n而沈孤雁说他「去过几次」。`);
  divider();
  showChoices([
    { text: '「太和楼……十五年前被查封了。沈老板运气不错，居然能全身而退。」', id: 'sq_taihe', effects: () => { G.wits += 2; setFlag('know_shen_taihe'); }, next: SCENES['shen_quest_reveal'] },
    { text: '「太和楼的龙井确实好。可惜后来没有了。」', id: 'sq_taihe_nostalgia', effects: () => { changeRel('shen_guyan', 3); G.charm += 1; setFlag('know_shen_taihe'); }, next: SCENES['shen_quest_reveal'] },
  ]);
};

SCENES['shen_quest_ask'] = () => {
  G.scene = 'shen_quest_ask';
  narrate(`沈孤雁的表情没有任何变化——但你注意到他握着茶杯的手指微微收紧了。\n\n「天机卷？」他重复了一遍，「客人从哪里听到的这个名字？这可不是随便什么人都能知道的东西。」\n\n他看着你，眼神中温和的表面下多了一层审视。\n\n「天机卷是一份名单。」他终于开口了，「记录了前朝遗臣和他们的后代。如果这份名单落在不当的人手里……」\n\n他没有说完。但他的表情已经说明了一切。\n\n「你是怎么知道的？」你问。\n\n他笑了笑。\n\n「因为我见过它。」\n\n这是你第一次从沈孤雁口中听到如此直接的话——没有遮掩，没有回避。`);
  setFlag('shen_admitted_seeing_scroll');
  divider();
  showChoices([
    { text: '「你见过？在哪里？」', id: 'sq_where', effects: () => { G.wits += 1; }, next: SCENES['shen_quest_reveal'] },
    { text: '「你是守护者。」', id: 'sq_guardian', effects: () => { G.wits += 3; setFlag('declared_shen_guardian'); }, next: SCENES['shen_quest_reveal'] },
  ]);
};

SCENES['shen_quest_reveal'] = () => {
  G.scene = 'shen_quest_reveal';
  narrate(`沈孤雁放下茶杯，沉默了很长时间。雨声在窗外哗哗作响，像是在催促他说出真相。\n\n最终，他叹了一口气。\n\n「你是个聪明人。在我开的这间客栈里，聪明人只来过两种——一种是锦衣卫，一种是我自己人。你不是锦衣卫。」\n\n他看了你一眼。\n\n「柳如烟是。」\n\n你并不意外。\n\n「我知道她是什么人。但这不是重点——你是谁？」\n\n沈孤雁站起来，走到窗边。雨打在窗棂上，他背对着你，声音变得很轻。\n\n「我叫沈孤雁。这个名字是我三十年前改的——我原来的名字，已经不重要了。重要的是，我是天机卷的第${hl('七代守护者')}。」\n\n他转过身来。\n\n「天机卷守护者——一个从前朝就开始传承的秘密组织。每一代守护者都只有一个任务：保护天机卷，不让它落入任何当权者的手中。」`);
  divider();
  narrate(`「这份名单上有一千二百个名字。每一个名字背后都是一个家族——前朝的忠臣、将领、文人的后代。如果这份名单被朝廷得到，这一千二百个家族——几千条人命——都将被清算。」\n\n「所以守护者一代一代地传递下去。把天机卷藏在只有守护者知道的地方。苍龙镇——落雁峰上的石室——就是天机卷现在的藏身之处。」\n\n他的眼神变得严肃。\n\n「但现在有人找到了苍龙镇。暗星阁的残余、锦衣卫的暗探、还有各方势力……他们都在往山上走。」\n\n「而我——一个守护了十五年的老人——第一次感到力不从心。」`);
  setFlag('shen_revealed_guardian');
  changeRel('shen_guyan', 10);
  divider();
  showChoices([
    { text: '「你需要帮手。」', id: 'sq_help', effects: () => { changeRel('shen_guyan', 5); setFlag('shen_quest_accepted'); }, next: SCENES['shen_quest_mission'] },
    { text: '「为什么告诉我？你守了十五年都没出事。」', id: 'sq_why_now', effects: () => { G.wits += 2; }, next: SCENES['shen_quest_whynow'] },
    { text: '「天机卷上有什么？能给我看看吗？」', id: 'sq_show_scroll', effects: () => { setFlag('asked_to_see_scroll'); }, next: SCENES['shen_quest_refuse'] },
  ]);
};

SCENES['shen_quest_mission'] = () => {
  G.scene = 'shen_quest_mission';
  narrate(`沈孤雁点头。\n\n「我需要帮手。不是随便什么人——是一个我能信任的人。你在苍龙镇的表现……让我觉得可以信任你。」\n\n他从柜台下面取出那本册子——封面上的孤雁印记在油灯下闪着微微的光。\n\n「这不是天机卷本身。」他说，「天机卷在山上。这本册子是我这十五年来的观察记录——苍龙镇的每一个人、每一条线索、每一次可疑的事件。我用它来判断谁接近了天机卷的秘密。」\n\n他翻到最后一页。\n\n「三年来，有七拨人来过苍龙镇寻找天机卷。暗星阁来了三次。锦衣卫来了两次。还有两次——我不知道是谁。但他们的手法都像是受过训练的。」\n\n「这一次是最危险的。因为第一次有人同时从多个方向逼近——暗星阁、锦衣卫、还有其他不明势力。」`);
  divider();
  setFlag('shen_quest_active');
  addItem('沈孤雁的观察记录');
  showChoices([
    { text: '「我们先确认山上的安全。」', id: 'sq_mountain', next: SCENES['lobby_free'] },
    { text: '「告诉我胡青娘的情况。」', id: 'sq_about_hu', next: SCENES['shen_quest_hu_info'] },
  ]);
};

SCENES['shen_quest_whynow'] = () => {
  G.scene = 'shen_quest_whynow';
  narrate(`沈孤雁苦笑了一下。\n\n「因为这一次不一样。以前来找天机卷的人——不管是暗星阁还是锦衣卫——都是单独来的。我可以应对。」\n\n「但这一次——」他掰着手指数，「暗星阁有人、锦衣卫有人、镇上可能还有内应、再加上白云生那个醉鬼……还有你。」\n\n「他们不是在同一条路上走——他们在从四面八方合围。不管我怎么躲，总有一个方向会被堵住。」\n\n他看着你。\n\n「我守了十五年的秘密。如果到了不得不放手的时候——我至少要确保它落入对的人手里。」`);
  divider();
  setFlag('shen_quest_accepted');
  showChoices([
    { text: '「我不会让你孤军奋战的。」', id: 'sq_whynow_promise', effects: () => { changeRel('shen_guyan', 8); setFlag('shen_pledged_support'); }, next: SCENES['shen_quest_mission'] },
  ]);
};

SCENES['shen_quest_refuse'] = () => {
  G.scene = 'shen_quest_refuse';
  narrate(`沈孤雁摇头。\n\n「不能给你看。天机卷只能由守护者保管——这是七代传下来的规矩。」\n\n但他的语气不是拒绝，而是歉意。\n\n「不是不信任你。而是……知道得越多，危险就越大。天机卷上的每一个名字都是一条人命。如果有人从你嘴里撬出这些名字——不管你有多坚强——那些人就死了。」\n\n他看着你的眼睛。\n\n「你能理解吗？」`);
  divider();
  setFlag('shen_quest_accepted');
  showChoices([
    { text: '「理解。但我仍然想帮忙。」', id: 'sq_refuse_help', effects: () => { changeRel('shen_guyan', 5); }, next: SCENES['shen_quest_mission'] },
  ]);
};

SCENES['shen_quest_hu_info'] = () => {
  G.scene = 'shen_quest_hu_info';
  narrate(`沈孤雁的表情变得复杂。\n\n「胡青娘……她是我认识最久的人。」\n\n他犹豫了一下。\n\n「我们之间有一段过去。这段过去——怎么说呢——不是三言两语能说清的。」\n\n「她知道我是守护者吗？」你问。\n\n「她知道一部分。但不知道天机卷的具体位置。我们有一个约定——她不问我的秘密，我不问她的。」\n\n他叹了口气。\n\n「但最近……她变了。以前她每个月只去山上采一次药，现在每隔三天就去。她的药铺里多了一些我不认识的药材——有些是制毒的原料。」\n\n「你怀疑她在制毒？」\n\n「不是怀疑。我确定她在制毒。问题是——她制毒是为了谁？」`);
  setFlag('shen_suspects_hu');
  divider();
  showChoices([
    { text: '继续探索', id: 'sq_hu_explore', next: SCENES['lobby_free'] },
  ]);
};

// ---- 沈孤雁回忆：前朝遗臣 ----
SCENES['shen_backstory_1'] = () => {
  G.scene = 'shen_backstory_1';
  G.location = '回忆';
  narrate(`沈孤雁坐在客栈后院的老藤椅上，手里拿着一盏已经冷了的茶。\n\n夜很深了。他开始说起过去的事。\n\n${hl('——三十年前·京城——')}\n\n「我原来的名字叫沈知远。家父沈鹤年是前朝翰林院的编修——一个七品小官，负责整理前朝的典籍和史书。」\n\n「前朝覆灭的时候，我十二岁。那一天——我还记得——父亲从翰林院回来，脸色苍白如纸。他把全家人叫到一起，说了一句话：」\n\n沈孤雁的声音变得很轻，像是在回忆一个遥远的梦。\n\n「他说：『朝代更替是常事。但有些东西不能丢——记着那些人，那些为这个朝代尽心尽力的人。他们的名字不应该被遗忘。』」\n\n「然后他从怀里取出一卷发黄的绢帛——那就是天机卷。他说这是第六代守护者传给他的，而他是第七代。」\n\n「第七代……就是他自己。」\n\n「他把天机卷交给了一个人——不是家人，而是一个他信任的朋友。然后他让我跟着这个朋友离开了京城。那是我最后一次见到父亲。」`);
  divider();
  setFlag('heard_shen_memory_1');
  showChoices([
    { text: '「你父亲后来怎么了？」', id: 'sb1_father', next: SCENES['shen_backstory_2'] },
  ]);
};

SCENES['shen_backstory_2'] = () => {
  G.scene = 'shen_backstory_2';
  narrate(`${hl('——三十年前·逃亡——')}\n\n「父亲没有跟我一起走。他说他留下了——为了让追踪者以为天机卷还在京城。」\n\n「我不知道他后来经历了什么。但三年后，我托人打听到的消息是——前翰林编修沈鹤年，因『窝藏叛党』被判斩刑。行刑那天，据说他面不改色，只说了一句话：」\n\n沈孤雁停了一下。\n\n「『雁过长空，不留痕迹。但天知道它来过。』」\n\n「……这就是我改名叫沈孤雁的原因。」\n\n他沉默了一会儿。雨声在屋檐下哗哗作响。\n\n「父亲死后，我跟着那个朋友——第六代守护者的副手，一个姓周的老先生——在南方辗转了十年。他教我武艺、教我读书、教我如何观察人心。」\n\n「十年后，周先生病逝。临终前，他把天机卷的藏匿地点告诉了我——苍龙镇落雁峰。」\n\n「我来到这里，开了这间客栈。一守就是十五年。」`);
  divider();
  setFlag('heard_shen_memory_2');
  showChoices([
    { text: '「十五年……不孤独吗？」', id: 'sb2_lonely', effects: () => { changeRel('shen_guyan', 5); G.charm += 1; }, next: SCENES['shen_backstory_3'] },
    { text: '「然后遇到了胡青娘？」', id: 'sb2_hu', next: SCENES['shen_hu_history'] },
  ]);
};

SCENES['shen_backstory_3'] = () => {
  G.scene = 'shen_backstory_3';
  narrate(`沈孤雁想了想。\n\n「孤独是有的。但不是你想的那种孤独——不是没有人陪，而是不能跟任何人说真话。」\n\n「你知道十五年是什么概念吗？每一天，你对每一个人说的每一句话，都只能是一半真一半假。时间长了，你都不知道哪一半是真的了。」\n\n他苦笑了一下。\n\n「赵铁牛是个好人。但他不知道我是谁。李婶帮了我很多忙——但她也不知道。胡青娘……」\n\n他停了一下。\n\n「她知道一部分。我们之间有一种默契——不问彼此的过去。这种默契比任何誓言都牢固。」\n\n「但哪怕是这种默契，也是一种孤独。因为你知道——你不说，不是因为不想说，而是因为不能说。」\n\n${hl('十五年的孤独。一千二百个名字的重量。一个人的秘密。这就是守护者的代价。')}`);
  divider();
  setFlag('heard_shen_memory_3');
  changeRel('shen_guyan', 5);
  showChoices([
    { text: '「你不是一个人了。」', id: 'sb3_not_alone', effects: () => { changeRel('shen_guyan', 8); setFlag('shen_not_alone'); }, next: SCENES['lobby_free'] },
    { text: '「胡青娘呢？跟我说说你们的故事。」', id: 'sb3_hu', next: SCENES['shen_hu_history'] },
  ]);
};

// ---- 沈孤雁与胡青娘的过去 ----
SCENES['shen_hu_history'] = () => {
  G.scene = 'shen_hu_history';
  narrate(`沈孤雁的表情变得柔和了一些——这是你第一次在他脸上看到如此真实的情感。\n\n「胡青娘。」他念出这个名字时，声音里带着一种你无法忽视的温度。\n\n「十二年前，我在苍龙镇安顿下来的第三年。有一天，一个年轻女人来到了镇上——穿一身青色衣裳，背着一个药篓，说自己是游方郎中，想在镇上开一间药铺。」\n\n「我第一眼看到她，就知道她不是普通的郎中。她的手——太白了，太嫩了。那不是常年采药的手。而且她的步伐——虽然刻意放慢了，但骨子里的节奏是练过轻功的人才会有的。」\n\n「我没有揭穿她。因为在那个年代，来到这种偏僻小镇的每个人都有不想被揭穿的过去。包括我自己。」`);
  divider();
  narrate(`「她开了药铺，开始给镇上的人看病。医术确实好——好得不像一个三十岁的年轻女人应该有的水平。镇上的人很快就开始信任她了。」\n\n「我们之间的关系……」他停顿了一下，「很复杂。不是你想的那种简单的男女之情——当然，也不是完全没有。」\n\n「我们是在一个雨夜真正认识彼此的。就像今晚一样——大雨、深夜、只有一盏灯。」\n\n「她在药铺里配药配到很晚。我去买一些安神的草药——那段时间我失眠很严重，守着秘密的人总是睡不好。」\n\n「我们在药铺门口遇到了。她看了我一眼，说：『你的失眠不是因为身体，是因为心里装了太多东西。』」\n\n「我当时愣住了——因为她说对了。」`);
  divider();
  setFlag('heard_shen_hu_history');
  showChoices([
    { text: '「然后你们就开始了那种不问过去的默契？」', id: 'sh_hu_pact', next: SCENES['shen_hu_pact'] },
    { text: '「她到底是谁？」', id: 'sh_hu_who', next: SCENES['hu_backstory_1'] },
  ]);
};

SCENES['shen_hu_pact'] = () => {
  G.scene = 'shen_hu_pact';
  narrate(`沈孤雁点了点头。\n\n「那天晚上，我们在药铺里坐了一整夜。没有说太多话，但每一句都是真实的。」\n\n「她说：『我不问你从哪里来。你也不问我。我们就从今天开始认识。以前的事——都是别人的事。』」\n\n「我说好。」\n\n「从那以后，我们有了一种奇怪的相处方式——比朋友近，比恋人远。我们不问过去，不谈未来。只是偶尔在深夜坐在对方的铺子里，喝一杯茶，说几句话。」\n\n「我知道她在配一些不寻常的药。她也知道我在守护一些不能说出口的东西。但我们都不问。」\n\n他低下头。\n\n「十二年。这种默契维持了十二年。直到现在——一切都快要藏不住了。」`);
  divider();
  changeRel('shen_guyan', 3);
  showChoices([
    { text: '「她制毒是为了保护你吗？」', id: 'sh_pact_poison', next: SCENES['hu_quest_start'] },
    { text: '继续探索', id: 'sh_pact_explore', next: SCENES['lobby_free'] },
  ]);
};

// ---- 胡青娘任务：起始 ----
SCENES['hu_quest_start'] = () => {
  G.scene = 'hu_quest_start';
  G.location = '药铺';
  narrate(`你推门走进胡青娘的药铺。药铺里弥漫着一股复杂的药香——有当归的苦甜，有黄连的清苦，还有一种你叫不出名字的甜腻气息。\n\n胡青娘正在柜台后面称量药材。她穿着一身暗绿色的衣裙，乌黑的头发用一支银簪随意地盘在脑后。几缕碎发垂在耳边，随着她的动作轻轻摇晃。\n\n看到你进来，她放下手中的秤，微微一笑。那种笑容——三分真诚，七分试探——是胡青娘的标志性表情。\n\n「稀客。」她的声音慵懒而低沉，像丝绸滑过皮肤。「你这种人，除非身上有伤，否则不会踏进药铺的门。怎么——哪里不舒服？」\n\n你注意到柜台后面的布帘——通往内室——微微晃动了一下，像是刚刚有人从帘子后面离开。\n\n空气中除了药材的味道，还有一种淡淡的松脂气息——跟她平时身上的药香不一样。`);
  divider();
  showChoices([
    { text: '「我来看看你——不是看病的。」', id: 'hq_visit', effects: () => { G.charm += 1; changeRel('hu_qingniang', 3); }, next: SCENES['hu_quest_chat'] },
    { text: '「你最近去过枯松谷吗？」', id: 'hq_gusong', effects: () => { G.wits += 2; setFlag('asked_hu_gusong'); }, next: SCENES['hu_quest_gusong'] },
    { text: '「你内室里有人？我好像听到动静了。」', id: 'hq_inside', effects: () => { G.wits += 1; }, next: SCENES['hu_quest_inside'] },
  ]);
};

SCENES['hu_quest_chat'] = () => {
  G.scene = 'hu_quest_chat';
  narrate(`胡青娘挑了挑眉。\n\n「来看我？有意思。这镇上的人来看我，不是买药就是看病。你是第一个什么目的都没有的。」\n\n她从柜台下面取出一壶茶和两只杯子。\n\n「坐吧。反正今天没什么客人。陪我聊聊。」\n\n她给你倒了一杯茶。茶色金黄，香气清冽——不是普通的茶叶，而是加了药材的配方。\n\n「这是我自己配的安神茶。」她说，「喝了不会犯困，但能让人心静。我这双手啊——配了一辈子的药，只有这壶茶是真正让人舒服的。」\n\n你端起杯子喝了一口。确实——一种温和的暖意从胸口慢慢散开，像是有人在你心口轻轻按了一下。\n\n「好茶。」\n\n「当然好。」她笑了，「我亲手采的药材，亲手配的比例。做药和做人一样——差一厘一毫都不行。」`);
  divider();
  showChoices([
    { text: '「胡姐姐，你以前……是做什么的？」', id: 'hq_past', effects: () => { changeRel('hu_qingniang', -3); }, next: SCENES['hu_quest_past'] },
    { text: '「你说做药和做人一样——你觉得做人和做药哪个更难？」', id: 'hq_philosophy', effects: () => { G.wits += 1; changeRel('hu_qingniang', 5); }, next: SCENES['hu_quest_philosophy'] },
    { text: '「你认识沈孤雁很久了吧？」', id: 'hq_about_shen', effects: () => { G.charm += 1; }, next: SCENES['hu_quest_about_shen'] },
  ]);
};

SCENES['hu_quest_past'] = () => {
  G.scene = 'hu_quest_past';
  narrate(`胡青娘的笑容没有变，但眼神深了一层。\n\n「以前？」她慢慢转着茶杯，「以前的事——有什么好聊的呢？」\n\n她顿了一下。\n\n「这镇上的人都知道我是十二年前来的，是游方郎中。你问以前——你是想知道什么？」\n\n她的语气依然慵懒，但你感觉到空气中多了一丝微妙的张力。不是威胁——而是警戒。\n\n「只是好奇。一个三十来岁的女人，医术这么好，却选择在这种偏僻的小镇上开药铺——总觉得有故事。」\n\n她笑了——这次是真的笑了，带着一点苦涩。\n\n「有故事的人，最喜欢没故事的地方。你以后会明白的。」`);
  divider();
  showChoices([
    { text: '「也许我已经明白了。」', id: 'hq_past_understand', effects: () => { changeRel('hu_qingniang', 5); G.charm += 2; }, next: SCENES['hu_quest_poison_choice'] },
    { text: '继续聊别的', id: 'hq_past_other', next: SCENES['lobby_free'] },
  ]);
};

SCENES['hu_quest_philosophy'] = () => {
  G.scene = 'hu_quest_philosophy';
  narrate(`胡青娘愣了一下——然后露出一个真正的、没有保留的笑容。\n\n「有意思。从来没人这么问过我。」\n\n她想了想。\n\n「做药更难。因为药没有心。你得替它想——什么时候该苦，什么时候该甜，什么时候救人，什么时候……」\n\n她没有说完。但你知道她省略的是什么——${dg('什么时候杀人')}。\n\n「做人嘛——」她靠在椅背上，「做人其实简单。你只需要知道什么时候开口，什么时候闭嘴。做到了这两点，在这个世上就能活得不错。」\n\n她看着你，眼神里多了一种欣赏。\n\n「你这个人……不简单。这种问题不是随便什么人能问出来的。」`);
  setFlag('hu_philosophy_chat');
  changeRel('hu_qingniang', 3);
  divider();
  showChoices([
    { text: '「我再问一个不简单的问题——你在枯松谷藏了什么？」', id: 'hq_phil_gusong', effects: () => { G.wits += 2; setFlag('asked_hu_gusong'); }, next: SCENES['hu_quest_gusong'] },
    { text: '告辞', id: 'hq_phil_leave', next: SCENES['lobby_free'] },
  ]);
};

SCENES['hu_quest_about_shen'] = () => {
  G.scene = 'hu_quest_about_shen';
  narrate(`提到沈孤雁，胡青娘的表情微妙地变了——不是变得柔和，而是变得……更深了。\n\n「沈老板啊。」她说，「认识很久了。十二年？十三年？记不太清了。」\n\n她在撒谎。你看得出来——她的眼睛在看茶杯里的倒影，那是一个人在回忆时才会有的动作。\n\n「他是个好人。」她说，「一个好人。就够了。」\n\n「只是好人？」\n\n她抬起头，看着你。\n\n「这世上『好人』两个字就够了。你知道多少人说不出这两个字吗？」\n\n她站起来，走到药柜前，开始整理药材。这是她的习惯——当话题涉及到某些领域时，她就会用忙碌来回避。\n\n「不聊他了。」她说，「你有什么需要的，尽管说。不买东西也行——陪我说说话就好。在这镇上，能说几句真话的人不多。」`);
  divider();
  showChoices([
    { text: '「那我直说了——你在枯松谷做的事，我都知道了。」', id: 'hq_shen_gusong', effects: () => { G.wits += 2; setFlag('asked_hu_gusong'); changeRel('hu_qingniang', -5); }, next: SCENES['hu_quest_gusong'] },
    { text: '「好的，以后常来打扰。」', id: 'hq_shen_leave', effects: () => { changeRel('hu_qingniang', 3); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['hu_quest_inside'] = () => {
  G.scene = 'hu_quest_inside';
  narrate(`胡青娘的微笑没有变化——但她的身体微微绷紧了。一个外行人看不出来，但你习武之人看得很清楚——她的重心移动了半寸，随时准备应对突发状况。\n\n「你听错了。」她说，「内室没有人。我刚才在里面晒药材，可能碰倒了什么东西。」\n\n你点头，装作信了。但你的鼻子不会骗你——空气中那股松脂气息……是${hl('枯松谷特有的气味')}。如果内室有人刚刚离开，那这个人很可能刚从枯松谷方向来。\n\n「可能是老鼠。」你说。\n\n胡青娘笑了。\n\n「苍龙镇的老鼠都成精了——会开药铺的门。你说是吧？」\n\n你们都笑了。但笑声之下，两个人都心知肚明——对方在演戏。`);
  divider();
  showChoices([
    { text: '「你到底在枯松谷做什么？」', id: 'hq_inside_gusong', effects: () => { G.wits += 1; setFlag('asked_hu_gusong'); }, next: SCENES['hu_quest_gusong'] },
    { text: '不追问，改天再说', id: 'hq_inside_leave', next: SCENES['lobby_free'] },
  ]);
};

// ---- 胡青娘：枯松谷对峙 ----
SCENES['hu_quest_gusong'] = () => {
  G.scene = 'hu_quest_gusong';
  narrate(`胡青娘的笑容慢慢消失了。\n\n她放下茶杯，双手交叉放在桌上，看着你。她的眼睛——在药铺昏暗的光线下——是深褐色的，像两潭死水。但此刻，死水下面有什么东西在涌动。\n\n「你知道了。」她说。不是问句。\n\n「枯松谷。制药室。断肠散改良型。」你列出这些。\n\n她的表情没有变化。但她的手指微微收紧了。\n\n「你想知道什么？」\n\n「真相。」\n\n她站起来，走到窗边。窗外是苍龙镇的雨景——灰蒙蒙的天，湿漉漉的石板路，偶尔有一个撑伞的行人匆匆走过。\n\n「真相……」她重复了一遍，「真相有时候比毒药更难以下咽。」`);
  divider();
  narrate(`她转过身来。\n\n「我确实在枯松谷制药。但不是你想的那样——我不是杀手。」\n\n「断肠散改良型——是我为了${hl('解毒')}而研制的。」\n\n她从柜台下面取出一个小瓶子——和你之前在枯松谷看到的一模一样。\n\n「三年前，暗星阁开始用一种新型毒药暗杀天机卷守护者。我以前的一个……同门……被暗星阁胁迫，帮他们改良了断肠散。我研制改良型断肠散的目的——是为了找到解药。」\n\n「所以你在枯松谷制药——是为了对付暗星阁的毒药？」\n\n「是的。」她说，「但同时——我也在制毒。因为要研制解药，就必须先理解毒药。我需要知道它的配方、它的变种、它的每一个细节。」\n\n她看着你。\n\n「医者和杀手只有一线之隔。我踩在这条线上——已经踩了十二年了。」`);
  setFlag('hu_revealed_poison_purpose');
  changeRel('hu_qingniang', 5);
  divider();
  showChoices([
    { text: '「你为什么要守护沈孤雁？」', id: 'hq_gu_why_shen', next: SCENES['hu_quest_why_shen'] },
    { text: '「你以前的同门——现在在哪里？」', id: 'hq_gu_tongmen', effects: () => { G.wits += 1; }, next: SCENES['hu_quest_tongmen'] },
    { text: '「我相信你。」', id: 'hq_gu_trust', effects: () => { changeRel('hu_qingniang', 10); G.charm += 2; setFlag('hu_quest_complete'); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['hu_quest_why_shen'] = () => {
  G.scene = 'hu_quest_why_shen';
  narrate(`胡青娘的表情终于有了真正的松动。\n\n「为什么……」她低声重复。\n\n她回到座位上，慢慢坐下。\n\n「因为他是我见过的唯一一个——知道我在做什么，却从来不问的人。」\n\n「十二年。他知道我在制毒，他知道我的过去不干净。但他从来没有质问过我一次。」\n\n「在别人眼里，我是个神秘的药铺女掌柜。在沈孤雁眼里——我只是胡青娘。一个在深夜配药配到天亮的普通女人。」\n\n她低下头。\n\n「这个世上，能这样看你的人——你一辈子也遇不到几个。」\n\n${hl('她说的不是爱情——虽然也许有。她说的是一种更深的东西——被完整地看见，却不被评判。')}`);
  divider();
  setFlag('hu_quest_complete');
  changeRel('hu_qingniang', 5);
  showChoices([
    { text: '「我会保护你们的秘密。」', id: 'hq_why_protect', effects: () => { changeRel('hu_qingniang', 5); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['hu_quest_tongmen'] = () => {
  G.scene = 'hu_quest_tongmen';
  narrate(`胡青娘的眼神变得阴沉。\n\n「我的同门……他叫秦无悔。我们是一个师父教出来的——师父是江湖上有名的毒医，外号『百草仙』。」\n\n「师父教了我们两样本事：用毒和解毒。他说，这世上的毒药千千万万，但每一种毒都有对应的解药。找不到解药，不是解药不存在——而是你不够了解这种毒。」\n\n「秦无悔……他的天赋比我高。但他心术不正——他觉得制毒比解毒更有意思。师父发现后把他逐出了师门。」\n\n她顿了一下。\n\n「五年前，秦无悔加入了暗星阁。他开始为暗星阁研制新型毒药——无色无味、症状自然、连仵作都查不出来的完美暗杀毒药。」\n\n「三年前，他通过暗星阁找到了我。他说如果我帮他改进配方，他就不把我的身份上报给暗星阁。我拒绝了。」\n\n「然后——暗星阁开始对天机卷守护者下手。用的就是秦无悔改良的毒药。」\n\n${dg('所以她研制解药——不仅是为了救人，也是为了赎罪。师门的耻辱，她觉得自己也有责任。')}`);
  setFlag('know_qin_wuhui');
  divider();
  showChoices([
    { text: '「秦无悔现在在哪里？」', id: 'hq_tm_where', effects: () => { G.wits += 1; }, next: SCENES['lobby_free'] },
    { text: '「你不是在赎罪。你是在做对的事。」', id: 'hq_tm_right', effects: () => { changeRel('hu_qingniang', 8); G.charm += 1; }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['hu_quest_poison_choice'] = () => {
  G.scene = 'hu_quest_poison_choice';
  narrate(`胡青娘看了你一眼。\n\n「也许你真的明白了。」\n\n她从柜台下面取出两个小瓶子——一个是青色，一个是白色。\n\n「青色的是解毒药——能解大部分已知的江湖毒药。白色的是毒药——微量使用可以让人沉睡，过量使用可以让人永远不醒。」\n\n「我给你一个选择。你想要哪个？」\n\n${hl('这是一个考验。不是考你需要什么——而是考你是什么样的人。')}`);
  divider();
  showChoices([
    { text: '「我要青色的。」', id: 'hq_poison_antidote', effects: () => { addItem('万能解毒药'); changeRel('hu_qingniang', 5); }, next: SCENES['lobby_free'] },
    { text: '「两个都不要。我不要靠药物。」', id: 'hq_poison_refuse', effects: () => { G.sword += 2; changeRel('hu_qingniang', 3); }, next: SCENES['lobby_free'] },
    { text: '「两个都要。有备无患。」', id: 'hq_poison_both', effects: () => { addItem('万能解毒药'); addItem('安眠散'); G.wits += 1; }, next: SCENES['lobby_free'] },
  ]);
};

// ---- 胡青娘回忆：双面人生 ----
SCENES['hu_backstory_1'] = () => {
  G.scene = 'hu_backstory_1';
  G.location = '回忆';
  narrate(`夜深了。胡青娘关了药铺的门，在柜台后面点了一盏灯。\n\n「你想知道我的故事？」她看着你，「好。反正已经到了这一步——没有什么不能说的了。」\n\n${hl('——二十年前·南方·百草谷——')}\n\n「我叫胡青娘。这个名字是真的——但只有名字是真的。」\n\n「我师父百草仙收养了我。我三岁的时候被丢在他药庐门口——裹在一块破布里，身上还沾着血。师父说，也许是仇家灭门后的遗孤，也许是被人故意放在他门口的。」\n\n「不管怎样，他收留了我。给我取名青娘——因为他在药庐前的青石板上发现了我。」\n\n「师父教我认草药。从三岁到十三岁——十年。十年里，我认识了三千多种草药，学会了五百多个药方。师父说我有天赋——能把草药的味道和功效一一对应起来，闻一闻就知道是什么药。」`);
  divider();
  narrate(`「十三岁那年，师父开始教我用毒。」\n\n「他说：『青娘，世上有两种药——救人的和杀人的。我不能只教你一种。因为只懂救人的人，在江湖上活不长。但只懂杀人的人——活得再久也不配活。』」\n\n「所以从十三岁开始，我学了毒药和解药。两样一起学——就像学写字必须同时学认字和写字一样。」\n\n「师父还有一个弟子——秦无悔。他比我大五岁，天赋极高，但性子冷。他喜欢毒药胜过解药——他说解药是给弱者的，毒药才是强者的武器。」\n\n「师父为此跟他大吵了一架。最后把他逐出了师门。」\n\n「那是十八年前的事了。」`);
  setFlag('heard_hu_memory_1');
  showChoices([
    { text: '继续', id: 'hb1_next', next: SCENES['hu_backstory_2'] },
  ]);
};

SCENES['hu_backstory_2'] = () => {
  G.scene = 'hu_backstory_2';
  narrate(`${hl('——十二年前·流浪——')}\n\n「师父在我十八岁那年去世了。临终前，他把药庐和所有的药方都留给了我。」\n\n「但药庐没有留住——师父死后，他的仇家找上门来了。他们说师父欠了他们一笔债——一条命。」\n\n「我一个人打不过他们。我烧了药庐，带着能带走的药材和药方，连夜逃了。」\n\n「之后我流浪了六年。用不同的名字在不同的地方停留——有时做郎中，有时……」\n\n她停了一下。\n\n「有时替人做事。不干净的事。」\n\n${dg('她没有说那些事是什么。但你从她的语气中猜到了——制毒、配药、有时候……也许还有暗杀。')}\n\n「二十四岁那年，我到了苍龙镇。我想停下来。我想有一个地方——不需要再换名字，不需要再逃。」\n\n「然后我遇到了沈孤雁。」`);
  divider();
  setFlag('heard_hu_memory_2');
  showChoices([
    { text: '「你是在遇到他之后才停下来的？」', id: 'hb2_stop', effects: () => { changeRel('hu_qingniang', 3); }, next: SCENES['hu_backstory_3'] },
  ]);
};

SCENES['hu_backstory_3'] = () => {
  G.scene = 'hu_backstory_3';
  narrate(`胡青娘想了想。\n\n「是。也不完全是。遇到他之前，我已经想停下来了。但一直在等——等一个可以停下来的理由。」\n\n「沈孤雁就是那个理由。不是因为爱情——虽然也许有一点。而是因为……他让我看到了一种可能性——一个人可以守着一个秘密过一辈子，并且活得堂堂正正。」\n\n「我以前觉得自己不配过正常人的生活。制毒、配药、替人做不干净的事——这些都是我的罪。但沈孤雁让我明白，过去的事不定义你。定义你的是你今天做的事。」\n\n「所以我开了一间药铺。我给镇上的人看病、配药。我用我的医术帮助人——不是用毒药害人。」\n\n她顿了一下。\n\n「直到三年前。秦无悔找上门来。」\n\n${hl('三年前，她以为结束了的过去，又追上来了。')}`);
  divider();
  setFlag('heard_hu_memory_3');
  changeRel('hu_qingniang', 5);
  showChoices([
    { text: '「但你做出了选择。你选了救人。」', id: 'hb3_choice', effects: () => { changeRel('hu_qingniang', 5); }, next: SCENES['lobby_free'] },
  ]);
};
