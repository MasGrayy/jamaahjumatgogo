// =========================================
// 1. DATA MASTER: HEROES, COMMANDERS, ITEMS, SYNERGIES
// =========================================
const HERO_POOL = [
  // Warrior (Melee Frontline)
  { id: 'tigreal', name: 'Botol', avatar: 'assets/tigreal.svg', role: 'Warrior', range: 'Melee (Frontline)', cost: 1, hp: 350, atk: 34, skillName: 'Sacred Hammer', skillDesc: 'Menghantam musuh depan sebesar 175% ATK & memulihkan 60 HP.' },
  { id: 'zilong', name: 'Alwi', avatar: 'assets/zilong.svg', role: 'Warrior', range: 'Melee (Frontline)', cost: 1, hp: 290, atk: 46, skillName: 'Spear Flip', skillDesc: 'Menusuk musuh dengan 195% ATK & menambah +30 Mana.' },
  { id: 'alucard', name: 'Dedek', avatar: 'assets/alucard.svg', role: 'Warrior', range: 'Melee (Frontline)', cost: 2, hp: 380, atk: 56, skillName: 'Fission Wave', skillDesc: '185% DMG + Lifesteal memulihkan 85 HP.' },
  { id: 'freya', name: 'Slamet', avatar: 'assets/freya.svg', role: 'Warrior', range: 'Melee (Frontline)', cost: 4, hp: 520, atk: 76, skillName: 'Valkyrie', skillDesc: '230% DMG + Perisai Suci (+120 HP).' },

  // Mage (Ranged Backline AoE)
  { id: 'eudora', name: 'Untung', avatar: 'assets/eudora.svg', role: 'Mage', range: 'Ranged (Jarak Jauh)', cost: 1, hp: 225, atk: 58, skillName: 'Thunderstruck', skillDesc: 'Sambaran petir 235% Magic Burst ke 1 target.' },
  { id: 'gord', name: 'Bejo', avatar: 'assets/gord.svg', role: 'Mage', range: 'Ranged (Jarak Jauh)', cost: 2, hp: 255, atk: 72, skillName: 'Mystic Gush', skillDesc: 'Laser energi melukai 2 musuh sebesar 165% ATK.' },
  { id: 'aurora', name: 'Memek', avatar: 'assets/aurora.svg', role: 'Mage', range: 'Ranged (Jarak Jauh)', cost: 4, hp: 310, atk: 96, skillName: 'Coldness Destroy', skillDesc: 'Badai es menghantam 3 musuh sebesar 180% ATK.' },

  // Archer (Ranged Backline Crit)
  { id: 'miya', name: 'Kuntul', avatar: 'assets/miya.svg', role: 'Archer', range: 'Ranged (Jarak Jauh)', cost: 1, hp: 235, atk: 52, skillName: 'Arrow Eclipse', skillDesc: 'Menembakkan panah ganda 220% DMG.' },
  { id: 'layla', name: 'Mamat', avatar: 'assets/layla.svg', role: 'Archer', range: 'Ranged (Jarak Jauh)', cost: 2, hp: 255, atk: 66, skillName: 'Destruction Rush', skillDesc: 'Tembakan meriam jarak jauh 245% DMG.' },
  { id: 'moskov', name: 'Doli', avatar: 'assets/moskov.svg', role: 'Archer', range: 'Ranged (Jarak Jauh)', cost: 3, hp: 290, atk: 82, skillName: 'Spear of Misery', skillDesc: 'Tombak bayangan 265% Piercing DMG.' },

  // Assassin (Backline Diver)
  { id: 'hayabusa', name: 'Rian', avatar: 'assets/hayabusa.svg', role: 'Assassin', range: 'Backline Diver', cost: 2, hp: 260, atk: 68, skillName: 'Shadow Kill', skillDesc: 'Menyerang baris belakang musuh sebesar 220% DMG.' },
  { id: 'gusion', name: 'Fajar', avatar: 'assets/gusion.svg', role: 'Assassin', range: 'Backline Diver', cost: 3, hp: 295, atk: 84, skillName: 'Sword Spike', skillDesc: 'Melempar 2 belati ke baris belakang (140% x2).' },
  { id: 'ling', name: 'Dimas', avatar: 'assets/ling.svg', role: 'Assassin', range: 'Backline Diver', cost: 4, hp: 340, atk: 98, skillName: 'Tempest of Blades', skillDesc: 'Tebasan pedang fatal 280% DMG ke target terlemah.' }
];

const SYNERGY_INFO = {
  Warrior: { icon: '🛡️', tiers: [2, 4], desc: '2: +140 HP | 4: +340 HP Warrior' },
  Mage: { icon: '🔮', tiers: [2, 4], desc: '2: +28 ATK | 4: +70 ATK Mage' },
  Archer: { icon: '🏹', tiers: [2, 4], desc: '2: 35% Crit | 4: 65% Crit (1.5x)' },
  Assassin: { icon: '🗡️', tiers: [2, 4], desc: 'Incar Baris Belakang! 2: +25% Crit | 4: +50% Crit' }
};

const COMMANDERS = [
  {
    id: 'harper',
    name: 'Harper',
    icon: '👑',
    skillName: 'Shield of Dawn',
    desc: 'Aktif: Memulihkan +15 HP Commander (Cooldown: 3 Ronde).',
    type: 'active',
    cooldownMax: 3
  },
  {
    id: 'remy',
    name: 'Remy',
    icon: '💰',
    skillName: 'Finance Genius',
    desc: 'Pasif: Biaya Reroll toko turun menjadi 1 Gold & +2 Gold awal.',
    type: 'passive',
    cooldownMax: 0
  },
  {
    id: 'benny',
    name: 'Benny',
    icon: '🐺',
    skillName: 'Beast Trap',
    desc: 'Aktif: Mendapatkan 1 Hero acak gratis ke bangku (Cooldown: 3 Ronde).',
    type: 'active',
    cooldownMax: 3
  }
];

const EQUIPMENT_POOL = [
  { id: 'bod', name: 'Blade of Despair', icon: '🗡️', desc: '+45 Attack fisik/sihir', hp: 0, atk: 45, mana: 0, revive: false },
  { id: 'talisman', name: 'Enchanted Talisman', icon: '📘', desc: '+60 Mana Awal & +15 ATK', hp: 0, atk: 15, mana: 60, revive: false },
  { id: 'guardian', name: 'Guardian Helmet', icon: '🛡️', desc: '+220 Max HP', hp: 220, atk: 0, mana: 0, revive: false },
  { id: 'immortality', name: 'Immortality', icon: '🪽', desc: '+100 HP & Bangkit 1x (50% HP)', hp: 100, atk: 0, mana: 0, revive: true },
  { id: 'haas', name: 'Haas Claws', icon: '🩸', desc: '+25 ATK & +40 HP tiap serang', hp: 0, atk: 25, mana: 0, vamp: true }
];

// Peluang kemunculan Tier [1 Gold, 2 Gold, 3 Gold, 4 Gold] per Level Commander
const SHOP_ODDS_BY_LEVEL = {
  1: [75, 25, 0, 0],
  2: [55, 35, 10, 0],
  3: [40, 40, 20, 0],
  4: [25, 35, 30, 10],
  5: [15, 30, 35, 20],
  6: [10, 25, 35, 30],
  7: [5, 20, 35, 40]
};

const GOGO_CARDS = [
  { id: 'rich', name: '🪙 Berkah Emas', desc: 'Langsung dapat +10 Gold & +2 Gold tiap menang.' },
  { id: 'titan', name: '❤️ Darah Titan', desc: 'Semua hero mendapat +130 Max HP permanen.' },
  { id: 'fury', name: '🔥 Amarah Dewa', desc: 'Semua hero mendapat +24 Attack permanen.' },
  { id: 'commander', name: '👑 Taktik Raja', desc: 'Kapasitas papan bertambah +1 hero secara permanen.' },
  { id: 'vamp', name: '🩸 Lifesteal', desc: 'Hero memulihkan 30 HP setiap kali menyerang.' },
  { id: 'mana_surge', name: '💧 Aliran Mana', desc: 'Hero memulai pertarungan dengan +50 Mana awal.' }
];

