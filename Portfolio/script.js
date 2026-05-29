document.addEventListener('DOMContentLoaded', () => {
    let topZIndex = 1000;
    
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    let soundEnabled = true;

    function playClickSound(freq1 = 800, freq2 = 300, type = 'sine', duration = 0.1) {
        if (!soundEnabled) return;
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        oscillator.type = type;
        oscillator.frequency.setValueAtTime(freq1, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(freq2, audioCtx.currentTime + duration);
        
        gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + duration);
    }

    document.addEventListener('click', (e) => {
        if (e.target.closest('button') || e.target.closest('.tile') || e.target.closest('.project-tile')) {
            playClickSound(900, 400, 'sine', 0.1);
        }
    });

    const toggleSoundBtn = document.getElementById('toggle-sound-btn');
    if (toggleSoundBtn) {
        toggleSoundBtn.addEventListener('click', () => {
            soundEnabled = !soundEnabled;
            if (soundEnabled) {
                toggleSoundBtn.textContent = '🔊 Dźwięki Włączone';
                playClickSound(400, 800, 'sine', 0.15);
            } else {
                toggleSoundBtn.textContent = '🔇 Dźwięki Wyłączone';
            }
        });
    }

    const translations = {
        "pl": {
            "theme-dark": "Tryb ciemny",
            "theme-light": "Tryb jasny",
            "panel": "Panel akcji",
            "nav-skills": "Umiejętności",
            "nav-projects": "Projekty",
            "nav-contact": "Kontakt",
            "about-title": "O mnie",
            "about-text": "Cześć! Jestem Aleksander, uczeń technikum informatycznego. Jestem dumnym gejem i aktywnie działam na rzecz widoczności społeczności LGBTQ+ w świecie IT. Poza kodowaniem i tworzeniem inkluzywnych projektów, moją wielką pasją jest kolarstwo. Uwielbiam pokonywać kilometry na moim rowerze aero, najchętniej w towarzystwie mojego chłopaka, Ignacego.",
            "learn-more-btn": "Dowiedz się więcej",
            "hidden-boyfriends-text": "Tak naprawdę miałem 3 chłopaków a teraz dwóch",
            "meet-boys-btn": "Zapoznaj moich chłopaków",
            "femboy-btn": "Zostań moim chłopakiem (femboyem)",
            "femboy-alert": "Ignacy może być trochę zazdrosny! 😅",
            "choose-boy-title": "Wybierz, kogo chcesz zobaczyć",
            "ignacy-name": "Ignacy",
            "igor-name": "Igor",
            "boniek-name": "Boniek 🕊️",
            "group-name": "Zdjęcia grupowe",
            "back-btn": "Wróć do wyboru",
            "ignacy-title": "Ignacy (aka. Naqsu)",
            "ignacy-bio": "Mój niesamowity chłopak, z którym dzielę życie i pasję do kolarstwa. Razem zdobywamy kolejne kilometry, wspieramy się na każdym kroku i tworzymy najlepszy zespół na świecie!",
            "igor-title": "Igor",
            "igor-bio": "Mój wspaniały chłopak Igor. Zawsze mogę na niego liczyć, a wspólne spędzanie czasu to czysta przyjemność. Tworzymy razem piękne wspomnienia!",
            "boniek-title": "Honorable Mention: Boniek 🕊️",
            "boniek-bio": "Mój trzeci chłopak, który na zawsze pozostanie w moim sercu. Lubiliśmy pić z tego samego shake'a i razem wpierniczać burgery z makdonalda. Choć nie ma go już z nami, wspomnienia o nim są dla mnie niezwykle cenne. Spoczywaj w pokoju, Boniek. ❤️",
            "group-title": "Zdjęcia grupowe",
            "group-bio": "Nasze wspólne chwile uchwycone na zdjęciach. Najlepsze wspomnienia z ekipą!",
            "title-skills": "Moje Umiejętności",
            "title-projects": "Wybrane Projekty",
            "filter-all": "Wszystkie",
            "filter-web": "Strony WWW",
            "title-contact": "Skontaktuj się ze mną",
            "copy": "Kopiuj",
            "copied": "Skopiowano!",
            "ph-name": "Twoje imię",
            "ph-email": "Twój adres e-mail",
            "ph-msg": "Twoja wiadomość...",
            "btn-send": "Wyślij wiadomość",
            "ac-title": "Centrum Akcji",
            "ac-sys": "System",
            "ac-bat": "Bateria",
            "ac-stat": "Statystyki",
            "ac-time": "Czas",
            "ac-clicks": "Kliknięcia",
            "hacker-btn": "Tryb Hakera",
            "leet-btn": "Sekretny język",
            "color-btn": "Losuj kolory",
            "rotate-btn": "Obróć zdjęcie",
            "switch-btn": "Zmień zdjęcie",
            "wobble-settings": "Opcje Wobble'a",
            "mode-settings": "Tryby Systemu",
            "ctx-refresh": "Odśwież OS",
            "ctx-terminal": "Uruchom Terminal",
            "ctx-update": "Sprawdź aktualizacje",
            "ctx-personal": "Opcje personalizacji",
            "term-title": "Aleksander OS Terminal",
            "boys-win-title": "Chłopaki OS",
            "opt-jelly": "Klasyczny (Jelly)",
            "opt-glitch": "Glitch / Trzęsienie",
            "opt-bounce": "Sprężyna (Bounce)",
            "opt-spin": "Huragan (Spin)",
            "opt-tornado": "Tornado 3D",
            "opt-shake": "Wibracje (Shake)",
            "opt-rubberband": "Guma (Rubber Band)",
            "opt-swing": "Huśtawka (Swing)",
            "opt-tada": "Tada!",
            "opt-heartbeat": "Bicie Serca",
            "opt-pulse": "Pulsowanie (Pulse)",
            "opt-flip": "Karta (Flip)",
            "opt-skew": "Wyginanie (Skew)",
            "opt-zoom": "Skok (Zoom)",
            "opt-jello": "Miękka Galaretka",
            "updating-title": "Aktualizowanie Aleksander OS...",
            "updating-text": "Proszę nie wyłączać przeglądarki.",
            "update-success": "System zaktualizowany pomyślnie!",
            "update-fail": "Krytyczny błąd aktualizacji! Przywracanie jądra systemu...",
            "nt-welcome": "Witaj w Aleksander OS!",
            "nt-copy-success": "Adres e-mail skopiowany!",
            "nt-theme-dark": "Aktywowano ciemny motyw.",
            "nt-theme-light": "Aktywowano jasny motyw.",
            "nt-mode-hacker": "Tryb Hakera włączony. Łamanie zabezpieczeń...",
            "nt-mode-cyberpunk": "Tryb Cyberpunk. Wake up, Samurai.",
            "nt-mode-retro": "Mode Retro ON. Loading DOS...",
            "nt-mode-normal": "Powrócono do normalnego trybu.",
            "nt-secret-unlock": "Odblokowano sekretny tryb Matrix!",
            "nt-rm-rf": "Błąd krytyczny! Uruchomiono procedurę autodestrukcji!",
            "nt-wobble-change": "Zmieniono efekt wobble na: ",
            "nt-invincible-on": "TRYB INVINCIBLE AKTYWOWANY! 🤯",
            "nt-invincible-off": "Tryb Invincible wyłączony."
        },
        "en-us": {
            "theme-dark": "Dark Mode",
            "theme-light": "Light Mode",
            "panel": "Action Center",
            "nav-skills": "Skills",
            "nav-projects": "Projects",
            "nav-contact": "Contact",
            "about-title": "About Me",
            "about-text": "Hi! I'm Aleksander, an IT student. I am an openly gay man and an active advocate for LGBTQ+ visibility in the tech world. Besides coding and building inclusive projects, my biggest passion is cycling. I love racking up miles on my aero bike, preferably accompanied by my boyfriend, Ignacy.",
            "learn-more-btn": "Learn more",
            "hidden-boyfriends-text": "Actually, I had 3 boyfriends and now I have two",
            "meet-boys-btn": "Meet my boyfriends",
            "femboy-btn": "Become my femboy boyfriend",
            "femboy-alert": "Ignacy might get a little jealous! 😅",
            "choose-boy-title": "Choose who you want to see",
            "ignacy-name": "Ignacy",
            "igor-name": "Igor",
            "boniek-name": "Boniek 🕊️",
            "group-name": "Group Photos",
            "back-btn": "Back to selection",
            "ignacy-title": "Ignacy (aka Naqsu)",
            "ignacy-bio": "My amazing boyfriend with whom I share my life and passion for cycling. Together we conquer new miles, support each other every step of the way, and make the best team in the world!",
            "igor-title": "Igor",
            "igor-bio": "My other wonderful boyfriend Igor. I can always count on him, and spending time together is a pure joy. We make beautiful memories together!",
            "boniek-title": "Honorable Mention: Boniek 🕊️",
            "boniek-bio": "My third boyfriend, who will always remain in my heart. We used to love drinking from the same shake and eating McDonald's burgers together. Even though he's no longer with us, the memories we shared are incredibly precious to me. Rest in peace, Boniek. ❤️",
            "group-title": "Group Photos",
            "group-bio": "Our moments caught on camera. Best memories with the crew!",
            "title-skills": "My Skills",
            "title-projects": "Selected Projects",
            "filter-all": "All",
            "filter-web": "Websites",
            "title-contact": "Contact Me",
            "copy": "Copy",
            "copied": "Copied!",
            "ph-name": "Your Name",
            "ph-email": "Your Email",
            "ph-msg": "Your Message...",
            "btn-send": "Send Message",
            "ac-title": "Action Center",
            "ac-sys": "System",
            "ac-bat": "Battery",
            "ac-stat": "Statistics",
            "ac-time": "Time",
            "ac-clicks": "Clicks",
            "hacker-btn": "Hacker Mode",
            "leet-btn": "Secret Language",
            "color-btn": "Randomize Colors",
            "rotate-btn": "Rotate Photo",
            "switch-btn": "Switch Photo",
            "wobble-settings": "Wobble Options",
            "mode-settings": "System Modes",
            "ctx-refresh": "Refresh OS",
            "ctx-terminal": "Run Terminal",
            "ctx-update": "Check for updates",
            "ctx-personal": "Personalization",
            "term-title": "Aleksander OS Terminal",
            "boys-win-title": "Boyfriends OS",
            "opt-jelly": "Classic (Jelly)",
            "opt-glitch": "Glitch / Quake",
            "opt-bounce": "Bounce",
            "opt-spin": "Hurricane (Spin)",
            "opt-tornado": "3D Tornado",
            "opt-shake": "Vibration (Shake)",
            "opt-rubberband": "Rubber Band",
            "opt-swing": "Swing",
            "opt-tada": "Tada!",
            "opt-heartbeat": "Heartbeat",
            "opt-pulse": "Pulse",
            "opt-flip": "Flip",
            "opt-skew": "Skew",
            "opt-zoom": "Zoom",
            "opt-jello": "Soft Jello",
            "updating-title": "Updating Aleksander OS...",
            "updating-text": "Please do not close your browser.",
            "update-success": "System updated successfully!",
            "update-fail": "Critical update error! Restoring system kernel...",
            "nt-welcome": "Welcome to Aleksander OS!",
            "nt-copy-success": "Email address copied!",
            "nt-theme-dark": "Dark theme activated.",
            "nt-theme-light": "Light theme activated.",
            "nt-mode-hacker": "Hacker Mode ON. Brute-forcing...",
            "nt-mode-cyberpunk": "Cyberpunk Mode. Wake up, Samurai.",
            "nt-mode-retro": "Retro Mode ON. Loading DOS...",
            "nt-mode-normal": "Returned to normal mode.",
            "nt-secret-unlock": "Secret Matrix mode unlocked!",
            "nt-rm-rf": "Critical error! Autodestruct sequence initiated!",
            "nt-wobble-change": "Wobble effect changed to: ",
            "nt-invincible-on": "INVINCIBLE MODE ACTIVATED! 🤯",
            "nt-invincible-off": "Invincible mode deactivated."
        }
    };

    let currentLanguage = 'pl';
    const langSelect = document.getElementById('language-select');

    function applyTranslations(lang) {
        currentLanguage = lang;
        const dictionary = translations[lang] || translations["pl"];

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dictionary[key]) el.textContent = dictionary[key];
        });

        document.querySelectorAll('[data-i18n-ph]').forEach(el => {
            const key = el.getAttribute('data-i18n-ph');
            if (dictionary[key]) el.placeholder = dictionary[key];
        });

        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.textContent = document.body.classList.contains('dark-mode') ? dictionary["theme-light"] : dictionary["theme-dark"];
        }
    }

    if (langSelect) langSelect.addEventListener('change', (e) => applyTranslations(e.target.value));

    const notificationContainer = document.getElementById('notification-container');
    function showToast(messageKey, type = 'info', dynamicValue = '') {
        const dictionary = translations[currentLanguage] || translations["pl"];
        let message = dictionary[messageKey] || messageKey;
        if(dynamicValue) message += dynamicValue;

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        let icon = 'ℹ️';
        if(type === 'success') icon = '✅';
        if(type === 'warning') icon = '⚠️';
        if(type === 'error') icon = '🛑';

        toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
        if (notificationContainer) notificationContainer.appendChild(toast);

        setTimeout(() => toast.classList.add('show'), 10);
        
        const removeToast = () => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        };

        toast.addEventListener('click', removeToast);
        setTimeout(removeToast, 4000);
    }

    setTimeout(() => showToast('nt-welcome', 'success'), 1000);

    const clockElement = document.getElementById('system-clock');
    if(clockElement) {
        setInterval(() => {
            const now = new Date();
            clockElement.textContent = now.toLocaleTimeString('pl-PL');
        }, 1000);
    }

    const customColorBtn = document.getElementById('custom-color-btn');
    const colorPickerInput = document.getElementById('hidden-color-picker');

    if (customColorBtn && colorPickerInput) {
        customColorBtn.addEventListener('click', () => {
            colorPickerInput.click();
        });
        
        colorPickerInput.addEventListener('input', (e) => {
            document.documentElement.style.setProperty('--metro-blue', e.target.value);
            showToast('color-btn', 'success'); 
        });
    }

    const randomColorBtn = document.getElementById('random-color-btn');
    if (randomColorBtn) {
        randomColorBtn.addEventListener('click', () => {
            const colors = ['#0078d4', '#107c41', '#5c2d91', '#d83b01', '#008272', '#b81b1b', '#ffb900', '#e3008c', '#00cc6a', '#00bcf2'];
            document.querySelectorAll('.tile').forEach(tile => {
                tile.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            });
            showToast('color-btn', 'success');
        });
    }

    const modes = ['dark-mode', 'hacker-mode', 'cyberpunk-mode', 'retro-mode'];
    function setMode(modeToEnable) {
        modes.forEach(mode => document.body.classList.remove(mode));
        let toastKey = 'nt-mode-normal';
        let type = 'info';

        if (modeToEnable) {
            document.body.classList.add(modeToEnable);
            if(modeToEnable === 'hacker-mode') { toastKey = 'nt-mode-hacker'; type = 'warning'; }
            if(modeToEnable === 'cyberpunk-mode') { toastKey = 'nt-mode-cyberpunk'; type = 'info'; }
            if(modeToEnable === 'retro-mode') { toastKey = 'nt-mode-retro'; type = 'warning'; }
        }
        showToast(toastKey, type);
    }

    const hackerBtn = document.getElementById('hacker-btn');
    if (hackerBtn) hackerBtn.addEventListener('click', () => setMode(document.body.classList.contains('hacker-mode') ? null : 'hacker-mode'));
    
    const cyberpunkBtn = document.getElementById('cyberpunk-btn');
    if (cyberpunkBtn) cyberpunkBtn.addEventListener('click', () => setMode(document.body.classList.contains('cyberpunk-mode') ? null : 'cyberpunk-mode'));

    const retroBtn = document.getElementById('retro-btn');
    if (retroBtn) retroBtn.addEventListener('click', () => setMode(document.body.classList.contains('retro-mode') ? null : 'retro-mode'));

    let currentWobbleMode = 'jelly';
    const wobbleSelect = document.getElementById('wobble-select');
    if (wobbleSelect) {
        wobbleSelect.addEventListener('change', (e) => {
            currentWobbleMode = e.target.value;
            const optName = e.target.options[e.target.selectedIndex].text;
            showToast('nt-wobble-change', 'info', optName);
        });
    }

    function setupWobbleDrag(elementToDrag, elementToAnimate) {
        let isDragging = false;
        let startX, startY;
        let hasMoved = false;

        elementToDrag.addEventListener('mousedown', (e) => {
            if (e.ctrlKey) return; 
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            hasMoved = false;
            elementToAnimate.style.transition = 'none';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;

            if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) hasMoved = true;
            elementToAnimate.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        });

        document.addEventListener('mouseup', () => {
            if (!isDragging) return;
            isDragging = false;
            elementToAnimate.style.transform = '';
            elementToAnimate.style.transition = '';

            if (hasMoved) {
                const currentAnim = elementToAnimate.classList.value.match(/\bwobble-\S+/g);
                if (currentAnim) elementToAnimate.classList.remove(currentAnim[0]);
                void elementToAnimate.offsetWidth;
                elementToAnimate.classList.add(`wobble-${currentWobbleMode}`);
            }
        });

        elementToAnimate.addEventListener('animationend', (e) => {
            if (e.animationName.includes('wobble')) {
                elementToAnimate.className = elementToAnimate.className.replace(/\bwobble-\S+\b/g, '').trim();
            }
        });

        elementToDrag.addEventListener('click', (e) => {
            if (hasMoved) {
                e.preventDefault();
                e.stopImmediatePropagation();
            }
        }, true);
    }

    const wobbleTargets = document.querySelectorAll('.wobble-target, #my-image-frame');
    wobbleTargets.forEach(target => {
        const dragHandle = target.id === 'my-image-frame' ? document.getElementById('profile-img') : target;
        if(dragHandle) setupWobbleDrag(dragHandle, target);
    });

    const boyImages = document.querySelectorAll('#window-boys .carousel-track img');
    boyImages.forEach(img => {
        setupWobbleDrag(img, img);
    });

    const grid = document.getElementById('skills-grid');
    let draggedTile = null;

    if(grid) {
        document.querySelectorAll('.tile').forEach(tile => {
            tile.addEventListener('dragstart', function(e) {
                draggedTile = this;
                setTimeout(() => this.classList.add('dragging'), 0);
                e.dataTransfer.effectAllowed = 'move';
            });

            tile.addEventListener('dragend', function() {
                this.classList.remove('dragging');
                draggedTile = null;
                document.querySelectorAll('.tile').forEach(t => t.classList.remove('drag-over'));
            });

            tile.addEventListener('dragover', function(e) {
                if (e.preventDefault) e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
                return false;
            });

            tile.addEventListener('dragenter', function(e) {
                if(this !== draggedTile) this.classList.add('drag-over');
            });

            tile.addEventListener('dragleave', function() {
                this.classList.remove('drag-over');
            });

            tile.addEventListener('drop', function(e) {
                if (e.stopPropagation) e.stopPropagation();
                this.classList.remove('drag-over');
                
                if (draggedTile && draggedTile !== this) {
                    let allTiles = Array.from(grid.querySelectorAll('.tile'));
                    let draggedIdx = allTiles.indexOf(draggedTile);
                    let droppedIdx = allTiles.indexOf(this);
                    
                    if (draggedIdx < droppedIdx) {
                        this.after(draggedTile);
                    } else {
                        this.before(draggedTile);
                    }
                }
                return false;
            });
        });
    }

    const lightboxModal = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightboxBtn = document.getElementById('close-lightbox');

    function closeLightbox() {
        if(lightboxModal) {
            lightboxModal.classList.remove('active');
            setTimeout(() => lightboxImg.src = "", 300);
        }
    }

    document.querySelectorAll('#profile-img, .enlargeable').forEach(img => {
        img.addEventListener('click', (e) => {
            if (e.ctrlKey || e.target.closest('.carousel-btn')) return;
            lightboxImg.src = img.src;
            lightboxModal.classList.add('active');
        });
    });

    if (closeLightboxBtn && lightboxModal) {
        closeLightboxBtn.addEventListener('click', closeLightbox);
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal || e.target === lightboxImg) closeLightbox();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightboxModal.classList.contains('active')) closeLightbox();
        });
    }

    const learnMoreBtn = document.getElementById('learn-more-btn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            learnMoreBtn.style.display = 'none';
            document.getElementById('hidden-boyfriends-text').style.display = 'block';
            document.getElementById('hidden-actions').style.display = 'flex';
        });
    }

    const femboyBtn = document.getElementById('femboy-btn');
    if (femboyBtn) femboyBtn.addEventListener('click', () => alert(translations[currentLanguage]["femboy-alert"]));

    document.querySelectorAll('.carousel-container').forEach(container => {
        const track = container.querySelector('.carousel-track');
        const images = track.querySelectorAll('img');
        let currentIndex = 0;

        container.querySelector('.prev').addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        });

        container.querySelector('.next').addEventListener('click', () => {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    });

    function initDraggable(win) {
        const header = win.querySelector('.window-header');
        let offsetX, offsetY;
        
        if (header) {
            win.addEventListener('mousedown', () => {
                topZIndex++;
                win.style.zIndex = topZIndex;
            });

            header.addEventListener('mousedown', (e) => {
                if(e.target.closest('.window-controls')) return;
                offsetX = e.clientX - win.offsetLeft;
                offsetY = e.clientY - win.offsetTop;
                
                function mouseMove(e) { 
                    win.style.left = (e.clientX - offsetX) + 'px'; 
                    win.style.top = (e.clientY - offsetY) + 'px'; 
                }
                function mouseUp() { 
                    document.removeEventListener('mousemove', mouseMove); 
                    document.removeEventListener('mouseup', mouseUp); 
                }
                document.addEventListener('mousemove', mouseMove);
                document.addEventListener('mouseup', mouseUp);
            });
        }
    }

    const windows = document.querySelectorAll('.window');
    windows.forEach(win => initDraggable(win));

    function openWindow(winId) {
        const win = document.getElementById(winId);
        if(!win) return;
        win.style.display = 'flex';
        topZIndex++;
        win.style.zIndex = topZIndex;
    }

    const meetBoysBtn = document.getElementById('meet-boys-btn');
    if (meetBoysBtn) meetBoysBtn.addEventListener('click', () => openWindow('window-boys'));

    document.querySelectorAll('.window .window-controls .close').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const win = e.target.closest('.window');
            win.style.display = 'none';
            if(win.id === 'window-snake') snakeGameRunning = false;
        });
    });

    document.querySelectorAll('.window .window-controls .minimize').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.window').style.display = 'none';
        });
    });

    const boySelectBtns = document.querySelectorAll('.boy-select-btn');
    if (boySelectBtns) {
        boySelectBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.getAttribute('data-target');
                document.getElementById('boys-menu').style.display = 'none';
                document.getElementById('boys-content').style.display = 'block';
                document.querySelectorAll('.boy-section').forEach(section => {
                    section.style.display = (section.id === targetId) ? 'block' : 'none';
                });
            });
        });

        const backToBoysMenuBtn = document.getElementById('back-to-boys-menu');
        if (backToBoysMenuBtn) {
            backToBoysMenuBtn.addEventListener('click', () => {
                document.getElementById('boys-content').style.display = 'none';
                document.getElementById('boys-menu').style.display = 'block';
            });
        }
    }

    let currentProfileRotation = 0;
    let isProfileMirrored = false;
    const rotateBtn = document.getElementById('rotate-photo-btn');
    const switchBtn = document.getElementById('switch-photo-btn');

    function updateProfileTransform() {
        const img = document.getElementById('profile-img');
        if(img) img.style.transform = `rotate(${currentProfileRotation}deg) scaleX(${isProfileMirrored ? -1 : 1})`;
    }

    if (rotateBtn) {
        rotateBtn.addEventListener('click', () => {
            currentProfileRotation += 90;
            updateProfileTransform();
        });
    }

    if (switchBtn) {
        switchBtn.addEventListener('click', () => {
            const img = document.getElementById('profile-img');
            img.src = img.src.includes('mzdj.jpg') ? 'lakak1.png' : 'mzdj.jpg';
        });
    }

    const pImg = document.getElementById('profile-img');
    let secretClickCount = 0;
    if (pImg) {
        pImg.addEventListener('click', (e) => {
            if (e.ctrlKey) {
                isProfileMirrored = !isProfileMirrored;
                updateProfileTransform();
            } else {
                secretClickCount++;
                if (secretClickCount === 5) {
                    pImg.style.filter = pImg.style.filter.includes('invert') ? 'none' : 'invert(1) hue-rotate(180deg)';
                    secretClickCount = 0;
                }
            }
        });
    }

    const imgFrame = document.getElementById('my-image-frame');
    if (imgFrame) {
        imgFrame.addEventListener('dblclick', () => {
            imgFrame.classList.add('spin-3d');
            setTimeout(() => imgFrame.classList.remove('spin-3d'), 1500);
        });
    }

    let clicks = 0;
    let seconds = 0;
    document.addEventListener('click', () => {
        clicks++;
        const clickEl = document.getElementById('click-count');
        if (clickEl) clickEl.textContent = clicks;
    });

    setInterval(() => {
        seconds++;
        const timeEl = document.getElementById('time-spent');
        if (timeEl) {
            timeEl.textContent = `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
        }
    }, 1000);

    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];
    let konamiIndex = 0;
    let typedMagicWord = '';

    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas ? canvas.getContext('2d') : null;
    let matrixInterval = null;

    function startMatrixEffect() {
        if (!canvas || !ctx) return;
        canvas.style.display = 'block';
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let color = '#0f0';
        if(document.body.classList.contains('cyberpunk-mode')) color = '#ff00ff';

        const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nums = '0123456789';
        const lgbtq = '🏳️‍🌈👨‍❤️‍👨🚲';
        const alphabet = latin + nums + lgbtq;

        const fontSize = 16;
        const columns = canvas.width / fontSize;
        const rainDrops = Array.from({ length: columns }).fill(canvas.height);

        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = color;
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < rainDrops.length; i++) {
                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

                if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    rainDrops[i] = 0;
                }
                rainDrops[i]++;
            }
        }
        matrixInterval = setInterval(draw, 30);
        showToast('nt-secret-unlock', 'warning');
    }

    function stopMatrixEffect() {
        clearInterval(matrixInterval);
        if (canvas) canvas.style.display = 'none';
        matrixInterval = null;
    }

    window.addEventListener('keydown', (e) => {
        typedMagicWord += e.key.toLowerCase();
        
        if (typedMagicWord.slice(-10) === 'invincible') {
            const elements = document.querySelectorAll('.tile, .project-tile, .glass-panel, .theme-btn, .action-btn, img');
            const animations = ['wobble-jelly', 'wobble-glitch', 'wobble-bounce', 'wobble-spin', 'wobble-tornado', 'wobble-shake', 'wobble-rubberband', 'wobble-swing', 'wobble-tada', 'wobble-heartbeat', 'wobble-pulse', 'wobble-flip', 'wobble-skew', 'wobble-zoom', 'wobble-jello'];
            
            elements.forEach(el => {
                const randomAnim = animations[Math.floor(Math.random() * animations.length)];
                el.style.animation = `${randomAnim} ${Math.random() * 2 + 0.5}s infinite alternate`;
            });
            
            showToast('nt-invincible-on', 'error');
            playClickSound(150, 50, 'sawtooth', 2.0);
            
            setTimeout(() => {
                elements.forEach(el => el.style.animation = '');
                showToast('nt-invincible-off', 'info');
            }, 10000);
        }

        if (typedMagicWord.slice(-5) === 'magia') {
            document.body.classList.add('spin-magic');
            setTimeout(() => document.body.classList.remove('spin-magic'), 2000);
        }
        
        if (typedMagicWord.slice(-5) === 'rower') {
            const bike = document.createElement('div');
            bike.textContent = '🚴‍♂️💨👨‍❤️‍👨';
            bike.className = 'bike-easter-egg';
            document.body.appendChild(bike);
            bike.animate([{ left: '-150px' }, { left: '100vw' }], { duration: 3000, easing: 'linear' }).onfinish = () => bike.remove();
        }
        
        if (typedMagicWord.length > 30) typedMagicWord = typedMagicWord.slice(-20);

        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                startMatrixEffect();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }

        if(e.key === 'Escape' && matrixInterval) stopMatrixEffect();
    });

    if (localStorage.getItem('portfolioTheme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
    const tToggle = document.getElementById('theme-toggle');
    if (tToggle) {
        tToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            tToggle.textContent = translations[currentLanguage][isDark ? "theme-light" : "theme-dark"];
            localStorage.setItem('portfolioTheme', isDark ? 'dark' : 'light');
            showToast(isDark ? 'nt-theme-dark' : 'nt-theme-light', 'info');
        });
    }

    applyTranslations('pl');

    let isLeet = false;
    const leetMap = { 'a': '4', 'e': '3', 'i': '1', 'o': '0', 's': '5', 't': '7', 'A': '4', 'E': '3', 'I': '1', 'O': '0', 'S': '5', 'T': '7' };
    
    function walkTextNodes(node, func) {
        if (node.nodeType === 3) func(node);
        else if (node.nodeType === 1 && !['SCRIPT', 'STYLE'].includes(node.nodeName)) {
            node.childNodes.forEach(child => walkTextNodes(child, func));
        }
    }

    const leetBtn = document.getElementById('leet-btn');
    if (leetBtn) {
        leetBtn.addEventListener('click', () => {
            isLeet = !isLeet;
            walkTextNodes(document.body, (node) => {
                if (!node.originalText) node.originalText = node.nodeValue;
                node.nodeValue = isLeet ? node.nodeValue.replace(/[aeiostAEIOST]/g, m => leetMap[m]) : node.originalText;
            });
        });
    }

    const sysInfoEl = document.getElementById('sys-info');
    if (sysInfoEl) {
        const ua = navigator.userAgent;
        let os = "Nieznany OS", browser = "Inna";
        if (ua.includes("Win")) os = "Windows";
        if (ua.includes("Mac")) os = "MacOS";
        if (ua.includes("Linux")) os = "Linux";
        if (ua.includes("Android")) os = "Android";
        if (ua.includes("Chrome")) browser = "Chrome";
        else if (ua.includes("Firefox")) browser = "Firefox";
        else if (ua.includes("Safari")) browser = "Safari";
        else if (ua.includes("Edge")) browser = "Edge";
        sysInfoEl.textContent = `${os} | ${browser}`;
    }

    const batteryInfoEl = document.getElementById('battery-info');
    if (batteryInfoEl && navigator.getBattery) {
        navigator.getBattery().then(bat => {
            const updateBattery = () => batteryInfoEl.textContent = `${Math.round(bat.level * 100)}% ${bat.charging ? '⚡' : ''}`;
            updateBattery();
            bat.addEventListener('levelchange', updateBattery);
            bat.addEventListener('chargingchange', updateBattery);
        });
    }

    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectTiles = document.querySelectorAll('.project-tile');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filterValue = btn.getAttribute('data-filter');
            projectTiles.forEach(tile => {
                tile.style.display = (filterValue === 'all' || tile.getAttribute('data-category') === filterValue) ? 'block' : 'none';
            });
        });
    });

    const projectModal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const closeModalBtn = document.getElementById('close-modal');

    if (projectModal && projectTiles && closeModalBtn) {
        projectTiles.forEach(tile => {
            tile.addEventListener('click', (e) => {
                if(e.target.closest('.window')) return; 
                const title = tile.querySelector('h3').textContent;
                const desc = tile.getAttribute('data-description');
                modalTitle.textContent = title;
                modalDesc.textContent = desc;
                projectModal.classList.add('active');
            });
        });

        closeModalBtn.addEventListener('click', () => projectModal.classList.remove('active'));
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) projectModal.classList.remove('active');
        });
    }

    const copyBtn = document.getElementById('copy-email-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const textToCopy = copyBtn.getAttribute('data-text');
            navigator.clipboard.writeText(textToCopy).then(() => {
                showToast('nt-copy-success', 'success');
            });
        });
    }

    const actionCenterBtn = document.getElementById('action-center-btn');
    const actionCenter = document.getElementById('action-center');
    const closeActionCenterBtn = document.getElementById('close-action-center');
    
    if (actionCenterBtn && actionCenter) {
        actionCenterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            actionCenter.classList.add('open');
        });
    }
    
    if (closeActionCenterBtn && actionCenter) {
        closeActionCenterBtn.addEventListener('click', () => {
            actionCenter.classList.remove('open');
        });
    }

    const contextMenu = document.getElementById('custom-context-menu');
    document.addEventListener('contextmenu', (e) => {
        if (e.target.closest('.window') || e.target.closest('.modal')) return;
        e.preventDefault();
        contextMenu.style.display = 'block';
        contextMenu.style.left = `${e.pageX}px`;
        contextMenu.style.top = `${e.pageY}px`;
    });

    document.addEventListener('click', (e) => {
        if(e.button !== 2) contextMenu.style.display = 'none';
    });

    const updateModal = document.getElementById('update-modal');
    const progressBar = document.getElementById('update-progress');
    const updateStatusText = document.getElementById('update-status');

    function simulateUpdate() {
        updateModal.classList.add('active');
        let progress = 0;
        progressBar.style.width = '0%';
        updateStatusText.textContent = '0%';

        const interval = setInterval(() => {
            progress += Math.random() * 5;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                updateStatusText.textContent = '100%';
                progressBar.style.width = '100%';
                
                setTimeout(() => {
                    const fail = Math.random() > 0.8;
                    if(fail) {
                        showToast('update-fail', 'error');
                        setMode('retro-mode');
                    } else {
                        showToast('update-success', 'success');
                    }
                    updateModal.classList.remove('active');
                }, 1000);
            } else {
                updateStatusText.textContent = Math.floor(progress) + '%';
                progressBar.style.width = progress + '%';
            }
        }, 150);
    }

    document.getElementById('ctx-refresh').addEventListener('click', () => location.reload());
    document.getElementById('ctx-terminal').addEventListener('click', () => openWindow('window-terminal'));
    document.getElementById('ctx-update').addEventListener('click', simulateUpdate);
    document.getElementById('ctx-personal').addEventListener('click', () => {
        if (actionCenter) actionCenter.classList.add('open');
    });

    const termInput = document.getElementById('term-input');
    const termOutput = document.getElementById('term-output');
    
    if (termInput) {
        termInput.addEventListener('keydown', (e) => {
            if(e.key === 'Enter') {
                const val = termInput.value.trim().toLowerCase();
                const cmdLine = document.createElement('p');
                cmdLine.innerHTML = `<span class="prompt">admin@aleksander-os:~$</span> ${termInput.value.trim()}`;
                termOutput.appendChild(cmdLine);
                
                const responseLine = document.createElement('p');
                if(val === 'help') responseLine.innerHTML = "Available cmds:<br>- help: list commands<br>- whoami: show user info<br>- clear: clear screen<br>- wobble: trigger system wobble<br>- theme [dark|light]: change theme<br>- neofetch: show system info<br>- ignacy: open secret boyOS section";
                else if(val === 'whoami') responseLine.textContent = "Aleksander Zientara - IT Student, Cyclist, LGBTQ+ Advocate.";
                else if(val === 'clear') termOutput.innerHTML = '';
                else if(val === 'wobble') {
                    document.body.classList.add('wobble-glitch');
                    setTimeout(() => document.body.classList.remove('wobble-glitch'), 500);
                    responseLine.textContent = "System wobble triggered.";
                } 
                else if(val === 'ignacy') {
                    openWindow('window-boys');
                    document.getElementById('boys-menu').style.display = 'none';
                    document.getElementById('boys-content').style.display = 'block';
                    document.querySelectorAll('.boy-section').forEach(s => s.style.display = 'none');
                    document.getElementById('boy-ignacy').style.display = 'block';
                    responseLine.textContent = "Opening Ignacy's section...";
                }
                else if(val.startsWith('theme ')) {
                    const theme = val.substring(6);
                    if(theme === 'dark') { document.body.classList.add('dark-mode'); localStorage.setItem('portfolioTheme', 'dark'); responseLine.textContent = "Theme set to dark."; }
                    else if(theme === 'light') { document.body.classList.remove('dark-mode'); localStorage.setItem('portfolioTheme', 'light'); responseLine.textContent = "Theme set to light."; }
                    else responseLine.textContent = `Unknown theme: ${theme}`;
                }
                else if(val === 'sudo rm -rf /*') {
                    showToast('nt-rm-rf', 'error');
                    document.body.classList.add('wobble-glitch');
                    responseLine.textContent = "Password required: **********";
                    responseLine.style.color = 'red';
                    setTimeout(() => {
                        walkTextNodes(document.body, (node) => node.nodeValue = "DELETED ");
                        document.body.style.background = 'black';
                        setTimeout(() => location.reload(), 2000);
                    }, 1000);
                }
                else if(val === 'neofetch') {
                    responseLine.innerHTML = [
                        "  ./o.           admin@aleksander-os",
                        " ./sssso-        -------------------",
                        " ':ssssssso'       OS: Aleksander OS v2.1 Pro",
                        " '/ssssssssssso.     Kernel: IT_Student_x86_64",
                        "  .sssssssssssssss'    Uptime: " + String(Math.floor(seconds / 60)).padStart(2, '0') + " mins",
                        " 'sssssssssssssssss     Packages: 🏳️‍🌈, 🚲, 💻, SCSS, JS",
                        " ssssssssssssssssss'    Shell: AlekShell v1.0",
                        " ssssssssssssssssss+    Theme: Metro Glass",
                        " 'sssssssssssssssss     Advocacy: LGBTQ+",
                        "  .sssssssssssssss'    Partner: Ignacy ❤️",
                        "   '/ssssssssssso.     Passions: Cycling Aero",
                        "     ':ssssssso'",
                        "       ./sssso-",
                        "         ./o."
                    ].join('<br>');
                }
                else if(val !== '') responseLine.textContent = `Command not found: ${val}`;
                
                if(val !== 'clear' && val !== 'sudo rm -rf /*') termOutput.appendChild(responseLine);
                termInput.value = '';
                const contentDiv = termInput.closest('.window-content');
                contentDiv.scrollTop = contentDiv.scrollHeight;
            }
        });
    }

    const snakeTile = document.getElementById('snake-tile');
    let snakeGameRunning = false;

    if(snakeTile) {
        snakeTile.addEventListener('click', (e) => {
            if(e.target.closest('.project-tile')) openWindow('window-snake');
        });
    }

    const snakeCanvas = document.getElementById('snake-canvas');
    const startSnakeBtn = document.getElementById('start-snake-btn');
    const sCtx = snakeCanvas ? snakeCanvas.getContext('2d') : null;
    
    let snake = [];
    let snakeDx = 10;
    let snakeDy = 0;
    let snakeFood = {x: 0, y: 0};
    let snakeScore = 0;

    function drawSnake() {
        if(!sCtx) return;
        sCtx.fillStyle = '#00ff00';
        snake.forEach(part => sCtx.fillRect(part.x, part.y, 10, 10));
    }

    function spawnFood() {
        snakeFood = {
            x: Math.floor(Math.random() * 29) * 10,
            y: Math.floor(Math.random() * 29) * 10
        };
    }

    function moveSnake() {
        if(!snakeGameRunning) return;
        const head = {x: snake[0].x + snakeDx, y: snake[0].y + snakeDy};
        snake.unshift(head);
        if(head.x === snakeFood.x && head.y === snakeFood.y) {
            snakeScore++;
            spawnFood();
        } else {
            snake.pop();
        }
    }

    function checkSnakeCollision() {
        const head = snake[0];
        if(head.x < 0 || head.x >= 300 || head.y < 0 || head.y >= 300) return true;
        for(let i=1; i<snake.length; i++) {
            if(head.x === snake[i].x && head.y === snake[i].y) return true;
        }
        return false;
    }

    function gameLoop() {
        if(checkSnakeCollision()) {
            snakeGameRunning = false;
            if(sCtx) {
                sCtx.fillStyle = 'white';
                sCtx.font = '20px sans-serif';
                sCtx.fillText('Koniec gry! Wynik: ' + snakeScore, 40, 150);
            }
            return;
        }
        setTimeout(() => {
            if(!snakeGameRunning) return;
            if(sCtx) {
                sCtx.clearRect(0, 0, 300, 300);
                sCtx.fillStyle = 'red';
                sCtx.fillRect(snakeFood.x, snakeFood.y, 10, 10);
            }
            moveSnake();
            drawSnake();
            if(sCtx) {
                sCtx.fillStyle = 'white';
                sCtx.font = '12px sans-serif';
                sCtx.fillText('Wynik: ' + snakeScore, 10, 20);
            }
            gameLoop();
        }, 80);
    }

    if (startSnakeBtn) {
        startSnakeBtn.addEventListener('click', () => {
            snake = [{x: 150, y: 150}];
            snakeDx = 10;
            snakeDy = 0;
            snakeScore = 0;
            spawnFood();
            snakeGameRunning = true;
            gameLoop();
        });
    }

    document.addEventListener('keydown', e => {
        if(!snakeGameRunning) return;
        if(e.key === 'ArrowUp' && snakeDy !== 10) { snakeDx = 0; snakeDy = -10; e.preventDefault(); }
        if(e.key === 'ArrowDown' && snakeDy !== -10) { snakeDx = 0; snakeDy = 10; e.preventDefault(); }
        if(e.key === 'ArrowLeft' && snakeDx !== 10) { snakeDx = -10; snakeDy = 0; e.preventDefault(); }
        if(e.key === 'ArrowRight' && snakeDx !== -10) { snakeDx = 10; snakeDy = 0; e.preventDefault(); }
    });

    const bttBtn = document.getElementById('back-to-top');
    if (bttBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) bttBtn.classList.add('visible');
            else bttBtn.classList.remove('visible');
        });
        bttBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});
