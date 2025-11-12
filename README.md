# Guiding Light Home Care LLC - Landing Page

A modern, responsive landing page for Guiding Light Home Care LLC, featuring beautiful animations, scroll effects, and high-quality diverse imagery.

## Features

### 🎨 Design
- Modern, clean, and professional design
- Fully responsive layout (mobile, tablet, desktop)
- High-quality diverse placeholder images from Unsplash
- Beautiful color scheme reflecting trust and warmth

### ✨ Animations
- Hero section with animated title reveal
- Animated statistics counter
- Smooth scroll animations using AOS (Animate On Scroll)
- Parallax effect on hero image
- Ken Burns effect on hero background
- Interactive hover effects on cards
- Custom cursor trail effect
- Scroll progress indicator
- Page entrance animations

### 📱 Sections
1. **Navigation** - Sticky navbar with smooth scrolling
2. **Hero Section** - Eye-catching animated hero with statistics
3. **Services** - 6 core services with hover effects
4. **About** - Company information with features
5. **Team** - Meet the caregivers section
6. **Testimonials** - Customer reviews with flip animations
7. **Contact** - Contact form and information
8. **Footer** - Complete footer with links

## Getting Started

### Option 1: Direct Browser Open
Simply open `index.html` in your web browser:
```bash
open index.html
```

### Option 2: Local Server (Recommended)
For the best experience, run a local server:

**Using Python:**
```bash
cd guiding-light-landing
python -m http.server 8000
```
Then visit: http://localhost:8000

**Using Node.js (http-server):**
```bash
npx http-server -p 8000
```

## File Structure
```
guiding-light-landing/
├── index.html          # Main HTML file
├── styles.css          # All styling and CSS animations
├── script.js           # JavaScript for interactions and animations
└── README.md           # This file
```

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2c5aa0;    /* Blue */
    --secondary-color: #f39c12;   /* Orange */
    --accent-color: #27ae60;      /* Green */
}
```

### Images
Replace the Unsplash URLs in `index.html` with your own images:
- Hero section image
- Service card images
- Team member photos
- Testimonial author photos
- About section image

### Content
All text content can be edited directly in `index.html`:
- Company information
- Service descriptions
- Team member details
- Testimonials
- Contact information

### Contact Information
Update these in `index.html`:
- Location: Anderson, SC 29621
- Phone: (864) 438-4626
- Email: info@guidinglighthcllc.com
- Website: www.guidinglighthcllc.com

## Libraries Used

- **AOS (Animate On Scroll)** - Scroll animations
- **Google Fonts** - Poppins and Playfair Display fonts
- **Unsplash** - High-quality placeholder images

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Features Detail

### Hero Section Animations
- Title lines fade in sequentially
- Subtitle appears after title
- Buttons slide in
- Statistics animate from 0 to target numbers
- Background image has Ken Burns zoom effect
- Parallax scrolling effect

### Scroll Animations
- Sections reveal as you scroll
- Service cards fade up with staggered delays
- Team cards zoom in
- Testimonials flip in
- About section has directional animations

### Interactive Elements
- Navbar changes on scroll
- Mobile responsive hamburger menu
- Smooth scroll to sections
- Hover effects on all cards
- Form validation
- Custom cursor trail (desktop only)
- Scroll progress bar at top

## Performance

- Optimized images loaded from CDN
- CSS animations using GPU acceleration
- Intersection Observer for efficient scroll detection
- Lazy loading for images
- Minimal JavaScript for fast load times

## Mobile Responsive

The site is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## Future Enhancements

Consider adding:
- Backend integration for contact form
- Google Maps integration
- Blog section
- Video testimonials
- Live chat functionality
- Multilingual support

## Contact

For questions or support regarding this website, please contact:
- **Email**: info@guidinglighthcllc.com
- **Phone**: (864) 438-4626
- **Website**: www.guidinglighthcllc.com
- **Location**: Anderson, SC 29621

---

Built with ❤️ for Guiding Light Home Care LLC

