// story_part16.js - 抉择时刻扩写
// chapter2_hub、玉牌收集、结盟谈判

SCENES['chapter2_hub'] = () => {
  G.scene = 'chapter2_hub';
  G.time = 'morning';
  G.location = '听雨客栈·大堂';
  narrate('天亮了。苍龙镇在晨光中苏醒——但昨夜的战斗痕迹还历历在目。大堂的桌子歪了，窗户破了，地上还有干涸的血迹。沈孤雁已经把一切收拾好了——或者说，尽可能收拾好了。他在大堂的角落里坐着，黑剑放在膝上。');
  divider();
  narrate('所有人陆续来到了大堂——赵铁牛、胡青娘、白云生、柳如烟、小莲。每个人身上都有昨夜的痕迹——伤口、疲惫、警觉。沈孤雁站起来：昨晚只是试探。他们还会来。下一次会更凶。我们必须在他们下一次进攻之前——打开石室。');
  divider();
  setFlag('chapter2_started');
  const choices = [];
  // Jade quests - only show if not completed
  if (!hasFlag('got_hu_jade')) choices.push({ text: '去帮胡青娘解毒一个被下毒的人', id: 'c2h_hu', next: SCENES['hu_jade_quest'] });
  else choices.push({ text: '（已完成）胡青娘的玉牌已到手', id: 'c2h_hu_done', disabled: true });
  if (!hasFlag('got_bai_jade')) choices.push({ text: '帮白云生破解暗号', id: 'c2h_bai', next: SCENES['bai_jade_quest'] });
  else choices.push({ text: '（已完成）白云生的玉牌已到手', id: 'c2h_bai_done', disabled: true });
  if (!hasFlag('got_shen_jade')) choices.push({ text: '在天亮前找到沈孤雁的密室', id: 'c2h_shen', next: SCENES['shen_jade_quest'] });
  else choices.push({ text: '（已完成）沈孤雁的玉牌已到手', id: 'c2h_shen_done', disabled: true });
  // Other actions - only show if not done
  if (!hasFlag('got_zhao_sword')) choices.push({ text: '去铁匠铺帮赵铁牛修武器', id: 'c2h_zhao', effects: () => { changeRel('zhao_tieniu', 3); }, next: SCENES['zhao_weapon_help'] });
  if (!hasFlag('sun_confronted')) choices.push({ text: '去找老孙头谈谈', id: 'c2h_sun', next: SCENES['sun_confront'] });
  if (!hasFlag('know_final_attack')) choices.push({ text: '去茶馆找李婶买最新情报', id: 'c2h_li', next: SCENES['li_morning_intel'] });
  if (!hasFlag('patrolled_chapter2')) choices.push({ text: '在镇上巡逻确认安全', id: 'c2h_patrol', effects: () => { G.wits += 2; setFlag('patrolled_chapter2'); }, next: SCENES['chapter2_hub'] });
  if (!hasFlag('liu_private_talk_done')) choices.push({ text: '和柳如烟单独谈话', id: 'c2h_liu', next: SCENES['liu_private_talk'] });
  if (!hasFlag('tunnel_explored')) choices.push({ text: '检查地下通道入口', id: 'c2h_tunnel', next: SCENES['tunnel_explore'] });
  // Always available
  choices.push({ text: '准备出发上山', id: 'c2h_mountain', next: SCENES['mountain_prepare'] });
  if (!hasFlag('alliance_done')) choices.push({ text: '和所有人谈判结盟', id: 'c2h_alliance', next: SCENES['alliance_full'] });
  // Show jade count
  const kc = keyCount();
  if (kc > 0) narrate(`\n你目前拥有 ${kc}/3 块玉牌。`);
  showChoices(choices);
};

SCENES['hu_jade_quest'] = () => {
  G.scene = 'hu_jade_quest';
  narrate('胡青娘带你去了药铺后院。一个男人躺在担架上——脸色发紫，嘴唇乌黑。断肠红中毒。胡青娘说：这个人不是苍龙镇的——他是昨夜袭击时混进来的暗星阁外围成员。但他不是来杀人的——他是来求救的。');
  divider();
  setFlag('hu_jade_started');
  narrate('胡青娘说：他在被派来之前就被下了慢性毒——断肠红的弱化版。暗星阁用这种方式控制手下。我需要三味药引才能配解药：银鳞鱼、赤灵芝、七叶莲。');
  divider();
  showChoices([
    { text: '去河边捞银鳞鱼', id: 'hjq_fish', effects: () => { G.wits += 2; setFlag('got_silver_fish'); }, next: SCENES['hu_jade_fish'] },
    { text: '去后山采七叶莲', id: 'hjq_herb', effects: () => { G.wits += 2; setFlag('got_qiye_lotus'); }, next: SCENES['hu_jade_herb'] },
    { text: '让赵铁牛帮你找赤灵芝', id: 'hjq_zhao', effects: () => { changeRel('zhao_tieniu', 3); setFlag('got_red_lingzhi'); }, next: SCENES['hu_jade_combine'] },
  ]);
};

