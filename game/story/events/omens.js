"use strict";
/// <reference path="../types.ts" />
SCENES['omen_zhao'] = () => {
    G.scene = 'omen_zhao';
    G.time = 'deep_night';
    narrate('你被赵铁牛急促的敲门声惊醒。他手里握着军用铁锤——三个黑影翻过了客栈院墙。身手很快——不是小毛贼。暗星阁的人已经潜入了。第四个人绕到了后院那扇锁着的小门。');
    divider();
    setFlag('omen_zhao_triggered');
    G.wits += 3;
    showChoices([
        { text: '跟赵铁牛通知沈孤雁', id: 'oz_s', effects: () => { changeRel('zhao_tieniu', 5); setFlag('warned_shen_with_zhao'); }, next: SCENES['attack_begin'] },
        { text: '去后院阻止第四个人', id: 'oz_y', effects: () => { G.sword += 2; setFlag('intercepted_fourth'); }, next: SCENES['attack_yard'] },
        { text: '先通知柳如烟和白云生', id: 'oz_o', effects: () => { G.charm += 2; setFlag('warned_others'); }, next: SCENES['attack_begin'] },
    ]);
};
SCENES['omen_hu'] = () => {
    G.scene = 'omen_hu';
    G.time = 'deep_night';
    narrate('你被刺鼻的药烟惊醒。药铺方向有火光——胡青娘在用迷魂散拖延时间。两个黑衣人围攻药铺。');
    divider();
    setFlag('omen_hu_triggered');
    G.wits += 3;
    showChoices([
        { text: '冲去药铺帮胡青娘', id: 'oh_h', effects: () => { changeRel('hu_qingniang', 5); setFlag('helped_hu_attack'); G.sword += 2; }, next: SCENES['attack_pharmacy'] },
        { text: '回大堂通知沈孤雁', id: 'oh_s', next: SCENES['attack_begin'] },
        { text: '侧面包抄刺客', id: 'oh_f', effects: () => { G.wits += 3; setFlag('flanked_assassins'); }, next: SCENES['attack_pharmacy'] },
    ]);
};
SCENES['omen_bai'] = () => {
    G.scene = 'omen_bai';
    G.time = 'deep_night';
    narrate('白云生推醒了你。他完全清醒——三年装醉就为了等这一天。他说暗星阁来了五人：一个在客栈屋顶、两个在药铺、一个在后院、黑无极本人在镇外。他在客栈周围布了七根绊线——响了四根。');
    divider();
    setFlag('omen_bai_triggered');
    G.wits += 5;
    showChoices([
        { text: '先帮沈孤雁', id: 'ob_s', effects: () => { changeRel('bai_yunsheng', 5); }, next: SCENES['attack_begin'] },
        { text: '去截黑无极', id: 'ob_h', effects: () => { G.sword += 3; setFlag('chose_intercept_hei'); }, next: SCENES['attack_hei_outside'] },
    ]);
};
SCENES['attack_begin'] = () => {
    G.scene = 'attack_begin';
    G.location = '听雨客栈·大堂';
    narrate('你冲下楼梯——沈孤雁已经站在那里，白中衣，黑剑出鞘。大门被踢开——一个黑衣弯刀手站在门口。沈孤雁挡在你面前：走。');
    divider();
    setFlag('attack_started');
    showChoices([
        { text: '拔剑迎战（剑术检定1）', id: 'ab_f', effects: () => { if (G.sword >= 5) {
                setFlag('sword_check_1_pass');
            }
            else {
                addHp(-15);
                setFlag('sword_check_1_fail');
            } }, next: SCENES['attack_fight_1'] },
        { text: '从后门撤', id: 'ab_r', effects: () => { G.wits += 2; }, next: SCENES['attack_retreat'] },
        { text: '打翻桌子制造障碍', id: 'ab_b', effects: () => { G.wits += 3; setFlag('used_barricade'); }, next: SCENES['attack_fight_1'] },
    ]);
};
SCENES['attack_fight_1'] = () => {
    G.scene = 'attack_fight_1';
    narrate('黑衣人出刀——快如闪电。沈孤雁的黑剑从侧面刺来——划破了黑衣人的面罩。年轻面孔，二十出头。烟雾弹炸开——视线被遮。');
    divider();
    showChoices([
        { text: '剑术检定2：凭听觉判断位置', id: 'af1_s', effects: () => { if (G.sword >= 7) {
                setFlag('sword_check_2_pass');
                G.wits += 3;
            }
            else {
                addHp(-10);
                setFlag('sword_check_2_fail');
            } }, next: SCENES['attack_fight_2'] },
        { text: '蹲下等烟雾散去', id: 'af1_w', effects: () => { G.wits += 1; }, next: SCENES['attack_fight_2'] },
        { text: '朝后门冲', id: 'af1_d', next: SCENES['attack_retreat'] },
    ]);
};
SCENES['attack_fight_2'] = () => {
    G.scene = 'attack_fight_2';
    narrate('烟雾散去。跑了两个——还有一个在后院。赵铁牛在后面迎战。远处药铺方向传来爆炸声——整个苍龙镇都在被袭击。');
    divider();
    showChoices([
        { text: '去后院帮赵铁牛', id: 'af2_z', effects: () => { changeRel('zhao_tieniu', 5); setFlag('helped_zhao_fight'); }, next: SCENES['attack_zhao_fight'] },
        { text: '去药铺帮胡青娘', id: 'af2_h', effects: () => { changeRel('hu_qingniang', 5); setFlag('helped_hu_fight'); }, next: SCENES['attack_pharmacy'] },
        { text: '留在沈孤雁身边', id: 'af2_s', effects: () => { changeRel('shen_guyan', 3); }, next: SCENES['attack_shen_defense'] },
    ]);
};
SCENES['attack_zhao_fight'] = () => {
    G.scene = 'attack_zhao_fight';
    narrate('后院——赵铁牛用军用铁锤和黑衣双刀手缠斗。十二年老兵的判断力和节奏感远超对手——铁锤横扫正中黑衣人腰部。赵铁牛的眼睛在发亮：好久没这么痛快了。');
    divider();
    changeRel('zhao_tieniu', 5);
    showChoices([{ text: '继续', id: 'azf_c', next: SCENES['attack_retreat'] }]);
};
SCENES['attack_pharmacy'] = () => {
    G.scene = 'attack_pharmacy';
    narrate('药铺——一个黑衣人已中毒倒地。胡青娘用淬毒银针和另一个缠斗。你从侧面夹击——黑衣人撤退。胡青娘搜出了暗星阁今夜的作战图：同时攻击客栈、药铺、铁匠铺、河边四个地点。老孙头也在被袭击。');
    divider();
    changeRel('hu_qingniang', 5);
    setFlag('got_battle_map');
    G.wits += 3;
    showChoices([
        { text: '去河边帮老孙头', id: 'ap_s', next: SCENES['attack_river'] },
        { text: '回客栈汇合', id: 'ap_i', next: SCENES['attack_retreat'] },
    ]);
};
SCENES['attack_shen_defense'] = () => {
    G.scene = 'attack_shen_defense';
    narrate('沈孤雁站在大堂中央。一个乙级杀手从天花板跳下——沈孤雁两招就缴了他的械。剑尖停在喉咙前一寸。但杀手咬碎了毒囊自尽。沈孤雁叹气：暗星阁的人从来不留活口。');
    divider();
    setFlag('witnessed_shen_skill');
    changeRel('shen_guyan', 5);
    G.wits += 3;
    showChoices([
        { text: '剑术检定3：攻击屋顶杀手', id: 'asd_s', effects: () => { if (G.sword >= 9) {
                setFlag('sword_check_3_pass');
                G.wits += 3;
            }
            else {
                addHp(-20);
                setFlag('sword_check_3_fail');
            } }, next: SCENES['attack_retreat'] },
        { text: '掩护沈孤雁撤退', id: 'asd_c', effects: () => { changeRel('shen_guyan', 5); }, next: SCENES['attack_retreat'] },
    ]);
};
SCENES['attack_yard'] = () => {
    G.scene = 'attack_yard';
    narrate('后院——一个黑衣人在撬那扇锁着的小门。你上前交手——剑尖划伤他的手臂。他笑了：够格。然后打了红色信号弹——他在召唤黑无极。');
    divider();
    setFlag('signaled_hei');
    showChoices([
        { text: '追杀他', id: 'ay_k', effects: () => { G.sword += 2; setFlag('killed_signaler'); }, next: SCENES['attack_retreat'] },
        { text: '撤退', id: 'ay_r', next: SCENES['attack_retreat'] },
    ]);
};
SCENES['attack_hei_outside'] = () => {
    G.scene = 'attack_hei_outside';
    narrate('你和白云生冲到镇外树林。黑无极就站在月光下——没有面罩。普通面孔，高颧骨薄嘴唇。双手负在身后，没有拔刀。他说：来得比我预想的快。但我等的不是你。');
    divider();
    setFlag('met_hei_face_to_face');
    G.wits += 5;
    showChoices([
        { text: '你等的人不会来', id: 'aho_b', effects: () => { G.charm += 3; setFlag('blocked_hei'); }, next: SCENES['attack_retreat'] },
        { text: '拔剑攻击', id: 'aho_a', effects: () => { G.sword += 2; addHp(-25); setFlag('attacked_hei'); }, next: SCENES['attack_retreat'] },
        { text: '你为什么做杀手', id: 'aho_q', effects: () => { changeRel('hei_wuji', 5); G.wits += 2; }, next: SCENES['attack_retreat'] },
    ]);
};
SCENES['attack_river'] = () => {
    G.scene = 'attack_river';
    narrate('河边——老孙头用鱼竿当武器和两个黑衣人对峙。他会武功——军中近身格斗术。你冲上去帮忙，合力击退一人。老孙头说：外来人，你不该来。但他没赶你走。');
    divider();
    changeRel('old_sun', 3);
    setFlag('helped_sun_fight');
    showChoices([{ text: '继续', id: 'ar_c', next: SCENES['attack_retreat'] }]);
};
SCENES['attack_retreat'] = () => {
    G.scene = 'attack_retreat';
    narrate('战斗渐渐平息——暗星阁的杀手开始撤退。红色信号弹升空——是他们的撤退信号。沈孤雁站在客栈大堂中央——黑剑上的血已经干了。他看着你，然后看着满地的狼藉。');
    divider();
    setFlag('attack_ended');
    narrate('伤亡统计：' + (checkFlag('helped_zhao_fight') ? '赵铁牛——轻伤，不影响行动。' : '赵铁牛——左肩中了一刀，但他说不碍事。') + (checkFlag('helped_hu_fight') ? '胡青娘——无伤。' : '胡青娘——手臂被划了一道，已自己上药。') + (checkFlag('helped_sun_fight') ? '老孙头——无大碍。' : '老孙头——情况不明。') + '白云生——轻微擦伤。柳如烟——未参与正面战斗，但她在楼上掩护了撤退。小莲——躲在厨房里，安然无恙。');
    divider();
    showChoices([{ text: '天亮后商议对策', id: 'aret_d', next: SCENES['chapter2_hub'] }]);
};
SCENES['attack_casualty_high'] = () => {
    G.scene = 'attack_casualty_high';
    narrate('由于你未能及时帮助NPC——伤亡惨重。赵铁牛左腿旧伤复发，需要休养至少三天。胡青娘中了毒烟，正在自行解毒。老孙头失踪了——战斗结束后没有人看到他。苍龙镇的防线被撕开了一个大口子。');
    divider();
    setFlag('heavy_casualties');
    showChoices([{ text: '继续', id: 'ach_c', next: SCENES['chapter2_hub'] }]);
};
SCENES['attack_casualty_low'] = () => {
    G.scene = 'attack_casualty_low';
    narrate('由于你及时帮助了多位NPC——伤亡轻微。赵铁牛只是皮肉伤。胡青娘毫发无伤。老孙头虽然受了点伤但已自行处理。白云生和小莲都安全。苍龙镇的防线基本完好。');
    divider();
    setFlag('light_casualties');
    showChoices([{ text: '继续', id: 'acl_c', next: SCENES['chapter2_hub'] }]);
};
