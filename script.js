
document.addEventListener("DOMContentLoaded", function () {
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
});


window.addEventListener('scroll', function () {
  const body = document.body;
  if (window.scrollY > 50) {
    body.classList.add('scrolled');
  } else {
    body.classList.remove('scrolled');
  }
});


document.getElementById('project-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const contact = document.getElementById('contact').value;
  const serviceType = document.getElementById('service-type').value;
  const budget = document.getElementById('budget').value;
  const projectDetails = document.getElementById('project-details').value;

  const whatsappMessage = `*Project Details*\n\n*Your Name:* ${name}\n*Contact:* ${contact}\n*Service Type:* ${serviceType}\n*Budget:* ${budget}\n*Project Details:* ${projectDetails}`;
  const whatsappNumber = '254799590711';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappLink, '_blank');

  this.reset();
});

.