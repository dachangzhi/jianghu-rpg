"use strict";
/// <reference path="../types.ts" />
// story_part8.js - 柳如烟完整任务线
// 柳如烟：冷厉简洁的锦衣卫暗探，在职责与友情间挣扎
// ---- 柳如烟任务：起始 ----
SCENES['liu_quest_start'] = () => {
    G.scene = 'liu_quest_start';
    G.location = '听雨客栈';
    narrate(`深夜，你被一阵轻微的脚步声惊醒。\n\n不是从走廊传来的——是从窗户方向。有人正在用极细的工具撬你的窗闩。动作非常轻，如果不是你习武之人耳力过人，根本不会察觉。\n\n你悄悄握住枕边的剑，没有出声。\n\n窗闩被拨开的瞬间，一道黑影翻了进来——身手利落，落地的声音比猫还轻。但她在黑暗中犹豫了一瞬，似乎在适应房间的布局。\n\n月光从窗帘缝隙中照进来，映出一截熟悉的剑鞘——${hl('青锋冷月剑')}。\n\n是柳如烟。`);
    divider();
    narrate(`她显然没想到你还醒着。当她发现你已经坐在床上、手握剑柄时，身体微微一僵。\n\n两个人在黑暗中对视了片刻。然后她做了一个你意想不到的动作——她收起工具，直接在你对面坐了下来。\n\n「你醒着。」她说。不是问句，是陈述。\n\n「深夜闯入客人房间，锦衣卫的规矩可没教过这个。」你回答。`);
    dialog('liu_ruyin', '……我来是有事找你。不是公事——是我的事。');
    narrate(`她的声音比白天更轻，也更真实。没有了白天那种冷硬的伪装，她此刻看起来只是一个疲惫的年轻女子。\n\n月光下，你注意到她的眼下有明显的青黑——她已经好几天没有好好睡觉了。`);
    divider();
    showChoices([
        { text: '「说吧。」', id: 'lq_listen', effects: () => { changeRel('liu_ruyin', 5); setFlag('liu_quest_active'); }, next: SCENES['liu_quest_reveal'] },
        { text: '「天亮再说。你可以坐到天亮。」', id: 'lq_wait', effects: () => { changeRel('liu_ruyin', 8); setFlag('liu_quest_active'); setFlag('liu_patient_approach'); }, next: SCENES['liu_quest_wait'] },
        { text: '「先解释你为什么撬我的窗户。」', id: 'lq_explain', effects: () => { G.wits += 1; setFlag('liu_quest_active'); }, next: SCENES['liu_quest_explain'] },
    ]);
};
SCENES['liu_quest_reveal'] = () => {
    G.scene = 'liu_quest_reveal';
    narrate(`柳如烟没有犹豫。她从怀中取出一封信——信封上没有任何标记，但纸质极好，上面隐约有一个暗红色的水印——${hl('锦衣卫的密函标记')}。\n\n但信封已经被拆开了。`);
    dialog('liu_ruyin', `这是三天前从京城发来的密函。我的上司——锦衣卫百户周大人——命令我调查苍龙镇的一个组织：${hl('暗星阁')}。`);
    narrate(`她把信递给你。信上的内容很简短：\n\n${dg('「据可靠情报，暗星阁余部近日活动于苍龙镇一带。令你即日查清暗星阁在苍龙镇的据点、成员及行动计划。事成之后，擢升副千户。若查无实据，即日返京复命。——周」')}\n\n你抬头看着她。`);
    dialog('liu_ruyin', '命令本身没什么问题。但有个细节——这封密函不是通过锦衣卫的常规渠道送来的。它是被一个卖药材的行商带来的，那人我在京城见过一次——他是暗星阁的人。');
    divider();
    narrate(`她的眼神变得锐利。`);
    dialog('liu_ruyin', '我的意思是——有人在用锦衣卫的命令来操纵我。也许暗星阁根本不在苍龙镇。也许……有人想把我引到这个地方来，另有目的。');
    narrate(`她顿了一下，然后直视你的眼睛——这是她第一次这么认真地看着你。\n\n月光照在她脸上，你发现她的表情里有一种你之前没有见过的东西——${hl('犹豫')}。`);
    dialog('liu_ruyin', '我需要一个我信任的人帮我分析这件事。在苍龙镇——我只信任你。');
    setFlag('know_liu_secret_mission');
    divider();
    showChoices([
        { text: '「你信任我？为什么？」', id: 'lq_why_trust', effects: () => { G.charm += 1; }, next: SCENES['liu_quest_whytrust'] },
        { text: '「我来帮你。但首先——把你所有的情报都告诉我。」', id: 'lq_all_info', effects: () => { G.wits += 2; setFlag('liu_full_cooperation'); }, next: SCENES['liu_quest_evidence'] },
        { text: '「你怀疑你的上司有问题？」', id: 'lq_suspect_boss', effects: () => { G.wits += 1; }, next: SCENES['liu_quest_suspectboss'] },
    ]);
};
SCENES['liu_quest_wait'] = () => {
    G.scene = 'liu_quest_wait';
    narrate(`柳如烟愣了一下——显然没料到你会这么说。\n\n她沉默了一会儿，然后轻轻点了点头。\n\n她没有离开。她真的就那么坐在窗边的椅子上，靠着窗框，看着窗外渐渐变亮的天空。\n\n你也没有再睡。你靠在床头，闭着眼睛养神，但始终保持着对周围环境的感知。\n\n就这样过了大约两个时辰。窗外从漆黑变成了深蓝，又从深蓝变成了浅灰。远处传来第一声鸡鸣。\n\n天亮了。\n\n柳如烟转过来看着你。晨光在她的脸上投下柔和的光影，你第一次发现——她的眼睛是琥珀色的，在阳光下像蜂蜜一样。\n\n「谢谢你。」她说。声音很轻，但很认真。\n\n「不用谢。我只是想看你坐在那里发呆的样子——锦衣卫百户也会发呆，倒是挺新鲜的。」\n\n她的嘴角几乎不可察觉地动了一下——那也许是一个微笑。`);
    changeRel('liu_ruyin', 5);
    divider();
    narrate(`天完全亮了之后，她终于开口说出了来意。`);
    dialog('liu_ruyin', '我收到了一封密函，命我调查苍龙镇的暗星阁。但这封密函来历可疑——送信人是暗星阁的人。有人想把我引到这里来，我不知道是谁，也不知道为什么。我需要帮手。');
    setFlag('know_liu_secret_mission');
    divider();
    showChoices([
        { text: '「我帮你。把你知道的都告诉我。」', id: 'lq_wait_help', effects: () => { changeRel('liu_ruyin', 5); setFlag('liu_full_cooperation'); }, next: SCENES['liu_quest_evidence'] },
    ]);
};
SCENES['liu_quest_explain'] = () => {
    G.scene = 'liu_quest_explain';
    narrate(`柳如烟的表情没有任何变化。\n\n「走正门会被沈老板看到。我不想让任何人知道我在深夜活动。」\n\n她顿了顿。\n\n「包括你。但我没有别的选择——你是唯一一个我判断不会出卖我的人。」\n\n「因为你观察了我三天，」她继续说，「你三次看到我的剑，三次都没有声张。一个贪财的人会去告密领赏，一个胆小的人会躲得远远的。你两个都不是。」`);
    setFlag('know_liu_secret_mission');
    changeRel('liu_ruyin', 3);
    divider();
    showChoices([
        { text: '「好，说正事吧。」', id: 'lq_explain_business', next: SCENES['liu_quest_evidence'] },
    ]);
};
SCENES['liu_quest_whytrust'] = () => {
    G.scene = 'liu_quest_whytrust';
    narrate(`柳如烟想了想。\n\n「因为你三次看到我的锦衣卫佩剑，三次都没有声张。你不是不知道那是什么——你第一天就看出来了。」\n\n「一个贪财的人会去告密领赏。一个胆小的人会躲得远远的。一个多嘴的人会到处跟人说——苍龙镇来了个锦衣卫。」\n\n「你什么都没做。你只是在观察。」\n\n她微微低下头。\n\n「在锦衣卫的训练里，我们被告诫不要信任任何人。但四年了——我从来没有遇到过第三种人。直到现在。」`);
    changeRel('liu_ruyin', 5);
    divider();
    showChoices([
        { text: '「也许我只是懒得告密。」', id: 'lq_lazy_joke', effects: () => { G.charm += 2; changeRel('liu_ruyin', 3); }, next: SCENES['liu_quest_evidence'] },
        { text: '「说正事吧。你需要我做什么？」', id: 'lq_get_to_business', next: SCENES['liu_quest_evidence'] },
    ]);
};
SCENES['liu_quest_suspectboss'] = () => {
    G.scene = 'liu_quest_suspectboss';
    narrate(`柳如烟摇头。\n\n「不一定是我的上司有问题。锦衣卫内部派系复杂——也许有人借了周百户的名义发密函，周百户自己都不知道。」\n\n她叹了口气。\n\n「这就是锦衣卫的日常——你不知道谁是敌人，谁是朋友。今天的盟友可能明天就是捅你一刀的人。在这种地方待四年，你会学会一件事——不要信任任何人。」\n\n她看了你一眼。\n\n「但我现在在打破这个规矩。所以你最好值得我打破。」`);
    changeRel('liu_ruyin', 3);
    divider();
    showChoices([
        { text: '「我会的。继续说。」', id: 'lq_boss_continue', next: SCENES['liu_quest_evidence'] },
    ]);
};
// ---- 柳如烟任务：搜集证据 ----
SCENES['liu_quest_evidence'] = () => {
    G.scene = 'liu_quest_evidence';
    G.location = '苍龙镇各处';
    narrate(`柳如烟铺开了一张苍龙镇的简易地图——是她自己画的，标注非常专业，镇子的每条巷子、每口水井、每个出入口都标得清清楚楚。\n\n典型的锦衣卫作风。\n\n「这是我三天来搜集到的情报。」她指着地图上的几个标记点。\n\n${hl('1. 镇西废弃磨坊')}——每天深夜都有人出入，至少三到五人。进出时使用暗号：三短一长的敲门声。\n\n${hl('2. 胡青娘的药铺')}——胡青娘每隔三天会去镇外的山上采药，但她去的路线不太对——她不是去最近的药草坡，而是绕远路去北边的枯松谷。那里没有任何已知的药材。\n\n${hl('3. 白云生住的客房')}——他看似每天醉醺醺的，但深夜的客房里经常亮着灯。而且有两次，柳如烟看到他在窗口用反光信号跟什么人联络。\n\n${hl('4. 老孙头')}——那个在河边钓鱼的老头，经常在黄昏时分划船到河的上游去，回来时船吃水深了很多——像是载了什么东西。`);
    divider();
    narrate(`她合上地图，看着你。\n\n「这些线索我需要进一步确认。但我一个人分身乏术——而且我的身份已经暴露了风险。你帮我查两件事。」\n\n「第一：废弃磨坊里到底是什么人。第二：胡青娘去枯松谷到底做什么。」`);
    setFlag('liu_clue_mill');
    setFlag('liu_clue_huqy');
    setFlag('liu_clue_bai');
    setFlag('liu_clue_oldsun');
    divider();
    showChoices([
        { text: '「我先去查废弃磨坊。」', id: 'lq_check_mill', effects: () => { G.wits += 1; setFlag('went_to_mill'); }, next: SCENES['liu_evidence_mill'] },
        { text: '「我去跟踪胡青娘。」', id: 'lq_check_hu', effects: () => { G.charm += 1; setFlag('went_to_gusong'); }, next: SCENES['liu_evidence_hu'] },
        { text: '「我觉得白云生更可疑。我去监视他。」', id: 'lq_check_bai', effects: () => { G.wits += 2; setFlag('went_to_watch_bai'); }, next: SCENES['liu_evidence_bai'] },
        { text: '「四条线索互相有关联吗？我们先分析一下。」', id: 'lq_analyze', effects: () => { G.wits += 3; setFlag('liu_analyzed_clues'); }, next: SCENES['liu_evidence_analyze'] },
    ]);
};
SCENES['liu_evidence_mill'] = () => {
    G.scene = 'liu_evidence_mill';
    G.location = '废弃磨坊';
    narrate(`废弃磨坊在镇子西边，靠近通往府城的官道。磨坊已经荒废多年，巨大的石磨长满了青苔，木质的水车只剩下一副骨架，在河水中吱呀作响。\n\n你等到深夜才靠近。月亮躲在云层后面，四周一片漆黑，只有磨坊二楼的一扇窗户透出微弱的灯光。\n\n你绕到磨坊背面，找到一堵塌了半截的墙，轻手轻脚地翻了进去。\n\n里面的景象让你吃了一惊。\n\n磨坊一楼被改造成了一个简陋的联络站：墙上挂着几幅地图，桌上摆着笔墨和信纸，角落里有几口箱子——从缝隙中可以看到里面是刀剑和暗器。\n\n还有一面墙上贴满了画像——你凑近一看，每一幅画像下面都有一个名字和一个价格。\n\n${danger('这是一面悬赏墙。每一幅画像都是一个人的脑袋——每个人头上都标着价码。')}`);
    divider();
    narrate(`你快速扫了一眼那些画像——大多数是陌生的面孔，但有几张让你停下了目光：\n\n${hl('沈孤雁')}——悬赏价：${danger('白银五百两')}\n${hl('赵铁牛')}——悬赏价：${danger('白银三百两')}\n${hl('白云生')}——悬赏价：${danger('白银一千两')}\n\n沈孤雁的悬赏价不算最高，但赵铁牛——一个瘸腿铁匠——三百两？这太不正常了。\n\n而白云生——一千两——这个价格足以请到一流的杀手。\n\n你正想继续查看，楼梯上传来脚步声。你迅速闪到箱子后面。\n\n两个人走了下来。其中一个你认识——是镇上杂货铺的刘掌柜。另一个戴着斗笠，看不清脸。`);
    dialog('liu_ruyin', '(你在黑暗中听到刘掌柜的声音)「……新来的指令，三天之内动手。目标确认：白云生。优先级最高。」');
    narrate(`戴斗笠的人点了点头，从箱子里取出一把短刀和一个小瓷瓶。\n\n他们很快离开了。你在悬赏墙上又记下了几个名字和价格，然后悄悄退出磨坊。\n\n${dg('暗星阁——或者说它的残部——确实在苍龙镇活动。而且他们的目标……包括客栈老板、铁匠和一个醉鬼书生。')}`);
    setFlag('found_bounty_wall');
    setFlag('know_bai_target');
    divider();
    showChoices([
        { text: '回去告诉柳如烟', id: 'lq_mill_report', next: SCENES['liu_quest_dilemma'] },
        { text: '先去警告白云生', id: 'lq_mill_warn_bai', effects: () => { setFlag('warned_bai'); changeRel('bai_yunsheng', 10); }, next: SCENES['liu_quest_dilemma'] },
    ]);
};
SCENES['liu_evidence_hu'] = () => {
    G.scene = 'liu_evidence_hu';
    G.location = '枯松谷';
    narrate(`你在第三天清晨跟踪胡青娘出了镇子。她穿着一身灰绿色的采药服，背着一个竹篓，手里拿着一把药锄。\n\n从外表看，她就是一个普通的采药女——但她的步伐太过稳健，眼神太过警觉。每走几步就会回头看一眼，确认没有人跟踪。\n\n你没有跟得太紧。你保持着一里左右的距离，利用地形和树木掩护自己。\n\n走了大约半个时辰，她拐进了枯松谷——一个布满枯死松树的山谷，地面是灰色的碎石，空气中弥漫着松脂的气味。\n\n枯松谷确实没有药材——这里的土壤因为某种原因变得有毒，连野草都很少。但胡青娘轻车熟路地绕过几棵枯松，来到一块被苔藓覆盖的大石头前。\n\n她蹲下来，搬开石头——下面露出一个黑洞洞的入口。\n\n她回头看了一眼——你及时缩回了树后。然后她钻进了洞里。`);
    divider();
    narrate(`你等了大约一盏茶的时间，然后小心地靠近那个入口。\n\n洞穴不深，大约三丈就到了尽头。里面被改造成了一个小型的制药室——石壁上凿出了几个架子，上面摆满了瓷瓶和药罐。空气中弥漫着一股苦涩的药味，混合着某种甜腻的香气。\n\n胡青娘不在洞穴里——也许洞穴还有更深的地方，或者她从另一个出口离开了。\n\n你快速检查了架子上的药品。大部分是普通的药材——黄连、当归、川芎。但有一个角落里的瓶子引起了你的注意：\n\n瓶子上贴着标签——${danger('「断肠散·改良型」')}。\n\n断肠散是江湖上有名的毒药，但「改良型」意味着什么？你拿起瓶子仔细看了看——改良后的断肠散无色无味，发作时间从半个时辰延长到了三个时辰，而且症状和普通的急病一模一样。\n\n${dg('这是一种完美的暗杀毒药。')}`);
    setFlag('found_hu_poison_lab');
    addItem('断肠散样本');
    divider();
    showChoices([
        { text: '拿一瓶样品回去给柳如烟', id: 'lq_hu_sample', effects: () => { G.wits += 1; }, next: SCENES['liu_quest_dilemma'] },
        { text: '不动任何东西，悄悄离开', id: 'lq_hu_leave', effects: () => { setFlag('hu_not_disturbed'); }, next: SCENES['liu_quest_dilemma'] },
    ]);
};
SCENES['liu_evidence_bai'] = () => {
    G.scene = 'liu_evidence_bai';
    G.location = '听雨客栈';
    narrate(`你选择监视白云生。这个决定很快就被证明是正确的——因为白云生的「醉鬼」伪装做得并不像他以为的那么好。\n\n白天他确实醉醺醺的——但你注意到他喝酒的方式很奇怪。他点的酒是最烈的烧刀子，但他每次只抿一小口就放下。一壶酒能「喝」一整天。\n\n到了深夜——大约子时——他房间的灯亮了。\n\n你趴在他房间对面的屋顶上，透过窗帘的缝隙观察。白云生坐在桌前——完全清醒——面前摊着一叠文书。他在写什么，写得很专注，偶尔停下来思考，然后继续。\n\n你注意到他写字的手法——不是普通书生的写法，而是一种速记符号。也许是某种密码。\n\n写完之后，他把文书折成很小的一块，塞进一根空心的竹管里。然后他走到窗前，用一面小铜镜反射月光——三长两短的闪烁。\n\n远处，有人用同样的方式回应了。\n\n${hl('白云生不是什么醉鬼书生。他是一个正在执行某种秘密任务的人。')}`);
    setFlag('know_bai_secret');
    divider();
    showChoices([
        { text: '回去告诉柳如烟', id: 'lq_bai_report', next: SCENES['liu_quest_dilemma'] },
        { text: '直接去质问白云生', id: 'lq_bai_confront', effects: () => { G.wits += 1; changeRel('bai_yunsheng', -5); }, next: SCENES['liu_quest_dilemma'] },
    ]);
};
SCENES['liu_evidence_analyze'] = () => {
    G.scene = 'liu_evidence_analyze';
    narrate(`你把四条线索放在一起分析。\n\n「废弃磨坊的深夜活动、胡青娘的异常采药路线、白云生的夜间密码通信、老孙头的可疑渡河——」你列出这些，「看起来像是四条独立的线索。但有一个共同点。」\n\n柳如烟抬起头。\n\n「它们都指向同一个方向——${hl('山上')}。」\n\n废弃磨坊在通往山的路上。胡青娘去枯松谷——也在山的方向。白云生的反光信号——朝向山的方向。老孙头往上游划船——上游就是山的方向。\n\n「他们都在关注同一座山。」你说。\n\n柳如烟点了点头。\n\n「落雁峰。苍龙镇背后的那座山。据说山上有一个封禁的石室——跟天机卷有关。」\n\n「天机卷……」你重复这个名字。\n\n「一份名单。」柳如烟简短地说，「记录了前朝遗臣和他们的后代。如果这份名单流落到不当的人手里，会有一大批人被清算。如果落到当权者手里……也一样。」`);
    setFlag('liu_analyzed_to_mountain');
    divider();
    showChoices([
        { text: '「我们需要上山看看。」', id: 'lq_mountain_plan', next: SCENES['liu_quest_dilemma'] },
    ]);
};
// ---- 柳如烟任务：两难抉择 ----
SCENES['liu_quest_dilemma'] = () => {
    G.scene = 'liu_quest_dilemma';
    G.location = '听雨客栈';
    narrate(`你把搜集到的情报汇报给柳如烟。她安静地听着，表情始终平静——但你注意到她握着茶杯的手越来越紧。\n\n你说完之后，她沉默了很久。\n\n「我有两个身份。」她终于开口了。「一个是锦衣卫百户——职责是查明暗星阁的下落并上报。另一个……」\n\n她犹豫了一下。\n\n「另一个是一个女儿——一个想找到失踪父亲的人。」\n\n她从领口内取出一个小小的木牌——上面刻着一个「柳」字，木牌背面是一行小字：${hl('「吾女如烟，父字」')}。\n\n「我父亲——柳青松——是锦衣卫的千户。五年前执行任务时失踪，官方说是殉职。但我在他的遗物里找到了线索——他最后出现在苍龙镇附近。」\n\n她深吸一口气。\n\n「如果暗星阁在苍龙镇有据点，我作为锦衣卫应该立刻上报，请求增援。但如果我这么做了——增援一来，所有的线索都会被接管。我再也不会有机会找到我父亲的下落。」`);
    divider();
    narrate(`${hl('这就是她的两难——职责和亲情，只能选一个。')}\n\n她看着你，眼中的犹豫是真实的。\n\n「你帮我已经帮到这里了……我不能再要求你什么。但我想听听你的看法。你觉得——我应该怎么做？」`);
    divider();
    showChoices([
        { text: '「先找人。你父亲的事比锦衣卫的命令重要。」', id: 'lq_dilemma_father', effects: () => { changeRel('liu_ruyin', 10); setFlag('liu_chose_father'); G.charm += 2; }, next: SCENES['liu_quest_confession'] },
        { text: '「先上报。如果你被查出隐瞒情报，后果比失踪更严重。」', id: 'lq_dilemma_duty', effects: () => { G.wits += 2; setFlag('liu_chose_duty'); }, next: SCENES['liu_quest_confession'] },
        { text: '「两者不矛盾。我们先找到你父亲的线索，然后以个人名义上报暗星阁的情报。」', id: 'lq_dilemma_both', effects: () => { G.wits += 3; changeRel('liu_ruyin', 5); setFlag('liu_chose_both'); }, next: SCENES['liu_quest_confession'] },
        { text: '「这是你的选择。我不能替你决定。」', id: 'lq_dilemma_hers', effects: () => { changeRel('liu_ruyin', 8); setFlag('liu_respects_you'); }, next: SCENES['liu_quest_confession'] },
    ]);
};
// ---- 柳如烟任务：深夜坦白 ----
SCENES['liu_quest_confession'] = () => {
    G.scene = 'liu_quest_confession';
    G.location = '听雨客栈';
    narrate(`无论你给了什么建议，柳如烟似乎都得到了某种力量。她站起来，走到窗边，背对着你。\n\n窗外是苍龙镇的夜景——远处有几点灯火，苍龙河在月光下泛着银光，偶尔传来一两声蛙鸣。\n\n她开口了。这一次，她的声音不再是锦衣卫百户的冷硬，也不是暗探的谨慎——而是一个普通人在对信任的人倾诉。\n\n「我出生在京城锦衣卫的家属院。」\n\n「那里的孩子从小就知道自己长大要做什么——当差。父亲是千户，母亲是文书。我在锦衣卫的影子下长大，连做梦都是穿着飞鱼服在街巷里追人。」`);
    divider();
    narrate(`「我十二岁进锦衣卫学堂，十五岁开始训练。同期有三十七个人——最后只有十一个通过了考核。」\n\n「训练很残酷。体能、格斗、追踪、伪装、审讯、反审讯——每一项都要做到极致。做不到的人不是被淘汰——是被送去做一辈子文书，永远不能再接触外勤。」\n\n她转过身来。\n\n「但我做到了。我是同期第一名。教官说我天生就适合做这一行——冷静、果断、观察力强。」\n\n「然后我父亲失踪了。」`);
    divider();
    narrate(`「我申请调查他的失踪，被驳回了——理由是『避免利益冲突』。我通过私人渠道打听，发现他最后一次执行的任务跟天机卷有关——而任务的终点，就在苍龙镇附近。」\n\n「于是我主动申请了苍龙镇的暗探任务。周百户以为我是为了立功——其实我只是想找到我父亲。」\n\n她低下头。\n\n「四年来，我一直在找他。从北到南，从京城到岭南，每一条线索都指向不同的方向。但所有的线索最终都会回到同一个地方——${hl('天机卷')}。」\n\n「也许我父亲找到天机卷了。也许他因为知道得太多而消失了。也许……他还活着，只是不能回来。」\n\n她抬起头，眼眶微红，但没有掉一滴眼泪。\n\n「锦衣卫不哭。这是教官教的第一课。」`);
    divider();
    setFlag('heard_liu_backstory_main');
    changeRel('liu_ruyin', 10);
    showChoices([
        { text: '「你父亲一定还活着。」', id: 'lq_conf_hope', effects: () => { changeRel('liu_ruyin', 5); G.charm += 1; }, next: SCENES['liu_quest_resolution'] },
        { text: '「我们会找到他的。」', id: 'lq_conf_promise', effects: () => { changeRel('liu_ruyin', 8); setFlag('promised_liu_father'); }, next: SCENES['liu_quest_resolution'] },
        { text: '「锦衣卫不哭——但你不是锦衣卫，你是柳如烟。」', id: 'lq_conf_human', effects: () => { changeRel('liu_ruyin', 12); G.charm += 3; setFlag('liu_human_moment'); }, next: SCENES['liu_quest_resolution'] },
    ]);
};
// ---- 柳如烟回忆：锦衣卫训练 ----
SCENES['liu_backstory_1'] = () => {
    G.scene = 'liu_backstory_1';
    G.location = '回忆·锦衣卫学堂';
    narrate(`柳如烟靠在墙上，开始回忆她的训练岁月。\n\n${hl('——京城·锦衣卫学堂·八年前——')}\n\n「学堂在京城北郊，一道高墙围着。进去的第一天，教官——一个独眼的老千户——让我们站成一排。」\n\n「他说：『从今天开始，你们没有名字。你们是编号。一号到三十七号。在你们通过考核之前，没有人会叫你们的名字。因为名字意味着你是一个人——而在锦衣卫，你首先是一个工具。』」\n\n「我是十七号。」\n\n「前三个月是纯体能训练。每天跑三十里，负重五十斤，攀城墙、渡护城河。跑不动的——被打。跑得慢的——被打。跑得快的——也被打。因为教官说：『记住被打的感觉。下次你抓到犯人，你就知道怎么让他更痛。』」`);
    divider();
    narrate(`「第四个月开始格斗训练。不是江湖上那种花哨的剑法——是最实用的杀人技术。哪里下刀最快、哪里击打最痛、怎么在三种呼吸之内制服一个人。」\n\n「我们每天对练。用的是真刀——只是没有开刃。但淤青和伤口是真实的。我胳膊上到现在还有一道疤——是对练时被一个叫张虎的家伙划的。」\n\n「后来我在考核的时候把他打趴下了。不是报复——是在考官面前展示我学得好。张虎没能通过考核。他被送去文书房了。」\n\n她无意识地摸了摸右臂上一道细长的疤痕。`);
    setFlag('heard_liu_memory_1');
    showChoices([
        { text: '「你不觉得残忍吗？」', id: 'lb1_cruel', effects: () => { G.charm += 1; }, next: SCENES['liu_backstory_2'] },
        { text: '「继续说。」', id: 'lb1_continue', next: SCENES['liu_backstory_2'] },
    ]);
};
SCENES['liu_backstory_2'] = () => {
    G.scene = 'liu_backstory_2';
    narrate(`${hl('——锦衣卫学堂·第二年——')}\n\n「第二年是追踪和伪装。教官会放走一个『犯人』——其实是教员假扮的——让我们在三天之内找到他。」\n\n「第一次，我花了两天半。第二次，一天半。第三次，半天。」\n\n「但第四次，我失败了。」\n\n她停了一下。\n\n「第四次的目标是我父亲——不是真的，是教员化妆的。他穿着我父亲的衣服，用我父亲的走路姿势。当我追到一条小巷时，他转过身来——脸上戴着一张面具，面具上是我父亲的脸。」\n\n「我愣了三秒。」\n\n「三秒钟。在实战中，三秒钟可以死三次。教员摘下面具，对我说：『十七号，你的弱点不是体能，不是技术——是你的心。你心里有牵挂。在锦衣卫，牵挂是最大的弱点。』」\n\n柳如烟的声音很平静。\n\n「他说得对。我心里确实有牵挂——我父亲。从那天起，我就知道，只要我父亲还没有下落，我永远不可能成为完美的锦衣卫。」`);
    divider();
    setFlag('heard_liu_memory_2');
    changeRel('liu_ruyin', 3);
    showChoices([
        { text: '「也许不完美才是最好的。」', id: 'lb2_perfect', effects: () => { changeRel('liu_ruyin', 5); }, next: SCENES['liu_backstory_3'] },
        { text: '继续听', id: 'lb2_next', next: SCENES['liu_backstory_3'] },
    ]);
};
SCENES['liu_backstory_3'] = () => {
    G.scene = 'liu_backstory_3';
    narrate(`${hl('——锦衣卫学堂·考核——')}\n\n「最终的考核是最残酷的。」\n\n「教官把通过前面筛选的十五个人带到一间密室。密室里有一把椅子，椅子上绑着一个人。」\n\n「教官说：『这个人掌握了一份机密情报。你们有半个时辰让他开口。方法不限。』」\n\n「椅子上的人满脸是血——显然已经被前面的学员『审讯』过了。他看到我们进来，眼睛里全是恐惧。」\n\n柳如烟的声音变低了。\n\n「其他十四个人——有的用刑，有的威胁，有的恐吓。我排在最后一个。」\n\n「轮到我的时候，我没有动手。我走过去，在他面前坐下，给他倒了杯水。」\n\n「我说：『你不是犯人。你是教员。这个考核考的不是审讯技巧——考的是判断力。你身上有三处疑点：你的手不是被绑疼的——绑绳的方式太松了；你嘴角的血是从外面涂上去的——不是从里面流出来的；最重要的是——你的眼睛里没有绝望，只有疲倦。一个真正被刑讯的人，眼神不会是这样的。』」\n\n「教员摘下面具，笑了。」\n\n「他说：『十七号——不，柳如烟——你是这期唯一一个通过真正考核的人。锦衣卫不需要会打人的工具——需要会看人的眼睛。』」`);
    divider();
    setFlag('heard_liu_memory_3');
    showChoices([
        { text: '「难怪你的观察力这么强。」', id: 'lb3_compliment', effects: () => { changeRel('liu_ruyin', 3); }, next: SCENES['liu_backstory_4'] },
        { text: '「然后呢？你正式成为锦衣卫了？」', id: 'lb3_next', next: SCENES['liu_backstory_4'] },
    ]);
};
SCENES['liu_backstory_4'] = () => {
    G.scene = 'liu_backstory_4';
    narrate(`${hl('——锦衣卫·第一次任务——')}\n\n「通过考核后，我被分配到了暗探司——专门负责潜入调查的部门。」\n\n「第一次任务是调查京城一个贩卖官职的团伙。我伪装成一个想买官的商人女儿，花了三个月打入他们内部。」\n\n「三个月。每天跟那群人虚与委蛇，笑脸相迎。有时候我觉得自己快分裂了——白天是柳如烟，晚上是锦衣卫百户。有时候连我自己都分不清哪个是真的。」\n\n「最后我拿到了证据，团伙被一网打尽。主犯被判了斩立决。」\n\n「行刑那天，我去了刑场。主犯看到我，笑了——他说：『柳姑娘，你演得真好。我到死都以为你是真的。』」\n\n她沉默了一会儿。\n\n「那天晚上，我在营房里哭了。不是因为内疚——而是因为我发现，我分不清自己是在演戏还是在哭。」`);
    divider();
    setFlag('heard_liu_memory_4');
    showChoices([
        { text: '「你是在哭。那不是演戏。」', id: 'lb4_real', effects: () => { changeRel('liu_ruyin', 5); G.charm += 1; }, next: SCENES['liu_backstory_5'] },
        { text: '继续听', id: 'lb4_next', next: SCENES['liu_backstory_5'] },
    ]);
};
SCENES['liu_backstory_5'] = () => {
    G.scene = 'liu_backstory_5';
    narrate(`${hl('——父亲失踪——')}\n\n「我父亲是在我通过考核后第二年失踪的。」\n\n「那天他出任务——说是去南方调查一个逃犯。标准的暗探任务，三天就能回来。」\n\n「三天变成了十天。十天变成了一个月。一个月之后，锦衣卫宣布他殉职——但没有任何尸体，没有任何遗物，只有一个含糊其辞的『因公殉职』报告。」\n\n「我去找周百户问详情。他说档案是机密，我不能看。」\n\n「于是我用了三个月的时间，偷偷翻阅了所有能接触到的档案。最后在一份加密的调令中发现了线索——我父亲的最后任务不是去南方追逃犯，而是去${hl('苍龙镇')}调查天机卷。」\n\n「天机卷……」她重复了一遍，声音里有一种说不清的情绪。\n\n「一份名单。据说记录了前朝遗臣和他们的后代。我父亲——一个锦衣卫千户——去调查一份跟前朝有关的名单。然后他消失了。」\n\n「从那以后，我申请了每一个跟天机卷有关的任务。四年了。终于，我来到了苍龙镇。」\n\n她抬起头，月光照在她的脸上。\n\n「现在你知道了一切。」`);
    divider();
    narrate(`${hl('四年的寻找。无数次的失望。一个锦衣卫百户在深夜向一个雨夜相识的旅人坦白了自己的全部秘密。\n\n也许是因为疲惫。也许是因为孤独。也许只是因为——在这个雨夜的小镇上，你是唯一一个让她觉得可以做回「柳如烟」而不是「锦衣卫百户」的人。')}`);
    setFlag('heard_liu_memory_5');
    changeRel('liu_ruyin', 10);
    divider();
    showChoices([
        { text: '「我们去山上。答案在那里。」', id: 'lb5_mountain', effects: () => { setFlag('liu_ready_for_mountain'); }, next: SCENES['lobby_free'] },
    ]);
};
// ---- 柳如烟任务：结局 ----
SCENES['liu_quest_resolution'] = () => {
    G.scene = 'liu_quest_resolution';
    if (hasFlag('liu_chose_father')) {
        SCENES['liu_resolution_father']();
    }
    else if (hasFlag('liu_chose_both')) {
        SCENES['liu_resolution_both']();
    }
    else if (hasFlag('liu_chose_duty')) {
        SCENES['liu_resolution_duty']();
    }
    else {
        SCENES['liu_resolution_hers']();
    }
};
SCENES['liu_resolution_father'] = () => {
    narrate(`柳如烟看着你，眼中的冰冷融化了一瞬间。\n\n「……谢谢你。」她说得很轻。\n\n她做出了决定——暂时不上报暗星阁的情报，先集中精力寻找父亲的下落。\n\n「我在枯松谷的洞穴里发现了一些药瓶上的标记。」你说，「有一个瓶子上的批号跟锦衣卫内部药房的编号格式一样。如果胡青娘的药是从锦衣卫渠道流出来的……」\n\n柳如烟的表情一变。\n\n「那就说明锦衣卫内部有人跟暗星阁有联系。我父亲失踪……也许不是意外，而是内部有人要他消失。」\n\n${ok('真相往往比想象中更残酷——但至少，她现在知道该往哪个方向看了。')}`);
    setFlag('liu_quest_complete');
    setFlag('liu_father_priority');
    divider();
    showChoices([
        { text: '继续探索', id: 'lq_res_continue', next: SCENES['lobby_free'] },
    ]);
};
SCENES['liu_resolution_both'] = () => {
    narrate(`柳如烟沉思了一会儿，然后点了点头。\n\n「你说得对。两条路不矛盾。」\n\n她做出决定：先花几天时间深入调查父亲的下落，然后将所有情报——包括暗星阁的线索——以个人名义写成报告，寄给锦衣卫中她信任的一位长官。\n\n「锦衣卫内部不是铁板一块。有坏人，但也有好人。我需要找到对的人来接手这件事。」\n\n她看了看窗外渐亮的天色。\n\n「天快亮了。你去休息吧。明天开始——我们去山上。」\n\n${hl('有时候最好的选择不是两选一——而是找到一个方法，两全其美。')}`);
    setFlag('liu_quest_complete');
    setFlag('liu_balanced_approach');
    divider();
    showChoices([
        { text: '返回休息', id: 'lq_res_rest', next: SCENES['lobby_free'] },
    ]);
};
SCENES['liu_resolution_duty'] = () => {
    narrate(`柳如烟沉默了很久。\n\n「你说的对。」她终于说，「我不能因为个人原因耽误公事。先上报暗星阁的情报，然后……然后再找父亲的事。」\n\n她当着你的面写了一份密报，用锦衣卫的暗语记录了所有发现。\n\n「但这不意味着我放弃了。」她说，「上报之后，我会以私人身份继续调查。只是——不能再用锦衣卫的资源了。」\n\n她封好密报，叫来一个她认识的行商，托他带回京城。\n\n${dg('有时候做正确的事和做想做的事是冲突的。但她选择了前者——这需要比做后者更大的勇气。')}`);
    setFlag('liu_quest_complete');
    setFlag('liu_duty_first');
    divider();
    showChoices([
        { text: '继续探索', id: 'lq_res_duty_continue', next: SCENES['lobby_free'] },
    ]);
};
SCENES['liu_resolution_hers'] = () => {
    narrate(`柳如烟看着你，然后轻轻笑了——这是你第一次看到她真正地笑。\n\n「你这个人……总是把选择权交给我。」\n\n她想了想。\n\n「我选择——先找父亲。暗星阁的情报我会记下来，等事情办完再上报。但父亲的事，不能再等了。四年了。够了。」\n\n她的眼神变得坚定。\n\n「明天，我们去山上。」\n\n${hl('有些选择，别人帮不了你做。但当有人站在你身边，让你觉得不孤单的时候——选择就变得没那么可怕了。')}`);
    setFlag('liu_quest_complete');
    setFlag('liu_own_choice');
    divider();
    showChoices([
        { text: '返回休息', id: 'lq_res_hers', next: SCENES['lobby_free'] },
    ]);
};
