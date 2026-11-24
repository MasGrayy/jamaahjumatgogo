const HERO_CATALOG = [
  { id: 'tigreal', name: 'Tigreal', role: 'Warrior', faction: 'Lightborn', cost: 1, hp: 780, atk: 54, range: 1, maxMana: 80, ultName: 'Implosion', ultDesc: 'Stun musuh di sekitar 1.4s & +140 Shield', sprite: 'assets/tigreal.svg' },
  { id: 'zilong', name: 'Zilong', role: 'Warrior', faction: 'Cadia Riverlands', cost: 1, hp: 650, atk: 70, range: 1, maxMana: 70, ultName: 'Supreme Warrior', ultDesc: 'Serangan ganda 190% ATK & +25% Speed', sprite: 'assets/zilong.svg' },
  { id: 'alucard', name: 'Alucard', role: 'Warrior', faction: 'Abyss', cost: 2, hp: 730, atk: 80, range: 1, maxMana: 75, ultName: 'Fission Wave', ultDesc: 'Tebasan 210% ATK dengan 50% Lifesteal', sprite: 'assets/alucard.svg' },
  { id: 'freya', name: 'Freya', role: 'Warrior', faction: 'Northern Vale', cost: 3, hp: 880, atk: 92, range: 1, maxMana: 85, ultName: 'Valkyrie Descent', ultDesc: 'Serangan area 180% ATK & +220 Shield', sprite: 'assets/freya.svg' },

  { id: 'eudora', name: 'Eudora', role: 'Mage', faction: 'Lightborn', cost: 1, hp: 470, atk: 86, range: 3, maxMana: 75, ultName: 'Thunderstruck', ultDesc: 'Petir 250% Magic DMG ke target', sprite: 'assets/eudora.svg' },
  { id: 'gord', name: 'Gord', role: 'Mage', faction: 'Cadia Riverlands', cost: 2, hp: 510, atk: 98, range: 3, maxMana: 85, ultName: 'Mystic Gush', ultDesc: 'Sinar energi 185% DMG ke hingga 2 musuh', sprite: 'assets/gord.svg' },
  { id: 'aurora', name: 'Aurora', role: 'Mage', faction: 'Northern Vale', cost: 3, hp: 550, atk: 114, range: 3, maxMana: 90, ultName: 'Coldness Destroy', ultDesc: '230% DMG & membekukan target 1.2s', sprite: 'assets/aurora.svg' },

  { id: 'miya', name: 'Miya', role: 'Archer', faction: 'Northern Vale', cost: 1, hp: 460, atk: 76, range: 4, maxMana: 70, ultName: 'Arrow Eclipse', ultDesc: 'Menembak 2 target sekaligus (185% ATK)', sprite: 'assets/miya.svg' },
  { id: 'layla', name: 'Layla', role: 'Archer', faction: 'Lightborn', cost: 2, hp: 480, atk: 94, range: 4, maxMana: 80, ultName: 'Destruction Rush', ultDesc: 'Meriam jarak jauh 240% ATK', sprite: 'assets/layla.svg' },
  { id: 'moskov', name: 'Moskov', role: 'Archer', faction: 'Abyss', cost: 3, hp: 560, atk: 110, range: 4, maxMana: 80, ultName: 'Spear of Destruction', ultDesc: 'Tembakan tembus 240% ATK + Lifesteal', sprite: 'assets/moskov.svg' },

  { id: 'ling', name: 'Ling', role: 'Assassin', faction: 'Cadia Riverlands', cost: 3, hp: 570, atk: 120, range: 1, jump: true, maxMana: 80, ultName: 'Tempest of Blades', ultDesc: 'Crit 240% ATK ke target terlemah', sprite: 'assets/ling.svg' },
  { id: 'hayabusa', name: 'Hayabusa', role: 'Assassin', faction: 'Cadia Riverlands', cost: 2, hp: 520, atk: 100, range: 1, jump: true, maxMana: 75, ultName: 'Ougi: Shadow Kill', ultDesc: '3 tebasan bayangan cepat (240% ATK)', sprite: 'assets/hayabusa.svg' },
  { id: 'gusion', name: 'Gusion', role: 'Assassin', faction: 'Abyss', cost: 2, hp: 505, atk: 104, range: 1, jump: true, maxMana: 75, ultName: 'Incandescence', ultDesc: 'Lemparan 5 belati (240% DMG)', sprite: 'assets/gusion.svg' }
];

const COMMANDERS = [
  {
    id: 'remy',
    name: 'Remy (Banker)',
    icon: '💰',
    passive: '+2 Gold ekstra tiap menang ronde.',
    skillName: 'Gold Rush',
    skillDesc: 'Langsung dapatkan +5 Gold instan (Cooldown 3 ronde).',
    cdMax: 3
  },
  {
    id: 'connie',
    name: 'Connie (Merchant)',
    icon: '🎲',
    passive: 'Biaya Refresh Toko berkurang menjadi 1 Gold.',
    skillName: 'Lucky Draw',
    skillDesc: 'Gratis 1 Hero Tier-2 acak ke Bench (Cooldown 4 ronde).',
    cdMax: 4
  },
  {
    id: 'tharz',
    name: 'Tharz (Warlord)',
    icon: '🔥',
    passive: 'Seluruh hero tim mendapat +12% ATK tambahan.',
    skillName: 'Battle Cry',
    skillDesc: 'Isi penuh 100% Mana seluruh hero di papan saat persiapan (Cooldown 3 ronde).',
    cdMax: 3
  }
];

const BASIC_ITEMS = [
  { id: 'dagger', name: 'Dagger', icon: '🗡️', atk: 18, hp: 0, epic: false },
  { id: 'staff', name: 'Mystic Staff', icon: '🪄', atk: 24, hp: 40, epic: false },
  { id: 'belt', name: 'Giant Belt', icon: '🛡️', atk: 8, hp: 220, epic: false }
];

const EPIC_RECIPES = [
  { a: 'dagger', b: 'dagger', result: { id: 'bod', name: 'Blade of Despair', icon: '⚔️', atk: 60, hp: 60, epic: true, desc: '+60 ATK & +60 HP' } },
  { a: 'belt', b: 'belt', result: { id: 'immortality', name: 'Immortality', icon: '🌟', atk: 20, hp: 520, revive: true, epic: true, desc: '+520 HP & Revive 1x saat tumbang' } },
  { a: 'dagger', b: 'belt', result: { id: 'haas', name: 'Haas Claws', icon: '🩸', atk: 36, hp: 180, lifesteal: 0.28, epic: true, desc: '+36 ATK, +180 HP & 28% Lifesteal' } },
  { a: 'staff', b: 'belt', result: { id: 'clock', name: 'Clock of Destiny', icon: '💎', atk: 44, hp: 340, startMana: 35, epic: true, desc: '+44 ATK, +340 HP & +35 Mana Awal' } },
  { a: 'dagger', b: 'staff', result: { id: 'feather', name: 'Feather of Heaven', icon: '🪶', atk: 48, hp: 120, spdBonus: 0.25, epic: true, desc: '+48 ATK, +120 HP & +25% Attack Speed' } },
  { a: 'staff', b: 'staff', result: { id: 'holy', name: 'Holy Crystal', icon: '🔮', atk: 68, hp: 80, startMana: 45, epic: true, desc: '+68 ATK & +45 Mana Awal' } }
];

