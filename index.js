// Scroll reveal animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }
);

document.querySelectorAll(".scroll-reveal").forEach((el) => {
  observer.observe(el);
});

// Add smooth interactions
document.querySelectorAll(".category-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});
// Scroll reveal animation

document.querySelectorAll(".scroll-reveal").forEach((el) => {
  observer.observe(el);
});

// Add smooth interactions
document.querySelectorAll(".category-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Contact form handling
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = new FormData(this);
  const data = Object.fromEntries(formData);
  
  // Show success message
  const submitBtn = this.querySelector('.submit-btn');
  const originalText = submitBtn.innerHTML;
  
  submitBtn.innerHTML = '✓ Message Sent!';
  submitBtn.style.background = '#4CAF50';
  submitBtn.disabled = true;
  
  // Reset form after 3 seconds
  setTimeout(() => {
    this.reset();
    submitBtn.innerHTML = originalText;
    submitBtn.style.background = '';
    submitBtn.disabled = false;
  }, 3000);
  
  // Here you would normally send the data to your server
  console.log('Form submitted:', data);
});

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add form field animations
document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(field => {
  field.addEventListener('focus', function() {
    this.parentElement.style.transform = 'translateY(-2px)';
  });
  
  field.addEventListener('blur', function() {
    this.parentElement.style.transform = 'translateY(0)';
  });
});