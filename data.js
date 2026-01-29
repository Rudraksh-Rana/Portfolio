// ============================================
// PORTFOLIO DATA CONFIGURATION
// ============================================
// Edit this file to customize your portfolio.
// All sections below will automatically update
// on the website when you change these values.
// ============================================

const portfolioData = {
    // ==========================================
    // PERSONAL INFORMATION
    // ==========================================
    personal: {
        name: "Rudrax Rana",
        title: "Data Engineer, Data Scientist, Data Enthusiast",
        tagline: "Building elegant solutions to complex problems",
        email: "rudrax010205@gmail.com",
        location: "Dewas (M.P), INDIA",
        availability: "Open to opportunities",
        resumeLink: "#", // Link to your resume PDF
    },

    // ==========================================
    // ABOUT SECTION
    // ==========================================
    about: {
        image: "./images/profile.jpg", // Replace with your image URL
        bio: [
            "I'm a passionate developer with expertise in building modern web applications. With a strong foundation in both frontend and backend technologies, I love creating seamless user experiences.",
            "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
            "I believe in writing clean, maintainable code and continuously learning to stay at the forefront of technology."
        ],
        highlights: [
            { icon: "💼", label: "Years Experience", value: "Internee" },
            { icon: "🚀", label: "Projects Completed", value: "3" },
            { icon: "⭐", label: "GitHub Stars", value: "100+" },
            { icon: "📚", label: "Leetcode Solved", value: "100+" }
        ]
    },

    // ==========================================
    // SKILLS SECTION
    // ==========================================
    skills: [
        {
            category: "Frontend",
            icon: "🎨",
            items: [
                { name: "HTML/CSS", level: 90 },
                { name: "JavaScript", level: 85 },
                { name: "TypeScript", level: 70 },
            ]
        },
        {
            category: "Backend",
            icon: "⚙️",
            items: [
                { name: "Node.js", level: 60 },
                { name: "Python", level: 90 },
                { name: "Flask", level: 80 },
                { name: "PostgreSQL", level: 50 },
                { name: "MongoDB", level: 70 }
            ]
        },
        {
            category: "Tools & Others",
            icon: "🛠️",
            items: [
                { name: "Git", level: 90 },
                { name: "Docker", level: 70 },
                { name: "AWS", level: 65 },
                { name: "Linux", level: 75 },
                { name: "VS code", level: 90 },
                { name: "Antigravity", level: 80 }
            ]
        }
    ],

    // ==========================================
    // PROJECTS SECTION
    // ==========================================
    projects: [
        {
            title: "To Do List",
            description: "A modern Todo List app built with Flask and JavaScript. Features secure user authentication, color-coded categories, priority levels, due dates, and drag-and-drop reordering. Styled with a sleek dark mode and glassmorphism effects. Includes inline editing, toast notifications, and responsive design for desktop and mobile.",
            image: "", // Add project screenshot URL
            technologies: ["Python", "Flask", "Node.js", "MongoDB", "Tailwind CSS"],
            liveUrl: "#",
            githubUrl: "https://github.com/Rudraksh-Rana/To-Do-list",
            featured: true
        },
        {
            title: "Portfolio",
            description: "A modern portfolio website built with Next.js and Tailwind CSS. Features a clean, responsive design with smooth animations and a dark mode toggle. Includes a contact form and a projects section with a modern, minimalist layout.",
            image: "",
            technologies: ["Next.js", "Stripe", "PostgreSQL", "HTML", "CSS", "JavaScript",],
            liveUrl: "#",
            githubUrl: "#",
            featured: true
        },
        {
            title: "Project Three",
            description: "A data visualization dashboard that transforms complex datasets into interactive, insightful charts.",
            image: "",
            technologies: ["Python", "Flask", "D3.js", "SQLite"],
            liveUrl: "#",
            githubUrl: "#",
            featured: true
        },
        {
            title: "Project Four",
            description: "A mobile-first social platform for connecting developers and sharing coding knowledge.",
            image: "",
            technologies: ["React Native", "Firebase", "Redux"],
            liveUrl: "#",
            githubUrl: "#",
            featured: false
        }
    ],

    // ==========================================
    // ACHIEVEMENTS SECTION
    // ==========================================
    achievements: [
        {
            title: "Achievement Title One",
            description: "Brief description of what you accomplished and its impact.",
            date: "2024",
            icon: "🏆",
            type: "award" // award, certification, milestone
        },
        {
            title: "Professional Certification",
            description: "Obtained certification in a relevant technology or methodology.",
            date: "2023",
            icon: "📜",
            type: "certification"
        },
        {
            title: "Open Source Contribution",
            description: "Contributed to a major open-source project with significant impact.",
            date: "2023",
            icon: "🌟",
            type: "milestone"
        },
        {
            title: "Hackathon Winner",
            description: "Won first place in a competitive hackathon event.",
            date: "2022",
            icon: "🥇",
            type: "award"
        }
    ],

    // ==========================================
    // EXPERIENCE SECTION (Timeline)
    // ==========================================
    experience: [
        {
            role: "Senior Developer",
            company: "Tech Company",
            duration: "2023 - Present",
            description: "Leading development of scalable web applications and mentoring junior developers.",
            technologies: ["React", "Node.js", "AWS"]
        },
        {
            role: "Full Stack Developer",
            company: "Startup Inc",
            duration: "2021 - 2023",
            description: "Built and maintained multiple client-facing applications from scratch.",
            technologies: ["Python", "Flask", "PostgreSQL", "React"]
        },
        {
            role: "Junior Developer",
            company: "Digital Agency",
            duration: "2020 - 2021",
            description: "Developed responsive websites and contributed to team projects.",
            technologies: ["HTML", "CSS", "JavaScript", "PHP"]
        }
    ],

    // ==========================================
    // SOCIAL LINKS
    // ==========================================
    social: {
        github: "https://github.com/Rudraksh-Rana",
        linkedin: "www.linkedin.com/in/rudrax-rana-b44441226",
        twitter: "https://twitter.com/yourusername",
        email: "rudrax010205@gmail.com",
        // Add or remove social links as needed
        // instagram: "https://instagram.com/yourusername",
        // youtube: "https://youtube.com/@yourusername",
        // blog: "https://yourblog.com",
    },

    // ==========================================
    // NAVIGATION MENU
    // ==========================================
    navigation: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Achievements", href: "#achievements" },
        { label: "Experience", href: "#experience" },
        { label: "Contact", href: "#contact" }
    ],

    // ==========================================
    // SEO & META
    // ==========================================
    meta: {
        title: "Your Name | Portfolio",
        description: "Full Stack Developer specializing in modern web technologies. View my projects, skills, and achievements.",
        keywords: "developer, portfolio, web development, full stack, react, node.js",
        ogImage: "" // URL to Open Graph image for social sharing
    }
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
