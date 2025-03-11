console.log("Hello World");

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
    alert("Please enter your email address");
    emailInput.focus();
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

// Here waitlist form
waitlistForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const emailInput = this.querySelector('input[type="email"]');
  const email = emailInput.value.trim();

  if (!email) {
    alert("Please enter your email address");
    emailInput.focus();
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
    alert("Please enter your email address");
    emailInput.focus();
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
