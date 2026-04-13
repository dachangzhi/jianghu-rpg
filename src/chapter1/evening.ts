/// <reference path="../types.ts" />
// story_part13.js - 黄昏时段扩写
// 客栈晚餐大幅扩写、NPC独处场景、沈孤雁深夜对话

// ---- 黄昏：夕阳余晖 ----
SCENES['dusk_sunset'] = () => {
  G.scene = 'dusk_sunset';
  G.time = 'dusk';
  narrate(`夕阳从苍龙镇西边的山头慢慢沉下去，把整个镇子染成了金红色。\n\n你站在客栈二楼的窗前，看着街道上的人渐渐少了。卖豆腐的王婆收了摊，铁匠铺的炉火暗了下来，河边洗衣的妇人们端着木盆说说笑笑地回家了。\n\n镇子安静下来——不是死寂，而是一种准备休息的安宁。\n\n楼下传来锅铲碰撞的声音和油烟的香气。小莲在厨房里忙活着——从中午就开始准备今晚的饭菜了。\n\n你的肚子适时地叫了一声。\n\n楼下有人喊了一声：「开饭了——！」是赵铁牛的大嗓门。\n\n你闻到了一股浓郁的肉香——红烧肉。还有醋溜白菜的酸香，蒸鱼的鲜甜，以及……一种你叫不出名字的香料味。\n\n沈孤雁在楼下招呼：「各位客官，今日小莲的手艺格外好，赏光赏光。」`);
  divider();
  showChoices([
    { text: '下楼赴宴', id: 'ds_down', next: SCENES['dinner_feast_main'] },
    { text: '先在房间里整理一下今天的发现', id: 'ds_organize', effects: () => { G.wits += 1; setFlag('organized_notes'); }, next: SCENES['dinner_feast_main'] },
    { text: '去后院看看再吃饭', id: 'ds_yard', effects: () => { setFlag('dusk_yard_walk'); }, next: SCENES['dusk_yard_scene'] },
  ]);
};

// ---- 黄昏：后院漫步 ----
SCENES['dusk_yard_scene'] = () => {
  G.scene = 'dusk_yard_scene';
  narrate(`你从后门来到客栈的后院。\n\n院子不大——一棵老槐树占据了大部分空间，树冠像一把巨伞，遮住了半个院子。树下有一张石桌和几个石凳。墙角种着几丛月季，在这个季节开得正盛，红红粉粉的。\n\n院子的另一头有一口井，井沿上放着一只木桶。井边的石头缝里长着几株不知名的野草——如果你帮过胡青娘采药，你会认出其中一种是黄精，一种常见的药材。\n\n院子里很安静。只有老槐树的叶子在晚风中沙沙作响。\n\n你注意到院墙的一角有一扇小门——门上挂着一把铜锁。锁的样式很老，但锁芯部分却很新——说明经常有人在使用。\n\n这扇门通向哪里？`);
  divider();
  if (checkFlag('helped_hu_herbs')) {
    narrate(`你认出井边的野草中有黄精和车前草——都是胡青娘常用的药材。看来她也在这里采过药。`);
    setFlag('dusk_spotted_herbs');
  }
  showChoices([
    { text: '仔细查看那扇锁着的小门', id: 'dys_door', effects: () => { G.wits += 2; setFlag('spotted_locked_door'); }, next: SCENES['dinner_feast_main'] },
    { text: '在石桌旁坐一会儿，享受黄昏的宁静', id: 'dys_sit', effects: () => { G.charm += 1; changeRel('shen_guyan', 2); }, next: SCENES['dinner_feast_main'] },
    { text: '直接去吃饭', id: 'dys_eat', next: SCENES['dinner_feast_main'] },
  ]);
};

// ---- 客栈晚餐：主场景 ----
SCENES['dinner_feast_main'] = () => {
  G.scene = 'dinner_feast_main';
  G.location = '听雨客栈·大堂';
  narrate(`大堂里的两张方桌已经拼在了一起，铺上了一块洗得发白的蓝布桌布。上面摆满了碗碟——比中午多了好几样。\n\n${hl('「今日加了菜。」')}沈孤雁站在桌旁，手里端着一壶黄酒，「难得大家都在，好好吃一顿。」\n\n桌上的菜琳琅满目：\n\n${hl('红烧肉')}——肥瘦相间的五花肉，切成方块，酱色浓郁，每一块都炖得软烂入味。小莲用的是沈孤雁从江南带回来的老抽，加上冰糖和八角，小火慢炖了整整两个时辰。肉的表面泛着一层油亮的光泽，筷子一夹就微微颤抖。\n\n${hl('清蒸鲈鱼')}——鱼是从苍龙河里今天下午刚钓上来的，赵铁牛亲眼看着小莲杀鱼。鲈鱼身上铺着细细的葱丝和姜丝，浇了滚热的花椒油，嗞嗞作响。鱼肉雪白细嫩，用筷子轻轻一拨就散开了。\n\n${hl('醋溜白菜')}——用的是镇东头菜地里刚拔的大白菜，叶子嫩绿，帮子雪白。大火爆炒，加了陈醋和干辣椒，酸辣爽口。这道菜是赵铁牛的最爱——他说北方人就好这一口。\n\n${hl('蒜泥白肉')}——薄如蝉翼的白肉片，卷着黄瓜丝和胡萝卜丝，蘸着蒜泥酱油。这是白云生的下酒菜——虽然他今天还没开始喝。\n\n${hl('麻婆豆腐')}——红彤彤的，面上撒着花椒粉和葱花。胡青娘教小莲做的——据说她在蜀中游历时学到的。豆腐嫩得入口即化，辣味从舌尖一路烧到喉咙。\n\n${hl('香菇鸡汤')}——砂锅端上来的，汤色金黄，油花点点。老母鸡炖了四个时辰，肉已经烂在汤里了。香菇是后山采的，鲜得眉毛都要掉下来。\n\n${hl('葱花饼')}——金黄酥脆，层次分明，掰开来热气腾腾的。\n\n${hl('凉拌黄瓜')}——拍碎的黄瓜拌着蒜末、香油和一点点辣椒油。爽口解腻。`);
  divider();
  setFlag('dinner_feast_attended');
  narrate(`所有人都坐下了。沈孤雁坐在主位，赵铁牛坐在他右手边——已经给自己倒了满满一碗酒。柳如烟坐在角落的位置，面前只放了一碗饭和一碟醋溜白菜。白云生坐在赵铁牛对面，拿着筷子夹了一块蒜泥白肉，放进嘴里慢慢咀嚼——难得没有端酒杯。\n\n胡青娘坐在沈孤雁左手边，姿态优雅地夹着菜。她今天换了一身暗红色的衣裳，头发盘了起来——看起来比平时更加……正式。\n\n老孙头坐在最末端，低着头扒饭，不吃菜。\n\n你的位子在赵铁牛和白云生之间。`);
  showChoices([
    { text: '先尝红烧肉', id: 'dfm_pork', next: SCENES['dinner_pork_detail'] },
    { text: '先喝鸡汤', id: 'dfm_soup', next: SCENES['dinner_soup_detail'] },
    { text: '先夹鱼', id: 'dfm_fish', next: SCENES['dinner_fish_detail'] },
    { text: '先给赵铁牛敬酒', id: 'dfm_zhao_toast', effects: () => { changeRel('zhao_tieniu', 5); G.charm += 2; }, next: SCENES['dinner_zhao_toast'] },
    { text: '观察每个人在饭桌上的表现', id: 'dfm_observe', effects: () => { G.wits += 3; setFlag('dinner_observed_all'); }, next: SCENES['dinner_observe_all'] },
  ]);
};

