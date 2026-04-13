/// <reference path="../types.ts" />
// story_part10.js - 白云生完整任务线 + 黑无极互动
// 白云生：文雅精明的"醉鬼"书生，说话像猜谜
// 黑无极：寡言冷酷的杀手，有自己的原则

// ---- 白云生任务：起始 ----
SCENES['bai_quest_start'] = () => {
  G.scene = 'bai_quest_start';
  G.location = '听雨客栈';
  narrate(`白天，白云生永远是醉醺醺的。他趴在客栈角落的桌子上，面前永远摆着一壶烧刀子——喝得慢，但从未停过。\n\n但今天不一样。\n\n你中午下楼的时候，发现白云生不在他惯常的位置。问了沈孤雁，说他一大早就出门了——没带酒壶。\n\n这很不寻常。\n\n你决定去找他。在镇子里转了一圈，最后在镇东的旧书摊上找到了他——他蹲在地上，翻着一堆发黄的书卷，表情清醒得像另一个人。\n\n他的眼神锐利而专注，完全没有白天那种迷蒙的醉态。他在翻找什么——而且非常认真。\n\n看到你走近，他的手顿了一下，然后若无其事地打了个酒嗝。\n\n「嗝——哟，是你啊。我……我在找一本好书。咳咳……你看这些破书，都是些没用的东西……」\n\n但他试图遮挡的那本书，你看到了封面——${hl('《苍龙镇志·山川卷》')}。`);
  divider();
  showChoices([
    { text: '「白云生，你清醒的时候比醉的时候有意思多了。」', id: 'bq_sober', effects: () => { G.wits += 1; changeRel('bai_yunsheng', 3); }, next: SCENES['bai_quest_sober'] },
    { text: '「你在找关于落雁峰的资料？」', id: 'bq_mountain', effects: () => { G.wits += 2; setFlag('asked_bai_mountain'); }, next: SCENES['bai_quest_sober'] },
    { text: '（默默蹲下来帮他翻书）', id: 'bq_help', effects: () => { changeRel('bai_yunsheng', 5); G.charm += 1; }, next: SCENES['bai_quest_sober'] },
  ]);
};

SCENES['bai_quest_sober'] = () => {
  G.scene = 'bai_quest_sober';
  narrate(`白云生看了你一眼。他的眼神在你脸上停留了三秒——像是在评估什么。\n\n然后，他做了一个出乎意料的动作。他把那本镇志合上，站起来，拍了拍衣服上的灰。\n\n「跟我来。」他说。声音完全清醒，没有任何醉意。\n\n他带你来到镇外的一棵老樟树下。四下无人，只有风吹树叶的沙沙声和远处河水的哗哗声。\n\n白云生靠在树干上，看着远处的落雁峰。峰顶被云雾遮住了，只能看到山腰以下的松树林。\n\n「你不是醉鬼。」你说。\n\n「我从来没说过我是。」他笑了——不是白天那种傻笑，而是一种带着深意的微笑。「我只是想让别人以为我是。」\n\n「三年的伪装——为了什么？」\n\n「为了一个答案。」他收起笑容，「我在查一件事。查了三年。这三年里，我扮演了无数个角色——书生、商人、醉鬼、游侠。每一个身份都让我接近了答案一点点。」`);
  divider();
  narrate(`他看着你。\n\n「我在查天机卷。」\n\n他不再绕弯子了。\n\n「我爷爷——白太傅——三十年前因为天机卷被满门抄斩。全家一百三十七口，只活了我一个。我那年三岁——被一个老仆藏在柴房的暗格里，才逃过一劫。」\n\n他的声音平静得可怕。\n\n「白太傅不是前朝遗臣。他是当朝的太傅——一个忠臣。但他发现了天机卷的存在，认为这份名单应该交给朝廷处理，而不是由一个秘密组织守护。他写了一份奏折——然后奏折还没送到皇帝手里，他就被杀了。」\n\n「杀他的人——不是朝廷，而是${hl('天机卷的守护者')}。」\n\n${dg('你愣住了。沈孤雁——温文尔雅的客栈老板——他所属的组织，杀了白云生的全家？')}`);
  divider();
  setFlag('bai_revealed_quest');
  setFlag('know_bai_grudge');
  showChoices([
    { text: '「沈孤雁知道你是白太傅的孙子吗？」', id: 'bq_shen_knows', effects: () => { G.wits += 2; }, next: SCENES['bai_quest_shenknows'] },
    { text: '「所以你要报仇？」', id: 'bq_revenge', effects: () => { G.wits += 1; }, next: SCENES['bai_quest_revenge'] },
    { text: '「你确定白太傅是被守护者杀的？」', id: 'bq_sure', effects: () => { G.wits += 2; }, next: SCENES['bai_quest_sure'] },
  ]);
};