let state = {
  mode: 'normal', // 'normal' (10), 'hard' (15), 'endless' (Infinity)
  maxRounds: 10,
  commander: COMMANDERS[0],
  cmdCooldown: 0,
  hp: 100,
  gold: 10,
  level: 1,
  round: 1,
  winStreak: 0,
  lossStreak: 0,
  totalWins: 0,
  sellMode: false,
  shopLocked: false,
  inBattle: false,
  isCreepRound: false,
  isBossRound: false,
  board: Array(10).fill(null),
  bench: Array(8).fill(null),
  enemies: Array(10).fill(null),
  shop: [],
  itemsBag: [],
  selectedEquipIdx: null,
  activeCards: [],
  bonusCap: 0,
  bonusHp: 0,
  bonusAtk: 0,
  bonusWinGold: 0,
  hasLifesteal: false,
  startMana: 0
};

let uidCounter = 1;
let dragSource = null;
let selectedSetupMode = 'normal';
let selectedSetupCmd = 'harper';

// Touch Drag & Long-Press State
let touchDragState = {
  active: false,
  isDragging: false,
  loc: null,
  idx: null,
  startX: 0,
  startY: 0,
  ghostEl: null,
  sourceEl: null,
  hoveredSlot: null,
  longPressTimer: null,
  longPressed: false
};

// =========================================
// 2. AUDIO ENGINE (BGM & SFX)
// =========================================
let audioCtx = null;
let bgmMuted = false;
let bgmInterval = null;
let bgmStep = 0;

function initAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
}

function startBgmLoop() {
  if (bgmInterval) clearInterval(bgmInterval);
  bgmInterval = setInterval(() => {
    if (bgmMuted || !audioCtx || audioCtx.state !== 'running') return;
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    // Nada berbeda antara fase persiapan (tenang) vs pertarungan (tegang)
    const prepNotes = [220, 261.63, 329.63, 293.66, 220, 246.94, 329.63, 392.00];
    const battleNotes = [146.83, 146.83, 174.61, 164.81, 146.83, 196.00, 174.61, 130.81];
    const notes = state.inBattle ? battleNotes : prepNotes;
    const freq = notes[bgmStep % notes.length];
    bgmStep++;

    osc.type = state.inBattle ? 'triangle' : 'sine';
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(0.025, now);
    gain.gain.exponentialRampToValueAtTime(0.0008, now + 0.35);
    osc.start(now);
    osc.stop(now + 0.36);
  }, 420);
}

function playSound(type = 'slash') {
  if (bgmMuted) return;
  try {
    initAudio();
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === 'slash') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(90, now + 0.12);
      gain.gain.setValueAtTime(0.07, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.start(now);
      osc.stop(now + 0.12);
    } else if (type === 'ranged') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(680, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.14);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
      osc.start(now);
      osc.stop(now + 0.14);
    } else if (type === 'skill') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.exponentialRampToValueAtTime(780, now + 0.25);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.26);
      osc.start(now);
      osc.stop(now + 0.26);
    } else if (type === 'merge') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.setValueAtTime(554.37, now + 0.08);
      osc.frequency.setValueAtTime(659.25, now + 0.16);
      osc.frequency.setValueAtTime(880, now + 0.24);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      osc.start(now);
      osc.stop(now + 0.45);
    }
  } catch (e) {}
}

// =========================================
// 3. SETUP MODAL & LOCALSTORAGE HISTORY
// =========================================
function initSetupModal() {
  const modeEls = document.querySelectorAll('.mode-option');
  modeEls.forEach(el => {
    el.onclick = () => {
      modeEls.forEach(m => m.classList.remove('selected'));
      el.classList.add('selected');
      selectedSetupMode = el.dataset.mode;
    };
  });

  const cmdContainer = document.getElementById('cmd-choices');
  cmdContainer.innerHTML = '';
  COMMANDERS.forEach(cmd => {
    const div = document.createElement('div');
    div.className = `cmd-option ${cmd.id === selectedSetupCmd ? 'selected' : ''}`;
    div.innerHTML = `
      <span class="cmd-emoji">${cmd.icon}</span>
      <strong>${cmd.name}</strong>
      <small style="color:#38bdf8;font-weight:700;">${cmd.skillName}</small>
      <small>${cmd.desc}</small>
    `;
    div.onclick = () => {
      document.querySelectorAll('.cmd-option').forEach(c => c.classList.remove('selected'));
      div.classList.add('selected');
      selectedSetupCmd = cmd.id;
    };
    cmdContainer.appendChild(div);
  });

  document.getElementById('confirm-setup-btn').onclick = () => {
    initAudio();
    startBgmLoop();
    state.mode = selectedSetupMode;
    state.maxRounds = selectedSetupMode === 'normal' ? 10 : selectedSetupMode === 'hard' ? 15 : 999;
    state.commander = COMMANDERS.find(c => c.id === selectedSetupCmd);

    if (state.commander.id === 'remy') {
      state.gold += 2;
    }

    document.getElementById('mode-badge').textContent = selectedSetupMode.toUpperCase();
    document.getElementById('setup-modal').classList.add('hidden');
    generateEnemies();
    rollShop(true);
    logMessage(`👑 Commander ${state.commander.name} siap bertempur di mode ${selectedSetupMode.toUpperCase()}!`);
    renderAll();
  };
}

function saveMatchHistory(win) {
  try {
    const raw = localStorage.getItem('mcgg_history_v3');
    const records = raw ? JSON.parse(raw) : [];
    records.unshift({
      date: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }),
      mode: state.mode.toUpperCase(),
      commander: state.commander.name,
      round: state.round,
      wins: state.totalWins,
      win
    });
    localStorage.setItem('mcgg_history_v3', JSON.stringify(records.slice(0, 15)));
  } catch (e) {}
}

function openHistoryModal() {
  const modal = document.getElementById('history-modal');
  const summaryEl = document.getElementById('career-summary');
  const listEl = document.getElementById('match-history-list');

  let records = [];
  try {
    const raw = localStorage.getItem('mcgg_history_v3');
    records = raw ? JSON.parse(raw) : [];
  } catch (e) {}

  const totalGames = records.length;
  const totalVictories = records.filter(r => r.win).length;
  const bestRound = records.reduce((max, r) => Math.max(max, r.round), 0);

  summaryEl.innerHTML = `
    <strong>Total Main:</strong> ${totalGames} • <strong>Juara:</strong> ${totalVictories} • <strong>Rekor Ronde Tertinggi:</strong> ${bestRound}
  `;

  if (records.length === 0) {
    listEl.innerHTML = '<p class="empty-text" style="text-align:center;margin-top:10px;">Belum ada riwayat pertandingan.</p>';
  } else {
    listEl.innerHTML = records.map(r => `
      <div class="history-row ${r.win ? 'win' : 'lose'}">
        <div>
          <strong>${r.win ? '🏆 JUARA' : '💀 ELIMINASI'} (${r.mode})</strong><br>
          <small style="color:#94a3b8;">Commander: ${r.commander} • Ronde ${r.round} (${r.wins} Win)</small>
        </div>
        <small style="color:#cbd5e1;">${r.date}</small>
      </div>
    `).join('');
  }
  modal.classList.remove('hidden');
}

// =========================================
// 4. CORE GAMEPLAY HELPERS & ODDS
// =========================================
function getBoardCap() {
  return Math.min(8, state.level + 1 + state.bonusCap);
}

function getLevelUpCost() {
  return state.level * 4;
}

function getRerollCost() {
  return state.commander.id === 'remy' ? 1 : 2;
}

function getInterestGold() {
  return Math.min(5, Math.floor(state.gold / 10));
}