// ---- 晚餐：红烧肉细节 ----
SCENES['dinner_pork_detail'] = () => {
  G.scene = 'dinner_pork_detail';
  narrate(`你夹起一块红烧肉。\n\n肉块在筷子上微微颤抖——炖得恰到好处，肥肉已经变成了半透明的胶质，瘦肉则吸饱了酱汁。你放进嘴里——\n\n酱香、甜味、八角和桂底的暗香同时在舌头上炸开。肥肉入口即化，瘦肉绵软但不烂。那种甜咸交融的味道在口腔里盘旋不去。\n\n「怎么样？」小莲端着一盘新炒的青菜从厨房出来，看到你在吃肉，眼睛亮了起来。\n\n你竖起大拇指。\n\n她的脸微微一红：「这个方子是我娘教我的。她说——红烧肉好不好，看炖的火候。火大了肉会柴，火小了味道进不去。要用文火，炖两个时辰——中间不能掀锅盖。」\n\n「你娘教了你不少东西。」\n\n她的笑容淡了一点：「嗯。她……她走之前，把会的都教给了我。」`);
  divider();
  setFlag('tasted_pork');
  showChoices([
    { text: '继续吃，享受美食', id: 'dpd_continue', next: SCENES['dinner_table_talk'] },
    { text: '「你娘……她去了哪里？」', id: 'dpd_mother', effects: () => { changeRel('xiao_lian', 5); setFlag('asked_xiaolian_mother'); }, next: SCENES['dinner_xiaolian_mother'] },
  ]);
};

// ---- 晚餐：鸡汤细节 ----
SCENES['dinner_soup_detail'] = () => {
  G.scene = 'dinner_soup_detail';
  narrate(`你舀了一碗鸡汤。\n\n汤色金黄，表面飘着几点油花和一小撮枸杞。第一口下去——鲜！不是那种味精的鲜，而是鸡肉本身炖出来的醇厚鲜味。香菇的味道完美地融入了汤里，每一口都带着一种淡淡的菌香。\n\n你喝了一口，又一口，又一口。碗很快就见了底。\n\n「再来一碗？」小莲不知什么时候站在你旁边，手里拿着汤勺。\n\n「这鸡炖了多久？」\n\n「四个时辰。」她给你盛汤的时候，袖口微微上移——你看到她手腕上有一道浅浅的旧伤疤。「沈老板说，好汤要等。等不及的人，喝不到好汤。」\n\n你接过碗。第二碗汤和第一碗一样好喝——但这一次你品出了更多的层次：先是鸡汤的鲜，然后是香菇的香，最后是一丝若有若无的药材味。\n\n「这里面放了药材？」\n\n「是胡姐姐给的一小把黄芪和党参。」小莲笑了，「她说秋天的鸡汤要加补气的药材——不然喝了容易犯困。」`);
  divider();
  setFlag('tasted_soup');
  showChoices([
    { text: '「谢谢小莲。手艺真好。」', id: 'dsd_thanks', effects: () => { changeRel('xiao_lian', 3); G.charm += 1; }, next: SCENES['dinner_table_talk'] },
    { text: '注意到她手腕上的伤疤', id: 'dsd_scar', effects: () => { G.wits += 2; setFlag('spotted_xiaolian_scar'); }, next: SCENES['dinner_xiaolian_scar'] },
  ]);
};

// ---- 晚餐：清蒸鱼细节 ----
SCENES['dinner_fish_detail'] = () => {
  G.scene = 'dinner_fish_detail';
  narrate(`你夹了一筷子鱼肉。\n\n鱼肉雪白如玉，沾着一点葱油和酱油，放进嘴里——鲜甜嫩滑。没有任何腥味，只有鱼肉本身的清甜和葱油的香。\n\n「好鱼。」白云生忽然开口。他也夹了一块鱼，放在鼻子下面闻了闻。「新鲜。鳃还红着——下午两三点钟杀的。」\n\n「赵大哥下午在河边钓的。」小莲说。\n\n「铁牛还会钓鱼？」白云生挑了挑眉。\n\n赵铁牛嘿嘿笑了：「钓鱼跟打铁一个道理——要有耐心。等铁烧到火候了才能下锤，等鱼咬到钩了才能提竿。急不得。」\n\n「说得好。」沈孤雁举起酒杯，「来——敬铁牛的鱼。」\n\n赵铁牛端起碗，咕嘟咕嘟灌了一大口酒：「鱼我钓的，但做得好是小莲的功劳。我不敢抢——这丫头的手艺，比我那把破锤子强多了。」`);
  divider();
  setFlag('tasted_fish');
  changeRel('zhao_tieniu', 2);
  showChoices([
    { text: '也举杯敬赵铁牛', id: 'dfd_toast', effects: () => { changeRel('zhao_tieniu', 3); }, next: SCENES['dinner_table_talk'] },
    { text: '继续吃鱼', id: 'dfd_eat', next: SCENES['dinner_table_talk'] },
  ]);
};

// ---- 晚餐：赵铁牛敬酒 ----
SCENES['dinner_zhao_toast'] = () => {
  G.scene = 'dinner_zhao_toast';
  narrate(`你端起酒碗，朝赵铁牛举了举。\n\n「赵大哥，今天多谢你关照。我先干为敬。」\n\n赵铁牛愣了一下——显然没想到有人会主动敬他。然后他那张粗糙的脸上绽开了一个大大的笑容。\n\n「好小子！够爽快！」他端起自己那碗酒，「老赵我就喜欢实在人。来——干了！」\n\n你们碗碰碗，各灌了一大口。赵铁牛喝的是最烈的烧刀子——你被辣得直皱眉，他却像喝水一样面不改色。\n\n「不够劲儿。」他摇摇头，「我当年在北疆军中喝的酒——比这烈三倍。零下四十度的天，全靠那口酒吊着命。」\n\n他给自己又倒了一碗：「你小子不错——不像那些读书人，弯弯绕绕的。来——再走一个！」\n\n第二碗下去，你的头开始有点晕了。但赵铁牛的脸只是微微泛红——这点酒对他来说只是热身。`);
  divider();
  setFlag('drank_with_zhao');
  showChoices([
    { text: '再来一碗！', id: 'dzt_more', effects: () => { changeRel('zhao_tieniu', 5); setFlag('drank_much'); addHp(-5); }, next: SCENES['dinner_table_talk'] },
    { text: '适可而止，开始吃菜', id: 'dzt_enough', effects: () => { G.wits += 1; }, next: SCENES['dinner_table_talk'] },
  ]);
};

// ---- 晚餐：全局观察 ----
SCENES['dinner_observe_all'] = () => {
  G.scene = 'dinner_observe_all';
  narrate(`你没有急着动筷子——而是仔细观察饭桌上的每一个人。\n\n${hl('沈孤雁')}：他吃得很慢，几乎每道菜只尝一口。但他不停地招呼大家多吃——自己却没怎么吃。他的目光偶尔会扫过每一个人的脸，像是在确认什么。当你注意到他在看你时，他微微一笑，举了举酒杯。\n\n「心事重重的人在饭桌上是最无聊的。」他想了想又补了一句，「但也是最有趣的——因为他们饭桌上的表现往往比平时更真实。」\n\n${hl('赵铁牛')}：吃得最多、喝得最凶。红烧肉已经消灭了大半盘——都是他吃的。他边吃边跟沈孤雁聊天，声音洪亮，毫不掩饰。筷子用得不太利索——那双粗大的手更适合握锤子而不是捏筷子。\n\n${hl('柳如烟')}：几乎不动荤菜。只吃白菜和豆腐，饭也吃得少。她的坐姿很端正——不像一个江湖女侠，更像一个官宦人家的千金。她偶尔会抬起头看一眼沈孤雁——然后迅速移开目光。\n\n${hl('白云生')}：夹菜很慢，每一口都细细品味。他的筷子很稳——喝酒的人手不应该这么稳。他主要吃蒜泥白肉和清蒸鱼，几乎没碰辣的麻婆豆腐。偶尔，他的目光会落在胡青娘身上——然后迅速移开。\n\n${hl('胡青娘')}：吃相最优雅。每道菜都尝一口，但每一口都细细品尝。她的筷子从不在盘子里翻来翻去——永远只夹自己面前的。她跟沈孤雁说话时语气很自然，但你注意到他们之间有一种微妙的默契——不需要说完一句话就能理解对方的意思。`);
  divider();
  narrate(`${hl('老孙头')}：坐在最末端，低着头扒饭。他只吃白饭和葱花饼，几乎不碰菜。偶尔伸手夹一块豆腐，但动作很快，好像怕被人注意到。\n\n${hl('小莲')}：她没有上桌。一直在厨房和大堂之间来回跑——端菜、盛汤、添饭。她每次从你身边经过时，你都能闻到她身上淡淡的皂角香。她给你添饭的时候，碗底总会多压一勺——像是偷偷给你多加了。\n\n饭桌上的微妙关系：\n沈孤雁和胡青娘之间有默契——老朋友，甚至更久。\n赵铁牛和沈孤雁很熟——但赵铁牛不知道沈孤雁的全部秘密。\n柳如烟对沈孤雁有戒备——但她在掩饰。\n白云生在观察所有人——他今晚没喝酒，这本身就是一个信号。\n老孙头在回避所有人的目光——他不想被注意到。`);
  divider();
  showChoices([
    { text: '开始吃饭', id: 'doa_eat', next: SCENES['dinner_table_talk'] },
    { text: '悄悄问白云生今晚为什么不喝酒', id: 'doa_bai', effects: () => { changeRel('bai_yunsheng', 3); setFlag('noticed_bai_sober'); }, next: SCENES['dinner_bai_sober'] },
  ]);
};

