# 🚀 Mash Edits Portfolio - Setup & Deployment Guide

## Quick Start (5 Minutes)

### 1. Local Development

**Windows (PowerShell):**
```powershell
cd mash-edits-portfolio
python -m http.server 8000
# Open http://localhost:8000
```

**Mac/Linux:**
```bash
cd mash-edits-portfolio
python3 -m http.server 8000
# Open http://localhost:8000
```

### 2. Customize Before Deployment

Edit these files with your information:

**`index.html` - Main content changes:**
- Line 8: `<title>` - Website title
- Line 9: `<meta name="description">` - SEO description
- Line 45-53: Navigation contact info (phone, email)
- Line 197: Contact form email (`hello@mashedits.co.ke`)
- All text content throughout

**`assets/css/style.css` - Brand colors:**
```css
:root {
    --accent-gold: #d4af37;  /* Change to #ff0000 for red, #0066ff for blue, etc. */
}
```

**`assets/images/` - Replace with actual photos:**
- Delete placeholder images
- Add your photography samples
- Optimize images (800x800px for portfolio, 1920x1080px for hero)

## Image Optimization Tips

### File Sizes
- **Hero images:** ~500KB each (1920x1080px)
- **Portfolio items:** ~200KB each (800x800px)
- **About image:** ~400KB (600x600px)

### Tools
- **Online:** TinyPNG, ImageOptim, Squoosh
- **Command Line:** `ffmpeg`, `ImageMagick`

### Format Selection
- Use JPEG for photographs
- Use PNG for transparent images
- Consider WebP for better compression

## Deployment Options

### ✅ Option 1: Netlify (Free, Recommended)

1. **Sign up:** Visit [netlify.com](https://www.netlify.com)
2. **Connect GitHub:**
   - Push code to GitHub
   - Click "New site from Git"
   - Select GitHub repository
3. **Auto-deploy:**
   - Every push to main branch deploys automatically
   - Custom domain support
   - Free SSL certificate

**Deploy in 5 minutes:**
```bash
# 1. Push to GitHub
git add .
git commit -m "Initial portfolio"
git push origin main

# 2. Go to netlify.com → Connect repo
# 3. Done! Your site is live
```

### ✅ Option 2: Vercel (Free)

1. **Sign up:** Visit [vercel.com](https://www.vercel.com)
2. **Import project:**
   - Connect GitHub account
   - Select repository
   - Click Deploy
3. **Custom domain:**
   - Project Settings → Domains
   - Add your domain

### ✅ Option 3: GitHub Pages (Free)

1. **Rename repository** to: `yourusername.github.io`
2. **Push to GitHub:**
   ```bash
   git push origin main
   ```
3. **Visit:** `https://yourusername.github.io`

### ✅ Option 4: Traditional Web Host

If using cPanel, Hostinger, etc.:
1. Upload all files via FTP
2. Ensure `index.html` is in root directory
3. Set file permissions to 644 (files) and 755 (folders)

## Domain Setup

### Point Domain to Netlify/Vercel

1. **Get DNS records** from your hosting provider
2. **Update domain registrar** (GoDaddy, Namecheap, etc.):
   - Go to DNS settings
   - Add nameservers OR A records
   - Wait 24-48 hours for propagation

### Example (Netlify):
```
Nameserver 1: dns1.p01.nsone.net
Nameserver 2: dns2.p01.nsone.net
Nameserver 3: dns3.p01.nsone.net
Nameserver 4: dns4.p01.nsone.net
```

## Security Checklist

- [ ] Enable HTTPS (automatic on Netlify/Vercel)
- [ ] Update contact email address
- [ ] Remove any placeholder phone numbers
- [ ] Test contact form
- [ ] Check all social media links
- [ ] Verify on mobile devices

## Performance Optimization

### Image Optimization
```bash
# Using ImageMagick
convert input.jpg -quality 85 -resize 800x800 output.jpg

# Using ImageOptim (Mac)
open -a ImageOptim assets/images/
```

### Check Performance
- **Google PageSpeed:** https://pagespeed.web.dev/
- **GTmetrix:** https://gtmetrix.com/
- **WebPageTest:** https://www.webpagetest.org/

## SEO Setup

### Edit Meta Tags (index.html)
```html
<title>Your Exact Business Name | Photography & Videography Kenya</title>
<meta name="description" content="Professional photography & videography in Nyeri, Kenya. Weddings, events, drone coverage, product shoots.">
<meta name="keywords" content="photography, videography, Nyeri, Kenya, weddings, events">
```

### Add Google Analytics

1. **Create account:** https://analytics.google.com/
2. **Add tracking ID to HTML:**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Contact Form Setup

### Option A: Email (Current)
Form uses mailto: fallback (requires user email client)

### Option B: Formspree (Recommended)

1. **Sign up:** https://formspree.io/
2. **Update form action:**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- form fields -->
</form>
```

### Option C: GetForm

1. **Create endpoint:** https://getform.io/
2. **Update form action:**
```html
<form action="https://getform.io/f/YOUR_ENDPOINT" method="POST">
  <!-- form fields -->
</form>
```

## Mobile Testing

### Test on Different Devices
- iPhone (6s, 12, 13)
- Android (various screen sizes)
- Tablets (iPad, Android tablets)

### Chrome DevTools
```
1. Right-click → Inspect
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test all breakpoints
```

## Analytics & Tracking

### Monitor Performance
- Setup Google Analytics
- Track portfolio clicks
- Monitor contact form submissions
- Check mobile vs desktop traffic

## Troubleshooting

### Issue: Images not showing
- **Check:** Image file paths in HTML
- **Solution:** Use `assets/images/filename.jpg`

### Issue: Styles not loading
- **Check:** CSS file path (must be `assets/css/style.css`)
- **Solution:** Clear browser cache (Ctrl+Shift+Del)

### Issue: JavaScript not working
- **Check:** Console for errors (F12)
- **Solution:** Verify `assets/js/script.js` is linked

### Issue: Form not submitting
- **Check:** Browser console for errors
- **Solution:** Ensure all required fields are filled

## Maintenance Schedule

**Weekly:**
- Monitor contact form submissions
- Check website performance

**Monthly:**
- Update portfolio with new work
- Review analytics
- Check for broken links

**Quarterly:**
- Update testimonials
- Refresh content
- Check SEO rankings

## Support Resources

- **Netlify Docs:** https://docs.netlify.com/
- **Vercel Docs:** https://vercel.com/docs
- **MDN Web Docs:** https://developer.mozilla.org/
- **Can I Use:** https://caniuse.com/

---

**Questions? Contact support or visit the repository issues.**