const ROLE_BONUSES = {
  Warrior: { thresholds: [2, 4], desc: '2: +160 HP & +14 ATK | 4: +380 HP & +30 ATK' },
  Mage: { thresholds: [2, 3], desc: '2: +22% Skill/Burst DMG | 3: +48% Skill/Burst DMG' },
  Archer: { thresholds: [2, 3], desc: '2: +22% Attack Speed | 3: +48% Attack Speed' },
  Assassin: { thresholds: [2, 3], desc: '2: +25% Crit Chance/DMG | 3: +55% Crit DMG & Lompat Backline' }
};

const FACTION_BONUSES = {
  Lightborn: { thresholds: [2, 3], desc: '2: Shield awal 140 HP | 3: Shield awal 320 HP' },
  Abyss: { thresholds: [2, 3], desc: '2: +15% Lifesteal tim | 3: +30% Lifesteal & +22 ATK' },
  'Cadia Riverlands': { thresholds: [2, 3], desc: '2: +15% Attack Speed tim | 3: +35% Attack Speed & +16 ATK' },
  'Northern Vale': { thresholds: [2, 3], desc: '2: +190 HP & +16 ATK | 3: +420 HP & +36 ATK' }
};

const PUZZLES = [
  {
    id: 'p1',
    title: 'Tantangan #1: Tembus Barisan Abyss',
    desc: 'Modal 18 Gold (Lv.4). Kalahkan tim Abyss di baris depan & belakang!',
    gold: 18,
    level: 4,
    enemies: [
      { heroId: 'alucard', star: 2, row: 1, col: 3 },
      { heroId: 'moskov', star: 2, row: 0, col: 5 },
      { heroId: 'gusion', star: 1, row: 0, col: 4 }
    ]
  },
  {
    id: 'p2',
    title: 'Tantangan #2: Badai Northern Vale',
    desc: 'Modal 24 Gold (Lv.5). Tumbangkan formasi Freya + Aurora + Miya!',
    gold: 24,
    level: 5,
    enemies: [
      { heroId: 'freya', star: 2, row: 1, col: 2 },
      { heroId: 'tigreal', star: 2, row: 1, col: 4 },
      { heroId: 'aurora', star: 2, row: 0, col: 3 },
      { heroId: 'miya', star: 2, row: 0, col: 6 }
    ]
  },
  {
    id: 'p3',
    title: 'Tantangan #3: Benteng Lightborn',
    desc: 'Modal 30 Gold (Lv.6). Hancurkan pertahanan Shield tebal Lightborn!',
    gold: 30,
    level: 6,
    enemies: [
      { heroId: 'tigreal', star: 3, row: 1, col: 3 },
      { heroId: 'eudora', star: 2, row: 0, col: 2 },
      { heroId: 'layla', star: 2, row: 0, col: 5 },
      { heroId: 'ling', star: 2, row: 0, col: 6 }
    ]
  }
];

const ACHIEVEMENTS = [
  { id: 'first_win', title: 'Kemenangan Pertama', desc: 'Menangkan 1 pertarungan ronde.' },
  { id: 'star_3', title: 'Bintang Tiga Legendaris', desc: 'Gabungkan hero hingga mencapai Bintang 3.' },
  { id: 'epic_craft', title: 'Master Blacksmith', desc: 'Rakit 1 Item Epik dari 2 item dasar.' },
  { id: 'puzzle_clear', title: 'Ahli Taktik Puzzle', desc: 'Menangkan 1 Mode Puzzle Tantangan.' },
  { id: 'cmd_master', title: 'Ahli Komandan', desc: 'Gunakan Skill Aktif Little Commander dalam pertandingan.' }
];

const SoundFX = {
  enabled: true,
  ctx: null,
  play(type) {
    if (!this.enabled) return;
    try {
      if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      const now = this.ctx.currentTime;

      if (type === 'coin') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(660, now);
        osc.frequency.exponentialRampToValueAtTime(990, now + 0.12);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
        osc.start(now); osc.stop(now + 0.14);
      } else if (type === 'hit') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(190, now);
        osc.frequency.exponentialRampToValueAtTime(70, now + 0.08);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
        osc.start(now); osc.stop(now + 0.09);
      } else if (type === 'ult') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(780, now + 0.22);
        gain.gain.setValueAtTime(0.09, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);
        osc.start(now); osc.stop(now + 0.24);
      } else if (type === 'win') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523, now);
        osc.frequency.setValueAtTime(659, now + 0.1);
        osc.frequency.setValueAtTime(784, now + 0.2);
        gain.gain.setValueAtTime(0.09, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now); osc.stop(now + 0.35);
      }
    } catch (_) {}
  }
};

const state = {
  hp: 100,
  gold: 15,
  level: 4,
  xp: 0,
  round: 1,
  phase: 'prep',
  speed: 1,
  shopLocked: false,
  commanderId: 'remy',
  cmdCooldown: 0,
  shop: [],
  bench: Array(8).fill(null),
  board: {},
  selectedUnitKey: null,
  selectedItemIdx: null,
  inventory: [
    { ...BASIC_ITEMS[0], uid: crypto.randomUUID() },
    { ...BASIC_ITEMS[1], uid: crypto.randomUUID() },
    { ...BASIC_ITEMS[2], uid: crypto.randomUUID() }
  ],
  damageStats: {},
  puzzleActive: null,
  achievements: JSON.parse(localStorage.getItem('mcgg_v5_ach') || '[]'),
  battleTimer: null,
  deferredPrompt: null
};

const XP_TABLE = { 2: 2, 3: 4, 4: 6, 5: 10, 6: 16, 7: 24, 8: 999 };
function xpNeeded(lv) { return XP_TABLE[lv] || 12; }

function getCommander() {
  return COMMANDERS.find(c => c.id === state.commanderId) || COMMANDERS[0];
}

function saveProgress() {
  if (state.phase !== 'prep' || state.puzzleActive) return;
  const payload = {
    hp: state.hp, gold: state.gold, level: state.level, xp: state.xp,
    round: state.round, commanderId: state.commanderId, cmdCooldown: state.cmdCooldown,
    bench: state.bench, board: state.board, inventory: state.inventory
  };
  localStorage.setItem('mcgg_v5_save', JSON.stringify(payload));
}

function loadProgress() {
  try {
    const raw = localStorage.getItem('mcgg_v5_save');
    if (!raw) return false;
    const saved = JSON.parse(raw);
    Object.assign(state, saved);
    return true;
  } catch (_) {
    return false;
  }
}

function unlockAchievement(id) {
  if (!state.achievements.includes(id)) {
    state.achievements.push(id);
    localStorage.setItem('mcgg_v5_ach', JSON.stringify(state.achievements));
    const info = ACHIEVEMENTS.find(a => a.id === id);
    if (info) logMsg(`🏆 Lencana Terbuka: ${info.title}!`);
    renderAchievements();
  }
}

function logMsg(msg) {
  const el = document.getElementById('battle-log');
  const line = document.createElement('div');
  line.textContent = `[R${state.round}] ${msg}`;
  el.prepend(line);
}