// ---- 晚餐：小莲母亲 ----
SCENES['dinner_xiaolian_mother'] = () => {
  G.scene = 'dinner_xiaolian_mother';
  narrate(`小莲的笑容凝住了。\n\n她低下头，手指无意识地在围裙上擦了擦。\n\n「我娘……」她的声音很轻，「她三年前就不在了。」\n\n大堂里安静了一瞬。赵铁牛夹肉的筷子停在半空中，沈孤雁轻轻放下了酒杯。\n\n「生病？」你轻声问。\n\n小莲摇了摇头：「不是生病。她……她是被人……」\n\n她忽然不说了。抬起头看了一眼沈孤雁——沈孤雁微微点了点头。\n\n小莲深吸一口气：「她是被人害死的。在一个雨夜——也是这样的雨季。有人闯进了我们家……我娘让我躲在柴房里。我听到她在叫……后来就安静了。」\n\n她的眼圈红了，但没有哭。\n\n「沈老板收留了我。他说——他会找到害我娘的人。」\n\n沈孤雁的声音从旁边传来：「我会的。小莲——我答应你的事，一定会做到。」\n\n小莲用袖子擦了擦眼睛，然后挤出一个笑容：「对不起——说这些影响大家吃饭了。我去看看锅里还有没有饼。」\n\n她转身快步走进了厨房。`);
  divider();
  setFlag('know_xiaolian_past');
  showChoices([
    { text: '继续吃饭，在心里记下这件事', id: 'dxm_note', effects: () => { G.wits += 2; }, next: SCENES['dinner_table_talk'] },
    { text: '去厨房看看小莲', id: 'dxm_kitchen', effects: () => { changeRel('xiao_lian', 8); G.charm += 2; }, next: SCENES['dinner_kitchen_comfort'] },
  ]);
};

// ---- 晚餐：厨房安慰小莲 ----
SCENES['dinner_kitchen_comfort'] = () => {
  G.scene = 'dinner_kitchen_comfort';
  narrate(`你推开厨房的门。\n\n小莲站在灶台旁边，背对着你，肩膀微微颤抖。灶膛里的火已经灭了，但灶台上还残留着余温。\n\n你没有说话——只是走过去，站在她旁边。\n\n沉默了一会儿。\n\n「谢谢你。」她的声音带着鼻音，「但是不用管我——我没事的。每年这个时候都会……都会这样。」\n\n「每年？」\n\n「我娘就是这个时候走的。三年了——每年到这个时候，我就……」她深吸一口气，「对不起，我应该坚强的。沈老板收留了我，教我做饭、认字——我不应该让他担心。」\n\n「你不用坚强。」你说。\n\n她回过头来看你——眼睛红红的，但目光意外地坚定。\n\n「不——我要坚强。」她擦干了眼泪，「因为我娘走之前跟我说了一句话——她说：${hl('「莲儿，你要好好活着。活得比谁都好。」')}所以我必须坚强。」\n\n你看着她。这个十六七岁的姑娘——经历了那样的事，却依然每天笑盈盈地端菜、做饭、招呼客人。\n\n她比你认识的很多人都坚强。`);
  divider();
  changeRel('xiao_lian', 10);
  setFlag('comforted_xiaolian');
  showChoices([
    { text: '「需要帮忙端菜吗？」', id: 'dkc_help', effects: () => { changeRel('xiao_lian', 3); }, next: SCENES['dinner_table_talk'] },
    { text: '拍拍她的肩膀，然后回去', id: 'dkc_pat', next: SCENES['dinner_table_talk'] },
  ]);
};

// ---- 晚餐：小莲手腕伤疤 ----
SCENES['dinner_xiaolian_scar'] = () => {
  G.scene = 'dinner_xiaolian_scar';
  narrate(`你注意到了小莲手腕上的伤疤。\n\n那不是刀伤——刀伤不会那么细、那么均匀。更像是……绳索勒出来的痕迹。或者是——被什么东西紧紧捆绑后留下的。\n\n伤疤已经很旧了，至少两三年。但那一小段皮肤的颜色明显比周围浅——像一条浅白色的细线绕在手腕上。\n\n你装作没看到，低头继续喝汤。但你的心里已经有了痕迹。\n\n${hl('这个姑娘的过去，比她表现出来的要复杂得多。')}\n\n你想起她刚才说的话——「我娘让我躲在柴房里」。那个雨夜，躲在柴房里的小女孩，手腕上会不会也有这样的痕迹？`);
  divider();
  setFlag('xiaolian_scar_theory');
  showChoices([
    { text: '以后找个机会问她', id: 'dxs_ask_later', effects: () => { G.wits += 1; setFlag('plan_ask_scar'); }, next: SCENES['dinner_table_talk'] },
    { text: '现在就问', id: 'dxs_ask_now', effects: () => { changeRel('xiao_lian', -3); setFlag('asked_scar_directly'); }, next: SCENES['dinner_table_talk'] },
    { text: '去问沈孤雁', id: 'dxs_ask_shen', effects: () => { changeRel('shen_guyan', 2); setFlag('asked_shen_about_scar'); }, next: SCENES['dinner_table_talk'] },
  ]);
};

// ---- 晚餐：白云生没喝酒 ----
SCENES['dinner_bai_sober'] = () => {
  G.scene = 'dinner_bai_sober';
  narrate(`你凑到白云生旁边，压低声音：「白先生——今晚怎么不喝酒？」\n\n白云生夹了一块蒜泥白肉，慢慢放进嘴里。嚼了几下，咽了。\n\n「你觉得我是个酒鬼。」他说——不是问句。\n\n「你不是吗？」\n\n他微微一笑。那笑容里有一种你之前没见过的东西——清醒、锐利、甚至有些冰冷。\n\n「喝酒是我的伪装。」他说，「一个醉鬼不会引起任何人的警觉。一个醉鬼可以在任何地方出现、听任何人说话——因为没人会在意一个醉鬼。」\n\n他放下筷子，看着你。\n\n「但今晚——我需要清醒。因为今晚会有事情发生。」\n\n「什么事？」\n\n他没有回答。只是重新拿起筷子，夹了一块白肉。\n\n「先把饭吃完。有些事——等吃饱了再说。」`);
  divider();
  setFlag('bai_sober_warning');
  changeRel('bai_yunsheng', 5);
  G.wits += 2;
  showChoices([
    { text: '追问：「你指的是什么？」', id: 'dbs_press', effects: () => { G.wits += 1; setFlag('bai_hint_pressed'); }, next: SCENES['dinner_table_talk'] },
    { text: '点头，继续吃饭', id: 'dbs_nod', next: SCENES['dinner_table_talk'] },
  ]);
};