SCENES['bai_quest_shenknows'] = () => {
  G.scene = 'bai_quest_shenknows';
  narrate(`白云生点了点头。\n\n「他知道。我们从第一天见面就知道了。」\n\n「……你们一直在演戏？」\n\n「不是演戏。是……观察。他在观察我有没有威胁。我在观察他到底是个什么样的人。」\n\n他叹了口气。\n\n「三年了。我越观察越发现——事情不像我一开始想的那样简单。沈孤雁不是一个冷血杀手。他是一个……好人。一个背负着巨大压力的好人。」\n\n「但这不意味着我会放弃。我全家一百三十七条人命——不是一句『他是好人』就能抹掉的。」`);
  divider();
  showChoices([
    { text: '「你要怎么办？」', id: 'bq_what_plan', next: SCENES['bai_quest_plan'] },
    { text: '「也许事情有别的解释。」', id: 'bq_other_explanation', effects: () => { G.wits += 1; }, next: SCENES['bai_quest_plan'] },
  ]);
};

SCENES['bai_quest_revenge'] = () => {
  G.scene = 'bai_quest_revenge';
  narrate(`白云生沉默了一会儿。\n\n「报仇……」他重复了一遍，「三十五年了。你觉得我活到今天是为了报仇？」\n\n他苦笑着摇头。\n\n「报仇是最没用的东西。你杀了一个人，一百三十七个人也活不过来。」\n\n「但——真相不一样。我想知道那天晚上到底发生了什么。我爷爷到底做了什么让守护者下此毒手。是不是守护者判断失误，杀了一个不该杀的人。」\n\n「如果是我爷爷错了——我可以接受。如果是守护者错了——那这个组织就不是一个值得守护天机卷的组织。」\n\n${hl('他要的不是报仇，而是正义。一个被灭了全家的人，等了三十五年，只想知道——谁对谁错。')}`);
  setFlag('bai_seeks_truth_not_revenge');
  divider();
  showChoices([
    { text: '「我帮你找到真相。」', id: 'bq_help_truth', effects: () => { changeRel('bai_yunsheng', 10); setFlag('bai_quest_accepted'); }, next: SCENES['bai_quest_plan'] },
    { text: '「这很危险。守护者不会让你看到真相。」', id: 'bq_danger', effects: () => { G.wits += 1; }, next: SCENES['bai_quest_plan'] },
  ]);
};

SCENES['bai_quest_sure'] = () => {
  G.scene = 'bai_quest_sure';
  narrate(`白云生从怀里取出一封信——纸质发黄，但保存得很好。\n\n「这是当年老仆人从火场中抢救出来的。白太府的密室里有一份文件——是守护者给白太傅的最后通牒。」\n\n他展开信，让你看：\n\n${dg('「白太傅台鉴：天机卷之事乃苍天机密，非一人可决。汝欲将此卷上奏朝廷，实为不智之举。若汝坚持己见，守护者将不得已而采取行动。此为最后警告。——孤雁」')}\n\n「孤雁。」你重复了一遍——这不是沈孤雁的名字。每一代守护者都叫「孤雁」。\n\n「白太傅没有理会警告。三天后——满门抄斩。」\n\n「但——」白云生的眉头紧锁，「这里面有一个不对的地方。白太傅的奏折里说，他想把天机卷交给皇帝——但奏折的草稿我看过，里面写的是『请圣上定夺，是否公开此卷』。这不是要揭发名单上的人——而是让皇帝决定这份名单的处置方式。」\n\n「守护者为什么要阻止他？」`);
  divider();
  setFlag('bai_quest_accepted');
  showChoices([
    { text: '「因为守护者不相信任何当权者。」', id: 'bq_trust', next: SCENES['bai_quest_plan'] },
    { text: '「也许守护者有别的苦衷。」', id: 'bq_reason', next: SCENES['bai_quest_plan'] },
  ]);
};

SCENES['bai_quest_plan'] = () => {
  G.scene = 'bai_quest_plan';
  narrate(`白云生看着远处的落雁峰。\n\n「天机卷在山上。答案也在山上。我已经等了三年——不差这几天了。」\n\n他从怀里取出一本小册子——里面密密麻麻地写满了字。\n\n「这是我三年来搜集的所有线索。包括：守护者的传承方式、天机卷的大致藏匿位置、以及——三十年前白太傅案的五个目击者证词。」\n\n「五个目击者——四个已经死了。最后一个还活着——在苍龙镇。」\n\n「谁？」\n\n他看着你。\n\n「${hl('老孙头')}。那个天天在河边钓鱼的老头。他三十年前就在苍龙镇了。他什么都看到了。」`);
  divider();
  setFlag('bai_quest_active');
  addItem('白云生的调查笔记');
  showChoices([
    { text: '「我们去找老孙头。」', id: 'bq_find_oldsun', next: SCENES['lobby_free'] },
    { text: '「我会保守你的秘密——暂时。」', id: 'bq_keep_secret', effects: () => { changeRel('bai_yunsheng', 5); }, next: SCENES['lobby_free'] },
  ]);
};