function getStreakBonus() {
  const s = Math.max(state.winStreak, state.lossStreak);
  if (s >= 4) return 3;
  if (s >= 3) return 2;
  if (s >= 2) return 1;
  return 0;
}

function rollTierByOdds() {
  const odds = SHOP_ODDS_BY_LEVEL[state.level] || [10, 25, 35, 30];
  const r = Math.random() * 100;
  let acc = 0;
  for (let i = 0; i < odds.length; i++) {
    acc += odds[i];
    if (r < acc) return i + 1;
  }
  return 1;
}

function createUnitInstance(heroId, star = 1, existingItems = []) {
  const base = HERO_POOL.find(h => h.id === heroId);
  const mult = star === 1 ? 1 : star === 2 ? 1.85 : 3.3;
  const maxHp = Math.round(base.hp * mult) + state.bonusHp;
  const atk = Math.round(base.atk * mult) + state.bonusAtk;
  return {
    uid: uidCounter++,
    heroId: base.id,
    name: base.name,
    avatar: base.avatar,
    role: base.role,
    range: base.range,
    cost: base.cost,
    skillName: base.skillName,
    skillDesc: base.skillDesc,
    star,
    maxHp,
    currentHp: maxHp,
    mana: state.startMana,
    maxMana: 100,
    atk,
    items: [...existingItems],
    revivedThisBattle: false,
    isCreep: false,
    isBoss: false
  };
}

function logMessage(msg, type = '') {
  const logEl = document.getElementById('battle-log');
  const div = document.createElement('div');
  div.className = `log-entry ${type}`;
  div.textContent = msg;
  logEl.prepend(div);
}

// =========================================
// 5. SHOP, LOCK, MERGE & EQUIPMENT
// =========================================
function rollShop(free = false) {
  if (!free) {
    const cost = getRerollCost();
    if (state.gold < cost) return logMessage('Gold tidak cukup untuk Reroll!');
    state.gold -= cost;
  }
  state.shop = [];
  for (let i = 0; i < 5; i++) {
    const tier = rollTierByOdds();
    let pool = HERO_POOL.filter(h => h.cost === tier);
    if (pool.length === 0) pool = HERO_POOL.filter(h => h.cost <= tier);
    const pick = pool[Math.floor(Math.random() * pool.length)];
    state.shop.push({ ...pick, sold: false });
  }
  renderAll();
}

function buyHero(index) {
  if (state.inBattle) return;
  const item = state.shop[index];
  if (!item || item.sold) return;
  if (state.gold < item.cost) return logMessage('Gold tidak cukup!');

  const emptyBenchIdx = state.bench.findIndex(s => s === null);
  if (emptyBenchIdx === -1) return logMessage('Bangku cadangan penuh!');

  state.gold -= item.cost;
  item.sold = true;
  state.bench[emptyBenchIdx] = createUnitInstance(item.id, 1);
  logMessage(`Membeli ${item.name} (${item.cost} Gold).`);
  checkMerge(item.id);
  renderAll();
}

function checkMerge(heroId) {
  for (let star = 1; star <= 2; star++) {
    const matches = [];
    state.board.forEach((u, idx) => {
      if (u && u.heroId === heroId && u.star === star) matches.push({ loc: 'board', idx, unit: u });
    });
    state.bench.forEach((u, idx) => {
      if (u && u.heroId === heroId && u.star === star) matches.push({ loc: 'bench', idx, unit: u });
    });

    if (matches.length >= 3) {
      const target = matches[0];
      // Gabungkan item yang terpasang di ketiga unit (maksimal 2 item disimpan, sisanya kembali ke tas)
      let combinedItems = [];
      for (let i = 0; i < 3; i++) {
        combinedItems.push(...matches[i].unit.items);
      }
      const keptItems = combinedItems.slice(0, 2);
      const returnedItems = combinedItems.slice(2);
      state.itemsBag.push(...returnedItems);

      for (let i = 1; i < 3; i++) {
        const m = matches[i];
        if (m.loc === 'board') state.board[m.idx] = null;
        else state.bench[m.idx] = null;
      }
      const upgraded = createUnitInstance(heroId, star + 1, keptItems);
      if (target.loc === 'board') state.board[target.idx] = upgraded;
      else state.bench[target.idx] = upgraded;

      playSound('merge');
      logMessage(`✨ ${upgraded.name} naik menjadi Bintang ${star + 1}!`, 'win');
      renderAll();
      setTimeout(() => flashAnim(upgraded.uid, 'merge-burst'), 50);
      checkMerge(heroId);
      break;
    }
  }
}

function equipItemToUnit(unit) {
  if (state.selectedEquipIdx === null) return false;
  const item = state.itemsBag[state.selectedEquipIdx];
  if (!item) return false;

  if (unit.items.length >= 2) {
    logMessage(`${unit.name} sudah memakai maksimal 2 Equipment!`);
    state.selectedEquipIdx = null;
    renderAll();
    return true;
  }

  unit.items.push(item);
  state.itemsBag.splice(state.selectedEquipIdx, 1);
  state.selectedEquipIdx = null;
  playSound('merge');
  logMessage(`🎒 Memasang ${item.icon} ${item.name} ke ${unit.name}!`, 'skill');
  renderAll();
  return true;
}

function openLootModal() {
  const modal = document.getElementById('loot-modal');
  const container = document.getElementById('loot-choices');
  container.innerHTML = '';

  const choices = [...EQUIPMENT_POOL].sort(() => Math.random() - 0.5).slice(0, 3);
  choices.forEach(item => {
    const div = document.createElement('div');
    div.className = 'gogo-card-option';
    div.innerHTML = `<h4>${item.icon} ${item.name}</h4><p>${item.desc}</p>`;
    div.onclick = () => {
      state.itemsBag.push({ ...item });
      logMessage(`🎁 Mendapatkan Equipment: ${item.icon} ${item.name}!`, 'win');
      modal.classList.add('hidden');
      renderAll();
    };
    container.appendChild(div);
  });
  modal.classList.remove('hidden');
}

function openHeroDetailModal(unit) {
  const modal = document.getElementById('hero-detail-modal');
  document.getElementById('detail-avatar').src = unit.avatar;
  document.getElementById('detail-stars').textContent = '⭐'.repeat(unit.star);
  document.getElementById('detail-name').textContent = unit.name;
  document.getElementById('detail-role').textContent = `${unit.role} • ${unit.cost} Gold`;
  document.getElementById('detail-hp').textContent = `${unit.currentHp} / ${unit.maxHp}`;
  document.getElementById('detail-atk').textContent = unit.atk;
  document.getElementById('detail-mana').textContent = `${unit.mana} / ${unit.maxMana}`;
  document.getElementById('detail-range').textContent = unit.range || 'Melee';
  document.getElementById('detail-skill-name').textContent = `⚡ ${unit.skillName}`;
  document.getElementById('detail-skill-desc').textContent = unit.skillDesc || 'Serangan spesial.';

  const eqList = document.getElementById('detail-equipped-list');
  if (!unit.items || unit.items.length === 0) {
    eqList.innerHTML = '<span class="empty-text">Tidak ada item terpasang</span>';
  } else {
    eqList.innerHTML = unit.items.map(it => `<span class="equip-chip">${it.icon} ${it.name} (${it.desc})</span>`).join('');
  }

  modal.classList.remove('hidden');
}

// =========================================
// 6. UNIT MOVEMENT & INTERACTION
// =========================================
function moveOrSwapUnit(fromLoc, fromIdx, toLoc, toIdx) {
  if (state.inBattle) return;
  if (fromLoc === toLoc && fromIdx === toIdx) return;

  const sourceUnit = fromLoc === 'board' ? state.board[fromIdx] : state.bench[fromIdx];
  const targetUnit = toLoc === 'board' ? state.board[toIdx] : state.bench[toIdx];
  if (!sourceUnit) return;

  if (fromLoc === 'bench' && toLoc === 'board' && !targetUnit) {
    const activeCount = state.board.filter(Boolean).length;
    if (activeCount >= getBoardCap()) {
      return logMessage(`Kapasitas papan penuh (${getBoardCap()})! Naikkan level dulu.`);
    }
  }

  if (fromLoc === 'board') state.board[fromIdx] = targetUnit;
  else state.bench[fromIdx] = targetUnit;

  if (toLoc === 'board') state.board[toIdx] = sourceUnit;
  else state.bench[toIdx] = sourceUnit;

  renderAll();
}

