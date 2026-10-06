# 🔧 FERRETERÍA EL TORNILLO

> **Industrial Brutalist Design System** - Precision tools, industrial quality, built to last.

---

## 📦 Tech Stack

| Tecnología | Versión | Propósito |
|-------------|----------|-----------|
| **React** | 19.2.5 | UI Library |
| **TypeScript** | 6.0.2 | Type Safety |
| **Vite** | 8.0.10 | Build Tool |
| **CSS Modules** | - | Styling (Industrial Brutalist) |
| **Work Sans** | - | Primary Font |

---

## 🎨 Design System

This project follows the **Industrial Brutalist** design philosophy:

- 🔲 **Sharp edges**: `border-radius: 0px` everywhere
- 🔴 **Primary Red**: `#9e0000` for critical actions
- ⚫ **Base Black**: `#1a1c1c` for structure
- 🔳 **Grey Scale**: Light grey backgrounds (never pure white)
- 📐 **8px Grid**: Strict spacing system
- 🔤 **Bold Borders**: 2-3px solid black borders
- 🏗️ **Hard Shadows**: `4px 4px 0px #000` (no blurs)

---

## 🎬 Movimiento

Una sola física para todo el sitio (springs descritos como Apple: *damping ratio* + *response*).

- **JS:** `src/motion/physics.ts` (`springs`, `project`, `rubberband`).
- **CSS:** gemelos `--spring-*` y `--t-*` en `src/index.css` (se regeneran con `node .claude/skills/apple-motion/scripts/gen-spring.mjs`).
- **Momentos firma:** tarjeta de producto → panel de detalle (elemento compartido, hoja arrastrable en móvil), píldora que viaja en el navbar, navbar direccional (solo táctil/tablet), fondo del hero ligado al scroll, hover/press con "suelo" de sombra dura.
- Respeta `prefers-reduced-motion`, `prefers-reduced-transparency` y `prefers-contrast`.
- Las skills usadas viven en `.claude/skills/` (`apple-design`, `apple-motion`).

### WhatsApp

Copiá `.env.example` a `.env` y completá `VITE_WHATSAPP_NUMBER` (formato internacional, sin `+`). Sin número, los botones de consulta llevan a la sección de contacto.

---

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar/          # Fixed navbar with burger menu
│   ├── Hero/            # Full-viewport hero with floating block
│   ├── About/           # Two-column layout (info + images)
│   ├── Materials/       # Product catalog grid
│   ├── MaterialCard/    # Individual product card
│   ├── Resenas/        # Customer reviews section
│   ├── ResenaCard/      # Individual review card
│   ├── Contacto/       # Contact section with map
│   └── Footer/         # Footer with navigation
├── data/
│   ├── dataMaterials.ts  # Product catalog
│   └── dataResenas.ts   # Customer reviews
├── types/
│   ├── Materials.ts      # Material interface
│   └── Resenas.ts       # Review interface
├── App.tsx              # Main app component
├── index.css            # Global styles & design tokens
└── main.tsx             # Entry point
```

---

## 🎯 Features

### ✅ Implemented
- 🔧 **Fixed Navbar** with burger menu (responsive)
- 🎯 **Hero Section** with full-viewport image and floating block
- 📊 **About Section** with two-column layout (info + images)
- 🛠️ **Product Catalog** with 12-column grid
- ⭐ **Reviews Section** with star ratings
- 📍 **Contact Section** with Google Maps integration
- 📱 **Fully Responsive** (desktop, tablet, mobile)
- 🎨 **Industrial Brutalist Design** throughout

### 🔜 Coming Soon
- 🖼️ Product images in MaterialCards
- 🛒 Shopping cart functionality
- 🔍 Product search and filtering
- 📝 Contact form with validation

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com/new)
3. Vercel auto-detects Vite configuration
4. Deploy!

```bash
# Build output directory: dist/
# Framework preset: Vite
# Node.js version: 18.x or later
```

---

## 📸 Screenshots

> **TODO**: Add screenshots of the application in action

---

## 🏗️ Design Philosophy

> "The interface should feel like a well-organized tool chest: every element has a clear purpose, is easy to find, and feels built to last."

This project embraces:
- **Minimalism with Brutalist influences**
- **Raw structural elements**
- **High-contrast layouts**
- **Functional over decorative**

---

## 📝 License

© 2026 Fausto Chirino. All rights reserved.

---

## 🔗 Links

- **Live Demo**: [TODO - Add Vercel URL after deploy]
- **GitHub Repo**: [TODO - Add repo URL]
- **Design System**: See `docs/DESIGN.md`

---

**Built with 🔧 for professionals who value precision and durability.**