// ---- 白云生回忆：落第与流浪 ----
SCENES['bai_backstory_1'] = () => {
  G.scene = 'bai_backstory_1';
  narrate(`白云生靠在老樟树上，开始说起自己的过去。\n\n${hl('——三十二年前·京城——')}\n\n「我三岁被老仆人带出白府的时候，什么都不记得。关于白家的记忆——全是老仆人后来讲给我听的。」\n\n「老仆人叫白福——跟了白家四十年。他用自己攒的一点积蓄把我养到了十五岁。他教我读书、写字、做人的道理。」\n\n「十五岁那年，白福死了。临死前他告诉我——你是白太傅的孙子。白家是被守护者灭门的。你有两个选择：第一，忘掉这一切，做一个普通人。第二，找到真相。」\n\n「他说完这些话，就闭上了眼睛。」\n\n白云生的声音很平静，但你能听出来——这份平静是经过了三十五年的打磨才得到的。\n\n「我选了第二个。」`);
  divider();
  setFlag('heard_bai_memory_1');
  showChoices([
    { text: '「然后呢？」', id: 'bb1_next', next: SCENES['bai_backstory_2'] },
  ]);
};

SCENES['bai_backstory_2'] = () => {
  G.scene = 'bai_backstory_2';
  narrate(`${hl('——十八岁·殿试——')}\n\n「白福生前最大的心愿是让我考取功名。他总说——白太傅是读书人，你也应该走读书人的路。」\n\n「十八岁那年，我参加了殿试。文章写得不错——至少我自己觉得不错。但最后名落孙山。」\n\n「不是因为我写得不好。而是因为——考官在面试时问了我一个问题：『你是哪里人？』」\n\n「我说了一个编造的籍贯。但考官看了看我，说：『你姓白。白姓在京城……有点敏感。』」\n\n「就这样。一句话，十年寒窗白费了。」\n\n白云生笑了——带着苦涩。\n\n「从那以后，我就再也不相信什么功名了。我决定用自己的方式找到真相——不做官，不求助任何人。一个人，走遍天下，找到答案。」`);
  divider();
  setFlag('heard_bai_memory_2');
  showChoices([
    { text: '「三十五年了。你不累吗？」', id: 'bb2_tired', effects: () => { changeRel('bai_yunsheng', 5); }, next: SCENES['bai_backstory_3'] },
  ]);
};

SCENES['bai_backstory_3'] = () => {
  G.scene = 'bai_backstory_3';
  narrate(`白云生想了想。\n\n「累。但不是你想象的那种累。不是走路的累——走路不累。累的是——演了三十五年的戏，到最后你不确定自己还有没有真实的部分。」\n\n「我做过商人——在江南卖丝绸。做过教书先生——在山村里教孩子念书。做过游方郎中——虽然医术一塌糊涂。甚至做过一段时间的镖师——虽然武功也不怎么样。」\n\n「每一个身份都让我学到了一些东西。商人教我算计，先生教我观察，郎中教我耐心，镖师教我判断危险。」\n\n「但这些身份——都不是我。」\n\n他看着自己的手。\n\n「白云生这个名字是假的。但我用了三十五年——它比我的真名更像我的名字了。也许人就是这样——你以为你在演戏，但演着演着，戏就变成了真的。」`);
  divider();
  setFlag('heard_bai_memory_3');
  changeRel('bai_yunsheng', 5);
  showChoices([
    { text: '「你不需要再演了。至少在我面前不用。」', id: 'bb3_real', effects: () => { changeRel('bai_yunsheng', 8); G.charm += 2; }, next: SCENES['lobby_free'] },
    { text: '继续探索', id: 'bb3_continue', next: SCENES['lobby_free'] },
  ]);
};

