# 🔥 Insanity Barebell Club - React Website

<div align="center">

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.2-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

**A flashy, futuristic fitness gym website**

</div>

---

## 🚀 Quick Start (3 Steps)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser at http://localhost:3000
```

**That's it!** 🎉

---

## 📁 Project Structure

```
IBC/
├── src/
│   ├── components/         # All React components
│   ├── config.js          # 🔧 Edit this for content!
│   ├── App.jsx            # Main app
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies
├── vite.config.js         # Vite config
└── tailwind.config.js     # Tailwind config
```

---

## 🎨 Customization

### 1️⃣ Update Content
Edit `src/config.js`:

```javascript
contact: {
  phone: "+00 123 456 7890",  // ← Change this
  email: "info@yourgym.com",  // ← Change this
}

social: {
  facebook: "your-url",       // ← Change this
  instagram: "your-url",      // ← Change this
}

// Update images, blog posts, trainers, etc.
```

### 2️⃣ Change Colors
Edit `tailwind.config.js`:

```javascript
accent: {
  neon: '#39ff14',    // Main green
  cyan: '#00ffff',    // Secondary cyan
  pink: '#ff1b7e',    // Accent pink
}
```

### 3️⃣ Modify Sections
Edit `src/App.jsx` to add/remove components

---

## 🛠️ Available Commands

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## ✨ Features

### Design
- 💚 Neon green & cyan theme with glowing effects
- 🌈 Gradient accents and glassmorphism
- ✨ Smooth Framer Motion animations
- 📱 Fully responsive design

### Sections
1. Animated loader with spinning rings
2. Sticky navigation with smooth scroll
3. Full-screen hero with animated text
4. Auto-scrolling gallery carousel
5. Mission/Vision tabs + Trainer carousel
6. YouTube video modal
7. Scrolling marquee banner
8. Services grid with hover effects
9. Interactive class schedule table
10. Blog section with news cards
11. Instagram feed carousel
12. Footer with contact & social links
13. Floating scroll-to-top button

---

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel** (recommended): `npm install -g vercel && vercel`
- **Netlify**: Drag & drop `dist/` folder
- **GitHub Pages**: Use gh-pages package
- **Custom Server**: Upload `dist/` folder

---

## 📝 Key Files to Edit

| File | Purpose |
|------|---------|
| `src/config.js` | All content (text, images, links) |
| `tailwind.config.js` | Colors and theme |
| `src/App.jsx` | Add/remove sections |
| `src/components/*.jsx` | Individual section code |

---

## 🎯 Next Steps

1. ✅ Run `npm install` and `npm run dev`
2. 📝 Update `src/config.js` with your information
3. 🖼️ Replace placeholder images with your photos
4. 🎨 Customize colors (optional)
5. 🚀 Build and deploy when ready

---

## 💡 Pro Tips

- **Edit config first** - All content in one place
- **Test on mobile** - Most users are on phones
- **Compress images** - Keep them under 500KB
- **Use Unsplash** - Free high-quality photos

---

## 🆘 Troubleshooting

**Port in use?** Change port in `vite.config.js`

**npm install fails?**
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Images not loading?** Check URLs in `config.js`

---

## 🎨 Color Palette

```css
--neon-green: #39ff14    /* Main accent */
--cyan: #00ffff          /* Secondary */
--pink: #ff1b7e          /* Tertiary */
--dark: #0a0a0f          /* Background */
```

---

## 📊 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool (super fast!)
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Icons** - Beautiful icons
- **React Scroll** - Smooth scrolling

---

<div align="center">

## 💪 Transform Your Body, Transform Your Life

**Made with ❤️ using modern web technologies**

[Start Now](#-quick-start-3-steps) • [Customize](#-customization) • [Deploy](#-deployment)

</div>
