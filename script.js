document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Thank you for contacting Avodal Technology! We will get back to you soon.');
});

const backToTopButton = document.getElementById('backToTop');

window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = "block"; // Show the button
  } else {
    backToTopButton.style.display = "none"; // Hide the button
  }
};


// When the user clicks on the button, scroll to the top of the document
backToTopButton.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scroll effect
  });
});


window.addEventListener('scroll', function () {
  const body = document.body;
  if (window.scrollY > 50) { // Adjust the number as needed for the scroll trigger
    body.classList.add('scrolled');
  } else {
    body.classList.remove('scrolled');
  }
});

