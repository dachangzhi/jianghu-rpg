"use strict";
/// <reference path="../types.ts" />
// story_part4.js - 抉择时刻扩展 + 结盟系统 + 个人任务
// 扩展chapter2_hub的内容
// ---- 沈孤雁个人任务线 ----
SCENES['shen_personal_quest'] = () => {
    G.scene = 'shen_personal_quest';
    clearStory();
    narrate(`沈孤雁把你叫到柜台后面。他的表情前所未有的凝重。`);
    dialog('shen_guyan', '我有一件事需要你帮忙。不是天机卷的事——是我私人的事。\n\n我的女儿……她被朝廷掳走了。');
    narrate(`你的心沉了一下。`);
    dialog('shen_guyan', '五年前，清婉死后不久，朝廷找到了我的女儿沈念。她那时才十三岁。他们没有杀她——而是把她带走了，作为要挟我的筹码。\n\n只要我乖乖的，不乱说话，他们就养着她。如果我不听话……');
    divider();
    narrate(`他从怀中取出一封信。信纸已经磨得发白，显然被翻看了无数次。`);
    dialog('shen_guyan', '这是她去年托人带出来的唯一一封信。她在京城的织造坊做工——说是做工，其实就是人质。信里说她很好，让我不要担心。\n\n但我看得出来——她的字迹变了。以前她的字活泼灵动，现在……规规矩矩，一笔一画，像是有人站在旁边监督她写的。');
    setFlag('shen_daughter_quest');
    divider();
    narrate(`沈孤雁抬起头，眼中是你从未见过的脆弱。`);
    dialog('shen_guyan', '我一直在等一个机会。如果我能在不惊动朝廷的情况下……把她救出来……\n\n但苍龙镇的事走不开。三百多人的命在我手上。\n\n你——能不能帮我？');
    showChoices([
        { text: '「我帮你救女儿。」', id: 'shen_promise_daughter', effects: () => { setFlag('promised_shen_daughter'); changeRel('shen_guyan', 15); G.charm += 2; }, next: SCENES['shen_daughter_plan'] },
        { text: '「我现在走不开。但天机卷的事了结之后——我一定帮你。」', id: 'shen_later', effects: () => { setFlag('shen_daughter_later'); changeRel('shen_guyan', 5); }, next: SCENES['chapter2_hub'] },
        { text: '「这超出了我的能力范围。」', id: 'shen_refuse_daughter', effects: () => { changeRel('shen_guyan', -5); }, next: SCENES['chapter2_hub'] },
    ]);
};
SCENES['shen_daughter_plan'] = () => {
    G.scene = 'shen_daughter_plan';
    narrate(`\n沈孤雁的眼睛亮了一下——像是看到了一丝希望。`);
    dialog('shen_guyan', '你……真的愿意帮我？');
    narrate(`他深吸一口气，从柜台下面取出一张手绘的地图。`);
    dialog('shen_guyan', '京城织造坊的布局图。我花了五年时间，通过各种渠道收集的。她被关在坊内西北角的一间小院子里，有两名守卫轮班。\n\n我本来打算自己去——但我不能离开苍龙镇。我一走，这三百多人就没有人保护了。');
    divider();
    narrate(`他看着地图，手指在一个标记点上停了很久。`);
    dialog('shen_guyan', '如果你能帮我救出念儿——我把沈家的玉牌给你，还有我毕生所学的「拨云手」心法。\n\n更重要的是——从今天起，我沈孤雁这条命，就是你的。不管你要我做什么，赴汤蹈火，在所不辞。');
    addItem('织造坊地图');
    setFlag('has_weaving_map');
    showChoices([
        { text: '继续行动', id: 'shen_plan_done', next: SCENES['chapter2_hub'] },
    ]);
};
// ---- 柳如烟个人任务线 ----
SCENES['liu_personal_quest'] = () => {
    G.scene = 'liu_personal_quest';
    clearStory();
    narrate(`柳如烟在屋顶上等你。月光将她的侧脸照得像一幅水墨画。`);
    dialog('liu_ruyin', '你来了。我有件事——只想跟你说。');
    narrate(`她的声音比平时轻了很多。`);
    dialog('liu_ruyin', '我父亲……他在岭南一个叫青竹村的地方。化名周三，以打鱼为生。但他的身体不好——当年守城时落下的旧伤，每到冬天就发作。\n\n我已经三年没见过他了。');
    divider();
    narrate(`她从袖中取出一块小小的玉佩——不是玉牌，是一块普通的平安扣，上面刻着一个「周」字。`);
    dialog('liu_ruyin', '这是我母亲的遗物。我本来想亲自还给他——但如果我离开锦衣卫，朝廷会立刻派人追杀我们两个。\n\n所以我想求你一件事——如果天机卷的事了结了……帮我把这块玉佩带给我父亲。告诉他——女儿不孝，但不能回来。');
    setFlag('liu_father_quest');
    narrate(`\n她的声音到最后几乎听不见了。月光下，你看到她的睫毛上似乎挂着什么——但当你眨眼再看时，她已经恢复了那副冷硬的面孔。`);
    dialog('liu_ruyin', '……当然，作为交换，如果你需要——我可以告诉你锦衣卫在苍龙镇的所有部署。包括暗哨的位置、联络方式、和换班时间。\n\n这些信息，至少值五百两黄金。');
    showChoices([
        { text: '「我帮你送玉佩。不需要交换。」', id: 'liu_free_favor', effects: () => { setFlag('promised_liu_father'); changeRel('liu_ruyin', 15); addItem('柳如烟的平安扣'); G.charm += 2; }, next: SCENES['chapter2_hub'] },
        { text: '「信息我也要，玉佩我也帮你送。」', id: 'liu_both', effects: () => { setFlag('promised_liu_father'); changeRel('liu_ruyin', 10); addItem('柳如烟的平安扣'); setFlag('knows_jinyi_deploy'); G.wits += 2; }, next: SCENES['chapter2_hub'] },
        { text: '「我得先忙天机卷的事。」', id: 'liu_quest_later', next: SCENES['chapter2_hub'] },
    ]);
};
// ---- 赵铁牛个人任务线 ----
SCENES['zhao_personal_quest'] = () => {
    G.scene = 'zhao_personal_quest';
    clearStory();
    narrate(`赵铁牛把你带到铁匠铺后面的地窖里。\n\n军旗在昏暗的烛光下泛着暗红色的光。四十七个木牌整整齐齐地排在架子上。`);
    dialog('zhao_tieniu', '我让你看这些，是因为——我需要你帮我找一个人。');
    narrate(`他指向其中一个木牌：\n\n「${hl('刘半仙 · 永安二年入')}」`);
    dialog('zhao_tieniu', '刘半仙，真名刘永年。他是我们小队的军师——不，是我们的脑子。打仗的时候，所有计谋都是他出的。乌兰关能守三天三夜，全靠他。\n\n但三年前，有一场伏击——我们的位置被人泄露了。五个人出去，只有他一个人活着回来。他说敌人太强，其他人都是战死的。\n\n但我不信。\n\n因为那次伏击之后，又有三个兄弟接连出事。每一次，敌人的情报都精准得不像是巧合。');
    divider();
    narrate(`赵铁牛的脸色铁青。`);
    dialog('zhao_tieniu', `我花了三年调查。结论是——${dg('我们中间有叛徒')}。而且这个叛徒，很可能就是刘半仙。\n\n但他现在不在苍龙镇。他在北边的柳城，开了一间算命铺子，改名换姓叫「半仙」。\n\n我需要你帮我确认——他到底是不是叛徒。\n\n如果是——我要亲手${dg('宰了他')}。如果不是——我给他道歉，跪着道歉。`);
    setFlag('zhao_traitor_quest');
    showChoices([
        { text: '「我帮你查。」', id: 'zhao_promise_traitor', effects: () => { setFlag('promised_zhao_traitor'); changeRel('zhao_tieniu', 12); }, next: () => {
                dialog('zhao_tieniu', '……谢了。你是第一个不觉得我小题大做的人。\n\n这三十六个兄弟——他们值得一个真相。不管真相是什么。');
                showChoices([{ text: '继续', next: SCENES['chapter2_hub'] }]);
            } },
        { text: '「你确定他是叛徒？」', id: 'zhao_doubt', next: () => {
                dialog('zhao_tieniu', '不确定。所以才需要查。我不想冤枉任何人——但也不想放过任何人。\n\n你能理解吧？');
                showChoices([{ text: '继续', next: SCENES['chapter2_hub'] }]);
            } },
    ]);
};
// ---- 胡青娘个人任务线 ----
SCENES['hu_personal_quest'] = () => {
    G.scene = 'hu_personal_quest';
    clearStory();
    narrate(`胡青娘把你带进药铺的密室。\n\n四面墙上的情报在烛光下闪烁——十年的心血，铺满了整个房间。`);
    dialog('hu_qingniang', '我跟你说过，我的情报网被渗透了。但我没告诉你——渗透我的人，很可能是我最信任的线人之一。');
    narrate(`她从墙上取下一张纸条。上面写着几个名字和日期。`);
    dialog('hu_qingniang', '过去三个月，有五条情报被泄露。每一条都对应着一个暴露的前朝遗臣。\n\n这五条情报，都经过了同一个人的手——我的副手，「青鸢」。');
    divider();
    narrate(`她的声音变得很轻。`);
    dialog('hu_qingniang', '青鸢是我十年前救回来的孤儿。我教她读书写字，教她收集情报，教她保护自己。我把她当亲妹妹看待。\n\n但如果她真的背叛了我……');
    narrate(`她没有说下去。但你能看到她的手在微微颤抖。`);
    dialog('hu_qingniang', `帮我找到证据。如果是青鸢——我会亲手处理。如果不是——我欠她一个天大的道歉。\n\n不管结果如何，我都需要${hl('真相')}。`);
    setFlag('hu_mole_quest');
    changeRel('hu_qingniang', 5);
    showChoices([
        { text: '「我会找到真相的。」', id: 'hu_promise_mole', effects: () => { setFlag('promised_hu_mole'); changeRel('hu_qingniang', 10); }, next: SCENES['chapter2_hub'] },
        { text: '「如果真是青鸢呢？你下得了手吗？」', id: 'hu_qingyuan', next: () => {
                dialog('hu_qingniang', '……下不了手也得下。在情报这一行，心软就是死。如果她出卖了我的人——那些人的血，我也得负一半责任。');
                setFlag('hu_resolute');
                showChoices([{ text: '继续', next: SCENES['chapter2_hub'] }]);
            } },
    ]);
};
// ---- 白云生个人任务线 ----
SCENES['bai_personal_quest'] = () => {
    G.scene = 'bai_personal_quest';
    clearStory();
    narrate(`白云生坐在窗边，月光照亮了他脸上的每一道疲惫的纹路。`);
    dialog('bai_yunsheng', '你知道吗——我来苍龙镇不是为了躲。我是因为一个遗愿。');
    narrate(`他从衣襟内侧取出一块旧丝帕，上面绣着几行字：\n\n${hl('"吾孙承渊：白家满门忠烈，不悔不怨。唯愿你替白家做最后一件事——找到天机卷，让天下人知道真相。真相，是最好的墓志铭。"\n\n——白太傅 绝笔')}`);
    divider();
    narrate(`白云生的手指在丝帕上轻轻抚摸，像是在触摸一个已经离去的人的脸。`);
    dialog('bai_yunsheng', '我爷爷——白太傅——前朝的三朝元老。他不是武将，不会打打杀杀。他只会写字、做学问、教导学生。但朝代更替那天，他选择了死——不是战死，是在家中自焚，连同他一生的著作一起化为灰烬。\n\n因为他不想让新朝用他的学问来粉饰太平。');
    narrate(`他的声音哽了一下。`);
    dialog('bai_yunsheng', `他的遗愿是让我找到天机卷——不是为了宝藏，不是为了权力——是为了让天下人知道，前朝有那么多人，他们不是「叛贼」，不是「乱党」。\n\n他们只是——${hl('不想忘记自己是谁的人')}。`);
    setFlag('bai_family_quest');
    changeRel('bai_yunsheng', 8);
    showChoices([
        { text: '「我帮你完成白太傅的遗愿。」', id: 'bai_promise_family', effects: () => { setFlag('promised_bai_family'); changeRel('bai_yunsheng', 12); G.charm += 1; }, next: SCENES['chapter2_hub'] },
        { text: '「天机卷不只是遗愿——它关乎上万人的命。」', id: 'bai_reality', next: () => {
                dialog('bai_yunsheng', '我知道。所以我不敢独占它。但至少——让我亲眼看一看天机卷。让我知道，我爷爷守护了一辈子的东西，到底是什么样子。');
                showChoices([{ text: '继续', next: SCENES['chapter2_hub'] }]);
            } },
    ]);
};
// ---- 黑无极个人任务线 ----
SCENES['hei_personal_quest'] = () => {
    G.scene = 'hei_personal_quest';
    clearStory();
    narrate(`你在后院的暗处找到了黑无极。他像一个影子一样融入了夜色——如果你不是刻意去找，根本不会发现他在那里。`);
    dialog('hei_wuji', '……你找我？很少有人会主动找我。');
    narrate(`他的声音意外地平静。没有白天的杀气，只有一种……${hl('倦怠')}。\n\n像是一个做了太多年同一件事的人，终于感到了疲惫。`);
    divider();
    dialog('hei_wuji', '你想知道我为什么来苍龙镇？不只是为了天机卷。\n\n我来——是因为沈孤雁在这里。');
    narrate(`他的眼神突然变得锐利。`);
    dialog('hei_wuji', '二十年前，沈孤雁——那时候他还叫沈承风——奉命清剿暗星阁。那一夜，他带着禁卫军冲进了我们的总部。我的师父——暗星阁最后一代阁主——死在了他的刀下。\n\n我那年十五岁。亲眼看着他杀了我师父。');
    divider();
    narrate(`他的手不自觉地按在了刀柄上，但很快又松开了。`);
    dialog('hei_wuji', '我恨了他二十年。做梦都想杀他。\n\n但是……');
    narrate(`他沉默了很久。月光在他脸上投下深重的阴影。`);
    dialog('hei_wuji', `但是三年前，我查到了那晚的真相。清剿暗星阁的命令，不是沈承风下的——是朝廷下的。他只是执行命令。而且——他在执行命令的时候，${hl('偷偷放走了七个孩子')}。\n\n我是那七个孩子之一。\n\n他放走了我。`);
    setFlag('hei_revenge_conflict');
    changeRel('hei_wuji', 8);
    showChoices([
        { text: '「所以你来找他——是为了报仇，还是为了道谢？」', id: 'hei_purpose', next: () => {
                narrate(`\n黑无极苦笑了一声——这是你第一次看到他笑。\n虽然那笑容比哭还难看。`);
                dialog('hei_wuji', '我不知道。我真的不知道。\n\n二十年的仇恨，突然发现恨错了人。这种感觉……你体会过吗？\n\n像是一把磨了二十年的刀，突然发现刀刃一直朝着自己。');
                setFlag('hei_conflicted');
                showChoices([{ text: '继续', next: SCENES['chapter2_hub'] }]);
            } },
        { text: '「放下仇恨吧。你有更重要的事——保护暗星阁的人。」', id: 'hei_let_go', effects: () => { setFlag('hei_let_go'); changeRel('hei_wuji', 10); G.charm += 1; }, next: () => {
                narrate(`\n黑无极沉默了很久。`);
                dialog('hei_wuji', '……也许你说得对。仇恨蒙蔽了我二十年。\n\n从今天起——我不为复仇而活。我为暗星阁剩下的七十多条命而活。');
                setFlag('hei_redemption');
                showChoices([{ text: '继续', next: SCENES['chapter2_hub'] }]);
            } },
    ]);
};
// ---- 结盟谈判场景 ----
SCENES['alliance_negotiation'] = () => {
    G.scene = 'alliance_negotiation';
    clearStory();
    narrate(`你站在客栈院子里，月光如洗。今晚的所有人——活着的——都在这里。\n\n沈孤雁、柳如烟、赵铁牛、白云生、胡青娘、小莲……还有暗处的黑无极。\n\n六个人（加上暗处那个七个），各怀心事，各有所求。但有一件事将他们联系在一起——${hl('天机卷')}。\n\n你深吸一口气，开口了：`);
    divider();
    dialog('', `${hl('「各位，今晚我们只有一个选择——合作，或者各自为战。\n\n天机卷的钥匙分散在不同人手里。任何一个人单独行动，都不会成功。\n\n所以我提议——我们结盟。」')}`);
    narrate(`你的声音在夜风中回荡。每个人都看着你，表情各异。\n\n沈孤雁——审视中带着赞许。\n柳如烟——冷淡中有一丝意外。\n赵铁牛——直接地点了点头。\n白云生——微微笑了笑。\n胡青娘——目光如刀，在算计利弊。\n黑无极——从暗处走出半步，然后又退了回去。`);
    setFlag('alliance_proposed');
    showChoices([
        { text: '「我来分配任务——沈老板守山，柳如烟负责情报，赵铁牛负责战斗……」', id: 'alliance_command', effects: () => { G.wits += 2; setFlag('alliance_leader'); }, next: SCENES['alliance_result'] },
        { text: '「你们自己选。我不当头——但我会确保每个人都信守承诺。」', id: 'alliance_democratic', effects: () => { G.charm += 2; setFlag('alliance_broker'); }, next: SCENES['alliance_result'] },
        { text: '「谁跟我去落雁峰，谁留下守镇——自愿。」', id: 'alliance_volunteer', effects: () => { G.charm += 1; setFlag('alliance_voluntary'); }, next: SCENES['alliance_result'] },
    ]);
};
SCENES['alliance_result'] = () => {
    G.scene = 'alliance_result';
    narrate(`\n经过一番讨论——有人犹豫，有人争论，有人沉默——最终达成了一个勉强但有效的共识。`);
    const allies = [];
    if (getRel('shen_guyan') > 10 || hasFlag('shen_alliance'))
        allies.push('沈孤雁');
    if (getRel('liu_ruyin') > 5 || hasFlag('liu_alliance'))
        allies.push('柳如烟');
    if (getRel('zhao_tieniu') > 5)
        allies.push('赵铁牛');
    if (hasFlag('bai_key') || getRel('bai_yunsheng') > 5)
        allies.push('白云生');
    if (hasFlag('hei_alliance') || hasFlag('hei_redemption'))
        allies.push('黑无极');
    if (allies.length > 0) {
        narrate(`\n愿意跟你上落雁峰的人：\n`);
        allies.forEach(a => narrate(`· ${a}`));
    }
    if (getRel('hu_qingniang') > 5) {
        narrate(`\n胡青娘选择留下守药铺——「你们去拿天机卷，我守后方。如果有人来偷袭镇子，我至少能挡一阵。」`);
    }
    divider();
    narrate(`天边泛起了一丝鱼肚白。\n\n${hl('天快亮了。')}\n\n黑无极给的最后期限就是天亮。\n\n必须——现在——出发。`);
    showChoices([
        { text: '出发前往落雁峰', id: 'alliance_to_mountain', next: SCENES['mountain_approach'] },
    ]);
};
// ---- 扩展结局：孤独结局（没有盟友） ----
SCENES['ending_lonely'] = () => {
    G.scene = 'ending';
    clearStory();
    narrate(`你独自一人来到落雁峰。\n\n没有盟友，没有后援。只有你手中的剑和怀里的玉牌。\n\n石壁前的战斗是你一个人的。\n\n黑无极的手下——你杀了一个，伤了两个，自己也挨了三刀。\n但你还是打开了石门。还是走到了天机卷面前。`);
    divider();
    narrate(`你拿起卷轴。\n\n一千七百个名字。近万条人命。\n\n没有人帮你分担这个重量。\n\n你站在空荡荡的石室里，看着手中的卷轴，突然觉得——好重。\n\n不是卷轴重。是${dg('选择')}重。\n\n没有人可以商量，没有人可以依靠，没有人会在你做错决定的时候拉你一把。`);
    divider();
    narrate(`你深吸一口气。\n\n做出了选择。独自承受一切后果。\n\n这就是孤独的代价——也是自由的代价。`);
    showEnding('独行者', 'ending_lonely', '没有人陪伴的路上，每一个选择都格外沉重。');
};
// ---- 扩展结局：完美结局（全员存活+天机卷封存） ----
SCENES['ending_perfect'] = () => {
    G.scene = 'ending';
    clearStory();
    narrate(`所有人一起走进了石室。\n\n沈孤雁、柳如烟、赵铁牛、白云生、胡青娘——甚至黑无极。\n\n这是你见过的最奇怪的组合。一个前朝遗臣、一个锦衣卫暗探、一个老兵铁匠、一个落魄书生、一个情报贩子、一个杀手——和一个无名剑客。\n\n七个人，七种过去，七条不同的路——在这一刻交汇。`);
    divider();
    narrate(`你拿起天机卷，展开它。\n\n在跳动的火把光中，一千七百个名字像是活了过来——每一个名字背后都是一个家庭，一段故事，一份不想被遗忘的过去。\n\n你没有撕碎它，也没有交给任何人。\n\n你把它重新卷好，放回石台上。然后——你将三块玉牌分别嵌入了凹槽旁边的一个隐藏机关里。`);
    divider();
    narrate(`${ok('「咔嗒。」')}\n\n机关启动。石壁开始缓缓合拢。\n\n你跳出石室，其他人紧随其后。\n\n石门在身后轰然关闭。从此以后——天机卷被封在了落雁峰深处，没有钥匙，没有机关，没有任何人能再打开它。`);
    divider();
    narrate(`沈孤雁长长地吐了一口气。`);
    dialog('shen_guyan', '十五年了。终于……可以安心了。');
    narrate(`柳如烟看着封闭的石壁，眼中闪过一丝释然。`);
    dialog('liu_ruyin', '我会告诉朝廷——天机卷在争夺中被毁。从此以后，没有人需要再为这份名单死了。');
    narrate(`赵铁牛拍了拍你的肩膀，什么也没说，只是用力握了握你的手。`);
    narrate(`白云生对着封闭的石门深深鞠了一躬。`);
    dialog('bai_yunsheng', '爷爷，您的遗愿——我完成了。天机卷不会害人了，但真相会一直活着。');
    narrate(`黑无极站在最远处，背着所有人。但你能看到他的肩膀微微放松了下来。`);
    dialog('hei_wuji', '……了了。二十年了，终于了了。');
    divider();
    narrate(`你走出山洞。\n\n日出东方，金色的阳光洒在落雁峰上，将每一个人的影子拉得很长很长。\n\n没有人说话。但每个人都笑了。\n\n不是大笑，不是苦笑，是一种经历了漫长黑夜后终于看到黎明的——${hl('微笑')}。\n\n苍龙镇在山脚下苏醒。新的一天开始了。\n\n而你——你知道自己还会继续走。江湖路远，但至少——这一夜，你没有走错。`);
    divider();
    narrate(`${hl('「江湖夜雨十年灯，一剑天涯万重山。\n 天机已封人事了，各赴前程莫相忘。」')}`);
    showEnding('天机封存·众人归途', 'ending_perfect', '最好的结局不是完美无缺，而是每个人都找到了自己的路。');
};
// ---- 扩展结局：悲剧结局（黑无极杀光所有人） ----
SCENES['ending_tragedy'] = () => {
    G.scene = 'ending';
    clearStory();
    narrate(`你的选择激怒了黑无极。\n\n他没有说话。只是一刀。\n\n一刀——赵铁牛的铁锤碎裂。\n一刀——沈孤雁的弯刀折断。\n一刀——白云生倒在了血泊中。\n\n他的刀法快到你根本看不清。等你看清的时候——身边的人已经都倒下了。`);
    divider();
    narrate(`${dg('你跪在地上。胸口的伤口在流血。')}黑无极站在你面前，手中的刀还在滴血。`);
    dialog('hei_wuji', '……我给过你机会。你选了最蠢的那条路。');
    narrate(`他俯身，从你怀中取出天机卷和所有玉牌。然后转身走向石壁。`);
    divider();
    narrate(`你的视线开始模糊。\n\n最后的画面——黑无极打开了石门，走了进去。\n然后，石壁重新关闭。\n\n一切归于黑暗。\n\n苍龙镇的那一夜，后来被称为——${dg('「血雨夜」')}。\n\n没有人知道那一夜到底发生了什么。\n只知道第二天早上，客栈里多了几具新的尸体。\n而天机卷——从此再也没有人见过。`);
    showEnding('血雨夜', 'ending_tragedy', '有些选择一旦做错，就没有回头路。');
};
