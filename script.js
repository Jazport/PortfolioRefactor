// CONTACT FORM
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (form && formMessage) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const message = form.elements["message"].value.trim();

    // Reset message
    formMessage.textContent = "";
    formMessage.style.color = "#d32f2f";

    // Validation
    if (!name) {
      formMessage.textContent = "Please enter your name.";
      return;
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      formMessage.textContent = "Please enter a valid email address.";
      return;
    }

    if (!message) {
      formMessage.textContent = "Please enter a message.";
      return;
    }

    // SUCCESS MESSAGE
    formMessage.style.color = "green";
    formMessage.textContent =
      "Thank you! Your message has been sent successfully.";

    // Reset form AFTER message appears
    form.reset();

    // clear message after 5 seconds
    setTimeout(() => {
      formMessage.textContent = "";
    }, 5000);
  });
}

// MOBILE NAV
const toggle = document.querySelector(".nav__toggle");
const navList = document.querySelector(".nav__list");

if (toggle && navList) {
  toggle.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

// SCROLL BUTTON
const scrollBtn = document.querySelector(".scroll-btn");
const targetSection = document.querySelector("#about");

if (scrollBtn && targetSection) {
  scrollBtn.addEventListener("click", () => {
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
