================================================================================
LOS ANGELES APPLIANCES REPAIR - STATIC WEBSITE PACKAGE
Domain: https://losangelesappliancesrepair.online
Direct Service Phone: (833) 327-1076
================================================================================

PROJECT OVERVIEW:
This is a complete, premium, modern, conversion-optimized home appliance
repair service website designed specifically for Los Angeles, California.

ARCHITECTURE:
- 100% Pure Static Website: HTML5, CSS3, Vanilla JavaScript
- No build process, no React, no Vite, no TypeScript, no node_modules, no npm dependencies required.
- Works offline/locally out-of-the-box upon ZIP extraction.
- Fully compatible with Apache / Hostinger hosting with Clean URLs (.htaccess included).

================================================================================
FOLDER STRUCTURE
================================================================================

├── index.html                   (Homepage)
├── about.html                   (Company & service approach)
├── services.html                (All services overview)
├── service-areas.html           (Los Angeles regional coverage)
├── faq.html                     (Frequently asked questions)
├── contact.html                 (Contact and dispatch information)
├── refrigerator-repair.html     (Dedicated refrigerator service)
├── dishwasher-repair.html       (Dedicated dishwasher service)
├── washer-repair.html           (Dedicated washer service)
├── dryer-repair.html            (Dedicated dryer service)
├── oven-repair.html             (Dedicated oven service)
├── stove-repair.html            (Dedicated stove service)
├── range-repair.html            (Dedicated kitchen range service)
├── freezer-repair.html          (Dedicated freezer service)
├── sitemap.xml                  (XML sitemap with clean URLs)
├── robots.txt                   (Search engine crawler directives)
├── .htaccess                    (Apache clean URL rewriting for Hostinger)
├── README.txt                   (This documentation file)
│
└── assets/
    ├── css/
    │   └── style.css            (Master styling with CSS variables & responsive layout)
    ├── js/
    │   └── main.js              (Vanilla JS: mobile menu, dropdown, accordions, local links)
    └── images/
        ├── logo/                (logo.png, footer-logo.png)
        ├── favicon/             (favicon.png)
        ├── home/                (Hero & promotional photography)
        ├── services/            (Category-specific appliance photos)
        ├── about/               (Service technician workspace photography)
        ├── contact/             (Dispatch & customer service photo)
        └── service-areas/       (Los Angeles service area photo)

================================================================================
HOW TO PREVIEW LOCALLY
================================================================================

Option 1: Direct File Opening
1. Simply extract the ZIP file to your computer.
2. Double-click "index.html" (or open with Chrome, Safari, Edge, or Firefox).
3. The website loads immediately with full CSS styles, images, and working
   interactive features (JavaScript automatically handles clean links on file://).

Option 2: Using Any Local Server (Optional)
If you prefer a local HTTP server:
- Python 3: Run `python3 -m http.server 8080` in the directory, then visit http://localhost:8080
- VS Code: Right-click `index.html` and choose "Open with Live Server".

================================================================================
HOW TO UPLOAD TO HOSTINGER / APACHE
================================================================================

1. Log into your Hostinger hPanel (or cPanel).
2. Go to "File Manager" -> navigate to `public_html/`.
3. Upload all files from the website root directly into `public_html/`:
   - index.html, about.html, services.html, etc.
   - .htaccess (IMPORTANT: Ensure hidden files/dotfiles are visible and uploaded)
   - robots.txt and sitemap.xml
   - The entire `assets/` folder with its subfolders (`css/`, `js/`, `images/`)
4. Verify your domain:
   - https://losangelesappliancesrepair.online/ -> Loads homepage
   - https://losangelesappliancesrepair.online/about -> Loads about page with clean URL
   - https://losangelesappliancesrepair.online/refrigerator-repair -> Loads refrigerator repair
5. Keep the assets folder structure unchanged to maintain relative path links.
6. The included `.htaccess` file takes care of removing .html extensions,
   redirecting any direct .html requests to clean URLs, and setting security headers.