function handleUnitClick(loc, idx) {
  if (state.inBattle) return;
  const unit = loc === 'board' ? state.board[idx] : state.bench[idx];
  if (!unit) return;

  // Jika sedang memilih Equipment di tas, pasangkan ke hero ini
  if (state.selectedEquipIdx !== null) {
    equipItemToUnit(unit);
    return;
  }

  if (state.sellMode) {
    const refund = unit.cost * (unit.star === 1 ? 1 : unit.star === 2 ? 2 : 4);
    state.gold += refund;
    // Kembalikan item hero yang dijual ke tas
    if (unit.items && unit.items.length > 0) {
      state.itemsBag.push(...unit.items);
    }
    if (loc === 'board') state.board[idx] = null;
    else state.bench[idx] = null;
    logMessage(`Menjual ${unit.name} ⭐${unit.star} (+${refund} Gold).`);
    renderAll();
    return;
  }

  if (loc === 'bench') {
    const activeCount = state.board.filter(Boolean).length;
    if (activeCount >= getBoardCap()) {
      return logMessage(`Kapasitas papan penuh (${getBoardCap()})! Naikkan level dulu.`);
    }
    const emptyCell = state.board.findIndex(c => c === null);
    if (emptyCell !== -1) {
      state.board[emptyCell] = unit;
      state.bench[idx] = null;
    }
  } else {
    const emptyBench = state.bench.findIndex(b => b === null);
    if (emptyBench !== -1) {
      state.bench[emptyBench] = unit;
      state.board[idx] = null;
    } else {
      logMessage('Bangku cadangan penuh!');
    }
  }
  renderAll();
}

function getActiveSynergies() {
  const uniqueByRole = { Warrior: new Set(), Mage: new Set(), Archer: new Set(), Assassin: new Set() };
  state.board.forEach(u => {
    if (u && uniqueByRole[u.role]) uniqueByRole[u.role].add(u.heroId);
  });
  return {
    Warrior: uniqueByRole.Warrior.size,
    Mage: uniqueByRole.Mage.size,
    Archer: uniqueByRole.Archer.size,
    Assassin: uniqueByRole.Assassin.size
  };
}

// =========================================
// 7. ENEMY GENERATION (NORMAL, CREEP, BOSS)
// =========================================
function generateEnemies() {
  state.enemies = Array(10).fill(null);
  state.isCreepRound = (state.round % 3 === 0) && !(state.mode === 'hard' && state.round === 15);
  state.isBossRound = (state.mode === 'hard' && state.round === 15) || (state.mode === 'endless' && state.round % 10 === 0);

  if (state.isCreepRound) {
    // Ronde Monster Hutan (Creep) yang menjatuhkan Equipment
    const creepCount = Math.min(5, 2 + Math.floor(state.round / 3));
    const slots = [5, 6, 7, 8, 9].slice(0, creepCount); // Baris depan musuh
    slots.forEach(slotIdx => {
      const creep = createUnitInstance('tigreal', 1);
      creep.name = 'Jungle Creep';
      creep.role = 'Warrior';
      creep.maxHp = Math.round(280 + state.round * 75);
      creep.currentHp = creep.maxHp;
      creep.atk = Math.round(28 + state.round * 8);
      creep.isCreep = true;
      state.enemies[slotIdx] = creep;
    });
    return;
  }

  if (state.isBossRound) {
    // Boss Lord di slot tengah depan + pengawal
    const boss = createUnitInstance('freya', 3);
    boss.name = '👑 Lord Abyss';
    boss.maxHp = Math.round(1600 + state.round * 140);
    boss.currentHp = boss.maxHp;
    boss.atk = Math.round(135 + state.round * 12);
    boss.isBoss = true;
    state.enemies[7] = boss;

    [0, 4, 6, 8].forEach(slotIdx => {
      const guard = createUnitInstance('moskov', 2);
      guard.maxHp = Math.round(guard.maxHp * 1.35);
      guard.currentHp = guard.maxHp;
      state.enemies[slotIdx] = guard;
    });
    return;
  }

  const diffMult = state.mode === 'hard' ? 1.18 : 1.0;
  const count = Math.min(8, 1 + Math.floor(state.round * 0.75));
  const starLevel = state.round >= 11 ? 3 : state.round >= 6 ? 2 : 1;
  const slots = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5);

  for (let i = 0; i < count; i++) {
    const tpl = HERO_POOL[Math.floor(Math.random() * HERO_POOL.length)];
    const enemy = createUnitInstance(tpl.id, starLevel);
    enemy.maxHp = Math.round(enemy.maxHp * (0.85 + state.round * 0.11) * diffMult);
    enemy.currentHp = enemy.maxHp;
    enemy.atk = Math.round(enemy.atk * (0.85 + state.round * 0.09) * diffMult);
    enemy.mana = 0;
    state.enemies[slots[i]] = enemy;
  }
}

// =========================================
// 8. SMART TARGETING AI & COMBAT FX
// =========================================
// Grid 10 slot:
// Enemy: baris 0..4 (Belakang / Backline), baris 5..9 (Depan / Frontline)
// Player: baris 0..4 (Depan / Frontline), baris 5..9 (Belakang / Backline)
function selectTargetForAttacker(attacker, targetList, isPlayerAttacking) {
  const aliveWithIdx = [];
  targetList.forEach((u, idx) => {
    if (u && u.currentHp > 0) aliveWithIdx.push({ unit: u, idx });
  });
  if (aliveWithIdx.length === 0) return null;

  if (attacker.role === 'Assassin') {
    // Assassin mengincar baris belakang (Backline) terlebih dahulu!
    const backline = aliveWithIdx.filter(item => isPlayerAttacking ? item.idx < 5 : item.idx >= 5);
    const pool = backline.length > 0 ? backline : aliveWithIdx;
    return pool[Math.floor(Math.random() * pool.length)].unit;
  }

  // Warrior, Mage, Archer memprioritaskan baris depan (Frontline) terlebih dahulu
  const frontline = aliveWithIdx.filter(item => isPlayerAttacking ? item.idx >= 5 : item.idx < 5);
  const pool = frontline.length > 0 ? frontline : aliveWithIdx;
  return pool[Math.floor(Math.random() * pool.length)].unit;
}

function showFloatingText(uid, text, color = '#ff4d4d') {
  const el = document.querySelector(`[data-uid="${uid}"]`);
  if (!el) return;
  const tag = document.createElement('div');
  tag.className = 'floating-dmg';
  tag.style.color = color;
  tag.textContent = text;
  el.appendChild(tag);
  setTimeout(() => tag.remove(), 750);
}

function flashAnim(uid, className) {
  const el = document.querySelector(`[data-uid="${uid}"]`);
  if (el) {
    el.classList.remove(className);
    void el.offsetWidth;
    el.classList.add(className);
  }
}

function getElementCenterInArena(uid) {
  const arena = document.getElementById('arena-board');
  const el = document.querySelector(`[data-uid="${uid}"]`);
  if (!arena || !el) return null;
  const aRect = arena.getBoundingClientRect();
  const eRect = el.getBoundingClientRect();
  return {
    x: eRect.left - aRect.left + eRect.width / 2,
    y: eRect.top - aRect.top + eRect.height / 2
  };
}

