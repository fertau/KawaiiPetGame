class KawaiiPetGame {
    constructor() {
        this.stats = {
            hunger: 80, happiness: 80, energy: 80, xp: 0, level: 1,
            stars: 50, unlockedStickers: [0], currentPetId: 0, currentBgId: 'living'
        };

        this.pets = [
            {
                id: 0, name: 'Conejito', img: 'assets/pet_idle.png', description: 'Un conejito rosado muy tierno.',
                actions: { eating: 'assets/pet_eating.png', playing: 'assets/pet_playing.png', sleeping: 'assets/pet_sleeping.png', cleaning: 'assets/pet_bathing.png' }
            },
            {
                id: 1, name: 'Gatito', img: 'assets/kitty_idle.png', description: 'Un gatito curioso.',
                actions: { eating: 'assets/kitty_eating.png', playing: 'assets/kitty_playing.png', sleeping: 'assets/kitty_sleeping.png', cleaning: 'assets/kitty_bathing.png' }
            },
            {
                id: 2, name: 'Perrito', img: 'assets/doggy_idle.png', description: 'Un perrito fiel.',
                actions: { eating: 'assets/doggy_eating.png', playing: 'assets/doggy_playing.png', sleeping: 'assets/doggy_sleeping.png', cleaning: 'assets/doggy_bathing.png' }
            },
            {
                id: 3, name: 'Zorrito', img: 'assets/fox_idle.png', description: 'Un zorrito astuto.',
                actions: { eating: 'assets/fox_eating.png', playing: 'assets/fox_playing.png', sleeping: 'assets/fox_sleeping.png', cleaning: 'assets/fox_bathing.png' }
            },
            {
                id: 4, name: 'Panda', img: 'assets/panda_idle.png', description: 'Un panda relajado.',
                actions: { eating: 'assets/panda_eating.png', playing: 'assets/panda_playing.png', sleeping: 'assets/panda_sleeping.png', cleaning: 'assets/panda_bathing.png' }
            }
        ];

        this.backgrounds = [
            { id: 'living', name: 'Sala', img: 'assets/living_background.png' },
            { id: 'bedroom', name: 'Cuarto', img: 'assets/bedroom_background.png' },
            { id: 'kitchen', name: 'Cocina', img: 'assets/kitchen_background.png' },
            { id: 'bathroom', name: 'Baño', img: 'assets/bathroom_background.png' },
            { id: 'start', name: 'Parque', img: 'assets/playground_background.png' },
            { id: 'beach', name: 'Playa', img: 'assets/beach_background.png' }
        ];

        this.stickers = [
            // Common (60%)
            { id: 1, name: 'Manzana Feliz', icon: '🍎', rarity: 'common', desc: 'Una manzana muy saludable.' },
            { id: 2, name: 'Pelota Vieja', icon: '🎾', rarity: 'common', desc: 'Ideal para jugar a traer.' },
            { id: 3, name: 'Calcetín', icon: '🧦', rarity: 'common', desc: '¿Quién perdió esto?' },
            { id: 4, name: 'Galleta', icon: '🍪', rarity: 'common', desc: '¡Qué rica merienda!' },
            { id: 5, name: 'Lápiz', icon: '✏️', rarity: 'common', desc: 'Para escribir cartas.' },
            { id: 6, name: 'Flor Amarilla', icon: '🌼', rarity: 'common', desc: 'Huele a primavera.' },
            { id: 7, name: 'Hueso', icon: '🦴', rarity: 'common', desc: 'El favorito de Doggy.' },
            { id: 8, name: 'Pez', icon: '🐟', rarity: 'common', desc: 'El favorito de Kitty.' },
            { id: 9, name: 'Zanahoria', icon: '🥕', rarity: 'common', desc: 'Ñam ñam, crujiente.' },
            { id: 10, name: 'Helado', icon: '🍦', rarity: 'common', desc: '¡Cuidado que se derrite!' },
            { id: 11, name: 'Sol', icon: '☀️', rarity: 'common', desc: 'Un día radiante.' },
            { id: 12, name: 'Nube', icon: '☁️', rarity: 'common', desc: 'Esponjosa como algodón.' },
            { id: 13, name: 'Gota', icon: '💧', rarity: 'common', desc: 'Mantente hidratado.' },
            { id: 14, name: 'Hoja', icon: '🍃', rarity: 'common', desc: 'La trajo el viento.' },
            { id: 15, name: 'Seta', icon: '🍄', rarity: 'common', desc: 'Parece una casita.' },
            { id: 16, name: 'Pan', icon: '🍞', rarity: 'common', desc: 'Recién horneado.' },
            { id: 17, name: 'Queso', icon: '🧀', rarity: 'common', desc: '¡Cuidado con los ratones!' },
            { id: 18, name: 'Huevo', icon: '🥚', rarity: 'common', desc: '¿Qué saldrá de aquí?' },
            { id: 19, name: 'Tocino', icon: '🥓', rarity: 'common', desc: 'Sssss... que rico huele.' },
            { id: 20, name: 'Cereza', icon: '🍒', rarity: 'common', desc: 'Siempre vienen en pares.' },
            { id: 21, name: 'Fresa', icon: '🍓', rarity: 'common', desc: 'Dulce y roja.' },
            { id: 22, name: 'Uva', icon: '🍇', rarity: 'common', desc: 'Un racimo de sabor.' },
            { id: 23, name: 'Sandía', icon: '🍉', rarity: 'common', desc: '¡A comer!' },
            { id: 24, name: 'Limón', icon: '🍋', rarity: 'common', desc: '¡Qué ácido!' },
            { id: 25, name: 'Pera', icon: '🍐', rarity: 'common', desc: 'Jugosa y verde.' },
            { id: 26, name: 'Melocotón', icon: '🍑', rarity: 'common', desc: 'Suave como la piel.' },
            { id: 27, name: 'Coco', icon: '🥥', rarity: 'common', desc: 'Duro por fuera.' },
            { id: 28, name: 'Kiwi', icon: '🥝', rarity: 'common', desc: 'Peludo y verde.' },
            { id: 29, name: 'Piña', icon: '🍍', rarity: 'common', desc: 'La reina de las frutas.' },
            { id: 30, name: 'Banana', icon: '🍌', rarity: 'common', desc: '¡Energía pura!' },

            // Rare (35%)
            { id: 31, name: 'Gafas Retro', icon: '🕶️', rarity: 'rare', desc: '¡Mucho estilo!' },
            { id: 32, name: 'Pato de Hule', icon: '🐤', rarity: 'rare', desc: 'Cua cua en el baño.' },
            { id: 33, name: 'Mochila', icon: '🎒', rarity: 'rare', desc: 'Lista para la aventura.' },
            { id: 34, name: 'Cámara', icon: '📷', rarity: 'rare', desc: '¡Sonríe!' },
            { id: 35, name: 'Auriculares', icon: '🎧', rarity: 'rare', desc: 'Música para tus oídos.' },
            { id: 36, name: 'Joystick', icon: '🎮', rarity: 'rare', desc: 'Gamer profesional.' },
            { id: 37, name: 'Guitarra', icon: '🎸', rarity: 'rare', desc: 'Rock and Roll.' },
            { id: 38, name: 'Pintura', icon: '🎨', rarity: 'rare', desc: 'Obra maestra.' },
            { id: 39, name: 'Telescopio', icon: '🔭', rarity: 'rare', desc: 'Mirando las estrellas.' },
            { id: 40, name: 'Microscopio', icon: '🔬', rarity: 'rare', desc: 'Ciencia divertida.' },
            { id: 41, name: 'Globo', icon: '🎈', rarity: 'rare', desc: '¡Feliz cumpleaños!' },
            { id: 42, name: 'Regalo', icon: '🎁', rarity: 'rare', desc: '¿Qué será?' },
            { id: 43, name: 'Carta de Amor', icon: '💌', rarity: 'rare', desc: 'Para alguien especial.' },
            { id: 44, name: 'Anillo', icon: '💍', rarity: 'rare', desc: 'Brilla mucho.' },
            { id: 45, name: 'Diamante', icon: '💎', rarity: 'rare', desc: 'Invaluable.' },

            // Legendary (5%)
            { id: 46, name: 'Corona Real', icon: '👑', rarity: 'legendary', desc: 'Para el rey de la casa.' },
            { id: 47, name: 'Trofeo', icon: '🏆', rarity: 'legendary', desc: '¡Eres el número 1!' },
            { id: 48, name: 'Cohete', icon: '🚀', rarity: 'legendary', desc: '¡A la luna!' },
            { id: 49, name: 'Unicornio', icon: '🦄', rarity: 'legendary', desc: '¡Es mágico y real!' },
            { id: 50, name: 'Dragón', icon: '🐉', rarity: 'legendary', desc: 'Poder ancestral.' }
        ];

        this.costs = { feed: 10, clean: 5, play: -15, sleep: 0 };
        this.config = { decayRate: 2000, maxStats: 100, xpToLevelUp: 100 };

        this.ui = {
            hungerBar: document.getElementById('hunger-bar'),
            happinessBar: document.getElementById('happiness-bar'),
            energyBar: document.getElementById('energy-bar'),
            xpBar: document.getElementById('xp-bar'),
            levelText: document.getElementById('level'),
            starText: document.getElementById('star-count'),
            petImg: document.getElementById('pet-img'),
            petContainer: document.getElementById('pet-character'),
            statusEffects: document.getElementById('status-effects'),
            btnFeed: document.getElementById('btn-feed'),
            btnPlay: document.getElementById('btn-play'),
            btnSleep: document.getElementById('btn-sleep'),
            btnClean: document.getElementById('btn-clean'),
            modal: document.getElementById('message-modal'),
            modalTitle: document.getElementById('modal-title'),
            modalMsg: document.getElementById('modal-msg'),
            modalClose: document.getElementById('modal-close'),
            stickerBtn: document.getElementById('btn-stickers'),
            stickerModal: document.getElementById('sticker-modal'),
            stickerGrid: document.getElementById('sticker-grid'),
            stickerClose: document.getElementById('sticker-close'),
            // Pet Picker Modal
            petBtn: document.getElementById('btn-pet-picker'),
            petPickerModal: document.getElementById('pet-picker-modal'),
            petGrid: document.getElementById('pet-grid'),
            bgGrid: document.getElementById('bg-grid'),
            bgLayer: document.getElementById('bg-layer'),
            tabs: document.querySelectorAll('.tab-btn'),
            tabContents: document.querySelectorAll('.tab-content'),
            // Splash Screen
            splashScreen: document.getElementById('splash-screen'),
            startBtn: document.getElementById('btn-start'),
            userNameInput: document.getElementById('user-name'),
            userPasskeyInput: document.getElementById('user-passkey')
        };

        // JSONBin Config (Key is public for this tutorial/demo)
        // In a real app, this would be on a backend.
        this.cloudProvider = {
            url: 'https://api.jsonbin.io/v3/b',
            apiKey: '$2a$10$7XyH6q6Yly0d0K.V8C1E0O7vjD9G.p8v6S.l5Y0e5U5V5V5V5V5V', // Placeholder
            masterBin: '659a8c1f05ad6e77030e4ed5' // This acts as our "User Index"
        };
        this.currentUser = null;

        this.init();
    }

    init() {
        this.loadState();
        this.updateButtonsPriceTags();
        this.updateUI();
        this.startLoop();
        this.bindEvents();

        // Start Idle Animation
        this.ui.petContainer.classList.add('idle-breathe');
    }

    bindEvents() {
        this.ui.btnFeed.addEventListener('click', () => this.action('feed'));
        // this.ui.btnPlay.addEventListener('click', () => this.action('play')); // Old simple play
        this.ui.btnPlay.addEventListener('click', () => this.minigameSystem.openMenu()); // New Minigames Entry
        this.ui.btnSleep.addEventListener('click', () => this.action('sleep'));
        this.ui.btnClean.addEventListener('click', () => this.action('clean'));

        this.ui.modalClose.addEventListener('click', () => this.closeModal(this.ui.modal));

        this.ui.stickerBtn.addEventListener('click', () => this.openStickerAlbum());
        this.ui.stickerClose.addEventListener('click', () => this.closeModal(this.ui.stickerModal));

        // Pet Picker (Customization Modal)
        this.ui.petBtn.addEventListener('click', () => this.openCustomizationModal());
        // Close modal when clicking outside
        this.ui.petPickerModal.addEventListener('click', (e) => {
            if (e.target === this.ui.petPickerModal) this.closeModal(this.ui.petPickerModal);
        });

        // Tab Switching Logic
        this.ui.tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                this.ui.tabs.forEach(t => t.classList.remove('active'));
                this.ui.tabContents.forEach(c => c.classList.remove('active'));
                tab.classList.add('active');
                const target = tab.getAttribute('data-tab');
                document.getElementById(target).classList.add('active');
            });
        });

        // Splash Button
        this.ui.startBtn.addEventListener('click', () => {
            const name = this.ui.userNameInput.value.trim();
            const pass = this.ui.userPasskeyInput.value.trim();
            if (name && pass) {
                this.currentUser = { name, pass };
                this.tryCloudSync();
            }
            this.ui.splashScreen.classList.add('hidden');
        });

        // Minigames
        this.minigameSystem = new MinigameSystem(this);
        // Joystick button removed, used btnPlay instead
        // document.getElementById('btn-games').addEventListener('click', () => {
        //     this.minigameSystem.openMenu();
        // });
    }

    startLoop() {
        setInterval(() => this.tick(), this.config.decayRate);
    }

    tick() {
        this.stats.hunger = Math.max(0, this.stats.hunger - 1);
        this.stats.happiness = Math.max(0, this.stats.happiness - 1);

        if (this.isSleeping) {
            this.stats.energy = Math.min(this.config.maxStats, this.stats.energy + 5);
            if (Math.random() > 0.7) this.spawnParticle('💤');
            if (this.stats.energy >= 100) this.wakeUp();
        } else {
            this.stats.energy = Math.max(0, this.stats.energy - 0.5);
        }
        this.saveState();
        this.updateUI();
    }

    action(type) {
        if (this.isSleeping && type !== 'sleep') {
            this.showModal('¡Shh!', 'Tu mascota está durmiendo.');
            return;
        }

        const cost = this.costs[type];
        if (cost > 0 && this.stats.stars < cost) {
            this.showModal('¡Oh no!', '¡Necesitas más estrellitas! Juega para ganar más. ✨');
            this.animatePet('wobble');
            return;
        }

        if (type === 'play') { /* Earning logic */ }
        else { this.stats.stars -= cost; }

        const animationMap = { 'feed': 'chew', 'play': 'spin', 'sleep': 'breathe', 'clean': 'wobble' };
        const actionImgMap = { 'feed': 'eating', 'play': 'playing', 'sleep': 'sleeping', 'clean': 'cleaning' };

        this.animatePet(animationMap[type] || 'bounce');
        this.swapPetImageForAction(actionImgMap[type]);

        switch (type) {
            case 'feed':
                this.stats.hunger = Math.min(this.config.maxStats, this.stats.hunger + 15);
                this.gainXP(15);
                this.spawnParticles('🍎', 3);
                break;
            case 'play':
                if (this.stats.energy < 10) {
                    this.showModal('Cansado', 'Demasiado cansado para jugar.');
                    return;
                }
                this.stats.happiness = Math.min(this.config.maxStats, this.stats.happiness + 15);
                this.stats.energy = Math.max(0, this.stats.energy - 10);
                this.stats.stars += 15;
                this.gainXP(20);
                this.spawnParticles('✨', 5);
                this.spawnParticles('⭐', 3);
                break;
            case 'sleep':
                this.isSleeping = true;
                this.ui.petContainer.style.opacity = '0.8';
                this.animatePet('breathe');
                break;
            case 'clean':
                this.stats.happiness = Math.min(this.config.maxStats, this.stats.happiness + 5);
                this.spawnParticles('🫧', 6);
                break;
        }
        this.updateUI();
    }

    wakeUp() {
        this.isSleeping = false;
        this.ui.petContainer.style.opacity = '1';
        this.ui.petContainer.classList.remove('breathe');
        this.ui.petContainer.classList.add('idle-breathe'); // Back to idle
        this.updateUI(); // Reset to idle image
        this.showModal('¡Buenos días!', '¡Tu mascota se siente renovada! ☀️');
    }

    gainXP(amount) {
        this.stats.xp += amount;
        if (this.stats.xp >= this.config.xpToLevelUp) this.levelUp();
    }

    levelUp() {
        this.stats.level++;
        this.stats.xp = 0;
        this.config.xpToLevelUp = Math.floor(this.config.xpToLevelUp * 1.5);
        this.checkStickerUnlocks();
        this.showModal('¡Subiste de Nivel!', `Ahora eres nivel ${this.stats.level}`);
    }

    checkStickerUnlocks() {
        let newUnlock = false;
        this.stickers.forEach(sticker => {
            if (this.stats.level >= sticker.unlockLevel && !this.stats.unlockedStickers.includes(sticker.id)) {
                this.stats.unlockedStickers.push(sticker.id);
                newUnlock = true;
            }
        });
        if (newUnlock) this.saveState();
    }

    openCustomizationModal() {
        // Populate Pets
        this.ui.petGrid.innerHTML = '';
        this.pets.forEach(pet => {
            const slot = document.createElement('div');
            slot.className = `sticker-slot ${this.stats.currentPetId === pet.id ? 'selected' : ''}`;

            const img = document.createElement('img');
            img.src = pet.img;
            img.onerror = () => { img.src = 'https://placehold.co/100x100?text=' + pet.name; };

            const name = document.createElement('div');
            name.innerText = pet.name;
            name.style.fontSize = '0.7rem';
            name.style.marginTop = '5px';

            slot.onclick = () => this.selectPet(pet.id);
            slot.appendChild(img);
            slot.appendChild(name);
            this.ui.petGrid.appendChild(slot);
        });

        // Populate Backgrounds
        this.ui.bgGrid.innerHTML = '';
        this.backgrounds.forEach(bg => {
            const slot = document.createElement('div');
            slot.className = `sticker-slot ${this.stats.currentBgId === bg.id ? 'selected' : ''}`;

            const img = document.createElement('img');
            img.src = bg.img;
            img.onerror = () => { img.src = 'https://placehold.co/100x100?text=' + bg.name; };
            img.style.borderRadius = '5px';

            const name = document.createElement('div');
            name.innerText = bg.name;
            name.style.fontSize = '0.7rem';
            name.style.marginTop = '5px';

            slot.onclick = () => this.selectBackground(bg.id);
            slot.appendChild(img);
            slot.appendChild(name);
            this.ui.bgGrid.appendChild(slot);
        });

        this.ui.petPickerModal.classList.remove('hidden');
    }

    selectPet(id) {
        this.stats.currentPetId = id;
        this.updateUI();
        this.saveState();
        // Keep modal open to show selection
        const slots = this.ui.petGrid.querySelectorAll('.sticker-slot');
        slots.forEach((s, idx) => s.classList.toggle('selected', idx === id));
        this.spawnParticles('❤️', 5);
    }

    selectBackground(id) {
        this.stats.currentBgId = id;
        this.updateUI();
        this.saveState();
        // Feedback selection
        const slots = this.ui.bgGrid.querySelectorAll('.sticker-slot');
        this.backgrounds.forEach((bg, idx) => {
            if (slots[idx]) slots[idx].classList.toggle('selected', bg.id === id);
        });
        this.spawnParticles('✨', 3);
    }

    // ... Sticker Album Logic (same as before) ...
    openStickerAlbum() {
        // Stats Header
        const unlockedCount = this.stats.unlockedStickers.length;
        const totalCount = this.stickers.length;

        let html = `
            <div class="sticker-header">
                <h3>Colección: ${unlockedCount}/${totalCount}</h3>
                <button id="btn-buy-pack" class="start-btn small">Comprar Sobre (50 ⭐)</button>
            </div>
            <div id="sticker-grid" class="sticker-grid"></div>
        `;

        this.ui.stickerModal.querySelector('.modal-content').innerHTML = `
            <h2>Álbum de Stickers</h2>
            ${html}
            <button id="sticker-close" style="margin-top:20px;">Cerrar</button>
        `;

        // Re-bind Close
        document.getElementById('sticker-close').addEventListener('click', () => this.ui.stickerModal.classList.add('hidden'));

        // Bind Buy
        document.getElementById('btn-buy-pack').addEventListener('click', () => this.buyStickerPack());

        const grid = this.ui.stickerModal.querySelector('#sticker-grid');

        this.stickers.forEach(sticker => {
            const isUnlocked = this.stats.unlockedStickers.includes(sticker.id);
            const slot = document.createElement('div');
            slot.className = `sticker-slot ${sticker.rarity} ${isUnlocked ? 'unlocked' : 'locked'}`;

            if (isUnlocked) {
                slot.innerHTML = `<span class="sticker-icon">${sticker.icon}</span>`;
                slot.title = `${sticker.name} (${sticker.desc})`;
                slot.addEventListener('click', () => this.showModal(sticker.name, sticker.desc));
            } else {
                slot.innerHTML = `<span class="sticker-icon">🔒</span>`;
            }
            grid.appendChild(slot);
        });

        this.ui.stickerModal.classList.remove('hidden');
    }

    buyStickerPack() {
        if (this.stats.stars < 50) {
            this.showModal('Sin Estrellas', 'Necesitas 50 estrellas para comprar un sobre.');
            return;
        }

        this.stats.stars -= 50;
        this.updateUI();

        // Gacha Logic
        const roll = Math.random() * 100;
        let rarity = 'common';
        if (roll > 60) rarity = 'rare';
        if (roll > 95) rarity = 'legendary';

        const pool = this.stickers.filter(s => s.rarity === rarity);
        const sticker = pool[Math.floor(Math.random() * pool.length)];

        // Unlock Logic
        if (!this.stats.unlockedStickers.includes(sticker.id)) {
            this.stats.unlockedStickers.push(sticker.id);
            this.showModal('¡Nuevo Sticker!', `¡Has conseguido: ${sticker.icon} ${sticker.name}!`);
        } else {
            this.gainXP(20);
            this.showModal('Repetido...', `Ya tenías ${sticker.name}. Te damos +20 XP de consuelo.`);
        }

        this.saveState();
        this.openStickerAlbum(); // Refresh
    }

    spawnParticles(emoji, count = 1) {
        for (let i = 0; i < count; i++) this.spawnParticle(emoji);
    }

    spawnParticle(emoji) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.innerText = emoji;
        p.style.left = (50 + (Math.random() * 40 - 20)) + '%';
        p.style.top = (50 + (Math.random() * 40 - 20)) + '%';
        p.style.fontSize = (1 + Math.random()) + 'rem';
        this.ui.statusEffects.appendChild(p);
        setTimeout(() => p.remove(), 1500);
    }

    swapPetImageForAction(actionKey) {
        if (!actionKey) return;
        const currentPet = this.pets.find(p => p.id === this.stats.currentPetId);
        if (currentPet && currentPet.actions && currentPet.actions[actionKey]) {
            this.ui.petImg.src = currentPet.actions[actionKey];

            // If sleeping, let the state handle the image (don't revert)
            if (actionKey === 'sleeping') return;

            // For other actions, wait 3 seconds then revert
            this.isAnimatingAction = true;
            setTimeout(() => {
                this.isAnimatingAction = false;
                this.ui.petContainer.className = 'pet idle-breathe'; // Stop animation loop
                this.updateUI(); // Will revert to idle if not sleeping
            }, 3000); // 3 seconds for action
        }
    }

    updateUI() {
        this.ui.hungerBar.style.width = `${this.stats.hunger}%`;
        this.ui.happinessBar.style.width = `${this.stats.happiness}%`;
        this.ui.energyBar.style.width = `${this.stats.energy}%`;
        this.ui.xpBar.style.width = `${(this.stats.xp / this.config.xpToLevelUp) * 100}%`;
        this.ui.levelText.innerText = this.stats.level;
        this.ui.starText.innerText = this.stats.stars;

        // Update Pet Image
        const currentPet = this.pets.find(p => p.id === this.stats.currentPetId);
        if (currentPet) {
            // Priority 1: If Sleeping, force sleeping image
            if (this.isSleeping && currentPet.actions && currentPet.actions.sleeping) {
                const sleepSrc = currentPet.actions.sleeping;
                if (!this.ui.petImg.getAttribute('src').includes(sleepSrc)) {
                    this.ui.petImg.src = sleepSrc;
                }
                return;
            }

            // Priority 2: If Animating (eating, playing, cleaning), don't interrupt
            if (this.isAnimatingAction) return;

            // Priority 3: Default to Idle
            const idleSrc = currentPet.img;
            if (!this.ui.petImg.getAttribute('src').includes(idleSrc)) {
                this.ui.petImg.src = idleSrc;
            }
        }

        // Update Background
        const currentBg = this.backgrounds.find(b => b.id === this.stats.currentBgId);
        if (currentBg) {
            this.ui.bgLayer.style.backgroundImage = `url('${currentBg.img}')`;
        }
    }

    updateButtonsPriceTags() {
        const addTag = (btn, cost) => {
            const span = document.createElement('span');
            span.className = 'price-tag';
            if (cost > 0) { span.innerText = `-${cost} ⭐`; span.classList.add('expensive'); }
            else if (cost < 0) { span.innerText = `+${Math.abs(cost)} ⭐`; span.classList.add('affordable'); }
            else { span.innerText = '¡Gratis! ✨'; span.classList.add('affordable'); }
            btn.appendChild(span);
        };
        addTag(this.ui.btnFeed, this.costs.feed);
        addTag(this.ui.btnPlay, this.costs.play);
        addTag(this.ui.btnSleep, this.costs.sleep);
        addTag(this.ui.btnClean, this.costs.clean);
    }

    animatePet(animClass) {
        this.ui.petContainer.className = 'pet';
        void this.ui.petContainer.offsetWidth;
        this.ui.petContainer.classList.add(animClass);

        // After animation, return to idle breathe if not sleeping
        // setTimeout(() => {
        //     if (!this.isSleeping) this.ui.petContainer.classList.add('idle-breathe');
        // }, 1000); 
        // Better: idle-breathe is default, other classes override or combine
    }

    showModal(title, msg) {
        this.ui.modalTitle.innerText = title;
        this.ui.modalMsg.innerText = msg;
        this.ui.modal.classList.remove('hidden');
    }

    closeModal(modalElement) {
        modalElement.classList.add('hidden');
    }

    async tryCloudSync() {
        if (!this.currentUser) return;
        this.saveState(); // Ensure current state is local

        // For this simple version, we'll use a public bin as an index
        // In a private app, this would use a more secure lookup
        try {
            console.log('🔄 Sincronizando en la nube...');
            const response = await fetch(`${this.cloudProvider.url}/${this.cloudProvider.masterBin}/latest`, {
                headers: { 'X-Master-Key': this.cloudProvider.apiKey }
            });
            const data = await response.json();
            const users = data.record.users || {};
            const userKey = `${this.currentUser.name}_${this.currentUser.pass}`;

            if (users[userKey]) {
                // User exists, pull their data
                console.log('✅ Usuario encontrado, cargando partida...');
                await this.loadFromCloud(users[userKey]);
            } else {
                // New user, create their bin
                console.log('✨ Nuevo usuario, creando espacio en la nube...');
                const binId = await this.createCloudBin();
                users[userKey] = binId;
                await this.updateMasterBin(users);
                this.saveToCloud(); // Initial save
            }
        } catch (err) {
            console.error('Error in Cloud Sync:', err);
        }
    }

    async createCloudBin() {
        const response = await fetch(this.cloudProvider.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': this.cloudProvider.apiKey,
                'X-Bin-Private': false
            },
            body: JSON.stringify(this.stats)
        });
        const data = await response.json();
        return data.metadata.id;
    }

    async updateMasterBin(users) {
        await fetch(`${this.cloudProvider.url}/${this.cloudProvider.masterBin}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': this.cloudProvider.apiKey
            },
            body: JSON.stringify({ users })
        });
    }

    async saveToCloud() {
        if (!this.currentUser) return;
        const savedUsers = await this.getMasterBin();
        const userKey = `${this.currentUser.name}_${this.currentUser.pass}`;
        const binId = savedUsers[userKey];

        if (binId) {
            await fetch(`${this.cloudProvider.url}/${binId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': this.cloudProvider.apiKey
                },
                body: JSON.stringify(this.stats)
            });
            console.log('☁️ Partida guardada en la nube.');
        }
    }

    async loadFromCloud(binId) {
        const response = await fetch(`${this.cloudProvider.url}/${binId}/latest`, {
            headers: { 'X-Master-Key': this.cloudProvider.apiKey }
        });
        const data = await response.json();
        this.stats = { ...this.stats, ...data.record };
        this.updateUI();
        this.saveState(); // Sync local with cloud
    }

    async getMasterBin() {
        const response = await fetch(`${this.cloudProvider.url}/${this.cloudProvider.masterBin}/latest`, {
            headers: { 'X-Master-Key': this.cloudProvider.apiKey }
        });
        const data = await response.json();
        return data.record.users || {};
    }

    saveState() {
        localStorage.setItem('kawaiiPetSave', JSON.stringify(this.stats));
        if (this.currentUser) this.saveToCloud();
    }

    loadState() {
        const saved = localStorage.getItem('kawaiiPetSave');
        if (saved) {
            this.stats = { ...this.stats, ...JSON.parse(saved) };
            if (!this.stats.unlockedStickers) this.stats.unlockedStickers = [0];
            if (this.stats.stars === undefined) this.stats.stars = this.stats.coins || 50;
            if (this.stats.currentPetId === undefined) this.stats.currentPetId = 0;
            if (this.stats.currentBgId === undefined) this.stats.currentBgId = 'living';
        }
    }
}

