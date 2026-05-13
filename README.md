# 🕊️ The Light of Peace

> A premium, modern Islamic humanitarian organization website built for **The Light of Peace** — a registered NGO based in **Mombasa, Kenya**, dedicated to serving vulnerable communities through faith-driven charity programs.

---

## 🌟 About

The Light of Peace is an Islamic humanitarian organization that provides food, education, clean water, orphan care, and mosque construction support to communities across Kenya. This website serves as their digital presence — enabling donors to learn about programs, make contributions via M-Pesa, and witness the transparent impact of their generosity.

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI framework with component-based architecture |
| **Vite** | Lightning-fast development and build tooling |
| **Tailwind CSS** | Utility-first styling with custom brand design system |
| **React Router DOM** | Client-side routing and navigation |
| **Lucide React** | Icon library |
| **Google Fonts** | Playfair Display (headings) + Nunito (body) |

---

## 🎨 Design System

The website uses a custom brand design system defined in `tailwind.config.js`:

| Token | Value | Usage |
|---|---|---|
| `brand-emerald` | `#0d5c3a` | Primary green |
| `brand-emerald-dark` | `#083d26` | Headings, dark backgrounds |
| `brand-emerald-light` | `#1a7a4e` | Gradient accents |
| `brand-gold` | `#c9a227` | Gold accents, CTA highlights |
| `brand-gold-light` | `#e8c45a` | Glowing gold, icons |
| `brand-cream` | `#faf6ef` | Page background |

**Fonts:** Playfair Display (premium headings) · Nunito (clean body text)

---

## 📄 Pages & Sections

### Home Page (`/`)
The homepage is a single-page scroll experience with the following sections in order:

1. **Navbar** — Responsive, fixed navigation with auto-hide mobile menu on scroll and premium full-screen mobile overlay
2. **Hero** — Full-screen dark emerald gradient with animated star particles, mosque silhouette, impact statistics, and call-to-action buttons
3. **About** — Organization story, mission, and core values
4. **Programs** — Six core programs: Zakat & Sadaqah, Orphan Support, Food Security, Education, Clean Water, Mosque Projects
5. **Impact Stats** — Animated counters showing real impact numbers
6. **Clean Water** — Dedicated borehole and water initiative section
7. **Mosque Construction** — Live project progress with video updates and funding tracker
8. **Udhhiya** — Eid al-Adha sacrifice program with tiered pricing packages
9. **Transparency** — Trust and accountability section with gallery link
10. **Donation** — M-Pesa donation details with WhatsApp contact integration
11. **Blog** — Latest news and Islamic articles
12. **Success Stories** — Community impact stories
13. **Partners** — Organizational supporters
14. **Volunteer** — Call-to-action for community volunteers
15. **FAQ** — Accordion-style frequently asked questions
16. **Contact** — WhatsApp-integrated contact form + location (Mombasa, Kenya)
17. **Footer** — Full sitemap, social links, and mosque silhouette

### Gallery Page (`/gallery`)
- Filterable media gallery (Ramadan 2023, Udhiya Program, Mosque Construction)
- Supports both images and video
- Hover overlays with "Verified Impact" badges

---

## 🔒 Security Features

- **Error Boundary** — Prevents full app crashes; shows a graceful recovery screen
- **X-Frame-Options** — Protects against clickjacking attacks
- **X-Content-Type-Options** — Prevents MIME-type sniffing attacks
- **Strict Referrer Policy** — Controls information shared with external sites
- **`rel="noopener noreferrer"`** — Applied to all external links (WhatsApp, Maps)

---

## ⚡ Performance Features

- **React Lazy + Suspense** — All sections are code-split and loaded on demand
- **Image Lazy Loading** — Gallery images load only when scrolled into view
- **Memoized Animations** — `useMemo` prevents redundant recalculation of Hero star particles
- **Scroll-based Navigation** — Mobile menu auto-closes on scroll for seamless UX
- **Redirect on Refresh** — Any page refresh navigates the user back to the homepage

---

## 📱 Responsive Design

The website is fully responsive across all screen sizes:

- **Mobile** (`< 640px`) — Compact layout, full-screen mobile menu, touch-optimized buttons
- **Tablet** (`640px–1024px`) — Hybrid layouts with optimal grid columns
- **Desktop** (`> 1024px`) — Full navigation bar, multi-column grids, large hero typography

---

## 💳 Donation Method

Donations are made through **M-Pesa Paybill** or **Gulf African Bank**:

| Method | Details |
|---|---|
| **M-Pesa Paybill** | `985050` |
| **Bank Account** | `0800066201` — Gulf African Bank |
| **Account Name** | THE LIGHT OF PEACE |

---

## 📞 Contacts

| Name | Number |
|---|---|
| Ustadh Badi | +254 721 376 922 |
| Sheikh Abdurahman Jelle | +254 725 393 639 |

**Location:** Mombasa, Kenya

---

## 🗂️ Project Structure

```
THE-LIGHT-OF-PEACE/
├── public/
│   ├── logo.png
│   └── gallery/          # Ramadan, Udhiya, Mosque media assets
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Shared.jsx     # Logo, GeometricPattern, MosqueSilhouette, Counter
│   │   │   └── Cards.jsx      # FAQCard, ProgramCard, BlogCard
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Programs.jsx
│   │   ├── ImpactStats.jsx
│   │   ├── CleanWater.jsx
│   │   ├── MosqueConstruction.jsx
│   │   ├── Udhhiya.jsx
│   │   ├── Transparency.jsx
│   │   ├── Donation.jsx
│   │   ├── Blog.jsx
│   │   ├── SuccessStories.jsx
│   │   ├── Partners.jsx
│   │   ├── Volunteer.jsx
│   │   ├── FAQ.jsx
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx            # Routing, ErrorBoundary, Lazy loading
│   ├── main.jsx
│   └── index.css          # Tailwind directives + Google Fonts import
├── tailwind.config.js     # Brand design system (colors, fonts, animations)
├── vite.config.js
├── postcss.config.js
└── index.html             # Security meta tags, SEO meta description
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd THE-LIGHT-OF-PEACE

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

---

## 🤲 May Allah bless every visitor and multiply the rewards of every donor. JazakAllah Khairan.
