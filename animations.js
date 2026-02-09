// ============================================
// GSAP ANIMATIONS
// ============================================
// Modern animations using GSAP and ScrollTrigger
// Provides smooth, performant animations similar to Framer Motion
// ============================================

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    initGSAPAnimations();
});

// ==========================================
// MAIN GSAP ANIMATIONS INITIALIZATION
// ==========================================
function initGSAPAnimations() {
    animateHeroSection();
    animateProjectCards();
    animateSkillsSection();
    animateAchievements();
    animateExperience();
    animateAboutSection();
    setupScrollParallax();
    setupButtonAnimations();
    setupSectionScrollTriggers();
}

// ==========================================
// HERO SECTION ANIMATION
// ==========================================
function animateHeroSection() {
    const timeline = gsap.timeline();

    // Fade in hero label
    timeline.fromTo('.hero-label', 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'cubic.out' },
        0
    );

    // Slide in hero title
    timeline.fromTo('h1',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'cubic.out' },
        0.2
    );

    // Fade in tagline
    timeline.fromTo('.tagline',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'cubic.out' },
        0.3
    );

    // Fade in description
    timeline.fromTo('.hero-content > p:last-of-type',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'cubic.out' },
        0.4
    );

    // Stagger button animations
    timeline.fromTo('.hero-buttons .btn',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'cubic.out', stagger: 0.15 },
        0.5
    );

    // Fade in stats
    timeline.fromTo('.hero-stats .stat-item',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out', stagger: 0.1 },
        0.7
    );

    // Zoom and fade in hero image
    timeline.fromTo('.hero-image-wrapper',
        { opacity: 0, scale: 0.8, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'cubic.out' },
        0.3
    );
}

// ==========================================
// PROJECT CARDS ANIMATION
// ==========================================
function animateProjectCards() {
    const projectCards = gsap.utils.toArray('.project-card');

    projectCards.forEach((card, index) => {
        gsap.fromTo(card,
            { opacity: 0, y: 50, rotateY: -20 },
            {
                opacity: 1,
                y: 0,
                rotateY: 0,
                duration: 0.8,
                ease: 'cubic.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    end: 'top 20%',
                    toggleActions: 'play none none reverse',
                },
            }
        );

        // Add hover lift effect to project cards
        gsap.fromTo(card,
            { boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' },
            {
                boxShadow: '0 20px 60px rgba(99, 102, 241, 0.3)',
                duration: 0.4,
                paused: true,
            }
        ).pause();

        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                duration: 0.4,
                ease: 'cubic.out',
                overwrite: 'auto',
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 0.4,
                ease: 'cubic.out',
                overwrite: 'auto',
            });
        });
    });
}

// ==========================================
// SKILLS SECTION ANIMATION
// ==========================================
function animateSkillsSection() {
    const skillCategories = gsap.utils.toArray('.skill-category');

    skillCategories.forEach((category, index) => {
        // Animate category entrance
        gsap.fromTo(category,
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'cubic.out',
                scrollTrigger: {
                    trigger: category,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
                delay: index * 0.1,
            }
        );

        // Animate skill bars on scroll
        const skillBars = category.querySelectorAll('.skill-progress');
        skillBars.forEach((bar) => {
            const level = bar.getAttribute('data-level') || 0;
            
            gsap.fromTo(bar,
                { width: '0%' },
                {
                    width: `${level}%`,
                    duration: 1.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: category,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                    delay: 0.3,
                }
            );
        });
    });
}

