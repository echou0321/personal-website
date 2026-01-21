# Personal Website

A modern, sleek personal website built with React + Vite, designed to be hosted on GitHub Pages.

## Features

- One-page scroll format with smooth animations
- Modern black design theme
- Responsive layout
- Scroll-triggered fade-in animations
- Sections: Hero, About, Projects, Skills, Contact

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## GitHub Pages Deployment

1. Update `vite.config.js` with your repository name (if different from `personal-website`)
2. Build the project: `npm run build`
3. The `dist` folder contains the static files
4. Configure GitHub Pages to serve from the `dist` folder or use GitHub Actions for automatic deployment

## Customization

- Update personal information in `src/components/Hero.jsx`
- Add your projects in `src/components/Projects.jsx`
- Update skills in `src/components/Skills.jsx`
- Add your resume PDF to the `public` folder and update the link in `Hero.jsx`
- Update contact links in `src/components/Contact.jsx`
