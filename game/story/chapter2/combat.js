"use strict";
/// <reference path="../types.ts" />
// story_part23.js - 战斗和危机扩写
// ==================== 黑无极战斗系统 ====================
SCENES['combat_hei_encounter'] = () => {
    G.scene = 'combat';
    narrate(`月光被乌云吞没的刹那，一道黑影从树梢落下。黑无极。\n\n他的刀横在身前，刀刃上映着你模糊的倒影。雨滴落在刀身上，沿着血槽滑落，像是刀在流血。\n\n「又见面了。」他的声音从面罩后面传出来，低沉而平静，「这一回，我不是来谈判的。」\n\n你握紧了剑柄。剑鞘上的雨水让手掌有些打滑——你调整了握姿，将剑柄微微下压，用拇指抵住护手。\n\n黑无极没有立刻出刀。他在等——等你先动。这是他惯用的试探方式：让对手先暴露意图。\n\n你听到了身后远处赵铁牛的喊声，但被雨声和风声吞没了。此刻只有你和黑无极。\n\n他的刀法——传闻融合了三家之长：天山派的快刀做底子，崆峒派的劈刀做杀招，还有一招不知来历的横斩，曾一刀切断过青城派长老的手腕。\n\n你深吸一口气。雨从领口灌进去，冰凉刺骨。`);
    setFlag('combat_hei_started');
    G.sword += 1;
    divider();
    showChoices([
        { text: '主动出击——先发制人（剑术≥14）', id: 'combat_hei_attack', req: [[() => req('sword', 14), '剑术≥14']], effects: () => { setFlag('hei_first_strike'); }, next: SCENES['combat_hei_attack'] },
        { text: '摆出防御架势——等他先动', id: 'combat_hei_defend', effects: () => { G.wits += 1; setFlag('hei_wait_mode'); }, next: SCENES['combat_hei_defend'] },
        { text: '向客栈方向撤退', id: 'combat_hei_retreat', next: SCENES['combat_hei_retreat'] },
    ]);
};
SCENES['combat_hei_attack'] = () => {
    G.scene = 'combat';
    narrate(`你踏出第一步——剑尖直指黑无极的咽喉。\n\n他微微侧身，你的剑擦着他的面罩划过，削下了半截黑布。面罩下露出一道从眉角延伸到下颌的旧伤疤——刀疤泛着银白色，在黑暗中像一条蜈蚣趴在他脸上。\n\n他冷哼一声。刀光骤起。\n\n第一刀从右侧横扫而来——你举剑格挡，金铁交鸣声刺入耳膜。力量沿着剑身传到你的手腕，震得虎口发麻。他的臂力比你预想的大得多——这不是技巧型刀法，是力量型杀招。\n\n第二刀紧跟其后，从下往上挑。你来不及收剑回防，只能用剑柄格挡。他的刀尖在你胸前划过——衣襟被割开，皮肤上留下一道浅浅的白痕。\n\n第三刀——他收刀回撤，留出了半步空当。\n\n是破绽？还是陷阱？\n\n你想起胡青娘说过的话：「黑无极最危险的不是他的杀招，而是他故意露出的破绽——等你上钩。」`);
    addHp(-10);
    divider();
    showChoices([
        { text: '抓住空当——全力刺出（剑术≥16）', id: 'combat_hei_exploit', req: [[() => req('sword', 16), '剑术≥16']], effects: () => { setFlag('hit_hei_shoulder'); }, next: SCENES['combat_hei_exploit'] },
        { text: '不上当——向左横移，绕到他侧面', id: 'combat_hei_flank', effects: () => { G.wits += 1; }, next: SCENES['combat_hei_flank'] },
        { text: '虚晃一剑，实为后退', id: 'combat_hei_feint', next: SCENES['combat_hei_feint'] },
    ]);
};
SCENES['combat_hei_defend'] = () => {
    G.scene = 'combat';
    narrate(`你双脚微微分开，重心下沉，剑斜举至右肩——这是标准的「闭门式」防御架势。不华丽，但稳固。\n\n黑无极看出了你的意图。他绕着你缓缓移动，像一头正在观察猎物的黑豹。脚步无声——他穿的是软底布靴，踩在湿泥上几乎没有声响。\n\n「聪明。」他说，「但聪明的剑客往往死得很慢。」\n\n他突然加速——刀从上方劈下。这一刀带着破风声，你举剑横挡。冲击力让你的膝盖微微弯曲——地上的泥浆被踩出了两个深坑。\n\n你没有退后半步。\n\n他收刀再劈。第二刀、第三刀、第四刀——连续四刀从不同角度落下，像是打铁一般，每一刀都比你上一次格挡的恢复时间更短。\n\n你的手臂开始酸痛。呼吸变得急促。\n\n但他也在消耗。你能看到他的刀路在变窄——他的肩膀肌肉已经不如第一刀时那么舒展了。\n\n他在用蛮力碾压你。等他力气用尽——就是你反击的时候。`);
    addHp(-8);
    setFlag('defended_well');
    divider();
    showChoices([
        { text: '等他力竭——全力反击！（剑术≥15）', id: 'combat_hei_counter', req: [[() => req('sword', 15), '剑术≥15']], effects: () => { setFlag('counter_success'); }, next: SCENES['combat_hei_counter'] },
        { text: '找机会喊话——试图动摇他的意志（心机≥12）', id: 'combat_hei_talk', req: [[() => req('wits', 12), '心机≥12']], next: SCENES['combat_hei_talk'] },
        { text: '向后翻滚拉开距离', id: 'combat_hei_roll', next: SCENES['combat_hei_roll'] },
    ]);
};
SCENES['combat_hei_exploit'] = () => {
    G.scene = 'combat';
    narrate(`你抓住了那个空当。\n\n剑尖刺出——笔直、精准、快速。像一条从草丛中弹出的毒蛇。\n\n黑无极的瞳孔微缩。他确实没料到你会这么果断。但他的反应同样快得惊人——在剑尖距离他肩膀只有三寸的时候，他的身体以一种不合常理的角度扭转，剑刃擦着他的锁骨划过，割开了衣裳和皮肉。\n\n血溅了出来——不多，但足以证明你伤到了他。\n\n黑无极低头看了看肩膀上的伤口，嘴角微微抽动。那不是痛苦的表情——是意外。\n\n「好久没有人伤到我了。」他用手背擦了擦伤口旁的血，「上一次——是十年前。一个用枪的老人。后来我杀了他。」\n\n他重新握紧了刀。但这一次——他的站姿变了。不再是试探性的半蹲，而是重心前倾的冲刺姿势。\n\n他要认真了。`);
    changeRel('hei_wuji', 3);
    divider();
    showChoices([
        { text: '迎上去——决一死战（剑术≥18）', id: 'combat_hei_final', req: [[() => req('sword', 18), '剑术≥18']], next: SCENES['combat_hei_final'] },
        { text: '趁机拉开距离——你已经伤了他，足够了', id: 'combat_hei_retreat_win', effects: () => { setFlag('injured_hei'); }, next: SCENES['combat_hei_retreat'] },
    ]);
};
SCENES['combat_hei_flank'] = () => {
    G.scene = 'combat';
    narrate(`你向左横移了两步——果然，黑无极的空当是个陷阱。他刀尖一转，正好切向你原来的位置。如果你刚才冲上去，现在已经中刀了。\n\n你绕到了他的侧面。这个角度他的刀很难够到——但他的反应也很快，脚步一转重新面对你。\n\n你们像两只斗鸡一样在雨中对峙、移动、试探。每一方都在寻找对方的死角。\n\n你的靴子踩进了一个浅水坑——脚下一滑。身体失去了平衡。\n\n黑无极不会放过这个机会。\n\n刀来了。\n\n你勉强举剑格挡——但重心不稳让你无法完全卸力。刀锋从你的左臂外侧划过，割开了一道三寸长的口子。\n\n疼痛像火烧一样蔓延开来。雨水浸入伤口，让灼烧感更加剧烈。\n\n你咬牙稳住身形，退了三步。\n\n左臂在流血。但还不算深——没有伤到筋骨。还能握剑。`);
    addHp(-18);
    setFlag('injury_left_arm');
    divider();
    showChoices([
        { text: '继续战斗！', id: 'combat_hei_hurt_continue', next: SCENES['combat_hei_hurt_continue'] },
        { text: '撤退——先处理伤口', id: 'combat_hei_retreat', next: SCENES['combat_hei_retreat'] },
    ]);
};
SCENES['combat_hei_feint'] = () => {
    G.scene = 'combat';
    narrate(`你假装出剑——手腕一抖，剑尖画了个半圆。黑无极下意识举刀格挡，但你的剑在半途变向，收了回来。\n\n虚晃成功——他的重心被你的假动作带偏了半步。\n\n你趁机后撤了五步，拉开了安全距离。\n\n黑无极稳住身形，看着你，眼中闪过一丝意外。\n\n「不错的虚招。」他说，「但虚招只能用一次。」\n\n他没有追上来。他站在原地，刀横在胸前，像一座黑色的石像。雨从他的肩膀滑落，在脚边汇成了一小滩水洼。\n\n你们之间隔着五步的距离——足以让任何一方重新做出选择。`);
    G.wits += 1;
    divider();
    showChoices([
        { text: '「黑无极，我们不必打。坐下来谈。」', id: 'combat_hei_negotiate', effects: () => { G.charm += 1; }, next: SCENES['combat_hei_negotiate'] },
        { text: '趁他不动——转身就跑', id: 'combat_hei_retreat', next: SCENES['combat_hei_retreat'] },
        { text: '再次出剑——这一次是真的', id: 'combat_hei_attack', next: SCENES['combat_hei_attack'] },
    ]);
};
SCENES['combat_hei_counter'] = () => {
    G.scene = 'combat';
    narrate(`黑无极的第七刀落下的瞬间——你看到了破绽。\n\n他的右肩微微下沉。这是体力不支的信号——连续七刀全力劈砍，即使是黑无极的体魄也开始透支了。\n\n你没有格挡。你向右侧跨了一步，让他的刀从你左肩旁擦过。刀风割断了你几缕头发。\n\n然后你出剑了。\n\n反击——不是直刺，而是横斩。你的剑从下往上划出一道弧线，目标是他的手腕。\n\n黑无极反应极快——他松开刀柄，让刀在空中转了一圈，然后用另一只手接住。但你的剑还是在他右手背上留下了一道血痕。\n\n他退了三步，看着手背上的伤口。血从指缝间渗出来，滴在地上的泥水里。\n\n「你——」他抬头看你，目光中第一次出现了认真审视的神色，「你不是普通的剑客。」`);
    setFlag('counter_hit_hei');
    changeRel('hei_wuji', 5);
    divider();
    showChoices([
        { text: '「我只是想保护我想保护的人。」', id: 'combat_hei_respect', effects: () => { G.charm += 2; changeRel('hei_wuji', 3); }, next: SCENES['combat_hei_respect'] },
        { text: '继续进攻——趁他受伤扩大优势', id: 'combat_hei_followup', req: [[() => req('sword', 17), '剑术≥17']], next: SCENES['combat_hei_followup'] },
    ]);
};
SCENES['combat_hei_talk'] = () => {
    G.scene = 'combat';
    narrate(`你在格挡的间隙开口了。\n\n「黑无极——你真正想要的是什么？杀了我对你有什么好处？天机卷里的名字和你无关。」\n\n他的刀在空中停了一瞬。\n\n「你不懂。」他说。但他的声音没有之前那么坚定了。\n\n「我不懂？你为了三千两黄金去杀一个素未谋面的人——这是你的选择？还是暗星阁替你做的选择？」\n\n黑无极的刀垂下半寸。这半寸——就是犹豫。\n\n你看到了他眼底一闪而过的东西。不是杀意——是疲惫。\n\n「暗星阁已经不存在了。」他说，「但我还在。我需要知道——天机卷上有没有我师父的名字。仅此而已。」\n\n他的声音变了。不再是杀手的冷厉——而是一个徒弟的执念。\n\n原来如此。他不是来杀人的。他是来找人的。`);
    setFlag('knows_hei_motive');
    changeRel('hei_wuji', 5);
    G.wits += 2;
    divider();
    showChoices([
        { text: '「如果你放下刀——我帮你找。」', id: 'combat_hei_alliance', effects: () => { setFlag('hei_alliance_temp'); changeRel('hei_wuji', 8); }, next: SCENES['combat_hei_alliance'] },
        { text: '「天机卷上的名字——我不能告诉你。」', id: 'combat_hei_refuse_info', next: SCENES['combat_hei_refuse_info'] },
    ]);
};
SCENES['combat_hei_roll'] = () => {
    G.scene = 'combat';
    narrate(`你向后翻滚——泥水溅了满身，但拉开了三步的距离。黑无极没有追击——他似乎并不急于结束战斗。\n\n你站起身来，浑身是泥。左膝在翻滚时撞到了一块石头，隐隐作痛。\n\n黑无极站在原地，刀尖指地。雨越下越大了。\n\n「你跑不掉的。」他说，语气平淡得像在陈述天气，「这个镇子已经被包围了。暗星阁的人——还有其他人。你只有一个选择。」\n\n「什么选择？」\n\n「站到我这边。」`);
    divider();
    showChoices([
        { text: '拒绝——宁死不屈', id: 'combat_hei_refuse', effects: () => { changeRel('hei_wuji', -3); }, next: SCENES['combat_hei_refuse_info'] },
        { text: '假装答应——伺机脱身（心机≥14）', id: 'combat_hei_fake_agree', req: [[() => req('wits', 14), '心机≥14']], effects: () => { setFlag('fake_agreed_hei'); G.wits += 2; }, next: SCENES['combat_hei_fake_agree'] },
    ]);
};
SCENES['combat_hei_final'] = () => {
    G.scene = 'combat';
    narrate(`你冲了上去。\n\n剑与刀在雨中交错——金铁交鸣声回荡在空旷的夜色中。你们贴得极近，近到你能看到他面罩下那双冰冷的眼睛里映着你的倒影。\n\n他的刀法变了——不再是试探性的快刀，而是带着杀意的连环斩。每一刀都瞄准你的要害：喉咙、心口、太阳穴。\n\n你格挡了第一刀、第二刀、第三刀——第四刀，你的剑在格挡时发出了不祥的声响。剑身上出现了一道裂纹。\n\n不能再硬接了。\n\n你改变了策略——不再格挡，而是闪避。身体像柳枝一样在刀光中穿梭，每一刀都差之毫厘地从你身侧划过。\n\n然后你找到了他的节奏。\n\n第七刀。他的刀举到最高点的一瞬间——右肋完全暴露。\n\n你出剑了。\n\n剑尖刺入了他的右肋下方。不深——只有两寸。但足以让他停顿。\n\n黑无极低头看着插在自己肋下的剑，缓缓抬起头。\n\n他的眼神变了——从冰冷变成了……尊敬？\n\n「好剑法。」他说。然后一掌拍在你的胸口。\n\n你飞了出去。后背撞在一棵松树上，疼得你几乎喘不上气。眼前一黑。\n\n等你重新看清楚的时候——黑无极已经走了。地上只有一滩血迹和一串渐渐远去的脚印。\n\n你赢了。但代价是胸口的剧痛和满身的泥。`);
    addHp(-30);
    setFlag('defeated_hei_combat');
    changeRel('hei_wuji', 10);
    G.sword += 2;
    divider();
    showChoices([
        { text: '挣扎着站起来，回客栈', id: 'combat_return_hurt', next: SCENES['injury_chest_treatment'] },
        { text: '倒在地上休息一会儿……', id: 'combat_rest_ground', next: SCENES['injury_chest_treatment'] },
    ]);
};
SCENES['combat_hei_followup'] = () => {
    G.scene = 'combat';
    narrate(`你没有给他喘息的机会。\n\n剑光如瀑——三连斩，一剑快过一剑。黑无极用受伤的右手勉强格挡了前两剑，第三剑刺中了他的左肩。\n\n他闷哼一声，退了五步。血从两个伤口——右手背和左肩——同时渗出来，将他的黑衣染得更黑。\n\n但他的眼神没有退缩。反而——笑了。\n\n「够了。」他收刀入鞘，「今天的胜负——到此为止。你比我预想的强。」\n\n他转身走入黑暗中。几步之后，他的身影就被雨幕吞没了。\n\n你赢了这场战斗。但你知道——这不会是最后一次。`);
    setFlag('won_hei duel');
    addHp(-12);
    changeRel('hei_wuji', 8);
    divider();
    showChoices([
        { text: '回客栈处理伤口', id: 'combat_return', next: SCENES['injury_chest_treatment'] },
    ]);
};
SCENES['combat_hei_respect'] = () => {
    G.scene = 'combat';
    narrate(`黑无极沉默了很久。\n\n雨打在他的刀刃上，发出细碎的声响。远处传来一声雷鸣——天边闪过一道白光，照亮了他满是伤疤的脸。\n\n「保护……」他重复了这两个字，像是在咀嚼一颗苦涩的果实，「很久没有人跟我说这种话了。上一次说这种话的人——是我师父。」\n\n他缓缓收刀入鞘。动作很慢，像是在做一个艰难的决定。\n\n「我暂时不会杀你。」他说，「但不代表我放弃了天机卷。我们还会再见。」\n\n他转身离去。在消失于黑暗之前，他留下了一句话：\n\n「……小心白云生。他不是你看到的那样。」`);
    setFlag('hei_warning_bai');
    changeRel('hei_wuji', 5);
    divider();
    showChoices([
        { text: '回客栈——留意白云生', id: 'combat_return_suspicious', effects: () => { setFlag('suspicious_of_bai'); }, next: SCENES['lobby_free'] },
    ]);
};
SCENES['combat_hei_alliance'] = () => {
    G.scene = 'combat';
    narrate(`黑无极收刀入鞘。\n\n「你不怕我反悔？」他问。\n\n「怕。但我更怕错过一个可能的盟友。」\n\n他盯着你看了很久。雨在他脸上留下了水痕——分不清是雨还是别的什么。\n\n「我师父叫应天南。二十年前他带着我离开了暗星阁——因为他不愿再做杀手。后来他被杀了。沈孤雁杀的。」\n\n他的声音平静得可怕。\n\n「但天机卷上可能有我师父的真实身份——他原来不叫应天南。我想知道他是谁。」\n\n你点了点头。\n\n「我帮你。」\n\n黑无极伸出手——那只布满老茧的手。你握住了它。\n\n冰冷的雨夜。两个陌生人握了手。\n\n也许这就是江湖——在刀光剑影之后，偶尔会有这样的时刻。`);
    setFlag('hei_true_alliance');
    changeRel('hei_wuji', 12);
    divider();
    showChoices([
        { text: '一起回客栈', id: 'combat_hei_return_together', next: SCENES['lobby_free'] },
    ]);
};
SCENES['combat_hei_refuse_info'] = () => {
    G.scene = 'combat';
    narrate(`黑无极的刀重新举了起来。\n\n「那我只能自己去找了。」他说。语气没有愤怒——只有决绝。\n\n他没有再攻击。他收刀入鞘，转身走入了黑暗中。\n\n你知道他不会放弃。他会用其他方式找到天机卷。\n\n而你必须比他更快。`);
    changeRel('hei_wuji', -5);
    divider();
    showChoices([
        { text: '回客栈', id: 'combat_return', next: SCENES['lobby_free'] },
    ]);
};
SCENES['combat_hei_negotiate'] = () => {
    G.scene = 'combat';
    narrate(`「坐下来谈？」黑无极重复了一下你的话，像是听到了什么荒唐的事情。\n\n「我知道你不信任我。」你说，「但至少——听我把话说完。」\n\n他没有动。刀依然横在身前。但他没有打断你——这是好兆头。\n\n「天机卷上的名字——不只是纸上的墨迹。每一个名字背后都是一条命。你的师父也许就在上面。你想知道他的真名——我可以理解。但用刀逼出来的答案，不是你想要的答案。」\n\n黑无极的手指在刀柄上轻轻敲了三下——这是他在思考的习惯动作。\n\n「……说下去。」`);
    G.charm += 1;
    changeRel('hei_wuji', 4);
    divider();
    showChoices([
        { text: '「如果你放下刀——我帮你找你师父的名字。」', id: 'combat_hei_alliance', next: SCENES['combat_hei_alliance'] },
        { text: '「天机卷的事太复杂了。我们回客栈慢慢说。」', id: 'combat_hei_tavern_talk', next: SCENES['combat_hei_alliance'] },
    ]);
};
SCENES['combat_hei_fake_agree'] = () => {
    G.scene = 'combat';
    narrate(`你挤出了一点笑容——虽然你在雨中浑身是泥，笑起来一定很滑稽。\n\n「好。我站到你这边。」\n\n黑无极打量了你几秒。\n\n「聪明的选择。」他说。但他并没有完全放松警惕——他向你走了两步，但没有收刀。\n\n「先跟我来。暗星阁的临时据点在后山的一个山洞里。那里有你需要的信息。」\n\n他转身带路。你跟在后面——同时默默记下了路线。左手边的歪脖子松树，右边的巨石，前面的小溪岔口。\n\n你在等一个机会——一个他背对你的机会。\n\n但黑无极始终走在你侧前方，保持着既能看到你又不完全背对你的角度。\n\n这个人的警觉性——远超你的想象。`);
    divider();
    showChoices([
        { text: '老老实实跟他走——见机行事', id: 'combat_hei_follow', next: SCENES['lobby_free'] },
        { text: '趁他踩石头时推他——然后跑', id: 'combat_hei_push_run', next: SCENES['combat_hei_retreat'] },
    ]);
};
SCENES['combat_hei_retreat'] = () => {
    G.scene = 'retreat';
    narrate(`你转身就跑。\n\n脚下是湿滑的泥地——你踩着树根和石头，深一脚浅一脚地往客栈方向冲。身后没有追来的脚步声。\n\n黑无极没有追你。\n\n也许是因为他不想在雨中追逐一个逃跑的对手——那不符合他的风格。也许是因为他并不真的想杀你。\n\n不管怎样——你活着回到了客栈。\n\n推开门的时候，赵铁牛正在壁炉旁擦他的铁锤。他看到你浑身是泥的样子，立刻站了起来。\n\n「出什么事了？」\n\n「黑无极。」你喘着气说。\n\n赵铁牛的脸色一变。他放下了铁锤，从炉壁上取下一把短斧。\n\n「在哪里？」`);
    divider();
    showChoices([
        { text: '「在后山。但他暂时不会来了。」', id: 'combat_retreat_safe', next: SCENES['lobby_free'] },
        { text: '「我们得加强防备——他可能会带人来。」', id: 'combat_retreat_prepare', effects: () => { setFlag('prepared_defense'); }, next: SCENES['tavern_defense_prep'] },
    ]);
};
// ==================== 小遭遇战 ====================
SCENES['ambush_small'] = () => {
    G.scene = 'ambush';
    narrate(`你走到镇口的石桥时——三个人从桥下的涵洞里钻了出来。\n\n他们穿着粗布衣服，手持短刀。不是暗星阁的杀手——更像是一般的山匪。但他们堵住了你的去路。\n\n为首的是一个络腮胡子的大汉，左脸有一颗黑痣。\n\n「此路是我开，此树是我栽——」他开始了老套的开场白。\n\n但他话没说完，你注意到他右手虎口的老茧——那不是握锄头磨出来的，是常年握刀的痕迹。\n\n这三个人不是普通山匪。他们是有功夫底子的。`);
    setFlag('ambush_small');
    divider();
    showChoices([
        { text: '拔剑迎战（剑术≥10）', id: 'ambush_small_fight', req: [[() => req('sword', 10), '剑术≥10']], next: SCENES['ambush_small_fight'] },
        { text: '扔钱袋买路——不值得拼命', id: 'ambush_small_pay', effects: () => { setFlag('paid_bandits'); }, next: SCENES['ambush_small_pay'] },
        { text: '转身跑——你不想浪费时间', id: 'ambush_small_run', next: SCENES['ambush_small_run'] },
    ]);
};
SCENES['ambush_small_fight'] = () => {
    G.scene = 'ambush';
    narrate(`你拔剑出鞘——剑光在阴沉的天空下闪过一道白弧。\n\n络腮胡子的表情变了。他显然没料到你真的敢动手。\n\n第一个人从左侧扑来——短刀直刺你的腰间。你侧身一闪，反手一剑拍在他的手腕上。短刀脱手飞出，叮当一声落在石桥上。\n\n第二个人从正面砍来——这一刀有点章法，不是乱砍。你举剑格挡，将他的短刀磕开，然后一脚踹在他胸口。他连退四步，撞在桥栏上。\n\n络腮胡子——他们的头目——站在原地没有动。他看着两个手下瞬间被你解决，脸上的表情从嚣张变成了凝重。\n\n「好身手。」他缓缓拔出一把更长的刀——那是一把军用制式腰刀，刀柄上缠着红色布条。\n\n「当过兵？」你问。\n\n他没回答。但他的站姿已经说明了一切——标准的军阵刀法起手式。\n\n你调整了握剑的姿势。对付军阵刀法，不能用手腕——得用手臂。\n\n他冲上来了。刀势凶猛，大开大合——这是战场上练出来的杀招，为了在混战中一击致命。\n\n但混战的刀法不适合单挑。他的刀路太大了——破绽也大。\n\n你等他的刀劈到一半，然后——剑尖点在了他的喉咙前。\n\n他停住了。\n\n刀举在半空，距离你的头顶只有一掌的距离。但你的剑已经抵住了他的喉结。\n\n谁先动，谁死。\n\n「我们可以谈谈吗？」你说。`);
    G.sword += 1;
    setFlag('defeated_bandits');
    divider();
    showChoices([
        { text: '「你们是谁派来的？」', id: 'ambush_small_interrogate', effects: () => { G.wits += 1; }, next: SCENES['ambush_small_interrogate'] },
        { text: '「走吧。别再让我看到你们。」', id: 'ambush_small_release', effects: () => { G.charm += 1; }, next: SCENES['lobby_free'] },
    ]);
};
SCENES['ambush_small_pay'] = () => {
    G.scene = 'ambush';
    narrate(`你从怀里掏出几两碎银，扔在桥面上。\n\n「拿着走吧。我不想麻烦。」\n\n络腮胡子弯腰捡起银子，掂了掂分量。他看了你一眼——眼神中有一种奇怪的犹豫。\n\n「你是外地人？」他问。\n\n「与你无关。」\n\n「如果是外地人……劝你一句——苍龙镇最近不太平。天黑之前回客栈去。别在后山晃悠。」\n\n他带着两个手下转身走了。银子和经验——这笔交易不亏。`);
    G.wits += 1;
    divider();
    showChoices([
        { text: '继续前行', id: 'ambush_continue', next: SCENES['lobby_free'] },
    ]);
};
SCENES['ambush_small_run'] = () => {
    G.scene = 'ambush';
    narrate(`你转身就跑——不是怕他们，是不想浪费时间和三个来路不明的人纠缠。\n\n你的速度比他们快。三步之后你已经拉开了足够的距离。身后传来络腮胡子的喊声：\n\n「喂——！你不想知道为什么我们在这里吗？」\n\n你没有停。\n\n但他们的话像一根刺一样扎在了你的脑中。为什么山匪会出现在镇口？为什么他们不怕官府？为什么他们选在石桥堵路？\n\n也许他们不只是山匪。\n\n但现在不是追究的时候。你加快了脚步。`);
    setFlag('ran_from_bandits');
    divider();
    showChoices([
        { text: '继续', id: 'ambush_run_end', next: SCENES['lobby_free'] },
    ]);
};
SCENES['ambush_small_interrogate'] = () => {
    G.scene = 'ambush';
    narrate(`你收回了剑——但只收了半寸。足以让他知道你随时可以刺出去。\n\n「说。」\n\n络腮胡子犹豫了一下。\n\n「有人……雇我们在镇口拦人。」\n\n「谁？」\n\n「不知道。给了我们十两银子，说如果看到一个带着剑的年轻人——就拦住。不用杀，拦住就行。」\n\n「为什么拦我？」\n\n「不知道。但我们不会问雇主为什么——拿了钱办事。」\n\n你皱了皱眉。有人专门雇人在镇口拦你——说明有人在盯着你的动向。\n\n「那个人长什么样？」\n\n「没见过面。银子是放在镇外老槐树下面的。旁边还有一张纸条——上面写着你的特征。」\n\n有人在暗中监视你。而且知道你的外貌。\n\n你放开了他。\n\n「走吧。」\n\n络腮胡子带着两个手下迅速离开了。你看着他们的背影消失在树林中——然后看向了镇外那棵老槐树的方向。`);
    setFlag('someone_watching');
    divider();
    showChoices([
        { text: '去老槐树看看', id: 'ambush_check_tree', effects: () => { setFlag('checked_tree'); G.wits += 1; }, next: SCENES['lobby_free'] },
        { text: '先回客栈——此事不急', id: 'ambush_back', next: SCENES['lobby_free'] },
    ]);
};
// ==================== 客栈保卫战 ====================
SCENES['tavern_defense_prep'] = () => {
    G.scene = 'tavern';
    narrate(`赵铁牛听你说完后沉吟了一下，然后开始行动。\n\n「大堂的桌椅搬到窗前——堵住一楼窗户。二楼的窗户留一扇开着，作为观察点。后门用铁链锁上，钥匙给我。」\n\n他的语气变了——不再是那个豪爽的铁匠，而是一个经历过战事的老兵。\n\n「我当年守过城门。七个人守了三天三夜。经验告诉我——防守最重要的不是人多，而是准备。」\n\n你帮他搬桌椅。沈孤雁也加入了——他从柜台下面抽出一把藏了多年的短刀，刀刃上还保养着一层薄薄的油。\n\n「别用那种眼神看我。」沈孤雁笑了笑，「开了十五年客栈——总会遇到些麻烦的。」\n\n赵铁牛检查了每一扇门窗，然后在正门前的台阶上撒了一把铁钉。\n\n「这些钉子——踩上去就得躺三天。」他嘿嘿笑了。\n\n胡青娘从药铺赶过来，带了一瓶黑色粉末。\n\n「石灰粉掺了辣椒粉。」她说，「撒在脸上——什么高手都得闭眼。」`);
    setFlag('defense_ready');
    divider();
    showChoices([
        { text: '在二楼设伏——居高临下', id: 'defense_upstairs', effects: () => { setFlag('defense_position', 'upstairs'); }, next: SCENES['tavern_defense_night'] },
        { text: '在大堂正面迎敌——以逸待劳', id: 'defense_hall', effects: () => { setFlag('defense_position', 'hall'); }, next: SCENES['tavern_defense_night'] },
        { text: '分两组——大堂和二楼各一组', id: 'defense_split', effects: () => { setFlag('defense_position', 'split'); }, next: SCENES['tavern_defense_night'] },
    ]);
};
SCENES['tavern_defense_night'] = () => {
    G.scene = 'tavern';
    narrate(`入夜。客栈灯火全灭了。\n\n你和赵铁牛、沈孤雁躲在暗处。胡青娘在楼上——她负责在关键时刻从窗口撒石灰粉。\n\n一个时辰过去了。两个小时。三个小时。\n\n就在你以为今夜不会有事的时候——门外传来了脚步声。\n\n不是一个人。至少四五个。脚步声很轻——但赵铁牛在黑暗中数了出来。\n\n「五个。」他在你耳边低声说，「两个在前门，两个绕到后面，一个在屋顶。」\n\n他伸出五根手指——然后握拳。这是暗号：准备好了。\n\n前门的门闩开始微微颤动——有人在撬门。\n\n然后——门闩被暴力撞开了。\n\n两个蒙面人冲了进来。他们踩上了台阶上的铁钉——第一个人闷哼一声，踉跄了一步。但第二个人踩着同伴的背跳了进来。\n\n赵铁牛的铁锤在黑暗中抡了起来。\n\n「嘭！」\n\n闷响。第二个人飞了出去，撞在门框上，滑倒在地。\n\n战斗开始了。`);
    setFlag('tavern_attacked');
    divider();
    showChoices([
        { text: '迎上去——拦截第一个闯入者！（剑术≥12）', id: 'defense_fight_1', req: [[() => req('sword', 12), '剑术≥12']], next: SCENES['defense_fight_1'] },
        { text: '守住楼梯——不让任何人上二楼', id: 'defense_stairs', next: SCENES['defense_stairs'] },
    ]);
};
SCENES['defense_fight_1'] = () => {
    G.scene = 'tavern';
    narrate(`第一个闯入者虽然脚受了伤，但手上功夫不弱。他拔出一把短刀，在黑暗中朝你挥了过来。\n\n客栈大堂一片漆黑——只有门口透进来的月光。你借着这点光线，看清了他的刀路。\n\n短刀横扫——你后仰闪过。他紧跟着一个突刺——你侧身避开，反手一剑拍在他的肘关节上。\n\n「咔。」一声脆响——不是骨折，但他的手臂显然脱臼了。短刀当啷落地。\n\n他痛苦地捂着手臂退后。你一脚将他踢出门外——正好落在了铁钉堆里。\n\n「啊——！」\n\n他的惨叫声在夜色中回荡。这对于还在外面的同伙来说，是一种心理打击。\n\n沈孤雁在另一侧解决了第二个闯入者。他的动作快而准——你只看到了一道银光闪过，那个人就倒下了。\n\n「十五年的守护不是白当的。」他淡淡地说。\n\n但屋顶上有动静了。瓦片碎裂的声音——有人从天窗要下来。`);
    setFlag('repelled_first_wave');
    addHp(-5);
    divider();
    showChoices([
        { text: '冲向楼梯——拦截屋顶下来的敌人', id: 'defense_roof_enemy', next: SCENES['defense_roof_enemy'] },
        { text: '喊胡青娘撒石灰粉！', id: 'defense_lime', next: SCENES['defense_lime'] },
    ]);
};
SCENES['defense_stairs'] = () => {
    G.scene = 'tavern';
    narrate(`你守住了通往二楼的楼梯口——剑横在身前，像一道铁闸。\n\n赵铁牛在大堂里和两个闯入者搏斗。他的铁锤在狭窄的空间里施展不开——但他用铁链代替了锤子，抡起来呼呼作响，逼得两人无法靠近。\n\n沈孤雁守在正门口——他像一尊门神，谁来就打谁。\n\n但后门传来了撞门声。\n\n「后面也有！」胡青娘在楼上喊道。\n\n你能听到铁链在颤抖——后门的锁链撑不了太久了。\n\n必须做出选择——守住楼梯，还是去支援后门？`);
    addHp(-5);
    divider();
    showChoices([
        { text: '继续守住楼梯——二楼的人更重要', id: 'defense_hold_stairs', next: SCENES['defense_hold_stairs'] },
        { text: '让沈孤雁守楼梯，你去后门', id: 'defense_back_door', next: SCENES['defense_back_door'] },
    ]);
};
SCENES['defense_lime'] = () => {
    G.scene = 'tavern';
    narrate(`「青娘——撒！」\n\n二楼的窗口猛地打开——一团黑色的粉末从天而降，精准地罩在了刚从天窗钻进来的那个蒙面人脸上。\n\n「啊——！我的眼睛！」\n\n他双手捂脸，从天窗的位置摔了下来——直接砸在了大堂的桌子上。桌子被砸塌了，他趴在碎木板中挣扎。\n\n石灰粉和辣椒粉的混合物在空气中弥漫——连你自己都被呛到了。眼泪止不住地流。\n\n但效果是惊人的。外面的脚步声明显乱了起来——他们看到了同伴的惨状，开始犹豫了。\n\n「撤！」一个嘶哑的声音从外面传来。\n\n脚步声迅速远去。\n\n赵铁牛冲到门口往外看了一眼——确认所有人都退了。\n\n「走了。」他关上门，用桌子顶住，「但他们还会来。」\n\n你擦了擦眼泪——辛辣的粉末让你的眼睛红肿。\n\n胡青娘从楼上下来，手里拿着湿毛巾。\n\n「用水洗眼睛。别揉。」`);
    setFlag('repelled_with_lime');
    divider();
    showChoices([
        { text: '「多谢。」接毛巾洗眼', id: 'defense_aftermath', effects: () => { changeRel('hu_qingniang', 3); }, next: SCENES['tavern_defense_aftermath'] },
    ]);
};
SCENES['defense_roof_enemy'] = () => {
    G.scene = 'tavern';
    narrate(`你三步并作两步冲上楼梯——天窗的瓦片被掀开了一个洞，一个黑影正从洞口往下滑。\n\n你没有给他落地的机会。\n\n剑尖从下方直刺——穿过天窗的缺口，逼得那个黑影不得不松手。他从屋顶滚了下去，发出一声闷响。\n\n但紧接着——第二个人出现了。这个人更快，在屋顶边缘翻了个跟头，直接从二楼走廊的窗口翻了进来。\n\n他落地的一瞬间就出刀了——目标是你。\n\n刀光在走廊里闪烁。你举剑格挡，两人从楼梯口一路打到走廊尽头。走廊很窄——剑施展不开，刀也一样。这反而对你有利——你的剑比他的刀长。\n\n你用剑柄顶住了他的胸口，将他按在墙上。\n\n「谁派你来的？」\n\n他笑了——露出一口白牙。\n\n「你猜。」\n\n然后他嘴里嘎嘣一声——咬碎了什么。\n\n毒囊。\n\n他的身体在你面前软了下去。瞳孔扩散，嘴角渗出黑血。\n\n死了。\n\n你没有得到任何信息。但至少——他不是暗星阁的杀手。暗星阁的人不用毒囊自尽。`);
    setFlag('enemy_suicide');
    addHp(-10);
    G.wits += 2;
    divider();
    showChoices([
        { text: '搜他的身——看看有没有线索', id: 'defense_search_body', effects: () => { setFlag('found_enemy_token'); addItem('神秘令牌'); }, next: SCENES['tavern_defense_aftermath'] },
        { text: '不管了——先确保所有人安全', id: 'defense_check_safe', next: SCENES['tavern_defense_aftermath'] },
    ]);
};
SCENES['defense_hold_stairs'] = () => {
    G.scene = 'tavern';
    narrate(`你死守楼梯口。\n\n一个人冲上来——你一剑横扫，逼他退了回去。第二个人试图从侧面绕过——赵铁牛的铁链从背后抽了过去，将他打翻在地。\n\n沈孤雁在门口如铜墙铁壁。他甚至没有用刀——只用一双肉掌，将每一个冲进门的人拍飞出去。\n\n「十五年前我以一人之力守过石室的入口。」他说，「这点场面——不算什么。」\n\n后门终于被撞开了——但撞门的人迎面撞上了胡青娘早已准备好的陷阱。一根绷紧的细线绊住了他的脚，整个人面朝下摔在了门槛上。胡青娘从暗处出手，一针扎在他的后颈——他立刻失去了意识。\n\n「麻穴。」她淡淡地说。\n\n战斗持续了不到半柱香——五个闯入者被击退，两个被擒，其余逃走。\n\n客栈保住了。但所有人都知道——这只是前哨战。`);
    setFlag('tavern_defended');
    addHp(-8);
    divider();
    showChoices([
        { text: '审问被擒的两人', id: 'defense_interrogate', next: SCENES['tavern_defense_aftermath'] },
    ]);
};
SCENES['defense_back_door'] = () => {
    G.scene = 'tavern';
    narrate(`你把楼梯口交给沈孤雁，自己冲向后门。\n\n后门的铁链已经快要断了——每一声撞击都让它多裂开一道缝。你蹲在门后，剑尖朝上，等着门被撞开的那一刻。\n\n「砰！」\n\n铁链断了。门被踹开——一个蒙面人冲了进来。\n\n你的剑从下往上挑——精准地刺中了他的小臂。他惨叫一声，短刀脱手。\n\n但他身后还有一个人——这个人没有冲进来，而是站在门外，从怀里掏出了一个黑色的小球。\n\n火药弹！\n\n你猛地后撤——但爆炸的气浪还是将你掀翻在地。耳朵嗡嗡作响，眼前一片模糊。\n\n赵铁牛不知什么时候出现在你身后——他的铁锤从你头顶飞过，砸中了门外那人的肩膀。那人惨叫着退入了黑暗中。\n\n赵铁牛拉你起来。\n\n「你没事吧？」\n\n你摇了摇头——耳朵还在嗡嗡响，但身体没有大碍。后门已经废了——木门被炸碎，铁链断裂。\n\n「用桌椅堵上。」赵铁牛说。\n\n你们搬来了两张桌子挡在后门口。不完美——但暂时够用了。`);
    setFlag('back_door_bombed');
    addHp(-20);
    divider();
    showChoices([
        { text: '回大堂——确认其他方向的安全', id: 'defense_check_hall', next: SCENES['tavern_defense_aftermath'] },
    ]);
};
// 山路伏击战
SCENES['mountain_ambush'] = () => {
    G.scene = 'mountain_road';
    narrate(`你沿着蜿蜒的山路往上走。两旁是密集的竹林，竹叶在风中沙沙作响——遮住了大部分声音。\n\n这使得你直到最后一刻才发现不对劲。\n\n路面上有新鲜的脚印——至少十个人的脚印，重叠在一起。他们不久前刚经过这里，而且人数比你预想的多得多。\n\n你停下了脚步。手按在剑柄上。\n\n然后你听到了——不是脚步声，而是弓弦拉动的声音。`);
    setFlag('mountain_ambush');
    divider();
    showChoices([
        { text: '翻滚到路边的岩石后面！', id: 'mtn_dodge_arrow', next: SCENES['mtn_dodge_arrow'] },
        { text: '拔剑拨箭！（剑术≥15）', id: 'mtn_deflect_arrow', req: [[() => req('sword', 15), '剑术≥15']], next: SCENES['mtn_deflect_arrow'] },
        { text: '大喊「我投降！」', id: 'mtn_surrender', next: SCENES['mtn_surrender'] },
    ]);
};
SCENES['mtn_dodge_arrow'] = () => {
    G.scene = 'mountain_road';
    narrate(`你扑向路边——一支箭擦着你的耳朵飞过，钉在了你刚才站的位置旁边的竹子上。箭尾还在嗡嗡震颤。\n\n你蜷缩在一块巨石后面。第二支箭、第三支箭接连射来——都打在石头上，溅出火星。\n\n箭从三个方向射来——左前方竹林、右侧山坡、正前方的岩石堆。至少三个弓手，分布在不同的高度和角度。\n\n这是精心设计的伏击。不是临时起意——他们知道你会走这条路。\n\n箭雨持续了大约十息，然后停了。取而代之的是脚步声——有人在靠近。\n\n五个。不，六个。他们从竹林里走出来，形成了一个半圆形的包围网。每个人都手持武器——刀、枪、铁链、飞爪。\n\n领头的人穿着灰色布衫，脸上涂着黑色油彩。他看着你躲在石头后面的样子，冷冷一笑。\n\n「出来吧。你跑不掉的。」`);
    addHp(-8);
    divider();
    showChoices([
        { text: '从石头后面冲出来——拼了！（剑术≥13）', id: 'mtn_charge', req: [[() => req('sword', 13), '剑术≥13']], next: SCENES['mtn_charge'] },
        { text: '用石头砸向最近的敌人——制造混乱', id: 'mtn_rock_throw', next: SCENES['mtn_rock_throw'] },
        { text: '往竹林方向跑——竹林里弓手无法射击', id: 'mtn_run_bamboo', next: SCENES['mtn_run_bamboo'] },
    ]);
};
SCENES['mtn_deflect_arrow'] = () => {
    G.scene = 'mountain_road';
    narrate(`你拔剑出鞘——第一支箭飞来时，你的剑刃精准地击中了箭杆。箭被弹飞，旋转着扎入泥土。\n\n第二支箭紧随其后——你再次拨挡。这一支被你斩成了两截，落在脚边。\n\n第三支箭来得更快更低——你的剑来不及回位，箭擦过你的左肩，留下了一道血痕。不深，但火辣辣地疼。\n\n箭雨停了。弓手们意识到远程攻击对你效果有限——他们开始从掩体中走出来。\n\n领头的灰衣人看到你拨箭的身法，脸上的表情从冷漠变成了警惕。\n\n「是个练家子。」他对手下说，「不要轻敌。」`);
    addHp(-5);
    G.sword += 1;
    setFlag('deflected_arrows');
    divider();
    showChoices([
        { text: '主动进攻——趁他们合围之前打乱阵型', id: 'mtn_charge', next: SCENES['mtn_charge'] },
        { text: '「你们是谁？暗星阁的人？」', id: 'mtn_question', next: SCENES['mtn_question'] },
    ]);
};
SCENES['mtn_surrender'] = () => {
    G.scene = 'mountain_road';
    narrate(`你举起双手。\n\n箭停了。灰衣人走出来，打量着你。\n\n「聪明的选择。」他说。但他没有放松警惕——他让两个手下从两侧接近你，搜了你的身，拿走了你的剑。\n\n「跟我们走。」\n\n你被押着往山上走。一路上你默默记下路线——每一个拐弯、每一块标志性的石头。如果有机会逃跑，你需要知道路。\n\n走了大约半柱香，你们来到了一个隐蔽的山洞入口。洞口挂着一块旧布帘，里面传来微弱的火光。\n\n「进去。」\n\n你走进了山洞。里面有一个人在等你。\n\n你没想到会在这里看到这个人。`);
    setFlag('captured_ambush');
    divider();
    showChoices([
        { text: '看看是谁', id: 'mtn_captive_reveal', next: SCENES['lobby_free'] },
    ]);
};
SCENES['mtn_charge'] = () => {
    G.scene = 'mountain_road';
    narrate(`你从掩体后冲了出来——不是盲目的冲锋，而是有目标的突击。\n\n最近的一个敌人离你只有三步。他手持长枪，正准备突刺。你侧身避开枪尖，剑横扫他的枪杆——"咔嚓"一声，木杆被你砍断。他还没来得及反应，你的剑柄已经撞在了他的太阳穴上。\n\n他倒了。\n\n第二个敌人从右侧扑来——铁链抡圆了砸下来。你用剑格挡，铁链缠住了剑身。他用力一拽——你顺势向前，一脚踹在他肚子上。\n\n第三个——飞爪。爪尖带着铁钩朝你面门飞来。你低头闪过，飞爪擦着头顶划过，割断了几根头发。\n\n但你已经被包围了。六个人虽然被你打倒了两个，但剩下的四个已经形成了合围。\n\n灰衣人没有出手——他一直在观察。\n\n「够了。」他举手，其他人停了下来，「你——一个人打倒了两个我的人。够资格跟我谈谈了。」`);
    addHp(-15);
    G.sword += 1;
    divider();
    showChoices([
        { text: '「谈什么？」', id: 'mtn_question', next: SCENES['mtn_question'] },
        { text: '不谈——继续打', id: 'mtn_keep_fighting', req: [[() => req('sword', 16), '剑术≥16']], next: SCENES['lobby_free'] },
    ]);
};
SCENES['mtn_rock_throw'] = () => {
    G.scene = 'mountain_road';
    narrate(`你抓起身旁一块拳头大的石头，朝最近的敌人扔了过去。\n\n石头砸中了他的肩膀——他吃痛松手，飞爪掉在了地上。你趁机冲了出去。\n\n混乱是短暂的——他们很快重新围了上来。但你已经跑出了包围圈的死角，站在了山路的开阔处。\n\n至少弓手不敢随便放箭了——你和他们的人混在一起，射箭可能误伤同伴。\n\n你向后退了两步，接近了路边的竹林边缘。竹林密集，地面布满了竹根和落叶——适合逃跑，但不适合战斗。`);
    addHp(-8);
    divider();
    showChoices([
        { text: '钻入竹林逃跑', id: 'mtn_run_bamboo', next: SCENES['mtn_run_bamboo'] },
        { text: '在开阔处迎战', id: 'mtn_charge', next: SCENES['mtn_charge'] },
    ]);
};
SCENES['mtn_run_bamboo'] = () => {
    G.scene = 'mountain_road';
    narrate(`你转身钻入竹林——竹子密得几乎走不动，但你挤了过去。身后的追兵脚步声变得混乱——竹林的密度对他们也一样。\n\n你在竹子之间穿行，脚步尽量轻。竹根绊了你两次，但都没有摔倒。\n\n跑了大约五十步——你听到了身后传来的咒骂声。他们追丢了。\n\n你靠在一棵粗竹上喘气。竹叶在你头顶沙沙作响，遮住了天空。四周一片寂静——只有远处隐约的溪水声。\n\n你不知道自己在哪里。竹林太密了，看不到远处的参照物。但至少——暂时安全了。\n\n你需要找一个方向走出去。溪水声在东边——沿着溪流走，应该能回到山路。`);
    setFlag('escaped_bamboo');
    divider();
    showChoices([
        { text: '朝溪水声的方向走', id: 'mtn_follow_stream', next: SCENES['lobby_free'] },
        { text: '在竹林里等一等——确保没人追来', id: 'mtn_wait_bamboo', next: SCENES['lobby_free'] },
    ]);
};
SCENES['mtn_question'] = () => {
    G.scene = 'mountain_road';
    narrate(`灰衣人走上前来。他打量了你一番，然后开口了。\n\n「我们不是暗星阁的人。」他说，「我们是白太傅的旧部。」\n\n白太傅——那个传说中被守护者杀害的前朝太傅。\n\n「天机卷上有我们主人的名字。我们来——是为了替他洗清冤屈。」\n\n他的语气不像在撒谎。但也不完全像在说真话。\n\n「你怎么证明？」你问。\n\n他从怀里掏出一块玉佩——白色的玉，刻着一只展翅的鹤。\n\n「这是白太傅随身之物。二十年了——我一直带着它。」`);
    setFlag('met_bai_subordinates');
    G.wits += 1;
    divider();
    showChoices([
        { text: '收起武器——听听他们要说什么', id: 'mtn_listen', effects: () => { setFlag('listened_to_bai_men'); G.wits += 1; }, next: SCENES['lobby_free'] },
        { text: '不信任他们——保持警惕', id: 'mtn_distrust', next: SCENES['lobby_free'] },
    ]);
};
// ==================== 受伤和治疗场景 ====================
SCENES['injury_left_arm'] = () => {
    G.scene = 'tavern_room';
    narrate(`你坐在床沿上，挽起左臂的袖子。伤口在雨水的浸泡下显得更加狰狞——一道三寸长的刀痕从前臂外侧斜切而下，皮肉外翻，能看到底下暗红色的肌肉组织。\n\n血已经不像刚才那么涌了——刀锋划过时切断了表皮的毛细血管，但没有伤到大血管。用干净的布条勒紧伤口上方，止血效果还算明显。\n\n但伤口很脏。雨水、泥土、衣服的纤维都嵌进了肉里。如果不清理干净，感染只是时间问题。\n\n你的手指在发抖——不是因为疼，而是因为失血后的虚弱。左臂暂时使不上太大的力气，握剑还行，但格挡重击会很吃力。`);
    setFlag('injury_left_arm');
    addHp(-10);
    divider();
    showChoices([
        { text: '去找胡青娘处理', id: 'injury_go_hu', next: SCENES['treatment_hu_arm'] },
        { text: '自己简单包扎——不必麻烦她', id: 'injury_self_treat', next: SCENES['lobby_free'] },
    ]);
};
SCENES['injury_chest_treatment'] = () => {
    G.scene = 'tavern_room';
    narrate(`黑无极那一掌打在了你的胸口正中央。当时你只觉得天旋地转——现在你才意识到伤势有多重。\n\n胸口像是被一把无形的锤子砸过。呼吸时肋骨处传来尖锐的刺痛——不是骨折，但至少是严重的软组织挫伤。每一次深呼吸都像在用刀割肺。\n\n你解开衣襟检查——胸口正中央有一块拳头大的淤青，已经从红色变成了暗紫色。触摸时疼痛剧烈。\n\n更麻烦的是内伤。黑无极的掌力透过了你的胸骨，震到了内脏。你能感觉到胃部有一种奇怪的翻涌感——那是内力冲击后的反应。\n\n如果不及时处理，内伤会恶化。轻则吐血，重则伤及经脉。`);
    addHp(-15);
    setFlag('injury_chest');
    divider();
    showChoices([
        { text: '去找胡青娘——内伤必须专业处理', id: 'injury_chest_hu', next: SCENES['treatment_hu_chest'] },
        { text: '先躺下休息——也许会好一些', id: 'injury_chest_rest', next: SCENES['injury_chest_rest'] },
    ]);
};
SCENES['injury_chest_rest'] = () => {
    G.scene = 'tavern_room';
    narrate(`你躺下了。但只躺了一刻钟——胸口的疼痛不仅没有减轻，反而加剧了。\n\n你试着翻身——肋骨传来一阵剧痛，让你冷汗直流。\n\n不行。这不是靠休息能好的伤。你挣扎着坐起来，扶着墙慢慢走向门口。\n\n门外碰到了小莲——她看到你的脸色，吓得手里的茶盘都掉了。\n\n「你——你受伤了！我去叫胡姐姐！」\n\n她飞奔下楼。你靠在门框上等——眼前开始发花。\n\n也许你低估了那一掌的威力。`);
    addHp(-10);
    divider();
    showChoices([
        { text: '等胡青娘来', id: 'injury_chest_wait_hu', next: SCENES['treatment_hu_chest'] },
    ]);
};
// 胡青娘治疗场景
SCENES['treatment_hu_arm'] = () => {
    G.scene = 'apothecary';
    narrate(`胡青娘的药铺里弥漫着草药的苦涩气味。她让你坐在一张旧木椅上，自己挽起袖子，用温水仔细清洗你左臂上的伤口。\n\n「刀伤。不深，但很脏。」她皱着眉头说，「雨水泡过的伤口最容易感染——你得庆幸你来得及时。」\n\n她从药柜里取出一小罐褐色药膏——金疮药。她用竹片挑了一点，均匀地涂抹在伤口上。药膏接触伤口的瞬间，一阵刺痛让你咬紧了牙关。\n\n「忍着点。」她头也不抬，「金疮药里有白芷和血竭——刚上药的时候会疼，但止血效果好。」\n\n药膏涂完后，她用干净的白布将你的前臂缠绕了三圈——不松不紧，刚好压住伤口但不阻碍血液循环。\n\n「三天换一次药。七天内不要用左臂格挡重击——伤口会崩开。」\n\n她收拾好药具，又递给你一小包粉末。\n\n「三七粉。温水冲服，每天两次。活血化瘀。」\n\n你看着被包扎好的手臂——虽然隐隐作痛，但至少不用担心感染了。`);
    changeRel('hu_qingniang', 5);
    G.sword -= 1;
    divider();
    showChoices([
        { text: '「多谢胡姐姐。」', id: 'treatment_arm_done', next: SCENES['lobby_free'] },
    ]);
};
SCENES['treatment_hu_chest'] = () => {
    G.scene = 'apothecary';
    narrate(`胡青娘看到你的脸色，二话不说把你按在了药铺里间的竹床上。\n\n「解开衣服。」她的语气不容拒绝。\n\n你解开衣襟——她看到胸口那片暗紫色的淤青，眉头拧成了一个结。\n\n「内伤。」她用手掌轻轻按在淤青周围的皮肤上，感受着底下的组织，「掌力透骨——打你的人内力不弱。肋骨没断，但经脉被震伤了。」\n\n她转身从药柜里取出一个木盒——里面是整齐排列的银针。针比头发还细，在烛光下闪着冷光。\n\n「我要用银针疏通你受伤的经脉。会很疼——比伤口疼十倍。但如果不做，内伤会越来越严重。」\n\n你点了点头。\n\n第一根针扎入了你胸口的膻中穴——酸胀感瞬间从胸口扩散到全身，像有一根铁丝在你的经脉里搅动。你忍不住倒吸了一口冷气。\n\n「忍住。」她扎入了第二根针——章门穴。这次不只是酸胀，还有一种灼热感，像是有人在你体内点了一把火。\n\n第三根、第四根、第五根——她沿着你胸腹的经脉一路扎下去，每一针都精准地落在穴位上。你的额头上渗出了密密麻麻的汗珠。\n\n「好了。」她拔出了最后一根针，「经脉暂时通了。但需要三次治疗才能完全恢复。明天同一时辰再来。」\n\n她从药炉里倒了一碗黑色的汤药递给你。\n\n「喝下去。这药很苦——但能帮你恢复内力。」\n\n你一口灌下——苦得你想把舌头拔出来。但药效很快——一股暖流从胃部升起，流遍了全身。胸口的疼痛减轻了至少一半。\n\n「还有——」她犹豫了一下，然后从柜子深处取出一块黑色的药饼，「这是用百年何首乌和天山雪莲做的续命丹的简化版。你如果受了致命伤——把这个敷在伤口上，能多撑一个时辰。只有一块，省着用。」`);
    addItem('续命药饼');
    changeRel('hu_qingniang', 8);
    G.sword += 1;
    divider();
    showChoices([
        { text: '「胡姐姐……谢谢。」', id: 'treatment_chest_done', effects: () => { changeRel('hu_qingniang', 3); }, next: SCENES['lobby_free'] },
    ]);
};
// ==================== 逃跑路线 ====================
SCENES['escape_backyard'] = () => {
    G.scene = 'backyard';
    narrate(`你冲进后院——院墙大约七尺高，顶上嵌着碎瓷片防贼。但墙角有一棵老槐树，树冠覆盖了半面墙。\n\n你踩着树干爬了上去——枝桠在你的重量下嘎吱作响，但没有断。你抓住一根较粗的树枝，荡到了墙头上。\n\n碎瓷片扎进了你的手掌——疼，但不算严重。你翻身越过院墙，落在了墙外的巷子里。\n\n巷子很窄，两旁是高耸的石墙。你沿着巷子跑——左转、右转、再左转。苍龙镇的巷子像迷宫一样弯弯绕绕，但你还记得大致的方向。\n\n身后没有追兵的声音——他们还没有发现你从后院跑了。\n\n你继续跑了半柱香，确认安全后才放慢了脚步。你不知道自己在哪里——四周都是陌生的墙壁和紧闭的院门。\n\n但至少——你逃出来了。`);
    setFlag('escaped_backyard');
    addHp(-5);
    divider();
    showChoices([
        { text: '找一个安全的地方躲起来', id: 'escape_hide', next: SCENES['lobby_free'] },
        { text: '绕路回客栈正面——从外面查看情况', id: 'escape_scout', next: SCENES['lobby_free'] },
    ]);
};
SCENES['escape_kitchen'] = () => {
    G.scene = 'kitchen';
    narrate(`你溜进了厨房。灶台后面有一块松动的地砖——你之前注意到过沈孤雁在搬东西时踩过这个位置。\n\n你蹲下来，用力撬开了地砖。下面是一段狭窄的石阶，通向地下。\n\n你顺着石阶走了下去。通道很矮，你不得不弯着腰。墙壁上每隔几步嵌着一盏油灯——但油早已干涸，只有空空的灯座。黑暗中你只能靠手触摸墙壁前行。\n\n通道走了大约五十步，前方出现了一个岔口。左边传来微弱的光——像是有人在那里点了灯。右边完全黑暗，但你能感觉到一股气流——说明那边通向外面。\n\n你选择了右边。\n\n又走了二十步，石阶开始向上。尽头是一扇木门——门闩从你这边可以打开。你推开门——\n\n外面是河边。月光洒在河面上，波光粼粼。你在客栈以南大约两百步的位置。\n\n密道出口被一丛灌木遮住了——从外面很难发现。你记住了这个位置。以后可能会用到。`);
    setFlag('found_secret_tunnel');
    G.wits += 2;
    divider();
    showChoices([
        { text: '沿着河边绕回镇子', id: 'escape_river', next: SCENES['lobby_free'] },
        { text: '原路返回——密道可以以后再用', id: 'escape_tunnel_back', next: SCENES['lobby_free'] },
    ]);
};
SCENES['escape_rooftop'] = () => {
    G.scene = 'rooftop';
    narrate(`你从二楼的窗户翻出去，踩着窗台下的横梁攀上了屋顶。瓦片在你的脚下微微滑动——你弯下腰，降低重心，沿着屋脊小心翼翼地移动。\n\n苍龙镇的屋顶连成一片——从这个房顶可以跳到那个房顶，中间只有窄窄的巷子相隔。\n\n你跳过了第一道巷子——落地时踩碎了两片瓦。声音不大，但在寂静的夜里格外清晰。\n\n第二道巷子更宽——你需要助跑。你退后几步，加速，起跳——\n\n你的脚尖堪堪搭上了对面的屋檐。你用手指抓住瓦沿，用力将自己拉了上去。\n\n第三栋房子的屋顶是平的——这是一个歇脚的好地方。你蹲在屋顶上，俯瞰着整个苍龙镇。\n\n月光下，镇子安静得像一幅画。远处客栈方向有微弱的火光——他们还在搜查。\n\n你安全了。至少暂时。`);
    setFlag('escaped_rooftop');
    addHp(-5);
    G.sword += 1;
    divider();
    showChoices([
        { text: '在屋顶上观察一会儿', id: 'escape_rooftop_watch', effects: () => { G.wits += 1; setFlag('rooftop_recon'); }, next: SCENES['lobby_free'] },
        { text: '从屋顶下到地面——远离客栈', id: 'escape_rooftop_down', next: SCENES['lobby_free'] },
    ]);
};
// ==================== 死亡场景 ====================
// 受伤描写——腿部中刀
SCENES['injury_leg'] = () => {
    G.scene = 'combat';
    narrate(`你低头看着自己的右腿——小腿外侧被一把短刀划出了一道四寸长的口子。血从伤口中涌出，顺着小腿流进了靴子里。每走一步，靴子里都会发出湿漉漉的声响——那是血和汗水混合的声音。\n\n伤口不深——刀锋只在皮下脂肪层划过，没有伤到肌腱。但持续的出血正在消耗你的体力。你能感觉到自己的步伐在变慢——右腿像被灌了铅一样沉重。\n\n你撕下了一条衣摆，勒紧了小腿做止血带。血立刻减少了——但绑得太紧让脚趾开始发麻。你必须在一柱香内松开止血带，否则小腿组织会因缺血而坏死。`);
    addHp(-12);
    setFlag('injury_leg');
    divider();
    showChoices([
        { text: '继续战斗——轻伤而已', id: 'injury_leg_continue', next: SCENES['lobby_free'] },
        { text: '撤退——先处理伤口', id: 'injury_leg_retreat', next: SCENES['treatment_hu_arm'] },
    ]);
};
// 客栈保卫战后续
SCENES['tavern_defense_aftermath'] = () => {
    G.scene = 'tavern';
    narrate(`战斗结束了。所有人聚在大堂里——壁炉重新被点着，温暖的火光驱散了血腥气和紧张感。\n\n赵铁牛坐在壁炉旁，正在擦拭铁锤上的血迹。沈孤雁给每个人倒了一碗热酒。胡青娘在检查伤员的伤口——你和赵铁牛都有不同程度的伤。\n\n「五个闯入者。」沈孤雁数了数，「两个被擒，两个跑了，一个……自己服毒了。」\n\n赵铁牛哼了一声：「服毒那个——嘴里有暗囊。这是暗桩的做派——不是一般的山匪。」\n\n「他们不是暗星阁的。」胡青娘说，「暗星阁的人用毒更讲究——不会用这种粗糙的毒囊。这些人是另一拨势力的。」\n\n沈孤雁沉思了一会儿。\n\n「苍龙镇从来没有这么热闹过。」他苦笑了一下，「天机卷果然是个麻烦——谁都想来分一杯羹。」\n\n你端起酒碗喝了一口。热酒从喉咙滑进胃里——像一条火线。但那种温暖让你紧绷的肌肉终于放松了一些。\n\n「天亮之前不能再睡了。」赵铁牛说，「他们可能还会来。我守上半夜——你们轮流休息。」`);
    divider();
    showChoices([
        { text: '「我守下半夜。」', id: 'aftermath_volunteer', effects: () => { setFlag('volunteer_watch'); changeRel('zhao_tieniu', 3); }, next: SCENES['lobby_free'] },
        { text: '先休息——你也需要恢复体力', id: 'aftermath_rest', next: SCENES['lobby_free'] },
    ]);
};
// 战后治疗群像
SCENES['group_treatment'] = () => {
    G.scene = 'apothecary';
    narrate(`胡青娘的药铺变成了临时医馆。\n\n赵铁牛坐在椅子上，让胡青娘处理他手臂上的擦伤——一块碎木片扎进了他的前臂，他直接用手拔了出来，血溅了胡青娘一裙。\n\n「别动！」胡青娘皱眉，「你这人——拔之前能不能先说一声？我好接血。」\n\n赵铁牛嘿嘿一笑：「小伤。当年在军营里比这重的伤我都是自己用烧酒冲的。」\n\n「那是在军营。这里是药铺——听我的。」她涂上金疮药，包扎好伤口，然后转向沈孤雁。\n\n沈孤雁坐在角落里，脸色有些苍白。他一直在揉右肩——刚才的战斗中他用力过猛，旧伤复发了。\n\n「坐下。」胡青娘指了指椅子，「右肩的老伤——当年你怎么受的？」\n\n「十五年前。」沈孤雁坐下，「在石室门口。有四个人来抢天机卷——我挡了一夜。天亮的时候才发现肩膀中了一镖，已经冻住了。」\n\n胡青娘没有说话。她取出银针，在他肩井穴上扎了两针，然后用掌心贴着他的肩膀——你能感觉到一股温热从她的掌心传出。她在用内力帮沈孤雁疏通经脉。\n\n房间里安静了下来。只有药炉里的水在咕嘟咕嘟地冒着热气。`);
    changeRel('hu_qingniang', 2);
    divider();
    showChoices([
        { text: '安静等待——不打扰他们', id: 'group_treatment_wait', next: SCENES['lobby_free'] },
        { text: '让胡青娘也看看你的伤', id: 'group_treatment_self', next: SCENES['treatment_hu_chest'] },
    ]);
};
SCENES['death_combat'] = () => {
    G.scene = 'death';
    clearStory();
    narrate(`${danger('你的剑断了。')}\n\n最后一击来得太快——黑无极的刀从上方劈下，你的剑在格挡时从中断裂。半截剑身飞了出去，叮当落地。\n\n你看着手中只剩半截的剑柄——铁质的护手还在，但刃口已经完全消失了。\n\n黑无极没有立刻出手。他站在你面前，看着你手中残破的武器。\n\n「你可以投降。」他说。\n\n你摇了摇头。\n\n他叹了口气——那声叹息在雨夜中显得格外清晰。\n\n「那就——对不起了。」\n\n刀落下了。\n\n你感到胸口一凉——不是疼痛，而是一种奇异的冷。像是有人在你胸口放了一块冰。\n\n你低头看到了刀——它从你的左胸刺入，穿透了身体。刀尖从后背穿了出来。\n\n血从伤口涌出——热的。你能感觉到它的温度。\n\n你的膝盖软了。身体向后倒去。\n\n天空在你眼前旋转——乌云、月光、雨滴。所有的颜色都开始变淡。\n\n你想起了第一天走进听雨客栈时的场景。温暖的灯光。沈孤雁的笑容。壁炉的火光。\n\n你想起了赵铁牛的笑声——那么响亮，像是能把屋顶掀翻。\n\n你想起了柳如烟的眼睛——冷冽如冰，但偶尔会闪过一丝柔软。\n\n你想起了……很多。\n\n但记忆在消散。像沙子从指缝间流过。\n\n最后你看到的——是雨滴。\n\n一滴一滴。落在你脸上。凉的。\n\n像是苍龙镇在为你哭泣。\n\n——你已战死。——`);
    divider();
    showChoices([
        { text: '重新开始', id: 'death_restart', next: SCENES['start'] },
    ]);
};
SCENES['death_poison'] = () => {
    G.scene = 'death';
    clearStory();
    narrate(`${danger('你感到一阵眩晕。')}\n\n茶杯从你手中滑落——瓷杯在地上摔成碎片，茶水溅了一地。\n\n你低头看着地上的茶渍——颜色偏深，带着一丝不自然的紫。\n\n中毒了。\n\n什么时候？你想回顾——是刚才在大堂喝的那杯茶？还是胡青娘给你的药？不——胡青娘不会害你。\n\n那就是在你不注意的时候——有人在你的杯子里下了毒。\n\n你的喉咙开始发紧。呼吸变得困难——像是有人在用手掐住你的脖子。你伸手去摸喉咙——皮肤下面有一串硬块在迅速膨胀。\n\n毒气正在封堵你的气管。\n\n你挣扎着站起来——椅子被你碰翻了。你跌跌撞撞地走向门口。每一步都像踩在棉花上——腿脚不听使唤。\n\n门——就在前面。三步。两步。一步——\n\n你的手抓住了门框。但你的力气正在飞速流失。\n\n你看到了门外的月光。银色的光洒在走廊上——很美。\n\n但你的视线开始模糊了。月光变成了一团白色的光斑——越来越大，越来越亮。\n\n然后——\n\n黑暗。\n\n你倒在了门槛上。半截身体在门里，半截在门外。\n\n有人会发现的。也许明天早晨，小莲来打扫时会看到你。她会尖叫。沈孤雁会冲出来。赵铁牛会破口大骂。\n\n但你听不到了。\n\n你的世界——在那一刻，安静了下来。\n\n只有月光。\n\n——你已中毒身亡。——`);
    divider();
    showChoices([
        { text: '重新开始', id: 'death_restart_poison', next: SCENES['start'] },
    ]);
};
SCENES['death_backstab'] = () => {
    G.scene = 'death';
    clearStory();
    narrate(`${danger('一把刀从你背后刺入。')}\n\n你甚至没来得及回头。\n\n刀从你的后腰偏左的位置刺入——精准地避开了脊椎，但切断了左肾的动脉。这是专业杀手的手法：不伤脊椎，让你能感觉到痛苦，但无法救治。\n\n你转过头——看到了一张你认识的脸。\n\n是你信任的人。\n\n但你的视线已经模糊了——你分辨不清那是谁。只有一个模糊的轮廓，站在你身后，手里握着一把沾血的刀。\n\n「为什么……」你想问。但声音卡在了喉咙里——血涌上了气管，堵住了你的声音。\n\n你吐出了一口血——暗红色的，带着气泡。\n\n那个人弯下腰，在你耳边轻声说了一句话。\n\n但你已经听不清了。\n\n你的世界在缩小——视野从四周向中心收缩，像是一个正在关闭的光圈。你看到了那个人的轮廓——在光圈的边缘。\n\n然后光圈消失了。\n\n你倒在了地上。脸贴着冰冷的石板。雨水从石缝中渗过来，浸湿了你的头发。\n\n你的手还在动——无意识地摸索着。像是在找什么。也许是一把剑。也许是一个人的手。\n\n但什么也没有摸到。\n\n最后，你的手停了下来。\n\n指尖触碰到了一样东西——一颗落在地上的纽扣。不知道是谁的。\n\n你攥住了它。\n\n然后——什么都没有了。\n\n——你已被暗算身亡。——`);
    divider();
    showChoices([
        { text: '重新开始', id: 'death_restart_backstab', next: SCENES['start'] },
    ]);
};
// 补充战斗场景——遭遇暗星阁小队
SCENES['encounter_dark_star'] = () => {
    G.scene = 'street';
    narrate(`黄昏时分，你在苍龙镇的东巷遇到了三个人。他们穿着普通的粗布衣裳，但走路的姿势出卖了他们——重心始终在前脚掌，随时可以发力。这是杀手的步态。\n\n他们看到你的瞬间，彼此交换了一个眼神。然后为首的那个人微微点头——三把刀同时出鞘。\n\n「暗星阁办事。不相关的——让开。」\n\n他们不是来找你的——他们在执行任务。但你挡在了他们的路上。\n\n他们要去的地方——是药铺。胡青娘。`);
    setFlag('encountered_dark_star');
    divider();
    showChoices([
        { text: '拔剑拦住他们——保护胡青娘（剑术≥12）', id: 'enc_ds_fight', req: [[() => req('sword', 12), '剑术≥12']], next: SCENES['enc_ds_fight'] },
        { text: '让开——不关你的事', id: 'enc_ds_let_pass', effects: () => { setFlag('let_dark_star_pass'); changeRel('hu_qingniang', -10); }, next: SCENES['lobby_free'] },
        { text: '大喊「胡青娘——有人来了！」', id: 'enc_ds_warn', effects: () => { setFlag('warned_hu'); changeRel('hu_qingniang', 5); }, next: SCENES['enc_ds_warn'] },
    ]);
};
SCENES['enc_ds_fight'] = () => {
    G.scene = 'street';
    narrate(`你拔剑挡在了巷子中间——三个人面对你，刀尖朝前。\n\n第一个人冲了上来——快刀，直劈你的头顶。你侧身闪过，反手一剑划在他的前臂上。他吃痛退后，但刀没有脱手。\n\n第二个人从左侧包抄——你听到了脚步声，来不及转身，只能用剑柄向后格挡。刀和剑柄撞在一起，震得你手腕发麻。\n\n第三个人趁机从右侧绕了过来——他不出刀，而是掏出了一枚飞针。针很小，在黄昏的光线下几乎看不到。但他出手的瞬间，你感到了一阵风——\n\n你猛地低头——飞针从你头顶飞过，扎在了身后的木门上。针尾的蓝光告诉你——针上有毒。\n\n你后撤了两步。三个人重新围了上来。但此时——巷子尽头传来了脚步声。是赵铁牛。他拎着铁锤冲了过来。\n\n「三个打一个——好啊，加我一个！」\n\n暗星阁的三人互相对视了一眼，然后迅速撤退。他们消失在了巷子的拐角——像三只黑猫一样无声无息。`);
    addHp(-15);
    setFlag('fought_dark_star');
    changeRel('zhao_tieniu', 5);
    G.sword += 1;
    divider();
    showChoices([
        { text: '「谢了，赵大哥。」', id: 'enc_ds_thanks', next: SCENES['lobby_free'] },
        { text: '去药铺确认胡青娘的安全', id: 'enc_ds_check_hu', next: SCENES['lobby_free'] },
    ]);
};
SCENES['enc_ds_warn'] = () => {
    G.scene = 'street';
    narrate(`你扯开嗓子大喊——「胡青娘——暗星阁的人来了！」\n\n三个杀手回头看了你一眼——眼神冰冷。他们没有停步，但你的喊声已经起到了效果。\n\n药铺的方向传来了一声金属响——胡青娘在准备迎战。与此同时，赵铁牛从隔壁的铁匠铺冲了出来，铁锤已经握在手中。\n\n暗星阁的三人意识到偷袭已经失败——他们交换了一个眼神，迅速撤退，消失在了巷子的阴影中。\n\n你的警告让胡青娘有了准备时间——这可能救了她的命。`);
    changeRel('hu_qingniang', 8);
    changeRel('zhao_tieniu', 3);
    G.wits += 1;
    divider();
    showChoices([
        { text: '继续', id: 'enc_ds_after', next: SCENES['lobby_free'] },
    ]);
};
// 逃跑路线补充——河边小路
SCENES['escape_riverside'] = () => {
    G.scene = 'riverside';
    narrate(`你沿着苍龙镇的河边小路一路向南。河水在月光下闪着银光，流速不快但很深——掉进去可不是闹着玩的。\n\n小路两旁是密集的柳树，垂下的枝条像帘子一样遮住了你的身影。你弯着腰在柳枝间穿行——虽然速度不快，但隐蔽性极好。\n\n走了大约百步，你来到了一座废弃的水磨坊。磨坊的木门半掩着，里面空无一人。但你注意到角落里有一堆干燥的稻草——有人在这里住过。\n\n你检查了周围——磨坊有一个后门通向河对岸的简易木桥。桥很窄，只能一人通过。如果追兵追到这里，你可以过桥后砍断桥索。\n\n这是一个不错的临时藏身之所。`);
    setFlag('found_watermill');
    G.wits += 1;
    divider();
    showChoices([
        { text: '在磨坊里躲一会儿', id: 'escape_mill_hide', effects: () => { setFlag('hid_in_mill'); }, next: SCENES['lobby_free'] },
        { text: '继续沿河走——不冒险停留', id: 'escape_river_continue', next: SCENES['lobby_free'] },
    ]);
};
// 战后恢复场景
SCENES['recovery_scene'] = () => {
    G.scene = 'tavern_room';
    narrate(`你在房间里躺了两天。赵铁牛每天给你送两顿饭——粥和蒸蛋，简单但好消化。胡青娘每天来换一次药，银针治疗也按时进行。\n\n第二天下午，你终于能坐起来了。胸口的淤青从暗紫色变成了黄绿色——这是好转的迹象。深呼吸时还会疼，但不再是那种让人无法动弹的剧痛。\n\n小莲端着一碗药走进来。她看到你坐起来的样子，露出了笑容。\n\n「你终于醒了！大家都很担心你呢。」\n\n她把药放在床头——然后从袖子里掏出一张纸条递给你。\n\n「这是……沈叔叔让我给你的。他说等你醒了再看。」\n\n你打开纸条。上面只有一行字：\n\n「天机卷的秘密比你想象的更深。能走动的时候——来找我。」`);
    setFlag('recovery_done');
    divider();
    showChoices([
        { text: '立刻去找沈孤雁', id: 'recovery_find_shen', next: SCENES['lobby_free'] },
        { text: '再休息一天——身体要紧', id: 'recovery_rest_more', next: SCENES['lobby_free'] },
    ]);
};
// 补充：黑无极战斗——受伤版本
SCENES['combat_hei_hurt_continue'] = () => {
    G.scene = 'combat';
    narrate(`你握紧了剑——左臂的伤口在流血，但你还能战斗。血沿着剑柄流到了你的手指上，让握持变得有些滑。你调整了握姿，用拇指和食指夹住剑柄的棱角来增加摩擦力。\n\n黑无极注意到了你的伤势。他的目光落在你左臂上——然后嘴角微微上扬。\n\n「左手受伤了？」他说，「那就用不了反手剑了。可惜——你原本的反手剑还不错。」\n\n他知道你会反手剑？这说明他之前一直在暗中观察你——而且观察得很仔细。\n\n他再次出手——这次专攻你的左侧。刀光连续闪烁，每一刀都从你左侧切入，逼你用受伤的左臂格挡。\n\n你咬牙坚持——但失血带来的虚弱感越来越强烈。眼前的黑无极开始出现了重影。\n\n不能再拖了。要么速战速决——要么撤退。`);
    addHp(-10);
    divider();
    showChoices([
        { text: '全力一搏——用右手单手持剑突刺！（剑术≥16）', id: 'combat_hurt_last_strike', req: [[() => req('sword', 16), '剑术≥16']], next: SCENES['combat_hei_final'] },
        { text: '撤退——今天不是死的时候', id: 'combat_hei_retreat', next: SCENES['combat_hei_retreat'] },
    ]);
};
// 战斗后的营地场景
SCENES['camp_after_battle'] = () => {
    G.scene = 'camp';
    narrate(`你和赵铁牛在后山找了一处避风的山洞暂时落脚。壁炉的火堆发出噼啪的声响，照亮了山洞粗糙的石壁。\n\n赵铁牛在烤一只野兔——那是他用石头砸到的。兔肉在火上滋滋作响，油脂滴入火堆激起一小团火焰。\n\n「赵大哥，」你开口，「你当兵的时候——经常这样吗？」\n\n他翻了一下兔子，沉默了一会儿。\n\n「比这惨多了。」他说，「有一次我们被围困了七天——没吃的，最后把皮带煮了吃。那条皮带我跟了三年——是我娘亲手做的。」\n\n他撕下一块兔腿递给你。肉很烫——你吹了几口才敢咬。\n\n「那个时代过去了。」赵铁牛看着火堆，「现在我只是个打铁的。但我忘不了那些兄弟。十七个人——都冻死在了塞北。」\n\n你没有说话。有些伤痛不需要回应——只需要有人安静地陪着。\n\n火堆在燃烧。兔肉在烤着。山洞外面是呼啸的山风。\n\n但洞里——至少是暖的。`);
    changeRel('zhao_tieniu', 5);
    divider();
    showChoices([
        { text: '「赵大哥，那些兄弟——你一定会替他们讨回公道的。」', id: 'camp_support', effects: () => { changeRel('zhao_tieniu', 3); setFlag('support_zhao'); }, next: SCENES['lobby_free'] },
        { text: '默默吃完兔肉——有些话不需要说出口', id: 'camp_silent', next: SCENES['lobby_free'] },
    ]);
};
// 被擒场景
SCENES['captured_scene'] = () => {
    G.scene = 'captive';
    narrate(`你被绑在一把木椅上。手腕和脚踝都被粗麻绳勒得生疼。面前的桌子上放着你的剑——被他们缴了。\n\n房间里只有一盏油灯。昏黄的光线照亮了四壁——这是一间普通的民房，但窗户被木板封死了。\n\n门开了。一个蒙面人走了进来——不是黑无极，也不是暗星阁的人。他的蒙面布是白色的，上面绣着一只展翅的鹤。\n\n白太傅的旧部。\n\n「醒了？」他坐在你对面，「别紧张——我们不想杀你。我们只想知道一件事。」\n\n「什么？」\n\n「天机卷上……有没有白太傅的名字。」\n\n他的声音平静，但你能感觉到那份平静下压抑着的急切。二十年了——他们在等一个答案。\n\n「如果我们得到答案——不管是什么——你都可以走。」他说。`);
    setFlag('captured_by_bai_men');
    divider();
    showChoices([
        { text: '「我不知道天机卷的内容。」', id: 'captive_deny', next: SCENES['lobby_free'] },
        { text: '「白太傅的名字……确实在上面。但事情不像你们以为的那样。」', id: 'captive_reveal', effects: () => { setFlag('revealed_bai_info'); G.wits += 2; }, next: SCENES['lobby_free'] },
        { text: '挣脱绳索——这些绳结绑得不够紧（剑术/心机≥14）', id: 'captive_escape', req: [[() => req('wits', 14), '心机≥14']], next: SCENES['lobby_free'] },
    ]);
};
// 补充：多人混战场景
SCENES['brawl_tavern'] = () => {
    G.scene = 'tavern';
    narrate(`一场突如其来的混战在大堂爆发。起因很小——一个外来的商人在赵铁牛面前骂了句粗话。赵铁牛二话不说掀了桌子。然后商人的三个护卫拔了刀。\n\n然后整个大堂都乱了。\n\n你坐在角落里看着——柳如烟也坐在另一角，手按在剑柄上但没有动。沈孤雁躲到了柜台后面。胡青娘端着药碗站在楼梯口，一脸嫌弃地看着打架的人。\n\n赵铁牛一个人打三个——铁匠的臂力不是吹的。他一手抓着一个护卫的衣领，另一手挡住另一个的刀。第三个试图从背后偷袭——赵铁牛向后一脚踹在他肚子上。\n\n但桌子在飞、椅子在碎、碗碟哗哗落地。沈孤雁的心在滴血——那是他新买的景德镇瓷碗。\n\n「够了！」沈孤雁从柜台后面站起来，手里多了一把弩——不知道从哪摸出来的。他朝天放了一箭，弩箭钉在天花板上。\n\n所有人停了下来。\n\n「打架的去外面打。毁坏东西的——赔。」\n\n赵铁牛讪讪地松了手。三个护卫灰溜溜地被扔出了门外。\n\n沈孤雁蹲下来捡碎瓷片。你看过去——他的脸上没有愤怒，只有心疼。\n\n「那个碗……」他嘟囔，「我花了五两银子买的……」`);
    changeRel('shen_guyan', -2);
    setFlag('tavern_brawl');
    divider();
    showChoices([
        { text: '帮沈孤雁捡碎瓷片', id: 'brawl_help_clean', effects: () => { changeRel('shen_guyan', 3); }, next: SCENES['lobby_free'] },
        { text: '劝赵铁牛消消气', id: 'brawl_calm_zhao', effects: () => { changeRel('zhao_tieniu', 2); }, next: SCENES['lobby_free'] },
        { text: '不管了——上楼休息', id: 'brawl_ignore', next: SCENES['lobby_free'] },
    ]);
};
// 受伤后的噩梦
SCENES['injury_nightmare'] = () => {
    G.scene = 'dream';
    narrate(`你做了一个梦。\n\n梦里你站在石室中——但石室没有出口。四面墙壁在不断缩小，天花板在压下来。天机卷摊开在你面前的石台上，上面的名字在蠕动——每一个字都在挣扎，像是要从纸上爬出来。\n\n你看到了黑无极的脸——但他的脸上没有伤疤。是一张年轻的脸，带着笑。他旁边站着一个老人——应该是他的师父。两人站在一棵大树下，师父在教徒弟练刀。\n\n画面一转——你看到了沈孤雁。他穿着年轻的衣服，手里握着一把长刀。他的面前是那棵大树——树下有一具尸体。\n\n沈孤雁的刀在滴血。\n\n画面再转——你看到了白太傅。一个白胡子老人，坐在书房里，面前摊着一卷空白的天机卷。他在写第一个名字。手在颤抖。\n\n然后你看到了自己。\n\n你站在石室中央。所有的画面都围绕着你旋转——像走马灯一样。你看到了每一个人的过去、现在、和可能的未来。\n\n然后你醒了。\n\n满头冷汗。窗外天已经微微亮了。\n\n梦中的画面在迅速消散——但有一个画面你记住了：黑无极年轻时笑着练刀的样子。\n\n那个笑容——和他现在的面容判若两人。`);
    setFlag('had_nightmare');
    G.wits += 1;
    divider();
    showChoices([
        { text: '躺下再睡一会儿', id: 'nightmare_back_sleep', next: SCENES['lobby_free'] },
        { text: '起床——不想再睡了', id: 'nightmare_get_up', next: SCENES['lobby_free'] },
    ]);
};
// 补充：战斗后疗伤——胡青娘的独白
SCENES['hu_healing_monologue'] = () => {
    G.scene = 'apothecary';
    narrate(`你在药铺等胡青娘配药时，听到了她在后院的自言自语。\n\n「……又一个受伤的。」她的声音从帘子后面传来，「我这辈子——治过的刀伤比病痛多十倍。江湖人啊……」\n\n她停顿了一下。\n\n「亡夫，你说得对——学医救不了这个江湖。但至少……能少死一个是一个。」\n\n帘子被掀开了。胡青娘端着一碗新配的药走了出来——脸上的表情已经恢复了平时的淡定。好像刚才的自言自语从未发生过。\n\n「喝药。」她把碗递给你。\n\n你接过碗——药很烫，但你在想刚才听到的话。她的亡夫——也是一个江湖人吗？\n\n也许有一天你会问。但不是今天。`);
    setFlag('heard_hu_monologue');
    G.wits += 1;
    divider();
    showChoices([
        { text: '默默喝药', id: 'hu_drink_medicine', next: SCENES['lobby_free'] },
        { text: '「胡姐姐——你的亡夫……也是剑客吗？」', id: 'hu_ask_husband', effects: () => { setFlag('asked_hu_husband'); changeRel('hu_qingniang', -3); }, next: SCENES['lobby_free'] },
    ]);
};
// 最终补充：战斗技能学习
SCENES['learn_counter_skill'] = () => {
    G.scene = 'training';
    narrate(`赵铁牛在后院教你一招——「铁壁反弹」。这是他从军营里学来的防守反击术。\n\n「别人打你的时候——不要躲。迎上去，用前臂格住他的手腕，然后用另一只手肘撞他的胸口。这样——」他示范了一下，手臂横在你面前，「他的力量会被你自己吸收，然后用他的力量反击。」\n\n你试了几次。前三次都没掌握时机——不是太早就是太晚。第四次，你找到了感觉——赵铁牛的手臂刚发动攻击时，你的前臂恰好迎了上去。碰撞的瞬间你感到了一股力量从他的手臂传到你的手臂——然后你用肘部击中了他护在胸前的木盾。\n\n「嘭！」\n\n赵铁牛咧嘴笑了。\n\n「不错！再练十次！」\n\n你练了三十次。到最后——你的前臂已经红肿了。但那个动作已经刻进了你的肌肉记忆里。\n\n「记住——」赵铁牛收起木盾，「防守不是退缩。防守是等他送上门来。」`);
    G.sword += 2;
    setFlag('learned_counter');
    changeRel('zhao_tieniu', 5);
    divider();
    showChoices([
        { text: '「谢了，赵大哥。这一招很实用。」', id: 'learn_counter_thanks', next: SCENES['lobby_free'] },
        { text: '继续练习——还不够熟练', id: 'learn_counter_more', effects: () => { G.sword += 1; addHp(-5); }, next: SCENES['lobby_free'] },
    ]);
};
