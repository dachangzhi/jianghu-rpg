"use strict";
/// <reference path="../types.ts" />
// story_part7.js - 赵铁牛完整任务线
// 赵铁牛：豪爽直率的铁匠，前军中小卒，背负着裁缝铺的秘密
// ---- 赵铁牛任务：起始 ----
SCENES['zhao_quest_start'] = () => {
    G.scene = 'zhao_quest_start';
    G.location = '铁匠铺';
    narrate(`雨后初晴，阳光斜照在铁匠铺前的水洼上，泛起一片碎金。\n\n你走进赵铁牛的铁匠铺，炉火正旺，铁锤的余温还没散去。但赵铁牛不在铁砧前——他坐在铺子后面的矮凳上，双手捧着一碗已经凉透的茶，眼神空洞地望着墙角。\n\n墙上挂着一副旧铠甲，胸甲上有一个拳头大的凹痕，旁边的皮革已经发黑碎裂。你认出那是北疆边军的标准制式甲——但至少是十年前的款式了。\n\n赵铁牛听到脚步声，抬起头。他的眼睛布满血丝，像是好几天没有睡好觉。见到是你，他愣了一下，然后勉强挤出一个笑容。`);
    dialog('zhao_tieniu', '是你啊……坐吧，屋里乱，别嫌弃。你要打什么东西？今天……今天可能不行，炉子没热透。');
    narrate(`他的声音沙哑，和平日里那个声如洪钟的铁匠判若两人。\n\n你注意到矮桌上摊着一块布——是一块还没裁剪的灰蓝色棉布，布角绣着一朵小小的梅花。你想起李婶说过，镇上东边的李裁缝三天前死了——说是失足落水。\n\n但赵铁牛盯着那块布的眼神，不像是在看一块普通的布料。`);
    divider();
    showChoices([
        { text: '「老赵，你看起来不太好。发生什么事了？」', id: 'zq_care', effects: () => { changeRel('zhao_tieniu', 3); setFlag('zhao_quest_active'); }, next: SCENES['zhao_quest_care'] },
        { text: '「那块布是李裁缝的吧？我听说他死了。」', id: 'zq_direct', effects: () => { setFlag('zhao_quest_active'); G.wits += 1; }, next: SCENES['zhao_quest_direct'] },
        { text: '（默默坐下，等他自己开口）', id: 'zq_silent', effects: () => { changeRel('zhao_tieniu', 5); G.wits += 2; setFlag('zhao_quest_active'); setFlag('zhao_silent_approach'); }, next: SCENES['zhao_quest_silent'] },
        { text: '「你那副铠甲……北疆边军的？你在军中待过？」', id: 'zq_armor', effects: () => { setFlag('zhao_quest_active'); setFlag('asked_zhao_military'); }, next: SCENES['zhao_quest_armor'] },
    ]);
};
SCENES['zhao_quest_care'] = () => {
    G.scene = 'zhao_quest_care';
    narrate(`赵铁牛沉默了好一会儿。外面的麻雀在檐下叽叽喳喳叫着，他似乎在听，又似乎什么都没听见。\n\n终于，他长长地叹了一口气，那口气仿佛在他胸口憋了好几天。`);
    dialog('zhao_tieniu', '……李裁缝死了。你知道吧？');
    narrate(`他顿了一下，像是在斟酌用词。赵铁牛这个人，平时说话直来直去，从不会拐弯——但此刻他犹豫了。`);
    dialog('zhao_tieniu', '官方说是失足落水。但我不信。李裁缝那个人，手脚利索得很，在河边洗了二十年布，从来没出过事。');
    narrate(`他低下头，双手攥紧了那碗凉茶。指节发白。`);
    dialog('zhao_tieniu', '我跟李裁缝……认识二十年了。从北疆回来，我就住在这个镇子，他是我第一个朋友。他给我缝过冬衣，一缝就是十年。每年入冬前，他都会送一件新的来——说什么铁匠整天对着炉火不怕热，但出了铺子就冻得跟孙子似的。');
    narrate(`他苦笑了一下，笑容里带着说不出的苦涩。`);
    dialog('zhao_tieniu', '我想查清楚他到底是怎么死的。但我一个打铁的，不会查案……你走南闯北的，能不能帮我这个忙？');
    divider();
    showChoices([
        { text: '「我帮你。把你所知道的都告诉我。」', id: 'zq_accept_full', effects: () => { changeRel('zhao_tieniu', 8); setFlag('zhao_quest_accepted'); addItem('李裁缝的布样'); }, next: SCENES['zhao_quest_clues'] },
        { text: '「我可以帮忙，但你得先告诉我——你为什么这么肯定他不是失足？」', id: 'zq_why_sure', effects: () => { changeRel('zhao_tieniu', 3); G.wits += 1; setFlag('zhao_quest_accepted'); }, next: SCENES['zhao_quest_whysure'] },
        { text: '「这种事……你确定要查？有时候真相不如不知道。」', id: 'zq_warn', effects: () => { setFlag('zhao_quest_accepted'); setFlag('zhao_warned_about_truth'); }, next: SCENES['zhao_quest_warn'] },
    ]);
};
SCENES['zhao_quest_direct'] = () => {
    G.scene = 'zhao_quest_direct';
    narrate(`赵铁牛猛地抬头，眼中闪过一丝惊讶——然后是警惕，最后变成了某种如释重负。\n\n他张了张嘴，似乎想否认什么，但最终还是放弃了。`);
    dialog('zhao_tieniu', '……你消息倒是灵通。');
    narrate(`他把那块布推到你面前。`);
    dialog('zhao_tieniu', '这是三天前他裁好的布——原本是给我的冬衣料子。他死的那天早上还跟我说，这次要用新的针法，能让冬衣更暖和。');
    narrate(`他声音发紧，像是喉咙里卡了什么东西。`);
    dialog('zhao_tieniu', '一个准备给你做新冬衣的人，下午就失足落水了？我不信。你信吗？');
    divider();
    showChoices([
        { text: '「我也不信。带我去看看到底发生了什么。」', id: 'zq_direct_accept', effects: () => { changeRel('zhao_tieniu', 5); setFlag('zhao_quest_accepted'); addItem('李裁缝的布样'); }, next: SCENES['zhao_quest_clues'] },
        { text: '「你觉得是谁干的？」', id: 'zq_direct_who', effects: () => { G.wits += 1; setFlag('zhao_quest_accepted'); }, next: SCENES['zhao_quest_whysure'] },
    ]);
};
SCENES['zhao_quest_silent'] = () => {
    G.scene = 'zhao_quest_silent';
    narrate(`你没有说话，只是拉了张凳子坐下。铁匠铺里只有炉火的噼啪声和远处传来的鸡鸣。\n\n过了很久——也许是半盏茶的功夫——赵铁牛开口了。\n\n他的声音很轻，和平时判若两人。`);
    dialog('zhao_tieniu', '我赵铁牛这辈子，求过两次人。第一次是在北疆，腿中了箭，求战友把我背下战场。第二次就是现在。');
    narrate(`他抬起头，眼眶微微泛红。`);
    dialog('zhao_tieniu', '帮我查查李裁缝的事。官方说是失足落水，但我知道不是。那天下午他约了我喝酒，说有重要的事要告诉我。可我没去——我嫌他啰嗦。等我赶到河边，人已经没了。');
    narrate(`他的手在发抖。}`);
    dialog('zhao_tieniu', '他说有重要的事……我连他最后想跟我说什么都没听到。');
    divider();
    narrate(`他的坦诚让你动容。沉默有时候比千言万语更有力量——至少对赵铁牛这样的人来说是这样。`);
    changeRel('zhao_tieniu', 10);
    setFlag('zhao_quest_accepted');
    setFlag('zhao_silent_trust');
    addItem('李裁缝的布样');
    showChoices([
        { text: '「我帮你查。你欠李裁缝的，我会帮你讨回来。」', id: 'zq_silent_promise', effects: () => { changeRel('zhao_tieniu', 5); setFlag('zhao_promised'); }, next: SCENES['zhao_quest_clues'] },
        { text: '「告诉我那天的一切——从早到晚。」', id: 'zq_silent_timeline', effects: () => { G.wits += 1; }, next: SCENES['zhao_quest_clues'] },
    ]);
};
SCENES['zhao_quest_armor'] = () => {
    G.scene = 'zhao_quest_armor';
    narrate(`赵铁牛顺着你的目光看向墙上的铠甲，表情复杂。\n\n他站起来，走到墙边，伸手摸了摸那个凹痕。`);
    dialog('zhao_tieniu', '……你眼睛倒尖。是的，北疆边军，虎贲营第三哨。我在那里待了六年。');
    narrate(`他的手停留在凹痕上，像是在抚摸一道旧伤疤。`);
    dialog('zhao_tieniu', '这个凹痕，是一支胡人的狼牙箭留下的。要不是这副甲好，我赵铁牛二十年前就死在草原上了。');
    narrate(`他沉默了一会儿，然后回到矮凳上坐下。提到军队似乎让他打开了某个尘封的记忆匣子。`);
    dialog('zhao_tieniu', '从北疆回来之后，我就不想再碰刀枪了。打铁好——打铁是为了生活，不是为了杀人。李裁缝是第一个不嫌弃我是残废的人……他给我缝冬衣，不收钱，说铁匠和裁缝是镇上最孤单的两个人，应该互相照应。');
    narrate(`他的声音突然变得低沉。`);
    dialog('zhao_tieniu', '现在他死了。说是失足落水——我赵铁牛不信。一个在河边洗了二十年布的人，怎么会失足？');
    divider();
    showChoices([
        { text: '「我来帮你查清楚。」', id: 'zq_armor_accept', effects: () => { changeRel('zhao_tieniu', 7); setFlag('zhao_quest_accepted'); setFlag('know_zhao_military'); addItem('李裁缝的布样'); }, next: SCENES['zhao_quest_clues'] },
        { text: '「你在军中有没有仇人？也许有人通过李裁缝来对付你。」', id: 'zq_armor_enemy', effects: () => { G.wits += 2; setFlag('zhao_quest_accepted'); setFlag('zhao_considered_enemy'); }, next: SCENES['zhao_quest_whysure'] },
    ]);
};
SCENES['zhao_quest_whysure'] = () => {
    G.scene = 'zhao_quest_whysure';
    narrate(`赵铁牛咬了咬牙，像是在做最后的决定。\n\n他从腰间解下一把钥匙——不是铁匠铺的钥匙，而是一把小巧的铜钥匙，上面刻着一个「李」字。`);
    dialog('zhao_tieniu', '李裁缝死的那天早上，他托隔壁王婶给了我一把钥匙——说是他铺子里暗格的钥匙。他说如果我哪天想找他，却发现他不在了，就用这把钥匙去铺子里找一个蓝布包。');
    narrate(`他把钥匙放在桌上。}`);
    dialog('zhao_tieniu', '一个准备去河边洗布的人，为什么要提前交代后事？他知道有人要害他。他一定知道。');
    divider();
    addItem('裁缝铺暗格钥匙');
    setFlag('have_tailor_key');
    showChoices([
        { text: '「我们现在就去裁缝铺。」', id: 'zq_go_shop', effects: () => { setFlag('zhao_quest_accepted'); }, next: SCENES['zhao_quest_clues'] },
        { text: '「他有没有提过最近跟谁有过节？」', id: 'zq_ask_enemy', effects: () => { G.wits += 1; }, next: SCENES['zhao_quest_enemy_info'] },
    ]);
};
SCENES['zhao_quest_warn'] = () => {
    G.scene = 'zhao_quest_warn';
    narrate(`赵铁牛看着你，眼神里闪过一丝痛苦——但更多的是坚定。`);
    dialog('zhao_tieniu', '我知道你的意思。你是说，万一查出来是他自己不小心——我会更难过？');
    narrate(`他摇了摇头。}`);
    dialog('zhao_tieniu', '不会。因为我已经确定了。这不是意外。但我需要证据……我不能空口白牙地去告状，没人会信一个瘸腿铁匠的话。');
    narrate(`他抬起头，眼神恳切。}`);
    dialog('zhao_tieniu', '你帮我找到证据就行。真相——不管是什么，我扛得住。当年在北疆，什么没见过。');
    divider();
    showChoices([
        { text: '「好。我们开始吧。」', id: 'zq_warn_ok', effects: () => { setFlag('zhao_quest_accepted'); changeRel('zhao_tieniu', 5); }, next: SCENES['zhao_quest_clues'] },
    ]);
};
SCENES['zhao_quest_enemy_info'] = () => {
    G.scene = 'zhao_quest_enemy_info';
    narrate(`赵铁牛想了想，眉头紧锁。`);
    dialog('zhao_tieniu', '李裁缝是镇上最好脾气的人——跟谁都不红脸。但前一阵子……大概十天前吧，有个外乡人来找他，两人在铺子里关着门说了半天话。我正好路过，听到他们吵起来了。');
    narrate(`他回忆着。}`);
    dialog('zhao_tieniu', '那外乡人的口音不像本地人——像是北方来的。穿灰色袍子，个子不高，走路有点跛。李裁缝把他赶出来的时候，我听到那人说了一句——');
    narrate(`赵铁牛压低了声音，模仿那个人的语气。}`);
    dialog('zhao_tieniu', '「你以为躲到这种穷乡僻壤就没事了？欠的债迟早要还。」');
    narrate(`你把这个信息记在心里。一个北方来的跛子，一笔旧债——这听起来像是李裁缝在搬到苍龙镇之前，有过什么不为人知的过去。`);
    setFlag('know_tailor_debt');
    divider();
    showChoices([
        { text: '「我们去裁缝铺看看。」', id: 'zq_enemy_goshop', effects: () => { setFlag('zhao_quest_accepted'); }, next: SCENES['zhao_quest_clues'] },
    ]);
};
// ---- 赵铁牛任务：裁缝铺线索 ----
SCENES['zhao_quest_clues'] = () => {
    G.scene = 'zhao_quest_clues';
    G.location = '李裁缝铺';
    narrate(`李裁缝的铺子在镇子东边，紧挨着一条窄巷。铺门上贴着一张白纸——镇上人的意思是，这家有人过世了。\n\n赵铁牛站在门口，深吸了一口气，然后推开了门。\n\n铺子里弥漫着一股潮湿的霉味——混合着布料的脂粉气和角落里一盆枯萎的茉莉花。光线从半掩的窗帘缝隙中漏进来，在满地的碎布头上投下一道道金色的光柱。\n\n你环顾四周：一架老旧的缝纫台靠墙放着，上面还摊着半截袖子——是李裁缝最后未能完成的作品。针线整齐地插在针垫上，每根线的颜色都不一样，排列得像一道小小的彩虹。\n\n角落里有一张矮桌，桌上放着一本翻开的账本，旁边是一杯喝了一半的茶——茶水已经发霉，上面浮着一层白毛。`);
    divider();
    narrate(`赵铁牛走到缝纫台前，轻轻摸了摸那半截袖子。`);
    dialog('zhao_tieniu', '这是我的……他还在给我做冬衣。');
    narrate(`他转过身去，假装在看窗外的什么东西。但你知道他只是在掩饰眼角的湿润。\n\n你开始仔细搜索铺子。`);
    showChoices([
        { text: '翻看账本', id: 'zq_check_ledger', effects: () => { G.wits += 1; setFlag('found_ledger_clue'); }, next: SCENES['zhao_clue_ledger'] },
        { text: '寻找暗格（使用钥匙）', id: 'zq_find_hidden', req: [[() => hasFlag('have_tailor_key'), '需要裁缝铺暗格钥匙']], next: SCENES['zhao_clue_hidden'] },
        { text: '检查窗台和门锁', id: 'zq_check_window', effects: () => { G.wits += 1; }, next: SCENES['zhao_clue_window'] },
        { text: '翻看针线盒', id: 'zq_check_needlebox', next: SCENES['zhao_clue_needlebox'] },
    ]);
};
SCENES['zhao_clue_ledger'] = () => {
    G.scene = 'zhao_clue_ledger';
    narrate(`你翻开账本。前面几页是正常的裁缝生意记录——某某人定做什么衣服，多少钱，什么时候交货。字迹工整，一笔一划都很认真。\n\n但翻到最后几页，字迹变得潦草起来，有些地方甚至用了暗语。你注意到几个可疑的条目：\n\n${hl('「三月十五——收到灰布三匹，非寻常买卖。存放于老地方。」')}\n${hl('「四月初二——北方来信一封。催得急了。」')}\n${hl('「四月十二——那个跛子又来了。我拒绝了他。他说不会善罢甘休。」')}\n${hl('「四月十五——如果我不在了，蓝布包交给老赵。」')}\n\n四月十五——就是李裁缝死的那天。`);
    divider();
    narrate(`你把账本最后几页的信息记下来。「灰布三匹」「非寻常买卖」——这些布匹会不会藏着什么秘密？而「北方来信」——联系到那个北方来的跛子，李裁缝的过去似乎与北方有很深的渊源。`);
    setFlag('read_tailor_ledger');
    showChoices([
        { text: '继续搜索铺子', id: 'zq_clue_continue1', next: SCENES['zhao_clue_hidden'] },
        { text: '问赵铁牛知不知道「灰布」是什么意思', id: 'zq_ask_graycloth', next: SCENES['zhao_clue_graycloth'] },
    ]);
};
SCENES['zhao_clue_graycloth'] = () => {
    G.scene = 'zhao_clue_graycloth';
    narrate(`赵铁牛听到「灰布」两个字，脸色一变。`);
    dialog('zhao_tieniu', '灰布……你确定？');
    narrate(`他快步走过来，看了一眼账本上的记录。}`);
    dialog('zhao_tieniu', '北疆边军……冬天发的内衣就是灰布做的。官府统一采购，有专门的织坊供货。但那种布……不对，那是军需物资，不可能通过裁缝铺走。');
    narrate(`他突然想到了什么，脸色更难看了。`);
    dialog('zhao_tieniu', '除非……有人在倒卖军需。我在军中见过这种事——有人把军队的物资偷出来卖，换了银子塞进自己腰包。李裁缝……他不会做这种事。除非——他是被逼的。');
    setFlag('know_military_smuggling');
    divider();
    showChoices([
        { text: '「找到暗格看看蓝布包里有什么。」', id: 'zq_graycloth_hidden', next: SCENES['zhao_clue_hidden'] },
    ]);
};
SCENES['zhao_clue_hidden'] = () => {
    G.scene = 'zhao_clue_hidden';
    if (!hasFlag('have_tailor_key')) {
        narrate(`你仔细搜索铺子的每一个角落，终于在缝纫台后面的地板上发现了一块松动的木板。下面是一个小小的暗格——但上了锁。你需要找到钥匙才能打开。`);
        showChoices([
            { text: '回去问赵铁牛关于钥匙的事', id: 'zq_need_key', next: SCENES['zhao_quest_whysure'] },
        ]);
        return;
    }
    narrate(`你走到缝纫台后面，蹲下身。赵铁牛说过暗格在地板下面——果然，第三块木板比其他的略微松动。\n\n你用钥匙打开了暗格。里面有一个蓝布包——和赵铁牛描述的一模一样。\n\n布包里有三样东西：\n\n一封${hl('信')}——信封上写着「赵铁牛亲启」，字迹和李裁缝的一模一样，但笔画颤抖，像是在极度恐惧中写下的。\n\n一块${hl('灰色布样')}——和账本上提到的「灰布」是同一种料子，但布角有一个小小的印章标记：${hl('虎贲营军需')}。\n\n一张${hl('人像画')}——画的是一个中年男人，方脸，左眼角有一道疤。画像下面写着：${danger('「此人即当年倒卖军需之首——郑通判。若我遭遇不测，必是此人指使。」')}`);
    divider();
    narrate(`赵铁牛看到那幅画像，身体猛地一震。他的拳头攥得咯咯作响，脸上的肌肉在颤抖。`);
    dialog('zhao_tieniu', '郑通判……我认识他。');
    narrate(`他的声音像是从牙缝里挤出来的。}`);
    dialog('zhao_tieniu', '二十年前，我在北疆虎贲营当兵。冬天冻死了一批弟兄——不是因为冷，是因为冬衣太薄。军需的灰布被换成了廉价的粗布，中间的差价全进了郑通判的腰包。\n\n我联名写了举报信——结果举报的七个人，死了四个。剩下三个被调到了最前线送死。我命大，只废了一条腿。');
    narrate(`他深吸一口气，努力控制住自己的情绪。`);
    dialog('zhao_tieniu', '我以为这件事已经过去了二十年，没人会再提。没想到郑通判……他还在找人灭口。李裁缝一定是知道了什么——也许他的布料来源牵扯到了军需案。');
    setFlag('found_blue_package');
    setFlag('know_zheng_tongpan');
    addItem('李裁缝的遗书');
    addItem('灰布布样');
    addItem('郑通判画像');
    divider();
    showChoices([
        { text: '「我们去河边看看他落水的地方。」', id: 'zq_to_riverside', effects: () => { G.wits += 1; }, next: SCENES['zhao_quest_riverside'] },
        { text: '先读李裁缝的信', id: 'zq_read_letter', next: SCENES['zhao_read_letter'] },
        { text: '「郑通判现在在哪里？我们需要找到他。」', id: 'zq_find_zheng', next: SCENES['zhao_find_zheng'] },
    ]);
};
SCENES['zhao_read_letter'] = () => {
    G.scene = 'zhao_read_letter';
    narrate(`你小心地拆开信封。李裁缝的字迹原本是很漂亮的——他年轻时学过书法——但这封信歪歪扭扭，有些地方墨迹模糊，像是有泪水滴在了纸上。\n\n信的内容如下：`);
    divider();
    narrate(`${hl('老赵：\n\n你看到这封信的时候，我可能已经不在了。\n\n有些事我一直没跟你说——不是不信任你，是怕连累你。我年轻时候在北边的军需织坊干过活，专门给虎贲营供布。后来我发现，送去的布料被做了手脚——我织的好布被换成劣等货，中间的差价被人吞了。\n\n我把这件事告诉了一个我信任的人——结果那个人把我的话转告给了幕后主使，就是那个郑通判。\n\n郑通判没有杀我，但他逼我签了一份文书，让我成了「共犯」。从此以后，我走到哪里，都甩不掉这件事。\n\n二十年了。我以为换了个地方就能重新开始。但十天前，那个跛子来了——他是郑通判的人。他说郑通判要升官了，需要清除所有知道军需案的人。\n\n老赵，你当年就是举报军需案的人之一。他们迟早会找到你。\n\n我不知道自己还能活几天。但我把证据都留在了这个蓝布包里——灰布上的军需印章、郑通判的画像、还有我亲手抄录的当年织坊的出货记录。\n\n如果你还能信任我这个老朋友——请你把这些东西送到该送到的地方。不是为了替我报仇，是为了那些因为薄冬衣冻死在北疆的弟兄们。\n\n二十年了，我欠他们一个公道。\n\n老李 绝笔')}`);
    divider();
    narrate(`赵铁牛读完信，一言不发地站了很久。炉火照在他脸上，映出一道道深刻的皱纹——每一条皱纹里都藏着一段他不愿提起的过去。\n\n最后，他把信折好，小心地放进怀里。`);
    dialog('zhao_tieniu', '二十年了。他背了二十年的包袱——跟我一样。我们都以为逃开了，其实一直在原地打转。');
    setFlag('read_tailor_letter');
    divider();
    showChoices([
        { text: '「我们去河边看看。」', id: 'zq_letter_riverside', next: SCENES['zhao_quest_riverside'] },
    ]);
};
SCENES['zhao_clue_window'] = () => {
    G.scene = 'zhao_clue_window';
    narrate(`你走到窗边仔细检查。窗户从内侧闩着——但闩口上有新鲜的刮痕，像是有人用刀从外面拨开了窗闩，然后又重新闩上。\n\n门锁也有问题。锁芯里有细微的铜屑——有人用万能钥匙开过这把锁，而且不止一次。`);
    dialog('zhao_tieniu', '有人来过？在李裁缝死后？');
    narrate(`你点头。这意味着有人想在李裁缝死后搜查他的铺子——也许就是在找那个蓝布包。但他们没有找到暗格。\n\n窗台上还留着一个泥脚印——鞋底的花纹不是镇上常见的布鞋，而是一种带钉的皮靴。这种靴子在南方很少见，但北方边镇很流行。`);
    setFlag('found_window_clues');
    addItem('窗台泥脚印拓印');
    divider();
    showChoices([
        { text: '继续搜索铺子', id: 'zq_window_continue', next: SCENES['zhao_clue_hidden'] },
    ]);
};
SCENES['zhao_clue_needlebox'] = () => {
    G.scene = 'zhao_clue_needlebox';
    narrate(`你打开针线盒。里面的针线排列得整整齐齐——李裁缝是个讲究人，即使在做针线这种小事上也一丝不苟。\n\n但盒底有一层暗格——你是在推动针垫时偶然发现的。暗格里藏着一张折得很小很小的纸条。\n\n展开一看，上面只有几个字：${hl('「四月十七，老地方。」')}\n\n四月十七——是后天。但「老地方」是哪里？\n\n赵铁牛凑过来看了一眼。`);
    dialog('zhao_tieniu', '四月十七……他死了之后还有人在用他的「老地方」？');
    narrate(`他皱眉思索。}`);
    dialog('zhao_tieniu', '李裁缝跟我提过一次「老地方」——他说镇子东边河湾处有一棵老柳树，树根底下有个洞，他小时候在那里藏过东西。他说那是他和一个老朋友的秘密——但我追问时他就岔开了。');
    setFlag('found_riverside_note');
    divider();
    showChoices([
        { text: '「我们先去河边看看他落水的地方。」', id: 'zq_needle_riverside', next: SCENES['zhao_quest_riverside'] },
        { text: '「先找暗格。」', id: 'zq_needle_hidden', next: SCENES['zhao_clue_hidden'] },
    ]);
};
SCENES['zhao_find_zheng'] = () => {
    G.scene = 'zhao_find_zheng';
    narrate(`赵铁牛摇头。`);
    dialog('zhao_tieniu', '郑通判这个人……当年是北疆军需官，后来不知道怎么运作的，调到了内地做了通判。但我不知道他现在在哪里——二十年没听过他的消息了。\n\n不过，那个跛子肯定知道。他是郑通判派来的人。');
    narrate(`他顿了顿。}`);
    dialog('zhao_tieniu', '我在镇上见过那个跛子两次——都是在「醉仙楼」，镇西边那个酒楼。他好像住在那里。');
    setFlag('know_cripple_location');
    divider();
    showChoices([
        { text: '「我们先去河边看看他落水的地方，然后再找那个跛子。」', id: 'zq_zheng_riverside', next: SCENES['zhao_quest_riverside'] },
        { text: '「直接去醉仙楼找那个跛子。」', id: 'zq_zheng_cripple', effects: () => { setFlag('went_to_cripple_first'); }, next: SCENES['zhao_quest_riverside'] },
    ]);
};
// ---- 赵铁牛任务：河边调查 ----
SCENES['zhao_quest_riverside'] = () => {
    G.scene = 'zhao_quest_riverside';
    G.location = '苍龙河边';
    narrate(`苍龙河在镇子北边，河水不深但流得很急。河岸两边种满了柳树，长长的柳条垂在水面上，被流水带着轻轻摇摆。\n\n雨后的河水有些浑浊，泛着黄绿色的泥沙。空气中弥漫着水草和泥土的气味，偶尔有几只白鹭从水面上掠过，留下一串涟漪。\n\n赵铁牛领你来到一个河湾处——这里的水流相对平缓，河边有几块大石头，是镇上居民常来洗衣的地方。\n\n「就是这里。」赵铁牛的声音很低。`);
    divider();
    narrate(`你蹲下身仔细查看。河边的石头上还留着一圈圈的肥皂痕迹——那是长期搓洗布料留下的。石头表面很光滑，如果是下雨天，踩上去确实容易滑倒。\n\n但是——`);
    showChoices([
        { text: '检查石头上的痕迹', id: 'zq_river_stones', effects: () => { G.wits += 2; }, next: SCENES['zhao_river_stones'] },
        { text: '在河里摸索', id: 'zq_river_search', next: SCENES['zhao_river_search'] },
        { text: '寻找那棵老柳树', id: 'zq_river_willow', req: [[() => hasFlag('found_riverside_note'), '需要河边的纸条线索']], next: SCENES['zhao_river_willow'] },
        { text: '观察河岸上的脚印', id: 'zq_river_tracks', effects: () => { G.wits += 1; }, next: SCENES['zhao_river_tracks'] },
    ]);
};
SCENES['zhao_river_stones'] = () => {
    G.scene = 'zhao_river_stones';
    narrate(`你趴在大石头上仔细查看。肥皂的痕迹是旧的，至少有好几天了——但石头边缘有新的刮痕。\n\n不是滑倒的痕迹——而是${hl('挣扎的痕迹')}。\n\n指甲刮过石面的痕迹，从石头的上方向下方延伸，最后消失在水中。这是一个人在被人按入水中时，拼命抓挠石头留下的痕迹。\n\n${danger('李裁缝不是失足落水。他是被人按在水里淹死的。')}`);
    divider();
    narrate(`你把这个发现指给赵铁牛看。他沉默了很久，然后蹲下来，用手摸了摸那些刮痕。\n\n他的手在发抖，但声音却出奇的平静。`);
    dialog('zhao_tieniu', '老李的手……他的手很巧，能做出全镇最好的针线活。最后却只能在这些石头上留下几道抓痕。');
    setFlag('confirmed_murder');
    divider();
    showChoices([
        { text: '「在河里找找有没有其他证据。」', id: 'zq_stones_search', next: SCENES['zhao_river_search'] },
        { text: '「我们去找那个跛子。」', id: 'zq_stones_cripple', next: SCENES['zhao_quest_confront'] },
    ]);
};
SCENES['zhao_river_search'] = () => {
    G.scene = 'zhao_river_search';
    narrate(`你脱掉外衣，走进河水里。四月的河水冰凉刺骨，水流拍打着你的腿，带着一股泥腥味。\n\n你在李裁缝落水的地方摸索着——河底全是淤泥和鹅卵石，什么都有可能埋在下面。\n\n摸索了好一会儿，你的手指碰到了一个硬物——不是石头，形状太规则了。\n\n你把它从淤泥里拔出来，在水里涮了涮。\n\n是一枚${hl('铜扣')}——军服上的铜扣。上面刻着一个「虎」字，是虎贲营的制式铜扣。\n\n这不可能是李裁缝的东西——他是一个裁缝，不会穿军服。这枚铜扣，是凶手留下的。`);
    divider();
    narrate(`赵铁牛看到铜扣，瞳孔骤缩。`);
    dialog('zhao_tieniu', '虎贲营的铜扣……');
    narrate(`他的声音冰冷。}`);
    dialog('zhao_tieniu', '二十年前的旧铜扣——但他还留着。这个人不是普通的杀手，他是当年的老兵。郑通判居然派了一个老兵来杀人。');
    addItem('虎贲营铜扣');
    setFlag('found_military_button');
    divider();
    showChoices([
        { text: '「我们去找那个跛子。」', id: 'zq_search_cripple', next: SCENES['zhao_quest_confront'] },
        { text: '先找那棵老柳树（如果有线索的话）', id: 'zq_search_willow', req: [[() => hasFlag('found_riverside_note'), '需要河边的纸条线索']], next: SCENES['zhao_river_willow'] },
    ]);
};
SCENES['zhao_river_willow'] = () => {
    G.scene = 'zhao_river_willow';
    narrate(`沿着河湾往下游走大约百步，你找到了那棵老柳树——一棵至少有百年树龄的大柳树，树干粗到三个人合抱都围不住。长长的柳条几乎垂到了河面上，像一道绿色的帘幕。\n\n你在树根处仔细查看——果然，最粗的那条树根底下有一个洞，洞口被枯叶和泥土掩盖着。\n\n你伸手进去摸索——碰到了一个油纸包。\n\n油纸包里是一叠文书：${hl('当年的军需出货记录')}，上面详细记录了每一批灰布的数量、质量、以及验收人的签名。最后一页有一行醒目的红字批注：${danger('「此批布料与样品质量严重不符，拒绝验收。——赵铁牛」')}\n\n赵铁牛看到自己的签名，愣住了。`);
    dialog('zhao_tieniu', '这是我当年的签字……我以为这些记录早就被销毁了。李裁缝……他居然保存了二十年。');
    narrate(`他小心地翻看着那些发黄的纸张，手指在每一页上停留，像是在抚摸逝去的光阴。\n\n这些文书加上蓝布包里的灰布布样和郑通判画像——已经构成了一个完整的证据链，足以将郑通判定罪。`);
    addItem('军需出货记录');
    setFlag('found_willow_evidence');
    divider();
    showChoices([
        { text: '「现在去找那个跛子。」', id: 'zq_willow_cripple', next: SCENES['zhao_quest_confront'] },
    ]);
};
SCENES['zhao_river_tracks'] = () => {
    G.scene = 'zhao_river_tracks';
    narrate(`雨后的河岸泥泞不堪，到处都是脚印——大多是镇上居民来洗衣服留下的，杂乱无章。\n\n但你注意到一组特殊的脚印——从河边延伸到上游方向，然后消失在草丛中。这组脚印有几个特征：\n\n${hl('1. 只有一只脚有完整的脚印，另一只脚印很浅')}——走路一瘸一拐的人。\n${hl('2. 鞋底有钉')}——和裁缝铺窗台上的泥脚印一致。\n${hl('3. 脚印很深')}——说明这个人在河边停留了很长时间，而且负重很大——也许是按住一个人的重量。`);
    narrate(`这些脚印指向了同一个人：那个北方来的跛子。`);
    setFlag('found_river_tracks');
    divider();
    showChoices([
        { text: '「在河里找找有没有其他东西。」', id: 'zq_tracks_river', next: SCENES['zhao_river_search'] },
        { text: '「去找那个跛子。」', id: 'zq_tracks_cripple', next: SCENES['zhao_quest_confront'] },
    ]);
};
// ---- 赵铁牛任务：对峙 ----
SCENES['zhao_quest_confront'] = () => {
    G.scene = 'zhao_quest_confront';
    G.location = '醉仙楼';
    narrate(`醉仙楼是苍龙镇唯一的酒楼，两层木楼，门口挂着两盏红灯笼。虽然还没有到饭点，但楼里已经传出了划拳声和酒香。\n\n赵铁牛走在你前面，步伐坚定——但你能看到他的手在微微颤抖。他不是害怕，而是愤怒。二十年的愤怒，在这一刻终于找到了出口。\n\n你们在二楼的角落找到了那个跛子。\n\n他看起来五十多岁，瘦削，左腿明显比右腿短一截，走路时身体向一侧倾斜。灰色袍子洗得发白，但面料是上好的杭绸。他的面前摆着一壶酒和几碟小菜，吃得慢条斯理。\n\n看到赵铁牛，他的筷子停了一下——然后若无其事地继续夹菜。`);
    divider();
    narrate(`${danger('「赵瘸子。」')}跛子淡淡地说，${danger('「好久不见。你还是老样子——死脑筋。」')}\n\n赵铁牛的脸色铁青。`);
    dialog('zhao_tieniu', '你是陈七。虎贲营的陈七——当年郑通判的亲兵。');
    narrate(`跛子——陈七——终于放下了筷子。他抬起头，露出一个冷笑。`);
    dialog('zhao_tieniu', '赵铁牛，你的记性倒好。二十年了还记得我。可惜啊——李裁缝的记性比你更好。他记住了太多不该记的东西。');
    divider();
    showChoices([
        { text: '「是你杀了李裁缝。」', id: 'zq_confront_accuse', effects: () => { G.wits += 1; }, next: SCENES['zhao_confront_accuse'] },
        { text: '让赵铁牛处理，你在一旁观察', id: 'zq_confront_zhao', effects: () => { changeRel('zhao_tieniu', 3); }, next: SCENES['zhao_confront_zhao'] },
        { text: '「陈七，你现在坦白还来得及。郑通判不过是利用你。」', id: 'zq_confront_persuade', effects: () => { G.charm += 2; }, next: SCENES['zhao_confront_persuade'] },
        { text: '（直接动手制服他）', id: 'zq_confront_fight', req: [[() => req('sword', 12), '剑术≥12']], effects: () => { G.sword += 1; }, next: SCENES['zhao_confront_fight'] },
    ]);
};
SCENES['zhao_confront_accuse'] = () => {
    G.scene = 'zhao_confront_accuse';
    narrate(`陈七没有否认。他端起酒杯，慢慢饮了一口。`);
    dialog('zhao_tieniu', '是又怎么样？一个穷裁缝，失足落水而已。你有什么证据？');
    narrate(`你把虎贲营铜扣、李裁缝的遗书和军需出货记录都摆在桌上。\n\n陈七的笑容凝固了。`);
    dialog('zhao_tieniu', '……你从哪里找到这些东西的？');
    narrate(`他的声音里第一次出现了慌张。`);
    dialog('zhao_tieniu', '李裁缝那个老东西……他居然把什么都留下了。我搜了他的铺子，翻了三天三夜——怎么没找到？');
    divider();
    narrate(`赵铁牛一拳砸在桌上，震得碗碟乱跳。`);
    dialog('zhao_tieniu', '因为他知道你会来搜。他把最重要的东西交给了最不会引起怀疑的地方——一个瘸腿铁匠。他信任我，就像我信任他一样。而你——你连信任两个字怎么写都不知道。');
    showChoices([
        { text: '「陈七，你想怎么死？还是想活？」', id: 'zq_accuse_choice', next: SCENES['zhao_confront_choice'] },
    ]);
};
SCENES['zhao_confront_zhao'] = () => {
    G.scene = 'zhao_confront_zhao';
    narrate(`你退后一步，让赵铁牛站在前面。\n\n他没有立刻开口。他只是看着陈七——看了很久。那种眼神不是恨，不是怒，而是一种深沉的、无法言说的悲凉。`);
    dialog('zhao_tieniu', '陈七，我问你一件事——二十年前的冬天，冻死了十七个弟兄。你知不知道？');
    narrate(`陈七的表情微微一变。`);
    dialog('zhao_tieniu', '我当然知道。我是亲兵，天天在营里转。但那不关我的事——我听命行事。');
    dialog('zhao_tieniu', '听命行事。李裁缝死了，也是你听命行事。赵铁牛，你以为你能翻得了案？郑通判现在是府城的通判大人，你一个瘸腿铁匠——你觉得有人会信你？');
    narrate(`赵铁牛沉默了一会儿。然后他从怀里掏出那叠发黄的军需出货记录——上面有他当年亲笔签的拒验批注。`);
    dialog('zhao_tieniu', '信不信，不是你说了算的。这些记录，加上李裁缝的遗书，加上你留下的虎贲营铜扣——够了。');
    divider();
    narrate(`陈七的脸色终于变了。他从椅子上站起来，手摸向腰间——但看到你站在赵铁牛身后，手按在剑柄上，又慢慢放下了。`);
    showChoices([
        { text: '「陈七，你可以选择。」', id: 'zq_zhao_choice', next: SCENES['zhao_confront_choice'] },
    ]);
};
SCENES['zhao_confront_persuade'] = () => {
    G.scene = 'zhao_confront_persuade';
    narrate(`陈七看了你一眼——第一次认真地看着你，而不是赵铁牛。\n\n他的眼神里有警惕，但也有一丝……疲惫。`);
    dialog('zhao_tieniu', '你是谁？跟赵铁牛什么关系？');
    narrate(`你迎着他的目光。`);
    dialog('zhao_tieniu', '我只是一个路过的旅客。但我能看出——你不是心甘情愿做这种事的。一个心甘情愿的杀手，不会在河边犹豫那么久——脚印显示你至少在石头旁站了一刻钟才动手。');
    narrate(`陈七的身体僵了一下。\n\n你继续说道。`);
    dialog('zhao_tieniu', '郑通判许了你什么？银子？官职？还是——他威胁了你什么？你跛的这条腿……不是天生的吧？');
    narrate(`陈七的手无意识地摸了摸自己的左腿。然后，他缓缓坐了下来。\n\n他看起来像是忽然老了十岁。`);
    dialog('zhao_tieniu', '……这条腿，是在北疆断的。为郑通判挡了一箭。他说是欠我的——让我跟着他吃香喝辣。结果呢？二十年了，我就成了一个替他处理脏活的瘸子。');
    setFlag('chen_qi_sympathy');
    divider();
    showChoices([
        { text: '「你现在帮我们指证郑通判，还来得及。」', id: 'zq_persuade_deal', effects: () => { G.charm += 2; setFlag('chen_qi_deal'); }, next: SCENES['zhao_confront_choice'] },
        { text: '「你还是得为李裁缝的死付出代价。」', id: 'zq_persuade_justice', effects: () => { G.wits += 1; }, next: SCENES['zhao_confront_choice'] },
    ]);
};
SCENES['zhao_confront_fight'] = () => {
    G.scene = 'zhao_confront_fight';
    narrate(`你没有给陈七反应的时间——一步跨前，左手按住他的肩膀，右手掐住他摸向腰间的手腕。\n\n他试图挣扎，但你训练有素的擒拿手法让他根本动弹不得。他的手腕一拧，发出咔嚓一声——不是骨折，但足够让他痛得叫出声来。\n\n「别动。」你低声说。\n\n陈七的脸涨得通红，额头上青筋暴起。但他不是莽夫——他知道自己打不过你。`);
    dialog('zhao_tieniu', '赵铁牛……你从哪里找来这么厉害的帮手？');
    narrate(`赵铁牛面无表情地看着他。`);
    dialog('zhao_tieniu', '我不用找帮手。是朋友自己来的。不像你——只会替人卖命。');
    setFlag('chen_qi_captured');
    divider();
    showChoices([
        { text: '「好了，说说你的选择吧。」', id: 'zq_fight_choice', next: SCENES['zhao_confront_choice'] },
    ]);
};
SCENES['zhao_confront_choice'] = () => {
    G.scene = 'zhao_confront_choice';
    narrate(`陈七靠在椅背上，看着桌上摊开的证据，沉默了很长时间。\n\n窗外传来叫卖声和孩子的笑声——这个小镇正在继续它平淡的日常，完全不知道这间酒楼里正在决定一个人的生死。\n\n赵铁牛没有催他。他只是站在那里，像一座沉默的铁塔。\n\n终于，陈七开口了。`);
    dialog('zhao_tieniu', '你们想怎么样？');
    divider();
    showChoices([
        { text: '「你去府衙自首，指证郑通判。我们保你不死。」', id: 'zq_choice_surrender', effects: () => { setFlag('chen_surrender'); changeRel('zhao_tieniu', 5); }, next: SCENES['zhao_quest_resolution'] },
        { text: '「赵铁牛，这由你来决定。」', id: 'zq_choice_zhao', effects: () => { changeRel('zhao_tieniu', 8); }, next: SCENES['zhao_quest_resolution'] },
        { text: '「杀了你太便宜你了。但——你欠李裁缝一条命。」', id: 'zq_choice_debt', effects: () => { G.wits += 1; setFlag('chen_life_debt'); }, next: SCENES['zhao_quest_resolution'] },
        { text: '「放你走。但你要把郑通判的所有罪证都交出来。」', id: 'zq_choice_evidence', effects: () => { G.charm += 2; setFlag('chen_evidence_deal'); addItem('郑通判罪证'); }, next: SCENES['zhao_quest_resolution'] },
    ]);
};
// ---- 赵铁牛任务：结局分支 ----
SCENES['zhao_quest_resolution'] = () => {
    G.scene = 'zhao_quest_resolution';
    G.location = '醉仙楼';
    if (hasFlag('chen_surrender')) {
        SCENES['zhao_resolution_surrender']();
    }
    else if (hasFlag('chen_qi_captured')) {
        SCENES['zhao_resolution_captured']();
    }
    else if (hasFlag('chen_evidence_deal')) {
        SCENES['zhao_resolution_evidence']();
    }
    else if (hasFlag('chen_qi_deal') || hasFlag('chen_life_debt')) {
        SCENES['zhao_resolution_deal']();
    }
    else {
        SCENES['zhao_resolution_default']();
    }
};
SCENES['zhao_resolution_surrender'] = () => {
    narrate(`陈七低下头，想了很久。\n\n酒楼里的人声渐渐大了，但你们的角落始终安静得像另一个世界。\n\n他终于点了点头。`);
    dialog('zhao_tieniu', '好。我自首。二十年了——我也累了。替人做了一辈子脏活，到头来还是个瘸子，什么都没得到。\n\n郑通判在府城的宅子，我知道在哪。他还有一份私账，藏在书房的暗格里。那份私账上记着——所有跟他有关的不干净的事。包括二十年前军需案的全部细节。');
    narrate(`赵铁牛拍了拍他的肩膀——力道不轻，但没有恶意。`);
    dialog('zhao_tieniu', '你做了正确的选择。不是为了我——是为了你自己。李裁缝在天有灵，会原谅你的。');
    narrate(`陈七苦笑了一下。`);
    dialog('zhao_tieniu', '原谅？我不指望原谅。我只希望……下辈子别再遇到郑通判这种人。');
    divider();
    narrate(`三天后——\n\n你陪赵铁牛和陈七一起去了府城。陈七在府衙自首，并提供了郑通判的全部罪证。府城的官员震惊之余，立刻下令捉拿郑通判。\n\n郑通判在书房中被捕时，正在焚烧文件。但暗格里的私账来不及烧掉——上面记录了他二十年来所有的贪腐和谋杀。\n\n赵铁牛站在府衙门口，看着郑通判被押出来。两人隔着衙役对视了一眼。\n\n赵铁牛什么也没说。他只是把手伸进怀里，摸了摸那封李裁缝的遗书。\n\n${ok('公道虽然迟到，但终究没有缺席。')}`);
    setFlag('zhao_quest_complete');
    setFlag('zhao_good_ending');
    changeRel('zhao_tieniu', 15);
    divider();
    showChoices([
        { text: '返回苍龙镇', id: 'zq_res_return', next: SCENES['lobby_free'] },
    ]);
};
SCENES['zhao_resolution_captured'] = () => {
    narrate(`你把陈七绑了起来，押着他往府城的方向走。\n\n一路上，陈七一直在试图逃跑——但他的跛腿让他根本跑不过你。第三次被抓回来之后，他终于放弃了。`);
    dialog('zhao_tieniu', '赵铁牛……你就不能给我一个痛快吗？绑着手脚走路，比死了还难受。');
    dialog('zhao_tieniu', '死了更难受。李裁缝在河水里挣扎的时候，你给过他痛快吗？');
    narrate(`陈七沉默了。\n\n到了府城，赵铁牛直接把陈七和所有证据一起交给了府衙。陈七被收押，郑通判也被列为嫌疑人。\n\n但事情没有想象中顺利——郑通判在府城经营多年，关系盘根错节。案子被一拖再拖。\n\n赵铁牛在府城等了半个月，最后只等来了一个「证据不足，继续调查」的结论。\n\n${dg('公道有时候不只是需要证据——还需要权力。')}`);
    setFlag('zhao_quest_complete');
    setFlag('zhao_partial_ending');
    changeRel('zhao_tieniu', 8);
    divider();
    showChoices([
        { text: '返回苍龙镇', id: 'zq_res2_return', next: SCENES['lobby_free'] },
    ]);
};
SCENES['zhao_resolution_evidence'] = () => {
    narrate(`陈七点了点头。他从靴筒里取出一个油纸包——里面是一封信和一张地图。`);
    dialog('zhao_tieniu', '郑通判的书房暗格在第三块地砖下面。这是他让我画的地图——本来是留着以后威胁他用的。没想到最后用在了这个地方。\n\n里面有一份私账，记录了他二十年来所有见不得光的事。你拿到那份私账，比我自首有用一百倍。');
    narrate(`他把油纸包递给你。赵铁牛接过来，检查了一下内容。`);
    dialog('zhao_tieniu', '私账……够了。有了这个，不用陈七的证词也能扳倒郑通判。');
    narrate(`陈七站起来，一瘸一拐地走向楼梯。走到一半，他回头看了赵铁牛一眼。`);
    dialog('zhao_tieniu', '赵铁牛——李裁缝最后说了什么你知道吗？他在河里挣扎的时候……最后一句话是「告诉老赵——对不住」。');
    narrate(`赵铁牛的嘴唇抖了一下。`);
    dialog('zhao_tieniu', '……他对不住什么？该说对不住的是我。我没去赴约。他约我喝酒，我没去。');
    narrate(`陈七没有再说话，一瘸一拐地消失在楼梯尽头。\n\n${hl('有些人走出了你的视线，但走不出自己的愧疚。')}`);
    setFlag('zhao_quest_complete');
    setFlag('zhao_evidence_ending');
    changeRel('zhao_tieniu', 12);
    divider();
    showChoices([
        { text: '返回苍龙镇', id: 'zq_res3_return', next: SCENES['lobby_free'] },
    ]);
};
SCENES['zhao_resolution_deal'] = () => {
    narrate(`陈七看着赵铁牛，眼神复杂。\n\n他最终叹了一口气。`);
    dialog('zhao_tieniu', '好。我帮你们。但我有一个条件——事后让我离开。我不想再跟郑通判有任何关系了。我要去南边……听说岭南天暖，适合瘸子过日子。');
    narrate(`赵铁牛看了你一眼。你点了点头。`);
    dialog('zhao_tieniu', '行。你帮我们把证据凑齐，我就当从没见过你。');
    narrate(`陈七提供了郑通判在府城的住址、日常行踪、以及书房暗格的位置。更重要的是，他愿意写一份书面供词——虽然他不肯亲自去府衙，但供词上的指纹和签名是真的。\n\n这些证据加上李裁缝留下的物证，已经足够了。\n\n陈七离开苍龙镇的那天清晨，天刚蒙蒙亮。他背着一个破旧的包袱，一瘸一拐地朝南边的官道走去。\n\n没有人送他。\n\n${hl('有些人的救赎，不是回到原地，而是走向远方。')}`);
    setFlag('zhao_quest_complete');
    setFlag('zhao_deal_ending');
    changeRel('zhao_tieniu', 10);
    divider();
    showChoices([
        { text: '返回苍龙镇', id: 'zq_res4_return', next: SCENES['lobby_free'] },
    ]);
};
SCENES['zhao_resolution_default'] = () => {
    narrate(`赵铁牛看着陈七，目光深沉。`);
    dialog('zhao_tieniu', '陈七……你杀了我最好的朋友。按理说，我应该一锤子砸碎你的脑袋。');
    narrate(`他顿了顿。}`);
    dialog('zhao_tieniu', '但老李不会希望我这么做。他那个人——连踩死一只蚂蚁都会说对不住。他要的是公道，不是报仇。');
    narrate(`他从怀里取出所有证据，摆在陈七面前。`);
    dialog('zhao_tieniu', '这些东西，我会送到该送到的地方。而你——你这辈子都得背着李裁缝的命过活。这比死了难受。');
    narrate(`陈七低下头，一言不发。\n\n赵铁牛转身离开。他走了两步，又停下来。`);
    dialog('zhao_tieniu', '告诉郑通判——赵铁牛还活着。他二十年前没杀死我，以后也不可能了。');
    setFlag('zhao_quest_complete');
    changeRel('zhao_tieniu', 6);
    divider();
    showChoices([
        { text: '返回苍龙镇', id: 'zq_res5_return', next: SCENES['lobby_free'] },
    ]);
};
// ---- 赵铁牛回忆：军旅生涯 ----
SCENES['zhao_backstory_1'] = () => {
    G.scene = 'zhao_backstory_1';
    G.location = '回忆·北疆';
    narrate(`赵铁牛坐在铁匠铺后院的老槐树下，手里转着一枚旧铜扣——虎贲营的铜扣。\n\n夜色很深，只有炉火余烬的微光照着他的脸。他开始说起二十年前的故事——你安静地听着，没有打断。\n\n${hl('——北疆·虎贲营·二十年前——')}\n\n那年赵铁牛十九岁，从河北老家投军，被分到了北疆虎贲营第三哨。\n\n北疆的冬天来得比南方早三个月。九月份草就开始枯黄，到了十月，北风能刮掉人的耳朵。\n\n赵铁牛到的第一天就冻坏了三根手指——不是因为天冷，而是因为他没领到冬衣。\n\n「冬衣还没到。」管事的军需官这么说。但赵铁牛看到库房的门锁是新的，缝隙里还能看到灰布的边角——冬衣不是没到，是被人扣下了。\n\n那年冬天，虎贲营冻死了十七个人。\n\n赵铁牛永远记得那个数字。因为他是负责数尸体的人——十七具冻僵的尸体，排成一排，像十七根冰棍。\n\n其中有一个是和他一起从老家来的发小——王小虎。死的时候手里还攥着一封没写完的家书，上面只写了一句话：「娘，军中一切安好，勿念。」`);
    divider();
    narrate(`赵铁牛的声音平静得可怕。他不是一个会哭的人——在北疆待了六年，他学会了把眼泪冻成冰。\n\n但他的手在发抖。\n\n「十七个人。」他重复了一遍，「因为几匹灰布冻死了十七个人。」`);
    changeRel('zhao_tieniu', 5);
    setFlag('heard_zhao_memory_1');
    showChoices([
        { text: '「后来呢？」', id: 'zb1_continue', next: SCENES['zhao_backstory_2'] },
        { text: '「这就是你举报的原因。」', id: 'zb1_understand', effects: () => { changeRel('zhao_tieniu', 3); G.wits += 1; }, next: SCENES['zhao_backstory_2'] },
    ]);
};
SCENES['zhao_backstory_2'] = () => {
    G.scene = 'zhao_backstory_2';
    narrate(`赵铁牛继续说着。\n\n${hl('——虎贲营·军需案·二十年前——')}\n\n冻死人事件之后，赵铁牛和另外六个老兵联名写了举报信，送到京城都察院。\n\n信是赵铁牛亲手抄的——他只上过两年私塾，字写得歪歪扭扭，但每一笔都很用力。他不是在写字，是在刻——把十七个冻死弟兄的冤屈刻进纸里。\n\n举报信送出去之后，等了三个月没有回音。赵铁牛以为没人管了。\n\n直到有一天夜里，有人敲开了他的帐篷。\n\n来人是郑通判——那时候他还只是一个小小的军需主事。他穿着便服，带了一壶好酒和一袋子银子。\n\n「赵兄弟，」郑通判笑着说，「你的举报信被拦下来了。都察院的人把它退给了我——因为我就是负责调查这件事的人。你说巧不巧？」\n\n他把那袋银子放在赵铁牛面前。\n\n「这里面有五十两银子。够你回老家买十亩地，娶个媳妇，安安稳稳过一辈子。你的举报信——我替你『处理』了。从此以后，大家各走各的路，谁也不认识谁。」`);
    divider();
    narrate(`赵铁牛顿了一下，苦笑了一声。\n\n「我当然没要他的银子。我是个死脑筋——认准了的事，十头牛都拉不回来。」\n\n「但我没想到的是——其他六个人里，有三个收了银子。还有一个，直接把举报信的内容告诉了郑通判。」\n\n「那天晚上，我差点死在厕所里——有人在茅房里放了一条毒蛇。幸好我发现得早，只被咬了一口手指头。」`);
    setFlag('heard_zhao_memory_2');
    showChoices([
        { text: '「继续。」', id: 'zb2_continue', next: SCENES['zhao_backstory_3'] },
    ]);
};
SCENES['zhao_backstory_3'] = () => {
    G.scene = 'zhao_backstory_3';
    narrate(`${hl('——虎贲营·暗杀·二十年前——')}\n\n赵铁牛的声音变得更加低沉。\n\n「举报的七个人，死了四个。」\n\n「第一个人死在巡逻的时候——被流矢射中了喉咙。官方说是胡人的冷箭，但箭杆上刻的是虎贲营的编号。」\n\n「第二个人喝了有毒的井水。那天全营只有他一个人中毒——因为他不用公共水井，自己打了一口小井。凶手知道他的习惯。」\n\n「第三个人被发现在营帐里上吊了。但我看过他的脖子——绳子勒痕是水平的，不是上吊那种斜的。他是被人勒死后挂上去的。」\n\n「第四个人死在战场上——被派去执行一个不可能的任务，一个都没回来。」\n\n赵铁牛停了下来，用手掌狠狠地搓了搓脸。\n\n「剩下三个人——包括我——被调到了最前线。说是轮换，其实是让我们送死。」\n\n「我没死。但我废了一条腿。」\n\n他拍了拍自己的左腿。\n\n「胡人的骑兵冲过来的时候，我替一个同伴挡了一刀。刀砍在我的大腿上——动脉差点断了。军医说能保住命就不错了，腿是别想了。」`);
    divider();
    setFlag('heard_zhao_memory_3');
    showChoices([
        { text: '「然后你就离开了军队？」', id: 'zb3_leave', next: SCENES['zhao_backstory_4'] },
    ]);
};
SCENES['zhao_backstory_4'] = () => {
    G.scene = 'zhao_backstory_4';
    narrate(`${hl('——离开北疆·苍龙镇·十八年前——')}\n\n「离开军队的时候，我什么都没带——只带走了王小虎的那封没写完的家书。」\n\n「我把信送到了他老家——山东一个小村子。他娘已经瞎了，听到我念信的时候，一直在哭。她说：『小虎说一切安好，那一定是一切安好。』」\n\n赵铁牛的声音有些哽咽。\n\n「我没告诉她真相。也许我做错了。但那时候我觉得——真相太重了，一个瞎眼的老太太扛不住。」\n\n「之后我在路上走了两年。打零工、做苦力、给铁匠当学徒——什么都干过。最后到了苍龙镇，遇到了老铁匠刘师傅。他收留了我，教我打铁。」\n\n「刘师傅说：『铁匠好，铁匠不用杀人。打出来的东西是为了过日子——锄头、镰刀、铁锅。这些是不会伤害任何人的东西。』」\n\n「我在苍龙镇扎了根。刘师傅去世后，我接手了铁匠铺。认识李裁缝是之后的事——他比我晚来五年，在东边开了裁缝铺。」`);
    divider();
    narrate(`他沉默了一会儿。\n\n「我以为北疆的事已经翻篇了。十年、十五年、二十年——我以为时间够长了，不会再有人记得。」\n\n「但郑通判记得。他一直记得。」`);
    setFlag('heard_zhao_memory_4');
    showChoices([
        { text: '「你觉得李裁缝知道你在北疆的事吗？」', id: 'zb4_ask', effects: () => { G.wits += 1; }, next: SCENES['zhao_backstory_5'] },
        { text: '「你的决定是对的。有些事必须要有人做。」', id: 'zb4_support', effects: () => { changeRel('zhao_tieniu', 5); }, next: SCENES['zhao_backstory_5'] },
    ]);
};
SCENES['zhao_backstory_5'] = () => {
    G.scene = 'zhao_backstory_5';
    narrate(`赵铁牛想了一会儿。\n\n「我从来没有跟李裁缝说过北疆的事。但他是一个很聪明的人——也许他猜到了什么。」\n\n「有一次——大概是五年前——他喝醉了酒，跟我说了一句奇怪的话。他说：『老赵，你是我认识的人里最安静的。安静得像是把什么声音都吞下去了。』」\n\n赵铁牛抬起头，看着夜空。苍龙镇的天空很清澈，银河像一条发光的河横在天际。\n\n「也许他什么都猜到了。也许他的过去也不像表面上那么简单——一个普通的裁缝，怎么会有军需灰布的渠道？」\n\n「但他从来不问我，我也从来不问他。我们就像两块互相靠近的铁——靠得够近就暖和了，不用非得融在一起。」\n\n他低下头，看着手里的铜扣。\n\n「二十年。我以为我已经放下了。」\n\n「但当你看到李裁缝留下的那封信——你知道他一直在帮你保存证据——你就知道，有些人这辈子都放不下。不是不愿意，是放不下。」`);
    divider();
    narrate(`${hl('老槐树的叶子在风中沙沙作响。炉火已经完全熄灭了，但赵铁牛的眼睛里还有光。\n\n不是火光——是二十年前那个在北疆联名举报的年轻人眼中的光。\n\n那道光从来没有熄灭过。')}`);
    setFlag('heard_zhao_memory_5');
    changeRel('zhao_tieniu', 8);
    showChoices([
        { text: '「我们明天就把证据送去府城。」', id: 'zb5_done', effects: () => { setFlag('zhao_ready_to_act'); }, next: SCENES['lobby_free'] },
        { text: '陪他再坐一会儿', id: 'zb5_sit', effects: () => { changeRel('zhao_tieniu', 5); }, next: SCENES['zhao_backstory_silent'] },
    ]);
};
SCENES['zhao_backstory_silent'] = () => {
    G.scene = 'zhao_backstory_silent';
    narrate(`你没有说话。只是拉了张凳子，在赵铁牛旁边坐下。\n\n夜风吹过，带着铁匠铺余烬的最后一丝温热。远处传来苍龙河的水声——在这个安静的夜里，听起来像是有人在低声说话。\n\n赵铁牛也没有再开口。他只是坐在那里，手里捏着那枚铜扣，一转一转的。\n\n你想起了一些事——也许是自己的过去，也许不是。每个人心里都有一段不想提起的往事。有些人选择遗忘，有些人选择背负。\n\n赵铁牛选择了背负。\n\n二十年的重量，压在一个瘸腿铁匠的肩上。但他从没有弯下过腰。\n\n${hl('有时候，沉默是最好的陪伴。不需要安慰，不需要建议——只需要有一个人坐在旁边，让你知道你不是一个人。')}\n\n坐了很久——也许是一个时辰，也许是一整夜——赵铁牛终于站起来。\n\n「走吧。」他说，声音恢复了一些往日的洪亮，「明天还有事要做。」`);
    changeRel('zhao_tieniu', 10);
    setFlag('zhao_silent_night');
    divider();
    showChoices([
        { text: '返回客栈', id: 'zb_silent_return', next: SCENES['lobby_free'] },
    ]);
};
