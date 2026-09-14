# 🎬 Mash Edits - Professional Portfolio Website

**A modern, responsive portfolio website for Mash Edits photography and videography studio based in Nyeri, Kenya.**

![Mash Edits Portfolio](https://img.shields.io/badge/Status-Active-brightgreen) ![License](https://img.shields.io/badge/License-MIT-blue) ![Mobile Responsive](https://img.shields.io/badge/Mobile-Responsive-green)

## 📋 Overview

Mash Edits is a professional photography and videography studio serving clients nationwide across Kenya. This portfolio website showcases our services, work samples, and makes it easy for potential clients to get in touch.

**Based in:** Nyeri, Kenya  
**Service Area:** Nationwide Kenya & East Africa  
**Specializations:** Weddings, Events, Drone Coverage, Product Photography, Corporate Videos, Livestreaming

## ✨ Features

### User Experience
- ✅ **Fully Responsive Design** - Optimized for mobile, tablet, and desktop
- ✅ **Auto-Rotating Hero Slider** - Showcase top photography samples with smooth transitions
- ✅ **Filterable Portfolio Gallery** - Filter work by category (Weddings, Events, Drone, Products, Corporate, Portraits)
- ✅ **Smooth Scroll Navigation** - Seamless navigation between sections
- ✅ **Mobile-Optimized Menu** - Hamburger menu for smaller screens
- ✅ **Fast Loading Performance** - Optimized images and lazy loading

### Design & Branding
- ✅ **Premium Dark Theme** - Charcoal/Black background with gold accents (#d4af37)
- ✅ **Cinematic Aesthetic** - Professional typography and smooth hover animations
- ✅ **Consistent Branding** - Custom logo, color palette, and visual identity
- ✅ **Modern UI Elements** - Card-based layouts, icons, and visual hierarchy

### Sections
1. **Navigation Bar** - Fixed navbar with logo, menu links, and "Book Now" CTA button
2. **Hero Section** - Full-screen slider with tagline "Capturing Kenya's Moments, One Frame at a Time"
3. **Services** - 6-item grid showcasing all services with icons
4. **Portfolio** - Filterable masonry grid with 10+ portfolio items
5. **About** - Studio introduction, stats, and equipment showcase
6. **Testimonials** - Client quotes with star ratings
7. **Coverage Area** - Map indicator and nationwide service availability
8. **Contact Form** - Email inquiry form with service selection
9. **Footer** - Logo, quick links, and social media

### Interactive Features
- 🖱️ **Portfolio Filtering** - Click to filter by category
- 🎨 **Hover Animations** - Cards and images animate on hover
- 📊 **Counter Animations** - Stats animate when section comes into view
- ⌨️ **Keyboard Navigation** - Arrow keys to navigate hero slider
- 📧 **Form Validation** - Client-side validation for contact form
- 💬 **Social Integration** - Instagram, Facebook, TikTok, YouTube, WhatsApp

### Performance & Accessibility
- ✅ **Lazy Image Loading** - Images load only when needed
- ✅ **Scroll Animations** - Elements fade in as user scrolls
- ✅ **Keyboard Accessible** - Navigate with keyboard
- ✅ **Semantic HTML** - Proper heading hierarchy and structure
- ✅ **Meta Tags** - SEO-optimized metadata

## 📁 Project Structure

```
mash-edits-portfolio/
├── index.html                 # Main portfolio page
├── README.md                  # Documentation
├── .gitignore                 # Git ignore rules
├── assets/
│   ├── css/
│   │   └── style.css         # Main stylesheet (19KB)
│   ├── js/
│   │   └── script.js         # Interactive functionality (10KB)
│   └── images/
│       ├── hero-1.jpg        # Hero slider images
│       ├── hero-2.jpg
│       ├── hero-3.jpg
│       ├── portfolio-1.jpg   # Portfolio items (10 images)
│       ├── portfolio-2.jpg
│       └── ...
├── netlify.toml              # Netlify deployment config
└── vercel.json               # Vercel deployment config
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML/CSS/JavaScript for customization

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kimwojokershakamadazolo-netizen/mash-edits-portfolio.git
   cd mash-edits-portfolio
   ```

2. **Open locally:**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Or using Node.js http-server
   npx http-server
   ```
   Then open `http://localhost:8000` in your browser.

3. **Customize content:**
   - Edit `index.html` to change text and structure
   - Modify `assets/css/style.css` for colors and styling
   - Update `assets/js/script.js` for functionality

## 🎨 Customization

### Change Brand Colors
Edit CSS variables in `assets/css/style.css`:
```css
:root {
    --dark-bg: #0a0e27;           /* Dark background */
    --accent-gold: #d4af37;       /* Primary accent (change this) */
    --text-primary: #ffffff;      /* Text color */
}
```

### Change Contact Information
Edit contact details in `index.html`:
```html
<a href="tel:+254712345678">+254 (0) 712 345 678</a>
<a href="mailto:hello@mashedits.co.ke">hello@mashedits.co.ke</a>
```

### Add Portfolio Items
Add new portfolio items in the portfolio section:
```html
<div class="portfolio-item" data-category="weddings">
    <div class="portfolio-image">
        <img src="assets/images/portfolio-XX.jpg" alt="Project Title">
        <div class="portfolio-overlay">
            <h3>Project Title</h3>
            <p>Location | Year</p>
        </div>
    </div>
</div>
```

### Update Social Media Links
Edit social links in the footer and header:
```html
<a href="https://instagram.com/yourusername" target="_blank">
    <i class="fab fa-instagram"></i>
</a>
```

## 📦 Image Setup

Replace placeholder images with actual photography:

**Hero Slider Images:**
- `assets/images/hero-1.jpg` - Wedding/event sample
- `assets/images/hero-2.jpg` - Drone/aerial sample
- `assets/images/hero-3.jpg` - Product/portrait sample

**Portfolio Images:**
- `assets/images/portfolio-1.jpg` through `portfolio-10.jpg`
- Recommended: 800x800px for consistent grid display
- Formats: JPEG, PNG (optimize for web)

**Team Photo:**
- `assets/images/about-team.jpg` - Team or studio photo

## 🌐 Deployment

### Option 1: Netlify (Recommended)
```bash
# 1. Push code to GitHub
# 2. Connect GitHub to Netlify
# 3. Deploy with `netlify.toml` configuration
```

### Option 2: Vercel
```bash
# 1. Push code to GitHub
# 2. Connect GitHub to Vercel
# 3. Deploy automatically
```

### Option 3: Manual Hosting
```bash
# Upload all files to your web host
# Ensure .htaccess for URL rewriting (if needed)
```

## 📊 Performance Metrics

- **Page Load:** < 2 seconds
- **Mobile Responsive:** 320px - 2560px
- **Accessibility:** WCAG 2.1 Level AA
- **SEO:** Optimized metadata, semantic HTML

## 🔒 Security

- No backend dependencies (static site)
- Client-side form validation
- Secure social media links
- HTTPS recommended for deployment

## 📝 Contact Information

**Mash Edits Studio**
- 📍 Nyeri, Kenya
- 📞 +254 (0) 712 345 678
- 📧 hello@mashedits.co.ke
- 💬 WhatsApp: [Chat with us](https://wa.me/254712345678)
- 📱 Instagram: [@mashedits](https://instagram.com/mashedits)
- 👍 Facebook: [Mash Edits](https://facebook.com/mashedits)
- 🎵 TikTok: [@mashedits](https://tiktok.com/@mashedits)
- 📺 YouTube: [@mashedits](https://youtube.com/@mashedits)

## 📄 License

MIT License - Feel free to use, modify, and distribute this portfolio template.

## 🙏 Credits

- **Design & Development:** Professional Portfolio Team
- **Brand:** Mash Edits Studio
- **Icons:** Font Awesome 6.4.0
- **Fonts:** Google Fonts, System fonts

## 🚦 Browser Support

| Browser | Support |
|---------|--------|
| Chrome  | ✅ Latest 2 versions |
| Firefox | ✅ Latest 2 versions |
| Safari  | ✅ Latest 2 versions |
| Edge    | ✅ Latest 2 versions |
| Mobile  | ✅ iOS 12+, Android 8+ |

## 📞 Support & Maintenance

For website updates or issues:
1. Review the code structure
2. Check browser console for errors
3. Ensure images are properly sized
4. Verify contact form configuration
5. Test on multiple devices

## 🎯 Future Enhancements

- [ ] Video gallery integration
- [ ] Online booking system
- [ ] Client testimonial submissions
- [ ] Blog/News section
- [ ] Multi-language support
- [ ] Google Analytics integration
- [ ] Email notification system
- [ ] Social media feed integration

---

**Made with ❤️ for Mash Edits Studio**  
*Capturing Kenya's Moments, One Frame at a Time*
