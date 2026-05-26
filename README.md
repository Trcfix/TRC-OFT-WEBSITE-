# TRC FIX - Professional Technology Solutions Website

[![GitHub](https://img.shields.io/badge/GitHub-Trcfix%2FTRC--OFT--WEBSITE-blue?logo=github)](https://github.com/Trcfix/TRC-OFT-WEBSITE-)
[![Live Site](https://img.shields.io/badge/Live-Website-green?logo=earth)](https://trcfix.github.io/TRC-OFT-WEBSITE-/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

A modern, professional, and fully responsive website for TRC FIX - a technology solutions company based in Zambia. Built with vanilla HTML, CSS, and JavaScript with seamless WhatsApp integration.

## 🌟 Features

### Pages
- **Home Page** - Hero section, services overview, testimonials, and FAQ
- **Services Page** - Detailed service descriptions, pricing plans, and complete service menu
- **About & Contact Page** - Company information, mission/vision, contact form, and support center

### Key Features
✅ **Fully Responsive Design** - Works seamlessly on mobile, tablet, and desktop  
✅ **WhatsApp Integration** - Direct messaging with prefilled service information  
✅ **Interactive Pricing** - Service menu with category filtering  
✅ **FAQ Accordion** - Expandable questions and answers  
✅ **Animated Statistics** - Counter animations for impact  
✅ **Contact Form** - WhatsApp-integrated contact submission  
✅ **Mobile-First** - Hamburger menu for mobile navigation  
✅ **SEO Optimized** - Proper meta tags and semantic HTML  
✅ **Fast Performance** - Optimized CSS and vanilla JavaScript  
✅ **Professional Design** - Blue, white, and dark gray color scheme  
✅ **Accessibility** - WCAG compliant with keyboard navigation  
✅ **Smooth Animations** - CSS animations and transitions throughout  

## 📱 Live Demo

**🌐 Website:** [https://trcfix.github.io/TRC-OFT-WEBSITE-/](https://trcfix.github.io/TRC-OFT-WEBSITE-/)

**📦 Repository:** [https://github.com/Trcfix/TRC-OFT-WEBSITE-](https://github.com/Trcfix/TRC-OFT-WEBSITE-)

## 📋 Pages Overview

### 1. Home Page (index.html)
- Hero section with call-to-action buttons
- About TRC FIX introduction
- Why Choose Us - 8 key features
- Featured Services - 8 service cards
- How It Works - 5-step process
- Statistics with animated counters
- Client testimonials carousel
- FAQ section with accordion
- Call-to-action section
- Footer with links and contact info

### 2. Services Page (services.html)
- Professional Digital Services header
- 6 detailed service descriptions
- Pricing Plans:
  - Starter Plan (K80 - K150)
  - Standard Plan (K120 - K250) - Featured
  - Premium Plan (K250+)
- Complete Service Menu with filtering by category:
  - Design & Branding (5 services)
  - Website & Online (5 services)
  - Automation (5 services)
  - Marketing (5 services)
  - Business Setup (8 services)
- Benefits section
- Call-to-action

### 3. About & Contact Page (about.html)
- Company overview
- Mission, Vision, and Promise statements
- 6 Core Values
- Contact Form with fields:
  - Full Name
  - Email Address
  - Phone Number
  - Service Required (dropdown)
  - Project Details
  - Message
- Contact Information:
  - Phone: +260 763 926 311 (WhatsApp Available)
  - Email: trcfixzm@gmail.com
  - Business Hours
  - Location (Zambia)
- WhatsApp Chat button
- Map placeholder section
- Support Center with 6 FAQ items
- Call-to-action

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (Vanilla)** - No frameworks or dependencies
- **WhatsApp Web API** - Direct messaging integration
- **Font** - Segoe UI system font stack
- **Icons** - Unicode emoji for visual appeal

## 📦 File Structure

```
TRC-OFT-WEBSITE/
├── index.html          # Home page
├── services.html       # Services page
├── about.html          # About & Contact page
├── styles.css          # Professional styling (26KB)
├── script.js           # Interactive features (20KB)
├── README.md           # This file
└── assets/             # (Optional) Images and media folder
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#0066cc` - Main brand color
- **Secondary Blue**: `#003d7a` - Dark accent
- **Accent Blue**: `#00a8e8` - Highlights
- **Light Gray**: `#f8f9fa` - Backgrounds
- **Dark Gray**: `#2c3e50` - Text
- **White**: `#ffffff` - Base

### Typography
- **Font**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **H1**: 2.5rem (responsive)
- **H2**: 2rem (responsive)
- **H3**: 1.5rem
- **Body**: 1rem, line-height 1.6
- **Line height**: 1.8 for paragraphs

### Spacing
- Standard padding: `20px - 60px` per section
- Gap between elements: `1rem - 3rem`
- Container max-width: `1200px`

## 🚀 Features in Detail

### WhatsApp Integration
- All pricing plans have WhatsApp buttons with prefilled messages
- Service menu items link to WhatsApp conversations
- Contact form submits via WhatsApp
- Direct link: `https://wa.me/260763926311`

### Interactive Elements
- **FAQ Accordion** - Click to expand/collapse
- **Service Menu Filtering** - Filter by category
- **Animated Statistics** - Counter animation on scroll
- **Mobile Hamburger Menu** - Touch-friendly navigation
- **Smooth Scrolling** - Anchor link animations
- **Form Validation** - Email and phone validation

### Responsive Breakpoints
- Desktop: 1200px and above
- Tablet: 769px - 1199px
- Mobile: 480px - 768px
- Small Mobile: Below 480px

## 📖 How to Use

### Installation
1. Clone the repository:
```bash
git clone https://github.com/Trcfix/TRC-OFT-WEBSITE-.git
cd TRC-OFT-WEBSITE-
```

2. Open in a web browser:
- Double-click `index.html` to open locally
- Or use a local server (recommended):
```bash
python -m http.server 8000
# Then visit http://localhost:8000
```

### Customization

#### Update Contact Information
Edit these files to update phone, email, and WhatsApp number:
- `about.html` - Contact details, WhatsApp link
- `script.js` - Update `phoneNumber` variable (line ~140)

#### Modify Services
- Edit service cards in `index.html`, `services.html`
- Update `serviceMenuData` in `script.js` for menu items

#### Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #003d7a;
    /* ... other colors ... */
}
```

#### Update Testimonials
Edit the testimonials section in `index.html` with real client feedback

#### Add More FAQ Items
Add new `.faq-item` div with `.faq-question` and `.faq-answer` in any page

## 📱 Mobile Optimization

- ✅ Viewport meta tag configured
- ✅ Touch-friendly buttons (min 44px height)
- ✅ Mobile hamburger menu
- ✅ Responsive grid layouts
- ✅ Optimized images and fast loading
- ✅ Readable fonts and spacing on all devices

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Focus indicators on interactive elements
- Skip-to-main-content link

## 🔍 SEO Optimization

- Semantic HTML5 structure
- Meta descriptions and keywords
- Proper heading hierarchy
- Mobile-responsive design
- Fast page load time
- Structured content
- Proper link structure

## 📊 Performance

- **No external dependencies** - Vanilla JavaScript only
- **CSS**: 26KB (production-ready)
- **JavaScript**: 20KB (production-ready)
- **Lazy loading** - Support for deferred image loading
- **Smooth animations** - CSS-based with GPU acceleration
- **Optimized fonts** - System font stack (no external fonts)

## 🔐 Security

- No sensitive data stored in code
- WhatsApp links use proper URL encoding
- Form validation on client-side
- HTTPS ready for deployment

## 📞 Contact Information

**TRC FIX**
- 📱 Phone: +260 763 926 311
- 💬 WhatsApp: +260 763 926 311
- 📧 Email: trcfixzm@gmail.com
- 🌍 Location: Zambia

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 👨‍💻 Author

**Created by:** Trcfix  
**Powered by:** MR TRC

## 📝 Changelog

### Version 1.0.0 (2026-05-26)
- ✨ Initial website launch
- 🎨 Professional design with responsive layout
- 📱 Full mobile optimization
- 💬 WhatsApp integration
- 🎯 Interactive pricing and service menu
- 📞 Contact form with validation
- 🔍 SEO optimization
- ♿ Accessibility features

## 🎯 Future Enhancements

- [ ] Blog section
- [ ] Client portfolio gallery
- [ ] Payment integration
- [ ] Live chat support
- [ ] Multi-language support
- [ ] Analytics dashboard
- [ ] Email notifications
- [ ] Automated invoicing

## 📚 Resources

- [HTML5 Specification](https://html.spec.whatwg.org/)
- [CSS3 Reference](https://www.w3.org/Style/CSS/current-work)
- [JavaScript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [WhatsApp Business API](https://developers.facebook.com/docs/whatsapp)

---

**Built with ❤️ by TRC FIX**

For more information or to request services, visit [https://trcfix.github.io/TRC-OFT-WEBSITE-/](https://trcfix.github.io/TRC-OFT-WEBSITE-/)
