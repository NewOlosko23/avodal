

document.getElementById("contactForm").addEventListener("submit", function (e) {
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  if (!email || !name || !message) {
    alert("All fields are required!");
    e.preventDefault();
  }
});


const backToTopButton = document.getElementById('backToTop');

window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};


backToTopButton.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


window.addEventListener('scroll', function () {
  const body = document.body;
  if (window.scrollY > 50) {
    body.classList.add('scrolled');
  } else {
    body.classList.remove('scrolled');
  }
});
