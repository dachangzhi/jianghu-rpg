"use strict";
/// <reference path="../types.ts" />
// story_part20.js - NPC深度对话第一轮
SCENES['shen_deep_talk'] = () => {
    setFlag('shen_deep_done');
    G.scene = 'inn_lobby';
    narrate(`你走向柜台。沈孤雁放下账簿。`);
    dialog('shen_guyan', '客官想聊什么？');
    divider();
    showChoices([
        { text: '苍龙镇的故事', id: 'shen_talk_town2', next: SCENES['shen_talk_town2'] },
        { text: '客栈过去', id: 'shen_talk_past2', next: SCENES['shen_talk_past2'] },
        { text: '今晚客人', id: 'shen_talk_guests2', next: SCENES['shen_talk_guests2'] },
        { text: '壁炉短剑', id: 'shen_talk_swords2', next: SCENES['shen_talk_swords2'] },
        { text: '不聊了', id: 'lobby_free', next: SCENES['lobby_free'] },
    ]);
};
SCENES['shen_talk_town2'] = () => {
    G.scene = 'inn_lobby';
    narrate(`他倒杯老酒目光深远。`);
    dialog('shen_guyan', '苍龙镇二百年历史。最多三四百人，现在百十来口。年轻人都走了，留下的走不掉。');
    narrate(`他说"走不掉"时手摩挲酒杯边缘。他也困在这里。`);
    changeRel('shen_guyan', 2);
    divider();
    showChoices([{ text: '继续', id: 'shen_deep_talk', next: SCENES['shen_deep_talk'] }]);
};
SCENES['shen_talk_past2'] = () => {
    G.scene = 'inn_lobby';
    narrate(`他看向壁炉上方。`);
    dialog('shen_guyan', '这客栈之前有三任老板。第三任叫周大勇，北方汉子，接手客栈五年，一直太平。直到一个雨夜来了不速之客。第二天周大勇人间蒸发——无血迹无尸体，只有翻倒的桌子和墙上的剑痕。');
    setFlag('heard_zhou_story');
    changeRel('shen_guyan', 3);
    divider();
    showChoices([{ text: '继续', id: 'shen_deep_talk', next: SCENES['shen_deep_talk'] }]);
};
SCENES['shen_talk_guests2'] = () => {
    G.scene = 'inn_lobby';
    narrate(`他压低声音。`);
    dialog('shen_guyan', '赵铁牛身上有死人堆味。白云生装醉但手是硬的。红衣女人喝茶一时辰呼吸频率不变——极端训练的人才做到。');
    setFlag('shen_analyzed_guests');
    changeRel('shen_guyan', 3);
    divider();
    showChoices([{ text: '继续', id: 'shen_deep_talk', next: SCENES['shen_deep_talk'] }]);
};
SCENES['shen_talk_swords2'] = () => {
    G.scene = 'inn_lobby';
    dialog('shen_guyan', '那对剑是我的。周大勇消失后客栈空三个月。我没地方去就接了。');
    setFlag('know_sword_origin');
    divider();
    showChoices([{ text: '继续', id: 'shen_deep_talk', next: SCENES['shen_deep_talk'] }]);
};
SCENES['liu_deep_talk'] = () => {
    setFlag('liu_deep_done');
    G.scene = 'inn_lobby';
    const rel = getRel('liu_ruyin') || 0;
    if (rel < 0) {
        narrate(`她头没抬，微微侧身让你看到折扇位置。`);
        dialog('liu_ruyin', '不想被打扰。找别人去。');
        divider();
        showChoices([{ text: '离开', id: 'lobby_free', next: SCENES['lobby_free'] }]);
    }
    else if (rel >= 10) {
        narrate(`她看到你来，嘴角微扬。把椅子拉开——邀请。`);
        dialog('liu_ruyin', '坐。新到碧螺春，尝尝？');
        divider();
        showChoices([
            { text: '你在观察什么', id: 'liu_talk_observ2', next: SCENES['liu_talk_observ2'] },
            { text: '苍龙镇值得注意的', id: 'liu_talk_town2', next: SCENES['liu_talk_town2'] },
            { text: '你为什么真的来', id: 'liu_talk_real2', next: SCENES['liu_talk_real2'] },
            { text: '离开', id: 'lobby_free', next: SCENES['lobby_free'] },
        ]);
    }
    else {
        narrate(`她微微抬下巴。`);
        dialog('liu_ruyin', '……什么事？');
        divider();
        showChoices([
            { text: '聊聊', id: 'liu_talk_chat2', next: SCENES['liu_talk_chat2'] },
            { text: '你在等人', id: 'liu_talk_wait2', next: SCENES['liu_talk_wait2'] },
            { text: '离开', id: 'lobby_free', next: SCENES['lobby_free'] },
        ]);
    }
};
SCENES['liu_talk_chat2'] = () => {
    G.scene = 'inn_lobby';
    narrate(`沉默一会儿后她开口。`);
    dialog('liu_ruyin', '你注意到了吗？这客栈每个人都在假装。沈老板假装普通，赵铁牛假装酒鬼，白云生假装喝醉。而我在假装不在乎。你呢？');
    changeRel('liu_ruyin', 2);
    divider();
    showChoices([{ text: '继续', id: 'liu_deep_talk', next: SCENES['liu_deep_talk'] }]);
};
SCENES['liu_talk_wait2'] = () => {
    G.scene = 'inn_lobby';
    dialog('liu_ruyin', '不如说我在监视某些人。我的目标不在你身上。至少目前不是。');
    setFlag('liu_watching');
    changeRel('liu_ruyin', 2);
    divider();
    showChoices([{ text: '继续', id: 'liu_deep_talk', next: SCENES['liu_deep_talk'] }]);
};
SCENES['liu_talk_observ2'] = () => {
    G.scene = 'inn_lobby';
    dialog('liu_ruyin', '沈老板每晚子时消失一刻钟。小莲采药药量与时间不成比例。而你——进客栈三秒就评估了所有人威胁等级。');
    setFlag('liu_shen_night_disappear');
    changeRel('liu_ruyin', 3);
    G.wits += 1;
    divider();
    showChoices([{ text: '继续', id: 'liu_deep_talk', next: SCENES['liu_deep_talk'] }]);
};
SCENES['liu_talk_town2'] = () => {
    G.scene = 'inn_lobby';
    dialog('liu_ruyin', '后山古松。镇西废祠堂。还有——沈老板客栈的地下室。');
    narrate(`地下室？她说深夜地板下传来微弱震动。`);
    setFlag('liu_told_basement');
    changeRel('liu_ruyin', 3);
    G.wits += 2;
    divider();
    showChoices([{ text: '继续', id: 'liu_deep_talk', next: SCENES['liu_deep_talk'] }]);
};
SCENES['liu_talk_real2'] = () => {
    G.scene = 'inn_lobby';
    narrate(`她沉默很久。`);
    dialog('liu_ruyin', '追人是幌子。我真正目的是保护一个人不受锦衣卫内部伤害。');
    setFlag('liu_true_purpose');
    changeRel('liu_ruyin', 8);
    G.wits += 2;
    divider();
    showChoices([{ text: '继续', id: 'liu_deep_talk', next: SCENES['liu_deep_talk'] }]);
};
SCENES['zhao_deep_talk'] = () => {
    setFlag('zhao_deep_done');
    G.scene = 'inn_lobby';
    narrate(`赵铁牛咧嘴笑。`);
    dialog('zhao_tieniu', '嘿兄弟！坐！赵铁牛请客！');
    divider();
    showChoices([
        { text: '你在军中待过', id: 'zhao_talk_mil2', next: SCENES['zhao_talk_mil2'] },
        { text: '为什么来这', id: 'zhao_talk_why2', next: SCENES['zhao_talk_why2'] },
        { text: '客栈怎么样', id: 'zhao_talk_inn2', next: SCENES['zhao_talk_inn2'] },
        { text: '离开', id: 'lobby_free', next: SCENES['lobby_free'] },
    ]);
};
SCENES['zhao_talk_mil2'] = () => {
    G.scene = 'inn_lobby';
    narrate(`他表情变了。`);
    dialog('zhao_tieniu', '边关。北疆。八年。他们管我叫铁壁。后来上头和北狄做交易，十三个兄弟又死八个——死在自己人算计里。从那以后我只为己喝酒拔刀。');
    setFlag('zhao_military_past');
    changeRel('zhao_tieniu', 5);
    divider();
    showChoices([{ text: '继续', id: 'zhao_deep_talk', next: SCENES['zhao_deep_talk'] }]);
};
SCENES['zhao_talk_why2'] = () => {
    G.scene = 'inn_lobby';
    dialog('zhao_tieniu', '掷铜板，正面朝右，就到了苍龙镇。');
    narrate(`他说时右手无意识摸左口袋——鼓鼓囊囊。`);
    changeRel('zhao_tieniu', 3);
    divider();
    showChoices([{ text: '继续', id: 'zhao_deep_talk', next: SCENES['zhao_deep_talk'] }]);
};
SCENES['zhao_talk_inn2'] = () => {
    G.scene = 'inn_lobby';
    narrate(`他压低声音。`);
    dialog('zhao_tieniu', '每天凌晨三点后院传来一声轻响——像石板移动。连续三天一秒不差。我军人出身不会听错。');
    setFlag('zhao_3am_sound');
    changeRel('zhao_tieniu', 3);
    G.wits += 1;
    divider();
    showChoices([{ text: '继续', id: 'zhao_deep_talk', next: SCENES['zhao_deep_talk'] }]);
};
SCENES['bai_deep_talk'] = () => {
    setFlag('bai_deep_done');
    G.scene = 'inn_lobby';
    narrate(`白云生不再装醉坐姿端正。`);
    dialog('bai_yunsheng', '聊什么？');
    divider();
    showChoices([
        { text: '你在找什么', id: 'bai_talk_search2', next: SCENES['bai_talk_search2'] },
        { text: '你师父是谁', id: 'bai_talk_master2', next: SCENES['bai_talk_master2'] },
        { text: '谁最可疑', id: 'bai_talk_sus2', next: SCENES['bai_talk_sus2'] },
        { text: '离开', id: 'lobby_free', next: SCENES['lobby_free'] },
    ]);
};
SCENES['bai_talk_search2'] = () => {
    G.scene = 'inn_lobby';
    narrate(`他压低声音。`);
    dialog('bai_yunsheng', '暗星令——暗星阁信物。只有它能进总部。最后出现在苍龙镇。我找了三年这是最后线索。');
    setFlag('bai_searching_anxing');
    changeRel('bai_yunsheng', 4);
    G.wits += 2;
    divider();
    showChoices([{ text: '继续', id: 'bai_deep_talk', next: SCENES['bai_deep_talk'] }]);
};
SCENES['bai_talk_master2'] = () => {
    G.scene = 'inn_lobby';
    narrate(`他看着银酒壶上的云纹。`);
    dialog('bai_yunsheng', '我师父曾是暗星阁成员。后来离开了。他让我找暗星令是为了摧毁暗星阁——只有拿到令牌才能进总部销毁天机卷。');
    setFlag('bai_mission_explained');
    changeRel('bai_yunsheng', 5);
    divider();
    showChoices([{ text: '继续', id: 'bai_deep_talk', next: SCENES['bai_deep_talk'] }]);
};
SCENES['bai_talk_sus2'] = () => {
    G.scene = 'inn_lobby';
    narrate(`他思考片刻。`);
    dialog('bai_yunsheng', '最可疑的是沈孤雁。有武功的人不会无缘无故在偏僻山镇守十五年。他在守护什么或隐藏什么。');
    changeRel('bai_yunsheng', 2);
    divider();
    showChoices([{ text: '继续', id: 'bai_deep_talk', next: SCENES['bai_deep_talk'] }]);
};
