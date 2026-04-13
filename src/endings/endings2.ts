/// <reference path="../types.ts" />
// story_part18.js - 结局扩写
// 10个结局、最终对话、隐藏结局、彩蛋

SCENES['ending_guardian_plus'] = () => {
  G.scene = 'ending';
  clearStory();
  narrate('你接过天机卷——成为了第八代守护者。沈孤雁卸下了十五年的重担。他终于可以做回一个普通的客栈老板——每天煮茶温酒，偶尔和赵铁牛喝一杯。而你——你接过了他的钥匙、他的笔记、他的责任。你在石室的墙壁上看到了七幅画像——第一代到第七代守护者。你拿起毛笔——在第八幅画像下面写下了一个字：「义」。');
  divider();
  showEnding('守护者·传承', 'ending_guardian_plus', '江湖路远，夜雨不灭。');
};

SCENES['ending_wanderer_plus'] = () => {
  G.scene = 'ending';
  clearStory();
  narrate('你没有碰天机卷。你做了该做的事——帮了该帮的人。但天机卷不是你的责任。翻身上马的那天清晨——天终于放晴了。赵铁牛给了肉干、胡青娘了解毒药、白云生送了一支笔、柳如烟点了点头、沈孤雁递了一壶女儿红、小莲挥了挥手。你策马而去——苍龙镇在身后渐渐缩小。前方是漫长的官道——风从远方吹来。江湖很大。路很长。而你——自由。');
  divider();
  showEnding('浪迹天涯·新篇', 'ending_wanderer_plus', '江湖路远，夜雨不灭。');
};

SCENES['ending_duo_plus'] = () => {
  G.scene = 'ending';
  clearStory();
  narrate('你和柳如烟一起南下岭南。她不再穿飞鱼服——把青锋冷月剑留在了苍龙镇的古树下。你们在一个海边小镇住下来——她开茶馆，你教书。日子平淡但安心。深夜有时你会听到窗外的雨声——那是记忆中的雨。你回头看看身边的柳如烟——她睡着了，嘴角上扬。你笑了笑，吹灭了灯。');
  divider();
  showEnding('双飞·岭南', 'ending_duo_plus', '江湖路远，夜雨不灭。');
};

SCENES['ending_sacrifice'] = () => {
  G.scene = 'ending';
  clearStory();
  narrate('你选择了销毁天机卷。在石室中——你点燃了绢帛。火焰吞噬了一千二百个名字——那些秘密将永远消失。但你没有料到——暗星阁的人已经追到了石室。他们包围了出口。你让其他人先走——自己留下来断后。沈孤雁最后看了你一眼——他的眼中有什么东西在闪烁。然后他转身走了。你一个人面对七把刀——笑了。因为你做到了——天机卷已经不存在了。一千二百个人安全了。');
  divider();
  showEnding('牺牲', 'ending_sacrifice', '江湖路远，夜雨不灭。');
};

SCENES['ending_negotiator'] = () => {
  G.scene = 'ending';
  clearStory();
  narrate('你没有选择守护、销毁或公开——你选择了第三条路。你用天机卷作为筹码——和暗星阁谈判。条件是：暗星阁退出苍龙镇，不再追杀名单上的人。作为交换——你不会公开天机卷。双方都让了一步。这不是完美的结局——但这是一个活人都满意的结局。');
  divider();
  showEnding('谈判者', 'ending_negotiator', '江湖路远，夜雨不灭。');
};

SCENES['ending_detective'] = () => {
  G.scene = 'ending';
  clearStory();
  narrate('你发现了所有的真相——天机卷不只是名单。它是一把钥匙——打开了一个更大的秘密：暗星阁的真正目的不是名单上的人——而是名单背后的组织。一个横跨朝堂和江湖的秘密网络。你把这一切记录下来——写成了一本书。书名叫做《江湖夜雨》。');
  divider();
  showEnding('侦探', 'ending_detective', '江湖路远，夜雨不灭。');
};

SCENES['ending_family'] = () => {
  G.scene = 'ending';
  clearStory();
  narrate('你留在了苍龙镇——不是为了天机卷，而是为了人。沈孤雁、赵铁牛、胡青娘、白云生、柳如烟、小莲——他们已经不只是NPC了。他们是你的家人。你帮赵铁牛找到了那个军需官。你帮小莲找到了杀害她母亲的凶手。你帮白云生找到了白太傅的真相。你帮柳如烟找到了柳青松的下落。每个人都得到了自己的答案。');
  divider();
  showEnding('家人', 'ending_family', '江湖路远，夜雨不灭。');
};

SCENES['ending_shadow'] = () => {
  G.scene = 'ending';
  clearStory();
  narrate('你拿走了天机卷——没有给任何人。你消失在了夜色中——带着一千二百个秘密。没有人知道你去了哪里。多年后——江湖上流传着一个传说：有一个神秘的人——掌握着所有人的秘密。没有人见过他的脸——但所有人都知道他的名字。他们叫他——「夜雨」。');
  divider();
  showEnding('暗影', 'ending_shadow', '江湖路远，夜雨不灭。');
};

SCENES['ending_reunion'] = () => {
  G.scene = 'ending';
  clearStory();
  narrate('在打开天机卷的那一刻——你看到了一个你意想不到的名字。你自己的名字。你的父母——也在名单上。他们没有死——他们一直在暗处守护着你。天机卷不只是别人的故事——也是你自己的故事。你找到了他们。一家人终于在苍龙镇重逢。');
  divider();
  showEnding('重逢', 'ending_reunion', '江湖路远，夜雨不灭。');
};