// ---- 黑无极：遭遇场景 ----
SCENES['hei_encounter_1'] = () => {
  G.scene = 'hei_encounter_1';
  G.location = '镇外山路';
  narrate(`你在镇外的山路上遇到了一个人。\n\n不——不是遇到。是他选择了让你看到他。\n\n他站在路中间，一动不动。黑色的衣袍，黑色的面巾，黑色的长刀——从头到脚都是黑色，像是夜色凝成了一个具体的人形。\n\n${danger('黑无极。')}\n\n你听说过这个名字——江湖上排名第一的杀手。据说他出手从未失手，据说他杀人从不留痕迹，据说他只接值得接的活。\n\n而现在，他站在你面前。`);
  divider();
  narrate(`他看了你一眼。那双眼睛——在面巾上方——是灰色的，像两块没有温度的石头。\n\n他开口了。声音低沉而平淡，像是在说一件与自己无关的事。\n\n「你不是暗星阁的人。」\n\n不是问句。是判断。\n\n「你不是来杀我的。」\n\n也是判断。\n\n「那你是什么人？」\n\n这次是问句。但语气没有任何好奇——像是在确认一个已经知道答案的问题。`);
  divider();
  showChoices([
    { text: '「路过的旅客。」', id: 'he1_traveler', effects: () => { G.wits += 1; }, next: SCENES['hei_encounter_neutral'] },
    { text: '「我可以是你的人。也可以是你的敌人。看你的选择。」', id: 'he1_choice', effects: () => { G.charm += 1; }, next: SCENES['hei_encounter_negotiate'] },
    { text: '（拔剑）', id: 'he1_fight', req: [[() => req('sword', 15), '剑术≥15']], next: SCENES['hei_encounter_fight'] },
    { text: '「黑无极。久仰。」', id: 'he1_polite', effects: () => { G.charm += 2; changeRel('hei_wuji', 3); }, next: SCENES['hei_encounter_polite'] },
  ]);
};

