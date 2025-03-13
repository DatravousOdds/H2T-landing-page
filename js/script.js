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

const waitlistModal = document.querySelector(".waitlist-modal");
const modalOverlay = document.querySelector(".modal-overlay");

const ctaWaitlistInput = document.querySelector(".cta-waitlist-input");
const waitlistFormInput = document.querySelector(".waitlist-input");

const emailErrorModal = document.querySelector(".email-error-modal");
console.log("This is the email error modal", emailErrorModal);

// Event Listeners

navbarCloseBtn.addEventListener("click", () => {
  console.log("navbar click");
  navbarModalOverlay.classList.remove("modal-show");
  navbarModal.classList.remove("modal-show");
});

// Close modal
closeModalBtn.addEventListener("click", () => {
  waitlistModal.classList.remove("modal-show");
  modalOverlay.classList.remove("modal-show");
  document.body.classList.remove("no-scroll");
});

// navbar waitlist form submission
navbarWaitlistForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  const emailInput = this.querySelector('input[type="email"]');
  const email = emailInput.value.trim();

  if (!email) {
    // alert("Please enter your email address");

    emailInput.focus();
    return;
  }

  if (await window.submitToFirebase(email)) {
    // remove navbar modal
    navbarModal.classList.remove("modal-show");
    navbarModalOverlay.classList.remove("modal-show");

    // Show success modal
    modalOverlay.classList.add("modal-show");
    waitlistModal.classList.add("modal-show");
    document.body.classList.add("no-scroll");
  } else {
    alert("There was an error. Please try again.");
  }
});

// Here waitlist form
waitlistForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const emailInput = this.querySelector('input[type="email"]');
  const email = emailInput.value.trim();

  if (!email) {
    // alert("Please enter your email address");
    emailErrorModal.classList.add("active");
    emailInput.focus();

    // Remove class after 3 seconds
    setTimeout(() => {
      emailErrorModal.classList.remove("active");
    }, 3000);
    return;
  }
  if (await window.submitToFirebase(email)) {
    // Show success modal
    modalOverlay.classList.add("modal-show");
    waitlistModal.classList.add("modal-show");
    document.body.classList.add("no-scroll");
  } else {
    alert("There was an error. Please try again.");
  }
});

// CTA waitlist form
ctaWaitlistForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const emailInput = this.querySelector('input[type="email"]');
  const email = emailInput.value.trim();

  if (!email) {
    // alert("Please enter your email address");
    emailErrorModal.classList.add("active");
    emailInput.focus();

    // Remove class after 3 seconds
    setTimeout(() => {
      emailErrorModal.classList.remove("active");
    }, 3000);
    return;
  }

  if (await window.submitToFirebase(email)) {
    // Show success modal
    modalOverlay.classList.add("modal-show");
    waitlistModal.classList.add("modal-show");
    document.body.classList.add("no-scroll");
  } else {
    alert("There was an error. Please try again.");
  }
});

// navbar wishlist button
navWaitlistBtn.addEventListener("click", () => {
  console.log("click");
  navbarModalOverlay.classList.add("modal-show");
  navbarModal.classList.add("modal-show");
});

// document.addEventListener("DOMContentLoaded", function () {
//   // Only if initialize if we have parallax elements
//   const parallaxLayers = document.querySelectorAll(".parallax-layer");
//   if (parallaxLayers.length === 0) return;

//   function handleParallax() {
//     const scrollTop = window.pageYOffset;

//     const section = document.querySelector(".parallax-section");
//     if (!section) return;

//     const sectionTop = section.getBoundingClientRect().top + scrollTop;
//     const sectionHeight = section.offsetHeight;

//     if (
//       scrollTop + window.innerHeight > sectionTop &&
//       scrollTop < sectionTop + sectionHeight
//     ) {
//       const relativeScroll = scrollTop - sectionTop;

//       parallaxLayers.forEach((layer) => {
//         const speed = parseFloat(layer.getAttribute("data-speed") || 0);
//         const yOffset = relativeScroll * speed;
//         layer.style.transform = `translateY("${yOffset}px)`;
//       });
//     }
//   }

//   function debounce(func, wait = 10, immediate = true) {
//     let timeout;
//     return function () {
//       const context = this,
//         args = arguments;
//       const later = function () {
//         timeout = null;
//         if (!immediate) func.apply(context, args);
//       };
//       const callNow = immediate && !timeout;
//       clearTimeout(timeout);
//       timeout = setTimeout(later, wait);
//       if (callNow) func.apply(context, args);
//     };
//   }

//   // add scroll event listener
//   window.addEventListener("scroll", debounce(handleParallax));

//   // init call
//   handleParallax();
// });

// Scroll reveal functionality
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded, initializing reveal effect");
  // Elements to reveal (products and brands)
  const productCards = document.querySelectorAll(".product-card");
  const brandItems = document.querySelectorAll(".brand-item");
  const featureCards = document.querySelectorAll(".feature-card");

  // Add the reveal class to all elements we want to animate
  productCards.forEach((card) => {
    card.classList.add("reveal");
  });

  brandItems.forEach((item) => {
    item.classList.add("reveal");
  });

  featureCards.forEach((item) => {
    item.classList.add("reveal");
  });

  // Check if element is in viewport
  function isInViewport(element) {
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
      rect.bottom >= 0
    );
  }

  // Reveal elements that are in viewport
  function revealElements() {
    console.log("Running reveal check");
    console.log("Product cards found:", productCards.length);

    productCards.forEach((card) => {
      if (isInViewport(card)) {
        console.log("Product card in viewport");
        card.classList.add("show");
      }
    });

    brandItems.forEach((item) => {
      if (isInViewport(item)) {
        item.classList.add("show");
      }
    });

    featureCards.forEach((item) => {
      if (isInViewport(item)) {
        item.classList.add("show");
      }
    });
  }

  // Listen for scroll
  window.addEventListener("scroll", revealElements);

  // Initial check (in case elements are already in viewport)
  revealElements();
});

// small menu navigation
const navLinks = document.querySelectorAll(".nav-menu li");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

// when hamburger menu is clicked open
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

window.addEventListener("mousemove", function (e) {
  const floatImages = document.querySelectorAll(".float-img");
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