SCENES['hu_jade_fish'] = () => {
  G.scene = 'hu_jade_fish';
  narrate('你来到河边——银鳞鱼只在深水区出现。你脱了外衣下水——河水冰冷刺骨。在水底摸索了很久——终于抓到了一条巴掌大的银色小鱼。鱼鳞在阳光下闪闪发光。');
  divider();
  showChoices([{ text: '回去', id: 'hjf_b', next: SCENES['hu_jade_combine'] }]);
};

SCENES['hu_jade_herb'] = () => {
  G.scene = 'hu_jade_herb';
  narrate('后山的悬崖上——七叶莲长在一块突出的岩石上。你需要沿着窄窄的石壁攀爬过去。风很大——吹得你几乎站不稳。但你咬牙坚持——终于采到了那株七叶莲。七片叶子呈莲花状排列，散发着淡淡的药香。');
  divider();
  showChoices([{ text: '回去', id: 'hjh_b', next: SCENES['hu_jade_combine'] }]);
};

SCENES['hu_jade_combine'] = () => {
  G.scene = 'hu_jade_combine';
  narrate('你带着药引回到药铺。胡青娘在铜炉前忙碌了整整两个时辰。最后——她端出一碗深绿色的药汤。给那个暗星阁的人灌了下去。');
  divider();
  setFlag('hu_jade_complete');
  changeRel('hu_qingniang', 10);
  narrate('半个时辰后——那个人的脸色开始恢复。他睁开眼睛——看到了胡青娘和你。他说了一句话：谢谢你。然后他说了一个关键信息——暗星阁下一次进攻的时间。后天。黑无极将亲自带队。胡青娘看着你——然后从暗格里取出了那块碧绿色的玉牌。递给了你。她说：你值得信任。这块玉牌——交给你保管。');
  divider();
  setFlag('got_hu_jade');
  G.wits += 5;
  showChoices([{ text: '回到大堂', id: 'hjc_b', next: SCENES['chapter2_hub'] }]);
};

SCENES['bai_jade_quest'] = () => {
  G.scene = 'bai_jade_quest';
  narrate('白云生坐在客栈二楼的走廊上——面前摊着几张纸。他今天又没喝酒。他说：我需要你帮我破解一个暗号。这是三年前我在客栈一张桌子的暗格里发现的。他递给你一张泛黄的纸条。上面写着一串奇怪的符号。');
  divider();
  setFlag('bai_jade_started');
  showChoices([
    { text: '研究暗号（检定：才智>=7）', id: 'bjq_solve', effects: () => { if (G.wits >= 7) { setFlag('solved_cipher'); G.wits += 3; } else { setFlag('failed_cipher'); } }, next: SCENES['bai_jade_solve'] },
    { text: '去找胡青娘帮忙——她可能见过类似的暗号', id: 'bjq_hu', effects: () => { changeRel('hu_qingniang', 2); setFlag('asked_hu_cipher'); }, next: SCENES['bai_jade_hu_help'] },
    { text: '去问沈孤雁', id: 'bjq_shen', effects: () => { changeRel('shen_guyan', 2); setFlag('asked_shen_cipher'); }, next: SCENES['bai_jade_shen_help'] },
  ]);
};

SCENES['bai_jade_solve'] = () => {
  G.scene = 'bai_jade_solve';
  narrate('你盯着那些符号——渐渐地，一个规律浮现出来。这是白太傅独创的密码——用诗句的首字对应数字。破解后的内容是：玉在玉佩中。雁在玉佩上。真相在第三只雁的眼睛里。白云生听完——沉默了很久。然后他从怀里掏出了一块玉佩。白太傅的遗物。他翻到背面——第三只雁的眼睛处——有一个极小的凹槽。他用指甲一按——咔哒。玉佩从中间裂开——里面藏着一块薄如蝉翼的玉牌。上面刻着一只展翅的大雁。');
  divider();
  setFlag('got_bai_jade');
  changeRel('bai_yunsheng', 10);
  G.wits += 5;
  showChoices([{ text: '回到大堂', id: 'bjs_b', next: SCENES['chapter2_hub'] }]);
};