// ---- 晚餐：饭桌对话（综合场景） ----
SCENES['dinner_table_talk'] = () => {
  G.scene = 'dinner_table_talk';
  narrate(`饭桌上渐渐热闹起来。赵铁牛已经喝到了第三碗酒，脸红得像关公。他正在讲一个故事：\n\n「……我跟你说，那年冬天在北疆，零下四十度！你知道什么概念吗？你吐口唾沫，还没落地就冻成冰了！我们那个小队——十二个人——挤在一个帐篷里。被子不够，只能两三个人合盖一条。我旁边那个小伙子叫小周——才十七岁——冻得直哆嗦，我就把我的棉袄给他了……」\n\n他的声音忽然低了下来。\n\n「后来小周没回来。撤退的时候掉进了冰河里……我没拉住他。」\n\n大堂里安静了几秒。\n\n沈孤雁给赵铁牛的碗里又倒了酒：「铁牛——吃饭。」\n\n「嗯。吃饭。」赵铁牛灌了一大口酒，擦了擦嘴，「不提那些了。」\n\n胡青娘适时地开口：「赵大哥，你尝尝这个豆腐——我教小莲做的，正宗的蜀中味儿。」\n\n「好吃！够辣！」赵铁牛又恢复了精神，「青娘你这手艺——在蜀中开个馆子都能发大财。」\n\n「开馆子多累。」胡青娘微微一笑，「我还是安安静静地开药铺好了。」`);
  divider();
  narrate(`沈孤雁转向柳如烟：「柳姑娘，菜还合口味吗？」\n\n柳如烟点了点头：「醋溜白菜做得好。」\n\n「那就好。」沈孤雁笑了笑，「我知道你不太吃荤——所以特意让小莲多做了两道素菜。」\n\n柳如烟看了他一眼：「你怎么知道我不吃荤？」\n\n「猜的。」沈孤雁端起酒杯，「一个人吃饭的习惯，往往能看出很多。」\n\n柳如烟没说话，低下头继续吃白菜。但你注意到她的筷子停顿了一瞬——沈孤雁的话让她警觉了。\n\n白云生一直在安静地吃饭。但他的目光在每个人脸上都停留过——像是在读一本打开的书。\n\n老孙头吃完了饭，放下碗筷。他站起来，朝沈孤雁点了点头：「谢谢款待。」然后默默地走了出去。\n\n沈孤雁目送他离开，若有所思。\n\n「老孙头这个人——」他自言自语般地说，「总是一个人吃饭，一个人钓鱼，一个人回家。在苍龙镇住了十年——我对他还是不太了解。」`);
  divider();
  setFlag('dinner_table_heard');
  showChoices([
    { text: '饭后来找沈孤雁聊聊老孙头', id: 'dtt_shen_sun', effects: () => { setFlag('plan_talk_sun'); }, next: SCENES['dinner_aftermeal'] },
    { text: '饭后出去走走', id: 'dtt_walk', next: SCENES['dinner_aftermeal'] },
    { text: '饭后回房间整理今天的线索', id: 'dtt_room', effects: () => { G.wits += 2; }, next: SCENES['dinner_aftermeal'] },
  ]);
};

// ---- 晚餐：饭后 ----
SCENES['dinner_aftermeal'] = () => {
  G.scene = 'dinner_aftermeal';
  narrate(`饭局渐渐散了。\n\n赵铁牛第一个走——他拍了拍肚皮，打了个饱嗝：「吃好了！沈老板，明天见。」然后摇晃着走了出去。他喝了不少，但脚步还算稳——回铁匠铺的路他闭着眼都能走。\n\n白云生站起身，伸了个懒腰。他今天破天荒地没有要酒——这让你想起了他刚才说的话：${danger('「今晚会有事情发生。」')}\n\n他朝你微微点了点头，然后上楼回房间了。\n\n柳如烟把碗筷推到一边，默默地喝了一杯茶。然后她站起来，朝沈孤雁说了声「多谢」，转身上了楼。她的脚步很轻——经过你身边时几乎没有声音。\n\n胡青娘帮小莲收拾了一会儿碗筷，然后对沈孤雁说：「我先回去了。药铺还有几服药要泡。」\n\n沈孤雁点点头：「路上小心。」\n\n「我又不是小孩子了。」胡青娘笑了笑，拎起她的药箱，从后门出去了。\n\n大堂里只剩下了你、沈孤雁和小莲。\n\n小莲在收拾桌子，动作麻利。沈孤雁坐在原位，手里转着一个酒杯——杯里已经空了。\n\n「你去休息吧。」他对小莲说，「碗筷明天再洗。」\n\n「没事——我不累。」小莲端着一摞碗进了厨房。`);
  divider();
  showChoices([
    { text: '跟沈孤雁坐一会儿', id: 'dam_shen', effects: () => { changeRel('shen_guyan', 5); }, next: SCENES['dinner_shen_alone'] },
    { text: '去后院走走', id: 'dam_yard', next: SCENES['evening_yard_shen'] },
    { text: '上楼回房间', id: 'dam_room', next: SCENES['evening_room'] },
    { text: '去镇上夜游', id: 'dam_town', next: SCENES['night_town_hub'] },
  ]);
};

// ---- 晚餐后：沈孤雁独处 ----
SCENES['dinner_shen_alone'] = () => {
  G.scene = 'dinner_shen_alone';
  narrate(`你在沈孤雁对面坐了下来。\n\n大堂的烛火在微风中轻轻摇曳，投下变幻的影子。沈孤雁的脸上半明半暗——看起来比平时更加深沉。\n\n「今天……」他斟酌了一下用词，「今天你表现得很好。」\n\n「什么意思？」\n\n「吃饭的时候——你在观察每一个人。」他微微一笑，「你以为我没注意到？你的目光在每个人脸上至少停留了五次。你先看赵铁牛的手——那双打铁的手。然后看柳如烟的坐姿——太端住了，不像江湖人。接着看白云生的筷子——他今晚没有手抖，一个酒鬼不该有那样稳的手。」\n\n他看着你，目光中有一丝赞赏。\n\n「你是个细心的人。在这个镇上——细心能保命。」\n\n他给自己倒了最后一杯酒，举起来对着烛光看。\n\n「你想问我什么——问吧。今晚是难得的坦诚时刻。」`);
  divider();
  setFlag('shen_alone_time');
  showChoices([
    { text: '「老孙头是什么人？」', id: 'dsa_sun', next: SCENES['shen_about_sun'] },
    { text: '「你和胡青娘是什么关系？」', id: 'dsa_hu', next: SCENES['shen_about_hu'] },
    { text: '「柳如烟到底是什么来头？」', id: 'dsa_liu', next: SCENES['shen_about_liu'] },
    { text: '「白云生今晚为什么没喝酒？」', id: 'dsa_bai', next: SCENES['shen_about_bai'] },
    { text: '「沈老板——你到底在守护什么？」', id: 'dsa_secret', next: SCENES['shen_secret_hint'] },
  ]);
};

// ---- 沈孤雁谈老孙头 ----
SCENES['shen_about_sun'] = () => {
  G.scene = 'shen_about_sun';
  narrate(`沈孤雁放下酒杯。\n\n「老孙头。」他念叨着这个名字，「他在苍龙镇住了十年——比我来的还早。我刚开客栈的时候，他就在河边钓鱼了。每天钓，风雨无阻。」\n\n「你觉得他有问题？」\n\n「我说不上来。」沈孤雁摇了摇头，「他太……普通了。普通到你不会去注意他。但有时候——太过普通本身就是一种不普通。」\n\n他沉默了一会儿。\n\n「有一次——大概是三年前——我在后院听到河边有人在说话。不止一个人。我悄悄过去看了看——是老孙头。他在跟一个人说话。」\n\n「什么人？」\n\n「看不清。天太黑了。但我听到了一句话——」他的声音低了下去，${hl('「老孙头说：『东西还在原来的地方。没有人动过。』')}\n\n「你在暗示什么？」\n\n「我没有暗示什么。我只是在告诉你——这个镇上的每一个人，都不像表面上看起来那么简单。」\n\n他端起酒杯，一饮而尽。\n\n「包括我。」`);
  divider();
  setFlag('shen_told_about_sun');
  G.wits += 3;
  showChoices([
    { text: '继续追问老孙头', id: 'sas_more', effects: () => { G.wits += 1; }, next: SCENES['shen_about_sun_more'] },
    { text: '问下一个问题', id: 'sas_next', next: SCENES['dinner_shen_alone'] },
    { text: '「谢谢沈老板。我去休息了。」', id: 'sas_rest', next: SCENES['evening_room'] },
  ]);
};