// Minigame System Class
class MinigameSystem {
    constructor(gameInstance) {
        this.game = gameInstance; // Reference to main game for rewards
        this.activeGame = null;
        this.difficulty = 'easy'; // Default

        this.ui = {
            menuModal: document.getElementById('minigames-menu-modal'),
            gameModal: document.getElementById('active-game-modal'),
            gameTitle: document.getElementById('game-title'),
            gameArea: document.getElementById('game-area'),
            gameStatus: document.getElementById('game-status'),
            menuBtns: document.querySelectorAll('.minigame-btn'),
            closeMenuBtn: document.getElementById('minigames-close'),
            exitGameBtn: document.getElementById('game-exit')
        };

        this.bindEvents();
    }

    bindEvents() {
        // Open Game
        this.ui.menuBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const gameType = btn.getAttribute('data-game');
                this.startGame(gameType);
            });
        });

        // Close Menu
        this.ui.closeMenuBtn.addEventListener('click', () => {
            this.ui.menuModal.classList.add('hidden');
        });

        // Exit Game
        this.ui.exitGameBtn.addEventListener('click', () => {
            this.ui.gameModal.classList.add('hidden');
            this.activeGame = null;
        });
    }

    openMenu() {
        this.ui.menuModal.classList.remove('hidden');
    }

    startGame(type) {
        // Star Cost Check (Arcade Style)
        if (this.game.stats.stars < 10) {
            this.game.showModal('Sin Estrellas', 'Necesitas 10 estrellas para jugar. ¡Cuida a tu mascota para ganar más!');
            this.game.animatePet('wobble');
            return;
        }

        // Deduct Stars (Entry Fee)
        this.game.stats.stars -= 10;
        this.game.updateUI();

        this.activeGame = type;
        this.ui.menuModal.classList.add('hidden');
        this.ui.gameModal.classList.remove('hidden');
        this.ui.gameArea.innerHTML = ''; // Clear previous
        this.ui.gameStatus.innerText = '¡Tu turno! 🎲';

        if (type === 'tictactoe') this.setupTicTacToe();
        if (type === 'rps') this.setupRPS();
        if (type === 'guess') this.setupGuessNumber();
    }

    endGame(result) {
        let msg = '';
        let stars = 0;
        let xp = 0;

        if (result === 'win') {
            msg = '¡Ganaste! 🎉';
            stars = 20;
            xp = 10;
            this.game.spawnParticles('⭐', 5);
        } else if (result === 'draw') {
            msg = '¡Empate! 🤝';
            stars = 5;
            xp = 2;
        } else {
            msg = '¡Perdiste! 😢';
            stars = 2;
            xp = 1;
        }

        this.ui.gameStatus.innerText = `${msg} (+${stars} ⭐)`;

        // Reward
        this.game.stats.stars += stars;
        this.game.gainXP(xp);
        this.game.updateUI();
        this.game.saveState();

        // Delay to allow seeing result
        setTimeout(() => {
            // Optional: Show "Play Again" or Close
            this.game.animatePet(result === 'win' ? 'bounce' : 'wobble');
        }, 1500);
    }

    // --- Tic-Tac-Toe ---
    setupTicTacToe() {
        this.ui.gameTitle.innerText = 'Ta-te-ti';
        this.tttBoard = Array(9).fill(null);
        const grid = document.createElement('div');
        grid.className = 'ttt-grid';

        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('button');
            cell.className = 'ttt-cell';
            cell.dataset.index = i;
            cell.addEventListener('click', () => this.handleTTTMove(i, cell));
            grid.appendChild(cell);
        }
        this.ui.gameArea.appendChild(grid);
        this.tttActive = true;
    }

    handleTTTMove(index, cell) {
        if (!this.tttActive || this.tttBoard[index]) return;

        // Player Move
        this.tttBoard[index] = 'P';
        cell.innerText = '🐾'; // Player Icon

        if (this.checkTTTWin('P')) { this.tttActive = false; this.endGame('win'); return; }
        if (!this.tttBoard.includes(null)) { this.tttActive = false; this.endGame('draw'); return; }

        // CPU Move
        this.ui.gameStatus.innerText = 'Pensando... 🤔';
        this.tttActive = false;

        // Visual "Thinking" feedback
        this.ui.gameArea.classList.add('thinking');

        setTimeout(() => {
            this.ui.gameArea.classList.remove('thinking');

            // Smarter AI: 1. Try to Win, 2. Block Player, 3. Random
            let move = this.findBestMove('C'); // Try to win
            if (move === null) move = this.findBestMove('P'); // Block player

            if (move === null) {
                // Random fallback
                const emptyIndices = this.tttBoard.map((v, i) => v === null ? i : null).filter(v => v !== null);
                if (emptyIndices.length > 0) {
                    move = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
                }
            }

            if (move !== null) {
                this.tttBoard[move] = 'C';
                const cells = this.ui.gameArea.querySelectorAll('.ttt-cell');
                cells[move].innerText = '🦴'; // CPU Icon

                if (this.checkTTTWin('C')) { this.endGame('lose'); return; }
                if (!this.tttBoard.includes(null)) { this.endGame('draw'); return; }
            }

            this.ui.gameStatus.innerText = '¡Tu turno!';
            this.tttActive = true;
        }, 1000);
    }

    findBestMove(player) {
        const wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        for (let combo of wins) {
            const [a, b, c] = combo;
            const vals = [this.tttBoard[a], this.tttBoard[b], this.tttBoard[c]];
            // Check if 2 are 'player' and 1 is null
            if (vals.filter(v => v === player).length === 2 && vals.includes(null)) {
                return combo[vals.indexOf(null)];
            }
        }
        return null;
    }

    checkTTTWin(p) {
        const wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        return wins.some(c => this.tttBoard[c[0]] === p && this.tttBoard[c[1]] === p && this.tttBoard[c[2]] === p);
    }

    // --- Rock Paper Scissors ---
    setupRPS() {
        this.ui.gameTitle.innerText = 'Piedra, Papel, Tijera';
        this.ui.gameArea.innerHTML = '<h3 style="margin-bottom:15px; color:#aaa;">Elige tu opción:</h3>'; // Title

        const opts = [
            { id: 'rock', name: 'Piedra', img: 'assets/rps_rock.png' },
            { id: 'paper', name: 'Papel', img: 'assets/rps_paper.png' },
            { id: 'scissors', name: 'Tijera', img: 'assets/rps_scissors.png' }
        ];

        const container = document.createElement('div');
        container.className = 'rps-options';

        opts.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'rps-btn';
            btn.style.width = '80px'; // Slightly larger for images
            btn.style.height = '80px';
            btn.style.padding = '5px';

            btn.innerHTML = `<img src="${opt.img}" alt="${opt.name}" style="width:100%; height:100%; object-fit:contain;">`;
            btn.addEventListener('click', () => this.handleRPSMove(opt.id));
            container.appendChild(btn);
        });

        this.ui.gameArea.appendChild(container);
    }

    handleRPSMove(playerChoice) {
        const choices = ['rock', 'paper', 'scissors'];
        const cpuChoice = choices[Math.floor(Math.random() * 3)];

        const getImg = (id) => `assets/rps_${id}.png`;

        this.ui.gameArea.innerHTML = `
            <div class="rps-result">
                <div class="rps-choice">
                    <span>Tú</span>
                    <div class="rps-icon player" style="width:100px; height:100px; padding:10px;">
                        <img src="${getImg(playerChoice)}" style="width:100%; height:100%; object-fit:contain;">
                    </div>
                </div>
                <div class="vs">VS</div>
                <div class="rps-choice">
                    <span>Rival</span>
                    <div class="rps-icon cpu" style="width:100px; height:100px; padding:10px;">
                        <img src="${getImg(cpuChoice)}" style="width:100%; height:100%; object-fit:contain;">
                    </div>
                </div>
            </div>
            <button id="rps-retry" class="start-btn small" style="margin-top:15px; font-size:1rem;">Jugar de nuevo</button>
        `;

        // Re-bind retry
        document.getElementById('rps-retry').addEventListener('click', () => {
            this.ui.gameArea.innerHTML = '';
            this.setupRPS();
        });

        if (playerChoice === cpuChoice) {
            this.endGame('draw');
        } else if (
            (playerChoice === 'rock' && cpuChoice === 'scissors') ||
            (playerChoice === 'paper' && cpuChoice === 'rock') ||
            (playerChoice === 'scissors' && cpuChoice === 'paper')
        ) {
            this.endGame('win');
        } else {
            this.endGame('lose');
        }
    }

    getIcon(type) {
        // Using Emojis as fallback since asset generation failed
        // rock_1767832430205.png is available but we need consistent set
        return { 'rock': '✊', 'paper': '✋', 'scissors': '✌️' }[type];
    }

    // --- Guess Number ---
    setupGuessNumber() {
        this.ui.gameTitle.innerText = 'Adivina (1-15)';
        this.targetNumber = Math.floor(Math.random() * 15) + 1;
        this.guessesLeft = 3;
        this.maxGuesses = 3;

        this.updateGuessStatus();

        const grid = document.createElement('div');
        grid.className = 'guess-grid';

        for (let i = 1; i <= 15; i++) {
            const btn = document.createElement('button');
            btn.className = 'guess-btn';
            btn.innerText = i;
            btn.dataset.val = i;
            btn.addEventListener('click', () => this.handleGuess(i, btn));
            grid.appendChild(btn);
        }
        this.ui.gameArea.appendChild(grid);
    }

    updateGuessStatus() {
        this.ui.gameStatus.innerText = `Intentos restantes: ${this.guessesLeft}`;
    }

    handleGuess(val, btn) {
        if (this.guessesLeft <= 0) return;

        btn.classList.add('disabled');
        btn.style.backgroundColor = '#eee'; // Visual disabled
        this.guessesLeft--;

        if (val === this.targetNumber) {
            // Calculate Reward: 30, 15, 5
            const rewardTier = this.guessesLeft + 1; // 3 (1st try), 2 (2nd), 1 (3rd)
            const stars = [5, 15, 30][rewardTier - 1];

            this.endGameCustom('win', stars, stars / 2); // Custom reward
        } else {
            if (this.guessesLeft === 0) {
                this.ui.gameStatus.innerText = `¡Perdiste! Era el ${this.targetNumber}`;
                this.endGame('lose');
            } else {
                const hint = val < this.targetNumber ? '¡Es más alto! ⬆️' : '¡Es más bajo! ⬇️';
                this.ui.gameStatus.innerText = `${hint}`;
                setTimeout(() => this.updateGuessStatus(), 1500);
            }
        }
    }

    endGameCustom(result, stars, xp) {
        // Duplicating core endGame logic to allow custom rewards
        this.ui.gameStatus.innerText = `¡Ganaste! 🎉 (+${stars} ⭐)`;
        this.game.stats.stars += stars;
        this.game.gainXP(xp);
        this.game.updateUI();
        this.game.saveState();
        this.game.animatePet('bounce');
    }
}

window.addEventListener('DOMContentLoaded', () => new KawaiiPetGame());
