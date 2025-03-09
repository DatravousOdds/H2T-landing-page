console.log("Hello World");

const waitlistForm = document.getElementById("waitlistForm");
const ctaWaitlistForm = document.getElementById("cta-waitlistForm");
const navWaitlistBtn = document.getElementById("nav-waitlistBtn");
const closeModalBtn = document.querySelector(".close-modal");
const waitlistModal = document.querySelector(".waitlist-modal");
const modalOverlay = document.querySelector(".modal-overlay");
const navbarModalOverlay = document.querySelector(".navbar-modal-overlay");
const navbarModal = document.querySelector(".waitlist-navbar-modal");

const ctaWaitlistInput = document.querySelector(".cta-waitlist-input");
const waitlistFormInput = document.querySelector(".waitlist-input");

// Event Listeners

// Close modal
closeModalBtn.addEventListener("click", () => {
  waitlistModal.classList.remove("modal-show");
  modalOverlay.classList.remove("modal-show");
  document.body.classList.remove("no-scroll");
});

// Here waitlist form
waitlistForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = this.querySelector('input[type="email"]').value;
  console.log("Here is the email that was entered", email);

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

  const email = this.querySelector('input[type="email"]').value;
  console.log("Here is the email that was entered", email);

  if (await window.submitToFirebase(email)) {
    // Show success modal
    modalOverlay.classList.add("modal-show");
    waitlistModal.classList.add("modal-show");
    document.body.classList.add("no-scroll");
  } else {
    alert("There was an error. Please try again.");
  }
});

navWaitlistBtn.addEventListener("click", () => {
  console.log("click");
  navbarModalOverlay.classList.add("modal-display");
  navbarModal.classList.add("modal-show");
});