SCENES['bai_jade_hu_help'] = () => {
  G.scene = 'bai_jade_hu_help';
  narrate('胡青娘看了看暗号——然后摇摇头：这是白太傅独创的密码，我破不了。但她补充了一句：白太傅生前喜欢用诗句的首字做暗号。你去告诉白云生。');
  divider();
  showChoices([{ text: '回去告诉白云生', id: 'bjh_b', next: SCENES['bai_jade_solve'] }]);
};

SCENES['bai_jade_shen_help'] = () => {
  G.scene = 'bai_jade_shen_help';
  narrate('沈孤雁看了看暗号——沉默了一会儿。他说：白太傅是天机阁的朋友。他用的密码——我只知道他喜欢用诗句。其余的——你自己想。');
  divider();
  showChoices([{ text: '回去继续研究', id: 'bjs_b2', next: SCENES['bai_jade_solve'] }]);
};

SCENES['shen_jade_quest'] = () => {
  G.scene = 'shen_jade_quest';
  narrate('沈孤雁说：我的玉牌藏在一个密室里。密室的入口在客栈的某个地方——但只有在天亮之前找到才算通过考验。你需要在限定的线索中找到入口。第一个线索：水往低处流。');
  divider();
  setFlag('shen_jade_started');
  showChoices([
    { text: '去后院的水井看看', id: 'sjq_well', effects: () => { G.wits += 2; setFlag('checked_well'); }, next: SCENES['shen_jade_well'] },
    { text: '去地下室看看', id: 'sjq_cellar', effects: () => { G.wits += 1; }, next: SCENES['shen_jade_well'] },
  ]);
};

SCENES['shen_jade_well'] = () => {
  G.scene = 'shen_jade_well';
  narrate('你在后院的水井旁发现了第二个线索——井沿上刻着一行小字：雁过留声，水过留痕。你往井里看——水面下有一个暗格。你伸手进去摸索——摸到了一个铜管。铜管里有一张纸条：大堂第三根柱子，敲三下。');
  divider();
  showChoices([{ text: '去大堂', id: 'sjw_hall', next: SCENES['shen_jade_pillar'] }]);
};

SCENES['shen_jade_pillar'] = () => {
  G.scene = 'shen_jade_pillar';
  narrate('大堂第三根柱子——你敲了三下。咔哒——柱子底部弹开了一个暗门。暗门后面是一段狭窄的阶梯——向下延伸。你走下去——进入了密室。密室不大——四面墙壁上刻满了文字。是历代守护者的笔记。密室中央的石台上——放着沈孤雁的玉牌。以及一封信。信上写着：给找到这里的人。');
  divider();
  setFlag('got_shen_jade');
  setFlag('found_shen_secret_room');
  changeRel('shen_guyan', 10);
  G.wits += 5;
  showChoices([{ text: '回到大堂', id: 'sjp_b', next: SCENES['chapter2_hub'] }]);
};

SCENES['zhao_weapon_help'] = () => {
  G.scene = 'zhao_weapon_help';
  narrate('你帮赵铁牛修武器——他在为所有人准备防身兵器。他给你打了一把短剑——说：防身用。你值得信任。');
  divider();
  changeRel('zhao_tieniu', 5);
  G.sword += 2;
  setFlag('got_zhao_sword');
  showChoices([{ text: '继续', id: 'zwh_c', next: SCENES['chapter2_hub'] }]);
};

SCENES['sun_confront'] = () => {
  G.scene = 'sun_confront';
  narrate('你在河边找到了老孙头。他还在钓鱼——鱼竿上依然没有鱼线。你直接问他：你在守什么？他沉默了很久。然后说：我在守一个承诺。二十年前我犯了一个大错——我欠了一笔还不清的债。我在这里等待赎罪的机会。');
  divider();
  setFlag('sun_confronted');
  changeRel('old_sun', 3);
  G.wits += 3;
  showChoices([{ text: '继续', id: 'sc_c', next: SCENES['chapter2_hub'] }]);
};

