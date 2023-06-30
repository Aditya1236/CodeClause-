var captchaChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// Generate a random CAPTCHA code
function generateCaptcha() {
  var captcha = "";
  for (var i = 0; i < 6; i++) {
    captcha += captchaChars.charAt(Math.floor(Math.random() * captchaChars.length));
  }
  return captcha;
}

// Refresh the CAPTCHA image and code
function refreshCaptcha() {
  var captchaImg = document.getElementById("captchaImg");
  var captcha = generateCaptcha();

  // Set the CAPTCHA image source (replace 'captcha.php' with your CAPTCHA generation script)
  captchaImg.src = "captcha.php?captcha=" + captcha;

  // Clear the previous CAPTCHA value
  document.getElementById("captcha").value = "";
}

// Validate the form
function validateForm(event) {
  event.preventDefault();

  // Get the user-entered CAPTCHA value
  var userCaptcha = document.getElementById("captcha").value;

  // Verify the CAPTCHA
  if (userCaptcha === "") {
    alert("Please enter the CAPTCHA code.");
  } else {
    // Perform your form submission logic here
    alert("Form submitted successfully!");
    document.getElementById("contactForm").reset();
    refreshCaptcha();
  }
}

// Generate the initial CAPTCHA code and image on page load
window.onload = function() {
  refreshCaptcha();
};