/* ==========================================================================
   TAP Academy Homepage Clone Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Responsive Navigation Drawer Toggle
  const menuToggleBtn = document.getElementById('menu-toggle-btn');
  const menuCloseBtn = document.getElementById('menu-close-btn');
  const mobileDrawer = document.getElementById('mobile-drawer-menu');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    if (mobileDrawer) mobileDrawer.classList.add('active');
  }

  function closeDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove('active');
  }

  if (menuToggleBtn) menuToggleBtn.addEventListener('click', openDrawer);
  if (menuCloseBtn) menuCloseBtn.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // 2. Interactive FAQ Accordion Grid Logic
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.closest('.faq-item');
      const answer = faqItem.querySelector('.faq-answer');
      
      // Close other active questions inside the same column (optional)
      const column = faqItem.closest('.faq-column');
      if (column) {
        column.querySelectorAll('.faq-item').forEach(item => {
          if (item !== faqItem && item.classList.contains('active')) {
            item.classList.remove('active');
            item.querySelector('.faq-answer').style.maxHeight = null;
          }
        });
      }

      // Toggle current question
      faqItem.classList.toggle('active');
      
      if (faqItem.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = null;
      }
    });
  });

  // 3. Hero AR-Classroom Language Switcher Tabs
  const langTabs = document.querySelectorAll('.lang-tab');
  const langPanels = document.querySelectorAll('.lang-panel');

  langTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = tab.getAttribute('data-lang');
      
      // Update tab highlights
      langTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Update panel displays
      langPanels.forEach(p => {
        p.style.display = 'none';
        p.classList.remove('active');
      });
      
      const targetPanel = document.getElementById(`panel-${lang}`);
      if (targetPanel) {
        targetPanel.style.display = 'block';
        targetPanel.classList.add('active');
      }
    });
  });

  // 4. Course Program Switcher Panel
  const courseBtns = document.querySelectorAll('.course-switcher-btn');
  const courseDetails = document.querySelectorAll('.course-detail-pane');

  courseBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const course = btn.getAttribute('data-course');
      
      // Update btn states
      courseBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Update details panels
      courseDetails.forEach(pane => {
        pane.style.display = 'none';
        pane.classList.remove('active');
      });
      
      const targetPane = document.getElementById(`details-${course}`);
      if (targetPane) {
        targetPane.style.display = 'block';
        targetPane.classList.add('active');
      }
    });
  });

  // 5. Simulated Booking Form Handler
  const bookingForm = document.getElementById('reg-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('student-name').value;
      const email = document.getElementById('student-email').value;
      const phone = document.getElementById('student-phone').value;
      const courseSelect = document.getElementById('student-course');
      const courseLabel = courseSelect.options[courseSelect.selectedIndex].text;
      
      alert(`🎉 Registration Received!\n\nDetails:\n- Name: ${name}\n- Email: ${email}\n- Phone: ${phone}\n- Course Selected: ${courseLabel}\n\nOur placement mentors will contact you shortly to schedule your career advisory session!`);
      bookingForm.reset();
    });
  }

  // 6. Partner Logos Endless Infinite Carousel Scroll Clone logic
  const scrollContainer = document.querySelector('.logo-scroll');
  if (scrollContainer) {
    const listHtml = scrollContainer.innerHTML;
    // Repeat to avoid visual gaps
    scrollContainer.innerHTML = listHtml + listHtml + listHtml;
    
    let scrollPos = 0;
    const speed = 1.0;
    
    function animateCarousel() {
      scrollPos += speed;
      if (scrollPos >= scrollContainer.scrollWidth / 3) {
        scrollPos = 0;
      }
      scrollContainer.style.transform = `translateX(-${scrollPos}px)`;
      requestAnimationFrame(animateCarousel);
    }
    
    animateCarousel();
  }

  // 7. Student Portal Login Logic (tab switching & visible password toggle)
  const tabPassBtn = document.getElementById('tab-pass-btn');
  const tabOtpBtn = document.getElementById('tab-otp-btn');
  const formPassFields = document.getElementById('form-pass-fields');
  const formOtpFields = document.getElementById('form-otp-fields');
  const passToggleEye = document.getElementById('pass-toggle-eye');
  const loginPassword = document.getElementById('login-password');
  const sendOtpBtn = document.getElementById('send-otp-btn');
  const otpEntryRow = document.getElementById('otp-entry-row');
  const studentLoginForm = document.getElementById('student-login-form');

  if (tabPassBtn && tabOtpBtn) {
    tabPassBtn.addEventListener('click', (e) => {
      e.preventDefault();
      tabPassBtn.classList.add('active');
      tabOtpBtn.classList.remove('active');
      formPassFields.classList.add('active');
      formOtpFields.classList.remove('active');
      
      const emailInput = document.getElementById('login-email');
      if (emailInput) emailInput.required = true;
      if (loginPassword) loginPassword.required = true;
      const phoneInput = document.getElementById('login-phone');
      if (phoneInput) phoneInput.required = false;
    });

    tabOtpBtn.addEventListener('click', (e) => {
      e.preventDefault();
      tabOtpBtn.classList.add('active');
      tabPassBtn.classList.remove('active');
      formOtpFields.classList.add('active');
      formPassFields.classList.remove('active');
      
      const emailInput = document.getElementById('login-email');
      if (emailInput) emailInput.required = false;
      if (loginPassword) loginPassword.required = false;
      const phoneInput = document.getElementById('login-phone');
      if (phoneInput) phoneInput.required = true;
    });
  }

  if (passToggleEye && loginPassword) {
    passToggleEye.addEventListener('click', () => {
      if (loginPassword.type === 'password') {
        loginPassword.type = 'text';
        passToggleEye.textContent = '🙈';
      } else {
        loginPassword.type = 'password';
        passToggleEye.textContent = '👁';
      }
    });
  }

  if (sendOtpBtn && otpEntryRow) {
    sendOtpBtn.addEventListener('click', () => {
      const phoneInput = document.getElementById('login-phone').value;
      if (phoneInput.length === 10) {
        alert(`🔑 Mock Verification Code Sent!\nAn OTP has been successfully triggered to +91 ${phoneInput}. Enter 123456 to login.`);
        otpEntryRow.style.display = 'block';
        const otpInput = document.getElementById('login-otp');
        if (otpInput) otpInput.required = true;
        sendOtpBtn.textContent = 'Resend OTP';
      } else {
        alert('❌ Please enter a valid 10-digit mobile number first.');
      }
    });
  }

  if (studentLoginForm) {
    studentLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (tabPassBtn && tabPassBtn.classList.contains('active')) {
        const email = document.getElementById('login-email').value;
        alert(`🔓 Successfully Authenticated!\nWelcome back student ${email}.\nRedirecting you to your LMS Learning dashboard...`);
      } else {
        const otpInput = document.getElementById('login-otp').value;
        if (otpInput === '123456') {
          alert(`🔓 Successfully Authenticated!\nWelcome back via OTP.\nRedirecting you to your LMS Learning dashboard...`);
        } else {
          alert('❌ Invalid OTP! Please enter "123456" for demonstration access.');
        }
      }
    });
  }
  
});
