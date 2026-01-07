class KawaiiPetGame {
    constructor() {
        this.stats = {
            hunger: 80, happiness: 80, energy: 80, xp: 0, level: 1,
            stars: 50, unlockedStickers: [0], currentPetId: 0, currentBgId: 'living'
        };

        this.pets = [
            {
                id: 0, name: 'Conejito', img: 'assets/pet_idle.png', description: 'Un conejito rosado muy tierno.',
                actions: { eating: 'assets/pet_eating.png', playing: 'assets/pet_playing.png', sleeping: 'assets/pet_sleeping.png', cleaning: 'assets/pet_cleaning.png' }
            },
            {
                id: 1, name: 'Gatito', img: 'assets/kitty_idle.png', description: 'Un gatito curioso.',
                actions: { eating: 'assets/kitty_eating.png', playing: 'assets/kitty_playing.png', sleeping: 'assets/kitty_sleeping.png', cleaning: 'assets/kitty_cleaning.png' }
            },
            {
                id: 2, name: 'Perrito', img: 'assets/doggy_idle.png', description: 'Un perrito fiel.',
                actions: { eating: 'assets/doggy_eating.png', playing: 'assets/doggy_playing.png', sleeping: 'assets/doggy_sleeping.png', cleaning: 'assets/doggy_cleaning.png' }
            },
            {
                id: 3, name: 'Zorrito', img: 'assets/fox_idle.png', description: 'Un zorrito astuto.',
                actions: { eating: 'assets/fox_eating.png', playing: 'assets/fox_playing.png', sleeping: 'assets/fox_sleeping.png', cleaning: 'assets/fox_cleaning.png' }
            },
            {
                id: 4, name: 'Panda', img: 'assets/panda_idle.png', description: 'Un panda relajado.',
                actions: { eating: 'assets/panda_eating.png', playing: 'assets/panda_playing.png', sleeping: 'assets/panda_sleeping.png', cleaning: 'assets/panda_cleaning.png' }
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
            { id: 0, name: 'Mi Mascota', img: 'assets/pet_idle.png', unlockLevel: 1 },
            { id: 1, name: 'Manzana', img: 'assets/icon_apple.png', unlockLevel: 2 },
            { id: 2, name: 'Pelota', img: 'assets/icon_ball.png', unlockLevel: 3 },
            { id: 3, name: 'Cama', img: 'assets/icon_bed.png', unlockLevel: 4 },
            { id: 4, name: 'Jabón', img: 'assets/icon_soap.png', unlockLevel: 5 },
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
            startBtn: document.getElementById('btn-start')
        };

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
        this.ui.btnPlay.addEventListener('click', () => this.action('play'));
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
            this.ui.splashScreen.classList.add('hidden');
        });
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
        this.ui.stickerGrid.innerHTML = '';
        this.stickers.forEach(sticker => {
            const isUnlocked = this.stats.unlockedStickers.includes(sticker.id);
            const slot = document.createElement('div');
            slot.className = `sticker-slot ${isUnlocked ? 'unlocked' : ''}`;
            const img = document.createElement('img');
            img.src = sticker.img;
            if (!isUnlocked) img.title = `Desbloquea en Nivel ${sticker.unlockLevel}`;
            else img.title = sticker.name;
            slot.appendChild(img);
            this.ui.stickerGrid.appendChild(slot);
        });
        this.ui.stickerModal.classList.remove('hidden');
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

            // If not sleeping, return to idle after animation
            if (actionKey !== 'sleeping') {
                setTimeout(() => {
                    const latestPet = this.pets.find(p => p.id === this.stats.currentPetId);
                    this.ui.petImg.src = latestPet.img;
                }, 2000); // 2 seconds for action
            }
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
            const currentSrc = this.ui.petImg.getAttribute('src');
            if (!currentSrc || !currentSrc.includes(currentPet.img)) {
                this.ui.petImg.src = currentPet.img;
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

    saveState() {
        localStorage.setItem('kawaiiPetSave', JSON.stringify(this.stats));
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

window.addEventListener('DOMContentLoaded', () => new KawaiiPetGame());