// ---- 老孙头补充 ----
SCENES['shen_about_sun_more'] = () => {
  G.scene = 'shen_about_sun_more';
  narrate(`「还有一件事。」沈孤雁说。\n\n「老孙头每天钓鱼——但你有没有注意到，他从来没有带鱼回来过？」\n\n你仔细回想——确实。你见过老孙头在河边坐了整整一天，但从来没看到他桶里有鱼。\n\n「一个钓了十年鱼的人，不可能一条都钓不到。」沈孤雁说，「除非他根本不是在钓鱼。」\n\n「那他在做什么？」\n\n「守着。」沈孤雁的声音很轻，「他在守着什么。或者——守着谁。」\n\n「你觉得他在守落雁峰？」\n\n沈孤雁没有回答。他只是看着窗外的夜色，目光深远。\n\n「也许吧。也许不是。但有一件事我确定——十年前他来到苍龙镇的时候，他不是一个人来的。有一个年轻女人跟他一起——但那个女人很快就消失了。老孙头说她是他的女儿，去外地嫁人了。但我查过——附近的村子没有人娶过孙家的姑娘。」\n\n他站起来，走到窗前。\n\n「又是一个谜。」他的背影在月光下显得有些孤独，「苍龙镇就是一个充满了谜的地方。有时候我觉得——也许我开这间客栈，不是为了做生意，而是为了守着这些谜。等到有一天，有人来解开它们。」`);
  divider();
  setFlag('sun_daughter_mystery');
  showChoices([
    { text: '「也许那个人就是我。」', id: 'sasm_me', effects: () => { changeRel('shen_guyan', 5); G.charm += 2; }, next: SCENES['evening_room'] },
    { text: '去河边看看老孙头', id: 'sasm_river', next: SCENES['night_river_sun'] },
    { text: '回房间', id: 'sasm_room', next: SCENES['evening_room'] },
  ]);
};

// ---- 沈孤雁谈胡青娘 ----
SCENES['shen_about_hu'] = () => {
  G.scene = 'shen_about_hu';
  narrate(`沈孤雁的嘴角微微上扬——你第一次看到他露出这种表情。不是客套的微笑，而是一种……温柔的怀念。\n\n「青娘。」他念着这个名字，「她是我的同门。」\n\n果然。\n\n「但不止是同门。」他继续说，「我们从小一起长大。在师父的山上学医、练功、读药典。她是师姐——比我大两岁。小时候我总是追着她的背影跑——她走得快，我跟不上。」\n\n「后来呢？」\n\n「后来师父把天机卷传给了我。」他的笑容淡了，「青娘觉得不公平——她比我聪明、比我努力、比我更适合做守护者。但师父选了我。」\n\n「为什么？」\n\n「因为师父说——${hl('守护天机卷需要的不是最聪明的人，而是最坚定的人。')}青娘太聪明了——她会被诱惑。而我……我只是一个普通人。普通人反而更坚定，因为我没有什么可以失去的。」\n\n他苦笑了一下。\n\n「但师父错了。我不是没有什么可以失去——我有青娘。而为了保护她，我什么都做得出来。」\n\n烛火跳了一下。\n\n「后来她离开了。独自去了蜀中。用了十年时间建立自己的药铺和情报网。等她回到苍龙镇的时候——已经是另一个人了。冷静、果断、甚至有些冷酷。」\n\n「但她还是来了。」你说。\n\n「对。」沈孤雁点点头，「不管她变成了什么样——她还是来了。我们在那些年选择对立过、争吵过、甚至差点动手过。但最后——她还是选择了站在我这边。」\n\n「为什么？」\n\n他沉默了很久。\n\n「因为我们守护的是同一个东西。从师父那里学到的——不是天机卷本身，而是${hl('天机卷代表的东西')}。」`);
  divider();
  setFlag('shen_told_about_hu');
  changeRel('shen_guyan', 3);
  showChoices([
    { text: '继续问', id: 'sah_more', next: SCENES['dinner_shen_alone'] },
    { text: '告辞', id: 'sah_rest', next: SCENES['evening_room'] },
  ]);
};

// ---- 沈孤雁谈柳如烟 ----
SCENES['shen_about_liu'] = () => {
  G.scene = 'shen_about_liu';
  narrate(`沈孤雁的表情变得严肃了。\n\n「柳如烟。」他说，「你注意到她吃饭只用面前的菜吗？坐姿端正、筷子捏法标准、不吃荤——这是官宦人家的教养。不是江湖人。」\n\n「你在暗示她是官家的人？」\n\n「我不是在暗示。」沈孤雁直视你的眼睛，「柳如烟是锦衣卫的人。」\n\n即使你之前有所怀疑，亲耳听到这个答案还是让你心头一震。\n\n「你怎么知道？」\n\n「因为她用青锋冷月剑。」沈孤雁说，「那是锦衣卫千户以上的级别才能配的武器。整个江湖——不，整个天下——用青锋冷月剑的人不超过十个。而其中姓柳的——只有一个。」\n\n「她来苍龙镇是为了什么？」\n\n沈孤雁没有直接回答。\n\n「你知道锦衣卫为什么要关注苍龙镇吗？」\n\n「因为天机卷。」\n\n「对。天机卷上有一千二百个名字。其中有一些——和朝廷有关。锦衣卫不可能不管。」\n\n「所以柳如烟是来调查天机卷的？」\n\n「不完全是。」沈孤雁的声音更轻了，「她来苍龙镇——至少表面上的理由——是寻找她失踪的父亲。柳青松。一个二十年前的锦衣卫百户。」\n\n「那实际上呢？」\n\n「实际上——${danger('她的任务和她的私事可能已经纠缠在一起了。')}分不清哪个是因，哪个是果。」\n\n他顿了顿。\n\n「但有一件事我可以确定——她不是坏人。她只是……在两个世界之间挣扎的人。」`);
  divider();
  setFlag('shen_told_about_liu');
  G.wits += 3;
  showChoices([
    { text: '继续问', id: 'sal_more', next: SCENES['dinner_shen_alone'] },
    { text: '「我应该小心她吗？」', id: 'sal_careful', effects: () => { G.wits += 1; setFlag('warned_about_liu'); }, next: SCENES['dinner_shen_alone'] },
    { text: '告辞', id: 'sal_rest', next: SCENES['evening_room'] },
  ]);
};

// ---- 沈孤雁谈白云生 ----
SCENES['shen_about_bai'] = () => {
  G.scene = 'shen_about_bai';
  narrate(`沈孤雁挑了挑眉。\n\n「你也注意到了——他今晚没喝酒。」\n\n「他说今晚会有事情发生。」\n\n沈孤雁沉思了一会儿。\n\n「白云生这个人——比他表现出来的要复杂得多。他来苍龙镇已经三年了。刚来的时候是个醉鬼——至少表面上是。每天喝得烂醉，在客栈里唱歌、写诗、说胡话。没有人把他当回事。」\n\n「但他不是真的醉鬼。」\n\n「当然不是。」沈孤雁说，「三年——他听过了苍龙镇所有的闲言碎语。每一句醉话都是在试探，每一首醉诗都是在传递信息。他用三年的时间建立了一张情报网——而所有人都以为他只是在喝酒。」\n\n「他到底在查什么？」\n\n沈孤雁犹豫了。\n\n「他……在查一个人的死。三十五年前——他的老师白太傅被人暗杀。官方说是暴病而亡，但白云生不相信。他花了一辈子在找真相。」\n\n「他找到苍龙镇来了？」\n\n「也许。也许苍龙镇只是他漫长旅途中的一个站。但——」他看着你，「如果天机卷上有什么关于白太傅的信息——那白云生就不只是路过。他来苍龙镇，是为了找天机卷。」\n\n「他知道天机卷的事？」\n\n「不知道。但他知道白太傅死前最后出现的地方是苍龙镇。仅凭这一点，他就值得警惕。」\n\n沈孤雁放下酒杯。\n\n「不过——白云生虽然有自己的目的，但他不是一个坏人。他只是一个在找答案的人。和柳如烟一样——在私事和大事之间挣扎。」`);
  divider();
  setFlag('shen_told_about_bai');
  showChoices([
    { text: '继续问', id: 'sab_more', next: SCENES['dinner_shen_alone'] },
    { text: '告辞', id: 'sab_rest', next: SCENES['evening_room'] },
  ]);
};

