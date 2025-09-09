# Vidyaarambh Workshop Website

A modern, single-page React site for the Vidyaarambh workshop. It features a high-tech dark theme, animated hero (three.js + bloom), smooth section reveals, interactive cards, and an auto-scrolling organizers carousel. Built with Vite for fast dev and production builds.

## Tech Stack
- React 18 + Vite
- Tailwind (via CDN) + custom CSS utilities
- three.js with postprocessing (UnrealBloomPass)
- Lucide React icons
- GitHub Actions (deploy to GitHub Pages)

## Key Features
- Animated hero background (particles + wireframes, bloom, mouse-reactive)
- Typing animation for headline and subtitle
- Smooth scroll, on-scroll reveal, and staggered animations
- Card hover interactions: tilt, shimmer, zoom, glow
- Dynamic registration CTA by tier thresholds
- Auto-scrolling contact carousel for faculty, lead, and team
- Enhanced global background: multi-stop diagonal gradient, parallax dot grid, vignette
- Mobile-ready header with hamburger menu and active link accent

## Project Structure
```
vidyaarambh-website/
├── public/
│   └── images/
│       ├── favicon.ico
│       ├── prize-placeholder-1.png
│       └── lead-contact.png (optional)
├── src/
│   ├── assets/
│   │   ├── parth.jpg (optional)
│   │   ├── bhavesh.jpg (optional)
│   │   └── akash.jpg (optional)
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── SessionsSection.jsx
│   │   ├── MentorsSection.jsx
│   │   ├── PrizesSection.jsx
│   │   ├── PerksSection.jsx
│   │   ├── RegistrationSection.jsx
│   │   ├── PrerequisitesSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── ThreejsCanvas.jsx
│   ├── hooks/
│   │   ├── useRegistrationStatus.js
│   │   └── useRevealOnScroll.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── .github/workflows/deploy-pages.yml
```

## Getting Started (Local)
1) Install dependencies
```
npm install
```

2) Start dev server
```
npm run dev
```
Visit the printed localhost URL.

## Production Build
```
npm run build
npm run preview
```
Preview serves the optimized build at a local URL.

## Assets
- Place favicons and public images in `public/images/`
- Mentor photos in `src/assets/` (cards fallback to initials if missing)
- Optional: `public/images/lead-contact.png` for lead contact card

## Deployment – GitHub Pages
This repo includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

1) Push the project to GitHub (default branch: `main`).
2) In GitHub → Settings → Pages, set Source to “GitHub Actions”.
3) The workflow builds on each push to `main` and deploys `dist` to Pages.

Notes:
- The Vite base path is controlled by `VITE_BASE`. The workflow sets it to `/<repo-name>/` at build time:
  ```yaml
  env:
    VITE_BASE: /${{ github.event.repository.name }}/
  ```
- If you use a custom domain, set `base: '/'` (e.g., export `VITE_BASE=/`) and add `CNAME` in `public/`.

## Configuration
- Global theme variables and animation utilities are in `src/index.css`.
- Toggle/adjust animation intensities and speeds in `src/index.css` and individual components.
- Three.js scene params (counts, colors, bloom) live in `ThreejsCanvas.jsx`.

## Accessibility & Performance
- Cards, links, and buttons provide visible hover/focus states.
- Animations are tuned to be subtle; adjust or disable if needed for motion sensitivity.
- Test Lighthouse after deployment and fine-tune as desired.

## License
This project is intended for the Vidyaarambh workshop site. Replace or add a license if needed for your organization. 
