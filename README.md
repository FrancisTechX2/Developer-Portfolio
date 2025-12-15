# Portfolio Site

A modern, dark-themed portfolio website built with React and Tailwind CSS, matching the design from `siteDesign.png`.

## Features

- **Dark Theme**: Black background (#000000) with white text and purple accents (#A020F0)
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Component-Based Architecture**: Each section is a separate React functional component
- **Modern Stack**: React 18 + Vite + Tailwind CSS

## Sections

1. **Header**: Fixed navigation with logo and menu items
2. **Hero**: Introduction with highlighted text, social icons, and user image
3. **Quote**: Inspirational quote with decorative quotation marks
4. **Projects**: Showcase of projects with cards and technology tags
5. **Skills**: Grid of skill icons with technology names
6. **About Me**: Personal introduction with illustration
7. **Contacts**: Contact information and message box
8. **Footer**: Copyright and social media links

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
portfolioSite/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Quote.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── AboutMe.jsx
│   │   ├── Contacts.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Customization

- Update text content in each component file
- Replace placeholder images with actual images
- Modify colors in `tailwind.config.js` or directly in components
- Adjust spacing and layout using Tailwind utility classes

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- PostCSS
- Autoprefixer

