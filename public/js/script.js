document.addEventListener("DOMContentLoaded", function () {
  // Waitlist forms
  const waitlistForm = document.getElementById("waitlistForm");
  const ctaWaitlistForm = document.getElementById("cta-waitlistForm");
  const navbarWaitlistForm = document.getElementById("navbar-waitlist-form");

  const closeModalBtn = document.querySelector(".close-modal");

  const navWaitlistBtn = document.getElementById("nav-waitlistBtn");
  const navbarCloseBtn = document.querySelector(".navbar-close-btn");
  const navbarWaitlistOverlay = document.querySelector(".navbar-modal-overlay");
  const navbarWaitlistModal = document.querySelector(".waitlist-navbar-modal");
  const navbarModalOverlay = document.querySelector(".navbar-modal-overlay");
  const navbarModal = document.querySelector(".waitlist-navbar-modal");

  // Hero waitlist modal
  const waitlistModal = document.querySelector(".waitlist-modal");
  const modalOverlay = document.querySelector(".modal-overlay");

  // Input Fields
  const ctaWaitlistInput = document.querySelector(".cta-waitlist-input");
  const waitlistFormInput = document.querySelector(".waitlist-input");

  // Error modals
  const emailErrorModal = document.querySelector(".email-error-modal");

  // Small menu navigation
  const navLinks = document.querySelectorAll(".nav-menu li");
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector(".nav-menu");

  // Elements to reveal (products and brands)
  const productCards = document.querySelectorAll(".product-card");
  const brandItems = document.querySelectorAll(".brand-item");
  const featureCards = document.querySelectorAll(".feature-card");

  // Helper Functions

  // Check if element is in viewport
  function isInViewport(element, offset = 0.85) {
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) *
          offset && rect.bottom >= 0
    );
  }
  // Debounce function to limit function calls
  function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function () {
      const context = this,
        args = arguments;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  // Show error message for email input
  function showEmailError(input) {
    emailErrorModal.classList.add("active");
    input.focus();

    setTimeout(() => {
      emailErrorModal.classList.remove("active");
    }, 2000);
  }
  // Show success modal after form submission
  function showSuccessModal() {
    modalOverlay.classList.add("modal-show");
    waitlistModal.classList.add("modal-show");
    document.body.classList.add("no-scroll");
  }
  // Reveal elements that are in viewport
  function revealElements() {
    const elementsToReveal = [...productCards, ...brandItems, ...featureCards];

    elementsToReveal.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add("show");
      }
    });
  }
  // Initialize animations
  function initializeAnimations() {
    // Add reveal class to elements we want to animate
    [...productCards, ...brandItems, ...featureCards].forEach((element) =>
      element.classList.add("reveal")
    );

    // Initial check for elements already in viewport
    revealElements();

    // Listen for scroll with debounce
    window.addEventListener("scroll", debounce(revealElements, 15));
  }
  // Update active navigation link based on scroll position
  function updateActiveNavLink() {
    const sections = document.querySelectorAll("section[id]");
    console.log("section id:", sections);
    const scrollPosition = window.scrollY + 100; // Adjust the offset as needed

    // Remove active class from all nav links
    const navLinks = document.querySelectorAll("nav a");
    console.log("nav links: ", navLinks);
    navLinks.forEach((link) => link.classList.remove("active"));

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");
      const navLink = document.querySelector(`nav a[href="#${sectionId}"]`);

      if (!navLink) return;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLink.classList.add("active");
      } else {
        navLink.classList.remove("active");
      }
    });
  }

  function scrollToSection(targetId) {
    const targetSection = document.querySelector(targetId);

    console.log("target section: ", targetSection);

    if (targetSection) {
      const headerOffset = 80;
      const targetPosition =
        targetSection.getBoundingClientRect().top +
        window.pageYOffset -
        headerOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  }

  // Event Listeners
  if (navbarCloseBtn) {
    navbarCloseBtn.addEventListener("click", () => {
      navbarModalOverlay.classList.remove("modal-show");
      navbarModal.classList.remove("modal-show");
    });
  }

  // Close modal
  if (closeModalBtn)
    closeModalBtn.addEventListener("click", () => {
      waitlistModal.classList.remove("modal-show");
      modalOverlay.classList.remove("modal-show");
      document.body.classList.remove("no-scroll");
    });

  // navbar waitlist form
  if (navbarWaitlistForm)
    navbarWaitlistForm.addEventListener("submit", async function (e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();

      if (!email) {
        showEmailError(emailInput);
        return;
      }

      if (await window.submitToFirebase(email)) {
        // remove navbar modal
        navbarModal.classList.remove("modal-show");
        navbarModalOverlay.classList.remove("modal-show");

        // Show success modal
        showSuccessModal();
        emailInput.value = "";
      } else {
        alert("There was an error. Please try again.");
      }
    });

  // Here waitlist form
  if (waitlistForm)
    waitlistForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();

      if (!email) {
        // show error modal
        showEmailError(emailInput);
        return;
      }
      if (await window.submitToFirebase(email)) {
        // Show success modal
        showSuccessModal();
        emailInput.value = "";
      } else {
        alert("There was an error. Please try again.");
      }
    });

  // CTA waitlist form
  if (ctaWaitlistForm)
    ctaWaitlistForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();

      if (!email) {
        showEmailError(emailInput);
        return;
      }

      if (await window.submitToFirebase(email)) {
        // Show success modal
        showSuccessModal();
        // Reset email field
        emailInput.value = "";
      } else {
        alert("There was an error. Please try again.");
      }
    });

  // navbar wishlist button
  if (navWaitlistBtn)
    navWaitlistBtn.addEventListener("click", () => {
      console.log("click");
      navbarModalOverlay.classList.add("modal-show");
      navbarModal.classList.add("modal-show");
    });

  // when hamburger menu is clicked open
  if (hamburgerMenu)
    hamburgerMenu.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

  // When nav link is clicked remove menu
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });

  // When menu is clicked outside
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !hamburgerMenu.contains(e.target)) {
      navMenu.classList.remove("active");
    }
  });

  initializeAnimations();

  // Smooth scrolling and active link highlighting
  window.addEventListener("scroll", debounce(updateActiveNavLink, 100));

  window.addEventListener("mousemove", function (e) {
    const floatImages = document.querySelectorAll(".float-img");
    if (floatImages.length === 0) return;

    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    floatImages.forEach(function (img, index) {
      const depth = (index + 1) * 0.05;
      const moveX = (mouseX - 0.5) * depth * 40;
      const moveY = (mouseY - 0.5) * depth * 40;

      img.style.transform = `translate(${moveX}px, ${moveY}px) 
                            translateY(${Math.sin(Date.now() / 1000) * 10}px)`;
    });
  });
});
