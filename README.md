# Gaurav Desai - Portfolio Website

A modern, professional portfolio website built with React and Vite, optimized for static deployment on GitHub Pages.

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher required; v20+ recommended)
- npm or yarn
- nvm (Node Version Manager) - recommended for managing Node versions

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gauravkdesai/gauravdesai_website.git
cd gauravdesai_website
```

2. **Ensure you're using the correct Node.js version:**
   
   If you have nvm installed (recommended):
   ```bash
   nvm use
   # or manually: nvm install 24 && nvm use 24
   ```
   
   Verify your Node version:
   ```bash
   node --version  # Should be v18+ or v20+
   ```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

**Note:** If you see a blank page or errors, make sure you're using Node.js v18 or higher. The project includes a `.nvmrc` file for automatic version switching with nvm.

## 📦 Building for Production

Build the static site:
```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🌐 Deployment to GitHub Pages

### Option 1: Using gh-pages (Recommended)

1. Install gh-pages (already included in devDependencies):
```bash
npm install
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will:
- Build the project
- Deploy the `dist/` folder to the `gh-pages` branch
- Make your site available at `https://gauravkdesai.github.io/gauravdesai_website/`

3. Configure GitHub Pages:
   - Go to your repository Settings > Pages
   - Set Source to `gh-pages` branch
   - Save

### Option 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Push the `dist/` folder contents to the `gh-pages` branch manually

### Custom Domain Setup

If you're using a custom domain:

1. Update `vite.config.js`:
```javascript
base: '/',  // Change from '/gauravdesai_website/' to '/'
```

2. Add a `CNAME` file in the `public/` directory with your domain name
3. Configure DNS settings in your domain provider

## ✏️ Personalizing Your Content

All content is marked with `TODO` comments for easy updates. Here's where to customize:

### 1. Header (`src/components/Header.jsx`)
- **Tagline**: Update the `tagline` variable (line ~7)

### 2. Hero Section (`src/components/Hero.jsx`)
- **Short Bio**: Update `shortBio` variable (line ~8)
- **Profile Photo**: 
  - Place your photo at `public/assets/profile-photo.jpg`
  - Or update the `profilePhoto` path (line ~13)
- **Social Links**: Update `socialLinks` object (lines ~4-8)
  - LinkedIn URL
  - GitHub URL
  - Email address

### 3. About Section (`src/components/About.jsx`)
- **Expanded Bio**: Update `expandedBio` variable (line ~5)
- **Skills**: Update the `skills` array (lines ~12-24)
  - Add/remove skills as needed
  - Categories: 'language', 'framework', 'database', 'cloud', 'devops', 'tool', 'methodology'
- **Certifications**: Update the `certifications` array (lines ~28-43)
  - Add certification name, issuer, date, and optional link

### 4. Projects Section (`src/components/Projects.jsx`)
- **Projects**: Update the `projects` array (lines ~6-40)
  - Each project needs: `title`, `description`, `tech` (array), `github` (URL), `demo` (URL, optional)
- **Subtitle**: Update the section subtitle (line ~43)

### 5. Hobbies Section (`src/components/Hobbies.jsx`)
- **Description**: Update `hobbiesDescription` variable (line ~5)
- **Hobby Projects**: Update the `hobbyProjects` array (lines ~9-25)
  - Add title, description, and link for each hobby project

### 6. Contact Section (`src/components/Contact.jsx`)
- **Contact Info**: Update the `contactInfo` object (lines ~5-9)
  - Email address
  - LinkedIn URL
  - Location (currently set to Zurich, Switzerland)

### 7. Footer (`src/components/Footer.jsx`)
- **Domain Names**: Update the `domainNames` array (lines ~7-10)
- **Social Links**: Update the `socialLinks` object (lines ~13-17)

### 8. Global Configuration
- **Base Path**: Update `vite.config.js` if using a custom domain (change `base` to `'/'`)
- **Site Title**: Update `public/index.html` title tag
- **Meta Description**: Update `public/index.html` meta description

## 🎨 Customizing Colors

Colors are defined in `src/index.css` as CSS variables:
- `--primary-blue`: Main brand color
- `--gray-*`: Various gray shades
- `--white`: Background and text colors

Update these variables to match your brand colors.

## 📁 Project Structure

```
gauravdesai_website/
├── public/
│   ├── assets/          # Place images here (profile photo, etc.)
│   └── index.html       # HTML template
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Hobbies.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main app component
│   ├── App.css          # Global app styles
│   ├── index.jsx        # Entry point
│   └── index.css        # Global styles and CSS variables
├── package.json
├── vite.config.js       # Vite configuration
└── README.md
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing (HashRouter for GitHub Pages)
- **React Icons** - Icon library
- **CSS3** - Styling with CSS variables

## 📝 Notes

- The site uses HashRouter for GitHub Pages compatibility
- All routing is client-side (single-page application)
- No server-side logic - fully static
- Responsive design (mobile-first approach)
- All images should be placed in `public/assets/` or referenced as public URLs

## 🤝 Contributing

This is a personal portfolio website. Feel free to fork and customize for your own use!

## 📄 License

This project is open source and available for personal use.

---

Built with ❤️ by Gaurav Desai