function createUnit(heroId, star = 1, side = 'ally') {
  const base = HERO_CATALOG.find(h => h.id === heroId) || HERO_CATALOG[0];
  const starMult = star === 1 ? 1 : star === 2 ? 1.85 : 3.4;
  const maxHp = Math.round(base.hp * starMult);
  const atk = Math.round(base.atk * starMult);
  return {
    uid: crypto.randomUUID(),
    heroId: base.id,
    name: base.name,
    role: base.role,
    faction: base.faction,
    cost: base.cost,
    star,
    side,
    maxHp,
    hp: maxHp,
    atk,
    range: base.range,
    jump: Boolean(base.jump),
    maxMana: base.maxMana,
    mana: 0,
    ultName: base.ultName,
    ultDesc: base.ultDesc,
    sprite: base.sprite,
    items: [],
    shield: 0,
    stunTimer: 0,
    revived: false,
    cd: 0
  };
}

function countFieldAllies() {
  return Object.values(state.board).filter(u => u && u.side === 'ally').length;
}

function getRerollCost() {
  return state.commanderId === 'connie' ? 1 : 2;
}

function rollShop(free = false) {
  const cost = getRerollCost();
  if (!free) {
    if (state.gold < cost) return logMsg(`Gold tidak cukup untuk Refresh Toko (butuh ${cost} Gold).`);
    state.gold -= cost;
    SoundFX.play('coin');
  }
  state.shop = Array.from({ length: 5 }, () => {
    const h = HERO_CATALOG[Math.floor(Math.random() * HERO_CATALOG.length)];
    return { ...h, slotId: crypto.randomUUID(), sold: false };
  });
  saveProgress();
  renderAll();
}

function buyXp() {
  if (state.gold < 4 || state.level >= 8) return;
  state.gold -= 4;
  state.xp += 4;
  SoundFX.play('coin');
  while (state.level < 8 && state.xp >= xpNeeded(state.level)) {
    state.xp -= xpNeeded(state.level);
    state.level += 1;
    logMsg(`🎉 Naik ke Level ${state.level}! Kapasitas hero di papan bertambah.`);
  }
  saveProgress();
  renderAll();
}

function useCommanderSkill() {
  if (state.phase !== 'prep' || state.cmdCooldown > 0) return;
  const cmd = getCommander();
  unlockAchievement('cmd_master');
  SoundFX.play('ult');

  if (cmd.id === 'remy') {
    state.gold += 5;
    logMsg('💰 Remy menggunakan Gold Rush: +5 Gold instan!');
  } else if (cmd.id === 'connie') {
    const idx = state.bench.findIndex(s => s === null);
    if (idx === -1) return logMsg('Bench penuh! Kosongkan 1 slot sebelum memakai skill Connie.');
    const h = HERO_CATALOG[Math.floor(Math.random() * HERO_CATALOG.length)];
    state.bench[idx] = createUnit(h.id, 2, 'ally');
    checkStarUpgrades();
    logMsg(`🎲 Connie memanggil ${h.name} ★2 ke Bench!`);
  } else if (cmd.id === 'tharz') {
    Object.values(state.board).forEach(u => {
      if (u && u.side === 'ally') u.mana = u.maxMana;
    });
    logMsg('🔥 Tharz mengaktifkan Battle Cry: Mana penuh untuk seluruh tim!');
  }

  state.cmdCooldown = cmd.cdMax;
  saveProgress();
  renderAll();
}

function checkStarUpgrades() {
  let upgraded = true;
  while (upgraded) {
    upgraded = false;
    for (const hero of HERO_CATALOG) {
      for (const star of [1, 2]) {
        const matches = [];
        for (let i = 0; i < state.bench.length; i++) {
          const u = state.bench[i];
          if (u && u.side === 'ally' && u.heroId === hero.id && u.star === star) {
            matches.push({ loc: 'bench', idx: i, unit: u });
          }
        }
        for (const [key, u] of Object.entries(state.board)) {
          if (u && u.side === 'ally' && u.heroId === hero.id && u.star === star) {
            matches.push({ loc: 'board', key, unit: u });
          }
        }
        if (matches.length >= 3) {
          const three = matches.slice(0, 3);
          const mergedItems = three.flatMap(m => m.unit.items);
          const targetLoc = three[0];
          for (let k = 1; k < 3; k++) {
            if (three[k].loc === 'bench') state.bench[three[k].idx] = null;
            else delete state.board[three[k].key];
          }
          const nextUnit = createUnit(hero.id, star + 1, 'ally');
          nextUnit.items = mergedItems.slice(0, 2);
          if (targetLoc.loc === 'bench') state.bench[targetLoc.idx] = nextUnit;
          else state.board[targetLoc.key] = nextUnit;
          if (star + 1 === 3) unlockAchievement('star_3');
          SoundFX.play('win');
          logMsg(`⭐ ${hero.name} meningkat menjadi Bintang ${star + 1}!`);
          upgraded = true;
          break;
        }
      }
      if (upgraded) break;
    }
  }
}

function buyShopCard(idx) {
  if (state.phase !== 'prep') return;
  const card = state.shop[idx];
  if (!card || card.sold) return;
  if (state.gold < card.cost) return logMsg(`Gold tidak cukup untuk membeli ${card.name}.`);
  const freeBenchIdx = state.bench.findIndex(slot => slot === null);
  if (freeBenchIdx === -1) return logMsg('Bench penuh! Jual atau pindahkan hero ke papan.');

  state.gold -= card.cost;
  card.sold = true;
  state.bench[freeBenchIdx] = createUnit(card.id, 1, 'ally');
  SoundFX.play('coin');
  checkStarUpgrades();
  saveProgress();
  renderAll();
}

function sellSelectedHero() {
  if (state.phase !== 'prep' || !state.selectedUnitKey) return;
  const [type, posRaw] = state.selectedUnitKey.split(':');
  const pos = type === 'board' ? posRaw : Number(posRaw);
  const unit = type === 'board' ? state.board[pos] : state.bench[pos];
  if (!unit || unit.side !== 'ally') return;

  const refund = unit.cost * (unit.star === 1 ? 1 : unit.star === 2 ? 3 : 7);
  state.gold += refund;
  unit.items.forEach(it => state.inventory.push(it));

  if (type === 'board') delete state.board[pos];
  else state.bench[pos] = null;

  state.selectedUnitKey = null;
  SoundFX.play('coin');
  logMsg(`💵 Menjual ${unit.name} ★${unit.star} (+${refund} Gold).`);
  saveProgress();
  renderAll();
}

function getActiveSynergies() {
  const units = Object.values(state.board).filter(u => u && u.side === 'ally');
  const uniqueByHero = new Map();
  units.forEach(u => uniqueByHero.set(u.heroId, u));
  const roster = Array.from(uniqueByHero.values());

  const roleCounts = {};
  const factionCounts = {};
  roster.forEach(u => {
    roleCounts[u.role] = (roleCounts[u.role] || 0) + 1;
    factionCounts[u.faction] = (factionCounts[u.faction] || 0) + 1;
  });

  const list = [];
  for (const [role, cfg] of Object.entries(ROLE_BONUSES)) {
    const cnt = roleCounts[role] || 0;
    const activeTier = cfg.thresholds.filter(t => cnt >= t).pop() || 0;
    list.push({ name: role, kind: 'Role', count: cnt, activeTier, desc: cfg.desc });
  }
  for (const [faction, cfg] of Object.entries(FACTION_BONUSES)) {
    const cnt = factionCounts[faction] || 0;
    const activeTier = cfg.thresholds.filter(t => cnt >= t).pop() || 0;
    list.push({ name: faction, kind: 'Faksi', count: cnt, activeTier, desc: cfg.desc });
  }
  return list.sort((a, b) => (b.activeTier > 0 ? 1 : 0) - (a.activeTier > 0 ? 1 : 0) || b.count - a.count);
}