SCENES['li_morning_intel'] = () => {
  G.scene = 'li_morning_intel';
  narrate('李婶说：最新消息。暗星阁增援已到——至少又来了五人。黑无极计划后天发动总攻。目标：拿到三块玉牌，打开石室。');
  divider();
  G.wits += 3;
  setFlag('know_final_attack');
  showChoices([{ text: '继续', id: 'lmi_c', next: SCENES['chapter2_hub'] }]);
};

SCENES['liu_private_talk'] = () => {
  G.scene = 'liu_private_talk';
  narrate('柳如烟在后院等你。她说：我收到了锦衣卫的密令——他们也要天机卷。但我已经决定——不执行那个命令。天机卷应该由守护者决定命运。我现在站在沈孤雁这边。');
  divider();
  changeRel('liu_ruyin', 10);
  setFlag('liu_switched_sides');
  setFlag('liu_private_talk_done');
  showChoices([{ text: '继续', id: 'lpt_c', next: SCENES['chapter2_hub'] }]);
};

SCENES['tunnel_explore'] = () => {
  G.scene = 'tunnel_explore';
  narrate('你打开后院锁着的小门——果然是地下通道的入口。通道很窄——只容一人通过。墙壁上刻着路标——指向落雁峰。通道里阴冷潮湿——但走了一段时间后你看到了出口的光。');
  divider();
  setFlag('explored_tunnel');
  setFlag('tunnel_explored');
  G.wits += 3;
  showChoices([{ text: '返回', id: 'te_b', next: SCENES['chapter2_hub'] }]);
};

SCENES['alliance_full'] = () => {
  G.scene = 'alliance_full';
  narrate('所有人聚集在大堂。沈孤雁说：后天暗星阁就会发动总攻。我们必须在那之前打开石室。三块玉牌——他看了看胡青娘和白云生——缺一不可。问题在于：打开石室之后，天机卷该怎么处理？');
  divider();
  setFlag('alliance_meeting');
  showChoices([
    { text: '交给朝廷', id: 'af_court', effects: () => { G.charm += 2; setFlag('alliance_court'); }, next: SCENES['alliance_result_full'] },
    { text: '交给沈孤雁继续守护', id: 'af_shen', effects: () => { changeRel('shen_guyan', 5); setFlag('alliance_guardian'); }, next: SCENES['alliance_result_full'] },
    { text: '公开天机卷', id: 'af_public', effects: () => { G.wits += 3; setFlag('alliance_public'); }, next: SCENES['alliance_result_full'] },
    { text: '销毁天机卷', id: 'af_destroy', effects: () => { setFlag('alliance_destroy'); }, next: SCENES['alliance_result_full'] },
    { text: '利用天机卷对付暗星阁', id: 'af_use', effects: () => { G.sword += 2; setFlag('alliance_weapon'); }, next: SCENES['alliance_result_full'] },
    { text: '由大家投票决定', id: 'af_vote', effects: () => { G.charm += 3; setFlag('alliance_democratic'); }, next: SCENES['alliance_result_full'] },
  ]);
};

SCENES['alliance_result_full'] = () => {
  G.scene = 'alliance_result_full';
  narrate('经过长时间的讨论——所有人达成了一致。不管天机卷最终如何处理——首先必须确保它不落入暗星阁手中。沈孤雁说：明天一早出发。落雁峰。所有人一起去。赵铁牛举起酒碗：同生共死。所有人碰碗。酒是赵铁牛的烧刀子——辣得你眼泪都出来了。但此刻你需要这口辣。');
  divider();
  setFlag('alliance_formed');
  setFlag('alliance_done');
  G.charm += 3;
  showChoices([{ text: '准备出发', id: 'arf_c', next: SCENES['mountain_prepare'] }]);
};

SCENES['mountain_prepare'] = () => {
  G.scene = 'mountain_prepare';
  narrate('出发前的准备。你需要选择装备和同伴。沈孤雁提供了：绳索、火折子、干粮、水壶。赵铁牛提供了一把备用的军用短刀。胡青娘给了两瓶解毒药和一瓶迷魂散。白云生给了你那张暗号纸条——也许石室里还用得上。');
  divider();
  setFlag('prepared_for_mountain');
  showChoices([
    { text: '和沈孤雁同行', id: 'mp_shen', next: SCENES['mountain_path_shen'] },
    { text: '和柳如烟同行', id: 'mp_liu', next: SCENES['mountain_path_liu'] },
    { text: '和赵铁牛同行', id: 'mp_zhao', next: SCENES['mountain_path_zhao'] },
  ]);
};
