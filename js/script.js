console.log("Hello World");

const waitlistForm = document.getElementById("waitlistForm");
const ctaWaitlistForm = document.getElementById("cta-waitlistForm");
const navWaitlistBtn = document.getElementById("nav-waitlistBtn");

const ctaWaitlistInput = document.querySelector(".cta-waitlist-input");
const waitlistFormInput = document.querySelector(".waitlist-input");

// Testing
console.log(waitlistForm);
console.log(ctaWaitlistForm);
console.log(navWaitlistBtn);

// Event Listeners
if (waitlistForm)
  waitlistForm.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Hero section waitlist button was clicked");
    if (!waitlistFormInput.value) {
      console.log("No Input was entered");
    }
  });

if (ctaWaitlistForm)
  ctaWaitlistForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Cta section waitlist button was clicked");
  });

if (navWaitlistBtn)
  navWaitlistBtn.addEventListener("click", () => {
    console.log("Sending you to the form to join the waitlist please wait...");
  });

ctaWaitlistInput.addEventListener("input", () => {
  console.log(ctaWaitlistInput.value);
});

waitlistFormInput.addEventListener("input", () => {
  console.log(waitlistFormInput.value);
});
