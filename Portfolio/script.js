document.addEventListener('DOMContentLoaded', () => {
    let topZIndex = 1000;

    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    let soundEnabled = true;

    function playClickSound(freq1 = 800, freq2 = 300, type = 'sine', duration = 0.1) {
        if (!soundEnabled) return;
        if (document.body.classList.contains('minecraft-mode')) return;
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
            "opt-stretch": "Rozciąganie (Stretch)",
            "opt-pop": "Wyskakiwanie (Pop)",
            "opt-wiggle": "Pajacyk (Wiggle)",
            "opt-squeeze": "Ściskanie (Squeeze)",
            "opt-roll": "Toczenie (Roll)",
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
            "nt-invincible-off": "Tryb Invincible wyłączony.",
            "ctx-baldi": "Tryb Baldi",
            "nt-mode-baldi": "Witaj w szkole Baldi'ego!",
            "ctx-minecraft": "Tryb Minecraft",
            "nt-mode-minecraft": "Witaj w świecie z klocków!"
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
            "opt-stretch": "Stretch",
            "opt-pop": "Pop",
            "opt-wiggle": "Wiggle",
            "opt-squeeze": "Squeeze",
            "opt-roll": "Roll",
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
            "nt-invincible-off": "Invincible mode deactivated.",
            "ctx-baldi": "Baldi Mode",
            "nt-mode-baldi": "Welcome to Baldi's Basics!",
            "ctx-minecraft": "Minecraft Mode",
            "nt-mode-minecraft": "Welcome to the blocky world!"
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
        if (dynamicValue) message += dynamicValue;

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;

        let icon = 'ℹ️';
        if (type === 'success') icon = '✅';
        if (type === 'warning') icon = '⚠️';
        if (type === 'error') icon = '🛑';

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
    if (clockElement) {
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
            document.querySelectorAll('.tile').forEach(tile => {
                tile.style.background = e.target.value;
            });
            showToast('color-btn', 'success');
        });
    }

    const randomColorBtn = document.getElementById('random-color-btn');
    if (randomColorBtn) {
        randomColorBtn.addEventListener('click', () => {
            const colors = ['#0078d4', '#107c41', '#5c2d91', '#d83b01', '#008272', '#b81b1b', '#ffb900', '#e3008c', '#00cc6a', '#00bcf2'];
            document.querySelectorAll('.tile').forEach(tile => {
                tile.style.background = colors[Math.floor(Math.random() * colors.length)];
            });
            showToast('color-btn', 'success');
        });
    }

    const modes = ['dark-mode', 'hacker-mode', 'cyberpunk-mode', 'retro-mode', 'baldi-mode', 'minecraft-mode'];
    function setMode(modeToEnable) {
        modes.forEach(m => document.body.classList.remove(m));

        const mcSelect = document.getElementById('minecraft-music-select');
        if (mcSelect) mcSelect.style.display = 'none';

        let mcAudio = document.getElementById('minecraft-audio');
        if (mcAudio) {
            mcAudio.src = '';
            mcAudio.remove();
        }

        const hackerTools = document.getElementById('hacker-tools-panel');
        if (hackerTools) hackerTools.style.display = 'none';

        const retroSelect = document.getElementById('retro-music-select');
        if (retroSelect) retroSelect.style.display = 'none';

        const retroBattleBtn = document.getElementById('retro-battle-btn');
        if (retroBattleBtn) retroBattleBtn.style.display = 'none';

        let retroAudio = document.getElementById('retro-audio');
        if (retroAudio) {
            retroAudio.src = '';
            retroAudio.remove();
        }

        let baldiAudio = document.getElementById('baldi-audio');
        if (baldiAudio) {
            baldiAudio.src = '';
            baldiAudio.remove();
        }
        let baldiMathBtn = document.getElementById('baldi-math-btn');
        if (baldiMathBtn) baldiMathBtn.style.display = 'none';
        let baldiMathWin = document.getElementById('window-baldi-math');
        if (baldiMathWin) baldiMathWin.style.display = 'none';

        let hackerAudio = document.getElementById('hacker-audio');
        if (hackerAudio) {
            hackerAudio.src = '';
            hackerAudio.remove();
        }
        const hkTrailStyle = document.getElementById('hacker-trail-style');
        if (hkTrailStyle) hkTrailStyle.remove();
        if (window._hkCursorTrail) {
            document.removeEventListener('mousemove', window._hkCursorTrail);
            window._hkCursorTrail = null;
        }
        document.querySelectorAll('.hk-particle').forEach(d => d.remove());
        const hkStatusBar = document.getElementById('hacker-status-bar');
        if (hkStatusBar) hkStatusBar.remove();
        const hkNetWidget = document.getElementById('hacker-net-widget');
        if (hkNetWidget) hkNetWidget.remove();

        // ── Cyberpunk cleanup ───────────────────────────────────────────────────
        const cpAudioOld = document.getElementById('cyberpunk-audio');
        if (cpAudioOld) { cpAudioOld.src = ''; cpAudioOld.remove(); }
        const cpRain = document.getElementById('cp-rain');
        if (cpRain) cpRain.remove();
        const cpBar = document.getElementById('cp-status-bar');
        if (cpBar) cpBar.remove();
        const cpGamesPanel = document.getElementById('cp-games-panel');
        if (cpGamesPanel) cpGamesPanel.style.display = 'none';
        // hide all cp windows
        ['window-netrunner','window-cp-pong','window-cp-type'].forEach(id => {
            const w = document.getElementById(id);
            if (w) w.style.display = 'none';
        });
        if (window._cpClockId) { clearInterval(window._cpClockId); window._cpClockId = null; }
        if (window._cpRainAF)  { cancelAnimationFrame(window._cpRainAF); window._cpRainAF = null; }
        if (window._cpCursorTrail) { document.removeEventListener('mousemove', window._cpCursorTrail); window._cpCursorTrail = null; }
        // remove any lingering trail dots
        document.querySelectorAll('.cp-trail-dot').forEach(d => d.remove());


        if (modeToEnable) {
            document.body.classList.add(modeToEnable);

            let toastKey = '';
            let type = 'info';
            if (modeToEnable === 'hacker-mode') {
                toastKey = 'nt-mode-hacker';
                type = 'warning';
                if (hackerTools) hackerTools.style.display = 'flex';

                hackerAudio = document.createElement('iframe');
                hackerAudio.id = 'hacker-audio';
                hackerAudio.style.display = 'none';
                hackerAudio.setAttribute('allow', 'autoplay');
                hackerAudio.src = 'https://www.youtube.com/embed/Y8w-2lzM-C4?autoplay=1&controls=0&showinfo=0&autohide=1&list=PLfuFOjomlToPlken_o2gY2GSYaG3j6Nh2';
                document.body.appendChild(hackerAudio);

                if (typeof openWindow === 'function') {
                    openWindow('window-firewall-breach');
                    if (typeof startFirewallMiniGame === 'function') startFirewallMiniGame();
                }

                // === HACKER MODE AMBIENT EFFECTS ===
                // 1) Green cursor particle trail
                const trailStyle = document.createElement('style');
                trailStyle.id = 'hacker-trail-style';
                trailStyle.textContent = `
                    @keyframes hk-particle-fade { 0%{opacity:0.9;transform:scale(1)} 100%{opacity:0;transform:scale(0.1)} }
                    .hk-particle { position:fixed; pointer-events:none; border-radius:50%; animation: hk-particle-fade 0.6s ease forwards; z-index:99999; }
                `;
                document.head.appendChild(trailStyle);
                function spawnParticle(x, y) {
                    const p = document.createElement('div');
                    p.className = 'hk-particle';
                    const size = Math.random() * 6 + 3;
                    p.style.cssText = `left:${x}px;top:${y}px;width:${size}px;height:${size}px;background:hsl(${120 + Math.random() * 40},100%,${50 + Math.random() * 20}%);box-shadow:0 0 ${size * 2}px #0f0;margin-left:${(Math.random() - 0.5) * 16}px;margin-top:${(Math.random() - 0.5) * 16}px;`;
                    document.body.appendChild(p);
                    setTimeout(() => p.remove(), 620);
                }
                let lastParticle = 0;
                function hackerMouseMove(e) {
                    if (!document.body.classList.contains('hacker-mode')) { document.removeEventListener('mousemove', hackerMouseMove); return; }
                    const now = Date.now();
                    if (now - lastParticle > 40) {
                        lastParticle = now;
                        for (let i = 0; i < 2; i++) spawnParticle(e.clientX, e.clientY);
                    }
                }
                document.addEventListener('mousemove', hackerMouseMove);

                // 2) Bottom breach status bar
                const statusBar = document.createElement('div');
                statusBar.id = 'hacker-status-bar';
                statusBar.style.cssText = 'position:fixed;bottom:0;left:0;right:0;height:22px;background:#000;border-top:1px solid #0f04;font-family:monospace;font-size:0.6rem;color:#0f0;display:flex;align-items:center;padding:0 10px;gap:20px;z-index:99998;overflow:hidden;white-space:nowrap;pointer-events:none;';
                document.body.appendChild(statusBar);
                const breachMsgs = [
                    'SCANNING NETWORK...', 'PORTS: 22,80,443,8080 OPEN', 'ARP POISONING ACTIVE',
                    'SNIFFING PACKETS...', 'SSL STRIP ENGAGED', 'DNS SPOOFED',
                    'MITM PROXY RUNNING', 'PAYLOAD INJECTED', 'C2 CHANNEL ESTABLISHED',
                    'EXFIL RATE: 4.2MB/s', 'ROOTKIT LOADED', 'KERNEL: 0DAY APPLIED'
                ];
                let bmIdx = 0;
                function updateStatusBar() {
                    if (!document.getElementById('hacker-status-bar')) return;
                    const hexChunk = Array.from({ length: 24 }, () => Math.floor(Math.random() * 16).toString(16).toUpperCase()).join('');
                    statusBar.innerHTML = `<span style="color:#f00;">&#9632; BREACH ACTIVE</span> <span style="color:#0a0">${breachMsgs[bmIdx % breachMsgs.length]}</span> <span style="color:#444;">[${hexChunk}]</span> <span style="color:#080;margin-left:auto;">SYS:${Math.floor(Math.random() * 100)}% NET:${Math.floor(Math.random() * 100)}% RAM:${Math.floor(Math.random() * 100)}%</span>`;
                    bmIdx++;
                }
                updateStatusBar();
                const statusBarInterval = setInterval(() => {
                    if (!document.getElementById('hacker-status-bar')) { clearInterval(statusBarInterval); return; }
                    updateStatusBar();
                }, 1800);

                // 3) Top-left corner network widget
                const netWidget = document.createElement('div');
                netWidget.id = 'hacker-net-widget';
                netWidget.style.cssText = 'position:fixed;top:48px;left:8px;font-family:monospace;font-size:0.58rem;color:#0f0;z-index:99998;line-height:1.6;pointer-events:none;text-shadow:0 0 4px #0f0;';
                document.body.appendChild(netWidget);
                function updateNetWidget() {
                    if (!document.getElementById('hacker-net-widget')) return;
                    const rnd = () => Math.floor(Math.random() * 255);
                    netWidget.innerHTML = [
                        `<span style="color:#0a0;">&#9632;</span> TARGET: <span style="color:#ff0">${rnd()}.${rnd()}.${rnd()}.${rnd()}</span>`,
                        `<span style="color:#0a0;">&#9632;</span> PING: <span style="color:#0ff">${Math.floor(Math.random() * 8 + 1)}ms</span>`,
                        `<span style="color:#0a0;">&#9632;</span> PACKETS: <span style="color:#f0f">${(Math.random() * 9999 + 1000).toFixed(0)}</span>`,
                        `<span style="color:#0a0;">&#9632;</span> SIGNAL: <span style="color:#0f0">${'█'.repeat(Math.floor(Math.random() * 5 + 3))}${'░'.repeat(8 - Math.floor(Math.random() * 5 + 3))}</span>`,
                    ].join('<br>');
                }
                updateNetWidget();
                const netWidgetInterval = setInterval(() => {
                    if (!document.getElementById('hacker-net-widget')) { clearInterval(netWidgetInterval); return; }
                    updateNetWidget();
                }, 600);
            }
            if (modeToEnable === 'cyberpunk-mode') {
                toastKey = 'nt-mode-cyberpunk';
                type = 'info';

                // ── Music ──────────────────────────────────────────────────────────
                const cpAudio = document.createElement('iframe');
                cpAudio.id = 'cyberpunk-audio';
                cpAudio.style.display = 'none';
                cpAudio.setAttribute('allow', 'autoplay');
                cpAudio.src = 'https://www.youtube.com/embed/CHENRaquRHo?autoplay=1&controls=0&showinfo=0&autohide=1&loop=1&playlist=CHENRaquRHo';
                document.body.appendChild(cpAudio);

                // ── Neon rain canvas ───────────────────────────────────────────────
                const rain = document.createElement('canvas');
                rain.id = 'cp-rain';
                Object.assign(rain.style, {
                    position: 'fixed', top: '0', left: '0',
                    width: '100%', height: '100%',
                    pointerEvents: 'none', zIndex: '0', opacity: '0.18'
                });
                document.body.appendChild(rain);
                const rctx = rain.getContext('2d');
                rain.width  = window.innerWidth;
                rain.height = window.innerHeight;
                const COLS = Math.floor(rain.width / 16);
                const drops = Array.from({ length: COLS }, () => Math.random() * -50);
                const CP_CHARS = 'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉ01アイウエオ▓░■◆';
                let rainAF;
                function drawRain() {
                    if (!document.getElementById('cp-rain')) return;
                    rctx.fillStyle = 'rgba(5,0,20,0.15)';
                    rctx.fillRect(0, 0, rain.width, rain.height);
                    rctx.font = '14px monospace';
                    drops.forEach((y, i) => {
                        const char = CP_CHARS[Math.floor(Math.random() * CP_CHARS.length)];
                        const hue  = Math.random() > 0.85 ? 300 : 185; // magenta or cyan
                        rctx.fillStyle = `hsl(${hue},100%,65%)`;
                        rctx.fillText(char, i * 16, y * 16);
                        drops[i] = y > rain.height / 16 + Math.random() * 20 ? 0 : y + 1;
                    });
                    rainAF = requestAnimationFrame(drawRain);
                }
                drawRain();
                window._cpRainAF = rainAF;

                // ── Cyberpunk status bar ───────────────────────────────────────────
                const bar = document.createElement('div');
                bar.id = 'cp-status-bar';
                bar.innerHTML = `
                    <span id="cp-time"></span>
                    <span>◈ NEURAL-NET: <span style="color:#0ff">ONLINE</span></span>
                    <span>◈ ICE: <span style="color:#f0f">FRACTURED</span></span>
                    <span id="cp-cred">◈ CRED: <span style="color:#ff0">0</span></span>
                    <span>◈ <span style="color:#0f0;cursor:pointer" id="cp-hack-btn">[ HACK ]</span></span>`;
                Object.assign(bar.style, {
                    position: 'fixed', bottom: '0', left: '0', right: '0',
                    background: 'rgba(5,0,20,0.88)',
                    borderTop: '1px solid #f0f',
                    color: '#ccc', fontFamily: "'Share Tech Mono',monospace",
                    fontSize: '11px', display: 'flex', gap: '24px',
                    alignItems: 'center', padding: '4px 16px',
                    zIndex: '9999', letterSpacing: '0.05em',
                    boxShadow: '0 -4px 24px #f0f8'
                });
                document.body.appendChild(bar);

                // clock
                let cpCred = 0;
                function updateCpTime() {
                    const el = document.getElementById('cp-time');
                    if (!el) return;
                    const n = new Date();
                    el.textContent = `◈ ${String(n.getHours()).padStart(2,'0')}:${String(n.getMinutes()).padStart(2,'0')}:${String(n.getSeconds()).padStart(2,'0')}`;
                }
                updateCpTime();
                window._cpClockId = setInterval(() => {
                    if (!document.getElementById('cp-status-bar')) { clearInterval(window._cpClockId); return; }
                    updateCpTime();
                }, 1000);

                // hack button easter-egg
                let hackCooldown = false;
                document.getElementById('cp-hack-btn').addEventListener('click', () => {
                    if (hackCooldown) {
                        showToast('COOLDOWN ACTIVE. PLEASE WAIT.', 'error');
                        return;
                    }
                    hackCooldown = true;
                    setTimeout(() => { hackCooldown = false; }, 4000);

                    // Spawn a datapacket
                    const packet = document.createElement('div');
                    packet.textContent = '[ DATAPACK ]';
                    Object.assign(packet.style, {
                        position: 'fixed',
                        left: Math.random() * (window.innerWidth - 100) + 'px',
                        top: Math.random() * (window.innerHeight - 100) + 'px',
                        background: '#0f0', color: '#000', padding: '4px 8px',
                        fontFamily: "'Share Tech Mono',monospace", fontSize: '12px',
                        fontWeight: 'bold', cursor: 'pointer', zIndex: '99999',
                        boxShadow: '0 0 10px #0f0', borderRadius: '2px',
                        animation: 'cp-glitch 0.2s infinite'
                    });
                    
                    let packetTimer = setTimeout(() => {
                        if (packet.parentNode) {
                            packet.remove();
                            showToast('HACK FAILED. DATAPACK LOST.', 'error');
                        }
                    }, 1200); // 1.2s to catch it

                    packet.addEventListener('click', () => {
                        clearTimeout(packetTimer);
                        packet.remove();
                        cpCred += Math.floor(Math.random() * 500 + 100);
                        const credEl = document.querySelector('#cp-cred span');
                        if (credEl) credEl.textContent = cpCred.toLocaleString();
                        const msgs = ['ACCESS_GRANTED','FIREWALL_BYPASSED','ROOT_ACQUIRED','KERNEL_PWNED','ICE_MELTED','GHOST_PROTOCOL'];
                        showToast(msgs[Math.floor(Math.random() * msgs.length)] || 'HACKED', 'success');
                    });
                    
                    document.body.appendChild(packet);
                    showToast('CATCH THE DATAPACK!', 'info');
                });

                // ── Neon cursor trail ──────────────────────────────────────────────
                function cpCursorTrail(e) {
                    if (!document.body.classList.contains('cyberpunk-mode')) return;
                    const dot = document.createElement('div');
                    Object.assign(dot.style, {
                        position: 'fixed', left: e.clientX + 'px', top: e.clientY + 'px',
                        width: '6px', height: '6px', borderRadius: '50%',
                        background: Math.random() > 0.5 ? '#0ff' : '#f0f',
                        pointerEvents: 'none', zIndex: '99999',
                        transform: 'translate(-50%,-50%)',
                        transition: 'opacity 0.5s, transform 0.5s',
                        boxShadow: '0 0 8px 3px currentColor'
                    });
                    document.body.appendChild(dot);
                    requestAnimationFrame(() => { dot.style.opacity = '0'; dot.style.transform = 'translate(-50%,-50%) scale(2)'; });
                    setTimeout(() => dot.remove(), 520);
                }
                document.addEventListener('mousemove', cpCursorTrail);
                window._cpCursorTrail = cpCursorTrail;

                // ── Open Cyberpunk toolbar (games panel) ───────────────────────────
                setTimeout(() => {
                    if (document.body.classList.contains('cyberpunk-mode')) {
                        const cpPanel = document.getElementById('cp-games-panel');
                        if (cpPanel) cpPanel.style.display = 'flex';
                    }
                }, 400);
            }
            if (modeToEnable === 'retro-mode') {
                toastKey = 'nt-mode-retro';
                type = 'success';
                if (retroSelect) retroSelect.style.display = 'block';
                if (retroBattleBtn) retroBattleBtn.style.display = 'block';

                retroAudio = document.createElement('iframe');
                retroAudio.id = 'retro-audio';
                retroAudio.style.display = 'none';
                retroAudio.setAttribute('allow', 'autoplay');
                retroAudio.src = 'https://www.youtube.com/embed/LQw-a8sApLQ?autoplay=1&controls=0&showinfo=0&autohide=1';
                document.body.appendChild(retroAudio);
            }
            if (modeToEnable === 'baldi-mode') {
                toastKey = 'nt-mode-baldi';
                type = 'error';

                baldiAudio = document.createElement('iframe');
                baldiAudio.id = 'baldi-audio';
                baldiAudio.style.display = 'none';
                baldiAudio.setAttribute('allow', 'autoplay');
                baldiAudio.src = 'https://www.youtube.com/embed/JyucizbsCV4?autoplay=1&controls=0&showinfo=0&autohide=1&loop=1&playlist=JyucizbsCV4&enablejsapi=1';
                document.body.appendChild(baldiAudio);

                // Add button for math game
                let mathBtn = document.getElementById('baldi-math-btn');
                if (!mathBtn) {
                    mathBtn = document.createElement('button');
                    mathBtn.id = 'baldi-math-btn';
                    mathBtn.className = 'action-btn';
                    mathBtn.textContent = "SOLVE MATH!";
                    mathBtn.style.cssText = 'display:none; position:fixed; top:70px; left:20px; z-index:10000; padding:10px; font-weight:bold; font-size:1.2rem; background:red; color:yellow; border:3px solid blue; cursor:pointer;';
                    document.body.appendChild(mathBtn);
                    
                    mathBtn.addEventListener('click', () => {
                        let win = document.getElementById('window-baldi-math');
                        if (!win) {
                            win = document.createElement('div');
                            win.id = 'window-baldi-math';
                            win.className = 'window';
                            win.style.cssText = 'width:300px; height:250px; display:none; position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); background:yellow; border:5px solid green; border-radius:0; z-index:10005;';
                            win.innerHTML = `
                                <div class="window-header" style="background:green; color:yellow; font-weight:bold;">
                                    <span>Math Machine</span>
                                    <button onclick="document.getElementById('window-baldi-math').style.display='none'" style="background:red; color:yellow; border:none; cursor:pointer; font-weight:bold; padding:0 8px;">X</button>
                                </div>
                                <div class="window-content" style="display:flex; flex-direction:column; align-items:center; justify-content:center; gap:15px; padding:20px; text-align:center;">
                                    <div id="baldi-q" style="font-size:2rem; font-weight:bold; color:red;"></div>
                                    <input id="baldi-a" type="number" style="font-size:1.5rem; width:100px; text-align:center; border:2px solid blue;">
                                    <button id="baldi-submit" style="background:blue; color:white; font-size:1.2rem; font-weight:bold; cursor:pointer; padding:5px 10px;">THINK!</button>
                                </div>
                            `;
                            document.body.appendChild(win);
                            
                            let num1, num2;
                            function nextQ() {
                                num1 = Math.floor(Math.random() * 20);
                                num2 = Math.floor(Math.random() * 20);
                                win.querySelector('#baldi-q').textContent = `${num1} + ${num2} =`;
                                win.querySelector('#baldi-a').value = '';
                                win.querySelector('#baldi-a').focus();
                            }
                            
                            win.querySelector('#baldi-submit').addEventListener('click', () => {
                                const ans = parseInt(win.querySelector('#baldi-a').value);
                                if (ans === num1 + num2) {
                                    showToast("WOW! YOU EXIST!", 'success');
                                    nextQ();
                                } else {
                                    showToast("I HEAR EVERY DOOR YOU OPEN...", 'error');
                                    const audio = document.createElement('audio');
                                    audio.src = 'https://www.myinstants.com/media/sounds/baldi-ruler-slap.mp3';
                                    audio.play().catch(e=>console.log(e));
                                    document.body.style.animation = 'wobble-glitch 0.5s';
                                    setTimeout(() => document.body.style.animation='', 500);
                                }
                            });
                            
                            nextQ();
                        }
                        win.style.display = 'flex';
                        win.querySelector('#baldi-a').focus();
                    });
                }
                mathBtn.style.display = 'block';

                // Baldi ambient math problems
                const baldiMathInterval = setInterval(() => {
                    if (!document.body.classList.contains('baldi-mode')) { clearInterval(baldiMathInterval); return; }
                    const prob = document.createElement('div');
                    prob.textContent = `${Math.floor(Math.random()*10)} ${['+','-','*'][Math.floor(Math.random()*3)]} ${Math.floor(Math.random()*10)} = ?`;
                    Object.assign(prob.style, {
                        position: 'fixed', left: Math.random()*(window.innerWidth-150) + 'px',
                        top: Math.random()*(window.innerHeight-100) + 'px',
                        fontSize: (Math.random()*2+1)+'rem', color: ['#f00','#00f','#0f0','#ff0'][Math.floor(Math.random()*4)],
                        fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif', fontWeight: 'bold',
                        pointerEvents: 'none', zIndex: 99999,
                        animation: 'wobble-bounce 1s infinite'
                    });
                    document.body.appendChild(prob);
                    setTimeout(() => prob.remove(), 2500);
                }, 1500);
            }
            if (modeToEnable === 'minecraft-mode') {
                toastKey = 'nt-mode-minecraft';
                type = 'success';
                if (mcSelect) mcSelect.style.display = 'block';
                const startTime = mcSelect ? mcSelect.value : '0';

                mcAudio = document.createElement('iframe');
                mcAudio.id = 'minecraft-audio';
                mcAudio.style.display = 'none';
                mcAudio.setAttribute('allow', 'autoplay');
                mcAudio.src = `https://www.youtube.com/embed/iMCwrCC6AcM?autoplay=1&controls=0&showinfo=0&autohide=1&start=${startTime}`;
                document.body.appendChild(mcAudio);
            }
            showToast(toastKey, type);
        } else {
            showToast('nt-mode-normal', 'info');
        }
    }

    const hackerBtn = document.getElementById('hacker-btn');
    if (hackerBtn) hackerBtn.addEventListener('click', () => setMode(document.body.classList.contains('hacker-mode') ? null : 'hacker-mode'));

    const cyberpunkBtn = document.getElementById('cyberpunk-btn');
    if (cyberpunkBtn) cyberpunkBtn.addEventListener('click', () => setMode(document.body.classList.contains('cyberpunk-mode') ? null : 'cyberpunk-mode'));

    const retroBtn = document.getElementById('retro-btn');
    if (retroBtn) retroBtn.addEventListener('click', () => setMode(document.body.classList.contains('retro-mode') ? null : 'retro-mode'));

    const baldiBtn = document.getElementById('baldi-btn');
    if (baldiBtn) baldiBtn.addEventListener('click', () => setMode(document.body.classList.contains('baldi-mode') ? null : 'baldi-mode'));

    const minecraftBtn = document.getElementById('minecraft-btn');
    if (minecraftBtn) minecraftBtn.addEventListener('click', () => setMode(document.body.classList.contains('minecraft-mode') ? null : 'minecraft-mode'));

    const mcMusicSelect = document.getElementById('minecraft-music-select');
    if (mcMusicSelect) {
        mcMusicSelect.addEventListener('change', (e) => {
            const mcAudio = document.getElementById('minecraft-audio');
            if (mcAudio && document.body.classList.contains('minecraft-mode')) {
                mcAudio.src = `https://www.youtube.com/embed/iMCwrCC6AcM?autoplay=1&controls=0&showinfo=0&autohide=1&start=${e.target.value}`;
            }
        });
    }

    const retroMusicSelect = document.getElementById('retro-music-select');
    if (retroMusicSelect) {
        retroMusicSelect.addEventListener('change', (e) => {
            const retroAudio = document.getElementById('retro-audio');
            if (retroAudio && document.body.classList.contains('retro-mode')) {
                retroAudio.src = `https://www.youtube.com/embed/${e.target.value}?autoplay=1&controls=0&showinfo=0&autohide=1`;
            }
        });
    }

    document.querySelectorAll('.tile, .action-btn, .theme-btn').forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (document.body.classList.contains('hacker-mode') && typeof soundEnabled !== 'undefined' && soundEnabled) {
                try {
                    const AudioContext = window.AudioContext || window.webkitAudioContext;
                    if (!window.hackerHoverCtx) window.hackerHoverCtx = new AudioContext();
                    const ctx = window.hackerHoverCtx;
                    if (ctx.state === 'suspended') ctx.resume();

                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();

                    osc.type = 'square';
                    osc.frequency.setValueAtTime(800 + Math.random() * 400, ctx.currentTime);

                    gain.gain.setValueAtTime(0, ctx.currentTime);
                    gain.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.01);
                    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

                    osc.connect(gain);
                    gain.connect(ctx.destination);

                    osc.start();
                    osc.stop(ctx.currentTime + 0.05);
                } catch (e) { }
            }
        });
    });

    let firewallInterval = null;
    let firewallProgress = 0;
    let firewallListener = null;

    window.startFirewallMiniGame = function () {
        firewallProgress = 0;
        const progressBar = document.getElementById('firewall-progress-bar');
        const progressText = document.getElementById('firewall-progress-text');
        const statusText = document.getElementById('firewall-status-text');

        if (progressBar) progressBar.style.width = '0%';
        if (progressText) progressText.innerText = '0%';
        if (statusText) {
            statusText.innerText = '';
            statusText.style.color = 'red';
        }

        if (firewallListener) document.removeEventListener('keydown', firewallListener);
        if (firewallInterval) clearInterval(firewallInterval);

        firewallListener = (e) => {
            if (!document.body.classList.contains('hacker-mode') || firewallProgress >= 100) return;
            firewallProgress += 5;

            if (typeof soundEnabled !== 'undefined' && soundEnabled) {
                try {
                    const ctx = window.AudioContext || window.webkitAudioContext;
                    if (!window.firewallCtx) window.firewallCtx = new ctx();
                    if (window.firewallCtx.state === 'suspended') window.firewallCtx.resume();
                    const osc = window.firewallCtx.createOscillator();
                    const gain = window.firewallCtx.createGain();
                    osc.type = 'square';
                    osc.frequency.setValueAtTime(400 + firewallProgress * 5, window.firewallCtx.currentTime);
                    gain.gain.setValueAtTime(0, window.firewallCtx.currentTime);
                    gain.gain.linearRampToValueAtTime(0.05, window.firewallCtx.currentTime + 0.01);
                    gain.gain.linearRampToValueAtTime(0, window.firewallCtx.currentTime + 0.05);
                    osc.connect(gain);
                    gain.connect(window.firewallCtx.destination);
                    osc.start();
                    osc.stop(window.firewallCtx.currentTime + 0.05);
                } catch (err) { }
            }

            if (firewallProgress >= 100) {
                firewallProgress = 100;
                document.removeEventListener('keydown', firewallListener);
                clearInterval(firewallInterval);
                if (statusText) {
                    statusText.innerText = "ACCESS GRANTED. FIREWALL BREACHED.";
                    statusText.style.color = "#0f0";
                }

                document.body.style.transform = 'scale(0.95)';
                document.body.style.filter = 'hue-rotate(180deg)';
                setTimeout(() => {
                    document.body.style.transform = '';
                    document.body.style.filter = '';
                }, 1000);
            }

            if (progressBar) progressBar.style.width = firewallProgress + '%';
            if (progressText) progressText.innerText = Math.floor(firewallProgress) + '%';
        };

        document.addEventListener('keydown', firewallListener);

        firewallInterval = setInterval(() => {
            if (firewallProgress > 0 && firewallProgress < 100) {
                firewallProgress -= 2;
                if (firewallProgress < 0) firewallProgress = 0;
                if (progressBar) progressBar.style.width = firewallProgress + '%';
                if (progressText) progressText.innerText = Math.floor(firewallProgress) + '%';
            }
        }, 100);
    };

    let atlastobyUIInterval = null;
    let atlastobyUIInterval2 = null;
    let atlastobyKeyHandler = null;

    function atlastobyWin() {
        const statusEl = document.getElementById('atlastoby-status');
        const timerBar = document.getElementById('atlastoby-timer-bar');
        if (atlastobyUIInterval) clearInterval(atlastobyUIInterval);
        if (atlastobyUIInterval2) clearInterval(atlastobyUIInterval2);
        if (atlastobyKeyHandler) { document.removeEventListener('keydown', atlastobyKeyHandler); atlastobyKeyHandler = null; }
        const contentEl = document.getElementById('atlastoby-game-content');

        // === STAGE 1: Reset bar to 0 and show "DECRYPTING..." scramble text ===
        if (statusEl) { statusEl.innerText = 'ACCESS GRANTED. DECRYPTING IDENTITY...'; statusEl.style.color = '#0f0'; }
        if (timerBar) { timerBar.style.width = '0%'; timerBar.style.background = '#0f0'; timerBar.style.transition = 'none'; }

        const hexChars = '0123456789ABCDEF';
        const scrambleLines = ['SCANNING IDENTITY MATRIX...', 'BYPASSING ENCRYPTION LAYERS...', 'EXTRACTING PERSONAL DATA...', 'DECODING SECURE FILES...', 'IDENTITY CONFIRMED.'];
        let scrambleIdx = 0;

        if (contentEl) {
            contentEl.innerHTML = `
                <div style="text-align:center; padding:10px;">
                    <div id="atlastoby-decrypt-text" style="font-family:monospace; font-size:1rem; color:#0f0; text-shadow:0 0 8px #0f0; margin-bottom:15px; min-height:24px; letter-spacing:2px;"></div>
                    <div id="atlastoby-decrypt-hex" style="font-family:monospace; font-size:0.75rem; color:#0a0; word-break:break-all; max-width:380px; margin:0 auto; min-height:60px; line-height:1.4;"></div>
                </div>`;
        }

        // Animate decryption bar filling up over ~3.5 seconds
        let decryptPct = 0;
        let decryptScrambleInterval = setInterval(() => {
            // Update hex noise
            const hexEl = document.getElementById('atlastoby-decrypt-hex');
            if (hexEl) {
                let noise = '';
                for (let i = 0; i < 80; i++) noise += hexChars[Math.floor(Math.random() * 16)];
                hexEl.textContent = noise;
            }
            // Cycle through status lines
            const textEl = document.getElementById('atlastoby-decrypt-text');
            if (textEl) textEl.textContent = scrambleLines[scrambleIdx % scrambleLines.length];
            scrambleIdx++;
        }, 300);

        // Smooth bar fill
        let barFill = setInterval(() => {
            decryptPct += 1.5;
            if (decryptPct >= 100) decryptPct = 100;
            if (timerBar) timerBar.style.width = decryptPct + '%';
            if (decryptPct >= 100) {
                clearInterval(barFill);
                clearInterval(decryptScrambleInterval);
                // === STAGE 2: Bar done — reveal photo with dramatic flash ===
                setTimeout(() => {
                    if (statusEl) { statusEl.innerText = '✓ IDENTITY DECRYPTED'; statusEl.style.color = '#0ff'; statusEl.style.textShadow = '0 0 10px #0ff'; }
                    if (contentEl) {
                        contentEl.innerHTML = `
                            <div style="text-align:center; animation: none;">
                                <div id="atlastoby-photo-wrap" style="opacity:0; transition: opacity 2.5s ease; margin-bottom:14px;">
                                    <img src="atlastoby2.jpg" alt="MrSpanxAlot EXPOSED"
                                        style="max-width:200px; border:3px solid #0ff; border-radius:8px;
                                               box-shadow:0 0 25px #0ff, 0 0 50px #f0f, 0 0 80px #0ff;
                                               filter: brightness(1.2) contrast(1.1);"
                                        onerror="this.style.display='none'">
                                </div>
                                <div id="atlastoby-identity-lines" style="font-family:monospace; font-size:1.05rem; line-height:2; color:#0ff; text-shadow:0 0 5px #0ff; text-align:center; opacity:0; transition: opacity 0.6s ease;"></div>
                            </div>`;
                        // Fade in photo first
                        setTimeout(() => {
                            const photoWrap = document.getElementById('atlastoby-photo-wrap');
                            if (photoWrap) photoWrap.style.opacity = '1';
                        }, 100);
                        // Then reveal identity details line by line after photo appears
                        const lines = [
                            `<span style="color:#0f0; font-size:1.4rem;">&#10003; IDENTITY DECRYPTED</span>`,
                            `SECRET IDENTITY: <span style="color:#f0f; text-shadow:0 0 12px #f0f; font-size:1.1rem;">MrSpanxAlot</span>`,
                            `IP ADDRESS: <span style="color:#ff0;">66.249.64.12</span>`,
                            `LOCATION: <span style="color:#f90;">Underground Server Farm, Sector 7G</span>`,
                            `STATUS: <span style="color:red; animation: hacker-flicker 0.3s infinite; font-weight:bold;">&#9888; EXPOSED &#9888;</span>`
                        ];
                        const identityEl = document.getElementById('atlastoby-identity-lines');
                        let lineIdx = 0;
                        // Show identity block after photo fades in
                        setTimeout(() => {
                            if (identityEl) identityEl.style.opacity = '1';
                            function addLine() {
                                if (!identityEl || lineIdx >= lines.length) return;
                                identityEl.innerHTML += lines[lineIdx] + '<br>';
                                lineIdx++;
                                if (lineIdx < lines.length) setTimeout(addLine, 500);
                            }
                            addLine();
                        }, 900);
                    }
                }, 300);
            }
        }, 52); // ~52ms * 67 steps ≈ 3.5 seconds to fill
    }

    function atlastobyLose(reason) {
        const statusEl = document.getElementById('atlastoby-status');
        if (atlastobyUIInterval) clearInterval(atlastobyUIInterval);
        if (atlastobyUIInterval2) clearInterval(atlastobyUIInterval2);
        if (atlastobyKeyHandler) { document.removeEventListener('keydown', atlastobyKeyHandler); atlastobyKeyHandler = null; }
        if (statusEl) { statusEl.innerText = reason || 'FAILURE.'; statusEl.style.color = 'red'; }
        setTimeout(() => {
            const gameWin = document.getElementById('window-atlastoby-game');
            if (gameWin) gameWin.style.display = 'none';
            if (typeof window.triggerAtlastobyHack === 'function') window.triggerAtlastobyHack();
        }, 1000);
    }

    // ======================= GAME 1: CORE OVERRIDE (Subset Sum) =======================
    function startGame_CoreOverride(contentEl, timerBar, statusEl, titleEl) {
        if (titleEl) titleEl.textContent = '⚠ CORE OVERRIDE ⚠';

        // Easier: smaller target (30-80), only 9 nodes in 3x3, numbers are smaller
        const targetValue = Math.floor(Math.random() * 51) + 30;
        let n1 = Math.floor(Math.random() * 20) + 5;
        let n2 = Math.floor(Math.random() * 20) + 5;
        let n3 = targetValue - n1 - n2;
        // Make sure n3 is valid
        if (n3 <= 0 || n3 > 30) { n3 = targetValue - n1 - 5; n2 = 5; }
        let nodes = [n1, n2, n3];
        // Only 6 decoy nodes (9 total), small numbers so math is easy
        for (let i = 0; i < 6; i++) nodes.push(Math.floor(Math.random() * 35) + 3);
        nodes.sort(() => Math.random() - 0.5);

        contentEl.innerHTML = `
            <p style="margin-bottom: 8px; font-size: 1.1rem; color: #fff;">I want to play a game.</p>
            <p style="margin-bottom: 8px; color: #aaa; font-size: 0.85rem;">Select exactly 3 nodes that sum to the TARGET. You can deselect!</p>
            <div style="font-size: 2rem; font-weight: bold; color: #0ff; text-shadow: 0 0 10px #0ff; margin-bottom: 12px;">TARGET: <span id="atlastoby-target">${targetValue}</span></div>
            <div style="font-size: 1rem; color: #ff0; margin-bottom: 10px;">SELECTED SUM: <span id="atlastoby-sum-display">0</span></div>
            <div id="atlastoby-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; max-width:280px; margin:0 auto;"></div>`;

        const gridEl = document.getElementById('atlastoby-grid');
        let selectedNodes = [];
        let gameActive = true;

        function updateSumDisplay() {
            const sumEl = document.getElementById('atlastoby-sum-display');
            if (sumEl) {
                const s = selectedNodes.reduce((acc, b) => acc + parseInt(b.innerText), 0);
                sumEl.textContent = s;
                sumEl.style.color = s === targetValue ? '#0f0' : '#ff0';
            }
        }

        nodes.forEach(val => {
            const btn = document.createElement('button');
            btn.innerText = val;
            btn.style.cssText = 'padding:12px;background:#000;color:#f00;border:2px solid #f00;cursor:pointer;font-family:monospace;font-size:1.3rem;transition:all 0.2s;border-radius:4px;';
            btn.addEventListener('click', () => {
                if (!gameActive) return;
                if (selectedNodes.includes(btn)) {
                    selectedNodes = selectedNodes.filter(n => n !== btn);
                    btn.style.background = '#000'; btn.style.color = '#f00'; btn.style.borderColor = '#f00';
                } else {
                    if (selectedNodes.length >= 3) return;
                    selectedNodes.push(btn);
                    btn.style.background = '#f00'; btn.style.color = '#000'; btn.style.borderColor = '#ff0';
                    if (selectedNodes.length === 3) {
                        gameActive = false;
                        let sum = selectedNodes.reduce((acc, curr) => acc + parseInt(curr.innerText), 0);
                        if (sum === targetValue) { atlastobyWin(); }
                        else { atlastobyLose('FAILURE. INCORRECT SUM: ' + sum + ' ≠ ' + targetValue); }
                        return;
                    }
                }
                updateSumDisplay();
            });
            gridEl.appendChild(btn);
        });

        let timeLeft = 20.0;
        atlastobyUIInterval = setInterval(() => {
            if (!gameActive) return;
            timeLeft -= 0.1;
            let pct = (timeLeft / 20.0) * 100;
            if (pct < 0) pct = 0;
            timerBar.style.width = pct + '%';
            if (timeLeft <= 0) { gameActive = false; atlastobyLose('TIME EXPIRED.'); }
        }, 100);
    }

    // ======================= GAME 2: CRYPTO ANAGRAM =======================
    function startGame_CryptoAnagram(contentEl, timerBar, statusEl, titleEl) {
        if (titleEl) titleEl.textContent = '⚠ CRYPTO ANAGRAM ⚠';

        const words = [
            'MAINFRAME', 'FIREWALL', 'PAYLOAD', 'EXPLOIT', 'ROOTKIT',
            'MALWARE', 'BOTNET', 'TROJAN', 'PHISHING', 'BACKDOOR',
            'KEYLOGGER', 'RANSOMWARE', 'SPYWARE', 'OVERFLOW', 'INJECTION',
            'PRIVILEGE', 'SANDBOX', 'FIRMWARE', 'PROTOCOL', 'DEBUGGER'
        ];
        const word = words[Math.floor(Math.random() * words.length)];

        // Scramble the word
        let scrambled;
        do {
            scrambled = word.split('').sort(() => Math.random() - 0.5).join('');
        } while (scrambled === word);

        contentEl.innerHTML = `
            <p style="margin-bottom: 10px; font-size: 1.1rem; color: #fff;">DECRYPT THE CIPHER</p>
            <p style="margin-bottom: 10px; color: #aaa; font-size: 0.85rem;">Unscramble this hacker term before time runs out. One chance only.</p>
            <div style="font-size: 2.2rem; font-weight: bold; color: #f0f; text-shadow: 0 0 15px #f0f; margin-bottom: 20px; letter-spacing: 6px; animation: hacker-flicker 0.3s infinite;">${scrambled}</div>
            <div style="display:flex; gap:10px; justify-content:center; align-items:center;">
                <input type="text" id="atlastoby-anagram-input" autocomplete="off" spellcheck="false" 
                    style="background:#000; border:2px solid #f00; color:#0ff; font-family:monospace; font-size:1.4rem; padding:10px 15px; text-align:center; outline:none; letter-spacing:3px; width:250px; text-transform:uppercase;"
                    placeholder="TYPE ANSWER..." maxlength="${word.length}">
                <button id="atlastoby-anagram-submit" style="background:#f00; color:#000; border:none; font-family:monospace; font-weight:bold; font-size:1.2rem; padding:10px 20px; cursor:pointer; transition: all 0.2s;">SUBMIT</button>
            </div>
            <p style="margin-top:8px; color:#666; font-size:0.75rem;">${word.length} letters</p>`;

        const input = document.getElementById('atlastoby-anagram-input');
        const submitBtn = document.getElementById('atlastoby-anagram-submit');
        let gameActive = true;

        if (input) setTimeout(() => input.focus(), 100);

        function checkAnswer() {
            if (!gameActive) return;
            const answer = input ? input.value.trim().toUpperCase() : '';
            gameActive = false;
            if (answer === word) { atlastobyWin(); }
            else { atlastobyLose('WRONG! The word was: ' + word); }
        }

        if (submitBtn) submitBtn.addEventListener('click', checkAnswer);

        atlastobyKeyHandler = (e) => {
            if (e.key === 'Enter' && gameActive) checkAnswer();
        };
        document.addEventListener('keydown', atlastobyKeyHandler);

        let timeLeft = 12.0;
        atlastobyUIInterval = setInterval(() => {
            if (!gameActive) return;
            timeLeft -= 0.1;
            let pct = (timeLeft / 12.0) * 100;
            if (pct < 0) pct = 0;
            timerBar.style.width = pct + '%';
            if (timeLeft <= 0) { gameActive = false; atlastobyLose('TIME EXPIRED. The word was: ' + word); }
        }, 100);
    }

    // ======================= GAME 3: REFLEX MATRIX =======================
    function startGame_ReflexMatrix(contentEl, timerBar, statusEl, titleEl) {
        if (titleEl) titleEl.textContent = '⚠ REFLEX MATRIX ⚠';

        const gridSize = 5;
        const totalCells = gridSize * gridSize;
        const hitsNeeded = 5;
        let hits = 0;
        let gameActive = true;
        let anomalyCell = -1;

        contentEl.innerHTML = `
            <p style="margin-bottom: 8px; font-size: 1.1rem; color: #fff;">ANOMALY DETECTION</p>
            <p style="margin-bottom: 8px; color: #aaa; font-size: 0.85rem;">Click the red <span style="color:red; font-weight:bold;">X</span> anomaly when it flashes. Catch it ${hitsNeeded} times to survive.</p>
            <div style="font-size: 1.4rem; font-weight: bold; color: #0ff; text-shadow: 0 0 8px #0ff; margin-bottom: 10px;">HITS: <span id="atlastoby-reflex-hits">0</span> / ${hitsNeeded}</div>
            <div id="atlastoby-reflex-grid" style="display: grid; grid-template-columns: repeat(${gridSize}, 1fr); gap: 4px; max-width: 350px; margin: 0 auto;"></div>`;

        const gridEl = document.getElementById('atlastoby-reflex-grid');
        const cells = [];

        for (let i = 0; i < totalCells; i++) {
            const cell = document.createElement('div');
            cell.style.cssText = 'width:100%;aspect-ratio:1;background:#111;border:1px solid #333;display:flex;align-items:center;justify-content:center;font-family:monospace;font-size:1rem;color:#0a3;cursor:pointer;user-select:none;transition:background 0.1s;';
            cell.innerText = Math.random() > 0.5 ? '0' : '1';
            cell.dataset.idx = i;
            cell.addEventListener('click', () => {
                if (!gameActive) return;
                if (parseInt(cell.dataset.idx) === anomalyCell) {
                    hits++;
                    const hitsEl = document.getElementById('atlastoby-reflex-hits');
                    if (hitsEl) hitsEl.innerText = hits;
                    cell.style.background = '#0f0';
                    cell.style.color = '#000';
                    cell.innerText = '✓';
                    anomalyCell = -1;
                    setTimeout(() => {
                        cell.style.background = '#111';
                        cell.style.color = '#0a3';
                        cell.innerText = Math.random() > 0.5 ? '0' : '1';
                    }, 200);
                    if (hits >= hitsNeeded) {
                        gameActive = false;
                        atlastobyWin();
                    }
                } else {
                    // Penalty flash
                    cell.style.background = '#300';
                    setTimeout(() => { cell.style.background = '#111'; }, 150);
                }
            });
            cells.push(cell);
            gridEl.appendChild(cell);
        }

        // Randomly flash binary values in cells
        atlastobyUIInterval2 = setInterval(() => {
            if (!gameActive) return;
            for (let i = 0; i < totalCells; i++) {
                if (i !== anomalyCell) {
                    cells[i].innerText = Math.random() > 0.5 ? '0' : '1';
                    cells[i].style.color = '#0a3';
                    cells[i].style.background = '#111';
                }
            }
        }, 200);

        // Show anomaly at random intervals
        function showAnomaly() {
            if (!gameActive) return;
            // Clear previous anomaly
            if (anomalyCell >= 0 && anomalyCell < totalCells) {
                cells[anomalyCell].innerText = Math.random() > 0.5 ? '0' : '1';
                cells[anomalyCell].style.color = '#0a3';
                cells[anomalyCell].style.background = '#111';
            }
            anomalyCell = Math.floor(Math.random() * totalCells);
            cells[anomalyCell].innerText = 'X';
            cells[anomalyCell].style.color = '#f00';
            cells[anomalyCell].style.background = '#400';
            cells[anomalyCell].style.textShadow = '0 0 8px red';
            // Anomaly disappears after a short window (gets harder)
            const visibleTime = Math.max(400, 900 - hits * 100);
            setTimeout(() => {
                if (anomalyCell >= 0 && anomalyCell < totalCells && gameActive) {
                    cells[anomalyCell].innerText = Math.random() > 0.5 ? '0' : '1';
                    cells[anomalyCell].style.color = '#0a3';
                    cells[anomalyCell].style.background = '#111';
                    cells[anomalyCell].style.textShadow = 'none';
                    anomalyCell = -1;
                }
                // Schedule next anomaly
                if (gameActive) {
                    const nextDelay = Math.max(300, 800 - hits * 80) + Math.random() * 500;
                    setTimeout(showAnomaly, nextDelay);
                }
            }, visibleTime);
        }
        setTimeout(showAnomaly, 600);

        let timeLeft = 15.0;
        atlastobyUIInterval = setInterval(() => {
            if (!gameActive) return;
            timeLeft -= 0.1;
            let pct = (timeLeft / 15.0) * 100;
            if (pct < 0) pct = 0;
            timerBar.style.width = pct + '%';
            if (timeLeft <= 0) { gameActive = false; atlastobyLose('TIME EXPIRED. Only caught ' + hits + '/' + hitsNeeded + ' anomalies.'); }
        }, 100);
    }

    // ======================= GAME 4: BINARY BOMB DEFUSAL =======================
    function startGame_BinaryBomb(contentEl, timerBar, statusEl, titleEl) {
        if (titleEl) titleEl.textContent = '⚠ BINARY BOMB ⚠';

        // Generate a random binary sequence (8-12 bits)
        const seqLength = Math.floor(Math.random() * 5) + 8;
        let sequence = '';
        for (let i = 0; i < seqLength; i++) sequence += Math.random() > 0.5 ? '1' : '0';

        contentEl.innerHTML = `
            <p style="margin-bottom: 8px; font-size: 1.1rem; color: #fff;">DEFUSE THE BINARY BOMB</p>
            <p style="margin-bottom: 8px; color: #aaa; font-size: 0.85rem;">Memorize this binary code. It will disappear. Type it exactly to defuse.</p>
            <div id="atlastoby-bomb-display" style="font-size: 2.5rem; font-weight: bold; color: #f00; text-shadow: 0 0 20px #f00; margin: 15px 0; letter-spacing: 8px; animation: hacker-flicker 0.15s infinite;">${sequence}</div>
            <div id="atlastoby-bomb-input-area" style="display:none;">
                <p style="color:#ff0; margin-bottom:10px; font-size:0.9rem;">⏰ CODE HIDDEN! Type it from memory:</p>
                <div style="display:flex; gap:10px; justify-content:center; align-items:center;">
                    <input type="text" id="atlastoby-bomb-input" autocomplete="off" spellcheck="false"
                        style="background:#000; border:2px solid #f00; color:#0ff; font-family:monospace; font-size:1.6rem; padding:10px 15px; text-align:center; outline:none; letter-spacing:5px; width:280px;"
                        placeholder="01101..." maxlength="${seqLength}">
                    <button id="atlastoby-bomb-submit" style="background:#f00; color:#000; border:none; font-family:monospace; font-weight:bold; font-size:1.2rem; padding:10px 20px; cursor:pointer;">DEFUSE</button>
                </div>
                <p style="margin-top:5px; color:#666; font-size:0.75rem;">${seqLength} bits</p>
            </div>`;

        let gameActive = true;

        // Show code for 3 seconds, then hide it
        setTimeout(() => {
            if (!gameActive) return;
            const display = document.getElementById('atlastoby-bomb-display');
            const inputArea = document.getElementById('atlastoby-bomb-input-area');
            if (display) display.style.display = 'none';
            if (inputArea) inputArea.style.display = 'block';
            const inp = document.getElementById('atlastoby-bomb-input');
            if (inp) inp.focus();
        }, 3000);

        function checkBomb() {
            if (!gameActive) return;
            const inp = document.getElementById('atlastoby-bomb-input');
            const answer = inp ? inp.value.trim() : '';
            gameActive = false;
            if (answer === sequence) { atlastobyWin(); }
            else { atlastobyLose('BOOM! Wrong code: ' + answer + ' ≠ ' + sequence); }
        }

        setTimeout(() => {
            const submitBtn = document.getElementById('atlastoby-bomb-submit');
            if (submitBtn) submitBtn.addEventListener('click', checkBomb);
        }, 100);

        atlastobyKeyHandler = (e) => {
            if (e.key === 'Enter' && gameActive) checkBomb();
        };
        document.addEventListener('keydown', atlastobyKeyHandler);

        let timeLeft = 15.0;
        atlastobyUIInterval = setInterval(() => {
            if (!gameActive) return;
            timeLeft -= 0.1;
            let pct = (timeLeft / 15.0) * 100;
            if (pct < 0) pct = 0;
            timerBar.style.width = pct + '%';
            if (timeLeft <= 0) { gameActive = false; atlastobyLose('BOOM! Time expired. Code was: ' + sequence); }
        }, 100);
    }

    // ======================= GAME 5: MEMORY SEQUENCE (Simon Says) =======================
    function startGame_MemorySequence(contentEl, timerBar, statusEl, titleEl) {
        if (titleEl) titleEl.textContent = '⚠ MEMORY SEQUENCE ⚠';

        const colors = ['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff'];
        const colorNames = ['RED', 'GREEN', 'BLUE', 'YELLOW', 'PINK', 'CYAN'];
        const seqLen = Math.floor(Math.random() * 3) + 5; // 5-7 items
        const sequence = [];
        for (let i = 0; i < seqLen; i++) {
            sequence.push(Math.floor(Math.random() * colors.length));
        }

        contentEl.innerHTML = `
            <p style="margin-bottom: 8px; font-size: 1.1rem; color: #fff;">MEMORY SEQUENCE</p>
            <p style="margin-bottom: 8px; color: #aaa; font-size: 0.85rem;">Watch the sequence carefully. Then repeat it by clicking the buttons in order.</p>
            <div id="atlastoby-mem-display" style="font-size: 1.4rem; font-weight: bold; color: #0ff; text-shadow: 0 0 8px #0ff; margin-bottom: 10px; min-height: 30px;">WATCH...</div>
            <div id="atlastoby-mem-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; max-width: 300px; margin: 10px auto;">
                ${colors.map((c, i) => `<button data-ci="${i}" style="padding:15px;background:#111;color:${c};border:2px solid ${c};cursor:pointer;font-family:monospace;font-weight:bold;font-size:1rem;transition:all 0.15s;opacity:0.5;pointer-events:none;">${colorNames[i]}</button>`).join('')}
            </div>
            <div style="font-size: 0.85rem; color: #666; margin-top: 5px;">PROGRESS: <span id="atlastoby-mem-progress">0</span> / ${seqLen}</div>`;

        let gameActive = true;
        let playerIdx = 0;
        let showingSequence = true;

        // Show the sequence one by one
        const buttons = contentEl.querySelectorAll('#atlastoby-mem-grid button');
        let showStep = 0;

        function flashNext() {
            if (showStep >= sequence.length) {
                // Done showing, enable buttons
                showingSequence = false;
                const display = document.getElementById('atlastoby-mem-display');
                if (display) { display.textContent = 'YOUR TURN! Repeat the sequence.'; display.style.color = '#ff0'; }
                buttons.forEach(b => { b.style.opacity = '1'; b.style.pointerEvents = 'auto'; });
                return;
            }
            const ci = sequence[showStep];
            buttons[ci].style.opacity = '1';
            buttons[ci].style.background = colors[ci];
            buttons[ci].style.color = '#000';
            const display = document.getElementById('atlastoby-mem-display');
            if (display) display.textContent = `SHOWING: ${showStep + 1} / ${seqLen}`;
            setTimeout(() => {
                buttons[ci].style.opacity = '0.5';
                buttons[ci].style.background = '#111';
                buttons[ci].style.color = colors[ci];
                showStep++;
                setTimeout(flashNext, 300);
            }, 600);
        }
        setTimeout(flashNext, 500);

        // Player clicks
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                if (!gameActive || showingSequence) return;
                const ci = parseInt(btn.dataset.ci);
                if (ci === sequence[playerIdx]) {
                    // Correct
                    btn.style.background = colors[ci];
                    btn.style.color = '#000';
                    setTimeout(() => { btn.style.background = '#111'; btn.style.color = colors[ci]; }, 200);
                    playerIdx++;
                    const prog = document.getElementById('atlastoby-mem-progress');
                    if (prog) prog.textContent = playerIdx;
                    if (playerIdx >= sequence.length) {
                        gameActive = false;
                        atlastobyWin();
                    }
                } else {
                    gameActive = false;
                    atlastobyLose('WRONG! Expected ' + colorNames[sequence[playerIdx]] + ', got ' + colorNames[ci]);
                }
            });
        });

        let timeLeft = 20.0;
        atlastobyUIInterval = setInterval(() => {
            if (!gameActive) return;
            timeLeft -= 0.1;
            let pct = (timeLeft / 20.0) * 100;
            if (pct < 0) pct = 0;
            timerBar.style.width = pct + '%';
            if (timeLeft <= 0) { gameActive = false; atlastobyLose('TIME EXPIRED.'); }
        }, 100);
    }

    // ======================= GAME 6: HEX CODE CRACKER =======================
    function startGame_HexCracker(contentEl, timerBar, statusEl, titleEl) {
        if (titleEl) titleEl.textContent = '⚠ HEX CRACKER ⚠';

        // Generate a random color
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const correctHex = '#' + [r, g, b].map(c => c.toString(16).padStart(2, '0')).join('').toUpperCase();

        // Generate wrong options
        function randomHex() {
            const rr = Math.min(255, Math.max(0, r + Math.floor(Math.random() * 120) - 60));
            const gg = Math.min(255, Math.max(0, g + Math.floor(Math.random() * 120) - 60));
            const bb = Math.min(255, Math.max(0, b + Math.floor(Math.random() * 120) - 60));
            return '#' + [rr, gg, bb].map(c => c.toString(16).padStart(2, '0')).join('').toUpperCase();
        }

        let options = [correctHex];
        while (options.length < 6) {
            const h = randomHex();
            if (!options.includes(h)) options.push(h);
        }
        options.sort(() => Math.random() - 0.5);

        contentEl.innerHTML = `
            <p style="margin-bottom: 8px; font-size: 1.1rem; color: #fff;">CRACK THE HEX CODE</p>
            <p style="margin-bottom: 8px; color: #aaa; font-size: 0.85rem;">Which hex code matches this color? Choose wisely.</p>
            <div style="width:120px; height:120px; margin:10px auto; border:3px solid #fff; border-radius:8px; background:${correctHex}; box-shadow: 0 0 20px ${correctHex};"></div>
            <div id="atlastoby-hex-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; max-width: 360px; margin: 15px auto;"></div>`;

        const gridEl = document.getElementById('atlastoby-hex-grid');
        let gameActive = true;

        options.forEach(hex => {
            const btn = document.createElement('button');
            btn.innerText = hex;
            btn.style.cssText = 'padding:12px 8px;background:#111;color:#0ff;border:1px solid #0ff;cursor:pointer;font-family:monospace;font-size:0.95rem;font-weight:bold;transition:all 0.2s;';
            btn.addEventListener('mouseenter', () => { if (gameActive) { btn.style.background = '#222'; btn.style.borderColor = '#fff'; } });
            btn.addEventListener('mouseleave', () => { if (gameActive) { btn.style.background = '#111'; btn.style.borderColor = '#0ff'; } });
            btn.addEventListener('click', () => {
                if (!gameActive) return;
                gameActive = false;
                if (hex === correctHex) {
                    btn.style.background = '#0f0'; btn.style.color = '#000';
                    atlastobyWin();
                } else {
                    btn.style.background = '#f00'; btn.style.color = '#000';
                    atlastobyLose('WRONG! Correct was: ' + correctHex);
                }
            });
            gridEl.appendChild(btn);
        });

        let timeLeft = 10.0;
        atlastobyUIInterval = setInterval(() => {
            if (!gameActive) return;
            timeLeft -= 0.1;
            let pct = (timeLeft / 10.0) * 100;
            if (pct < 0) pct = 0;
            timerBar.style.width = pct + '%';
            if (timeLeft <= 0) { gameActive = false; atlastobyLose('TIME EXPIRED. Correct was: ' + correctHex); }
        }, 100);
    }

    // ======================= GAME 7: PASSWORD CRACK =======================
    function startGame_PasswordCrack(contentEl, timerBar, statusEl, titleEl) {
        if (titleEl) titleEl.textContent = '⚠ PASSWORD CRACK ⚠';

        const passwords = [
            { correct: 'Gh0stR00t!', fakes: ['Gh0stRo0t!', 'Gh0stRoot!', 'gh0stR00t!', 'Gh0stR00T!', 'GhostR00t!'] },
            { correct: 'Xk#9mZq@2!', fakes: ['Xk#9mZq@2?', 'Xk#9mzq@2!', 'xk#9mZq@2!', 'Xk#9mZQ@2!', 'Xk#9mZq@21'] },
            { correct: 'D4rkN3t$6', fakes: ['D4rkNet$6', 'D4rkN3t$G', 'D4rkN3t56', 'd4rkN3t$6', 'D4RkN3t$6'] },
            { correct: 'Bl4ckH4t!!', fakes: ['Bl4ckH4T!!', 'Bl4ckH4t!1', 'Bl4ckh4t!!', 'B14ckH4t!!', 'Bl4ckH4t!'] },
            { correct: 'Zer0Day#7$', fakes: ['Zer0day#7$', 'Zer0Day#7#', 'Zero0Day#7$', 'ZerODay#7$', 'Zer0Day#7S'] }
        ];
        const pick = passwords[Math.floor(Math.random() * passwords.length)];
        let options = [pick.correct, ...pick.fakes.slice(0, 5)];
        options.sort(() => Math.random() - 0.5);

        contentEl.innerHTML = `
            <p style="margin-bottom: 8px; font-size: 1.1rem; color: #fff;">PASSWORD INTERCEPT</p>
            <p style="margin-bottom: 8px; color: #aaa; font-size: 0.85rem;">We intercepted a password hash. Find the EXACT correct password — one character difference = system lockout!</p>
            <div id="atlastoby-pwd-grid" style="display:flex; flex-direction:column; gap:8px; max-width:320px; margin:12px auto;"></div>`;

        const gridEl = document.getElementById('atlastoby-pwd-grid');
        let gameActive = true;

        options.forEach(pwd => {
            const btn = document.createElement('button');
            btn.innerText = pwd;
            btn.style.cssText = 'padding:10px 14px;background:#0a0010;color:#0ff;border:1px solid #0ff;cursor:pointer;font-family:monospace;font-size:1.05rem;letter-spacing:2px;transition:all 0.2s;text-align:left;';
            btn.addEventListener('mouseenter', () => { if (gameActive) { btn.style.background = '#001a1a'; btn.style.borderColor = '#fff'; } });
            btn.addEventListener('mouseleave', () => { if (gameActive) { btn.style.background = '#0a0010'; btn.style.borderColor = '#0ff'; } });
            btn.addEventListener('click', () => {
                if (!gameActive) return;
                gameActive = false;
                if (pwd === pick.correct) {
                    btn.style.background = '#003300'; btn.style.color = '#0f0';
                    atlastobyWin();
                } else {
                    btn.style.background = '#330000'; btn.style.color = '#f00';
                    atlastobyLose('WRONG PASSWORD! System locked. Correct was: ' + pick.correct);
                }
            });
            gridEl.appendChild(btn);
        });

        let timeLeft = 18.0;
        atlastobyUIInterval = setInterval(() => {
            if (!gameActive) return;
            timeLeft -= 0.1;
            let pct = (timeLeft / 18.0) * 100;
            if (pct < 0) pct = 0;
            timerBar.style.width = pct + '%';
            if (timeLeft <= 0) { gameActive = false; atlastobyLose('TIME EXPIRED. Correct was: ' + pick.correct); }
        }, 100);
    }

    // ======================= GAME 8: WIRE CUT (defuse bomb) =======================
    function startGame_WireCut(contentEl, timerBar, statusEl, titleEl) {
        if (titleEl) titleEl.textContent = '\u26a0 WIRE DEFUSAL \u26a0';

        const wireColors = [
            { name: 'RED', color: '#f00', glow: '#f00' },
            { name: 'BLUE', color: '#39f', glow: '#39f' },
            { name: 'GREEN', color: '#0f0', glow: '#0f0' },
            { name: 'YELLOW', color: '#ff0', glow: '#ff0' },
            { name: 'WHITE', color: '#fff', glow: '#ddd' },
            { name: 'PURPLE', color: '#c0f', glow: '#c0f' },
            { name: 'ORANGE', color: '#f80', glow: '#f80' },
            { name: 'PINK', color: '#f4a', glow: '#f4a' },
        ];

        // Cryptic clue map (indirect riddles, not just color names)
        const crypticClues = {
            'RED': 'The color of Mars. Also the last thing you see.',
            'BLUE': 'Wavelength ~450nm. RGB (0,0,255). Police siren frequency.',
            'GREEN': 'Primary photosynthesis wavelength. Matrix default terminal.',
            'YELLOW': 'Caution standard. Radiation hazard symbol. Banana protocol.',
            'WHITE': 'All visible frequencies combined. RGB max. Ghost signal.',
            'PURPLE': 'Royal frequency. 380-450nm. Ultra-violet edge spectrum.',
            'ORANGE': 'Copper oxidation hue. Hazmat level 3. Thermal signature.',
            'PINK': 'Desaturated crimson. Above 700nm threshold bleed.',
        };

        // Shuffle and always pick 6 or 7 wires
        let shuffled = wireColors.sort(() => Math.random() - 0.5);
        const wireCount = Math.random() > 0.5 ? 7 : 6;
        shuffled = shuffled.slice(0, wireCount);

        // Pick 2 DIFFERENT correct wires to cut in sequence
        let correctOrder = [];
        while (correctOrder.length < 2) {
            const pick = Math.floor(Math.random() * wireCount);
            if (!correctOrder.includes(pick)) correctOrder.push(pick);
        }
        const [firstIdx, secondIdx] = correctOrder;
        const wire1 = shuffled[firstIdx];
        const wire2 = shuffled[secondIdx];
        const clue1 = crypticClues[wire1.name];
        const clue2 = crypticClues[wire2.name];

        // Fake intel
        const intelLines = [
            `EXPLOSIVE_TYPE: C-4_VARIANT_X9`,
            `DETONATOR_SIGNAL: 433MHz`,
            `ARM_TIME: ${Math.floor(Math.random() * 59) + 1}s`,
            `CHARGE_COUNT: ${wireCount}`,
            `SAFETY_OVERRIDE: DISABLED`,
            `CUTS_REQUIRED: 2`
        ];

        contentEl.innerHTML = `
            <p style="margin-bottom:5px; font-size:1.05rem; color:#fff;">WIRE DEFUSAL \u2014 DUAL SEQUENCE</p>
            <div style="display:flex; gap:6px; justify-content:center; flex-wrap:wrap; margin-bottom:8px;">
                ${intelLines.map(l => `<span style="font-family:monospace; font-size:0.6rem; color:#0a3; border:1px solid #0a3; padding:1px 5px; border-radius:2px;">${l}</span>`).join('')}
            </div>
            <div style="display:flex; gap:8px; margin-bottom:8px; flex-direction:column;">
                <div style="color:#ff0; font-size:0.8rem; border:1px solid #ff0; padding:6px 8px; border-radius:4px; background:#0a0800;">
                    <span style="color:#f44;">CUT 1:</span> ${clue1}
                </div>
                <div id="atlastoby-clue2" style="color:#555; font-size:0.8rem; border:1px solid #333; padding:6px 8px; border-radius:4px; background:#050505;">
                    <span style="color:#444;">CUT 2:</span> [ENCRYPTED \u2014 cut first wire to reveal]
                </div>
            </div>
            <div style="font-size:0.8rem; color:#0ff; margin-bottom:8px;">STEP: <span id="atlastoby-wire-step" style="color:#f00; font-weight:bold;">1 / 2</span> &nbsp;|&nbsp; STATUS: <span id="atlastoby-wire-status" style="color:#f00;">ARMED</span></div>
            <p style="color:#555; font-size:0.72rem; margin-bottom:8px;">\u26a0 Wrong cut = instant detonation. Sequence matters.</p>
            <div id="atlastoby-wire-grid" style="display:flex; flex-direction:column; gap:8px; max-width:380px; margin:0 auto;"></div>`;

        const gridEl = document.getElementById('atlastoby-wire-grid');
        let gameActive = true;
        let step = 1; // 1 = waiting for first cut, 2 = waiting for second

        function buildWireRow(wire, idx) {
            const row = document.createElement('div');
            row.dataset.widx = idx;
            row.style.cssText = 'display:flex; align-items:center; gap:10px; padding:7px 10px; border:1px solid #222; border-radius:4px; background:#050505; transition:all 0.2s;';

            const label = document.createElement('div');
            label.style.cssText = 'font-family:monospace; color:#444; font-size:0.75rem; min-width:28px;';
            label.textContent = `[${idx + 1}]`;

            const connL = document.createElement('div');
            connL.style.cssText = `width:11px; height:11px; border-radius:50%; background:${wire.color}; box-shadow:0 0 6px ${wire.glow}; flex-shrink:0;`;

            const thickness = 5 + Math.floor(Math.random() * 6);
            const wireLine = document.createElement('div');
            wireLine.style.cssText = `height:${thickness}px; flex:1; background:linear-gradient(90deg, ${wire.color}dd, ${wire.color}77, ${wire.color}dd); border-radius:3px; box-shadow:0 0 8px ${wire.glow}66, 0 0 16px ${wire.glow}22;`;

            const connR = connL.cloneNode();

            const cutBtn = document.createElement('button');
            cutBtn.textContent = 'CUT';
            cutBtn.style.cssText = 'background:#1a0000; color:#f88; border:1px solid #f00; font-family:monospace; padding:4px 10px; cursor:pointer; font-size:0.8rem; font-weight:bold; transition:all 0.15s; border-radius:3px; flex-shrink:0;';
            cutBtn.addEventListener('mouseenter', () => { if (gameActive && !cutBtn.disabled) { cutBtn.style.background = '#330000'; cutBtn.style.color = '#f00'; } });
            cutBtn.addEventListener('mouseleave', () => { if (gameActive && !cutBtn.disabled) { cutBtn.style.background = '#1a0000'; cutBtn.style.color = '#f88'; } });

            cutBtn.addEventListener('click', () => {
                if (!gameActive || cutBtn.disabled) return;

                // Animate cut
                cutBtn.disabled = true;
                cutBtn.textContent = '\u2702';
                cutBtn.style.color = '#444';
                cutBtn.style.borderColor = '#333';
                wireLine.style.background = 'repeating-linear-gradient(90deg, #333 0px, #333 45%, transparent 45%, transparent 55%, #333 55%)';
                wireLine.style.boxShadow = 'none';
                connL.style.opacity = '0.25';
                connR.style.opacity = '0.25';

                if (step === 1 && idx === firstIdx) {
                    // Correct first cut
                    row.style.borderColor = '#0f0';
                    row.style.background = '#001500';
                    step = 2;
                    // Reveal second clue
                    const clue2El = document.getElementById('atlastoby-clue2');
                    if (clue2El) {
                        clue2El.style.color = '#ff0';
                        clue2El.style.borderColor = '#ff0';
                        clue2El.style.background = '#0a0800';
                        clue2El.innerHTML = `<span style="color:#f44;">CUT 2:</span> ${clue2}`;
                    }
                    const stepEl = document.getElementById('atlastoby-wire-step');
                    const wireStatusEl = document.getElementById('atlastoby-wire-status');
                    if (stepEl) stepEl.textContent = '2 / 2';
                    if (wireStatusEl) { wireStatusEl.textContent = 'PARTIAL \u2014 CUT 2ND WIRE'; wireStatusEl.style.color = '#ff0'; }
                } else if (step === 2 && idx === secondIdx) {
                    // Correct second cut \u2014 WIN
                    row.style.borderColor = '#0f0';
                    row.style.background = '#001500';
                    const wireStatusEl = document.getElementById('atlastoby-wire-status');
                    if (wireStatusEl) { wireStatusEl.textContent = 'DEFUSED'; wireStatusEl.style.color = '#0f0'; }
                    gameActive = false;
                    setTimeout(() => atlastobyWin(), 400);
                } else {
                    // Wrong cut at any step — BOOM
                    row.style.borderColor = '#f00';
                    row.style.background = '#1a0000';
                    row.style.transform = 'translateX(5px)';
                    setTimeout(() => row.style.transform = 'translateX(-5px)', 80);
                    setTimeout(() => row.style.transform = 'translateX(0)', 160);
                    gameActive = false;
                    const expected = step === 1 ? wire1.name : wire2.name;
                    setTimeout(() => atlastobyLose('💥 WRONG WIRE! Expected: ' + expected + '. Bomb detonated.'), 400);
                }
            });

            row.appendChild(label);
            row.appendChild(connL);
            row.appendChild(wireLine);
            row.appendChild(connR);
            row.appendChild(cutBtn);
            return row;
        }

        shuffled.forEach((wire, idx) => {
            gridEl.appendChild(buildWireRow(wire, idx));
        });

        let timeLeft = 12.0;
        atlastobyUIInterval = setInterval(() => {
            if (!gameActive) return;
            timeLeft -= 0.1;
            let pct = (timeLeft / 12.0) * 100;
            if (pct < 0) pct = 0;
            timerBar.style.width = pct + '%';
            if (timeLeft < 5) timerBar.style.background = timeLeft % 0.4 < 0.2 ? '#f00' : '#600';
            if (timeLeft <= 0) { gameActive = false; atlastobyLose('💥 TIME EXPIRED. Bomb detonated!'); }
        }, 100);
    }

    // ======================= GAME 9: MORSE CODE =======================
    function startGame_MorseCode(contentEl, timerBar, statusEl, titleEl) {
        if (titleEl) titleEl.textContent = '⚠ MORSE DECODE ⚠';

        const morseMap = {
            'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
            'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
            'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
            'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
            'Y': '-.--', 'Z': '--..',
        };
        const letters = Object.keys(morseMap);
        // Pick a random word (3-4 letters)
        const wordLen = Math.floor(Math.random() * 2) + 3;
        let word = '';
        for (let i = 0; i < wordLen; i++) word += letters[Math.floor(Math.random() * letters.length)];
        const morse = word.split('').map(l => morseMap[l]).join('  ');

        // Generate wrong options (same length, different letters)
        let options = new Set([word]);
        while (options.size < 6) {
            let wrong = '';
            for (let i = 0; i < wordLen; i++) wrong += letters[Math.floor(Math.random() * letters.length)];
            options.add(wrong);
        }
        options = Array.from(options).sort(() => Math.random() - 0.5);

        contentEl.innerHTML = `
            <p style="margin-bottom: 8px; font-size: 1.1rem; color: #fff;">MORSE CODE INTERCEPT</p>
            <p style="margin-bottom: 8px; color: #aaa; font-size: 0.85rem;">Decode this intercepted Morse signal. Select the correct word.</p>
            <div style="font-size: 1.8rem; font-weight: bold; color: #ff0; text-shadow: 0 0 12px #ff0; letter-spacing: 8px; margin: 14px 0; font-family:monospace;">${morse}</div>
            <div id="atlastoby-morse-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; max-width:320px; margin:10px auto;"></div>`;

        const gridEl = document.getElementById('atlastoby-morse-grid');
        let gameActive = true;

        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.innerText = opt;
            btn.style.cssText = 'padding:12px;background:#000;color:#0ff;border:1px solid #0ff;cursor:pointer;font-family:monospace;font-size:1.1rem;font-weight:bold;letter-spacing:3px;transition:all 0.2s;';
            btn.addEventListener('mouseenter', () => { if (gameActive) btn.style.background = '#001a1a'; });
            btn.addEventListener('mouseleave', () => { if (gameActive) btn.style.background = '#000'; });
            btn.addEventListener('click', () => {
                if (!gameActive) return;
                gameActive = false;
                if (opt === word) {
                    btn.style.background = '#003300'; btn.style.color = '#0f0';
                    atlastobyWin();
                } else {
                    btn.style.background = '#330000'; btn.style.color = '#f00';
                    atlastobyLose('WRONG! Signal was: ' + word);
                }
            });
            gridEl.appendChild(btn);
        });

        let timeLeft = 20.0;
        atlastobyUIInterval = setInterval(() => {
            if (!gameActive) return;
            timeLeft -= 0.1;
            let pct = (timeLeft / 20.0) * 100;
            if (pct < 0) pct = 0;
            timerBar.style.width = pct + '%';
            if (timeLeft <= 0) { gameActive = false; atlastobyLose('TIME EXPIRED. Signal was: ' + word); }
        }, 100);
    }

    // ======================= GAME LAUNCHER =======================
    window.startAtlastobyUI = function () {
        if (atlastobyUIInterval) clearInterval(atlastobyUIInterval);
        if (atlastobyUIInterval2) clearInterval(atlastobyUIInterval2);
        if (atlastobyKeyHandler) { document.removeEventListener('keydown', atlastobyKeyHandler); atlastobyKeyHandler = null; }

        const contentEl = document.getElementById('atlastoby-game-content');
        const timerBar = document.getElementById('atlastoby-timer-bar');
        const statusEl = document.getElementById('atlastoby-status');
        const titleEl = document.getElementById('atlastoby-game-title');

        if (!contentEl || !timerBar || !statusEl) return;

        contentEl.innerHTML = '';
        statusEl.innerText = '';
        timerBar.style.width = '100%';
        timerBar.style.background = '#f00';

        // === HACKER EFFECTS: inject scanline overlay + glitch counter + data streams ===
        const gameWin = document.getElementById('window-atlastoby-game');
        if (gameWin) {
            // Remove old hacker overlays
            gameWin.querySelectorAll('.atlastoby-hacker-overlay').forEach(e => e.remove());

            // Scanlines overlay
            const scanlines = document.createElement('div');
            scanlines.className = 'atlastoby-hacker-overlay';
            scanlines.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;background:repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.18) 2px, rgba(0,0,0,0.18) 4px);';
            gameWin.appendChild(scanlines);

            // Corner glitch counters
            const glitchCorner = document.createElement('div');
            glitchCorner.className = 'atlastoby-hacker-overlay';
            glitchCorner.style.cssText = 'position:absolute;top:6px;right:10px;font-family:monospace;font-size:0.6rem;color:#0f04;pointer-events:none;z-index:999;text-align:right;line-height:1.4;';
            gameWin.appendChild(glitchCorner);
            const glitchData = ['SYS', 'NET', 'CPU', 'RAM', 'I/O'];
            setInterval(() => {
                glitchCorner.innerHTML = glitchData.map(k => `${k}: <span style="color:#0f0">${Math.floor(Math.random() * 100).toString().padStart(3, '0')}%</span>`).join('<br>');
            }, 200);

            // Bottom data stream bar
            const dataStream = document.createElement('div');
            dataStream.className = 'atlastoby-hacker-overlay';
            dataStream.style.cssText = 'position:absolute;bottom:0;left:0;right:0;font-family:monospace;font-size:0.55rem;color:#0f03;pointer-events:none;z-index:999;white-space:nowrap;overflow:hidden;padding:2px 4px;background:rgba(0,10,0,0.5);';
            gameWin.appendChild(dataStream);
            const hexCharsDS = '0123456789ABCDEF';
            setInterval(() => {
                let stream = '';
                for (let i = 0; i < 120; i++) stream += hexCharsDS[Math.floor(Math.random() * 16)];
                dataStream.textContent = stream;
            }, 80);

            // Random glitch flash (full window briefly flickers)
            // Store in atlastobyUIInterval2 so win/lose cleanup clears it automatically
            atlastobyUIInterval2 = setInterval(() => {
                if (Math.random() > 0.85) {
                    gameWin.style.filter = 'brightness(1.4) hue-rotate(15deg)';
                    setTimeout(() => { gameWin.style.filter = ''; }, 60);
                }
            }, 800);
        }

        const gameChoice = Math.floor(Math.random() * 9);
        switch (gameChoice) {
            case 0: startGame_CoreOverride(contentEl, timerBar, statusEl, titleEl); break;
            case 1: startGame_CryptoAnagram(contentEl, timerBar, statusEl, titleEl); break;
            case 2: startGame_ReflexMatrix(contentEl, timerBar, statusEl, titleEl); break;
            case 3: startGame_BinaryBomb(contentEl, timerBar, statusEl, titleEl); break;
            case 4: startGame_MemorySequence(contentEl, timerBar, statusEl, titleEl); break;
            case 5: startGame_HexCracker(contentEl, timerBar, statusEl, titleEl); break;
            case 6: startGame_PasswordCrack(contentEl, timerBar, statusEl, titleEl); break;
            case 7: startGame_WireCut(contentEl, timerBar, statusEl, titleEl); break;
            case 8: startGame_MorseCode(contentEl, timerBar, statusEl, titleEl); break;
        }
    };

    let decryptInterval = null;
    let isDecryptRed = false;

    window.startDecryptMiniGame = function () {
        if (decryptInterval) clearInterval(decryptInterval);
        const textEl = document.getElementById('decrypt-text');
        const statusEl = document.getElementById('decrypt-status');
        const btn = document.getElementById('decrypt-action-btn');
        if (!textEl || !btn || !statusEl) return;

        statusEl.innerText = '';
        textEl.style.color = '#0f0';
        isDecryptRed = false;

        decryptInterval = setInterval(() => {
            const chars = '!@#$%^&*()_+-=[]{}|;:,.<>/?0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let str = '';
            for (let i = 0; i < 15; i++) str += chars[Math.floor(Math.random() * chars.length)];
            textEl.innerText = str;

            if (Math.random() < 0.05) {
                isDecryptRed = true;
                textEl.style.color = 'red';
                textEl.innerText = 'ENCRYPTED_PAYLOAD_FOUND';
                clearInterval(decryptInterval);
                setTimeout(() => {
                    if (isDecryptRed) {
                        isDecryptRed = false;
                        textEl.style.color = '#0f0';
                        startDecryptMiniGame();
                    }
                }, 400);
            }
        }, 80);
    };

    const btnDecrypt = document.getElementById('btn-hack-decrypt');
    if (btnDecrypt) {
        btnDecrypt.addEventListener('click', () => {
            if (typeof openWindow === 'function') openWindow('window-decrypt');
            startDecryptMiniGame();
        });
    }

    const decryptActionBtn = document.getElementById('decrypt-action-btn');
    if (decryptActionBtn) {
        decryptActionBtn.addEventListener('click', () => {
            const statusEl = document.getElementById('decrypt-status');
            if (isDecryptRed) {
                isDecryptRed = false;
                if (decryptInterval) clearInterval(decryptInterval);
                const textEl = document.getElementById('decrypt-text');
                if (textEl) {
                    textEl.innerText = 'ACCESS_KEY: ' + window.hackerTraceAccessKey;
                    textEl.style.color = '#0f0';
                }
                window.hackerDataDecrypted = true;
                if (statusEl) {
                    statusEl.innerText = 'SUCCESS. PAYLOAD INTERCEPTED.';
                    statusEl.style.color = '#0f0';
                }
                showToast("nt-secret-unlock", "success");
            } else {
                if (statusEl) {
                    statusEl.innerText = 'FAILED. MISSED THE WINDOW.';
                    statusEl.style.color = 'red';
                }
            }
        });
    }

    window.startTraceMiniGame = function () {
        const traceOut = document.getElementById('trace-output');
        if (!traceOut) return;
        traceOut.innerHTML = '';
        const ips = ['192.168.1.1', '10.0.0.55', '172.16.254.1', '8.8.8.8', '45.33.32.156', 'UNKNOWN_PROXY'];
        let step = 0;

        const traceInterval = setInterval(() => {
            if (step < ips.length) {
                traceOut.innerHTML += `<div>[+] Pinging node: ${ips[step]} ... OK</div>`;
                traceOut.scrollTop = traceOut.scrollHeight;
                step++;
            } else {
                clearInterval(traceInterval);
                traceOut.innerHTML += `<div style="color:red; margin-top: 10px; font-weight: bold;">TARGET LOCATED: Warsaw, Poland [52.2297 N, 21.0122 E]</div>`;
                traceOut.scrollTop = traceOut.scrollHeight;
                showToast("nt-secret-unlock", "warning");
            }
        }, 800);
    };

    const btnTrace = document.getElementById('btn-hack-trace');
    if (btnTrace) {
        btnTrace.addEventListener('click', () => {
            const userKey = prompt("ENTER TRACE ACCESS KEY:");
            if (userKey === window.hackerTraceAccessKey) {
                if (typeof openWindow === 'function') openWindow('window-trace');
                startTraceMiniGame();
            } else {
                const traceOut = document.getElementById('trace-output');
                if (traceOut) {
                    traceOut.innerHTML = `<div style="color:red; font-weight:bold; font-size:1.5em; text-shadow:0 0 10px red; text-align:center; margin-top:20px;">FAILURE ACCESS DENIED! INVALID KEY.</div>`;
                }
                if (typeof openWindow === 'function') openWindow('window-trace');
                if (typeof window.triggerAtlastobyHack === 'function') {
                    window.triggerAtlastobyHack();
                }
            }
        });
    }

    const btnFirewall = document.getElementById('btn-hack-firewall');
    if (btnFirewall) {
        btnFirewall.addEventListener('click', () => {
            if (typeof openWindow === 'function') openWindow('window-firewall-breach');
            if (typeof startFirewallMiniGame === 'function') startFirewallMiniGame();
        });
    }

    let hackKeys = [];
    const hackCode = ['h', 'a', 'c', 'k'];
    document.addEventListener('keydown', (e) => {
        if (!document.body.classList.contains('hacker-mode')) return;

        hackKeys.push(e.key.toLowerCase());
        if (hackKeys.length > hackCode.length) hackKeys.shift();

        if (hackKeys.join('') === hackCode.join('')) {
            showToast('nt-secret-unlock', 'warning');
            document.body.style.transform = 'rotateY(180deg) scale(0.9)';
            document.body.style.transition = 'transform 2s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 2s';
            document.body.style.filter = 'hue-rotate(90deg) invert(1)';

            setTimeout(() => {
                document.body.style.transform = '';
                document.body.style.filter = '';
            }, 5000);

            hackKeys = [];
        }
    });

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

        function applyWobbleEffect() {
            const currentAnim = elementToAnimate.classList.value.match(/\bwobble-\S+/g);
            if (currentAnim) elementToAnimate.classList.remove(currentAnim[0]);
            void elementToAnimate.offsetWidth;
            elementToAnimate.classList.add(`wobble-${currentWobbleMode}`);

            if (document.body.classList.contains('baldi-mode')) {
                elementToAnimate.style.animationIterationCount = 'infinite';
                elementToAnimate.style.animationDuration = '0.2s';

                const mainBaldiAudio = document.getElementById('baldi-audio');
                if (mainBaldiAudio) {
                    mainBaldiAudio.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                }

                let baldiAudio = document.getElementById('baldi-drag-audio');
                if (!baldiAudio) {
                    baldiAudio = document.createElement('iframe');
                    baldiAudio.id = 'baldi-drag-audio';
                    baldiAudio.style.display = 'none';
                    baldiAudio.setAttribute('allow', 'autoplay');
                    document.body.appendChild(baldiAudio);
                }
                if (!baldiAudio.src.includes('uOtn476zP7I')) {
                    baldiAudio.src = 'https://www.youtube.com/embed/uOtn476zP7I?autoplay=1&controls=0&showinfo=0&autohide=1';
                }

                setTimeout(() => {
                    elementToAnimate.style.animationIterationCount = '';
                    elementToAnimate.style.animationDuration = '';
                    const currentAnim = elementToAnimate.classList.value.match(/\bwobble-\S+/g);
                    if (currentAnim) elementToAnimate.classList.remove(currentAnim[0]);

                    if (baldiAudio) {
                        baldiAudio.src = '';
                        baldiAudio.remove();
                    }
                    if (mainBaldiAudio) {
                        mainBaldiAudio.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                    }
                }, 13000);
            } else if (document.body.classList.contains('minecraft-mode')) {
                elementToAnimate.style.animationIterationCount = '';
                elementToAnimate.style.animationDuration = '';
                try {
                    const AudioContext = window.AudioContext || window.webkitAudioContext;
                    if (!window.mcWobbleCtx) window.mcWobbleCtx = new AudioContext();
                    const ctx = window.mcWobbleCtx;
                    if (ctx.state === 'suspended') ctx.resume();

                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();

                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(150, ctx.currentTime);
                    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1);
                    osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.3);

                    gain.gain.setValueAtTime(0, ctx.currentTime);
                    gain.gain.linearRampToValueAtTime(1, ctx.currentTime + 0.05);
                    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);

                    osc.connect(gain);
                    gain.connect(ctx.destination);

                    osc.start();
                    osc.stop(ctx.currentTime + 0.3);
                } catch (e) {
                    console.error("Wobble audio failed", e);
                }
            } else {
                elementToAnimate.style.animationIterationCount = '';
                elementToAnimate.style.animationDuration = '';
                if (typeof soundEnabled !== 'undefined' && soundEnabled) {
                    try {
                        const AudioContext = window.AudioContext || window.webkitAudioContext;
                        if (!window.normalWobbleCtx) window.normalWobbleCtx = new AudioContext();
                        const ctx = window.normalWobbleCtx;
                        if (ctx.state === 'suspended') ctx.resume();

                        const osc = ctx.createOscillator();
                        const gain = ctx.createGain();

                        osc.type = 'sine';
                        osc.frequency.setValueAtTime(500, ctx.currentTime);
                        osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.25);

                        gain.gain.setValueAtTime(0, ctx.currentTime);
                        gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.03);
                        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);

                        osc.connect(gain);
                        gain.connect(ctx.destination);

                        osc.start();
                        osc.stop(ctx.currentTime + 0.25);
                    } catch (e) { }
                }
            }
        }

        document.addEventListener('mouseup', () => {
            if (!isDragging) return;
            isDragging = false;
            elementToAnimate.style.transform = '';
            elementToAnimate.style.transition = '';

            if (hasMoved) {
                applyWobbleEffect();
            }
        });

        elementToDrag.addEventListener('dragend', () => {
            if (!isDragging) return;
            isDragging = false;
            elementToAnimate.style.transform = '';
            elementToAnimate.style.transition = '';

            applyWobbleEffect();
        });

        elementToAnimate.addEventListener('animationend', (e) => {
            if (e.animationName.includes('wobble') && elementToAnimate.style.animationIterationCount !== 'infinite') {
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
        if (dragHandle) setupWobbleDrag(dragHandle, target);
    });

    const boyImages = document.querySelectorAll('#window-boys .carousel-track img');
    boyImages.forEach(img => {
        setupWobbleDrag(img, img);
    });

    const grid = document.getElementById('skills-grid');
    let draggedTile = null;

    if (grid) {
        document.querySelectorAll('.tile').forEach(tile => {
            tile.addEventListener('dragstart', function (e) {
                draggedTile = this;
                setTimeout(() => this.classList.add('dragging'), 0);
                e.dataTransfer.effectAllowed = 'move';
            });

            tile.addEventListener('dragend', function () {
                this.classList.remove('dragging');
                draggedTile = null;
                document.querySelectorAll('.tile').forEach(t => t.classList.remove('drag-over'));
            });

            tile.addEventListener('dragover', function (e) {
                if (e.preventDefault) e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
                return false;
            });

            tile.addEventListener('dragenter', function (e) {
                if (this !== draggedTile) this.classList.add('drag-over');
            });

            tile.addEventListener('dragleave', function () {
                this.classList.remove('drag-over');
            });

            tile.addEventListener('drop', function (e) {
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
        if (lightboxModal) {
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
    if (femboyBtn) {
        femboyBtn.addEventListener('click', () => {
            let win = document.getElementById('window-femboy-app');
            if (!win) {
                win = document.createElement('div');
                win.id = 'window-femboy-app';
                win.className = 'window';
                win.style.cssText = `
                    width:420px; min-height:450px; display:none;
                    position:fixed; top:10vh; left:calc(50vw - 210px); transform:none;
                    background:var(--glass-bg); backdrop-filter:blur(16px);
                    border:1px solid var(--metro-purple, #9b59b6);
                    box-shadow:0 0 40px rgba(155,89,182,0.4);
                    font-family:sans-serif; z-index:10005;
                    border-radius:8px; overflow:hidden; resize:both;
                    color:var(--text-color);
                `;
                const initFormHtml = `
                    <div class="window-header" style="background:linear-gradient(90deg, #8e44ad, #9b59b6);padding:10px 15px;display:flex;justify-content:space-between;align-items:center;cursor:move;color:#fff;">
                        <span style="font-weight:bold;letter-spacing:1px">Formularz Aplikacyjny</span>
                        <button class="window-close" onclick="document.getElementById('window-femboy-app').style.display='none'" style="background:none;border:none;color:#fff;cursor:pointer;font-size:16px;">✕</button>
                    </div>
                    <div class="window-content" style="padding:20px;flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:15px;" id="femboy-form-content">
                        <h3 style="margin-top:0;color:var(--metro-purple, #9b59b6)">Wniosek o zostanie chłopakiem</h3>
                        <p style="font-size:0.9rem;opacity:0.8">Wypełnij poniższe pytania, aby system mógł przeanalizować Twoją kandydaturę.</p>
                        
                        <div class="fb-q">
                            <label style="display:block;margin-bottom:5px;font-size:0.9rem">1. Czy lubisz jazdę na rowerze?</label>
                            <select style="width:100%;padding:8px;border-radius:4px;border:1px solid #666;background:var(--bg-color);color:var(--text-color)">
                                <option>Oczywiście, to moja pasja!</option>
                                <option>Trochę tak</option>
                                <option>Nienawidzę</option>
                            </select>
                        </div>
                        <div class="fb-q">
                            <label style="display:block;margin-bottom:5px;font-size:0.9rem">2. Jak bardzo jesteś femboyem? (1-10)</label>
                            <input type="range" min="1" max="10" value="5" style="width:100%;">
                        </div>
                        <div class="fb-q">
                            <label style="display:block;margin-bottom:5px;font-size:0.9rem">3. Ulubiony język programowania?</label>
                            <input type="text" placeholder="Wpisz tutaj..." style="width:100%;padding:8px;border-radius:4px;border:1px solid #666;background:var(--bg-color);color:var(--text-color)">
                        </div>
                        <button id="fb-submit-btn" style="margin-top:10px;padding:10px;background:var(--metro-purple, #9b59b6);color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;transition:transform 0.2s">WYŚLIJ APLIKACJĘ</button>
                    </div>
                `;
                win.innerHTML = initFormHtml;
                document.body.appendChild(win);
                
                // Make draggable
                const hdr = win.querySelector('.window-header');
                let ox = 0, oy = 0, drag = false;
                hdr.addEventListener('mousedown', e => {
                    if (e.target.tagName === 'BUTTON') return;
                    drag = true;
                    ox = e.clientX - win.getBoundingClientRect().left;
                    oy = e.clientY - win.getBoundingClientRect().top;
                });
                document.addEventListener('mousemove', e => {
                    if (!drag) return;
                    win.style.left = (e.clientX - ox) + 'px';
                    win.style.top  = (e.clientY - oy) + 'px';
                });
                document.addEventListener('mouseup', () => drag = false);

                // Submit Logic
                const bindSubmit = () => {
                    win.querySelector('#fb-submit-btn').addEventListener('click', () => {
                        const content = win.querySelector('#femboy-form-content');
                        content.innerHTML = `
                            <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;text-align:center;gap:15px;margin-top:30px;">
                                <div class="fb-spinner" style="width:40px;height:40px;border:4px solid rgba(155,89,182,0.3);border-top:4px solid #9b59b6;border-radius:50%;animation:spin 1s linear infinite"></div>
                                <h3 id="fb-status" style="color:var(--metro-purple, #9b59b6)">Analizowanie odpowiedzi...</h3>
                                <div id="fb-log" style="font-family:monospace;font-size:0.8rem;opacity:0.7;height:100px;overflow:hidden;width:100%;text-align:left;background:rgba(0,0,0,0.1);padding:8px;border-radius:4px;"></div>
                            </div>
                        `;
                        
                        if (!document.getElementById('fb-spin-style')) {
                            const style = document.createElement('style');
                            style.id = 'fb-spin-style';
                            style.textContent = '@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }';
                            document.head.appendChild(style);
                        }

                        const logs = [
                            "Skanowanie profilu...",
                            "Analiza kompatybilności rowerowej: 87%",
                            "Wykrywanie poziomu femboy: 99%",
                            "Ocena estetyki kodu...",
                            "Wyszukiwanie konfliktów...",
                            "UWAGA: Znaleziono potencjalny konflikt (ID: IGNACY)"
                        ];
                        
                        const logEl = win.querySelector('#fb-log');
                        let i = 0;
                        const logInterval = setInterval(() => {
                            if (i < logs.length) {
                                logEl.innerHTML += `<div style="margin-bottom:4px;">> ${logs[i]}</div>`;
                                logEl.scrollTop = logEl.scrollHeight;
                                i++;
                            } else {
                                clearInterval(logInterval);
                                setTimeout(() => {
                                    content.innerHTML = `
                                        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;text-align:center;gap:20px;padding:20px 0;">
                                            <div style="font-size:4rem;">⚠️</div>
                                            <h2 style="color:#e74c3c;margin:0">WNIOSEK ODRZUCONY</h2>
                                            <p style="font-size:1.1rem;line-height:1.5;">Analiza zakończona.<br><br>Wyniki są bardzo obiecujące, jednak system wykrył krytyczny błąd: <strong style="color:var(--metro-purple)">Ignacy byłby bardzo zazdrosny!</strong><br><br>W związku z tym, niestety nie chcę jednak chłopaka. Przepraszamy za niedogodności!</p>
                                            <button id="fb-close-btn" style="margin-top:10px;padding:10px 20px;background:#e74c3c;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">ZAMKNIJ SYSTEM</button>
                                        </div>
                                    `;
                                    win.querySelector('#fb-close-btn').addEventListener('click', () => {
                                        win.style.display = 'none';
                                        // Reset form on close
                                        setTimeout(() => {
                                            win.innerHTML = initFormHtml;
                                            bindSubmit();
                                        }, 500);
                                    });
                                }, 1200);
                            }
                        }, 700);
                    });
                };
                bindSubmit();
            }
            win.style.display = 'flex';
        });
    }

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
                if (e.target.closest('.window-controls')) return;
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
        if (!win) return;
        win.style.display = 'flex';
        topZIndex++;
        win.style.zIndex = topZIndex;

        if (winId === 'window-hacker-term') {
            let audioPlayer = document.getElementById('hacker-audio');
            if (!audioPlayer) {
                audioPlayer = document.createElement('iframe');
                audioPlayer.id = 'hacker-audio';
                audioPlayer.style.display = 'none';
                audioPlayer.setAttribute('allow', 'autoplay');
                document.body.appendChild(audioPlayer);
            }
            audioPlayer.src = 'https://www.youtube.com/embed/iwPnS7NdiCM?autoplay=1&controls=0&showinfo=0&autohide=1';
        }
    }

    const meetBoysBtn = document.getElementById('meet-boys-btn');
    if (meetBoysBtn) meetBoysBtn.addEventListener('click', () => openWindow('window-boys'));

    document.querySelectorAll('.window .window-controls .close').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const win = e.target.closest('.window');
            win.style.display = 'none';
            if (win.id === 'window-snake') snakeGameRunning = false;
            if (win.id === 'window-hacker-term') {
                const audioPlayer = document.getElementById('hacker-audio');
                if (audioPlayer) audioPlayer.src = '';
            }
        });
    });

    document.querySelectorAll('.window .window-controls .minimize').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const win = e.target.closest('.window');
            win.style.display = 'none';
            if (win.id === 'window-hacker-term') {
                const audioPlayer = document.getElementById('hacker-audio');
                if (audioPlayer) audioPlayer.src = '';
            }
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
        if (img) img.style.transform = `rotate(${currentProfileRotation}deg) scaleX(${isProfileMirrored ? -1 : 1})`;
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
    let mcAudioCtx = null;

    document.addEventListener('click', () => {
        clicks++;
        const clickEl = document.getElementById('click-count');
        if (clickEl) clickEl.textContent = clicks;

        if (document.body.classList.contains('minecraft-mode')) {
            try {
                if (!mcAudioCtx) {
                    const AudioContext = window.AudioContext || window.webkitAudioContext;
                    mcAudioCtx = new AudioContext();
                }
                if (mcAudioCtx.state === 'suspended') mcAudioCtx.resume();

                const bufferSize = mcAudioCtx.sampleRate * 0.12;
                const buffer = mcAudioCtx.createBuffer(1, bufferSize, mcAudioCtx.sampleRate);
                const data = buffer.getChannelData(0);
                for (let i = 0; i < bufferSize; i++) {
                    data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (mcAudioCtx.sampleRate * 0.02));
                }
                const noiseSource = mcAudioCtx.createBufferSource();
                noiseSource.buffer = buffer;

                const filter = mcAudioCtx.createBiquadFilter();
                filter.type = 'lowpass';
                filter.frequency.value = 400;

                const gain = mcAudioCtx.createGain();
                gain.gain.value = 0.8;

                noiseSource.connect(filter);
                filter.connect(gain);
                gain.connect(mcAudioCtx.destination);

                noiseSource.start();
            } catch (e) {
                console.error("Audio generation failed", e);
            }
        }
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
        if (document.body.classList.contains('cyberpunk-mode')) color = '#ff00ff';

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
        const hInput = document.getElementById('hacker-term-input');
        if (hInput && document.activeElement === hInput) return;

        typedMagicWord += e.key.toLowerCase();

        if (typedMagicWord.slice(-10) === 'invincible') {
            const elements = document.querySelectorAll('.tile, .project-tile, .glass-panel, .theme-btn, .action-btn, img');
            const animations = ['wobble-jelly', 'wobble-glitch', 'wobble-bounce', 'wobble-spin', 'wobble-tornado', 'wobble-shake', 'wobble-rubberband', 'wobble-swing', 'wobble-tada', 'wobble-heartbeat', 'wobble-pulse', 'wobble-flip', 'wobble-skew', 'wobble-zoom', 'wobble-jello', 'wobble-stretch', 'wobble-pop', 'wobble-wiggle', 'wobble-squeeze', 'wobble-roll'];

            elements.forEach(el => {
                const randomAnim = animations[Math.floor(Math.random() * animations.length)];
                el.style.animation = `${randomAnim} ${Math.random() * 2 + 0.5}s infinite alternate`;
            });

            showToast('nt-invincible-on', 'error');

            let audioPlayer = document.getElementById('invincible-audio');
            if (!audioPlayer) {
                audioPlayer = document.createElement('iframe');
                audioPlayer.id = 'invincible-audio';
                audioPlayer.style.display = 'none';
                audioPlayer.setAttribute('allow', 'autoplay');
                document.body.appendChild(audioPlayer);
            }
            audioPlayer.src = 'https://www.youtube.com/embed/xuzsw7IsumU?autoplay=1&controls=0&showinfo=0&autohide=1&start=2';

            let invincibleTimeout;

            function stopInvincible() {
                clearTimeout(invincibleTimeout);
                elements.forEach(el => el.style.animation = '');
                showToast('nt-invincible-off', 'info');
                if (audioPlayer) audioPlayer.src = '';
                const stopBtn = document.getElementById('invincible-stop-btn');
                if (stopBtn) {
                    clearInterval(parseInt(stopBtn.dataset.moveInterval));
                    stopBtn.remove();
                }
            }

            let stopBtn = document.getElementById('invincible-stop-btn');
            if (!stopBtn) {
                stopBtn = document.createElement('button');
                stopBtn.id = 'invincible-stop-btn';
                stopBtn.innerHTML = '🛑 ZATRZYMAJ CHAOS 🛑';
                stopBtn.style.position = 'fixed';
                stopBtn.style.top = '20px';
                stopBtn.style.left = '50%';
                stopBtn.style.transform = 'translate(-50%, -50%)';
                stopBtn.style.zIndex = '9999999';
                stopBtn.style.padding = '15px 30px';
                stopBtn.style.fontSize = '1.5rem';
                stopBtn.style.fontWeight = 'bold';
                stopBtn.style.color = 'white';
                stopBtn.style.backgroundColor = 'red';
                stopBtn.style.border = '3px solid white';
                stopBtn.style.borderRadius = '10px';
                stopBtn.style.cursor = 'pointer';
                stopBtn.style.boxShadow = '0 0 20px red';
                stopBtn.style.transition = 'all 0.15s ease-out';
                document.body.appendChild(stopBtn);

                stopBtn.addEventListener('click', stopInvincible);

                function teleportBtn() {
                    const x = Math.random() * 80 + 10;
                    const y = Math.random() * 80 + 10;
                    stopBtn.style.left = x + 'vw';
                    stopBtn.style.top = y + 'vh';
                }

                stopBtn.addEventListener('mouseover', teleportBtn);
                stopBtn.dataset.moveInterval = setInterval(teleportBtn, 600);
            }

            invincibleTimeout = setTimeout(stopInvincible, 3600000);
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

        if (typedMagicWord.slice(-9) === 'atlastoby') {
            openWindow('window-hacker-term');
            setTimeout(() => {
                const input = document.getElementById('hacker-term-input');
                if (input) input.focus();
            }, 100);
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

        if (e.key === 'Escape' && matrixInterval) stopMatrixEffect();
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
                if (e.target.closest('.window')) return;
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
        if (e.button !== 2) contextMenu.style.display = 'none';
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
                    if (fail) {
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
    document.getElementById('ctx-secrets').addEventListener('click', () => openWindow('window-secrets'));

    const termInput = document.getElementById('term-input');
    const termOutput = document.getElementById('term-output');

    if (termInput) {
        termInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const val = termInput.value.trim().toLowerCase();
                const cmdLine = document.createElement('p');
                cmdLine.innerHTML = `<span class="prompt">admin@aleksander-os:~$</span> ${termInput.value.trim()}`;
                termOutput.appendChild(cmdLine);

                const responseLine = document.createElement('p');
                if (val === 'help') responseLine.innerHTML = "Available cmds:<br>- help: list commands<br>- whoami: show user info<br>- clear: clear screen<br>- wobble: trigger system wobble<br>- theme [dark|light]: change theme<br>- neofetch: show system info<br>- ignacy: open secret boyOS section";
                else if (val === 'whoami') responseLine.textContent = "Aleksander Zientara - IT Student, Cyclist, LGBTQ+ Advocate.";
                else if (val === 'clear') termOutput.innerHTML = '';
                else if (val === 'wobble') {
                    document.body.classList.add('wobble-glitch');
                    setTimeout(() => document.body.classList.remove('wobble-glitch'), 500);
                    responseLine.textContent = "System wobble triggered.";
                }
                else if (val === 'ignacy') {
                    openWindow('window-boys');
                    document.getElementById('boys-menu').style.display = 'none';
                    document.getElementById('boys-content').style.display = 'block';
                    document.querySelectorAll('.boy-section').forEach(s => s.style.display = 'none');
                    document.getElementById('boy-ignacy').style.display = 'block';
                    responseLine.textContent = "Opening Ignacy's section...";
                }
                else if (val.startsWith('theme ')) {
                    const theme = val.substring(6);
                    if (theme === 'dark') { document.body.classList.add('dark-mode'); localStorage.setItem('portfolioTheme', 'dark'); responseLine.textContent = "Theme set to dark."; }
                    else if (theme === 'light') { document.body.classList.remove('dark-mode'); localStorage.setItem('portfolioTheme', 'light'); responseLine.textContent = "Theme set to light."; }
                    else responseLine.textContent = `Unknown theme: ${theme}`;
                }
                else if (val === 'sudo rm -rf /*') {
                    showToast('nt-rm-rf', 'error');
                    document.body.classList.add('wobble-glitch');
                    responseLine.textContent = "Password required: **********";
                    responseLine.style.color = 'red';
                    setTimeout(() => {
                        walkTextNodes(document.body, (node) => node.nodeValue = "DELETED ");
                        document.body.style.background = 'black';

                        const minigameOverlay = document.createElement('div');
                        minigameOverlay.style.position = 'fixed';
                        minigameOverlay.style.top = '0';
                        minigameOverlay.style.left = '0';
                        minigameOverlay.style.width = '100vw';
                        minigameOverlay.style.height = '100vh';
                        minigameOverlay.style.zIndex = '9999999';
                        minigameOverlay.style.backgroundColor = 'rgba(0,0,0,0.9)';
                        minigameOverlay.style.display = 'flex';
                        minigameOverlay.style.flexDirection = 'column';
                        minigameOverlay.style.alignItems = 'center';
                        minigameOverlay.style.justifyContent = 'center';
                        minigameOverlay.style.color = 'red';
                        minigameOverlay.style.fontFamily = 'monospace';

                        const title = document.createElement('h1');
                        title.textContent = 'SYSTEM CORRUPTED';
                        title.style.fontSize = '3rem';
                        title.style.marginBottom = '20px';
                        minigameOverlay.appendChild(title);

                        const instr = document.createElement('p');
                        instr.textContent = 'Złap przycisk REBOOT 5 razy, aby przywrócić system!';
                        instr.style.fontSize = '1.5rem';
                        instr.style.marginBottom = '50px';
                        minigameOverlay.appendChild(instr);

                        const rebootBtn = document.createElement('button');
                        rebootBtn.textContent = 'REBOOT (0/5)';
                        rebootBtn.style.padding = '15px 30px';
                        rebootBtn.style.fontSize = '1.2rem';
                        rebootBtn.style.backgroundColor = 'red';
                        rebootBtn.style.color = 'white';
                        rebootBtn.style.border = 'none';
                        rebootBtn.style.cursor = 'pointer';
                        rebootBtn.style.position = 'absolute';
                        rebootBtn.style.transition = 'all 0.1s';
                        rebootBtn.style.top = '50%';
                        rebootBtn.style.left = '50%';
                        rebootBtn.style.transform = 'translate(-50%, -50%)';

                        let clicks = 0;

                        rebootBtn.addEventListener('mouseover', () => {
                            if (Math.random() > 0.4 && clicks < 5) {
                                rebootBtn.style.top = Math.random() * 80 + 10 + '%';
                                rebootBtn.style.left = Math.random() * 80 + 10 + '%';
                            }
                        });

                        rebootBtn.addEventListener('click', () => {
                            clicks++;
                            if (clicks >= 5) {
                                rebootBtn.textContent = 'REBOOTING...';
                                title.textContent = 'SYSTEM RESTORED';
                                title.style.color = '#0f0';
                                instr.textContent = 'Uruchamianie ponowne...';
                                instr.style.color = '#0f0';
                                rebootBtn.style.backgroundColor = '#0f0';
                                rebootBtn.style.color = 'black';
                                setTimeout(() => location.reload(), 1500);
                            } else {
                                rebootBtn.textContent = `REBOOT (${clicks}/5)`;
                                rebootBtn.style.top = Math.random() * 80 + 10 + '%';
                                rebootBtn.style.left = Math.random() * 80 + 10 + '%';
                            }
                        });

                        minigameOverlay.appendChild(rebootBtn);
                        document.body.appendChild(minigameOverlay);
                    }, 1000);
                }
                else if (val === 'neofetch') {
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
                else if (val !== '') responseLine.textContent = `Command not found: ${val}`;

                if (val !== 'clear' && val !== 'sudo rm -rf /*') termOutput.appendChild(responseLine);
                termInput.value = '';
                const contentDiv = termInput.closest('.window-content');
                contentDiv.scrollTop = contentDiv.scrollHeight;
            }
        });
    }

    const hackerTermInput = document.getElementById('hacker-term-input');
    const hackerTermOutput = document.getElementById('hacker-term-output');

    window.hackerFirewallBreached = false;
    window.hackerDataDecrypted = false;
    window.hackerTraceAccessKey = Math.floor(1000 + Math.random() * 9000).toString();

    window.triggerAtlastobyHack = function () {
        const hackerTermInput = document.getElementById('hacker-term-input');
        if (hackerTermInput) hackerTermInput.style.display = 'none';
        const oldHackerAudio = document.getElementById('hacker-audio');
        if (oldHackerAudio) { oldHackerAudio.src = ''; oldHackerAudio.remove(); }

        // ============================================================
        // PHASE 1: Instant black takeover + RGB chromatic split
        // ============================================================
        const blackout = document.createElement('div');
        blackout.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:#000;z-index:9999990;pointer-events:none;';
        document.body.appendChild(blackout);

        // Chromatic aberration layers (red/blue offset clones)
        const rgbR = document.createElement('div');
        rgbR.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(255,0,0,0.12);z-index:9999991;pointer-events:none;mix-blend-mode:screen;transform:translateX(6px);';
        const rgbB = document.createElement('div');
        rgbB.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,255,255,0.10);z-index:9999991;pointer-events:none;mix-blend-mode:screen;transform:translateX(-6px);';
        document.body.appendChild(rgbR);
        document.body.appendChild(rgbB);

        // Animated scanlines
        const scanlines = document.createElement('div');
        scanlines.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:9999992;pointer-events:none;background:repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.35) 3px,rgba(0,0,0,0.35) 4px);animation:atlastoby-scan 0.08s steps(1) infinite;';
        document.body.appendChild(scanlines);
        if (!document.getElementById('atlastoby-scan-style')) {
            const st = document.createElement('style');
            st.id = 'atlastoby-scan-style';
            st.textContent = `
                @keyframes atlastoby-scan { 0%{background-position:0 0} 100%{background-position:0 8px} }
                @keyframes atlastoby-glitch-h { 0%,100%{clip-path:inset(0 0 95% 0)} 10%{clip-path:inset(30% 0 50% 0)} 30%{clip-path:inset(70% 0 10% 0)} 50%{clip-path:inset(15% 0 75% 0)} 70%{clip-path:inset(55% 0 30% 0)} 90%{clip-path:inset(5% 0 85% 0)} }
                @keyframes atlastoby-type { from{width:0} to{width:100%} }
                @keyframes atlastoby-blink { 0%,100%{opacity:1} 50%{opacity:0} }
                @keyframes atlastoby-rgb-shake { 0%{transform:translateX(0)} 20%{transform:translateX(8px)} 40%{transform:translateX(-8px)} 60%{transform:translateX(4px)} 80%{transform:translateX(-4px)} 100%{transform:translateX(0)} }
            `;
            document.head.appendChild(st);
        }

        // ============================================================
        // PHASE 2: Matrix rain canvas
        // ============================================================
        const canvas = document.createElement('canvas');
        canvas.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:9999993;pointer-events:none;opacity:0;transition:opacity 0.5s;';
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        const cols = Math.floor(canvas.width / 16);
        const drops = Array(cols).fill(1);
        const matrixChars = 'アイウエオカキクケコABCDEFGHIJ01アイウエオ!@#$%^&ATLASTOBY';
        function drawMatrix() {
            ctx.fillStyle = 'rgba(0,0,0,0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#0f0';
            ctx.font = '14px monospace';
            drops.forEach((y, i) => {
                ctx.fillStyle = i % 7 === 0 ? '#fff' : '#0f0';
                ctx.fillText(matrixChars[Math.floor(Math.random() * matrixChars.length)], i * 16, y * 16);
                if (y * 16 > canvas.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            });
        }
        const matrixTimer = setInterval(drawMatrix, 33);
        setTimeout(() => { canvas.style.opacity = '0.6'; }, 100);

        // ============================================================
        // PHASE 3: Terminal takeover panel with typed messages
        // ============================================================
        const terminal = document.createElement('div');
        terminal.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:min(700px,90vw);background:#000;border:2px solid #f00;border-radius:6px;z-index:9999997;font-family:monospace;font-size:0.85rem;padding:18px 22px;box-shadow:0 0 60px #f00, 0 0 120px #f004;color:#0f0;line-height:1.7;`;
        document.body.appendChild(terminal);

        const termLines = [
            { text: 'SYSTEM BREACH DETECTED — FIREWALL BYPASSED', color: '#f00', delay: 0 },
            { text: 'INTRUDER: ATLASTOBY // ORIGIN: UNKNOWN', color: '#f00', delay: 400 },
            { text: '> SCANNING ROOT DIRECTORIES...', color: '#0f0', delay: 900 },
            { text: '> /etc/passwd ............ [STOLEN]', color: '#ff0', delay: 1300 },
            { text: '> /home/user/.ssh/id_rsa .. [EXFILTRATED]', color: '#ff0', delay: 1700 },
            { text: '> KEYLOGGER INSTALLED ...... [OK]', color: '#f80', delay: 2100 },
            { text: '> WEBCAM ACTIVATED ......... [STREAMING]', color: '#f80', delay: 2500 },
            { text: '> CRYPTO WALLET DRAINED .... [$$$]', color: '#f00', delay: 2900 },
            { text: '> UPLOADING YOUR DATA TO darknet.onion...', color: '#f0f', delay: 3400 },
            { text: '████████████████████████ 100% COMPLETE', color: '#0f0', delay: 4000 },
            { text: '', delay: 4300 },
            { text: '⚠  YOU HAVE BEEN OWNED BY  ⚠', color: '#fff', delay: 4600 },
            { text: '     ██╗ █████╗ ████████╗     ', color: '#f00', delay: 5000 },
        ];

        termLines.forEach(({ text, color, delay }) => {
            setTimeout(() => {
                const line = document.createElement('div');
                line.style.color = color || '#0f0';
                line.textContent = text;
                terminal.appendChild(line);
                terminal.scrollTop = terminal.scrollHeight;
            }, delay);
        });

        // ============================================================
        // PHASE 4: DOM glitch — wobble + text corruption
        // ============================================================
        document.body.classList.add('wobble-tornado');
        const allEls = document.querySelectorAll('.tile, .project-tile, button, .glass-panel, .window, h1, h2, p');
        allEls.forEach(el => {
            el.style.animation = `wobble-glitch ${Math.random() * 0.08 + 0.04}s infinite alternate`;
        });

        // RGB shake on body
        let shakeStep = 0;
        const shakeInterval = setInterval(() => {
            const x = (Math.random() - 0.5) * 22;
            const y = (Math.random() - 0.5) * 14;
            const rot = (Math.random() - 0.5) * 2.5;
            document.body.style.transform = `translate(${x}px,${y}px) rotate(${rot}deg)`;
            rgbR.style.transform = `translateX(${4 + Math.random() * 10}px)`;
            rgbB.style.transform = `translateX(${-4 - Math.random() * 10}px)`;
            document.body.style.filter = Math.random() > 0.75 ? 'invert(1) hue-rotate(180deg) saturate(3)' : Math.random() > 0.5 ? 'hue-rotate(90deg) saturate(2)' : 'none';
            // Corrupt random elements text
            if (Math.random() > 0.6) {
                const el = allEls[Math.floor(Math.random() * allEls.length)];
                if (el && el.children.length === 0 && el.tagName !== 'IMG') {
                    el.textContent = ['ATLASTOBY', '> ACCESS GRANTED', '01001000', '##OWNED##', 'SYSTEM FAILURE', 'ERROR: 0x00F'][Math.floor(Math.random() * 6)];
                    el.style.color = '#f00';
                }
            }
        }, 45);

        // ============================================================
        // PHASE 5: HACKED message overlay (large, glitching, LEFT side)
        // ============================================================
        setTimeout(() => {
            const overlayMsg = document.createElement('div');
            overlayMsg.style.cssText = `position:fixed;top:10%;left:3%;font-size:clamp(2rem,7vw,7rem);color:#f00;font-family:monospace;font-weight:bold;text-shadow:0 0 20px #f00, 0 0 60px #f00, 4px 0 0 #0ff, -4px 0 0 #f0f;z-index:9999998;pointer-events:none;white-space:nowrap;animation:atlastoby-rgb-shake 0.1s infinite;letter-spacing:-2px;`;
            overlayMsg.textContent = 'HACKED BY ATLASTOBY';
            document.body.appendChild(overlayMsg);

            // Glitch duplicate (slightly offset, different color)
            const overlayGhost = document.createElement('div');
            overlayGhost.style.cssText = `position:fixed;top:calc(10% + 6px);left:3%;font-size:clamp(2rem,7vw,7rem);color:#0ff;font-family:monospace;font-weight:bold;opacity:0.4;z-index:9999997;pointer-events:none;white-space:nowrap;mix-blend-mode:screen;letter-spacing:-2px;`;
            overlayGhost.textContent = 'HACKED BY ATLASTOBY';
            document.body.appendChild(overlayGhost);

            // Secondary line below
            const subLine = document.createElement('div');
            subLine.style.cssText = `position:fixed;top:calc(10% + clamp(2rem,7vw,7rem) + 8px);left:3%;font-size:clamp(0.8rem,2vw,1.4rem);color:#0f0;font-family:monospace;font-weight:bold;z-index:9999998;pointer-events:none;animation:atlastoby-blink 0.5s infinite;`;
            subLine.textContent = '> ALL YOUR DATA BELONG TO US_';
            document.body.appendChild(subLine);
        }, 800);

        // Horizontal glitch bars slicing across screen
        setTimeout(() => {
            for (let i = 0; i < 8; i++) {
                const bar = document.createElement('div');
                const h = Math.random() * 30 + 5;
                const top = Math.random() * 100;
                bar.style.cssText = `position:fixed;top:${top}vh;left:0;width:100vw;height:${h}px;background:rgba(255,0,0,0.15);z-index:9999995;pointer-events:none;mix-blend-mode:screen;transform:translateX(0);`;
                document.body.appendChild(bar);
                // Animate bar sliding
                let dir = Math.random() > 0.5 ? 1 : -1;
                setInterval(() => {
                    const offset = (Math.random() * 80 - 40) * dir;
                    bar.style.transform = `translateX(${offset}px)`;
                    bar.style.top = `${top + (Math.random() - 0.5) * 3}vh`;
                    bar.style.opacity = (Math.random() * 0.4 + 0.1).toString();
                }, 80);
            }
        }, 500);

        // Pixel noise overlay
        const noiseCanvas = document.createElement('canvas');
        noiseCanvas.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:9999994;pointer-events:none;opacity:0.08;mix-blend-mode:screen;';
        noiseCanvas.width = 200; noiseCanvas.height = 200;
        document.body.appendChild(noiseCanvas);
        const nCtx = noiseCanvas.getContext('2d');
        setInterval(() => {
            const img = nCtx.createImageData(200, 200);
            for (let i = 0; i < img.data.length; i += 4) {
                const v = Math.random() > 0.5 ? 255 : 0;
                img.data[i] = v; img.data[i + 1] = 0; img.data[i + 2] = 0; img.data[i + 3] = 180;
            }
            nCtx.putImageData(img, 0, 0);
        }, 50);

        // ============================================================
        // PHASE 6: Waves of Atlastoby images (slow + fast)
        // ============================================================
        // First wave: slow fade-in large images
        setTimeout(() => {
            for (let i = 0; i < 4; i++) {
                setTimeout(() => {
                    const img = document.createElement('img');
                    img.src = 'atlastoby.jpg';
                    img.style.cssText = `position:fixed;width:${Math.random() * 300 + 200}px;height:auto;top:${Math.random() * 70}vh;left:${Math.random() * 80}vw;z-index:${9999994 + i};transform:rotate(${(Math.random() - 0.5) * 30}deg);opacity:0;transition:opacity 1.2s ease;pointer-events:none;box-shadow:0 0 40px #f00, 0 0 80px #f004;filter:hue-rotate(${Math.floor(Math.random() * 360)}deg) saturate(2);mix-blend-mode:${Math.random() > 0.5 ? 'difference' : 'normal'};`;
                    document.body.appendChild(img);
                    setTimeout(() => img.style.opacity = (Math.random() * 0.5 + 0.4).toString(), 100);
                }, i * 400);
            }
        }, 1200);

        // Second wave: rapid-fire small images
        let imgInterval = setInterval(() => {
            const img = document.createElement('img');
            img.src = 'atlastoby.jpg';
            const size = Math.random() * 300 + 80;
            img.style.cssText = `position:fixed;width:${size}px;height:auto;top:${Math.random() * 100}vh;left:${Math.random() * 100}vw;z-index:${Math.floor(Math.random() * 1000 + 9999000)};transform:rotate(${Math.random() * 360}deg) scale(${Math.random() * 1.5 + 0.5});opacity:${Math.random() * 0.6 + 0.3};pointer-events:none;box-shadow:0 0 ${Math.floor(Math.random() * 60 + 20)}px #f00;mix-blend-mode:${Math.random() > 0.5 ? 'difference' : 'screen'};`;
            document.body.appendChild(img);
        }, 120);

        // ============================================================
        // SoundCloud Audio
        // ============================================================
        let atlastobyAudio = document.createElement('iframe');
        atlastobyAudio.id = 'atlastoby-audio';
        atlastobyAudio.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:-9999;opacity:0.01;pointer-events:none;';
        atlastobyAudio.setAttribute('allow', 'autoplay; encrypted-media');
        atlastobyAudio.src = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1428309283&auto_play=true';
        document.body.appendChild(atlastobyAudio);

        const scScript = document.createElement('script');
        scScript.src = 'https://w.soundcloud.com/player/api.js';
        scScript.onload = () => {
            const widget = SC.Widget(atlastobyAudio);
            widget.bind(SC.Widget.Events.READY, () => {
                widget.seekTo(240000);
                widget.play();
            });
        };
        document.body.appendChild(scScript);
    };

    if (hackerTermInput) {
        function typeWriterEffect(element, text, speed, callback) {
            let i = 0;
            element.innerHTML = '';
            function type() {
                if (i < text.length) {
                    if (text.charAt(i) === '<' && text.substring(i, i + 4) === '<br>') {
                        element.innerHTML += '<br>';
                        i += 4;
                    } else {
                        element.innerHTML += text.charAt(i);
                        i++;
                    }
                    setTimeout(type, speed);
                } else if (callback) {
                    callback();
                }
            }
            type();
        }

        hackerTermInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const val = hackerTermInput.value.trim().toLowerCase();
                const cmdLine = document.createElement('p');
                cmdLine.innerHTML = `<span class="prompt" style="color: #0f0; margin-right: 8px;">root@atlas-toby:~#</span> ${hackerTermInput.value.trim()}`;
                hackerTermOutput.appendChild(cmdLine);
                hackerTermInput.value = '';

                if (val === 'clear') {
                    hackerTermOutput.innerHTML = '';
                    return;
                }

                const responseLine = document.createElement('p');
                hackerTermOutput.appendChild(responseLine);
                hackerTermInput.disabled = true;

                let responseText = "";
                let typeSpeed = 30;
                let postAction = null;

                if (hackerTermInput.dataset.crackCode) {
                    const code = hackerTermInput.dataset.crackCode;
                    const startTime = parseInt(hackerTermInput.dataset.crackTime);
                    hackerTermInput.removeAttribute('data-crack-code');

                    if (Date.now() - startTime > 6000) {
                        responseText = "<span style='color:red'>[X] ACCESS DENIED. Time expired. Security protocols engaged.</span>";
                    } else if (val.toUpperCase() === code) {
                        responseText = "<span style='color:#0f0'>[OK] ACCESS GRANTED. Firewall breached. Downloading payload...</span>";
                        window.hackerFirewallBreached = true;
                    } else {
                        responseText = "<span style='color:red'>[X] ACCESS DENIED. Invalid bypass code. Intrusion detected.</span>";
                    }
                    typeSpeed = 10;
                }
                else if (hackerTermInput.dataset.decryptSeq) {
                    const ans = hackerTermInput.dataset.decryptSeq;
                    hackerTermInput.removeAttribute('data-decrypt-seq');
                    if (val === ans) {
                        responseText = `<span style='color:#0f0'>DECRYPTION SUCCESSFUL.</span><br>Classified data retrieved: 'Project_Antigravity_Source_Code.zip'<br>TRACE ACCESS KEY: <span style='color:yellow'>${window.hackerTraceAccessKey}</span>`;
                        window.hackerDataDecrypted = true;
                    } else {
                        responseText = "<span style='color:red'>DECRYPTION FAILED. Sequence mismatch. Data corrupted.</span>";
                    }
                    typeSpeed = 10;
                }
                else if (hackerTermInput.dataset.traceKeyExpected) {
                    const expectedKey = hackerTermInput.dataset.traceKeyExpected;
                    hackerTermInput.removeAttribute('data-trace-key-expected');
                    if (val === expectedKey) {
                        responseText = "Tracing IP...<br>Pinging routing nodes...<br>Node 1: 192.168.1.1<br>Node 2: 10.0.0.55<br>Node 3: 172.16.254.1<br>Target located: Warsaw, Poland.<br>Coordinates acquired.";
                    } else {
                        responseText = "Tracing IP...<br>Pinging routing nodes...<br><span style='color:red; font-weight:bold; font-size:1.5em; text-shadow:0 0 10px red;'>FAILURE ACCESS DENIED! INVALID KEY.</span>";
                        typeSpeed = 40;
                        postAction = 'atlastoby_hack';
                    }
                }
                else if (val === 'help') {
                    responseText = "MODULES:<br>- crack: Mini-game - Bypass security code<br>- decrypt: Mini-game - Decode binary<br>- hack: Initialize mainframe hack<br>- clear: Clear logs<br>- bypass: Bypass security protocols<br>- nuke: Delete all data<br>- trace: Trace IP address<br>- ddos: Initiate DDoS attack<br>- override: Override system lock<br>- matrix: Enter the matrix<br>- super hacker mode: Enter manual hack mode";
                    typeSpeed = 10;
                }
                else if (val === 'crack') {
                    const targetCode = Math.random().toString(36).substring(2, 10).toUpperCase();
                    responseText = `INITIATING CRACKING SEQUENCE...<br>Enter the bypass code quickly: <strong style="color:red; font-size:1.2em; letter-spacing:3px;">${targetCode}</strong><br>You have 6 seconds.`;
                    typeSpeed = 20;
                    hackerTermInput.dataset.crackCode = targetCode;
                    hackerTermInput.dataset.crackTime = Date.now();
                }
                else if (val === 'decrypt') {
                    const q = "01101000 01100001 01100011 01101011";
                    responseText = `DECRYPT THIS BINARY SEQUENCE TO PROCEED:<br><strong style="color:#0ff">${q}</strong><br>Enter text translation:`;
                    typeSpeed = 20;
                    hackerTermInput.dataset.decryptSeq = "hack";
                }
                else if (val === 'hack') {
                    responseText = "Connecting to mainframe...<br>Bypassing firewall...<br>ACCESS GRANTED. Downloading classified files...<br>[=========> ] 90%<br>[==========] 100% DONE.";
                    window.hackerFirewallBreached = true;
                }
                else if (val === 'bypass') {
                    responseText = "Injecting SQL payload...<br>Searching for vulnerabilities...<br>Security protocols bypassed. System is now vulnerable.";
                }
                else if (val === 'nuke') {
                    responseText = "Initiating global wipe...<br>WARNING: THIS ACTION IS IRREVERSIBLE.<br>3... 2... 1...<br>TACTICAL NUKE DEPLOYED.";
                    typeSpeed = 80;
                    postAction = 'nuke';

                    document.body.style.transition = 'background-color 0.2s';
                    let preNukeInterval = setInterval(() => {
                        document.body.style.backgroundColor = document.body.style.backgroundColor === 'red' ? '' : 'red';
                        if (typeof playClickSound === 'function') playClickSound(100, 20, 'square', 3.0);
                    }, 400);
                    hackerTermInput.dataset.nukeInterval = preNukeInterval;
                }
                else if (val === 'trace') {
                    responseText = "AUTH REQUIRED.<br>ENTER TRACE ACCESS KEY:";
                    hackerTermInput.dataset.traceKeyExpected = window.hackerTraceAccessKey;
                    typeSpeed = 20;
                }
                else if (val === 'ddos') {
                    responseText = "Initializing botnet...<br>Target acquired.<br>Sending packets...<br>Server load: 15%<br>Server load: 58%<br>Server load: 99%<br>TARGET OFFLINE.";
                    typeSpeed = 40;
                }
                else if (val === 'decrypt') {
                    responseText = "Analyzing hash... SHA-256 detected.<br>Running brute-force dictionary attack...<br>14,500 hashes/sec<br>Match found!<br>Password: hunter2";
                }
                else if (val === 'override') {
                    responseText = "Attempting system override...<br>Overriding kernel parameters...<br>SYSTEM OVERRIDE SUCCESSFUL. You have control.";
                }
                else if (val === 'matrix') {
                    responseText = "Wake up, Neo...<br>The Matrix has you...";
                    typeSpeed = 80;
                    setTimeout(startMatrixEffect, 2000);
                }
                else if (val === 'super hacker mode') {
                    responseText = "INITIALIZING MANUAL HACKING INTERFACE...<br>PRESS ANY KEY TO INJECT CODE.<br>PRESS ESC TO ABORT.";
                    typeSpeed = 40;
                    postAction = 'super_hacker_mode';
                }
                else if (val === 'atlastoby come to life!') {
                    responseText = "wanna play a little game?...";
                    typeSpeed = 30;
                    setTimeout(() => {
                        if (typeof openWindow === 'function') openWindow('window-atlastoby-game');
                        if (typeof window.startAtlastobyUI === 'function') window.startAtlastobyUI();
                    }, 1000);
                }
                else if (val !== '') {
                    responseText = `Command not recognized: ${val}`;
                    typeSpeed = 10;
                }

                typeWriterEffect(responseLine, responseText, typeSpeed, () => {
                    hackerTermInput.disabled = false;
                    hackerTermInput.focus();
                    const contentDiv = hackerTermInput.closest('.window-content');
                    contentDiv.scrollTop = contentDiv.scrollHeight;

                    if (postAction === 'super_hacker_mode') {
                        hackerTermInput.style.display = 'none';
                        const hackerTyperCode = `
#include <stdio.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <unistd.h>
#include <string.h>

int main(int argc, char *argv[]) {
    printf("Initializing payload delivery...\\n");
    int sock = socket(AF_INET, SOCK_STREAM, 0);
    struct sockaddr_in target;
    target.sin_family = AF_INET;
    target.sin_port = htons(443);
    inet_pton(AF_INET, "192.168.1.100", &target.sin_addr);
    
    if (connect(sock, (struct sockaddr *)&target, sizeof(target)) < 0) {
        printf("Connection failed. Retrying...\\n");
        return -1;
    }
    
    printf("Connected to target mainframe.\\n");
    printf("Bypassing firewall [|||||||||||||||||||] 100%\\n");
    
    char payload[] = "\\x90\\x90\\x90\\x90\\x31\\xc0\\x50\\x68\\x2f\\x2f\\x73\\x68\\x68\\x2f\\x62\\x69\\x6e\\x89\\xe3\\x50\\x53\\x89\\xe1\\xb0\\x0b\\xcd\\x80";
    send(sock, payload, strlen(payload), 0);
    
    printf("Payload injected successfully. Opening root shell.\\n");
    printf("root@target:~# whoami\\nroot\\n");
    printf("root@target:~# cat /etc/shadow > /tmp/hashes.txt\\n");
    printf("root@target:~# rm -rf /var/log/syslog\\n");
    printf("Covering tracks...\\n");
    
    close(sock);
    return 0;
}
`;
                        let charIndex = 0;
                        let keyCount = 0;

                        const typerDiv = document.createElement('div');
                        typerDiv.style.color = '#0f0';
                        typerDiv.style.fontFamily = 'monospace';
                        typerDiv.style.whiteSpace = 'pre-wrap';
                        typerDiv.style.marginTop = '10px';
                        hackerTermOutput.appendChild(typerDiv);

                        function hackerTyperListener(e) {
                            e.preventDefault();
                            if (e.key === 'Escape') {
                                window.removeEventListener('keydown', hackerTyperListener, true);
                                const exitMsg = document.createElement('p');
                                exitMsg.innerHTML = '<br>MANUAL HACK ABORTED. Returning to auto mode.';
                                hackerTermOutput.appendChild(exitMsg);
                                hackerTermInput.style.display = '';
                                hackerTermInput.focus();
                                contentDiv.scrollTop = contentDiv.scrollHeight;
                                return;
                            }

                            if (e.key === 'Enter' && keyCount >= 60) {
                                window.removeEventListener('keydown', hackerTyperListener, true);
                                hackerTermOutput.innerHTML = '';

                                const successDiv = document.createElement('div');
                                successDiv.style.display = 'flex';
                                successDiv.style.flexDirection = 'column';
                                successDiv.style.alignItems = 'center';
                                successDiv.style.justifyContent = 'center';
                                successDiv.style.height = '100%';
                                successDiv.style.width = '100%';
                                successDiv.style.position = 'absolute';
                                successDiv.style.top = '0';
                                successDiv.style.left = '0';
                                successDiv.style.backgroundColor = 'black';
                                successDiv.style.zIndex = '10';

                                const msg = document.createElement('h1');
                                msg.textContent = 'ACCESS GRANTED';
                                msg.style.color = '#0f0';
                                msg.style.fontSize = '4rem';
                                msg.style.textShadow = '0 0 20px #0f0';
                                msg.style.animation = 'wobble-pulse 0.5s infinite alternate';

                                const subMsg = document.createElement('p');
                                subMsg.textContent = 'System compromised. Root shell active.';
                                subMsg.style.color = 'white';
                                subMsg.style.marginTop = '20px';

                                successDiv.appendChild(msg);
                                successDiv.appendChild(subMsg);
                                hackerTermOutput.parentElement.appendChild(successDiv);

                                document.body.classList.add('wobble-glitch');
                                if (typeof playClickSound === 'function') playClickSound(200, 50, 'sawtooth', 3.0);

                                let flashCount = 0;
                                let flashInterval = setInterval(() => {
                                    successDiv.style.backgroundColor = flashCount % 2 === 0 ? 'green' : 'black';
                                    msg.style.color = flashCount % 2 === 0 ? 'black' : '#0f0';
                                    flashCount++;
                                    if (flashCount > 10) {
                                        clearInterval(flashInterval);
                                        setTimeout(() => {
                                            successDiv.remove();
                                            document.body.classList.remove('wobble-glitch');
                                            hackerTermOutput.innerHTML = '<p>Root shell terminated. Returning to standard interface.</p>';
                                            hackerTermInput.style.display = '';
                                            hackerTermInput.focus();
                                        }, 2000);
                                    }
                                }, 100);

                                return;
                            }

                            keyCount++;
                            const charsToAdd = Math.floor(Math.random() * 3) + 3;
                            for (let j = 0; j < charsToAdd; j++) {
                                if (charIndex >= hackerTyperCode.length) charIndex = 0;
                                typerDiv.textContent += hackerTyperCode[charIndex];
                                charIndex++;
                            }
                            contentDiv.scrollTop = contentDiv.scrollHeight;
                        }

                        window.addEventListener('keydown', hackerTyperListener, true);
                    }
                    else if (postAction === 'nuke') {
                        clearInterval(parseInt(hackerTermInput.dataset.nukeInterval));
                        document.body.style.backgroundColor = '';

                        const flash = document.createElement('div');
                        flash.style.position = 'fixed';
                        flash.style.top = '0';
                        flash.style.left = '0';
                        flash.style.width = '100vw';
                        flash.style.height = '100vh';
                        flash.style.backgroundColor = 'white';
                        flash.style.zIndex = '999999';
                        document.body.appendChild(flash);

                        document.body.classList.add('wobble-tornado');
                        const allEls = document.querySelectorAll('.tile, .project-tile, img, button, .glass-panel');
                        allEls.forEach(el => {
                            el.style.animation = `wobble-glitch ${Math.random() * 0.3 + 0.1}s infinite alternate`;
                            el.style.filter = 'invert(1) hue-rotate(90deg)';
                        });

                        let explodeInterval = setInterval(() => {
                            if (typeof playClickSound === 'function') playClickSound(50, 10, 'sawtooth', 5.0);
                            flash.style.backgroundColor = Math.random() > 0.5 ? 'red' : 'yellow';
                            flash.style.opacity = Math.random() > 0.5 ? '0.8' : '1';
                        }, 50);

                        setTimeout(() => {
                            clearInterval(explodeInterval);
                            flash.style.backgroundColor = 'black';
                            flash.style.opacity = '1';
                            flash.style.color = '#0f0';
                            flash.style.fontFamily = 'monospace';
                            flash.innerHTML = '<div style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;"><div style="font-size:15rem;animation:wobble-heartbeat 0.5s infinite;">☠️</div><h1 style="font-size:3rem;text-shadow: 0 0 20px #0f0;text-align:center;">FATAL SYSTEM ERROR</h1><p style="font-size:1.5rem;">Kernel panic. Memory corrupted. Manual recovery required.</p></div>';
                        }, 3000);

                        setTimeout(() => {
                            flash.innerHTML = '<div id="rebuild-container" style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;"><h1 style="font-size:3rem;text-shadow: 0 0 20px #0f0;text-align:center;margin-bottom:30px;">SYSTEM RECOVERY MODE</h1><p id="rebuild-status" style="font-size:1.5rem;margin-bottom:40px;">Awaiting manual rebuild...</p></div>';

                            const rebuildContainer = document.getElementById('rebuild-container');
                            const status = document.getElementById('rebuild-status');

                            function createStepBtn(text, nextStepCallback) {
                                const btn = document.createElement('button');
                                btn.textContent = text;
                                btn.style.padding = '15px 30px';
                                btn.style.fontSize = '1.2rem';
                                btn.style.backgroundColor = 'transparent';
                                btn.style.color = '#0f0';
                                btn.style.border = '2px solid #0f0';
                                btn.style.cursor = 'pointer';
                                btn.style.fontFamily = 'monospace';
                                btn.style.transition = 'all 0.2s';

                                btn.addEventListener('mouseover', () => {
                                    btn.style.backgroundColor = '#0f0';
                                    btn.style.color = 'black';
                                });
                                btn.addEventListener('mouseout', () => {
                                    btn.style.backgroundColor = 'transparent';
                                    btn.style.color = '#0f0';
                                });

                                btn.addEventListener('click', () => {
                                    btn.remove();
                                    let progress = 0;
                                    const progressInterval = setInterval(() => {
                                        progress += Math.floor(Math.random() * 15) + 5;
                                        if (progress > 100) progress = 100;
                                        status.textContent = `Processing: ${text} [${progress}%]`;
                                        if (progress >= 100) {
                                            clearInterval(progressInterval);
                                            status.textContent = `${text} - COMPLETE.`;
                                            setTimeout(nextStepCallback, 500);
                                        }
                                    }, 100);
                                });

                                rebuildContainer.appendChild(btn);
                            }

                            function step1() { createStepBtn('1. LOAD KERNEL', step2); }
                            function step2() { createStepBtn('2. RESTORE DOM', step3); }
                            function step3() { createStepBtn('3. INJECT CSS', step4); }
                            function step4() {
                                createStepBtn('4. MOUNT ASSETS', () => {
                                    status.textContent = 'SYSTEM FULLY REBUILT. INITIALIZING BOOT SEQUENCE...';
                                    setTimeout(() => {
                                        document.body.classList.remove('wobble-tornado');
                                        const allEls = document.querySelectorAll('.tile, .project-tile, img, button, .glass-panel');
                                        allEls.forEach(el => {
                                            el.style.animation = '';
                                            el.style.filter = '';
                                        });

                                        const sections = document.querySelectorAll('header, .profile-container, section, footer, .window');
                                        sections.forEach(s => {
                                            s.style.opacity = '0';
                                            s.style.transform = 'translateY(50px)';
                                            s.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                                        });

                                        flash.style.transition = 'opacity 1s';
                                        flash.style.opacity = '0';
                                        setTimeout(() => flash.remove(), 1000);

                                        let delay = 1000;
                                        sections.forEach(s => {
                                            setTimeout(() => {
                                                s.style.opacity = '1';
                                                s.style.transform = 'translateY(0)';
                                            }, delay);
                                            delay += 300;
                                        });

                                        setTimeout(() => {
                                            sections.forEach(s => {
                                                s.style.transition = '';
                                                s.style.opacity = '';
                                                s.style.transform = '';
                                            });
                                            const hInput = document.getElementById('hacker-term-input');
                                            if (hInput) {
                                                hInput.disabled = false;
                                                hInput.focus();
                                            }
                                        }, delay + 600);
                                    }, 1500);
                                });
                            }

                            setTimeout(step1, 1000);
                        }, 7000);
                    }
                    else if (postAction === 'atlastoby_hack') {
                        if (typeof window.triggerAtlastobyHack === 'function') {
                            window.triggerAtlastobyHack();
                        }
                    }
                });

                const contentDiv = hackerTermInput.closest('.window-content');
                contentDiv.scrollTop = contentDiv.scrollHeight;
            }
        });
    }

    const snakeTile = document.getElementById('snake-tile');
    let snakeGameRunning = false;

    if (snakeTile) {
        snakeTile.addEventListener('click', (e) => {
            if (e.target.closest('.project-tile')) openWindow('window-snake');
        });
    }

    const secretItems = document.querySelectorAll('.secret-item');
    secretItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.background = document.body.classList.contains('dark-mode') ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.background = 'transparent';
        });
        item.addEventListener('click', () => {
            const secret = item.getAttribute('data-secret');
            document.getElementById('window-secrets').style.display = 'none';

            if (secret === 'atlastoby') {
                typedMagicWord = 'atlastob';
                window.dispatchEvent(new KeyboardEvent('keydown', { key: 'y' }));
                setTimeout(() => typedMagicWord = '', 100);
            }
            else if (secret === 'invincible') {
                typedMagicWord = 'invincibl';
                window.dispatchEvent(new KeyboardEvent('keydown', { key: 'e' }));
                setTimeout(() => typedMagicWord = '', 100);
            }
            else if (secret === 'magia') {
                typedMagicWord = 'magi';
                window.dispatchEvent(new KeyboardEvent('keydown', { key: 'a' }));
                setTimeout(() => typedMagicWord = '', 100);
            }
            else if (secret === 'rower') {
                typedMagicWord = 'rowe';
                window.dispatchEvent(new KeyboardEvent('keydown', { key: 'r' }));
                setTimeout(() => typedMagicWord = '', 100);
            }
            else if (secret === 'matrix') {
                startMatrixEffect();
            }
            else if (secret === 'wobble') {
                openWindow('window-terminal');
                const tInput = document.getElementById('term-input');
                if (tInput) { tInput.value = 'wobble'; tInput.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' })); }
            }
            else if (secret === 'ignacy') {
                openWindow('window-terminal');
                const tInput = document.getElementById('term-input');
                if (tInput) { tInput.value = 'ignacy'; tInput.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' })); }
            }
            else if (secret === 'rmrf') {
                openWindow('window-terminal');
                const tInput = document.getElementById('term-input');
                if (tInput) { tInput.value = 'sudo rm -rf /*'; tInput.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' })); }
            }
        });
    });

    const snakeCanvas = document.getElementById('snake-canvas');
    const startSnakeBtn = document.getElementById('start-snake-btn');
    const sCtx = snakeCanvas ? snakeCanvas.getContext('2d') : null;

    let snake = [];
    let snakeDx = 10;
    let snakeDy = 0;
    let snakeNextDx = 10;
    let snakeNextDy = 0;
    let snakeFood = { x: 0, y: 0 };
    let snakeScore = 0;
    let snakeHighScore = localStorage.getItem('snakeHighScore') || 0;
    let snakeSpeed = 120;
    let snakeParticles = [];
    let lastRenderTime = 0;

    function playSnakeSound(type) {
        if (typeof soundEnabled !== 'undefined' && !soundEnabled) return;
        try {
            const ctx = window.AudioContext || window.webkitAudioContext;
            if (!window.snakeAudioCtx) window.snakeAudioCtx = new ctx();
            if (window.snakeAudioCtx.state === 'suspended') window.snakeAudioCtx.resume();
            const osc = window.snakeAudioCtx.createOscillator();
            const gain = window.snakeAudioCtx.createGain();

            if (type === 'eat') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(800, window.snakeAudioCtx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(1200, window.snakeAudioCtx.currentTime + 0.1);
                gain.gain.setValueAtTime(0.2, window.snakeAudioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, window.snakeAudioCtx.currentTime + 0.1);
                osc.start();
                osc.stop(window.snakeAudioCtx.currentTime + 0.1);
            } else if (type === 'die') {
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(300, window.snakeAudioCtx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(50, window.snakeAudioCtx.currentTime + 0.3);
                gain.gain.setValueAtTime(0.3, window.snakeAudioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, window.snakeAudioCtx.currentTime + 0.3);
                osc.start();
                osc.stop(window.snakeAudioCtx.currentTime + 0.3);
            }
            osc.connect(gain);
            gain.connect(window.snakeAudioCtx.destination);
        } catch (e) { }
    }

    function drawSnakeGrid() {
        if (!sCtx) return;
        sCtx.fillStyle = '#050505';
        sCtx.fillRect(0, 0, 300, 300);
        sCtx.strokeStyle = 'rgba(0, 255, 0, 0.05)';
        sCtx.lineWidth = 1;
        for (let i = 0; i <= 300; i += 10) {
            sCtx.beginPath(); sCtx.moveTo(i, 0); sCtx.lineTo(i, 300); sCtx.stroke();
            sCtx.beginPath(); sCtx.moveTo(0, i); sCtx.lineTo(300, i); sCtx.stroke();
        }
    }

    function drawSnake() {
        if (!sCtx) return;
        sCtx.shadowBlur = 10;
        sCtx.shadowColor = '#00ff00';
        snake.forEach((part, index) => {
            sCtx.fillStyle = index === 0 ? '#00ffcc' : '#00ff00';
            sCtx.fillRect(part.x, part.y, 10, 10);
        });
        sCtx.shadowBlur = 0;
    }

    function spawnFood() {
        snakeFood = {
            x: Math.floor(Math.random() * 29) * 10,
            y: Math.floor(Math.random() * 29) * 10
        };
    }

    function spawnParticles(x, y) {
        for (let i = 0; i < 12; i++) {
            snakeParticles.push({
                x: x + 5, y: y + 5,
                vx: (Math.random() - 0.5) * 5,
                vy: (Math.random() - 0.5) * 5,
                life: 1.0,
                color: Math.random() > 0.5 ? '#ff0000' : '#ffaa00'
            });
        }
    }

    function updateParticles() {
        if (!sCtx) return;
        for (let i = snakeParticles.length - 1; i >= 0; i--) {
            let p = snakeParticles[i];
            p.x += p.vx; p.y += p.vy; p.life -= 0.05;
            if (p.life <= 0) { snakeParticles.splice(i, 1); continue; }
            sCtx.globalAlpha = p.life;
            sCtx.fillStyle = p.color;
            sCtx.fillRect(p.x, p.y, 3, 3);
        }
        sCtx.globalAlpha = 1.0;
    }

    function moveSnake() {
        if (!snakeGameRunning) return;
        snakeDx = snakeNextDx;
        snakeDy = snakeNextDy;
        const head = { x: snake[0].x + snakeDx, y: snake[0].y + snakeDy };

        snake.unshift(head);
        if (head.x === snakeFood.x && head.y === snakeFood.y) {
            snakeScore++;
            if (snakeScore > snakeHighScore) {
                snakeHighScore = snakeScore;
                localStorage.setItem('snakeHighScore', snakeHighScore);
            }
            if (snakeSpeed > 50) snakeSpeed -= 2;
            playSnakeSound('eat');
            spawnParticles(snakeFood.x, snakeFood.y);
            spawnFood();
        } else {
            snake.pop();
        }
    }

    function checkSnakeCollision() {
        const head = snake[0];
        if (head.x < 0 || head.x >= 300 || head.y < 0 || head.y >= 300) return true;
        for (let i = 1; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) return true;
        }
        return false;
    }

    function gameLoop(currentTime) {
        if (!snakeGameRunning) return;
        window.requestAnimationFrame(gameLoop);

        const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

        if (secondsSinceLastRender < snakeSpeed / 1000) {
            drawSnakeGrid();
            drawSnake();
            sCtx.shadowBlur = 15;
            sCtx.shadowColor = '#ff0000';
            sCtx.fillStyle = '#ff0000';
            sCtx.fillRect(snakeFood.x, snakeFood.y, 10, 10);
            sCtx.shadowBlur = 0;
            updateParticles();

            sCtx.fillStyle = 'rgba(255,255,255,0.7)';
            sCtx.font = '12px Courier New';
            sCtx.fillText('Score: ' + snakeScore, 10, 20);
            sCtx.fillText('HI: ' + snakeHighScore, 230, 20);
            return;
        }
        lastRenderTime = currentTime;

        moveSnake();

        if (checkSnakeCollision()) {
            snakeGameRunning = false;
            playSnakeSound('die');
            if (sCtx) {
                sCtx.fillStyle = 'rgba(0, 0, 0, 0.7)';
                sCtx.fillRect(0, 0, 300, 300);
                sCtx.fillStyle = '#00ff00';
                sCtx.font = 'bold 24px Courier New';
                sCtx.textAlign = 'center';
                sCtx.fillText('SYSTEM FAILURE', 150, 140);
                sCtx.fillStyle = '#fff';
                sCtx.font = '14px Courier New';
                sCtx.fillText('Final Score: ' + snakeScore, 150, 170);
                sCtx.textAlign = 'left';
            }
            return;
        }

        drawSnakeGrid();
        drawSnake();
        sCtx.shadowBlur = 15;
        sCtx.shadowColor = '#ff0000';
        sCtx.fillStyle = '#ff0000';
        sCtx.fillRect(snakeFood.x, snakeFood.y, 10, 10);
        sCtx.shadowBlur = 0;
        updateParticles();

        sCtx.fillStyle = 'rgba(255,255,255,0.7)';
        sCtx.font = '12px Courier New';
        sCtx.fillText('Score: ' + snakeScore, 10, 20);
        sCtx.fillText('HI: ' + snakeHighScore, 230, 20);
    }

    if (startSnakeBtn) {
        startSnakeBtn.addEventListener('click', () => {
            snake = [{ x: 150, y: 150 }];
            snakeDx = 10;
            snakeDy = 0;
            snakeNextDx = 10;
            snakeNextDy = 0;
            snakeScore = 0;
            snakeSpeed = 120;
            snakeParticles = [];
            spawnFood();
            snakeGameRunning = true;
            lastRenderTime = window.performance.now();
            window.requestAnimationFrame(gameLoop);

            startSnakeBtn.blur();
        });
    }

    document.addEventListener('keydown', e => {
        if (!snakeGameRunning) return;
        if (e.key === 'ArrowUp' && snakeDy !== 10) { snakeNextDx = 0; snakeNextDy = -10; e.preventDefault(); }
        if (e.key === 'ArrowDown' && snakeDy !== -10) { snakeNextDx = 0; snakeNextDy = 10; e.preventDefault(); }
        if (e.key === 'ArrowLeft' && snakeDx !== 10) { snakeNextDx = -10; snakeNextDy = 0; e.preventDefault(); }
        if (e.key === 'ArrowRight' && snakeDx !== -10) { snakeNextDx = 10; snakeNextDy = 0; e.preventDefault(); }
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

    // Undertale Minigame Logic
    const undertaleBtn = document.getElementById('retro-battle-btn');
    if (undertaleBtn) {
        undertaleBtn.addEventListener('click', () => {
            if (typeof openWindow === 'function') openWindow('window-undertale-game');
        });
    }

    const uCanvas = document.getElementById('undertale-canvas');
    const uCtx = uCanvas ? uCanvas.getContext('2d') : null;
    const startUBtn = document.getElementById('start-undertale-btn');
    const uTimerDisplay = document.getElementById('undertale-timer');

    let uGameRunning = false;
    let uPlayer = { x: 200, y: 150, size: 10, speed: 3 };
    let uProjectiles = [];
    let uKeys = { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false };
    let uStartTime = 0;
    let uLastFrameTime = 0;
    let uSpawnTimer = 0;
    let uSpawnRate = 1000;
    let uDifficultyMultiplier = 1;
    let uBaseMultiplier = 1;
    let uBaseSpawnRate = 800;
    let uScaleSpeed = 15;

    function drawHeart(x, y, size, ctx) {
        ctx.save();
        ctx.fillStyle = '#ff0000';
        ctx.beginPath();
        ctx.moveTo(x, y + size / 4);
        ctx.quadraticCurveTo(x, y, x - size / 2, y);
        ctx.quadraticCurveTo(x - size, y, x - size, y + size / 2);
        ctx.lineTo(x, y + size);
        ctx.lineTo(x + size, y + size / 2);
        ctx.quadraticCurveTo(x + size, y, x + size / 2, y);
        ctx.quadraticCurveTo(x, y, x, y + size / 4);
        ctx.fill();
        ctx.restore();
    }

    function playHeartBreak() {
        if (typeof soundEnabled !== 'undefined' && !soundEnabled) return;
        try {
            const ctx = window.AudioContext || window.webkitAudioContext;
            if (!window.uAudioCtx) window.uAudioCtx = new ctx();
            if (window.uAudioCtx.state === 'suspended') window.uAudioCtx.resume();

            const osc = window.uAudioCtx.createOscillator();
            const gain = window.uAudioCtx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(150, window.uAudioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(40, window.uAudioCtx.currentTime + 0.3);

            gain.gain.setValueAtTime(0.3, window.uAudioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, window.uAudioCtx.currentTime + 0.3);

            osc.connect(gain);
            gain.connect(window.uAudioCtx.destination);
            osc.start();
            osc.stop(window.uAudioCtx.currentTime + 0.3);
        } catch (e) { }
    }

    function uSpawnProjectile() {
        const side = Math.floor(Math.random() * 4);
        let px, py, vx, vy;
        const speed = (2 + Math.random() * 2) * uDifficultyMultiplier;
        const size = 5 + Math.random() * 15;

        if (side === 0) { px = Math.random() * 400; py = -size; vx = (Math.random() - 0.5) * speed; vy = speed; } // Top
        else if (side === 1) { px = 400 + size; py = Math.random() * 300; vx = -speed; vy = (Math.random() - 0.5) * speed; } // Right
        else if (side === 2) { px = Math.random() * 400; py = 300 + size; vx = (Math.random() - 0.5) * speed; vy = -speed; } // Bottom
        else { px = -size; py = Math.random() * 300; vx = speed; vy = (Math.random() - 0.5) * speed; } // Left

        uProjectiles.push({ x: px, y: py, vx: vx, vy: vy, size: size, type: Math.random() > 0.5 ? 'bone' : 'bullet' });
    }

    function uGameLoop(timestamp) {
        if (!uGameRunning) return;

        const deltaTime = timestamp - uLastFrameTime;
        uLastFrameTime = timestamp;

        const survivedTime = (window.performance.now() - uStartTime) / 1000;
        if (uTimerDisplay) uTimerDisplay.textContent = `SURVIVED: ${survivedTime.toFixed(1)}s`;

        // Difficulty increase
        uDifficultyMultiplier = uBaseMultiplier + (survivedTime / (20 / uBaseMultiplier));
        uSpawnRate = Math.max(100, uBaseSpawnRate - (survivedTime * uScaleSpeed));

        // Spawn
        uSpawnTimer += deltaTime;
        if (uSpawnTimer > uSpawnRate) {
            uSpawnProjectile();
            uSpawnTimer = 0;
        }

        // Move player
        if (uKeys.ArrowUp) uPlayer.y -= uPlayer.speed;
        if (uKeys.ArrowDown) uPlayer.y += uPlayer.speed;
        if (uKeys.ArrowLeft) uPlayer.x -= uPlayer.speed;
        if (uKeys.ArrowRight) uPlayer.x += uPlayer.speed;

        // Bounds
        if (uPlayer.x < uPlayer.size) uPlayer.x = uPlayer.size;
        if (uPlayer.x > 400 - uPlayer.size) uPlayer.x = 400 - uPlayer.size;
        if (uPlayer.y < uPlayer.size) uPlayer.y = uPlayer.size;
        if (uPlayer.y > 300 - uPlayer.size) uPlayer.y = 300 - uPlayer.size;

        // Draw
        uCtx.clearRect(0, 0, 400, 300);

        // Draw Projectiles & check collision
        uCtx.fillStyle = '#ffffff';
        for (let i = uProjectiles.length - 1; i >= 0; i--) {
            let p = uProjectiles[i];
            p.x += p.vx;
            p.y += p.vy;

            if (p.type === 'bone') {
                uCtx.fillRect(p.x - p.size / 2, p.y - p.size, p.size, p.size * 2);
            } else {
                uCtx.beginPath();
                uCtx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
                uCtx.fill();
            }

            // Simple circle collision
            const dx = uPlayer.x - p.x;
            const dy = uPlayer.y - p.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < (uPlayer.size / 2 + p.size / 2)) {
                // Game Over
                uGameRunning = false;
                playHeartBreak();
                if (startUBtn) {
                    startUBtn.textContent = '[ RETRY ]';
                    startUBtn.style.display = 'block';
                }

                // Draw broken heart message
                uCtx.clearRect(0, 0, 400, 300);
                uCtx.fillStyle = '#ff0000';
                uCtx.font = 'bold 30px monospace';
                uCtx.textAlign = 'center';
                uCtx.fillText('DETERMINATION.', 200, 150);
                return;
            }

            // Remove off-screen
            if (p.x < -100 || p.x > 500 || p.y < -100 || p.y > 400) {
                uProjectiles.splice(i, 1);
            }
        }

        drawHeart(uPlayer.x, uPlayer.y, uPlayer.size, uCtx);
        window.requestAnimationFrame(uGameLoop);
    }

    if (startUBtn) {
        startUBtn.addEventListener('click', () => {
            const diffSelect = document.getElementById('undertale-difficulty');
            const diff = diffSelect ? diffSelect.value : 'normal';
            if (diff === 'easy') { uBaseMultiplier = 0.6; uBaseSpawnRate = 1200; uScaleSpeed = 5; }
            else if (diff === 'hard') { uBaseMultiplier = 1.5; uBaseSpawnRate = 500; uScaleSpeed = 25; }
            else if (diff === 'lunatic') { uBaseMultiplier = 2.5; uBaseSpawnRate = 250; uScaleSpeed = 45; }
            else { uBaseMultiplier = 1; uBaseSpawnRate = 800; uScaleSpeed = 15; }

            uPlayer = { x: 200, y: 150, size: 16, speed: 4 };
            uProjectiles = [];
            uStartTime = window.performance.now();
            uLastFrameTime = uStartTime;
            uSpawnTimer = 0;
            uGameRunning = true;
            uDifficultyMultiplier = uBaseMultiplier;
            uSpawnRate = uBaseSpawnRate;
            startUBtn.style.display = 'none';
            if (uCtx) {
                uCtx.clearRect(0, 0, 400, 300);
                drawHeart(uPlayer.x, uPlayer.y, uPlayer.size, uCtx);
            }
            window.requestAnimationFrame(uGameLoop);
        });
    }

    document.addEventListener('keydown', e => {
        if (!uGameRunning) return;
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
            uKeys[e.key] = true;
            e.preventDefault();
        }
    });

    document.addEventListener('keyup', e => {
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
            uKeys[e.key] = false;
        }
    });

    if (uCanvas) {
        uCanvas.addEventListener('mousemove', (e) => {
            if (!uGameRunning) return;
            const rect = uCanvas.getBoundingClientRect();
            const scaleX = uCanvas.width / rect.width;
            const scaleY = uCanvas.height / rect.height;

            let x = (e.clientX - rect.left) * scaleX;
            let y = (e.clientY - rect.top) * scaleY;

            if (x < uPlayer.size) x = uPlayer.size;
            if (x > 400 - uPlayer.size) x = 400 - uPlayer.size;
            if (y < uPlayer.size) y = uPlayer.size;
            if (y > 300 - uPlayer.size) y = 300 - uPlayer.size;

            uPlayer.x = x;
            uPlayer.y = y;
        });
    }

    // ══════════════════════════════════════════════════════════════
    //  CYBERPUNK – Netrunner ICE Breaker mini-game
    // ══════════════════════════════════════════════════════════════

    // Inject the window element if it doesn't exist yet
    if (!document.getElementById('window-netrunner')) {
        const nrWin = document.createElement('div');
        nrWin.id = 'window-netrunner';
        nrWin.className = 'window';
        nrWin.style.cssText = `
            width:480px; min-height:360px; display:none; flex-direction:column;
            position:fixed; top:80px; left:calc(50vw - 240px); transform:none;
            background:rgba(5,0,20,0.96); border:2px solid #f0f;
            box-shadow:0 0 40px #f0f8, 0 0 80px #0ff4;
            font-family:'Share Tech Mono',monospace; z-index:10000;
            border-radius:4px; overflow:hidden; resize:both;`;
        nrWin.innerHTML = `
            <div class="window-header" style="background:linear-gradient(90deg,#0ff2,#f0f2);border-bottom:1px solid #f0f;padding:6px 12px;display:flex;justify-content:space-between;align-items:center;cursor:move">
                <span style="color:#0ff;text-shadow:0 0 8px #0ff;font-size:13px">⬡ NETRUNNER :: ICE-BREAKER v2.0.77</span>
                <button onclick="document.getElementById('window-netrunner').style.display='none'"
                    style="background:none;border:1px solid #f0f;color:#f0f;cursor:pointer;width:22px;height:22px;border-radius:2px;font-size:14px;line-height:1">✕</button>
            </div>
            <div id="nr-body" style="padding:16px; flex:1; display:flex; flex-direction:column; overflow:auto;">
                <div id="nr-info" style="display:flex;justify-content:space-between;margin-bottom:10px;font-size:11px;color:#888">
                    <span>LEVEL: <span id="nr-level" style="color:#0ff">1</span></span>
                    <span>TIME: <span id="nr-timer" style="color:#ff0">30</span>s</span>
                    <span>SCORE: <span id="nr-score" style="color:#f0f">0</span></span>
                </div>
                <div id="nr-msg" style="color:#0f0;font-size:11px;margin-bottom:8px;min-height:16px;text-shadow:0 0 6px #0f0"></div>
                <div id="nr-sequence" style="margin-bottom:12px;font-size:13px;color:#0ff;letter-spacing:3px;text-shadow:0 0 10px #0ff;min-height:20px"></div>
                <div id="nr-grid" style="display:grid;gap:6px;margin-bottom:12px"></div>
                <div id="nr-input-row" style="display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap"></div>
                <div style="display:flex;gap:8px">
                    <button id="nr-start-btn" style="flex:1;padding:8px;background:rgba(0,255,255,0.1);border:1px solid #0ff;color:#0ff;font-family:inherit;cursor:pointer;font-size:12px;border-radius:2px;transition:all 0.2s">▶ JACK IN</button>
                    <button id="nr-clear-btn" style="padding:8px 14px;background:rgba(255,0,255,0.1);border:1px solid #f0f;color:#f0f;font-family:inherit;cursor:pointer;font-size:12px;border-radius:2px">⌫ CLR</button>
                </div>
            </div>`;
        document.body.appendChild(nrWin);
    }

    // ── Draggable window support for Netrunner ─────────────────────
    (function makeDraggable() {
        const win = document.getElementById('window-netrunner');
        if (!win) return;
        const hdr = win.querySelector('.window-header');
        if (!hdr) return;
        let ox = 0, oy = 0, dragging = false;
        hdr.addEventListener('mousedown', e => {
            if (e.target.classList.contains('window-close')) return;
            dragging = true;
            ox = e.clientX - win.getBoundingClientRect().left;
            oy = e.clientY - win.getBoundingClientRect().top;
        });
        document.addEventListener('mousemove', e => {
            if (!dragging) return;
            win.style.left   = (e.clientX - ox) + 'px';
            win.style.top    = (e.clientY - oy) + 'px';
            win.style.transform = 'none';
        });
        document.addEventListener('mouseup', () => { dragging = false; });
    })();

    // ── Netrunner game logic ───────────────────────────────────────
    window.startNetrunnerGame = function startNetrunnerGame() {
        const el = id => document.getElementById(id);
        const CODES = ['FF','1C','7A','BD','E9','55','AA','3F','C0','6E'];
        let level = 1, score = 0, timerSec = 30, timerId = null;
        let target = [], input = [];

        function buildLevel() {
            clearInterval(timerId);
            timerSec = Math.max(10, 30 - (level - 1) * 3);
            const seqLen  = Math.min(3 + level, 7);
            const gridSz  = Math.min(3 + Math.floor(level / 2), 6);

            // pick target sequence
            target = [];
            for (let i = 0; i < seqLen; i++) target.push(CODES[Math.floor(Math.random() * CODES.length)]);

            input = [];
            el('nr-level').textContent  = level;
            el('nr-score').textContent  = score;
            el('nr-timer').textContent  = timerSec;
            el('nr-msg').textContent    = 'Match the sequence from the matrix:';
            el('nr-sequence').textContent = target.join(' ─ ');

            // Build grid
            const grid = el('nr-grid');
            grid.innerHTML = '';
            grid.style.gridTemplateColumns = `repeat(${gridSz}, 1fr)`;
            const cells = gridSz * gridSz;
            for (let i = 0; i < cells; i++) {
                const code = CODES[Math.floor(Math.random() * CODES.length)];
                const btn  = document.createElement('button');
                btn.textContent = code;
                btn.dataset.code = code;
                Object.assign(btn.style, {
                    background: 'rgba(0,255,255,0.07)', border: '1px solid #0ff4',
                    color: '#0ff', fontFamily: 'inherit', fontSize: '12px',
                    padding: '8px 4px', cursor: 'pointer', borderRadius: '2px',
                    transition: 'all 0.15s'
                });
                btn.addEventListener('mouseenter', () => { btn.style.background = 'rgba(0,255,255,0.25)'; btn.style.boxShadow = '0 0 8px #0ff'; });
                btn.addEventListener('mouseleave', () => { if (!btn.disabled) { btn.style.background = 'rgba(0,255,255,0.07)'; btn.style.boxShadow = ''; } });
                btn.addEventListener('click', () => onCellClick(code, btn));
                grid.appendChild(btn);
            }

            // Input row
            el('nr-input-row').innerHTML = '';
            renderInput();

            // Timer
            timerId = setInterval(() => {
                timerSec--;
                if (el('nr-timer')) el('nr-timer').textContent = timerSec;
                if (timerSec <= 0) { clearInterval(timerId); failLevel(); }
            }, 1000);
        }

        function renderInput() {
            const row = el('nr-input-row');
            row.innerHTML = '';
            for (let i = 0; i < target.length; i++) {
                const isCorrect = input[i] === target[i];
                const slot = document.createElement('span');
                slot.style.cssText = `display:inline-block;padding:4px 8px;border:1px solid ${input[i] ? (isCorrect ? '#0f0' : '#f00') : '#333'};
                    color:${input[i] ? (isCorrect ? '#0f0' : '#f00') : '#555'};font-size:12px;border-radius:2px;min-width:32px;text-align:center;
                    background:${input[i] ? (isCorrect ? 'rgba(0,255,0,0.12)' : 'rgba(255,0,0,0.2)') : 'transparent'};transition:all 0.2s;
                    box-shadow:${input[i] ? (isCorrect ? '0 0 8px #0f06' : '0 0 8px #f006') : 'none'}`;
                slot.textContent = input[i] || '??';
                row.appendChild(slot);
            }
        }

        function onCellClick(code, btn) {
            input.push(code);
            const isCorrect = input[input.length-1] === target[input.length-1];

            if (isCorrect) {
                btn.style.background = 'rgba(0,255,0,0.2)';
                btn.style.color      = '#0f0';
                btn.style.boxShadow  = '0 0 10px #0f0';
            } else {
                btn.style.background = 'rgba(255,0,0,0.3)';
                btn.style.color      = '#f00';
                btn.style.boxShadow  = '0 0 15px #f00';
                const gridEl = el('nr-grid');
                if (gridEl) {
                    gridEl.style.transform = `translate(${(Math.random()-0.5)*15}px, ${(Math.random()-0.5)*15}px)`;
                    setTimeout(() => gridEl.style.transform = 'none', 50);
                }
            }
            btn.disabled = true;
            renderInput();

            if (input.length === target.length) {
                clearInterval(timerId);
                const ok = input.every((v, i) => v === target[i]);
                if (ok) {
                    const bonus = timerSec * 10 * level;
                    score += bonus;
                    el('nr-score').textContent = score;
                    el('nr-msg').style.color   = '#0f0';
                    el('nr-msg').textContent   = 'ICE BROKEN! +' + bonus + ' CRED';
                    level++;
                    setTimeout(buildLevel, 2000);
                } else {
                    failLevel();
                }
            }
        }

        function failLevel() {
            clearInterval(timerId);
            el('nr-msg').style.color   = '#f33';
            el('nr-msg').textContent   = '✘ ICE RESISTED. Retrying…';
            el('nr-grid').querySelectorAll('button').forEach(b => { b.disabled = true; b.style.opacity = '0.3'; });
            setTimeout(buildLevel, 2000);
        }

        el('nr-start-btn').addEventListener('click', () => {
            level = 1; score = 0;
            buildLevel();
        });
        el('nr-clear-btn').addEventListener('click', () => {
            input = [];
            renderInput();
        });

        // kick off immediately
        buildLevel();
    };

    // ── Easter egg: Konami code → open Netrunner ──────────────────
    (function konamiWatcher() {
        const KONAMI = [38,38,40,40,37,39,37,39,66,65];
        let kIdx = 0;
        document.addEventListener('keydown', e => {
            if (e.keyCode === KONAMI[kIdx]) {
                kIdx++;
                if (kIdx === KONAMI.length) {
                    kIdx = 0;
                    if (document.body.classList.contains('cyberpunk-mode')) {
                        const win = document.getElementById('window-netrunner');
                        if (win) { win.style.display = 'block'; }
                        if (typeof startNetrunnerGame === 'function') startNetrunnerGame();
                        if (typeof showToast === 'function') showToast('KONAMI UNLOCKED :: NETRUNNER INITIATED', 'warning');
                    }
                }
            } else { kIdx = 0; }
        });
    })();

    // ══════════════════════════════════════════════════════════════
    //  CYBERPUNK GAMES PANEL – button wiring + new games
    // ══════════════════════════════════════════════════════════════

    // Helper: create a draggable CP window
    function createCpWindow(id, title, width, bodyHtml) {
        if (document.getElementById(id)) return document.getElementById(id);
        const w = document.createElement('div');
        w.id = id;
        Object.assign(w.style, {
            display: 'none', position: 'fixed', flexDirection: 'column',
            top: '80px', left: `calc(50vw - ${width / 2}px)`, transform: 'none',
            width: width + 'px', background: 'rgba(5,0,20,0.97)',
            border: '2px solid #0ff', borderRadius: '4px', overflow: 'hidden',
            fontFamily: "'Share Tech Mono',monospace", zIndex: '10002',
            boxShadow: '0 0 40px #0ff8, 0 0 80px #f0f4',
            resize: 'both', minWidth: '300px', minHeight: '200px'
        });
        w.innerHTML = `
            <div class="cp-win-hdr" style="background:linear-gradient(90deg,#f0f2,#0ff2);border-bottom:1px solid #0ff;
                padding:6px 12px;display:flex;justify-content:space-between;align-items:center;cursor:move;user-select:none">
                <span style="color:#0ff;text-shadow:0 0 8px #0ff;font-size:12px">${title}</span>
                <button onclick="this.closest('div[id]').style.display='none'"
                    style="background:none;border:1px solid #0ff;color:#0ff;cursor:pointer;width:22px;height:22px;border-radius:2px;font-size:13px;line-height:1">✕</button>
            </div>
            <div class="cp-win-body" style="padding:14px; flex:1; display:flex; flex-direction:column; overflow:hidden;">${bodyHtml}</div>`;
        document.body.appendChild(w);
        // draggable
        const hdr = w.querySelector('.cp-win-hdr');
        let ox = 0, oy = 0, drag = false;
        hdr.addEventListener('mousedown', e => {
            if (e.target.tagName === 'BUTTON') return;
            drag = true;
            ox = e.clientX - w.getBoundingClientRect().left;
            oy = e.clientY - w.getBoundingClientRect().top;
        });
        document.addEventListener('mousemove', e => {
            if (!drag) return;
            w.style.left = (e.clientX - ox) + 'px';
            w.style.top  = (e.clientY - oy) + 'px';
            w.style.transform = 'none';
        });
        document.addEventListener('mouseup', () => { drag = false; });
        return w;
    }

    function toggleCpWindow(id) {
        const w = document.getElementById(id);
        if (!w) return;
        w.style.display = (w.style.display === 'none' || !w.style.display) ? 'flex' : 'none';
    }

    // ── NETRUNNER button ─────────────────────────────────────────
    document.getElementById('cp-btn-netrunner')?.addEventListener('click', () => {
        const win = document.getElementById('window-netrunner');
        if (!win) return;
        const nowHidden = win.style.display === 'none' || !win.style.display;
        win.style.display = nowHidden ? 'flex' : 'none';
        if (nowHidden && typeof startNetrunnerGame === 'function') startNetrunnerGame();
    });

    // ── NEON PONG ─────────────────────────────────────────────────
    createCpWindow('window-cp-pong', '◉ NEON PONG :: HYPERSPACE EDITION', 640,
        `<div style="text-align:center;margin-bottom:8px;font-size:10px;color:#888;flex-shrink:0;">Move mouse over canvas to control paddle. First to 7 wins.</div>
         <canvas id="cp-pong-canvas" width="600" height="260" style="display:block;margin:0 auto;border:1px solid #0ff4;box-shadow:0 0 20px #0ff4;cursor:none;width:100%;height:100%;object-fit:contain;min-height:0;"></canvas>
         <div style="display:flex;justify-content:space-between;margin-top:8px;font-size:11px;align-items:center;flex-shrink:0;">
             <span>YOU: <span id="cp-pong-score-p" style="color:#0ff;font-size:14px;font-weight:bold">0</span></span>
             <div>
                 <select id="cp-pong-diff" style="background:rgba(0,0,0,0.5);border:1px solid #f0f;color:#f0f;font-family:inherit;font-size:11px;padding:2px 4px;margin-right:8px;border-radius:2px;outline:none">
                     <option value="easy">EASY</option>
                     <option value="normal" selected>NORMAL</option>
                     <option value="hard">HARDCORE</option>
                 </select>
                 <button id="cp-pong-restart" style="background:rgba(0,255,255,0.1);border:1px solid #0ff;color:#0ff;font-family:inherit;font-size:11px;padding:3px 12px;cursor:pointer;border-radius:2px;transition:all 0.2s">▶ START</button>
             </div>
             <span>AI: <span id="cp-pong-score-a" style="color:#f0f;font-size:14px;font-weight:bold">0</span></span>
         </div>`);

    (function initCpPong() {
        let pongRunning = false, pongAF = null;
        const canvas = document.getElementById('cp-pong-canvas');
        if (!canvas) return;
        const ctx2 = canvas.getContext('2d');
        const W = 600, H = 260, PW = 10, PH = 55, BR = 6;
        let difficulty = 'normal';

        document.getElementById('cp-pong-diff')?.addEventListener('change', e => {
            difficulty = e.target.value;
        });
        let player = { y: H / 2 - PH / 2, score: 0 };
        let ai     = { y: H / 2 - PH / 2, score: 0 };
        let ball   = { x: W / 2, y: H / 2, vx: 3.5, vy: 2.5, trail: [] };
        let particles2 = [];

        function screenShakePong() {
            if (canvas) {
                canvas.style.transform = `translate(${(Math.random()-0.5)*10}px, ${(Math.random()-0.5)*10}px)`;
                setTimeout(() => canvas.style.transform = 'none', 50);
            }
        }

        canvas.addEventListener('mousemove', e => {
            const rect = canvas.getBoundingClientRect();
            player.y = Math.max(0, Math.min(H - PH, (e.clientY - rect.top) * (H / rect.height) - PH / 2));
        });

        function resetBall(dir) {
            ball.x = W / 2; ball.y = H / 2;
            ball.trail = [];
            let baseSpeed = 3.5;
            if (difficulty === 'easy') baseSpeed = 2.5;
            if (difficulty === 'hard') baseSpeed = 5.0;

            const speed = baseSpeed + Math.min((player.score + ai.score) * 0.15, 2.5);
            ball.vx = speed * dir;
            ball.vy = (Math.random() - 0.5) * (baseSpeed * 1.5);
        }

        function spawnParticles(x, y, color) {
            for (let i = 0; i < 10; i++) {
                const a = Math.random() * Math.PI * 2;
                const s = Math.random() * 3 + 1;
                particles2.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 28, color });
            }
        }

        function drawPong() {
            if (!pongRunning) return;

            ctx2.fillStyle = 'rgba(5,0,20,0.22)';
            ctx2.fillRect(0, 0, W, H);

            // centre divider
            ctx2.setLineDash([6, 8]);
            ctx2.strokeStyle = 'rgba(255,255,255,0.07)';
            ctx2.lineWidth = 1;
            ctx2.beginPath(); ctx2.moveTo(W / 2, 0); ctx2.lineTo(W / 2, H); ctx2.stroke();
            ctx2.setLineDash([]);

            // AI tracking
            let aiSpeed = 0.065;
            if (difficulty === 'easy') aiSpeed = 0.035;
            if (difficulty === 'hard') aiSpeed = 0.15;
            
            let targetY = ball.y - PH / 2;
            if (difficulty === 'easy') targetY += (Math.random()-0.5)*30;

            ai.y += (targetY - ai.y) * aiSpeed;
            ai.y = Math.max(0, Math.min(H - PH, ai.y));

            // Ball physics
            ball.trail.push({x: ball.x, y: ball.y});
            if(ball.trail.length > 8) ball.trail.shift();

            ball.x += ball.vx; ball.y += ball.vy;
            if (ball.y - BR <= 0 || ball.y + BR >= H) { ball.vy *= -1; spawnParticles(ball.x, ball.y, '#0ff'); }

            // Player paddle hit
            if (ball.vx < 0 && ball.x - BR <= 10 + PW && ball.y >= player.y && ball.y <= player.y + PH) {
                ball.vx = Math.abs(ball.vx) * 1.06;
                ball.vy += (ball.y - (player.y + PH / 2)) * 0.12;
                spawnParticles(ball.x, ball.y, '#0ff');
                screenShakePong();
            }
            // AI paddle hit
            if (ball.vx > 0 && ball.x + BR >= W - 10 - PW && ball.y >= ai.y && ball.y <= ai.y + PH) {
                ball.vx = -Math.abs(ball.vx) * 1.06;
                spawnParticles(ball.x, ball.y, '#f0f');
                screenShakePong();
            }

            // Scoring
            if (ball.x < 0) {
                ai.score++;
                const el = document.getElementById('cp-pong-score-a');
                if (el) el.textContent = ai.score;
                resetBall(1);
            }
            if (ball.x > W) {
                player.score++;
                const el = document.getElementById('cp-pong-score-p');
                if (el) el.textContent = player.score;
                resetBall(-1);
            }

            // Win
            if (player.score >= 7 || ai.score >= 7) {
                pongRunning = false;
                ctx2.shadowBlur = 0;
                const won = player.score >= 7;
                ctx2.fillStyle = won ? '#0ff' : '#f0f';
                ctx2.font = 'bold 26px Share Tech Mono, monospace';
                ctx2.textAlign = 'center';
                ctx2.shadowColor = won ? '#0ff' : '#f0f';
                ctx2.shadowBlur = 20;
                ctx2.fillText(won ? '✔ YOU WIN' : '✘ AI WINS', W / 2, H / 2 - 12);
                ctx2.font = '11px Share Tech Mono, monospace';
                ctx2.fillStyle = '#aaa';
                ctx2.shadowBlur = 0;
                ctx2.fillText('press START to replay', W / 2, H / 2 + 16);
                return;
            }

            // Draw paddles
            ctx2.shadowBlur = 16; ctx2.shadowColor = '#0ff';
            ctx2.fillStyle = '#00eeff';
            ctx2.fillRect(10, player.y, PW, PH);
            ctx2.shadowColor = '#f0f';
            ctx2.fillStyle = '#ff00ff';
            ctx2.fillRect(W - PW - 10, ai.y, PW, PH);

            // Draw ball trail
            if (ball.trail.length > 1) {
                ctx2.beginPath();
                ctx2.moveTo(ball.trail[0].x, ball.trail[0].y);
                for(let i=1; i<ball.trail.length; i++) ctx2.lineTo(ball.trail[i].x, ball.trail[i].y);
                ctx2.strokeStyle = 'rgba(255,255,255,0.4)';
                ctx2.lineWidth = BR * 1.5;
                ctx2.lineCap = 'round';
                ctx2.stroke();
            }

            // Draw ball
            ctx2.shadowColor = '#fff'; ctx2.shadowBlur = 20;
            ctx2.fillStyle = '#fff';
            ctx2.beginPath(); ctx2.arc(ball.x, ball.y, BR, 0, Math.PI * 2); ctx2.fill();
            ctx2.shadowBlur = 0;

            // Particles
            particles2 = particles2.filter(p => p.life > 0);
            particles2.forEach(p => {
                p.x += p.vx; p.y += p.vy; p.life--;
                ctx2.globalAlpha = p.life / 28;
                ctx2.fillStyle = p.color;
                ctx2.fillRect(p.x - 2, p.y - 2, 4, 4);
            });
            ctx2.globalAlpha = 1;

            pongAF = requestAnimationFrame(drawPong);
        }

        document.getElementById('cp-pong-restart')?.addEventListener('click', () => {
            player.score = 0; ai.score = 0; particles2 = [];
            const sp = document.getElementById('cp-pong-score-p');
            const sa = document.getElementById('cp-pong-score-a');
            if (sp) sp.textContent = 0;
            if (sa) sa.textContent = 0;
            resetBall(1);
            if (pongAF) cancelAnimationFrame(pongAF);
            pongRunning = true;
            drawPong();
        });
    })();

    document.getElementById('cp-btn-pong')?.addEventListener('click', () => toggleCpWindow('window-cp-pong'));

    // ── TYPE JACK ─────────────────────────────────────────────────
    createCpWindow('window-cp-type', '⌨ TYPE JACK :: REFLEX TRAINER', 460,
        `<div style="font-size:10px;color:#888;margin-bottom:10px">Type the phrase below as fast as possible. Timer starts on first keystroke.</div>
         <div id="tj-phrase" style="font-size:14px;color:#f0f;letter-spacing:2px;text-shadow:0 0 10px #f0f;min-height:22px;margin-bottom:10px;line-height:1.5;word-break:break-all"></div>
         <div id="tj-typed" style="font-size:14px;letter-spacing:2px;min-height:22px;margin-bottom:10px;line-height:1.5;word-break:break-all"></div>
         <input id="tj-input" type="text" placeholder="START TYPING…" autocomplete="off" spellcheck="false"
            style="width:100%;box-sizing:border-box;background:rgba(0,255,255,0.06);border:1px solid #0ff;color:#0ff;
                   font-family:inherit;font-size:13px;padding:8px;outline:none;border-radius:2px;letter-spacing:1px">
         <div style="display:flex;justify-content:space-between;margin-top:10px;font-size:11px;color:#888">
             <span>TIME: <span id="tj-time" style="color:#ff0">0.0s</span></span>
             <span>WPM: <span id="tj-wpm" style="color:#0f0">—</span></span>
             <span>Best: <span id="tj-best" style="color:#f0f">—</span></span>
         </div>
         <div id="tj-msg" style="margin-top:8px;font-size:11px;color:#0f0;min-height:16px;text-shadow:0 0 6px #0f0"></div>`);

    (function initTypeJack() {
        const PHRASES = [
            'HACK THE PLANET',
            'NEURAL NET IS DOWN',
            'BREACH THE FIREWALL',
            'JACK INTO THE MATRIX',
            'GHOST IN THE SHELL',
            'ACCESS DENIED OVERRIDE',
            'NETRUNNER PROTOCOL ACTIVE',
            'SYSTEM KERNEL EXPOSED',
            'BYPASS ICE LAYER SEVEN',
            'UPLOAD DAEMON INITIATED',
            'DECRYPT THE CIPHER KEY',
            'NIGHT CITY NEVER SLEEPS',
            'THE STREET FINDS ITS OWN USES',
            'RIPPERDOC IMPLANTS INSTALLED'
        ];

        let tjStart = null, tjTimer = null, tjPhrase = '', tjBestWpm = Infinity;
        const tjInput = document.getElementById('tj-input');

        function newPhrase() {
            tjPhrase = PHRASES[Math.floor(Math.random() * PHRASES.length)];
            const pEl = document.getElementById('tj-phrase');
            if (pEl) pEl.textContent = tjPhrase;
            const tEl = document.getElementById('tj-typed');
            if (tEl) tEl.innerHTML = '';
            const mEl = document.getElementById('tj-msg');
            if (mEl) mEl.textContent = '';
            const tiEl = document.getElementById('tj-time');
            if (tiEl) tiEl.textContent = '0.0s';
            const wEl = document.getElementById('tj-wpm');
            if (wEl) wEl.textContent = '—';
            if (tjInput) tjInput.value = '';
            tjStart = null;
            clearInterval(tjTimer);
        }

        tjInput?.addEventListener('keydown', e => {
            if (!tjStart && e.key.length === 1) {
                tjStart = Date.now();
                tjTimer = setInterval(() => {
                    if (!tjStart) return;
                    const tiEl = document.getElementById('tj-time');
                    if (tiEl) tiEl.textContent = ((Date.now() - tjStart) / 1000).toFixed(1) + 's';
                }, 100);
            }
        });

        tjInput?.addEventListener('input', () => {
            if (!tjPhrase) return;
            const typed = tjInput.value;
            let out = '';
            let errorShake = false;
            for (let i = 0; i < tjPhrase.length; i++) {
                if (i < typed.length) {
                    const ok = typed[i] === tjPhrase[i];
                    if (!ok) errorShake = true;
                    out += `<span style="color:${ok ? '#0ff' : '#f33'};text-shadow:0 0 6px ${ok ? '#0ff' : '#f33'}">${tjPhrase[i]}</span>`;
                } else if (i === typed.length) {
                    out += `<span style="color:#fff;background:rgba(255,255,255,0.2);border-bottom:2px solid #fff;display:inline-block;min-width:8px">${tjPhrase[i] === ' ' ? '&nbsp;' : tjPhrase[i]}</span>`;
                } else {
                    out += `<span style="color:#444">${tjPhrase[i]}</span>`;
                }
            }
            const tEl = document.getElementById('tj-typed');
            if (tEl) tEl.innerHTML = out;

            if (errorShake && tEl) {
                tEl.style.transform = `translate(${(Math.random()-0.5)*10}px, ${(Math.random()-0.5)*10}px)`;
                setTimeout(() => tEl.style.transform = 'none', 50);
            }

            if (typed === tjPhrase && tjStart) {
                clearInterval(tjTimer);
                const elapsed = (Date.now() - tjStart) / 1000;
                const words   = tjPhrase.split(' ').length;
                const wpm     = Math.round((words / elapsed) * 60);
                const wEl = document.getElementById('tj-wpm');
                const tiEl = document.getElementById('tj-time');
                const bEl = document.getElementById('tj-best');
                const mEl = document.getElementById('tj-msg');
                if (wEl) wEl.textContent = wpm + ' WPM';
                if (tiEl) tiEl.textContent = elapsed.toFixed(2) + 's';
                if (wpm > tjBestWpm || tjBestWpm === Infinity) {
                    tjBestWpm = wpm;
                    if (bEl) bEl.textContent = wpm + ' WPM';
                }
                const msgs = ['IMPRESSIVE REFLEXES','NETRUNNER CONFIRMED','ICE MELTED INSTANTLY','SPEED DAEMON','GHOST PROTOCOL SPEED'];
                if (mEl) mEl.textContent = `✔ ${msgs[Math.floor(Math.random() * msgs.length)]} — +${wpm * 10} CRED`;
                setTimeout(newPhrase, 2400);
            }
        });

        document.getElementById('cp-btn-type')?.addEventListener('click', () => {
            const w = document.getElementById('window-cp-type');
            if (!w) return;
            const nowHidden = w.style.display === 'none' || !w.style.display;
            w.style.display = nowHidden ? 'block' : 'none';
            if (nowHidden) { newPhrase(); setTimeout(() => tjInput?.focus(), 60); }
        });
    })();

    // ── GLITCH PAGE button ────────────────────────────────────────
    document.getElementById('cp-btn-glitch')?.addEventListener('click', () => {
        if (!document.body.classList.contains('cyberpunk-mode')) return;
        document.querySelectorAll('h1,h2,h3,.tile,.project-tile,.window-header,nav,footer').forEach(el => {
            el.classList.add('cp-glitch-active');
            el.addEventListener('animationend', () => el.classList.remove('cp-glitch-active'), { once: true });
        });
        const flash = document.createElement('div');
        Object.assign(flash.style, {
            position: 'fixed', inset: '0', zIndex: '99998', pointerEvents: 'none',
            background: 'linear-gradient(135deg,#f0f4,#0ff4,#ff04)', mixBlendMode: 'screen', opacity: '0.7'
        });
        document.body.appendChild(flash);
        setTimeout(() => flash.remove(), 320);
        if (typeof showToast === 'function') showToast('⚡ REALITY GLITCHED — SIGNAL CORRUPTED', 'warning');
    });

    // ── SCAN SYSTEM easter egg ────────────────────────────────────
    document.getElementById('cp-btn-scanner')?.addEventListener('click', () => {
        if (!document.body.classList.contains('cyberpunk-mode')) return;
        const old = document.getElementById('cp-scan-overlay');
        if (old) { old.remove(); return; }

        const overlay = document.createElement('div');
        overlay.id = 'cp-scan-overlay';
        Object.assign(overlay.style, {
            position: 'fixed', inset: '0', zIndex: '99999', pointerEvents: 'all',
            fontFamily: "'Share Tech Mono',monospace", fontSize: '12px',
            color: '#0ff', textShadow: '0 0 6px #0ff',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            background: 'rgba(5,0,20,0.8)', cursor: 'pointer'
        });
        overlay.title = 'Click to dismiss';

        const scanLines = [
            '⊙ INITIALISING SYSTEM SCAN…',
            '⊙ Scanning memory buffers…       [████████░░░░] 67%',
            '⊙ Checking neural pathways…      [██████████░░] 83%',
            '⊙ Probing ICE integrity…         [████████████] 100%',
            '⊙ Scanning portfolio owner…',
            '',
            '  ╔════════════════════════════════════╗',
            '  ║  NAME    : Aleksander Zientara     ║',
            '  ║  CLASS   : Netrunner // Dev        ║',
            '  ║  THREAT  : ████ CRITICAL 🔴         ║',
            '  ║  ICE LVL : FRACTURED               ║',
            '  ║  SKILLS  : JS · CSS · React · C#   ║',
            '  ║  CRED    : ████████ (CLASSIFIED)   ║',
            '  ╚════════════════════════════════════╝',
            '',
            '⊙ WARNING: Anomalous entity detected.',
            '⊙ SCAN COMPLETE — click anywhere to dismiss.'
        ];

        let lineIdx = 0;
        const pre = document.createElement('pre');
        pre.style.cssText = 'text-align:left;line-height:1.9;margin:0;max-width:480px';
        overlay.appendChild(pre);
        document.body.appendChild(overlay);
        overlay.addEventListener('click', () => overlay.remove());

        const scanInterval = setInterval(() => {
            if (lineIdx >= scanLines.length) { clearInterval(scanInterval); return; }
            pre.textContent += scanLines[lineIdx] + '\n';
            lineIdx++;
        }, 130);
    });

    // ── EASTER EGG: double-click any heading → glitch ─────────────
    document.addEventListener('dblclick', e => {
        if (!document.body.classList.contains('cyberpunk-mode')) return;
        const el = e.target.closest('h1,h2,h3,.taskbar-title');
        if (!el) return;
        el.classList.add('cp-glitch-active');
        el.addEventListener('animationend', () => el.classList.remove('cp-glitch-active'), { once: true });
        if (typeof showToast === 'function') showToast('⚡ SIGNAL INTERCEPTED', 'warning');
    });

    // ── EASTER EGG: right-click background → "SCAN LOCATION" ──────
    document.addEventListener('contextmenu', e => {
        if (!document.body.classList.contains('cyberpunk-mode')) return;
        if (!['BODY','MAIN','SECTION','ARTICLE'].includes(e.target.tagName)) return;
        e.preventDefault();
        document.getElementById('cp-ctx-item')?.remove();
        const item = document.createElement('div');
        item.id = 'cp-ctx-item';
        Object.assign(item.style, {
            position: 'fixed', left: e.clientX + 'px', top: e.clientY + 'px',
            background: 'rgba(5,0,20,0.97)', border: '1px solid #0ff', color: '#0ff',
            fontFamily: "'Share Tech Mono',monospace", fontSize: '11px',
            padding: '6px 14px', zIndex: '99999', cursor: 'pointer',
            boxShadow: '0 0 16px #0ff6', borderRadius: '2px', textShadow: '0 0 6px #0ff'
        });
        item.textContent = '⊙ SCAN THIS LOCATION';
        item.addEventListener('click', () => { item.remove(); document.getElementById('cp-btn-scanner')?.click(); });
        document.body.appendChild(item);
        setTimeout(() => item?.remove(), 3500);
    });

});