// ---- 沈孤雁的秘密暗示 ----
SCENES['shen_secret_hint'] = () => {
  G.scene = 'shen_secret_hint';
  narrate(`沈孤雁沉默了很久。\n\n烛火在大堂里跳动着——他脸上的光影变幻不定，让你看不清他的表情。\n\n「你问得好。」他终于开口，「但这个问题——我现在还不能回答你。」\n\n「为什么？」\n\n「因为你还不够了解这个镇子。」他说，「你今天才来——虽然你已经在饭桌上展现了出色的观察力，但你还没有看到苍龙镇的全部。」\n\n他站起来，走到大堂的一根柱子前。柱子上挂着一把看起来很旧的剑——剑鞘是黑色的，没有任何装饰。\n\n「这把剑——」他伸手摸了摸剑鞘，「是我师父留给我的。他说：${hl('「这把剑不出鞘则已，出鞘必见血。」')}十五年了——我没有拔过它。」\n\n他转过身来。\n\n「但也许……」他的目光看向窗外的夜空，「也许很快就要拔了。」\n\n他走回来，在你对面坐下。\n\n「给我一点时间。」他说，「等你看清了这个镇子的全貌——我会告诉你一切的。我保证。」`);
  divider();
  setFlag('shen_secret_promise');
  changeRel('shen_guyan', 5);
  G.wits += 2;
  showChoices([
    { text: '「好。我等你的答案。」', id: 'ssh_wait', effects: () => { changeRel('shen_guyan', 3); }, next: SCENES['evening_room'] },
    { text: '「希望不要太晚。」', id: 'ssh_hope', next: SCENES['evening_room'] },
  ]);
};

// ---- 夜晚：后院沈孤雁 ----
SCENES['evening_yard_shen'] = () => {
  G.scene = 'evening_yard_shen';
  narrate(`你走到后院，发现沈孤雁已经在这里了。\n\n他坐在老槐树下的石凳上，手里拿着一壶酒——不是饭桌上的黄酒，而是一坛看起来很陈的女儿红。\n\n月光从树冠的缝隙中洒下来，在地上投下斑驳的光影。\n\n「来。」他给你倒了一杯，「这是十年前的女儿红。我一直留着——本来打算等到……」\n\n他没有说完。\n\n「等到什么？」\n\n「等到一个值得庆祝的日子。」他端起酒杯，对着月亮看了看——月光在酒面上映出一个银色的圆点。「但十年了——这样的日子一直没有来。」\n\n他喝了一口。\n\n「坐吧。」他指了指旁边的石凳。\n\n你坐了下来。月光下的后院很安静——只有老槐树的叶子和远处河水的声音。偶尔能听到一两声虫鸣。\n\n「我喜欢这个地方。」沈孤雁说，「白天我坐在大堂里招呼客人——那是沈老板。但晚上坐在这里——我才是沈孤雁。」\n\n「沈老板和沈孤雁有什么不同？」\n\n他笑了笑。\n\n「沈老板对每个人都笑——但不是真的笑。沈孤雁对很少有人笑——但每一笑都是真的。」\n\n他把酒坛递给你。\n\n「你尝尝。好酒不该一个人喝。」`);
  divider();
  changeRel('shen_guyan', 5);
  setFlag('drank_with_shen');
  showChoices([
    { text: '喝一口', id: 'eys_drink', effects: () => { changeRel('shen_guyan', 3); }, next: SCENES['dinner_shen_alone'] },
    { text: '不喝，问他为什么半夜一个人在这里', id: 'eys_why', effects: () => { G.wits += 2; }, next: SCENES['dinner_shen_alone'] },
  ]);
};

// ---- 夜晚：回房间 ----
SCENES['evening_room'] = () => {
  G.scene = 'evening_room';
  G.location = '听雨客栈·客房';
  narrate(`你回到二楼的客房。\n\n房间里点着一盏油灯——是小莲帮你点的。灯旁还有一小碟花生米和一杯温水。\n\n窗外，苍龙镇的夜色像一幅水墨画。月亮挂在天上，把镇子照得银白银白的。远处落雁峰的轮廓在夜色中隐约可见——像一只蹲伏的巨兽。\n\n你坐在窗前，回顾今天发生的一切。\n\n沈孤雁——温和的客栈老板，守护着某个秘密。\n柳如烟——冷厉的女剑客，锦衣卫的人。\n赵铁牛——豪爽的铁匠，有军旅往事。\n胡青娘——神秘的药铺掌柜，和沈孤雁是同门。\n白云生——装醉三年，在查老师白太傅的死。\n老孙头——钓了十年鱼，从来没有钓到过。\n小莲——十六七岁的姑娘，三年前失去了母亲。\n\n每一张面孔背后都藏着故事。\n而这个安静的雨镇——似乎即将迎来一场风暴。\n\n${danger('白云生说今晚会有事情发生。')}\n\n窗外传来几声虫鸣。夜很深了。`);
  divider();
  showChoices([
    { text: '上床睡觉', id: 'er_sleep', next: SCENES['night_deep_choice'] },
    { text: '从窗户看看外面的情况', id: 'er_window', effects: () => { G.wits += 1; }, next: SCENES['night_window_watch'] },
    { text: '出去夜游', id: 'er_town', next: SCENES['night_town_hub'] },
  ]);
};

// ---- 夜晚：窗外观察 ----
SCENES['night_window_watch'] = () => {
  G.scene = 'night_window_watch';
  narrate(`你推开窗户，探头望去。\n\n苍龙镇的夜很安静——但不是完全的安静。你能听到远处的河水声、虫鸣声、以及……\n\n一个细微的声响。\n\n你竖起耳朵——那是脚步声。很轻，很急促。不是赵铁牛那种沉重的大步，而是一种经过训练的轻盈步伐。\n\n声音来自客栈后院的方向。\n\n你仔细看了看——月光下，后院的角落里似乎有两个人影。一个坐在石凳上——那是沈孤雁。另一个站在他对面——你看不清是谁，但那个人穿着一身深色的衣服，几乎和夜色融为一体。\n\n他们在低声交谈。你听不到内容——但你能看到沈孤雁的身体语言：他的背挺得很直，双手放在膝盖上。那是一种警觉的姿态。\n\n${hl('沈孤雁在深夜和一个神秘人见面。')}\n\n然后，那个深衣人影忽然消失了——像是融化在了夜色中。速度之快，让你怀疑自己是不是看花了眼。

沈孤雁独自坐在后院，端起酒杯，一饮而尽。

他的手在微微颤抖。
${danger('深夜的神秘访客。沈孤雁显然认识那个人——而且他们谈论的内容让他不安。')}

你缩回窗户，坐到床上。今晚——也许真的会发生什么。`);
  divider();
  setFlag('spotted_midnight_visitor');
  showChoices([
    { text: '偷偷下楼去后院偷听', id: 'nww_eavesdrop', effects: () => { G.wits += 3; setFlag('tried_eavesdrop'); }, next: SCENES['midnight_eavesdrop'] },
    { text: '上床睡觉，养精蓄锐', id: 'nww_sleep', next: SCENES['night_deep_choice'] },
    { text: '去镇上巡逻', id: 'nww_patrol', next: SCENES['night_town_hub'] },
  ]);
};

