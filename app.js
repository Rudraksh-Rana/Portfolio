// ============================================
// PORTFOLIO APPLICATION
// ============================================
// This file renders the portfolio content
// from data.js and handles interactivity.
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initPortfolio();
    initNavigation();
    initScrollAnimations();
    initAdvancedScrollEffects();
    initContactForm();
});

// ==========================================
// ENHANCED SCROLL EFFECTS
// ==========================================
function initAdvancedScrollEffects() {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                const navbar = document.getElementById('navbar');
                
                // Subtle background shift based on scroll
                if (scrollY > 0) {
                    document.body.style.setProperty('--scroll-y', `${scrollY}px`);
                }
                
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

// ==========================================
// INITIALIZE PORTFOLIO CONTENT
// ==========================================
function initPortfolio() {
    // Update meta information
    document.title = portfolioData.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', portfolioData.meta.description);
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', portfolioData.meta.keywords);

    // Render all sections
    renderHero();
    renderAbout();
    renderSkills();
    renderProjects();
    renderAchievements();
    renderExperience();
    renderContact();
    renderFooter();
    renderNavigation();
}

// ==========================================
// RENDER HERO SECTION
// ==========================================
function renderHero() {
    const { personal, about } = portfolioData;

    // Update logo
    document.getElementById('logo').textContent = personal.name.split(' ')[0];

    // Update hero content
    document.getElementById('hero-name').textContent = personal.name;
    document.getElementById('hero-title').textContent = personal.title;
    document.getElementById('hero-tagline').textContent = personal.tagline;
    document.getElementById('hero-availability').textContent = personal.availability;

    // Update hero image
    const heroImage = document.getElementById('hero-image');
    heroImage.src = about.image || 'https://avatars.githubusercontent.com/u/0?v=4';
    heroImage.alt = personal.name;

    // Render stats
    const statsContainer = document.getElementById('hero-stats');
    statsContainer.innerHTML = about.highlights.map(highlight => `
    <div class="stat-item">
      <div class="stat-value">${highlight.value}</div>
      <div class="stat-label">${highlight.label}</div>
    </div>
  `).join('');
}

// ==========================================
// RENDER ABOUT SECTION
// ==========================================
function renderAbout() {
    const { about, personal } = portfolioData;

    // Update about image
    const aboutImage = document.getElementById('about-image');
    aboutImage.src = about.image || 'https://avatars.githubusercontent.com/u/0?v=4';
    aboutImage.alt = personal.name;

    // Render bio paragraphs
    const bioContainer = document.getElementById('about-bio');
    bioContainer.innerHTML = about.bio.map(paragraph => `<p>${paragraph}</p>`).join('');

    // Render highlights
    const highlightsContainer = document.getElementById('about-highlights');
    highlightsContainer.innerHTML = about.highlights.map(highlight => `
    <div class="highlight-item">
      <div class="highlight-icon">${highlight.icon}</div>
      <div class="highlight-content">
        <span class="highlight-value">${highlight.value}</span>
        <span class="highlight-label">${highlight.label}</span>
      </div>
    </div>
  `).join('');

    // Update resume link
    const resumeLink = document.getElementById('resume-link');
    resumeLink.href = personal.resumeLink || '#';
}

// ==========================================
// RENDER SKILLS SECTION
// ==========================================
function renderSkills() {
    const { skills } = portfolioData;
    const skillsGrid = document.getElementById('skills-grid');

    skillsGrid.innerHTML = skills.map(category => `
    <div class="skill-category fade-in">
      <div class="skill-category-header">
        <span class="skill-category-icon">${category.icon}</span>
        <h3 class="skill-category-title">${category.category}</h3>
      </div>
      <div class="skill-list">
        ${category.items.map(skill => `
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">${skill.name}</span>
              <span class="skill-percentage">${skill.level}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" data-level="${skill.level}"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// ==========================================
// RENDER PROJECTS SECTION
// ==========================================
function renderProjects() {
    const { projects } = portfolioData;
    const projectsGrid = document.getElementById('projects-grid');

    const featuredProjects = projects.filter(p => p.featured);

    projectsGrid.innerHTML = featuredProjects.map(project => `
    <div class="project-card fade-in">
      <div class="project-image">
        ${project.image
            ? `<img src="${project.image}" alt="${project.title}">`
            : `<span class="project-placeholder">🚀</span>`
        }
        <div class="project-overlay">
          ${project.liveUrl && project.liveUrl !== '#' ? `
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link" title="Live Demo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15,3 21,3 21,9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          ` : ''}
          ${project.githubUrl && project.githubUrl !== '#' ? `
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link" title="View Code">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          ` : ''}
        </div>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// ==========================================
// RENDER ACHIEVEMENTS SECTION
// ==========================================
function renderAchievements() {
    const { achievements } = portfolioData;
    const achievementsGrid = document.getElementById('achievements-grid');

    achievementsGrid.innerHTML = achievements.map(achievement => `
    <div class="achievement-card fade-in">
      <div class="achievement-icon">${achievement.icon}</div>
      <h3 class="achievement-title">${achievement.title}</h3>
      <p class="achievement-description">${achievement.description}</p>
      <span class="achievement-date">${achievement.date}</span>
    </div>
  `).join('');
}

// ==========================================
// RENDER EXPERIENCE SECTION
// ==========================================
function renderExperience() {
    const { experience } = portfolioData;
    const timeline = document.getElementById('timeline');

    timeline.innerHTML = experience.map((exp, index) => `
    <div class="timeline-item fade-in">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h3 class="timeline-role">${exp.role}</h3>
        <p class="timeline-company">${exp.company}</p>
        <p class="timeline-description">${exp.description}</p>
        <div class="timeline-tech">
          ${exp.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </div>
      <div class="timeline-date">${exp.duration}</div>
    </div>
  `).join('');
}

// ==========================================
// RENDER CONTACT SECTION
// ==========================================
function renderContact() {
    const { personal, social } = portfolioData;

    // Update contact details
    document.getElementById('contact-email').textContent = personal.email;
    document.getElementById('contact-location').textContent = personal.location;

    // Render social links
    const socialLinksContainer = document.getElementById('social-links');
    const socialIcons = {
        github: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
        linkedin: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
        twitter: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>`,
        email: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`
    };

    let socialHTML = '';
    for (const [platform, url] of Object.entries(social)) {
        if (url && socialIcons[platform]) {
            const href = platform === 'email' ? `mailto:${url}` : url;
            socialHTML += `
        <a href="${href}" target="_blank" rel="noopener noreferrer" class="social-link" title="${platform}">
          ${socialIcons[platform]}
        </a>
      `;
        }
    }
    socialLinksContainer.innerHTML = socialHTML;
}

// ==========================================
// RENDER FOOTER
// ==========================================
function renderFooter() {
    const { personal } = portfolioData;

    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('footer-name').textContent = personal.name;
}

// ==========================================
// RENDER NAVIGATION
// ==========================================
function renderNavigation() {
    const { navigation } = portfolioData;
    const navLinks = document.getElementById('nav-links');

    navLinks.innerHTML = navigation.map(link => `
    <li><a href="${link.href}">${link.label}</a></li>
  `).join('');
}

// ==========================================
// NAVIGATION FUNCTIONALITY
// ==========================================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    // Scroll effect for navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '-50px',
        threshold: [0, 0.1, 0.5]
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered animation delay for multiple elements
                const delay = index * 80;
                entry.target.style.animationDelay = `${delay}ms`;
                entry.target.classList.add('visible');

                // Animate skill bars when visible
                const skillBars = entry.target.querySelectorAll('.skill-progress');
                if (skillBars.length > 0) {
                    skillBars.forEach((bar, barIndex) => {
                        const level = bar.getAttribute('data-level') || bar.style.width;
                        setTimeout(() => {
                            bar.style.width = `${level}`;
                        }, 300 + (barIndex * 100));
                    });
                }
            }
        });
    }, observerOptions);

    // Observe all animated elements including cards
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .skill-category, .project-card, .achievement-card').forEach(el => {
        observer.observe(el);
    });
}

// ==========================================
// CONTACT FORM
// ==========================================
function initContactForm() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Create mailto link as fallback
        const { email } = portfolioData.personal;
        const subject = encodeURIComponent(data.subject || 'Portfolio Contact');
        const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`);

        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

        // Show success message
        alert('Opening your email client to send the message!');
        form.reset();
    });
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
