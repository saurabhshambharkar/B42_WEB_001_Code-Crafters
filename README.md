<p align="center">
  <img src="🔗/logo.png" width="120" alt="Code‑Crafters logo"/>
</p>

<h1 align="center">Code‑Crafters 🛍️ – Fashion & Lifestyle Store</h1>
<p align="center">
  Your one‑stop shop for men’s, women’s, kids’ apparel and beauty essentials.<br/>
  <a href="🔗 LIVE_DEMO_URL" target="_blank"><strong>🚀 Try the Live Demo →</strong></a>
</p>

<div align="center">
  <img src="https://img.shields.io/badge/stack-MERN-informational"/>
  <img src="https://img.shields.io/badge/PWA-ready-blueviolet"/>
  <img src="https://img.shields.io/github/license/your‑user/B42_WEB_001_Code-Crafters.svg"/>
</div>

---

## ✨ Key Highlights
- **Multi‑Category Catalog** – Women, Men, Kids & Beauty in one sleek UI.  
- **Smart Cart & Checkout** – Save items, update quantities, lightning‑fast order flow.  
- **Responsive & PWA** – Shop comfortably on any device; install it like an app.  
- **Instant Search & Filters** – Find the perfect fit in seconds.  
- **Secure Payments** – Stripe‑powered checkout (test mode).  

---

## 🖼️ Screenshots

| Landing | Women | Men |
|:--:|:--:|:--:|
| ![Landing](https://github.com/user-attachments/assets/6dc8ad59-ea12-4cbc-98f3-8cb2542630be) | ![Women](https://github.com/user-attachments/assets/848ccf31-0969-4d34-9aaa-f7cd7838215f) | ![Men](https://github.com/user-attachments/assets/a2179acf-7855-4406-a612-3d39fe17e874) |

| Beauty | Kids | Cart | Checkout |
|:--:|:--:|:--:|:--:|
| ![Beauty](https://github.com/user-attachments/assets/c58a2e52-97b2-4d42-b1e2-b9a236a706ae) | ![Kids](https://github.com/user-attachments/assets/0dd9e6c3-19ff-4dea-b811-fa6ec5d167f8) | ![Cart](https://github.com/user-attachments/assets/8d79bfcb-11e7-4bd4-a583-53440826354c) | ![Checkout](https://github.com/user-attachments/assets/d33caabd-3580-4113-938c-8cb3cd1c417a) |

---

## 🚀 Tech Stack
| Layer | Tools |
|-------|-------|
| **Frontend** | React 18 • Vite • Tailwind CSS • React‑Router v6 |
| **State** | Redux Toolkit, RTK Query |
| **Backend** | Node.js • Express • MongoDB Atlas |
| **Payments** | Stripe |
| **Auth** | JWT + HttpOnly cookies |
| **CI / CD** | GitHub Actions → Netlify (preview) / Render (API) |

---

## 🛠️ Local Setup

```bash
# 1. Clone
git clone https://github.com/your-user/B42_WEB_001_Code-Crafters.git
cd B42_WEB_001_Code-Crafters

# 2. Install
pnpm install          # or npm / yarn

# 3. Env variables
cp .env.example .env.local
# → add Mongo URI, JWT_SECRET, Stripe keys…

# 4. Seed sample data (optional)
pnpm run seed

# 5. Run dev servers
pnpm --filter "server" dev   # API on http://localhost:5000
pnpm --filter "client" dev   # Web on http://localhost:5173