// ---- 深夜偷听 ----
SCENES['midnight_eavesdrop'] = () => {
  G.scene = 'midnight_eavesdrop';
  narrate(`你轻手轻脚地下了楼，从后门溜到后院。\n\n沈孤雁已经不在石凳上了——他站在院墙边，面对着那扇你之前注意到的小门。锁已经被打开了。\n\n他似乎在等什么人。\n\n你躲在一棵老槐树后面，屏住呼吸。\n\n过了大约一炷香的时间——一个小门处响起了三声轻敲。两短一长。\n\n沈孤雁打开了门。\n\n一个人走了进来——你看不清他的脸，因为他戴着斗笠，遮住了大半张脸。但他身上有一种独特的气息——冷冽、干净，像冬天的河水。\n\n「消息确认了。」那个人的声音很低沉，「黑无极已经到了苍龙镇外围。他带了四个人。」\n\n沈孤雁沉默了一会儿。\n\n「目标是什么？」\n\n「不确定。但他的人已经踩过点了——药铺、铁匠铺、河边。他在找什么。」\n\n「找我。」沈孤雁的声音很平静。\n\n「也许。」那个人说，「也可能是在找天机——」\n\n他忽然停住了。\n\n然后他猛地转头——朝你藏身的方向看来。\n\n${danger('「有人。」')}\n\n你的心跳停了一拍。`);
  divider();
  showChoices([
    { text: '站出来，表明身份', id: 'me_reveal', effects: () => { G.charm += 3; changeRel('shen_guyan', -3); setFlag('caught_eavesdrop'); }, next: SCENES['midnight_caught'] },
    { text: '屏住呼吸，一动不动', id: 'me_hide', effects: () => { G.wits += 2; }, next: SCENES['midnight_hide'] },
    { text: '悄悄撤退', id: 'me_retreat', effects: () => { G.wits += 1; setFlag('eavesdrop_partial'); }, next: SCENES['night_deep_choice'] },
  ]);
};

// ---- 偷听被发现 ----
SCENES['midnight_caught'] = () => {
  G.scene = 'midnight_caught';
  narrate(`你从老槐树后面走了出来。\n\n「是我。」你说。\n\n沈孤雁的表情很复杂——惊讶、无奈、还有一丝……赞赏？\n\n「你胆子不小。」他说。\n\n那个戴斗笠的人——你终于看清了他的脸。那是一张中年人的面孔，瘦削、棱角分明，眼角有深深的皱纹。他的眼神很冷——但在看到你之后，那种冰冷消退了一些。\n\n「这就是你说的那个人？」斗笠人问沈孤雁。\n\n「是。」沈孤雁点点头，「一个今天才到苍龙镇的旅客。但——比很多住了十年的人都细心。」\n\n斗笠人打量了你一会儿。\n\n「听到了多少？」\n\n「黑无极到了苍龙镇外围。带了四个人。目标可能是沈老板，也可能是天机……卷。」你把最后一个字补完了。\n\n沉默。\n\n斗笠人看了沈孤雁一眼。沈孤雁叹了口气。\n\n「既然都听到了——」他转向你，「我给你两个选择。第一，当什么都没听到，回去睡觉。明天我当什么都没发生。第二——留下来，听我把话说完。但一旦你选择了留下——就没有回头路了。」`);
  divider();
  setFlag('knows_hei_approaching');
  G.wits += 3;
  showChoices([
    { text: '「我留下。」', id: 'mc_stay', effects: () => { changeRel('shen_guyan', 10); setFlag('chose_to_stay'); G.wits += 2; }, next: SCENES['midnight_revelation'] },
    { text: '「我回去睡觉。」', id: 'mc_sleep', next: SCENES['night_deep_choice'] },
  ]);
};

// ---- 偷听：隐藏成功 ----
SCENES['midnight_hide'] = () => {
  G.scene = 'midnight_hide';
  narrate(`你把身体紧紧贴着树干，控制住自己的呼吸。\n\n斗笠人盯着你的方向看了几秒钟——然后收回了目光。\n\n「也许是野猫。」他说。\n\n「也许。」沈孤雁的声音里带着一丝不易察觉的犹豫。但斗笠人没有继续追问。\n\n他们的对话继续进行——声音压得更低了。你只能断断续续地听到几个关键词：\n\n${hl('「……玉牌……三块……」')}\n${hl('「……落雁峰……石室……」')}\n${hl('「……天机卷……第七代……」')}\n${hl('「……黎明之前必须……」')}\n\n然后你听到了一个让你血液凝固的词：\n\n${danger('「……杀无赦……」')}\n\n对话结束了。斗笠人从小门离开。沈孤雁站在原地，望着那扇关上的门，一动不动。\n\n你悄悄地回到了楼上。心跳得很厉害。\n\n${danger('今晚会出事。也许不是今晚——但很快。非常快。')}`);
  divider();
  setFlag('eavesdrop_full');
  setFlag('knows_jade_pendants');
  setFlag('knows_hei_approaching');
  G.wits += 5;
  showChoices([
    { text: '强迫自己入睡', id: 'mh_sleep', next: SCENES['night_deep_choice'] },
    { text: '出去夜游，冷静一下', id: 'mh_walk', next: SCENES['night_town_hub'] },
  ]);
};

// ---- 深夜揭秘 ----
SCENES['midnight_revelation'] = () => {
  G.scene = 'midnight_revelation';
  narrate(`沈孤雁和斗笠人交换了一个眼神。\n\n斗笠人摘下斗笠——他的脸在月光下显得更加清晰。额头正中有一道浅浅的刀疤，从眉心一直延伸到发际。\n\n「我先自我介绍。」他说，「我叫秦无悔。是沈孤雁的师兄。」\n\n「师兄？」\n\n「同门。」沈孤雁解释道，「师父有三个徒弟——青娘是大弟子，我是二弟子，秦师兄是三弟子。但秦师兄在我们之中武功最高。」\n\n秦无悔没有否认。他只是直视你的眼睛。\n\n「你在偷听的时候——听到了黑无极的名字。」他说，「你应该知道这个名字意味着什么。」\n\n「江湖第一杀手。」\n\n「不止。」秦无悔说，「黑无极是暗星阁的执行者。而暗星阁——是天机卷最大的威胁。他们追杀天机卷的守护者已经七代了。」\n\n七代。\n\n沈孤雁接过话头：「天机卷记录了一千二百个名字——这些人都是暗星阁想要控制或消灭的目标。如果天机卷落入暗星阁手中——这一千二百个人，都会死。」\n\n「而我——」他指了指自己，「我是第七代守护者。已经守护了十五年。」`);
  divider();
  setFlag('knows_tianji_full');
  setFlag('met_qin_wuhui');
  G.wits += 5;
  narrate(`秦无悔继续说：「黑无极今晚到了苍龙镇外围。他带了四个人——都是暗星阁的一流杀手。他们的目标很明确：拿到天机卷，杀掉沈孤雁，消灭所有知情者。」\n\n「那我们该怎么办？」\n\n沈孤雁和秦无悔对视了一眼。\n\n「天机卷藏在落雁峰的石室里。」沈孤雁说，「石室有三道门——每道门需要一块玉牌才能打开。三块玉牌分别在三个不同的人手里。」\n\n「哪三个人？」\n\n「我手里有一块。另外两块——在胡青娘和白云生手里。但他们自己都不知道自己手里的东西是玉牌。」\n\n「所以需要说服他们交出来？」\n\n「不只需要说服。」秦无悔的声音冰冷，「还需要在天亮之前。因为黑无极不会等——他明天就会动手。」\n\n沈孤雁拍了拍你的肩膀。\n\n「现在你知道了一切。还愿意帮忙吗？」`);
  divider();
  showChoices([
    { text: '「我帮。」', id: 'mr_help', effects: () => { changeRel('shen_guyan', 10); setFlag('pledged_help'); G.charm += 3; }, next: SCENES['night_deep_choice'] },
    { text: '「我需要想想。」', id: 'mr_think', next: SCENES['night_deep_choice'] },
    { text: '「这超出了我能做的范围。」', id: 'mr_refuse', effects: () => { setFlag('refused_help'); }, next: SCENES['night_deep_choice'] },
  ]);
};

