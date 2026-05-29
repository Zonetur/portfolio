document.addEventListener('DOMContentLoaded', () => {
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
            "igor-title": "Igor (aka. Niggor)",
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
            "switch-btn": "Zmień zdjęcie"
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
            "igor-title": "Igor (aka Niggor)",
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
            "switch-btn": "Switch Photo"
        },
        "en-gb": {
            "theme-dark": "Dark Mode",
            "theme-light": "Light Mode",
            "panel": "Action Centre",
            "nav-skills": "Skills",
            "nav-projects": "Projects",
            "nav-contact": "Contact",
            "about-title": "About Me",
            "about-text": "Hi! I'm Aleksander, an IT student. I am an openly gay man and an active advocate for LGBTQ+ visibility in the tech world. Besides coding and building inclusive projects, my biggest passion is cycling. I love racking up kilometres on my aero bike, preferably accompanied by my boyfriend, Ignacy.",
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
            "ignacy-bio": "My amazing boyfriend with whom I share my life and passion for cycling. Together we conquer new kilometres, support each other every step of the way, and make the best team in the world!",
            "igor-title": "Igor (aka Niggor)",
            "igor-bio": "My other wonderful boyfriend Igor. I can always count on him, and spending time together is a pure joy. We make beautiful memories together!",
            "boniek-title": "Honourable Mention: Boniek 🕊️",
            "boniek-bio": "My third boyfriend, who will always remain in my heart. We used to love drinking from the same shake and eating McDonald's burgers together. Even though he is no longer with us, the memories we shared are incredibly precious to me. Rest in peace, Boniek. ❤️",
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
            "ac-title": "Action Centre",
            "ac-sys": "System",
            "ac-bat": "Battery",
            "ac-stat": "Statistics",
            "ac-time": "Time",
            "ac-clicks": "Clicks",
            "hacker-btn": "Hacker Mode",
            "leet-btn": "Secret Language",
            "color-btn": "Randomise Colours",
            "rotate-btn": "Rotate Photo",
            "switch-btn": "Switch Photo"
        },
        "en-au": {
            "theme-dark": "Dark Mode",
            "theme-light": "Light Mode",
            "panel": "The Servo",
            "nav-skills": "My Kit",
            "nav-projects": "Hard Yakka",
            "nav-contact": "Hit me up",
            "about-title": "Who I Am",
            "about-text": "G'day! I'm Aleksander, an IT student. Out and proud gay bloke here, heavily into backing LGBTQ+ visibility in tech. When I'm not smashing out code, I'm absolutely wrapped with cycling. Love tearing up the tarmac on me aero bike, usually with me partner, Ignacy.",
            "learn-more-btn": "Find out more",
            "hidden-boyfriends-text": "Truth be told, I've had 3 blokes and now I'm down to two",
            "meet-boys-btn": "Meet the lads",
            "femboy-btn": "Be my femboy boyfriend",
            "femboy-alert": "Ignacy might spit the dummy! 😅",
            "choose-boy-title": "Pick a mate to view",
            "ignacy-name": "Ignacy",
            "igor-name": "Igor",
            "boniek-name": "Boniek 🕊️",
            "group-name": "Squad Pics",
            "back-btn": "Back to selection",
            "ignacy-title": "Ignacy (aka Naqsu)",
            "ignacy-bio": "My brilliant partner who I share me life and love for cycling with. We smash out the Ks together, back each other up, and make the best bloody team around!",
            "igor-title": "Igor (aka Niggor)",
            "igor-bio": "My other top bloke Igor. Always got my back, and hanging out is an absolute ripper of a time. Making some bloody good memories together!",
            "boniek-title": "Honourable Mention: Boniek 🕊️",
            "boniek-bio": "My third bloke, who'll always hold a special place in my heart. We loved sharing the same shake and inhaling Macca's burgers together. Even though he's gone, the memories we made are bloody precious. Rest easy, Boniek. ❤️",
            "group-title": "Squad Pics",
            "group-bio": "Good times with the mates captured on film. Top tier memories!",
            "title-skills": "What I'm Good At",
            "title-projects": "Bloody Good Projects",
            "filter-all": "The Lot",
            "filter-web": "Interwebs",
            "title-contact": "Give us a yell",
            "copy": "Snatch",
            "copied": "Snatched it!",
            "ph-name": "Your Moniker",
            "ph-email": "Your Postbox",
            "ph-msg": "Whatcha reckon?...",
            "btn-send": "Chuck it over",
            "ac-title": "The Servo",
            "ac-sys": "Rig",
            "ac-bat": "Juice",
            "ac-stat": "Stats",
            "ac-time": "On the clock",
            "ac-clicks": "Pokes",
            "hacker-btn": "Hacker Mode",
            "leet-btn": "Secret Lingo",
            "color-btn": "Mix up Colours",
            "rotate-btn": "Flip the Pic",
            "switch-btn": "Swap Pic"
        },
        "pirate": {
            "theme-dark": "Dark Waters",
            "theme-light": "Sunny Skies",
            "panel": "Captain's Cabin",
            "nav-skills": "Me Skills",
            "nav-projects": "Plunder",
            "nav-contact": "Parley",
            "about-title": "Captain's Tale",
            "about-text": "Ahoy! I be Captain Aleksander, a proud queer tech-scallywag. I sail the digital seas under the rainbow banner. When I ain't hoardin' code, I be riding me two-wheeled land-ship (an aero bike, they call it) with me first mate and lover, Ignacy.",
            "learn-more-btn": "Read the Map",
            "hidden-boyfriends-text": "Truth be told, I've sailed with 3 lads, but now only two remain",
            "meet-boys-btn": "Meet me crewmates",
            "femboy-btn": "Be me femboy cabin boy",
            "femboy-alert": "Captain Ignacy might make ye walk the plank! 😅",
            "choose-boy-title": "Pick a lad to gaze upon",
            "ignacy-name": "Ignacy",
            "igor-name": "Igor",
            "boniek-name": "Boniek 🕊️",
            "group-name": "Crew Portraits",
            "back-btn": "Back to the Map",
            "ignacy-title": "First Mate Ignacy (aka Naqsu)",
            "ignacy-bio": "Me beloved Ignacy be the finest mate a captain could ask for on the open road! Together we conquer the lands on our two-wheeled galleons and share the greatest of adventures.",
            "igor-title": "Quartermaster Igor (aka Niggor)",
            "igor-bio": "Me trusty Quartermaster Igor! A finer scallywag ye'll never meet. We share the finest rum and chart courses to the greatest treasures on the seven seas!",
            "boniek-title": "Honorable Mention: Boniek 🕊️",
            "boniek-bio": "Me third mate, who sails the starry seas now. We loved sharing the same grog-shake and plundering McDonald's burgers together! He'll forever hold a place in me captain's heart. Though he's left our crew, the tales we forged be me finest treasure. Rest easy, Boniek. ❤️",
            "group-title": "Crew Portraits",
            "group-bio": "The whole pirate band gathered together! Grand memories of plunder and brotherhood.",
            "title-skills": "Yer Captain's Talents",
            "title-projects": "Finest Booty",
            "filter-all": "All of 'em",
            "filter-web": "Webs",
            "title-contact": "Send a Raven",
            "copy": "Plunder",
            "copied": "Plundered!",
            "ph-name": "Yer Title",
            "ph-email": "Yer Port",
            "ph-msg": "Speak yer mind, scallywag...",
            "btn-send": "Fire the Cannons!",
            "ac-title": "Captain's Cabin",
            "ac-sys": "Ship",
            "ac-bat": "Rum Left",
            "ac-stat": "Captain's Log",
            "ac-time": "Sailing Time",
            "ac-clicks": "Pegleg Stumps",
            "hacker-btn": "Ghost Ship Mode",
            "leet-btn": "Cursed Tongue",
            "color-btn": "Scramble Flags",
            "rotate-btn": "Turn the Map",
            "switch-btn": "Change Portrait"
        }
    };

    let currentLanguage = 'pl';
    const langSelect = document.getElementById('language-select');

    function applyTranslations(lang) {
        currentLanguage = lang;
        const dictionary = translations[lang];

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dictionary[key]) {
                el.textContent = dictionary[key];
            }
        });

        document.querySelectorAll('[data-i18n-ph]').forEach(el => {
            const key = el.getAttribute('data-i18n-ph');
            if (dictionary[key]) {
                el.placeholder = dictionary[key];
            }
        });

        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            if (document.body.classList.contains('dark-mode')) {
                themeToggle.textContent = dictionary["theme-light"];
            } else {
                themeToggle.textContent = dictionary["theme-dark"];
            }
        }
    }

    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            applyTranslations(e.target.value);
        });
    }

    const clockElement = document.getElementById('system-clock');
    if (clockElement) {
        setInterval(() => {
            const now = new Date();
            clockElement.textContent = now.toLocaleTimeString('pl-PL');
        }, 1000);
    }

    const randomColorBtn = document.getElementById('random-color-btn');
    if (randomColorBtn) {
        randomColorBtn.addEventListener('click', () => {
            const colors = ['#0078d4', '#107c41', '#5c2d91', '#d83b01', '#008272', '#b81b1b', '#ffb900', '#e3008c', '#00cc6a', '#00bcf2'];
            document.querySelectorAll('.tile').forEach(tile => {
                tile.style.setProperty('background-color', colors[Math.floor(Math.random() * colors.length)], 'important');
            });
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

            if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
                hasMoved = true;
            }
            elementToAnimate.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        });

        document.addEventListener('mouseup', () => {
            if (!isDragging) return;
            isDragging = false;
            elementToAnimate.style.transform = '';
            elementToAnimate.style.transition = '';

            if (hasMoved) {
                elementToAnimate.classList.add('wobbling');
            }
        });

        elementToAnimate.addEventListener('animationend', (e) => {
            if (e.animationName === 'wobble-anim') {
                elementToAnimate.classList.remove('wobbling');
            }
        });

        elementToDrag.addEventListener('click', (e) => {
            if (hasMoved) {
                e.preventDefault();
                e.stopImmediatePropagation();
            }
        }, true);
    }

    const profileImg = document.getElementById('profile-img');
    const imageFrame = document.getElementById('my-image-frame');
    if (profileImg && imageFrame) setupWobbleDrag(profileImg, imageFrame);

    const lightboxModal = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightboxBtn = document.getElementById('close-lightbox');

    document.querySelectorAll('#profile-img, .enlargeable').forEach(img => {
        img.addEventListener('click', (e) => {
            if (e.ctrlKey) return;
            lightboxImg.src = img.src;
            lightboxModal.classList.add('active');
        });
    });

    if (closeLightboxBtn && lightboxModal) {
        closeLightboxBtn.addEventListener('click', () => {
            lightboxModal.classList.remove('active');
        });

        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                lightboxModal.classList.remove('active');
            }
        });
    }

    const learnMoreBtn = document.getElementById('learn-more-btn');
    const hiddenBoyfriendsText = document.getElementById('hidden-boyfriends-text');
    const meetBoysBtn = document.getElementById('meet-boys-btn');
    const femboyBtn = document.getElementById('femboy-btn');
    const hiddenActions = document.getElementById('hidden-actions');

    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            learnMoreBtn.style.display = 'none';
            if (hiddenBoyfriendsText) hiddenBoyfriendsText.style.display = 'block';
            if (hiddenActions) hiddenActions.style.display = 'flex';
        });
    }

    if (femboyBtn) {
        femboyBtn.addEventListener('click', () => {
            alert(translations[currentLanguage]["femboy-alert"]);
        });
    }

    document.querySelectorAll('.carousel-container').forEach(container => {
        const track = container.querySelector('.carousel-track');
        const images = track.querySelectorAll('img');
        const prevBtn = container.querySelector('.prev');
        const nextBtn = container.querySelector('.next');
        let currentIndex = 0;

        function updateCarousel() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
                updateCarousel();
            });

            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
                updateCarousel();
            });
        }
    });

    function initDraggable(win) {
        const header = win.querySelector('.window-header');
        let offsetX, offsetY;
        
        if (header) {
            header.addEventListener('mousedown', (e) => {
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

    const winBoys = document.getElementById('window-boys');
    if (winBoys) initDraggable(winBoys);

    if (meetBoysBtn && winBoys) {
        meetBoysBtn.addEventListener('click', () => {
            winBoys.style.display = 'block';
        });
    }

    if (winBoys) {
        winBoys.querySelector('.close').addEventListener('click', () => {
            winBoys.style.display = 'none';
        });

        winBoys.querySelector('.minimize').addEventListener('click', () => {
            winBoys.style.display = 'none';
        });
    }

    const boysMenu = document.getElementById('boys-menu');
    const boysContent = document.getElementById('boys-content');
    const backToBoysMenuBtn = document.getElementById('back-to-boys-menu');
    const boySelectBtns = document.querySelectorAll('.boy-select-btn');
    const boySections = document.querySelectorAll('.boy-section');

    if (boySelectBtns && backToBoysMenuBtn) {
        boySelectBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.getAttribute('data-target');
                if (boysMenu) boysMenu.style.display = 'none';
                if (boysContent) boysContent.style.display = 'block';
                
                boySections.forEach(section => {
                    if (section.id === targetId) {
                        section.style.display = 'block';
                    } else {
                        section.style.display = 'none';
                    }
                });
            });
        });

        backToBoysMenuBtn.addEventListener('click', () => {
            if (boysContent) boysContent.style.display = 'none';
            if (boysMenu) boysMenu.style.display = 'block';
        });
    }

    let currentProfileRotation = 0;
    let isProfileMirrored = false;
    let secretClickCount = 0;
    const rotateBtn = document.getElementById('rotate-photo-btn');
    const switchBtn = document.getElementById('switch-photo-btn');

    function updateProfileImageTransform() {
        if (profileImg) {
            profileImg.style.transform = `rotate(${currentProfileRotation}deg) scaleX(${isProfileMirrored ? -1 : 1})`;
        }
    }

    if (rotateBtn && profileImg) {
        rotateBtn.addEventListener('click', () => {
            currentProfileRotation += 90;
            updateProfileImageTransform();
        });
    }

    if (switchBtn && profileImg) {
        switchBtn.addEventListener('click', () => {
            if (profileImg.getAttribute('src') === 'mzdj.jpg') {
                profileImg.setAttribute('src', 'lakak1.png');
            } else {
                profileImg.setAttribute('src', 'mzdj.jpg');
            }
        });
    }

    if (profileImg) {
        profileImg.addEventListener('click', (e) => {
            if (e.ctrlKey) {
                isProfileMirrored = !isProfileMirrored;
                updateProfileImageTransform();
            } else {
                secretClickCount++;
                if (secretClickCount === 5) {
                    if (profileImg.style.filter === 'invert(1) hue-rotate(180deg)') {
                        profileImg.style.filter = 'none';
                    } else {
                        profileImg.style.filter = 'invert(1) hue-rotate(180deg)';
                    }
                    secretClickCount = 0;
                }
            }
        });
    }

    if (imageFrame) {
        imageFrame.addEventListener('dblclick', () => {
            imageFrame.classList.add('spin-3d');
        });

        imageFrame.addEventListener('animationend', () => {
            imageFrame.classList.remove('spin-3d');
        });
    }

    let clicks = 0;
    let seconds = 0;
    const clickCountEl = document.getElementById('click-count');
    const timeSpentEl = document.getElementById('time-spent');

    document.addEventListener('click', () => {
        clicks++;
        if (clickCountEl) clickCountEl.textContent = clicks;
    });

    setInterval(() => {
        seconds++;
        if (timeSpentEl) {
            const m = String(Math.floor(seconds / 60)).padStart(2, '0');
            const s = String(seconds % 60).padStart(2, '0');
            timeSpentEl.textContent = `${m}:${s}`;
        }
    }, 1000);

    let typedMagicWord = '';
    window.addEventListener('keydown', (e) => {
        typedMagicWord += e.key.toLowerCase();
        
        if (typedMagicWord.slice(-5) === 'magia') {
            document.body.classList.add('spin-magic');
            setTimeout(() => {
                document.body.classList.remove('spin-magic');
            }, 2000);
        }

        if (typedMagicWord.slice(-5) === 'rower') {
            const bike = document.createElement('div');
            bike.textContent = '🚴‍♂️💨';
            bike.className = 'bike-easter-egg';
            document.body.appendChild(bike);
            
            bike.animate([
                { left: '-100px' },
                { left: '100vw' }
            ], { 
                duration: 2500, 
                easing: 'linear' 
            }).onfinish = () => bike.remove();
        }

        if (typedMagicWord.length > 20) {
            typedMagicWord = typedMagicWord.slice(-10);
        }
    });

    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('portfolioTheme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    
    applyTranslations('pl');

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            
            if (isDark) {
                themeToggle.textContent = translations[currentLanguage]["theme-light"];
                localStorage.setItem('portfolioTheme', 'dark');
            } else {
                themeToggle.textContent = translations[currentLanguage]["theme-dark"];
                localStorage.setItem('portfolioTheme', 'light');
            }
        });
    }

    const hackerBtn = document.getElementById('hacker-btn');
    if (hackerBtn) {
        hackerBtn.addEventListener('click', () => {
            document.body.classList.toggle('hacker-mode');
        });
    }

    const leetBtn = document.getElementById('leet-btn');
    let isLeet = false;
    const leetMap = { 'a': '4', 'e': '3', 'i': '1', 'o': '0', 's': '5', 't': '7', 'A': '4', 'E': '3', 'I': '1', 'O': '0', 'S': '5', 'T': '7' };

    function walkTextNodes(node, func) {
        if (node.nodeType === 3) {
            func(node);
        } else if (node.nodeType === 1 && node.nodeName !== 'SCRIPT' && node.nodeName !== 'STYLE') {
            node.childNodes.forEach(child => walkTextNodes(child, func));
        }
    }

    if (leetBtn) {
        leetBtn.addEventListener('click', () => {
            isLeet = !isLeet;
            walkTextNodes(document.body, (node) => {
                if (!node.originalText) {
                    node.originalText = node.nodeValue;
                }
                if (isLeet) {
                    node.nodeValue = node.nodeValue.replace(/[aeiostAEIOST]/g, m => leetMap[m]);
                } else {
                    node.nodeValue = node.originalText;
                }
            });
        });
    }

    const sysInfoEl = document.getElementById('sys-info');
    if (sysInfoEl) {
        const ua = navigator.userAgent;
        let os = "Nieznany OS";
        let browser = "Inna";
        
        if (ua.indexOf("Win") !== -1) os = "Windows";
        if (ua.indexOf("Mac") !== -1) os = "MacOS";
        if (ua.indexOf("Linux") !== -1) os = "Linux";
        if (ua.indexOf("Android") !== -1) os = "Android";
        
        if (ua.indexOf("Chrome") !== -1) browser = "Chrome";
        else if (ua.indexOf("Firefox") !== -1) browser = "Firefox";
        else if (ua.indexOf("Safari") !== -1) browser = "Safari";
        else if (ua.indexOf("Edge") !== -1) browser = "Edge";
        
        sysInfoEl.textContent = `${os} | ${browser}`;
    }

    const batteryInfoEl = document.getElementById('battery-info');
    if (batteryInfoEl && navigator.getBattery) {
        navigator.getBattery().then(bat => {
            const updateBattery = () => {
                batteryInfoEl.textContent = `${Math.round(bat.level * 100)}% ${bat.charging ? '⚡' : ''}`;
            };
            updateBattery();
            bat.addEventListener('levelchange', updateBattery);
            bat.addEventListener('chargingchange', updateBattery);
        });
    } else if (batteryInfoEl) {
        batteryInfoEl.textContent = "Brak dostępu";
    }

    const actionCenterBtn = document.getElementById('action-center-btn');
    const closeActionCenterBtn = document.getElementById('close-action-center');
    const actionCenter = document.getElementById('action-center');

    if (actionCenterBtn && closeActionCenterBtn && actionCenter) {
        actionCenterBtn.addEventListener('click', () => {
            actionCenter.classList.add('open');
        });

        closeActionCenterBtn.addEventListener('click', () => {
            actionCenter.classList.remove('open');
        });
    }
});