function tryCraftItem(existingItem, newItem) {
  for (const rec of EPIC_RECIPES) {
    if ((rec.a === existingItem.id && rec.b === newItem.id) || (rec.a === newItem.id && rec.b === existingItem.id)) {
      return { ...rec.result, uid: crypto.randomUUID() };
    }
  }
  return null;
}

function equipSelectedItemOnUnit(unit) {
  if (state.selectedItemIdx === null) return false;
  const item = state.inventory[state.selectedItemIdx];
  if (!item) return false;

  if (unit.items.length === 1 && !unit.items[0].epic && !item.epic) {
    const crafted = tryCraftItem(unit.items[0], item);
    if (crafted) {
      unit.items = [crafted];
      state.inventory.splice(state.selectedItemIdx, 1);
      state.selectedItemIdx = null;
      unlockAchievement('epic_craft');
      SoundFX.play('win');
      logMsg(`⚒️ Item Epik Tercipta: ${crafted.icon} ${crafted.name} pada ${unit.name}!`);
      saveProgress();
      renderAll();
      return true;
    }
  }

  if (unit.items.length >= 2) {
    logMsg(`${unit.name} sudah memiliki 2 slot item penuh.`);
    return false;
  }

  unit.items.push(item);
  state.inventory.splice(state.selectedItemIdx, 1);
  state.selectedItemIdx = null;
  SoundFX.play('coin');
  logMsg(`🎒 ${item.icon} ${item.name} dipasang ke ${unit.name}.`);
  saveProgress();
  renderAll();
  return true;
}

function executeMove(srcType, srcPos, targetType, targetPos) {
  const getAt = (t, p) => t === 'board' ? state.board[p] : state.bench[p];
  const setAt = (t, p, val) => {
    if (t === 'board') {
      if (val) state.board[p] = val;
      else delete state.board[p];
    } else {
      state.bench[p] = val;
    }
  };

  const srcUnit = getAt(srcType, srcPos);
  const dstUnit = getAt(targetType, targetPos);
  if (!srcUnit || srcUnit.side !== 'ally') return;
  if (srcType === targetType && String(srcPos) === String(targetPos)) return;

  if (targetType === 'board' && srcType === 'bench' && !dstUnit) {
    if (countFieldAllies() >= state.level) {
      logMsg(`Papan penuh! Level ${state.level} maksimal ${state.level} hero di papan.`);
      return;
    }
  }

  setAt(srcType, srcPos, dstUnit || null);
  setAt(targetType, targetPos, srcUnit);
  state.selectedUnitKey = `${targetType}:${targetPos}`;
  saveProgress();
  renderAll();
}

function moveOrSelectUnit(targetType, targetPos) {
  const getAt = (type, pos) => type === 'board' ? state.board[pos] : state.bench[pos];
  const clickedUnit = getAt(targetType, targetPos);

  if (clickedUnit) {
    state.selectedUnitKey = `${targetType}:${targetPos}`;
    renderInspector();
  }

  if (state.phase !== 'prep') {
    renderBoardAndBench();
    return;
  }

  if (state.selectedItemIdx !== null && clickedUnit && clickedUnit.side === 'ally') {
    equipSelectedItemOnUnit(clickedUnit);
    return;
  }

  if (!state.selectedUnitKey) {
    if (clickedUnit && clickedUnit.side === 'ally') {
      state.selectedUnitKey = `${targetType}:${targetPos}`;
      renderAll();
    }
    return;
  }

  const [srcType, srcPosRaw] = state.selectedUnitKey.split(':');
  const srcPos = srcType === 'board' ? srcPosRaw : Number(srcPosRaw);
  const srcUnit = getAt(srcType, srcPos);

  if (!srcUnit || srcUnit.side !== 'ally' || (srcType === targetType && String(srcPos) === String(targetPos))) {
    state.selectedUnitKey = clickedUnit ? `${targetType}:${targetPos}` : null;
    renderAll();
    return;
  }

  executeMove(srcType, srcPos, targetType, targetPos);
}

function spawnDamagePopup(coord, text, kind = '') {
  const fx = document.getElementById('fx-layer');
  if (!fx) return;
  const [r, c] = coord.split(',').map(Number);
  const el = document.createElement('div');
  el.className = `dmg-popup ${kind}`;
  el.textContent = text;
  el.style.left = `${((c + 0.5) / 8) * 100}%`;
  el.style.top = `${((r + 0.35) / 4) * 100}%`;
  fx.appendChild(el);
  setTimeout(() => el.remove(), 700);
}

function spawnProjectile(fromCoord, toCoord) {
  const fx = document.getElementById('fx-layer');
  if (!fx) return;
  const [r1, c1] = fromCoord.split(',').map(Number);
  const [r2, c2] = toCoord.split(',').map(Number);
  const dot = document.createElement('div');
  dot.className = 'projectile-dot';
  dot.style.left = `${((c1 + 0.5) / 8) * 100}%`;
  dot.style.top = `${((r1 + 0.5) / 4) * 100}%`;
  fx.appendChild(dot);

  requestAnimationFrame(() => {
    dot.style.left = `${((c2 + 0.5) / 8) * 100}%`;
    dot.style.top = `${((r2 + 0.5) / 4) * 100}%`;
  });
  setTimeout(() => dot.remove(), 240);
}

function drawTargetingLines(hoveredKey = null) {
  const svg = document.getElementById('targeting-svg');
  svg.innerHTML = '';
  const activeKey = hoveredKey || state.selectedUnitKey;
  if (!activeKey || !activeKey.startsWith('board:')) return;

  const coord = activeKey.replace('board:', '');
  const unit = state.board[coord];
  if (!unit) return;

  const [r1, c1] = coord.split(',').map(Number);
  const enemies = Object.entries(state.board).filter(([_, u]) => u && u.side !== unit.side);
  if (!enemies.length) return;

  let bestEnemy = enemies[0];
  let bestDist = Infinity;
  for (const [ek] of enemies) {
    const [er, ec] = ek.split(',').map(Number);
    const d = Math.hypot(er - r1, ec - c1);
    if (d < bestDist) {
      bestDist = d;
      bestEnemy = [ek];
    }
  }

  const [er, ec] = bestEnemy[0].split(',').map(Number);
  const x1 = ((c1 + 0.5) / 8) * 640;
  const y1 = ((r1 + 0.5) / 4) * 420;
  const x2 = ((ec + 0.5) / 8) * 640;
  const y2 = ((er + 0.5) / 4) * 420;

  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', x1);
  line.setAttribute('y1', y1);
  line.setAttribute('x2', x2);
  line.setAttribute('y2', y2);
  line.setAttribute('stroke', unit.jump ? '#f472b6' : '#38bdf8');
  line.setAttribute('stroke-width', '3');
  line.setAttribute('stroke-dasharray', unit.jump ? '8,6' : 'none');
  svg.appendChild(line);

  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', x2);
  circle.setAttribute('cy', y2);
  circle.setAttribute('r', '9');
  circle.setAttribute('fill', 'none');
  circle.setAttribute('stroke', '#fbbf24');
  circle.setAttribute('stroke-width', '2.5');
  svg.appendChild(circle);
}