SCENES['hei_encounter_neutral'] = () => {
  G.scene = 'hei_encounter_neutral';
  narrate(`黑无极看了你一眼。\n\n「路过的旅客不会在这个时候出现在这条路上。这条路通往落雁峰——普通人不会走。」\n\n他没有威胁的意思——只是在陈述事实。就像一个猎人能分辨哪些脚印是猎物的，哪些不是。\n\n「但你不像是来找麻烦的。」他继续说，「找麻烦的人不会独自一人，不会不带暗器，不会走路的时候还在观察风向。」\n\n「你是个武人。」他下结论，「而且是个好武人。好到让我觉得——你可能值得说几句话。」\n\n他往前走了一步。你注意到他的脚步——无声无息，像是脚底有某种特殊的设计，或者是经过常年的训练。\n\n「落雁峰上有什么——我不关心。」他说，「我来苍龙镇，是为了一桩私人事务。但如果你挡在我和我的目标之间——我不会犹豫。」`);
  divider();
  changeRel('hei_wuji', 2);
  showChoices([
    { text: '「你的目标是谁？」', id: 'he1_target', effects: () => { G.wits += 1; }, next: SCENES['hei_encounter_target'] },
    { text: '「我不会挡你的路。」', id: 'he1_noblock', effects: () => { changeRel('hei_wuji', 3); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['hei_encounter_negotiate'] = () => {
  G.scene = 'hei_encounter_negotiate';
  narrate(`黑无极的眼神微微一变——不是惊讶，而是……兴趣。\n\n「有意思。」他说，「大多数人见到我会跑，或者拔剑。你是第一个说『看我的选择』的人。」\n\n他往前走了一步。\n\n「那就看我的选择。」\n\n他伸出手——不是攻击，而是从怀里取出一枚令牌。令牌是黑色的，上面刻着一颗星星。\n\n${danger('暗星阁的令牌。')}\n\n「我是暗星阁的杀手。这是我的令牌。如果你是暗星阁的敌人——你现在已经死了。如果你不是——」\n\n他把令牌收回怀里。\n\n「我们可以谈谈。」`);
  divider();
  setFlag('hei_showed_token');
  showChoices([
    { text: '「谈什么？」', id: 'he1_talk_what', next: SCENES['hei_encounter_talk'] },
  ]);
};

SCENES['hei_encounter_polite'] = () => {
  G.scene = 'hei_encounter_polite';
  narrate(`黑无极的眼睛微微眯了一下——这是他最接近表情变化的动作了。\n\n「久仰？」他重复了一遍，「你知道我的名字？」\n\n「江湖上谁不知道。」\n\n「那你还敢站在这里？」\n\n「站着说话比跪着舒服。」\n\n黑无极沉默了两秒。然后——你不确定——但他的面巾后面似乎有一个微不可察的动作。也许是笑了。\n\n「你有点意思。」他说，「在苍龙镇遇到一个不怕我的人——这还是第一次。」\n\n他侧过身，让出了路。\n\n「走吧。今天不杀你。」\n\n「改天呢？」\n\n「改天的事改天再说。」`);
  divider();
  changeRel('hei_wuji', 5);
  setFlag('hei_respects_you');
  showChoices([
    { text: '继续走你的路', id: 'he1_polite_go', next: SCENES['lobby_free'] },
    { text: '「等等——你为什么来苍龙镇？」', id: 'he1_polite_why', effects: () => { G.wits += 1; }, next: SCENES['hei_encounter_target'] },
  ]);
};

SCENES['hei_encounter_fight'] = () => {
  G.scene = 'hei_encounter_fight';
  narrate(`你拔剑。\n\n黑无极没有动。他只是看着你的剑——看了三秒——然后做了一个你意想不到的动作。\n\n他笑了。\n\n不是嘲讽的笑——是一种欣赏。\n\n「你的剑不错。」他说，「拔剑的姿势干净利落，没有多余的动作。但——」\n\n他的手轻轻一动。\n\n你的剑从中间断了。\n\n不是砍断的——你甚至没有看到他出手。只是听到「叮」的一声，你的剑就变成了两截。\n\n「还不够快。」他说。\n\n${dg('差距太大了。你甚至没有看清他的动作。这就是江湖第一杀手——黑无极。')}\n\n他转身离去，没有回头。\n\n「下次拔剑之前——先想想值不值得。」`);
  addHp(-15);
  setFlag('lost_to_hei');
  changeRel('hei_wuji', -3);
  divider();
  showChoices([
    { text: '……', id: 'he1_fight_after', next: SCENES['lobby_free'] },
  ]);
};

SCENES['hei_encounter_target'] = () => {
  G.scene = 'hei_encounter_target';
  narrate(`黑无极沉默了一会儿。\n\n「我的目标——」他说，「是一个人。一个我不想杀的人。」\n\n这是你第一次从黑无极嘴里听到带有情绪的话。虽然他的语气依然平淡，但措辞本身说明了一切——${hl('一个杀手不想杀他的目标。')}\n\n「暗星阁给了我一个任务。杀一个叫秦无悔的人。他是暗星阁的前成员——三年前叛逃了。暗星阁想要他的命。」\n\n他看着你。\n\n「但秦无悔——是我的师弟。」`);
  divider();
  setFlag('know_hei_target_qin');
  showChoices([
    { text: '「你的师弟？你是百草仙的弟子？」', id: 'he1_target_master', effects: () => { G.wits += 2; }, next: SCENES['hei_backstory_brief'] },
    { text: '「你打算怎么办？」', id: 'he1_target_plan', next: SCENES['hei_deal_branch'] },
  ]);
};

SCENES['hei_encounter_talk'] = () => {
  G.scene = 'hei_encounter_talk';
  narrate(`黑无极想了想。\n\n「暗星阁派我来杀一个叛逃者。但我发现——苍龙镇上还有其他人也在找天机卷。各方势力交织在一起——比暗星阁告诉我的复杂得多。」\n\n「暗星阁的命令很简单——杀人就走。但我做杀手二十年，有一条原则——」\n\n他看着你。\n\n「${hl('不杀无辜的人。只杀该死的人。')}」\n\n「但在苍龙镇，我分不清谁是无辜的，谁是该死的。所以——我需要一个了解情况的人。你看起来像是。」`);
  divider();
  showChoices([
    { text: '「我可以告诉你一些事——但你也要告诉我一些。」', id: 'he1_talk_deal', effects: () => { changeRel('hei_wuji', 3); setFlag('hei_info_deal'); }, next: SCENES['hei_deal_branch'] },
    { text: '「先告诉我——你到底是谁。」', id: 'he1_talk_who', next: SCENES['hei_backstory_brief'] },
  ]);
};

// ---- 黑无极回忆：简要 ----
SCENES['hei_backstory_brief'] = () => {
  G.scene = 'hei_backstory_brief';
  narrate(`黑无极沉默了很久。\n\n「我的真名不叫黑无极。」他终于开口了，「我叫……算了。那个名字已经不重要了。」\n\n「我是百草仙的第三个弟子。胡青娘是第二个，秦无悔是第四个。大师兄——在我来之前就死了。」\n\n「师父教我用毒。但我天赋不如秦无悔——我学不会那些精妙的配方。但我有一样本事比他们都强。」\n\n他举起手。你注意到他的手——指节修长，指腹上有一层薄茧。\n\n「我快。」他说，「比任何人都快。快到毒药用不上的程度。所以——我成了杀手。」\n\n「不是因为我喜欢杀人。而是因为——在这个世上，杀手的收入最高。师父死后药庐被烧了，我需要钱。秦无悔当时还小，胡青娘还在流浪。我选择了最赚钱的路。」`);
  divider();
  narrate(`「二十年了。我杀了……很多人。但每杀一个人，我都会确认一件事——这个人该不该死。暗星阁知道我的规矩，所以给我安排的目标都是十恶不赦之人。」\n\n「但这一次——秦无悔——他是我的师弟。他也许做了一些错事，但他不是十恶不赦的人。他是一个走错了路的聪明人。」\n\n${hl('二十年的杀手生涯。第一次接到了一个不想执行的任务。这就是为什么黑无极会在苍龙镇徘徊——不是在找目标，而是在做一个决定。')}`);
  setFlag('heard_hei_backstory');
  changeRel('hei_wuji', 5);
  divider();
  showChoices([
    { text: '「你不杀他。就这么简单。」', id: 'hb_dont_kill', effects: () => { changeRel('hei_wuji', 8); setFlag('hei_spared_qin'); }, next: SCENES['hei_deal_branch'] },
    { text: '「带他来见胡青娘。让他们师姐弟自己解决。」', id: 'hb_to_hu', effects: () => { G.wits += 2; setFlag('hei_bring_to_hu'); }, next: SCENES['hei_deal_branch'] },
    { text: '「帮暗星阁完成任务，拿到赏金——然后用赏金帮秦无悔改名换姓，重新开始。」', id: 'hb_clever', effects: () => { G.wits += 3; setFlag('hei_clever_plan'); }, next: SCENES['hei_deal_branch'] },
  ]);
};

// ---- 黑无极：交易/对抗分支 ----
SCENES['hei_deal_branch'] = () => {
  G.scene = 'hei_deal_branch';
  G.location = '山路';

  if (getRel('hei_wuji') > 10) {
    SCENES['hei_deal_ally']();
  } else if (getRel('hei_wuji') > 0) {
    SCENES['hei_deal_neutral']();
  } else {
    SCENES['hei_deal_hostile']();
  }
};

SCENES['hei_deal_ally'] = () => {
  narrate(`黑无极看着你——他灰色的眼睛里第一次出现了一种不同的东西。不是感激——杀手不会感激。而是一种……认可。\n\n「你是我二十年杀手生涯中遇到的第三个让我觉得……活着不只是杀人和赚钱的人。」\n\n「前两个是谁？」你问。\n\n「师父。和胡青娘。」\n\n他转身看向落雁峰。\n\n「我决定了。秦无悔——我不杀他。我会找到他，把他带去见胡青娘。她比我更有资格决定他的命运——她是师姐。」\n\n${ok('一个杀手做出了不杀人的选择。这不是软弱——这是自由。')}`);
  setFlag('hei_quest_complete');
  setFlag('hei_ally');
  changeRel('hei_wuji', 10);
  divider();
  showChoices([
    { text: '继续', id: 'hd_ally_continue', next: SCENES['lobby_free'] },
  ]);
};

SCENES['hei_deal_neutral'] = () => {
  narrate(`黑无极想了想。\n\n「你的建议我会考虑。」他说，「但我需要更多的时间。」\n\n他看着你的眼睛。\n\n「如果你在山上遇到秦无悔——不要杀他。也不要让他跑了。把他带到枯松谷——胡青娘在那里。让他们师姐弟自己解决。」\n\n「你不自己去？」\n\n「我有别的事要做。暗星阁在苍龙镇还有其他人——我需要确认他们不会在关键时刻出现。」\n\n他转身走进了山林。背影像一道黑色的影子——无声、无息、无处可寻。`);
  setFlag('hei_quest_complete');
  divider();
  showChoices([
    { text: '继续', id: 'hd_neutral_continue', next: SCENES['lobby_free'] },
  ]);
};

SCENES['hei_deal_hostile'] = () => {
  narrate(`黑无极的表情没有变化——但空气中的温度似乎降了几度。\n\n「我给了你机会。」他说，「但你没有抓住。」\n\n他的手摸向腰间。黑色的长刀出鞘的声音——像一声叹息。\n\n「下次我们见面——希望你不是我的目标。」\n\n他没有动手。但这个警告——比任何刀剑都更让人脊背发凉。\n\n${dg('你成功地得罪了江湖第一杀手。祝你好运。')}`);
  changeRel('hei_wuji', -5);
  setFlag('hei_hostile');
  divider();
  showChoices([
    { text: '……', id: 'hd_hostile_continue', next: SCENES['lobby_free'] },
  ]);
};

// ---- 白云生完整回忆：殿试后 ----
SCENES['bai_backstory_full'] = () => {
  G.scene = 'bai_backstory_full';
  narrate(`白云生坐在客栈的窗边，第一次没有喝酒。\n\n「殿试落第之后，我在京城流浪了三年。做苦力、抄书、替人写信——什么都干。」\n\n「那时候我二十出头，什么都不懂。只知道自己姓白，全家被杀了，凶手是一个叫『守护者』的秘密组织。」\n\n「我到处打听——没人知道守护者是什么。我去翰林院找白太傅的旧档案——被告知档案已被销毁。我去白府旧址——已经变成了一座道观。」\n\n「所有的痕迹都被清除了。像是白家从未存在过。」\n\n他看着窗外。\n\n「直到有一天——我在旧书摊上发现了一本手抄本。手抄本的封面没有字，但扉页上有一行小字：${hl('「孤雁」')}。」\n\n「孤雁——守护者的代号。每一代守护者都叫孤雁。这本手抄本记录了守护者从第一代到第五代的传承历史。最后一条记录停在三十年前——第五代守护者将位置传给了第六代。」\n\n「第六代——就是三十年前下令灭白家满门的那个人。」`);
  divider();
  narrate(`「我花了五年追踪第六代守护者的下落。最终发现他已经死了——十年前病死的。但天机卷传给了第七代。」\n\n「第七代——就是现在的沈孤雁。」\n\n「我花了又五年追踪他的下落。从江南到岭南，从岭南到西南——最后，三年前，我找到了苍龙镇。」\n\n「我假装成一个醉鬼书生，在客栈住下。白天装醉，晚上调查。三年来——我终于把所有的碎片拼到了一起。」\n\n「但拼完之后——我发现答案比我想象的复杂得多。」\n\n他的眼神变得疲惫。\n\n「白太傅不是被守护者冤杀的。或者说——不完全是。当年白太傅要上奏朝廷的奏折……被暗星阁截获了。暗星阁利用白太傅的奏折来追踪天机卷上的名单。」\n\n「守护者灭白家——不是为了灭口，而是为了${hl('阻止名单泄露')}。白太傅的奏折里附了一份名单副本——如果奏折到达皇帝手中之前被暗星阁截获……一千二百个家族就完了。」\n\n「所以守护者做了一个不可能的选择——杀一个忠臣全家，保全一千二百个忠臣的家族。」\n\n${dg('一百三十七条人命，换一千二百个家族的命。从数字上看，是合理的。但从人心上看——谁能做这样的选择？又有谁能承受这样的选择？')}`);
  divider();
  setFlag('heard_bai_full_truth');
  changeRel('bai_yunsheng', 8);
  showChoices([
    { text: '「你现在打算怎么办？」', id: 'bb_full_plan', next: SCENES['lobby_free'] },
    { text: '「这不是你能决定的正义。但你有权利知道真相。」', id: 'bb_full_justice', effects: () => { changeRel('bai_yunsheng', 5); }, next: SCENES['lobby_free'] },
  ]);
};

// ---- 第二次黑无极遭遇 ----
SCENES['hei_encounter_2'] = () => {
  G.scene = 'hei_encounter_2';
  G.location = '苍龙河边';
  narrate(`黄昏时分，你在苍龙河边遇到了黑无极。\n\n这一次他没有站在路中间——他坐在河边的一块大石头上，面巾摘了下来，露出一张普通的、略显疲惫的脸。颧骨很高，嘴唇很薄，下巴上有一道浅浅的疤痕。\n\n他在钓鱼。\n\n江湖第一杀手——在苍龙河边钓鱼。这个画面如此不协调，以至于你一时间不知道该做什么反应。\n\n他听到你的脚步声，转过头来。\n\n「你来得好。鱼不上钩。」他说——语气和上次完全不同，不再是冷冰冰的杀手，而是一个……无聊的人。\n\n「你也会无聊？」\n\n「杀手也是人。人不杀人就会无聊。」\n\n他重新看向河面。夕阳把河水染成了金红色，柳树的倒影在水中轻轻摇曳。`);
  divider();
  showChoices([
    { text: '坐下来陪他钓鱼', id: 'he2_sit', effects: () => { changeRel('hei_wuji', 5); }, next: SCENES['hei_encounter_fishing'] },
    { text: '「找到秦无悔了吗？」', id: 'he2_qin', effects: () => { G.wits += 1; }, next: SCENES['hei_encounter_qin'] },
    { text: '不打扰他，悄悄走开', id: 'he2_leave', next: SCENES['lobby_free'] },
  ]);
};

SCENES['hei_encounter_fishing'] = () => {
  G.scene = 'hei_encounter_fishing';
  narrate(`你在他旁边坐下。他没有递鱼竿给你——但他把身旁的鱼篓往你那边推了推。里面有几条小鱼，在篓子里扑腾。\n\n「你在这里钓鱼多久了？」你问。\n\n「一个时辰。」他说，「钓了三条。都是小鱼。这种鱼做汤不错——可惜我不会做。」\n\n「杀手不需要会做饭。」\n\n「杀手需要会做很多事。但做饭不在其中。」\n\n你们沉默了一会儿。河面上的金光渐渐变暗，天边的云被染成了紫红色。远处有一只白鹭掠过水面，留下一串涟漪。\n\n「你知道我为什么喜欢钓鱼吗？」黑无极忽然说。\n\n「为什么？」\n\n「因为钓鱼需要耐心。和杀人一样——但钓鱼不会有任何人死。」\n\n${hl('一个杀手在河边钓鱼——因为他厌倦了杀人。也许从一开始，他就厌倦了。')}`);
  divider();
  setFlag('hei_fishing_moment');
  changeRel('hei_wuji', 5);
  showChoices([
    { text: '「你不想再做杀手了。」', id: 'he2_quit', effects: () => { changeRel('hei_wuji', 5); setFlag('hei_wants_out'); }, next: SCENES['lobby_free'] },
    { text: '「教我钓鱼。」', id: 'he2_learn', effects: () => { changeRel('hei_wuji', 8); G.wits += 1; setFlag('learned_fishing_from_hei'); }, next: SCENES['lobby_free'] },
  ]);
};

SCENES['hei_encounter_qin'] = () => {
  G.scene = 'hei_encounter_qin';
  narrate(`黑无极的表情微微一变。\n\n「找到了。」他说，「他在枯松谷附近的一个山洞里——就是胡青娘制药室旁边的那个。」\n\n「你们见面了？」\n\n「见了。」他沉默了一下，「他变了。不是我想象中的样子。他看起来……很害怕。很疲惫。也许还有一点后悔。」\n\n「你怎么做的？」\n\n「什么都没做。」他说，「我只是站在他面前。他看到我——先是恐惧，然后是绝望，最后是一种奇怪的平静。」\n\n「他说：『师兄，你来杀我的吗？』」\n\n「我说：『还没决定。』」\n\n「然后他笑了——笑得很苦。他说：『没关系。如果我该死，我死在你手里比死在暗星阁手里好。至少你不会让我多受罪。』」\n\n黑无极看着河面。\n\n「这就是我的师弟。二十年了——还是那个会用毒药欺负人的小鬼。只是现在，他自己也成了被毒药折磨的人。」`);
  divider();
  setFlag('hei_found_qin');
  showChoices([
    { text: '「你打算怎么办？」', id: 'he2_qin_plan', next: SCENES['hei_deal_branch'] },
  ]);
};

// ---- 黑无极：第三次遭遇（高好感度专属） ----
SCENES['hei_encounter_3'] = () => {
  G.scene = 'hei_encounter_3';
  // req: [[() => getRel('hei_wuji') > 15, '黑无极高好感度']],
  G.location = '听雨客栈外';
  narrate(`深夜。你在客栈外面透气的时候，发现黑无极站在客栈门口的灯笼下。\n\n他没戴面巾。灯光照在他脸上——你第一次完整地看到了江湖第一杀手的脸。不是你想象中的凶狠或者冷酷——而是一张普通的中年男人的脸。有些疲惫，有些苍老，但眼神依然锐利。\n\n他手里拿着一壶酒。\n\n「喝酒？」他递过来。\n\n你接过酒壶喝了一口。是烧刀子——和白云生每天喝的一样。\n\n「白云生推荐你来的？」你问。\n\n「不。我自己来的。」他说，「有些话——白天说不出来。只有喝酒的时候才能说。」\n\n你们靠在客栈的墙上，一人一口地传着酒壶。夜风从苍龙河的方向吹来，带着水草和泥土的气味。\n\n「我做杀手二十年。」他忽然说，「杀了七十一个人。每一个我都记得。」`);
  divider();
  narrate(`「七十一个人。有的该死，有的也许不该死。但我从来没杀过一个无辜的人——这是我的底线。」\n\n「第二十七个——是一个贪官。他贪了赈灾银，导致三万人饿死。我杀他的时候，他在吃燕窝粥。」\n\n「第四十三个——是一个杀人的镖师。他杀了雇主全家，卷走了镖银。我找到他的时候，他在赌坊里挥霍。」\n\n「第六十九个——是一个卖国求荣的将军。他把边防图卖给了外敌。」\n\n「第七十个——是一个欺压百姓的地主。他逼死了十几条人命。」\n\n他停下不说了。\n\n「第七十一个呢？」你问。\n\n他沉默了很久。\n\n「第七十一个——还没出现。我等了三年。也许……不会再出现了。」\n\n他看着酒壶。\n\n「也许我这辈子都不会再有第七十一个了。也许——我可以做点别的。比如钓鱼。」\n\n${hl('江湖第一杀手在雨夜的小镇上，和一个刚认识不久的人喝酒——说他不想再杀人了。也许这就是所谓的放下。不是轰轰烈烈的——只是在一个普通的深夜，和一个普通的人，喝了一壶普通的酒。')}`);
  divider();
  setFlag('hei_intimate_moment');
  changeRel('hei_wuji', 15);
  showChoices([
    { text: '「欢迎来苍龙镇钓鱼。随时。」', id: 'he3_welcome', effects: () => { changeRel('hei_wuji', 5); setFlag('hei_redemption'); }, next: SCENES['lobby_free'] },
  ]);
};