// ==========================================
// ACHIEVEMENTS ANIMATION
// ==========================================
function animateAchievements() {
    const achievements = gsap.utils.toArray('.achievement-card');

    achievements.forEach((card, index) => {
        gsap.fromTo(card,
            { opacity: 0, y: 50, scale: 0.8 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: 'back.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
                delay: (index % 3) * 0.15,
            }
        );

        // Icon pulse animation
        const icon = card.querySelector('.achievement-icon');
        if (icon) {
            gsap.to(icon,
                {
                    scale: 1.1,
                    duration: 0.6,
                    yoyo: true,
                    repeat: -1,
                    ease: 'sine.inOut',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }
    });
}

// ==========================================
// EXPERIENCE TIMELINE ANIMATION
// ==========================================
function animateExperience() {
    const timelineItems = gsap.utils.toArray('.timeline-item');

    timelineItems.forEach((item, index) => {
        // Alternate left/right animation
        const fromX = index % 2 === 0 ? -100 : 100;

        gsap.fromTo(item,
            { opacity: 0, x: fromX, rotateY: index % 2 === 0 ? -10 : 10 },
            {
                opacity: 1,
                x: 0,
                rotateY: 0,
                duration: 0.8,
                ease: 'cubic.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
                delay: (index % 2) * 0.2,
            }
        );

        // Animate timeline dot
        const dot = item.querySelector('.timeline-dot');
        if (dot) {
            gsap.fromTo(dot,
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                    ease: 'back.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    },
                    delay: (index * 0.15),
                }
            );

            // Create pulsing animation for dots
            gsap.to(dot,
                {
                    boxShadow: '0 0 20px rgba(99, 102, 241, 0.8)',
                    duration: 1.5,
                    yoyo: true,
                    repeat: -1,
                    ease: 'sine.inOut',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }
    });
}

// ==========================================
// ABOUT SECTION ANIMATION
// ==========================================
function animateAboutSection() {
    const aboutImage = document.querySelector('.about-image');
    const aboutText = document.querySelector('.about-text');

    if (aboutImage) {
        gsap.fromTo(aboutImage,
            { opacity: 0, x: -100, rotateY: -20 },
            {
                opacity: 1,
                x: 0,
                rotateY: 0,
                duration: 1,
                ease: 'cubic.out',
                scrollTrigger: {
                    trigger: aboutImage,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            }
        );

        // Image hover effect
        aboutImage.addEventListener('mouseenter', () => {
            gsap.to(aboutImage, { scale: 1.05, duration: 0.4 });
        });

        aboutImage.addEventListener('mouseleave', () => {
            gsap.to(aboutImage, { scale: 1, duration: 0.4 });
        });
    }

    if (aboutText) {
        gsap.fromTo(aboutText,
            { opacity: 0, x: 100 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: 'cubic.out',
                scrollTrigger: {
                    trigger: aboutText,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
                delay: 0.2,
            }
        );

        // Animate highlight items with stagger
        const highlights = aboutText.querySelectorAll('.highlight-item');
        gsap.fromTo(highlights,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'cubic.out',
                stagger: 0.1,
                scrollTrigger: {
                    trigger: aboutText,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
                delay: 0.4,
            }
        );
    }
}

// ==========================================
// SCROLL PARALLAX EFFECT
// ==========================================
function setupScrollParallax() {
    // Create parallax effect for hero image
    const heroImage = document.querySelector('.hero-image-wrapper');
    if (heroImage) {
        gsap.to(heroImage, {
            y: 100,
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                onUpdate: (self) => {
                    gsap.to(heroImage, { y: self.getVelocity() * -0.5, duration: 0 });
                },
                markers: false,
            },
        });
    }
}

// ==========================================
// BUTTON ANIMATIONS
// ==========================================
function setupButtonAnimations() {
    const buttons = gsap.utils.toArray('.btn');

    buttons.forEach(button => {
        const tl = gsap.timeline({ paused: true });

        tl.fromTo(button,
            { scale: 1 },
            { scale: 1.05, duration: 0.3, ease: 'cubic.out' },
            0
        );

        button.addEventListener('mouseenter', () => tl.play());
        button.addEventListener('mouseleave', () => tl.reverse());

        // Add ripple effect on click
        button.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            gsap.fromTo(ripple,
                { opacity: 0.6, scale: 0 },
                { opacity: 0, scale: 2, duration: 0.6, ease: 'power2.out' }
            );
        });
    });
}

// ==========================================
// SECTION SCROLL TRIGGER ANIMATIONS
// ==========================================
function setupSectionScrollTriggers() {
    // Animate section headers
    const sectionHeaders = gsap.utils.toArray('.section-header');

    sectionHeaders.forEach((header) => {
        const label = header.querySelector('.section-label');
        const title = header.querySelector('h2');
        const desc = header.querySelector('p');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
        });

        if (label) {
            tl.fromTo(label,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6 },
                0
            );
        }

        if (title) {
            tl.fromTo(title,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.6 },
                0.1
            );
        }

        if (desc) {
            tl.fromTo(desc,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6 },
                0.2
            );
        }
    });

    // Fade in contact form fields
    const formGroups = gsap.utils.toArray('.form-group');
    gsap.fromTo(formGroups,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'cubic.out',
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.contact-form',
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
        }
    );
}

// ==========================================
// UTILITY: REFRESH SCROLL TRIGGERS ON CONTENT LOAD
// ==========================================
function refreshScrollTriggers() {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    ScrollTrigger.refresh();
    initGSAPAnimations();
}

// Export function for manual trigger if needed
window.refreshScrollTriggers = refreshScrollTriggers;