function spawnEnemiesForRound() {
  for (const [k, u] of Object.entries(state.board)) {
    if (u && u.side === 'enemy') delete state.board[k];
  }

  if (state.puzzleActive) {
    state.puzzleActive.enemies.forEach(e => {
      state.board[`${e.row},${e.col}`] = createUnit(e.heroId, e.star, 'enemy');
    });
    return;
  }

  const count = Math.min(6, 2 + Math.floor((state.round + 1) / 2));
  const starPool = state.round >= 6 ? [2, 2, 3] : state.round >= 3 ? [1, 2, 2] : [1, 1, 2];
  let frontCol = 1;
  let backCol = 1;

  for (let i = 0; i < count; i++) {
    const h = HERO_CATALOG[Math.floor(Math.random() * HERO_CATALOG.length)];
    const star = starPool[Math.floor(Math.random() * starPool.length)];
    const isFrontline = h.role === 'Warrior' || h.role === 'Assassin';
    const r = isFrontline ? 1 : 0;
    const c = isFrontline ? (frontCol++ * 2) % 8 : (backCol++ * 2 + 1) % 8;
    const key = !state.board[`${r},${c}`] ? `${r},${c}` : `${r},${(c + 1) % 8}`;
    state.board[key] = createUnit(h.id, star, 'enemy');
  }
}

function applyCombatBuffs() {
  const syns = getActiveSynergies();
  const synMap = Object.fromEntries(syns.map(s => [s.name, s.activeTier]));

  Object.values(state.board).forEach(u => {
    if (!u) return;
    let bonusHp = 0;
    let bonusAtk = 0;
    let shield = 0;
    let startMana = u.mana || 0;

    u.items.forEach(it => {
      bonusHp += it.hp || 0;
      bonusAtk += it.atk || 0;
      startMana += it.startMana || 0;
    });

    if (u.side === 'ally') {
      if (state.commanderId === 'tharz') bonusAtk += Math.round(u.atk * 0.12);
      if (u.role === 'Warrior' && synMap['Warrior']) {
        bonusHp += synMap['Warrior'] >= 4 ? 380 : 160;
        bonusAtk += synMap['Warrior'] >= 4 ? 30 : 14;
      }
      if (u.faction === 'Northern Vale' && synMap['Northern Vale']) {
        bonusHp += synMap['Northern Vale'] >= 3 ? 420 : 190;
        bonusAtk += synMap['Northern Vale'] >= 3 ? 36 : 16;
      }
      if (u.faction === 'Abyss' && synMap['Abyss'] >= 3) bonusAtk += 22;
      if (u.faction === 'Cadia Riverlands' && synMap['Cadia Riverlands'] >= 3) bonusAtk += 16;
      if (u.faction === 'Lightborn' && synMap['Lightborn']) {
        shield += synMap['Lightborn'] >= 3 ? 320 : 140;
      }
    }

    u.maxHp += bonusHp;
    u.hp = u.maxHp;
    u.atk += bonusAtk;
    u.shield = shield;
    u.mana = Math.min(u.maxMana, startMana);

    if (u.side === 'ally') {
      state.damageStats[u.uid] = { name: `${u.name} ★${u.star}`, dmg: 0, heal: 0 };
    }
  });
}

function dealDamage(attacker, attackerKey, target, targetKey, rawDmg, kind = '') {
  let dmg = Math.round(rawDmg);
  let remDmg = dmg;
  if (target.shield > 0) {
    const absorbed = Math.min(target.shield, remDmg);
    target.shield -= absorbed;
    remDmg -= absorbed;
  }
  target.hp -= remDmg;
  target.mana = Math.min(target.maxMana, target.mana + 12);

  spawnDamagePopup(targetKey, `-${dmg}`, kind);

  if (attacker.side === 'ally' && state.damageStats[attacker.uid]) {
    state.damageStats[attacker.uid].dmg += dmg;
  }

  const itemLs = attacker.items.reduce((acc, it) => acc + (it.lifesteal || 0), 0);
  const abyssLs = attacker.side === 'ally' ? 0.15 : 0;
  const totalLs = itemLs + abyssLs;
  if (totalLs > 0 && attacker.hp > 0) {
    const healAmt = Math.min(attacker.maxHp - attacker.hp, Math.round(dmg * totalLs));
    if (healAmt > 0) {
      attacker.hp += healAmt;
      spawnDamagePopup(attackerKey, `+${healAmt}`, 'heal');
      if (attacker.side === 'ally' && state.damageStats[attacker.uid]) {
        state.damageStats[attacker.uid].heal += healAmt;
      }
    }
  }

  if (target.hp <= 0) {
    const imm = target.items.find(it => it.revive && !target.revived);
    if (imm) {
      target.revived = true;
      target.hp = Math.round(target.maxHp * 0.55);
      spawnDamagePopup(targetKey, 'REVIVE!', 'ult');
      logMsg(`🌟 ${target.name} bangkit berkat Immortality!`);
    } else {
      delete state.board[targetKey];
    }
  }
}

function startBattle() {
  if (state.phase !== 'prep') return;
  if (countFieldAllies() === 0) {
    return logMsg('Letakkan minimal 1 hero ke papan sebelum memulai pertarungan!');
  }

  state.phase = 'battle';
  state.selectedUnitKey = null;
  state.damageStats = {};
  drawTargetingLines(null);
  spawnEnemiesForRound();
  applyCombatBuffs();
  renderAll();
  logMsg(`⚔️ Ronde ${state.round} dimulai!`);

  const stepBattle = () => {
    const entries = Object.entries(state.board);
    const allies = entries.filter(([_, u]) => u && u.side === 'ally' && u.hp > 0);
    const enemies = entries.filter(([_, u]) => u && u.side === 'enemy' && u.hp > 0);

    if (!allies.length || !enemies.length) {
      finishBattle(allies.length > 0 && enemies.length === 0);
      return;
    }

    for (const [k, u] of entries) {
      if (!u || u.hp <= 0) continue;
      if (u.stunTimer > 0) {
        u.stunTimer = Math.max(0, u.stunTimer - 0.38);
        continue;
      }

      const spdBonus = u.items.reduce((acc, it) => acc + (it.spdBonus || 0), 0);
      u.cd -= 0.38 * (1 + spdBonus);
      if (u.cd > 0) continue;
      u.cd = 1.0;

      const foes = Object.entries(state.board).filter(([_, f]) => f && f.side !== u.side && f.hp > 0);
      if (!foes.length) break;

      const [ur, uc] = k.split(',').map(Number);
      let nearestKey = foes[0][0];
      let nearestDist = Infinity;
      for (const [fk] of foes) {
        const [fr, fc] = fk.split(',').map(Number);
        const d = Math.hypot(fr - ur, fc - uc);
        if (d < nearestDist) {
          nearestDist = d;
          nearestKey = fk;
        }
      }

      const [tr, tc] = nearestKey.split(',').map(Number);
      const dist = Math.max(Math.abs(tr - ur), Math.abs(tc - uc));

      if (dist > u.range) {
        const stepR = tr > ur ? 1 : tr < ur ? -1 : 0;
        const stepC = tc > uc ? 1 : tc < uc ? -1 : 0;
        const candidates = u.jump
          ? [`${tr},${tc}`, `${ur + stepR},${uc + stepC}`, `${ur + stepR},${uc}`, `${ur},${uc + stepC}`]
          : [`${ur + stepR},${uc + stepC}`, `${ur + stepR},${uc}`, `${ur},${uc + stepC}`];

        for (const nk of candidates) {
          const [nr, nc] = nk.split(',').map(Number);
          if (nr >= 0 && nr < 4 && nc >= 0 && nc < 8 && !state.board[nk]) {
            state.board[nk] = u;
            delete state.board[k];
            break;
          }
        }
      } else {
        const target = state.board[nearestKey];
        if (!target) continue;

        if (u.range >= 3) spawnProjectile(k, nearestKey);

        if (u.mana >= u.maxMana) {
          u.mana = 0;
          SoundFX.play('ult');
          spawnDamagePopup(k, `⚡ ${u.ultName}!`, 'ult');

          if (u.heroId === 'tigreal') {
            u.shield += 140;
            target.stunTimer = 1.4;
            dealDamage(u, k, target, nearestKey, u.atk * 1.5, 'ult');
          } else if (u.heroId === 'aurora') {
            target.stunTimer = 1.2;
            dealDamage(u, k, target, nearestKey, u.atk * 2.3, 'ult');
          } else if (u.heroId === 'miya' || u.heroId === 'gord') {
            foes.slice(0, 2).forEach(([fk, fu]) => {
              dealDamage(u, k, fu, fk, u.atk * 1.85, 'ult');
            });
          } else {
            dealDamage(u, k, target, nearestKey, u.atk * 2.4, 'ult');
          }
        } else {
          u.mana = Math.min(u.maxMana, u.mana + 25);
          let dmg = u.atk;
          let kind = '';
          if (u.role === 'Mage') dmg *= 1.22;
          if (u.role === 'Assassin' && Math.random() < 0.35) {
            dmg *= 1.65;
            kind = 'crit';
          }
          SoundFX.play('hit');
          dealDamage(u, k, target, nearestKey, dmg, kind);
        }
      }
    }

    renderBoardAndBench();
    renderDamageMeter();
  };

  state.battleTimer = setInterval(stepBattle, 380 / state.speed);
}

