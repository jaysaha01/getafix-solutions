function dropdownToggle(event) {
  if ($(window).width() < 992) {
    // check if window width is less than 992px (Bootstrap's mobile breakpoint)
    event.preventDefault(); // prevent the link from redirecting
    $(event.target).parent().find(".dropdown-menu").toggle(); // show/hide the dropdown menu
  }
}

// Read more code

const parentContainer = document.querySelectorAll(".read-more-container");
parentContainer.forEach((parentContainer) => {
  parentContainer.addEventListener("click", (event) => {
    const current = event.target;

    const isReadMoreBtn = current.className.includes("read-more-btn");

    if (!isReadMoreBtn) return;

    const currentText =
      event.target.parentNode.querySelector(".read-more-text");

    currentText.classList.toggle("read-more-text--show");

    current.textContent = current.textContent.includes("Read More")
      ? "Read Less..."
      : "Read More...";
  });
});

// click to open

function redirect() {
  window.location = "service.php";
}



document.getElementById('contactForm').addEventListener('submit', function(event) {
    var response = grecaptcha.getResponse();
    if (response.length === 0) {
        event.preventDefault(); // Prevent form submission
        document.getElementById('recaptchaError').innerHTML = 'Please complete the reCAPTCHA.';
    }
});