SCENES['ending_truth_plus'] = () => {
  G.scene = 'ending';
  clearStory();
  narrate('你找到了所有的真相——白太傅不是被守护者杀的。柳青松不是失踪——他自愿留在石室保护天机卷。黑无极不是冷血杀手——他在做选择。每个人的面具下面都有真实的面孔。你站在落雁峰顶——朝阳从东方升起。金色的光洒在巨石上——那只展翅的孤雁仿佛真的飞了起来。江湖夜雨——雨停了。天亮了。');
  divider();
  showEnding('真相·终章', 'ending_truth_plus', '江湖路远，夜雨不灭。');
};

SCENES['final_dialogue'] = () => {
  G.scene = 'final_dialogue';
  narrate('在做出最终选择之前——每个人对你说了最后一句话。沈孤雁：不管你选什么——我都不后悔认识你。赵铁牛：你是个好人。这就够了。胡青娘：记住——毒和药只有一线之隔。选择也一样。白云生：真相不重要——重要的是你为什么寻找它。柳如烟：谢谢你。小莲：你要走了吗？……那你还会回来吗？老孙头：路很长。但每一步都算数。');
  divider();
  showChoices([
    { text: '守护天机卷', id: 'fd_guard', next: SCENES['ending_guardian_plus'] },
    { text: '离开苍龙镇', id: 'fd_wander', next: SCENES['ending_wanderer_plus'] },
    { text: '和柳如烟一起走', id: 'fd_duo', next: SCENES['ending_duo_plus'] },
    { text: '牺牲自己销毁天机卷', id: 'fd_sacrifice', next: SCENES['ending_sacrifice'] },
    { text: '用天机卷谈判', id: 'fd_neg', next: SCENES['ending_negotiator'] },
    { text: '揭开所有真相', id: 'fd_truth', next: SCENES['ending_truth_plus'] },
    { text: '留下来和大家一起', id: 'fd_family', next: SCENES['ending_family'] },
    { text: '带走天机卷消失', id: 'fd_shadow', next: SCENES['ending_shadow'] },
    { text: '寻找自己的身世', id: 'fd_reunion', next: SCENES['ending_reunion'] },
    { text: '把真相写成书', id: 'fd_detective', next: SCENES['ending_detective'] },
  ]);
};

SCENES['ending_hidden_peace'] = () => {
  G.scene = 'ending';
  clearStory();
  narrate('你做了一个所有人都没想到的选择——你什么都没做。你把天机卷放回了石匣。关上了石匣。然后你走出了石室。你回到了听雨客栈。坐下来。要了一壶茶。小莲端茶上来的时候——你对她笑了笑。外面又下雨了。你坐在窗边——听着雨声。赵铁牛在隔壁打铁。胡青娘在药铺里哼着歌。沈孤雁在招呼新客人。白云生在写诗。柳如烟在喝茶。老孙头在钓鱼。一切如常。也许这就是最好的结局——什么都不改变。让每个人继续过自己的日子。让天机卷继续安静地躺在石室里。让雨继续下。');
  divider();
  showEnding('不作为', 'ending_hidden_peace', '有时候——最好的选择是不选择。');
};

SCENES['new_game_plus'] = () => {
  G.scene = 'new_game_plus';
  clearStory();
  narrate('恭喜你完成了江湖夜雨的第一次旅程。但你看到的只是冰山一角。苍龙镇还有更多的秘密等待发现。你遗漏了什么吗？老孙头的真实身份。小莲母亲之死的真相。白云生三十五年的寻找。胡青娘在蜀中的十年。赵铁牛的军需官。地下通道的秘密。月圆之夜的异象。废宅里的机关图。木匠之死的幕后黑手。每一位NPC都有你尚未触发的深度剧情。');
  divider();
  narrate('多周目提示：1. 尝试不同的好感度路线——每个NPC都有独特结局对话。2. 在第一天的不同时段做不同的事——会影响后续所有剧情。3. 注意收集所有暗号和线索——有些隐藏结局需要特定条件。4. 白云生、胡青娘、老孙头都有隐藏的个人任务线。5. 好感度超过80的NPC会在结局时给你特殊礼物。6. 有一个需要收集所有情报才能触发的隐藏结局。7. 在石室第三层有一个只有剑术达到15才能发现的暗格。');
  divider();
  narrate('片尾字幕：感谢游玩《江湖夜雨》。开发：AI与人类协作。剧本：基于经典武侠文学。灵感来源：古龙、金庸、温瑞安。测试：每一位走到这里的玩家。特别鸣谢：你——感谢你的好奇心和耐心。江湖路远——夜雨不灭。我们——下一个故事再见。');
  divider();
  showChoices([
    { text: '重新开始', id: 'ngp_restart', next: SCENES['intro'] },
    { text: '查看成就', id: 'ngp_achieve', next: SCENES['achievements'] },
  ]);
};

SCENES['achievements'] = () => {
  G.scene = 'achievements';
  narrate('成就系统（开发中）：1. 初入江湖——到达苍龙镇。2. 夜雨听客——在客栈住满一天。3. 百晓生——收集10条以上情报。4. 剑术精湛——剑术达到10以上。5. 万人迷——与3个NPC好感度超过50。6. 暗夜行者——完成所有夜间探索。7. 守护之心——选择守护天机卷。8. 自由之翼——选择浪迹天涯。9. 真相追寻者——发现所有隐藏剧情。10. 江湖夜雨——完成所有结局。');
  divider();
  showChoices([
    { text: '重新开始', id: 'ach_restart', next: SCENES['intro'] },
  ]);
};