function spawnImpactFx(uid, symbol = '💥', isSkill = false) {
  const layer = document.getElementById('arena-fx-layer');
  const pos = getElementCenterInArena(uid);
  if (!layer || !pos) return;

  const impact = document.createElement('div');
  impact.className = 'fx-impact';
  impact.textContent = symbol;
  impact.style.left = `${pos.x}px`;
  impact.style.top = `${pos.y}px`;
  layer.appendChild(impact);
  setTimeout(() => impact.remove(), 400);

  if (isSkill) {
    const wave = document.createElement('div');
    wave.className = 'fx-shockwave';
    wave.style.left = `${pos.x}px`;
    wave.style.top = `${pos.y}px`;
    layer.appendChild(wave);
    setTimeout(() => wave.remove(), 460);

    const arena = document.getElementById('arena-board');
    if (arena) {
      arena.classList.remove('screen-shake');
      void arena.offsetWidth;
      arena.classList.add('screen-shake');
    }
  }
}

function spawnAttackFx(attacker, target, isPlayer, isSkill = false, isCrit = false) {
  const layer = document.getElementById('arena-fx-layer');
  const start = getElementCenterInArena(attacker.uid);
  const end = getElementCenterInArena(target.uid);
  if (!layer || !start || !end) return;

  if ((attacker.role === 'Warrior' || attacker.role === 'Assassin') && !isSkill) {
    flashAnim(attacker.uid, isPlayer ? 'lunge-up' : 'lunge-down');
    playSound('slash');
    setTimeout(() => {
      spawnImpactFx(target.uid, attacker.role === 'Assassin' ? '🗡️' : isCrit ? '💥' : '⚔️', false);
    }, 110);
  } else {
    flashAnim(attacker.uid, 'attacking');
    playSound(isSkill ? 'skill' : 'ranged');

    const proj = document.createElement('div');
    proj.className = 'fx-projectile';
    if (isSkill) {
      proj.textContent = attacker.role === 'Mage' ? '🔮' : attacker.role === 'Archer' ? '☄️' : '⚡';
    } else {
      proj.textContent = attacker.role === 'Mage' ? '✨' : '🏹';
    }

    proj.style.left = `${start.x}px`;
    proj.style.top = `${start.y}px`;
    layer.appendChild(proj);

    requestAnimationFrame(() => {
      proj.style.left = `${end.x}px`;
      proj.style.top = `${end.y}px`;
      proj.style.transform = 'translate(-50%, -50%) scale(1.25)';
    });

    setTimeout(() => {
      proj.remove();
      spawnImpactFx(target.uid, isSkill ? '🌟' : isCrit ? '💥' : '💢', isSkill);
    }, 210);
  }
}

function applyDamageWithImmortality(target, dmg) {
  target.currentHp = Math.max(0, target.currentHp - dmg);
  if (target.currentHp === 0 && !target.revivedThisBattle && target.items) {
    const hasImmortal = target.items.some(it => it.revive);
    if (hasImmortal) {
      target.revivedThisBattle = true;
      target.currentHp = Math.round(target.maxHp * 0.5);
      showFloatingText(target.uid, '🪽 REVIVE!', '#fde047');
      logMessage(`🪽 ${target.name} bangkit kembali berkat Immortality!`, 'skill');
    }
  }
}

function executeSkill(attacker, enemiesList, isPlayer) {
  attacker.mana = 0;
  const primary = selectTargetForAttacker(attacker, enemiesList, isPlayer);
  if (!primary) return;

  let dmg = Math.round(attacker.atk * 1.9);

  if (attacker.heroId === 'gord' || attacker.heroId === 'aurora') {
    const count = attacker.heroId === 'aurora' ? 3 : 2;
    const aliveTargets = enemiesList.filter(u => u && u.currentHp > 0).slice(0, count);
    aliveTargets.forEach(t => {
      const aoeDmg = Math.round(attacker.atk * 1.65);
      spawnAttackFx(attacker, t, isPlayer, true, true);
      applyDamageWithImmortality(t, aoeDmg);
      flashAnim(t.uid, 'hit');
      showFloatingText(t.uid, `✨-${aoeDmg}`, '#c084fc');
    });
  } else {
    spawnAttackFx(attacker, primary, isPlayer, true, true);
    if (attacker.heroId === 'alucard' || attacker.heroId === 'tigreal') {
      attacker.currentHp = Math.min(attacker.maxHp, attacker.currentHp + 75);
      showFloatingText(attacker.uid, '+75', '#4ade80');
    } else if (attacker.heroId === 'freya') {
      attacker.currentHp = Math.min(attacker.maxHp, attacker.currentHp + 110);
      showFloatingText(attacker.uid, '🛡️+110', '#38bdf8');
    }
    applyDamageWithImmortality(primary, dmg);
    flashAnim(primary.uid, 'hit');
    showFloatingText(primary.uid, `💥-${dmg}`, '#facc15');
  }

  if (isPlayer) {
    logMessage(`⚡ ${attacker.name} mengaktifkan ${attacker.skillName}!`, 'skill');
  }
}

