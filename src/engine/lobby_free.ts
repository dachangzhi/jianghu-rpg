/// <reference path="../types.ts" />
// ==================== DYNAMIC LOBBY / HUB SCENE ====================
// This replaces the static lobby_free from story.js
// It dynamically shows options based on game progress (G.chapter, G.flags, G.time)

SCENES['lobby_free'] = () => {
  G.scene = 'lobby_free';
  clearStory();
  
  const ch = G.chapter || 1;
  const talked = [];
  if (G.relationships.shen_guyan != null) talked.push('shen');
  if (G.relationships.liu_ruyin != null) talked.push('liu');
  if (G.relationships.zhao_tieniu != null) talked.push('zhao');
  if (G.relationships.bai_yunsheng != null) talked.push('bai');
  
  const choices = [];

  if (ch === 1) {
    // ---- CHAPTER 1: 客栈初遇 ----
    narrate('客栈大堂里烛光摇曳，你环顾四周。');
    locTag('听雨客栈 · 大堂');
    
    if (!talked.includes('shen')) choices.push({ text: '走向柜台，和老板交谈', id: 'c1_free_shen', next: SCENES['talk_shen'] });
    if (!talked.includes('liu')) choices.push({ text: '走向黑衣女子', id: 'c1_free_liu', next: SCENES['talk_liu'] });
    if (!talked.includes('zhao')) choices.push({ text: '走向铁匠', id: 'c1_free_zhao', next: SCENES['talk_zhao'] });
    if (!talked.includes('bai')) choices.push({ text: '走向醉倒的书生', id: 'c1_free_bai', next: SCENES['talk_bai'] });
    
    // After talking to at least 2 NPCs, show more options
    if (talked.length >= 2) {
      choices.push({ text: '四处转转，探索客栈', id: 'c1_explore', next: SCENES['explore_inn'] });
      // NPC deep talks if already met
      if (talked.includes('shen') && getRel('shen_guyan') >= 5) {
        choices.push({ text: '再找沈老板聊聊', id: 'c1_shen_deep', next: SCENES['shen_deep_talk'] });
      }
      if (talked.includes('liu') && getRel('liu_ruyin') >= -5) {
        choices.push({ text: '再找柳如烟聊聊', id: 'c1_liu_deep', next: SCENES['liu_deep_talk'] });
      }
      if (talked.includes('zhao') && getRel('zhao_tieniu') >= 5) {
        choices.push({ text: '再找赵铁牛聊聊', id: 'c1_zhao_deep', next: SCENES['zhao_deep_talk'] });
      }
      if (talked.includes('bai') && hasFlag('bai_awake')) {
        choices.push({ text: '再找白云生聊聊', id: 'c1_bai_deep', next: SCENES['bai_deep_talk'] });
      }
    }
    
    if (talked.length >= 3) {
      choices.push({ text: '等晚饭吃', id: 'c1_wait_dinner', next: SCENES['dinner_scene'] });
      // Random events
      if (Math.random() < 0.3 && SCENES['random_event_1']) {
        choices.push({ text: '留意到角落里的动静', id: 'c1_random_event', next: SCENES['random_event_' + (Math.floor(Math.random() * 10) + 1)] });
      }
    }
    
    // All NPCs talked → proceed
    if (talked.length >= 4) {
      choices.push({ text: '天色渐暗，入座晚膳', id: 'c1_dinner', next: SCENES['dinner_scene'] });
    }
    
  } else if (ch === 2) {
    // ---- CHAPTER 2: 深夜惊变 ----
    narrate('夜色深沉，客栈内一片混乱。你需要决定下一步行动。');
    locTag('听雨客栈 · 夜');
    
    choices.push({ text: '调查案发现场', id: 'c2_investigate', next: SCENES['night_rush'] });
    choices.push({ text: '去镇上探索', id: 'c2_town', next: SCENES['night_town_hub'] });
    
    // NPC quest entries
    if (hasFlag('zhao_quest_available') || getRel('zhao_tieniu') >= 10) {
      choices.push({ text: '和赵铁牛谈谈他发现的事', id: 'c2_zhao_quest', next: SCENES['zhao_quest_start'] });
    }
    if (hasFlag('liu_quest_available') || getRel('liu_ruyin') >= 0) {
      choices.push({ text: '找柳如烟了解真相', id: 'c2_liu_quest', next: SCENES['liu_quest_start'] });
    }
    if (hasFlag('shen_quest_available') || getRel('shen_guyan') >= 5) {
      choices.push({ text: '问沈老板究竟发生了什么', id: 'c2_shen_quest', next: SCENES['shen_quest_start'] });
    }
    if (hasFlag('hu_quest_available') || G.relationships.hu_qingniang != null) {
      choices.push({ text: '找胡青娘了解药铺的情况', id: 'c2_hu_quest', next: SCENES['hu_quest_start'] });
    }
    if (hasFlag('bai_quest_available') || getRel('bai_yunsheng') >= 0) {
      choices.push({ text: '和白云生交换情报', id: 'c2_bai_quest', next: SCENES['bai_quest_start'] });
    }
    
    // Random events and secondary NPCs
    choices.push({ text: '在镇上四处打听消息', id: 'c2_rumor', next: SCENES['random_event_1'] });
    
    // Secondary NPC quests
    if (G.relationships.xiao_lian != null) {
      choices.push({ text: '和小莲聊聊', id: 'c2_xiaolian', next: SCENES['xiaolian_quest_start'] });
    }
    if (G.relationships.old_sun != null) {
      choices.push({ text: '去找老孙头', id: 'c2_oldsun', next: SCENES['oldsun_quest_start'] });
    }
    
    // Night exploration
    choices.push({ text: '深夜外出调查', id: 'c2_night_explore', next: SCENES['night_street_east'] });
    choices.push({ text: '夜间偷听', id: 'c2_eavesdrop', next: SCENES['night_eavesdrop_1'] });
    
    // Combat encounters
    if (hasFlag('hei_encountered')) {
      choices.push({ text: '追踪黑无极', id: 'c2_hei_combat', next: SCENES['combat_hei_encounter'] });
    }
    
    // Proceed to chapter 3
    choices.push({ text: '整理线索，商议对策（进入调查阶段）', id: 'c2_to_ch3',
      effects: () => { G.chapter = 3; G.time = 'dawn'; },
      next: SCENES['chapter2_hub']
    });
    
  } else if (ch === 3) {
    // ---- CHAPTER 3: 抉择时刻 ----
    narrate('黎明将至。你需要收集所有线索，决定最终行动。');
    locTag('听雨客栈 · 黎明');
    
    // Jade quests
    if (!hasItem('玉牌·天')) {
      choices.push({ text: '寻找天字玉牌（问胡青娘）', id: 'c3_jade_hu', next: SCENES['hu_jade_quest'] });
    }
    if (!hasItem('玉牌·地')) {
      choices.push({ text: '寻找地字玉牌（问白云生）', id: 'c3_jade_bai', next: SCENES['bai_jade_quest'] });
    }
    if (!hasItem('玉牌·人')) {
      choices.push({ text: '寻找人字玉牌（问沈孤雁）', id: 'c3_jade_shen', next: SCENES['shen_jade_quest'] });
    }
    
    // Alliance options
    choices.push({ text: '与柳如烟结盟', id: 'c3_ally_liu', next: SCENES['ally_liu'] });
    if (getRel('hei_wuji') >= -10) {
      choices.push({ text: '尝试与黑无极谈判', id: 'c3_ally_hei', next: SCENES['ally_hei'] });
    }
    choices.push({ text: '全联盟协商', id: 'c3_alliance',
      req: [[() => keyCount() >= 1, '至少一枚玉牌']],
      next: SCENES['alliance_full']
    });
    
    // Remaining NPC quests
    if (!hasFlag('zhao_quest_done')) {
      choices.push({ text: '帮赵铁牛调查', id: 'c3_zhao_quest', next: SCENES['zhao_quest_start'] });
    }
    if (!hasFlag('liu_quest_done')) {
      choices.push({ text: '帮柳如烟查案', id: 'c3_liu_quest', next: SCENES['liu_quest_start'] });
    }
    if (!hasFlag('shen_quest_done')) {
      choices.push({ text: '了解沈孤雁的秘密', id: 'c3_shen_quest', next: SCENES['shen_quest_start'] });
    }
    if (!hasFlag('hu_quest_done') && G.relationships.hu_qingniang != null) {
      choices.push({ text: '和胡青娘深入交谈', id: 'c3_hu_quest', next: SCENES['hu_quest_start'] });
    }
    if (!hasFlag('bai_quest_done')) {
      choices.push({ text: '和白云生深入交谈', id: 'c3_bai_quest', next: SCENES['bai_quest_start'] });
    }
    if (!hasFlag('hei_quest_done') && hasFlag('hei_encountered')) {
      choices.push({ text: '和黑无极谈谈他的目的', id: 'c3_hei_quest', next: SCENES['hei_personal_quest'] });
    }
    
    // Attribute checks
    choices.push({ text: '仔细分析所有线索', id: 'c3_wits_check', next: SCENES['wits_check_1'] });
    choices.push({ text: '练剑思考', id: 'c3_sword_check', next: SCENES['sword_check_1'] });
    
    // Proceed to mountain
    choices.push({ text: '启程前往落雁峰', id: 'c3_to_mountain',
      req: [[() => keyCount() >= 2, '至少两枚玉牌']],
      effects: () => { G.chapter = 4; G.time = 'dawn'; },
      next: SCENES['mountain_approach']
    });
    
  } else if (ch === 4) {
    // ---- CHAPTER 4: 落雁峰 ----
    narrate('山路崎岖，前方就是落雁峰。');
    locTag('落雁峰 · 山路');
    
    choices.push({ text: '继续前进', id: 'c4_advance', next: SCENES['mountain_path_encounter'] });
    choices.push({ text: '走小路', id: 'c4_side_path', next: SCENES['mountain_fork'] });
    if (getRel('shen_guyan') >= 10) {
      choices.push({ text: '和沈孤雁商议路线', id: 'c4_shen_path', next: SCENES['mountain_path_shen'] });
    }
    if (getRel('liu_ruyin') >= 0) {
      choices.push({ text: '和柳如烟讨论战术', id: 'c4_liu_path', next: SCENES['mountain_path_liu'] });
    }
    if (getRel('zhao_tieniu') >= 10) {
      choices.push({ text: '让赵铁牛探路', id: 'c4_zhao_path', next: SCENES['mountain_path_zhao'] });
    }
  }

  if (choices.length === 0) {
    narrate('你暂时没有可以做的事。');
    choices.push({ text: '继续', id: 'fallback', next: SCENES['start'] });
  }
  
  showChoices(choices);
};
