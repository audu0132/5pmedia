# 5P Media — Digital Agency Website

5P Media is a premium, full-service digital agency website specializing in web development, search engine optimization (SEO), digital marketing, branding, and e-commerce solutions. This project showcases a custom-designed, highly interactive, and visually stunning web presence built using a premium warm cream design system.

---

## 🎨 Premium Aesthetics & UI Features

- **Custom Warm Cream Color Palette**: Uses refined, harmonious CSS variables (`--bg`, `--surface`, `--accent`, etc.) to create a modern, elegant user interface.
- **Aurora Background**: Soft, drifting animated blobs that add a premium depth to the visual experience.
- **Micro-Animations & Interactions**:
  - **Scroll Reveal**: Elements smoothly fade and slide into view as you scroll down the page via JS `IntersectionObserver`.
  - **Navbar Scroll Effects**: Dynamic background transitions on scroll.
  - **Parallax Flow**: Floating decor elements drift at varied speeds during scrolling.
- **Responsive Layout**: Seamlessly adapted for mobile, tablet, and desktop screens with a tailored drawer navigation for smaller screens.

---

## 🛠️ Technology Stack

- **Markup & Layout**: HTML5, semantic elements, and Bootstrap 5 (specifically leveraged for its robust grid system).
- **Styling**: 
  - Custom Vanilla CSS (`styles.css`, `premium-ui.css`) for high-fidelity component styling.
  - Tailwind CSS (`input.css` compiled to `output.css`) for utility-first layout utilities.
- **Interactivity**: Pure JavaScript (`script.js`) for menu control, Intersection Observer reveals, and parallax animation.
- **Deployment**: Configured out-of-the-box for **Vercel** with clean URL structures.

---

## 📁 Repository Structure

```
├── .vscode/               # Workspace-specific editor configurations
├── about.html             # "About Us" section detailing the agency's vision & team
├── contact.html           # Inquire / Get in touch form page
├── index.html             # Homepage containing hero, client trust, services preview, and CTAs
├── services.html          # Detailed grid of services (Web Dev, SEO, Marketing, Branding)
├── script.js              # Interactivity, mobile navigation, scroll reveals, and parallax logic
├── input.css              # Main tailwind directive source file
├── output.css             # Compiled tailwind build (loaded by HTML files)
├── styles.css             # Base styles, variables, typography, and aurora animations
├── premium-ui.css         # Customized UI components, glassmorphism, and utility overrides
├── tailwind.config.js     # Tailwind compilation configuration
├── package.json           # Scripts and devDependencies (Tailwind, Autoprefixer, PostCSS)
└── vercel.json            # Vercel static build and routing config
```

---

## 🚀 Setup & Local Development

To run the site locally and compile changes to Tailwind CSS utility styles:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed.

### 1. Install Dependencies

Install the tailwind compilation tools:
```bash
npm install
```

### 2. Run the Development Server (Tailwind Watcher)

Start Tailwind CSS in watch mode to automatically re-compile `output.css` when you make edits to any HTML or CSS files:
```bash
npm run dev
```

### 3. Build for Production

Compile a minified, production-ready version of the CSS:
```bash
npm run build
```

---

## 🌐 Deployment (Vercel)

This project is pre-configured to deploy seamlessly on [Vercel](https://vercel.com).
The configuration details in [vercel.json](file:///d:/New%20folder/5p%20Media/vercel.json) specify:
- Static build output mapping
- Clean URL routing (`/about` instead of `/about.html`)