// =========================================
// 9. BATTLE LOOP
// =========================================
async function startBattle() {
  if (state.inBattle) return;
  const playerUnits = state.board.filter(Boolean);
  if (playerUnits.length === 0) {
    return logMessage('Turunkan minimal 1 hero ke papan sebelum bertarung!');
  }

  state.inBattle = true;
  state.sellMode = false;
  state.selectedEquipIdx = null;
  document.getElementById('start-battle-btn').disabled = true;

  const syn = getActiveSynergies();
  playerUnits.forEach(u => {
    let warriorHp = u.role === 'Warrior' ? (syn.Warrior >= 4 ? 340 : syn.Warrior >= 2 ? 140 : 0) : 0;
    let mageAtk = u.role === 'Mage' ? (syn.Mage >= 4 ? 70 : syn.Mage >= 2 ? 28 : 0) : 0;

    let itemHp = 0, itemAtk = 0, itemMana = 0;
    (u.items || []).forEach(it => {
      itemHp += it.hp || 0;
      itemAtk += it.atk || 0;
      itemMana += it.mana || 0;
    });

    const base = HERO_POOL.find(h => h.id === u.heroId);
    const mult = u.star === 1 ? 1 : u.star === 2 ? 1.85 : 3.3;
    u.maxHp = Math.round(base.hp * mult) + state.bonusHp + warriorHp + itemHp;
    u.currentHp = u.maxHp;
    u.atk = Math.round(base.atk * mult) + state.bonusAtk + mageAtk + itemAtk;
    u.mana = Math.min(100, state.startMana + itemMana);
    u.revivedThisBattle = false;
  });

  logMessage(`--- Ronde ${state.round} Dimulai! ---`);
  renderAll();

  while (true) {
    const aliveP = state.board.filter(u => u && u.currentHp > 0);
    const aliveE = state.enemies.filter(u => u && u.currentHp > 0);
    if (aliveP.length === 0 || aliveE.length === 0) break;

    for (const attacker of aliveP) {
      if (attacker.currentHp <= 0) continue;
      const target = selectTargetForAttacker(attacker, state.enemies, true);
      if (!target) break;

      if (attacker.mana >= attacker.maxMana) {
        executeSkill(attacker, state.enemies, true);
      } else {
        let dmg = attacker.atk;
        let critChance = 0.1;
        if (attacker.role === 'Archer') critChance = syn.Archer >= 4 ? 0.65 : syn.Archer >= 2 ? 0.35 : 0.1;
        if (attacker.role === 'Assassin') critChance = syn.Assassin >= 4 ? 0.55 : syn.Assassin >= 2 ? 0.30 : 0.15;

        const isCrit = Math.random() < critChance;
        if (isCrit) dmg = Math.round(dmg * 1.55);

        spawnAttackFx(attacker, target, true, false, isCrit);
        applyDamageWithImmortality(target, dmg);
        attacker.mana = Math.min(attacker.maxMana, attacker.mana + 35);
        target.mana = Math.min(target.maxMana, target.mana + 15);

        const hasItemVamp = (attacker.items || []).some(it => it.vamp);
        if (state.hasLifesteal || hasItemVamp) {
          const heal = (state.hasLifesteal ? 30 : 0) + (hasItemVamp ? 40 : 0);
          attacker.currentHp = Math.min(attacker.maxHp, attacker.currentHp + heal);
        }
        flashAnim(target.uid, 'hit');
        showFloatingText(target.uid, isCrit ? `💥-${dmg}` : `-${dmg}`, isCrit ? '#fbbf24' : '#f87171');
      }
      await new Promise(r => setTimeout(r, 220));
      renderBoards();
    }

    await new Promise(r => setTimeout(r, 180));

    const aliveE2 = state.enemies.filter(u => u && u.currentHp > 0);
    for (const attacker of aliveE2) {
      if (attacker.currentHp <= 0) continue;
      const target = selectTargetForAttacker(attacker, state.board, false);
      if (!target) break;

      if (attacker.mana >= attacker.maxMana) {
        executeSkill(attacker, state.board, false);
      } else {
        spawnAttackFx(attacker, target, false, false, false);
        applyDamageWithImmortality(target, attacker.atk);
        attacker.mana = Math.min(attacker.maxMana, attacker.mana + 35);
        target.mana = Math.min(target.maxMana, target.mana + 15);
        flashAnim(target.uid, 'hit');
        showFloatingText(target.uid, `-${attacker.atk}`, '#ef4444');
      }
      await new Promise(r => setTimeout(r, 220));
      renderBoards();
    }

    await new Promise(r => setTimeout(r, 180));
  }

  const remainingEnemies = state.enemies.filter(u => u && u.currentHp > 0);
  const interest = getInterestGold();
  const wonCreep = state.isCreepRound && remainingEnemies.length === 0;

  if (remainingEnemies.length === 0) {
    state.winStreak++;
    state.lossStreak = 0;
    state.totalWins++;
    const streakGold = getStreakBonus();
    const reward = 5 + interest + streakGold + state.bonusWinGold;
    state.gold += reward;
    logMessage(`🏆 Menang Ronde ${state.round}! (+${reward} Gold)`, 'win');
  } else {
    state.lossStreak++;
    state.winStreak = 0;
    const streakGold = getStreakBonus();
    const dmgTaken = state.isCreepRound ? 4 : remainingEnemies.length * 5 + state.round * 2;
    state.hp = Math.max(0, state.hp - dmgTaken);
    const reward = 4 + interest + streakGold;
    state.gold += reward;
    logMessage(`💀 Kalah Ronde ${state.round}! HP -${dmgTaken} (+${reward} Gold)`, 'lose');
  }

  if (state.cmdCooldown > 0) state.cmdCooldown--;

  // Reset status unit pemain
  state.board.forEach(u => {
    if (u) {
      u.currentHp = u.maxHp;
      u.mana = state.startMana;
    }
  });

  state.inBattle = false;
  document.getElementById('start-battle-btn').disabled = false;

  if (state.hp <= 0) {
    saveMatchHistory(false);
    showGameOver(false);
    return;
  }

  if (state.mode !== 'endless' && state.round >= state.maxRounds) {
    saveMatchHistory(true);
    showGameOver(true);
    return;
  }

  state.round++;
  generateEnemies();

  if (!state.shopLocked) {
    rollShop(true);
  } else {
    logMessage('🔒 Toko terkunci, pilihan hero dipertahankan.');
  }

  if (wonCreep) {
    openLootModal();
  } else if (state.round % 2 === 0 && state.activeCards.length < 3) {
    openGoGoCardModal();
  }

  renderAll();
}

// =========================================
// 10. GO GO CARDS & GAME OVER
// =========================================
function openGoGoCardModal() {
  const modal = document.getElementById('gogo-modal');
  const container = document.getElementById('gogo-choices');
  container.innerHTML = '';

  const available = GOGO_CARDS.filter(c => !state.activeCards.some(ac => ac.id === c.id));
  const choices = available.sort(() => Math.random() - 0.5).slice(0, 3);

  choices.forEach(card => {
    const div = document.createElement('div');
    div.className = 'gogo-card-option';
    div.innerHTML = `<h4>${card.name}</h4><p>${card.desc}</p>`;
    div.onclick = () => {
      applyGoGoCard(card);
      modal.classList.add('hidden');
      renderAll();
    };
    container.appendChild(div);
  });

  modal.classList.remove('hidden');
}

function applyGoGoCard(card) {
  state.activeCards.push(card);
  logMessage(`🃏 Memilih Go Go Card: ${card.name}`, 'skill');
  if (card.id === 'rich') { state.gold += 10; state.bonusWinGold += 2; }
  else if (card.id === 'titan') { state.bonusHp += 130; }
  else if (card.id === 'fury') { state.bonusAtk += 24; }
  else if (card.id === 'commander') { state.bonusCap += 1; }
  else if (card.id === 'vamp') { state.hasLifesteal = true; }
  else if (card.id === 'mana_surge') { state.startMana = 50; }
}

function showGameOver(win) {
  const modal = document.getElementById('gameover-modal');
  document.getElementById('gameover-title').textContent = win ? '🎉 Selamat! Kamu Juara Arena!' : '💀 Eliminasi!';
  document.getElementById('gameover-desc').textContent = win
    ? `Kamu menaklukkan mode ${state.mode.toUpperCase()} dengan sisa ${state.hp} HP!`
    : `Perjalananmu terhenti di Ronde ${state.round}.`;
  document.getElementById('gameover-stats').innerHTML = `
    <strong>Statistik Akhir:</strong><br>
    Commander: ${state.commander.name} • Kemenangan: ${state.totalWins} Ronde • Level: ${state.level} • Sisa Gold: ${state.gold} 🪙
  `;
  modal.classList.remove('hidden');
}

// =========================================
// 11. TOUCH DRAG & LONG-PRESS HANDLERS
// =========================================
function cleanupTouchDrag() {
  if (touchDragState.longPressTimer) {
    clearTimeout(touchDragState.longPressTimer);
    touchDragState.longPressTimer = null;
  }
  if (touchDragState.ghostEl) {
    touchDragState.ghostEl.remove();
    touchDragState.ghostEl = null;
  }
  if (touchDragState.sourceEl) {
    touchDragState.sourceEl.classList.remove('dragging-touch');
    touchDragState.sourceEl = null;
  }
  if (touchDragState.hoveredSlot) {
    touchDragState.hoveredSlot.classList.remove('drag-over');
    touchDragState.hoveredSlot = null;
  }
  touchDragState.active = false;
  touchDragState.isDragging = false;
}

