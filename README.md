# Professional Portfolio

A modern, responsive portfolio website with a sleek dark theme, glassmorphism effects, and smooth animations. Built to be easily customizable - just edit one file to update all your content!

![Portfolio Preview](https://img.shields.io/badge/Status-Ready%20to%20Use-brightgreen)

## ✨ Features

- **🎨 Modern Design** - Dark theme with gradient accents, glassmorphism cards, and micro-animations
- **📱 Fully Responsive** - Looks great on desktop, tablet, and mobile devices
- **⚡ Fast Loading** - Pure HTML/CSS/JS, no build step or dependencies required
- **🔧 Easy to Customize** - All content in a single `data.js` file
- **🚀 GitHub Pages Ready** - Deploy directly to GitHub Pages
- **📝 SEO Optimized** - Proper meta tags and semantic HTML structure

## 🗂️ Project Structure

```
portfolio/
├── index.html      # Main HTML structure
├── styles.css      # All styling (modify CSS variables for theme)
├── app.js          # Renders content & handles interactivity
├── data.js         # ⭐ EDIT THIS FILE to customize your portfolio
└── README.md       # This file
```

## 🚀 Quick Start

### 1. Clone or Download

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Customize Your Content

Open `data.js` and update the following sections:

#### Personal Information
```javascript
personal: {
  name: "Your Name",
  title: "Your Title",
  tagline: "Your tagline",
  email: "your@email.com",
  location: "Your City, Country",
  availability: "Open to opportunities",
  resumeLink: "link-to-your-resume.pdf"
}
```

#### About Section
```javascript
about: {
  image: "your-photo-url.jpg",
  bio: [
    "First paragraph about you.",
    "Second paragraph about you."
  ],
  highlights: [
    { icon: "💼", label: "Years Experience", value: "5+" },
    // Add more highlights...
  ]
}
```

#### Skills
```javascript
skills: [
  {
    category: "Frontend",
    icon: "🎨",
    items: [
      { name: "JavaScript", level: 90 },
      // Add more skills...
    ]
  }
  // Add more categories...
]
```

#### Projects
```javascript
projects: [
  {
    title: "Project Name",
    description: "What the project does",
    image: "project-screenshot.jpg",
    technologies: ["React", "Node.js"],
    liveUrl: "https://project-demo.com",
    githubUrl: "https://github.com/you/project",
    featured: true
  }
  // Add more projects...
]
```

#### Achievements
```javascript
achievements: [
  {
    title: "Award Name",
    description: "What you achieved",
    date: "2024",
    icon: "🏆",
    type: "award"
  }
  // Add more achievements...
]
```

#### Experience
```javascript
experience: [
  {
    role: "Job Title",
    company: "Company Name",
    duration: "2022 - Present",
    description: "What you did",
    technologies: ["React", "AWS"]
  }
  // Add more experiences...
]
```

#### Social Links
```javascript
social: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  email: "your@email.com"
}
```

### 3. Preview Locally

Simply open `index.html` in your browser:

```bash
# Using Python (if installed)
python -m http.server 8000

# Or just double-click index.html
```

### 4. Deploy to GitHub Pages

1. Create a new repository on GitHub
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```
3. Go to **Settings** → **Pages**
4. Set source to **Deploy from a branch** → **main** → **/ (root)**
5. Your portfolio will be live at `https://yourusername.github.io`

## 🎨 Customizing the Theme

Edit the CSS variables in `styles.css` to change colors:

```css
:root {
  /* Primary Colors */
  --primary: #6366f1;        /* Main accent color */
  --primary-light: #818cf8;  /* Lighter accent */
  --accent: #22d3ee;         /* Secondary accent */
  
  /* Background Colors */
  --bg-primary: #0f0f1a;     /* Main background */
  --bg-secondary: #1a1a2e;   /* Section backgrounds */
  
  /* Text Colors */
  --text-primary: #f8fafc;   /* Main text */
  --text-secondary: #94a3b8; /* Muted text */
}
```

## 📧 Contact Form

The contact form uses a `mailto:` link as a simple solution that works without a backend. For a working contact form, you can:

1. **Formspree** - Replace the form action with your Formspree endpoint
2. **Netlify Forms** - Add `netlify` attribute to the form tag
3. **Custom Backend** - Connect to your own server

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ | [View Live Demo](#)