function finishBattle(won) {
  clearInterval(state.battleTimer);
  state.battleTimer = null;
  state.phase = 'prep';

  for (const [k, u] of Object.entries(state.board)) {
    if (!u || u.side !== 'ally') {
      delete state.board[k];
    } else {
      u.hp = u.maxHp;
      u.mana = 0;
      u.shield = 0;
      u.stunTimer = 0;
      u.revived = false;
      u.cd = 0;
    }
  }

  if (state.puzzleActive) {
    if (won) {
      unlockAchievement('puzzle_clear');
      SoundFX.play('win');
      logMsg(`🧩 Puzzle "${state.puzzleActive.title}" BERHASIL!`);
    } else {
      logMsg(`🧩 Puzzle belum berhasil. Susun ulang formasi dan coba lagi!`);
    }
    state.puzzleActive = null;
    renderAll();
    return;
  }

  if (won) {
    unlockAchievement('first_win');
    SoundFX.play('win');
    const cmdBonus = state.commanderId === 'remy' ? 2 : 0;
    const reward = 6 + Math.min(5, Math.floor(state.gold / 10)) + cmdBonus;
    state.gold += reward;
    logMsg(`✅ Menang Ronde ${state.round}! +${reward} Gold${cmdBonus ? ' (Bonus Remy +2)' : ''}.`);
  } else {
    const loss = 12 + state.round * 2;
    state.hp = Math.max(0, state.hp - loss);
    state.gold += 5;
    logMsg(`❌ Kalah Ronde ${state.round}! -${loss} HP, +5 Gold.`);
  }

  state.round += 1;
  if (state.cmdCooldown > 0) state.cmdCooldown -= 1;
  state.xp += 2;
  while (state.level < 8 && state.xp >= xpNeeded(state.level)) {
    state.xp -= xpNeeded(state.level);
    state.level += 1;
  }

  if (!state.shopLocked) rollShop(true);
  else {
    saveProgress();
    renderAll();
  }

  if (state.round % 4 === 0) openFateBox();
}

function openFateBox() {
  const modal = document.getElementById('fate-modal');
  const box = document.getElementById('fate-choices');
  box.innerHTML = '';

  const options = [
    {
      title: '⚔️ Item Dasar Acak',
      desc: 'Tambahkan 1 item dasar ke inventori untuk crafting.',
      apply: () => {
        const it = BASIC_ITEMS[Math.floor(Math.random() * BASIC_ITEMS.length)];
        state.inventory.push({ ...it, uid: crypto.randomUUID() });
        logMsg(`🎁 Fate Box memberi ${it.icon} ${it.name}!`);
      }
    },
    {
      title: '💰 +10 Gold Darurat',
      desc: 'Tambah modal reroll atau beli XP.',
      apply: () => {
        state.gold += 10;
        logMsg('🎁 Fate Box memberi +10 Gold!');
      }
    },
    {
      title: '⭐ Hero Tier-2 Acak',
      desc: 'Dapatkan 1 hero Bintang 2 langsung ke Bench.',
      apply: () => {
        const idx = state.bench.findIndex(s => s === null);
        if (idx !== -1) {
          const h = HERO_CATALOG[Math.floor(Math.random() * HERO_CATALOG.length)];
          state.bench[idx] = createUnit(h.id, 2, 'ally');
          checkStarUpgrades();
          logMsg(`🎁 Fate Box memberi ${h.name} ★2 di Bench!`);
        } else {
          state.gold += 8;
          logMsg('🎁 Bench penuh — Fate Box memberi +8 Gold.');
        }
      }
    }
  ];

  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'fate-option';
    btn.innerHTML = `<strong>${opt.title}</strong><span class="hint">${opt.desc}</span>`;
    btn.onclick = () => {
      opt.apply();
      modal.classList.add('hidden');
      saveProgress();
      renderAll();
    };
    box.appendChild(btn);
  });

  modal.classList.remove('hidden');
}

function renderCommanders() {
  const box = document.getElementById('cmd-choices');
  box.innerHTML = '';
  COMMANDERS.forEach(c => {
    const btn = document.createElement('button');
    btn.className = `fate-option ${state.commanderId === c.id ? 'active-cmd' : ''}`;
    btn.innerHTML = `
      <strong>${c.icon} ${c.name}</strong>
      <span class="hint">Pasif: ${c.passive}</span>
      <span class="hint">Aktif (${c.skillName}): ${c.skillDesc}</span>
    `;
    btn.onclick = () => {
      state.commanderId = c.id;
      state.cmdCooldown = 0;
      document.getElementById('cmd-modal').classList.add('hidden');
      logMsg(`👑 Commander berganti menjadi ${c.name}.`);
      saveProgress();
      renderAll();
    };
    box.appendChild(btn);
  });
}