function attachTouchDragHandlers(div, unit, isEnemy, loc, idx) {
  div.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return;
    const touch = e.touches[0];
    touchDragState = {
      active: true,
      isDragging: false,
      loc,
      idx,
      startX: touch.clientX,
      startY: touch.clientY,
      ghostEl: null,
      sourceEl: div,
      hoveredSlot: null,
      longPressed: false,
      longPressTimer: setTimeout(() => {
        touchDragState.longPressed = true;
        openHeroDetailModal(unit);
      }, 450)
    };
  }, { passive: true });

  div.addEventListener('touchmove', (e) => {
    if (!touchDragState.active) return;
    const touch = e.touches[0];
    const dx = touch.clientX - touchDragState.startX;
    const dy = touch.clientY - touchDragState.startY;

    if (Math.hypot(dx, dy) > 8) {
      if (touchDragState.longPressTimer) {
        clearTimeout(touchDragState.longPressTimer);
        touchDragState.longPressTimer = null;
      }
      if (!isEnemy && !state.inBattle && !touchDragState.isDragging) {
        touchDragState.isDragging = true;
        div.classList.add('dragging-touch');

        const rect = div.getBoundingClientRect();
        const ghost = div.cloneNode(true);
        ghost.classList.remove('dragging-touch');
        ghost.classList.add('touch-drag-ghost');
        ghost.style.width = `${rect.width}px`;
        ghost.style.height = `${rect.height}px`;
        document.body.appendChild(ghost);
        touchDragState.ghostEl = ghost;
      }
    }

    if (touchDragState.isDragging) {
      if (e.cancelable) e.preventDefault();
      if (touchDragState.ghostEl) {
        touchDragState.ghostEl.style.left = `${touch.clientX}px`;
        touchDragState.ghostEl.style.top = `${touch.clientY}px`;
      }

      const targetEl = document.elementFromPoint(touch.clientX, touch.clientY);
      const slot = targetEl ? targetEl.closest('[data-drop-loc]') : null;

      if (touchDragState.hoveredSlot !== slot) {
        if (touchDragState.hoveredSlot) touchDragState.hoveredSlot.classList.remove('drag-over');
        touchDragState.hoveredSlot = slot;
        if (slot) slot.classList.add('drag-over');
      }
    }
  }, { passive: false });

  div.addEventListener('touchend', (e) => {
    if (!touchDragState.active) return;
    const wasDragging = touchDragState.isDragging;
    const wasLongPressed = touchDragState.longPressed;
    const targetSlot = touchDragState.hoveredSlot;
    const fromLoc = touchDragState.loc;
    const fromIdx = touchDragState.idx;

    cleanupTouchDrag();

    if (wasLongPressed) {
      if (e.cancelable) e.preventDefault();
      return;
    }

    if (wasDragging) {
      if (e.cancelable) e.preventDefault();
      if (targetSlot) {
        const toLoc = targetSlot.dataset.dropLoc;
        const toIdx = parseInt(targetSlot.dataset.dropIdx, 10);
        moveOrSwapUnit(fromLoc, fromIdx, toLoc, toIdx);
      }
    } else {
      if (e.cancelable) e.preventDefault();
      if (isEnemy) openHeroDetailModal(unit);
      else handleUnitClick(fromLoc, fromIdx);
    }
  });

  div.addEventListener('touchcancel', cleanupTouchDrag);
}

// =========================================
// 12. RENDERING UI
// =========================================
function createUnitElement(unit, isEnemy = false, loc = null, idx = null) {
  const div = document.createElement('div');
  const equipHighlight = (!isEnemy && state.selectedEquipIdx !== null && (unit.items || []).length < 2) ? 'equip-target' : '';
  const specialEnemyClass = unit.isCreep ? 'creep-unit' : unit.isBoss ? 'boss-unit' : '';
  div.className = `unit star-${unit.star} ${isEnemy ? 'enemy ' + specialEnemyClass : equipHighlight}`;
  div.dataset.uid = unit.uid;

  const stars = '⭐'.repeat(unit.star);
  const itemsIcons = (unit.items || []).map(it => it.icon).join('');
  const hpPct = Math.max(0, Math.round((unit.currentHp / unit.maxHp) * 100));
  const manaPct = Math.min(100, Math.round((unit.mana / unit.maxMana) * 100));

  div.innerHTML = `
    <div class="unit-top-row">
      <span class="unit-stars">${stars}</span>
      <span class="unit-items-icons">${itemsIcons}</span>
    </div>
    <img src="${unit.avatar}" alt="${unit.name}" class="unit-avatar" draggable="false">
    <div class="unit-name">${unit.name}</div>
    <div class="bars-wrap">
      <div class="hp-bar-bg"><div class="hp-bar-fill" style="width:${hpPct}%"></div></div>
      <div class="mana-bar-bg"><div class="mana-bar-fill" style="width:${manaPct}%"></div></div>
    </div>
  `;

  // Klik kanan di Desktop untuk buka Detail Hero
  div.oncontextmenu = (e) => {
    e.preventDefault();
    openHeroDetailModal(unit);
  };

  if (!isEnemy && loc !== null) {
    div.draggable = !state.inBattle;
    div.ondragstart = () => { dragSource = { loc, idx }; };
    div.onclick = () => handleUnitClick(loc, idx);
  } else if (isEnemy) {
    div.onclick = () => openHeroDetailModal(unit);
  }

  attachTouchDragHandlers(div, unit, isEnemy, loc, idx);
  return div;
}

function attachDropHandlers(slotEl, targetLoc, targetIdx) {
  slotEl.dataset.dropLoc = targetLoc;
  slotEl.dataset.dropIdx = targetIdx;

  slotEl.ondragover = e => { e.preventDefault(); slotEl.classList.add('drag-over'); };
  slotEl.ondragleave = () => { slotEl.classList.remove('drag-over'); };
  slotEl.ondrop = e => {
    e.preventDefault();
    slotEl.classList.remove('drag-over');
    if (dragSource) {
      moveOrSwapUnit(dragSource.loc, dragSource.idx, targetLoc, targetIdx);
      dragSource = null;
    }
  };
}

function renderBoards() {
  const enemyBoard = document.getElementById('enemy-board');
  const playerBoard = document.getElementById('player-board');
  enemyBoard.innerHTML = '';
  playerBoard.innerHTML = '';

  state.enemies.forEach(unit => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    if (unit && unit.currentHp > 0) {
      cell.appendChild(createUnitElement(unit, true));
    }
    enemyBoard.appendChild(cell);
  });

  state.board.forEach((unit, idx) => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    attachDropHandlers(cell, 'board', idx);
    if (unit && (!state.inBattle || unit.currentHp > 0)) {
      cell.appendChild(createUnitElement(unit, false, 'board', idx));
    }
    playerBoard.appendChild(cell);
  });
}

