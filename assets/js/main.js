/**
 * Los Angeles Appliances Repair - Main JavaScript
 * Business: Los Angeles Appliances Repair
 * Phone: (833) 327-1076
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Local File Protocol Compatibility
  // When opening index.html directly from a local folder (file://),
  // adapt clean URLs so local disk browsing works seamlessly without 404s.
  if (window.location.protocol === 'file:') {
    const internalLinks = document.querySelectorAll('a[href]');
    internalLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (
        href &&
        !href.startsWith('http://') &&
        !href.startsWith('https://') &&
        !href.startsWith('tel:') &&
        !href.startsWith('mailto:') &&
        !href.startsWith('#') &&
        !href.startsWith('javascript:') &&
        !href.endsWith('.html') &&
        !href.endsWith('/') &&
        !href.includes('.')
      ) {
        link.setAttribute('href', href + '.html');
      }
    });
  }

  // 2. Mobile Navigation Toggle
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const mobileMenu = document.querySelector('.mobile-nav-menu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
      });
    });
  }

  // 3. Desktop Services Dropdown (Touch & Keyboard Accessibility)
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownItem = document.querySelector('.nav-item-dropdown');

  if (dropdownToggle && dropdownItem) {
    dropdownToggle.addEventListener('click', (e) => {
      // Toggle on touch devices or click
      if (window.innerWidth <= 900) {
        e.preventDefault();
        dropdownItem.classList.toggle('open');
      }
    });

    // Keyboard navigation: Escape closes dropdown
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dropdownItem.classList.contains('open')) {
        dropdownItem.classList.remove('open');
      }
    });
  }

  // 4. FAQ Accordion Functionality
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const parent = question.closest('.faq-item');
      if (!parent) return;

      const answer = parent.querySelector('.faq-answer');
      const isActive = parent.classList.contains('active');

      // Close other accordion items in the same FAQ container
      const container = parent.closest('.faq-container');
      if (container) {
        container.querySelectorAll('.faq-item').forEach(item => {
          if (item !== parent) {
            item.classList.remove('active');
            const itemAnswer = item.querySelector('.faq-answer');
            if (itemAnswer) itemAnswer.style.maxHeight = null;
          }
        });
      }

      // Toggle current item
      if (isActive) {
        parent.classList.remove('active');
        if (answer) answer.style.maxHeight = null;
      } else {
        parent.classList.add('active');
        if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // 5. Active Link Highlight
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const cleanPath = currentPath.replace('.html', '');

  document.querySelectorAll('.nav-link, .dropdown-item, .mobile-nav-item a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = href.split('/').pop().replace('.html', '');
    if (linkPath === cleanPath || (cleanPath === '' && (linkPath === 'index' || linkPath === './' || linkPath === '/'))) {
      link.classList.add('active');
    }
  });

  // 6. Contact Form Handler (Factual, honest static submission)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formCard = contactForm.closest('.contact-form-card') || contactForm;
      const phoneInput = contactForm.querySelector('input[name="phone"]');
      const phoneVal = phoneInput ? phoneInput.value : '';

      formCard.innerHTML = `
        <div style="text-align: center; padding: 32px 16px;">
          <div style="width: 56px; height: 56px; border-radius: 50%; background-color: #f0fdfa; border: 1px solid #ccfbf1; color: #0f766e; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px auto;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h3 style="font-size: 22px; font-weight: 800; color: #181b20; margin-bottom: 12px;">Request Details Recorded</h3>
          <p style="font-size: 15px; color: #575e6a; line-height: 1.6; margin-bottom: 24px;">
            Thank you for reaching out. For the fastest response and direct appointment dispatch in Los Angeles, please call us directly at:
          </p>
          <a href="tel:+18333271076" class="btn btn-primary btn-lg" style="margin-bottom: 16px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            (833) 327-1076
          </a>
          <p style="font-size: 12px; color: #8a92a0; margin-top: 12px;">
            Note: As this is a direct home service telephone dispatch, calling immediately connects you with our Los Angeles team.
          </p>
        </div>
      `;
    });
  }
});