function renderInspector() {
  const el = document.getElementById('hero-inspector');
  if (!state.selectedUnitKey) {
    el.innerHTML = '<p class="empty-note">Klik hero di papan atau bench untuk melihat statistik, skill ultimate, dan tombol jual.</p>';
    return;
  }
  const [type, posRaw] = state.selectedUnitKey.split(':');
  const pos = type === 'board' ? posRaw : Number(posRaw);
  const u = type === 'board' ? state.board[pos] : state.bench[pos];
  if (!u) {
    el.innerHTML = '<p class="empty-note">Slot kosong.</p>';
    return;
  }

  const refund = u.cost * (u.star === 1 ? 1 : u.star === 2 ? 3 : 7);
  el.innerHTML = `
    <div class="insp-header">
      <img src="${u.sprite}" alt="${u.name}" />
      <div>
        <strong>${u.name} (${'★'.repeat(u.star)})</strong>
        <div class="hint">${u.role} • ${u.faction}</div>
      </div>
    </div>
    <div class="insp-grid">
      <div>❤️ HP: <strong>${u.hp}/${u.maxHp}</strong></div>
      <div>⚔️ ATK: <strong>${u.atk}</strong></div>
      <div>💧 Mana: <strong>${u.mana}/${u.maxMana}</strong></div>
      <div>🎯 Range: <strong>${u.range}</strong></div>
    </div>
    <div class="insp-skill">
      <strong>⚡ Ultimate: ${u.ultName}</strong>
      <div>${u.ultDesc}</div>
    </div>
    ${u.side === 'ally' && state.phase === 'prep' ? `<button id="btn-sell-hero" class="btn btn-danger">💵 Jual Hero (+${refund} Gold)</button>` : ''}
  `;
  const sellBtn = document.getElementById('btn-sell-hero');
  if (sellBtn) sellBtn.onclick = sellSelectedHero;
}

function renderSynergiesAndItems() {
  const synList = document.getElementById('synergy-list');
  synList.innerHTML = '';
  getActiveSynergies().forEach(s => {
    const card = document.createElement('div');
    card.className = `synergy-card ${s.activeTier > 0 ? 'active-syn' : ''}`;
    card.innerHTML = `
      <div class="syn-top">
        <span>${s.name}<span class="syn-type-tag">(${s.kind})</span></span>
        <span class="syn-count">${s.count}</span>
      </div>
      <div class="syn-desc">${s.desc}</div>
    `;
    synList.appendChild(card);
  });

  const invEl = document.getElementById('item-inventory');
  invEl.innerHTML = '';
  if (!state.inventory.length) {
    invEl.innerHTML = '<p class="empty-note">Inventori item kosong.</p>';
  } else {
    state.inventory.forEach((it, i) => {
      const chip = document.createElement('button');
      chip.className = `item-chip ${state.selectedItemIdx === i ? 'selected' : ''} ${it.epic ? 'epic' : ''}`;
      chip.innerHTML = `<div>${it.icon} <strong>${it.name}</strong></div><small>+${it.atk} ATK / +${it.hp} HP</small>`;
      chip.onclick = () => {
        state.selectedItemIdx = state.selectedItemIdx === i ? null : i;
        renderSynergiesAndItems();
      };
      invEl.appendChild(chip);
    });
  }

  const recEl = document.getElementById('recipe-list');
  recEl.innerHTML = '';
  EPIC_RECIPES.forEach(r => {
    const ia = BASIC_ITEMS.find(x => x.id === r.a);
    const ib = BASIC_ITEMS.find(x => x.id === r.b);
    const li = document.createElement('li');
    li.textContent = `${ia.icon}+${ib.icon} → ${r.result.icon} ${r.result.name}`;
    recEl.appendChild(li);
  });
}

function createUnitTokenEl(unit, locKey) {
  const token = document.createElement('div');
  token.className = `unit-token ${unit.side} star-${unit.star} ${unit.stunTimer > 0 ? 'stunned' : ''} ${state.selectedUnitKey === locKey ? 'selected-unit' : ''}`;
  const hpPct = Math.max(0, Math.min(100, (unit.hp / unit.maxHp) * 100));
  const manaPct = Math.max(0, Math.min(100, (unit.mana / unit.maxMana) * 100));
  const itemsBadge = unit.items.map(it => it.icon).join('');

  if (unit.side === 'ally' && state.phase === 'prep') {
    token.draggable = true;
    token.ondragstart = (e) => {
      e.dataTransfer.setData('text/plain', locKey);
    };
  }

  token.innerHTML = `
    <span class="unit-items-dots">${itemsBadge}</span>
    <span class="unit-stars">${'★'.repeat(unit.star)}</span>
    <img src="${unit.sprite}" alt="${unit.name}" />
    <span class="unit-name">${unit.name}</span>
    <div class="bars-wrap">
      <div class="hp-mini-bar"><div class="hp-mini-fill" style="width:${hpPct}%"></div></div>
      <div class="mana-mini-bar"><div class="mana-mini-fill" style="width:${manaPct}%"></div></div>
    </div>
  `;
  token.onmouseenter = () => drawTargetingLines(locKey);
  token.onmouseleave = () => drawTargetingLines(null);
  return token;
}

function bindDropZone(el, targetType, targetPos) {
  el.ondragover = (e) => {
    if (state.phase === 'prep') {
      e.preventDefault();
      el.classList.add('drag-over');
    }
  };
  el.ondragleave = () => el.classList.remove('drag-over');
  el.ondrop = (e) => {
    e.preventDefault();
    el.classList.remove('drag-over');
    if (state.phase !== 'prep') return;
    const srcKey = e.dataTransfer.getData('text/plain');
    if (!srcKey) return;
    const [srcType, srcPosRaw] = srcKey.split(':');
    const srcPos = srcType === 'board' ? srcPosRaw : Number(srcPosRaw);
    executeMove(srcType, srcPos, targetType, targetPos);
  };
}

function renderBoardAndBench() {
  const boardEl = document.getElementById('chessboard');
  boardEl.innerHTML = '';
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 8; c++) {
      const key = `${r},${c}`;
      const tile = document.createElement('div');
      tile.className = `tile ${r < 2 ? 'enemy-zone' : ''}`;
      const unit = state.board[key];
      if (unit) tile.appendChild(createUnitTokenEl(unit, `board:${key}`));
      tile.onclick = () => moveOrSelectUnit('board', key);
      bindDropZone(tile, 'board', key);
      boardEl.appendChild(tile);
    }
  }

  const benchEl = document.getElementById('bench-grid');
  benchEl.innerHTML = '';
  let usedBench = 0;
  state.bench.forEach((u, idx) => {
    const slot = document.createElement('div');
    slot.className = 'bench-slot';
    if (u) {
      usedBench += 1;
      slot.appendChild(createUnitTokenEl(u, `bench:${idx}`));
    }
    slot.onclick = () => moveOrSelectUnit('bench', idx);
    bindDropZone(slot, 'bench', idx);
    benchEl.appendChild(slot);
  });
  document.getElementById('bench-count').textContent = `${usedBench} / ${state.bench.length}`;
}

function renderDamageMeter() {
  const listEl = document.getElementById('damage-meter-list');
  const mvpEl = document.getElementById('mvp-badge');
  const rows = Object.values(state.damageStats).sort((a, b) => b.dmg - a.dmg);

  if (!rows.length) {
    listEl.innerHTML = '<p class="empty-note">Statistik damage & healing tampil saat pertarungan.</p>';
    mvpEl.textContent = 'MVP: -';
    return;
  }

  mvpEl.textContent = `MVP: ${rows[0].name}`;
  const maxDmg = Math.max(1, rows[0].dmg);
  listEl.innerHTML = '';
  rows.forEach(r => {
    const pct = Math.round((r.dmg / maxDmg) * 100);
    const div = document.createElement('div');
    div.className = 'meter-row';
    div.innerHTML = `
      <div class="meter-meta">
        <span>${r.name}</span>
        <span>⚔️ ${r.dmg} | 💚 ${r.heal}</span>
      </div>
      <div class="meter-bar"><div class="meter-fill" style="width:${pct}%"></div></div>
    `;
    listEl.appendChild(div);
  });
}