function renderAll() {
  document.getElementById('player-hp').textContent = state.hp;
  document.getElementById('player-gold').textContent = state.gold;
  document.getElementById('interest-preview').textContent = `+${getInterestGold()}`;
  document.getElementById('player-level').textContent = state.level;
  document.getElementById('board-count').textContent = state.board.filter(Boolean).length;
  document.getElementById('board-cap').textContent = getBoardCap();
  document.getElementById('round-display').textContent = state.mode === 'endless' ? `${state.round}/∞` : `${state.round}/${state.maxRounds}`;
  document.getElementById('levelup-cost').textContent = getLevelUpCost();
  document.getElementById('reroll-cost').textContent = getRerollCost();

  // Enemy Header Label
  const enemyHeader = document.getElementById('enemy-header-label');
  enemyHeader.className = 'board-label enemy-label';
  if (state.isCreepRound) {
    enemyHeader.textContent = `🌲 Ronde Creep (Ronde ${state.round}) — Berhadiah Equipment!`;
    enemyHeader.classList.add('creep');
  } else if (state.isBossRound) {
    enemyHeader.textContent = `🔥 BOSS ROUND (Ronde ${state.round}) — Lord Abyss!`;
    enemyHeader.classList.add('boss');
  } else {
    enemyHeader.textContent = `💀 Musuh (Ronde ${state.round})`;
  }

  // Commander Panel
  document.getElementById('cmd-icon').textContent = state.commander.icon;
  document.getElementById('cmd-name').textContent = state.commander.name;
  document.getElementById('cmd-skill-name').textContent = state.commander.skillName;
  document.getElementById('cmd-skill-desc').textContent = state.commander.desc;
  const cmdBtn = document.getElementById('cmd-skill-btn');
  if (state.commander.type === 'passive') {
    cmdBtn.textContent = 'Pasif Aktif';
    cmdBtn.disabled = true;
  } else if (state.cmdCooldown > 0) {
    cmdBtn.textContent = `CD: ${state.cmdCooldown} Rd`;
    cmdBtn.disabled = true;
  } else {
    cmdBtn.textContent = 'Aktifkan';
    cmdBtn.disabled = state.inBattle;
  }

  // Shop Odds Display
  const odds = SHOP_ODDS_BY_LEVEL[state.level] || [10, 25, 35, 30];
  document.getElementById('shop-odds-display').innerHTML = `
    Peluang Lv.${state.level}: <span class="odd-t1">1🪙:${odds[0]}%</span> • <span class="odd-t2">2🪙:${odds[1]}%</span> • <span class="odd-t3">3🪙:${odds[2]}%</span> • <span class="odd-t4">4🪙:${odds[3]}%</span>
  `;

  // Shop Lock Button
  const lockBtn = document.getElementById('lock-shop-btn');
  lockBtn.textContent = state.shopLocked ? '🔒 Toko Terkunci: ON' : '🔓 Kunci Toko: OFF';
  lockBtn.classList.toggle('locked', state.shopLocked);

  // Streak & Status
  const streakEl = document.getElementById('streak-badge');
  if (state.winStreak >= 2) streakEl.textContent = `🔥 ${state.winStreak} Win`;
  else if (state.lossStreak >= 2) streakEl.textContent = `❄️ ${state.lossStreak} Loss`;
  else streakEl.textContent = 'Netral';

  const statusBadge = document.getElementById('battle-status');
  statusBadge.textContent = state.inBattle ? 'BERTARUNG' : 'PERSIAPAN';
  statusBadge.className = `phase-badge ${state.inBattle ? 'battle' : 'prep'}`;

  const sellBtn = document.getElementById('sell-mode-btn');
  sellBtn.textContent = `💰 Mode Jual: ${state.sellMode ? 'ON' : 'OFF'}`;
  sellBtn.classList.toggle('active', state.sellMode);

  // Synergies
  const synCounts = getActiveSynergies();
  const synList = document.getElementById('synergy-list');
  synList.innerHTML = '';
  Object.keys(SYNERGY_INFO).forEach(role => {
    const info = SYNERGY_INFO[role];
    const count = synCounts[role];
    const active = count >= info.tiers[0];
    const maxTier = count >= info.tiers[1];
    const item = document.createElement('div');
    item.className = `synergy-item ${active ? 'active' : ''} ${maxTier ? 'tier-max' : ''}`;
    item.innerHTML = `
      <div class="synergy-title">
        <span>${info.icon} ${role}</span>
        <span>${count} / ${maxTier ? '4 (MAX)' : active ? '4' : '2'}</span>
      </div>
      <div class="synergy-desc">${info.desc}</div>
    `;
    synList.appendChild(item);
  });

  // Equipment Bag
  const bagEl = document.getElementById('equipment-bag');
  const equipHint = document.getElementById('equip-hint');
  if (state.itemsBag.length === 0) {
    bagEl.innerHTML = '<p class="empty-text">Menang ronde Creep (Ronde 3, 6, 9) untuk item!</p>';
    equipHint.textContent = 'Kosong';
  } else {
    equipHint.textContent = state.selectedEquipIdx !== null ? 'Klik Hero!' : `${state.itemsBag.length} Item`;
    bagEl.innerHTML = '';
    state.itemsBag.forEach((it, i) => {
      const chip = document.createElement('div');
      chip.className = `equip-chip ${state.selectedEquipIdx === i ? 'selected' : ''}`;
      chip.innerHTML = `${it.icon} <strong>${it.name}</strong>`;
      chip.title = it.desc;
      chip.onclick = () => {
        if (state.inBattle) return;
        state.selectedEquipIdx = (state.selectedEquipIdx === i) ? null : i;
        renderAll();
      };
      bagEl.appendChild(chip);
    });
  }

  // Active Go Go Cards
  document.getElementById('card-count-tag').textContent = `${state.activeCards.length}/3`;
  const cardsList = document.getElementById('active-cards-list');
  if (state.activeCards.length === 0) {
    cardsList.innerHTML = '<p class="empty-text">Muncul setiap ronde genap</p>';
  } else {
    cardsList.innerHTML = state.activeCards
      .map(c => `<div class="mini-card"><strong>${c.name}</strong><br>${c.desc}</div>`)
      .join('');
  }

  renderBoards();

  // Bench
  const benchEl = document.getElementById('bench');
  benchEl.innerHTML = '';
  state.bench.forEach((unit, idx) => {
    const slot = document.createElement('div');
    slot.className = 'bench-slot';
    attachDropHandlers(slot, 'bench', idx);
    if (unit) {
      slot.appendChild(createUnitElement(unit, false, 'bench', idx));
    }
    benchEl.appendChild(slot);
  });

  // Shop
  const shopEl = document.getElementById('shop-slots');
  shopEl.innerHTML = '';
  state.shop.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = `shop-card ${item.sold ? 'sold' : ''}`;
    card.dataset.cost = item.cost;
    card.innerHTML = `
      <button class="shop-info-btn" type="button" title="Detail Hero">i</button>
      <img src="${item.avatar}" alt="${item.name}" class="shop-card-avatar" draggable="false">
      <div class="shop-card-name">${item.name}</div>
      <div class="shop-card-role">${SYNERGY_INFO[item.role].icon} ${item.role}</div>
      <div class="shop-card-skill">⚡ ${item.skillName}</div>
      <div class="shop-card-cost">🪙 ${item.cost}</div>
    `;
    const infoBtn = card.querySelector('.shop-info-btn');
    infoBtn.onclick = (e) => {
      e.stopPropagation();
      openHeroDetailModal(createUnitInstance(item.id, 1));
    };
    card.onclick = () => buyHero(idx);
    shopEl.appendChild(card);
  });
}

// =========================================
// 13. BUTTON EVENT LISTENERS
// =========================================
document.getElementById('cmd-skill-btn').onclick = () => {
  if (state.inBattle || state.cmdCooldown > 0) return;
  if (state.commander.id === 'harper') {
    state.hp = Math.min(100, state.hp + 15);
    state.cmdCooldown = state.commander.cooldownMax;
    playSound('merge');
    logMessage('👑 Harper menggunakan Shield of Dawn: +15 HP Commander!', 'skill');
    renderAll();
  } else if (state.commander.id === 'benny') {
    const emptyBench = state.bench.findIndex(s => s === null);
    if (emptyBench === -1) return logMessage('Bangku cadangan penuh untuk memanggil hero!');
    const pick = HERO_POOL[Math.floor(Math.random() * HERO_POOL.length)];
    state.bench[emptyBench] = createUnitInstance(pick.id, 1);
    state.cmdCooldown = state.commander.cooldownMax;
    playSound('merge');
    logMessage(`🐺 Benny memanggil ${pick.name} gratis ke bangku cadangan!`, 'skill');
    checkMerge(pick.id);
    renderAll();
  }
};

document.getElementById('reroll-btn').onclick = () => { if (!state.inBattle) rollShop(false); };

document.getElementById('levelup-btn').onclick = () => {
  if (state.inBattle) return;
  const cost = getLevelUpCost();
  if (state.gold < cost) return logMessage('Gold tidak cukup untuk naik level!');
  if (state.level >= 7) return logMessage('Level sudah maksimal!');
  state.gold -= cost;
  state.level++;
  logMessage(`⬆️ Naik ke Level ${state.level}! Kapasitas papan sekarang ${getBoardCap()}.`, 'win');
  renderAll();
};

document.getElementById('lock-shop-btn').onclick = () => {
  state.shopLocked = !state.shopLocked;
  renderAll();
};

document.getElementById('sell-mode-btn').onclick = () => {
  if (state.inBattle) return;
  state.sellMode = !state.sellMode;
  state.selectedEquipIdx = null;
  renderAll();
};

document.getElementById('bgm-btn').onclick = () => {
  initAudio();
  bgmMuted = !bgmMuted;
  document.getElementById('bgm-btn').textContent = bgmMuted ? '🔇' : '🔊';
};

document.getElementById('history-btn').onclick = openHistoryModal;
document.getElementById('close-history-btn').onclick = () => document.getElementById('history-modal').classList.add('hidden');
document.getElementById('close-hero-detail').onclick = () => document.getElementById('hero-detail-modal').classList.add('hidden');
document.getElementById('clear-log-btn').onclick = () => { document.getElementById('battle-log').innerHTML = ''; };
document.getElementById('start-battle-btn').onclick = startBattle;

// Initialize Setup Modal on Load
initSetupModal();