// ---- 深夜选择 ----
SCENES['night_deep_choice'] = () => {
  G.scene = 'night_deep_choice';
  G.time = 'deep_night';
  narrate(`夜已经很深了。\n\n苍龙镇陷入了彻底的寂静——只有河水声和偶尔的虫鸣。月光照在窗台上，银白色的，冷冷的。\n\n你躺在床上，听着自己的心跳。\n\n明天——也许一切都会改变。\n\n也许不会。\n\n但今晚——你睡不着。`);
  divider();
  showChoices([
    { text: '闭眼强迫自己入睡', id: 'ndc_sleep', next: SCENES['night_sleep'] },
    { text: '出去夜游苍龙镇', id: 'ndc_town', next: SCENES['night_town_hub'] },
    { text: '去后院找沈孤雁', id: 'ndc_shen', next: SCENES['evening_yard_shen'] },
  ]);
};

// ---- 深夜入睡 ----
SCENES['night_sleep'] = () => {
  G.scene = 'night_sleep';
  narrate(`你闭上眼睛。\n\n不知道过了多久——也许是半个时辰，也许是一个时辰——你终于迷迷糊糊地睡着了。\n\n梦里，你站在一条长长的走廊里。走廊的两边挂满了画像——每一幅画像上都是不同的人，有男有女，有老有少。他们的表情各异——有人在笑，有人在哭，有人在怒。\n\n走廊的尽头有一扇门。门上刻着三只雁。\n\n你推开门——\n\n一片白光。\n\n然后你醒了。\n\n窗外传来一声鸡鸣。天快亮了。`);
  divider();
  setFlag('slept_through_night');
  showChoices([
    { text: '起床', id: 'ns_wake', next: SCENES['night_town_hub'] },
  ]);
};

// ---- 夜间镇游入口 ----
SCENES['night_town_hub'] = () => {
  G.scene = 'night_town_hub';
  G.location = '苍龙镇·街道';
  G.time = 'night';
  narrate(`你走出客栈，来到苍龙镇的街道上。\n\n夜风吹过——带着河水的潮湿和远处松林的清香。月光把石板路照得亮如白昼，两边的店铺都关着门——只有几扇窗户里透出昏黄的烛光。\n\n镇子很安静。但不是死寂——你能听到河水声、虫鸣声、以及远处偶尔传来的狗叫声。\n\n街道向四个方向延伸：\n\n往东——是铁匠铺的方向。赵铁牛应该已经睡了吧？但他也许还在……\n\n往西——是药铺的方向。胡青娘说她还有药要泡——也许她还没睡。\n\n往南——是茶馆的方向。李婶的茶馆白天热闹，晚上……也许也开着？\n\n往北——是河边的方向。月光下的苍龙河应该很美。而且——老孙头也许还在那里。\n\n你还可以回客栈。`);
  divider();
  setFlag('night_town_visited');
  showChoices([
    { text: '往东——铁匠铺', id: 'nth_zhao', next: SCENES['night_blacksmith'] },
    { text: '往西——药铺', id: 'nth_hu', next: SCENES['night_pharmacy'] },
    { text: '往南——茶馆', id: 'nth_li', next: SCENES['night_teahouse'] },
    { text: '往北——河边', id: 'nth_river', next: SCENES['night_river_sun'] },
    { text: '回客栈', id: 'nth_inn', next: SCENES['evening_room'] },
  ]);
};

// 占位场景 —— 这些将在 story_part14.js 中完整展开
SCENES['night_blacksmith'] = () => {
  G.scene = 'night_blacksmith';
  narrate(`你朝铁匠铺走去。\n\n月光下的铁匠铺看起来和白天完全不同——炉火已经灭了，铺子里一片漆黑。但后院有一扇窗户亮着灯。\n\n赵铁牛还没睡。\n\n你走近了——听到里面传来一阵低沉的哼唱。是赵铁牛的声音，他在唱一首北方的军歌。歌声粗犷而苍凉。\n\n${danger('你需要决定——要不要在这个时间去打扰他？')}`);
  divider();
  showChoices([
    { text: '敲门', id: 'nb_knock', next: SCENES['night_town_hub'] },
    { text: '在门外听一会儿', id: 'nb_listen', effects: () => { G.wits += 2; setFlag('heard_zhao_song'); }, next: SCENES['night_town_hub'] },
    { text: '算了，回去', id: 'nb_back', next: SCENES['night_town_hub'] },
  ]);
};

SCENES['night_pharmacy'] = () => {
  G.scene = 'night_pharmacy';
  narrate(`药铺的门关着，但里面亮着灯。\n\n你凑近窗户往里看——胡青娘坐在柜台后面，面前摆着一个小铜炉。炉子上煮着什么东西，冒着淡淡的青烟。\n\n她的神情很专注——不时从药柜里取出药材，仔细地称量，然后加入炉中。那种专注的神态，和白天在药铺里笑盈盈招呼客人的她判若两人。\n\n她忽然抬起头——朝窗户的方向看了一眼。\n\n${danger('她发现你了。')}`);
  divider();
  showChoices([
    { text: '大方地走进去', id: 'np_enter', next: SCENES['night_town_hub'] },
    { text: '躲开', id: 'np_hide', effects: () => { G.wits += 1; }, next: SCENES['night_town_hub'] },
  ]);
};

SCENES['night_teahouse'] = () => {
  G.scene = 'night_teahouse';
  narrate(`你来到李婶的茶馆前。\n\n茶馆的门半开着——里面传来低低的说话声。不止一个人。\n\n你从门缝里看进去——李婶坐在柜台后面，面前有一个中年男人。他们正在交头接耳地说着什么。\n\n李婶的脸上没有了白天那种和蔼的笑容——取而代之的是一种精明而谨慎的表情。\n\n她忽然朝门口看了一眼。\n\n「进来吧。」她的声音很平静，「站在门口偷听可不像话。」`);
  divider();
  setFlag('found_li_spy');
  showChoices([
    { text: '走进去', id: 'nt_enter', next: SCENES['night_town_hub'] },
    { text: '转身离开', id: 'nt_leave', next: SCENES['night_town_hub'] },
  ]);
};

SCENES['night_river_sun'] = () => {
  G.scene = 'night_river_sun';
  narrate(`你来到河边。\n\n月光下的苍龙河美得不真实——水面像一面银镜，倒映着天上的星星和月亮。柳树的影子在水面上轻轻摇曳。\n\n然后你看到了——老孙头。\n\n他坐在河边的大石头上，和白天一模一样的姿势。鱼竿插在岸边，浮漂在水面上一动不动。\n\n但——\n\n${danger('他的鱼竿上没有鱼线。')}\n\n鱼竿是插在那里的，但没有线、没有钩、没有饵。他在「钓」一个根本不存在的东西。\n\n或者说——他不是在钓鱼。\n\n他低着头，手里拿着什么东西——在月光下闪闪发光。那是一块圆形的……玉？\n\n你屏住呼吸。\n\n老孙头把那块玉举到月光下看了看——然后叹了口气，把玉重新塞回了怀里。\n\n${hl('老孙头身上有一块玉。而且他以为没有人会在深夜的河边看到他。')}`);
  divider();
  setFlag('spotted_sun_jade');
  G.wits += 3;
  showChoices([
    { text: '上前跟他打招呼', id: 'nrs_greet', effects: () => { changeRel('old_sun', -5); setFlag('confronted_sun'); }, next: SCENES['night_town_hub'] },
    { text: '悄悄离开', id: 'nrs_leave', effects: () => { G.wits += 2; }, next: SCENES['night_town_hub'] },
    { text: '躲在暗处继续观察', id: 'nrs_watch', effects: () => { G.wits += 3; setFlag('watched_sun_longer'); }, next: SCENES['night_town_hub'] },
  ]);
};