function renderShop() {
  const shopEl = document.getElementById('shop-cards');
  shopEl.innerHTML = '';
  state.shop.forEach((card, idx) => {
    const div = document.createElement('div');
    div.className = `shop-card ${card.sold ? 'sold' : ''}`;
    div.innerHTML = `
      <div class="shop-card-top">
        <img src="${card.sprite}" alt="${card.name}" />
        <div>
          <div class="shop-hero-name">${card.name}</div>
          <div class="shop-tags">${card.role} • ${card.faction}</div>
        </div>
      </div>
      <div class="shop-card-bottom">
        <span>Rng ${card.range}${card.jump ? ' • Jump' : ''}</span>
        <span class="cost-badge">${card.cost} G</span>
      </div>
    `;
    div.onclick = () => buyShopCard(idx);
    shopEl.appendChild(div);
  });

  document.getElementById('reroll-cost-label').textContent = `${getRerollCost()} Gold`;
  document.getElementById('btn-lock-shop').textContent = state.shopLocked ? '🔒 Terkunci' : '🔓 Kunci Toko';
}

function renderPuzzles() {
  const list = document.getElementById('puzzle-list');
  list.innerHTML = '';
  PUZZLES.forEach(p => {
    const row = document.createElement('div');
    row.className = 'puzzle-item';
    row.innerHTML = `<div><strong>${p.title}</strong><div class="hint">${p.desc}</div></div>`;
    const btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.textContent = 'Mainkan';
    btn.onclick = () => {
      if (state.phase !== 'prep') return;
      state.puzzleActive = p;
      state.gold = p.gold;
      state.level = p.level;
      state.board = {};
      state.bench = Array(8).fill(null);
      rollShop(true);
      document.getElementById('puzzle-modal').classList.add('hidden');
      logMsg(`🧩 Memulai ${p.title}! Susun hero Anda lalu klik Mulai Pertarungan.`);
      renderAll();
    };
    row.appendChild(btn);
    list.appendChild(row);
  });
}

function renderAchievements() {
  const list = document.getElementById('ach-list');
  list.innerHTML = '';
  ACHIEVEMENTS.forEach(a => {
    const unlocked = state.achievements.includes(a.id);
    const row = document.createElement('div');
    row.className = `ach-item ${unlocked ? 'unlocked' : ''}`;
    row.innerHTML = `
      <div><strong>${a.title}</strong><div class="hint">${a.desc}</div></div>
      <span>${unlocked ? '✅ Terbuka' : '🔒 Terkunci'}</span>
    `;
    list.appendChild(row);
  });
}

function renderHud() {
  document.getElementById('player-hp').textContent = state.hp;
  document.getElementById('player-gold').textContent = state.gold;
  document.getElementById('player-level').textContent = state.level;
  document.getElementById('player-xp').textContent = `(${state.xp}/${xpNeeded(state.level)})`;
  document.getElementById('round-num').textContent = state.round;
  document.getElementById('mode-indicator').textContent = state.puzzleActive
    ? `Puzzle: ${state.puzzleActive.title}`
    : `Mode: Standard (${countFieldAllies()}/${state.level} Hero di Papan)`;

  const cmd = getCommander();
  document.getElementById('cmd-icon').textContent = cmd.icon;
  document.getElementById('cmd-name').textContent = cmd.name;
  document.getElementById('cmd-passive').textContent = cmd.passive;
  const skillBtn = document.getElementById('btn-cmd-skill');
  skillBtn.disabled = state.phase !== 'prep' || state.cmdCooldown > 0;
  skillBtn.textContent = state.cmdCooldown > 0 ? `⏳ CD (${state.cmdCooldown}R)` : `⚡ ${cmd.skillName}`;

  const badge = document.getElementById('phase-badge');
  badge.textContent = state.phase === 'prep' ? 'Persiapan' : 'Bertarung';
  badge.className = `phase-tag ${state.phase}`;

  document.getElementById('btn-start-battle').disabled = state.phase !== 'prep';
  document.getElementById('btn-speed').textContent = `⏩ ${state.speed}x`;
}

function renderAll() {
  renderHud();
  renderSynergiesAndItems();
  renderBoardAndBench();
  renderDamageMeter();
  renderShop();
  renderInspector();
}

function initEvents() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
    };
  });

  document.getElementById('arena-theme-select').onchange = (e) => {
    document.body.className = `theme-${e.target.value}`;
  };

  document.getElementById('btn-sfx-toggle').onclick = (e) => {
    SoundFX.enabled = !SoundFX.enabled;
    e.target.textContent = SoundFX.enabled ? '🔊 SFX' : '🔇 Mute';
  };

  document.getElementById('btn-cmd-skill').onclick = useCommanderSkill;
  document.getElementById('btn-buy-xp').onclick = buyXp;
  document.getElementById('btn-reroll').onclick = () => rollShop(false);
  document.getElementById('btn-lock-shop').onclick = () => {
    state.shopLocked = !state.shopLocked;
    renderShop();
  };

  document.getElementById('btn-start-battle').onclick = startBattle;
  document.getElementById('btn-speed').onclick = () => {
    state.speed = state.speed === 1 ? 2 : state.speed === 2 ? 3 : 1;
    renderHud();
  };

  document.getElementById('btn-reset-game').onclick = () => {
    clearInterval(state.battleTimer);
    localStorage.removeItem('mcgg_v5_save');
    state.hp = 100;
    state.gold = 15;
    state.level = 4;
    state.xp = 0;
    state.round = 1;
    state.cmdCooldown = 0;
    state.phase = 'prep';
    state.puzzleActive = null;
    state.board = {};
    state.bench = Array(8).fill(null);
    state.damageStats = {};
    state.inventory = [
      { ...BASIC_ITEMS[0], uid: crypto.randomUUID() },
      { ...BASIC_ITEMS[1], uid: crypto.randomUUID() },
      { ...BASIC_ITEMS[2], uid: crypto.randomUUID() }
    ];
    document.getElementById('battle-log').innerHTML = '';
    rollShop(true);
    logMsg('Permainan direset ke awal.');
  };

  document.getElementById('btn-cmd-modal').onclick = () => {
    renderCommanders();
    document.getElementById('cmd-modal').classList.remove('hidden');
  };
  document.getElementById('btn-puzzle-modal').onclick = () => {
    renderPuzzles();
    document.getElementById('puzzle-modal').classList.remove('hidden');
  };
  document.getElementById('btn-ach-modal').onclick = () => {
    renderAchievements();
    document.getElementById('ach-modal').classList.remove('hidden');
  };
  document.getElementById('btn-help').onclick = () => {
    document.getElementById('help-modal').classList.remove('hidden');
  };

  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.onclick = () => document.getElementById(btn.dataset.close).classList.add('hidden');
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js').catch(() => {});
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    state.deferredPrompt = e;
    const installBtn = document.getElementById('btn-install-pwa');
    installBtn.style.display = 'inline-block';
    installBtn.onclick = async () => {
      installBtn.style.display = 'none';
      state.deferredPrompt.prompt();
      await state.deferredPrompt.userChoice;
      state.deferredPrompt = null;
    };
  });
}

initEvents();
const restored = loadProgress();
rollShop(true);
logMsg(restored
  ? 'Progres permainan sebelumnya dipulihkan dari penyimpanan lokal!'
  : 'Selamat datang di Magic Chess: Go Go v5! Pilih Commander, atur formasi, dan aktifkan Ultimate.');
