// script.js

// Smooth scrolling effect for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    for (const link of navLinks) {
      link.addEventListener('click', smoothScroll);
    }
  });
  
  function smoothScroll(event) {
    event.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }
  
  // Add dynamic project gallery
  document.addEventListener('DOMContentLoaded', function() {
    const projectItems = document.querySelectorAll('.project');
    
    for (const item of projectItems) {
      item.addEventListener('click', showProjectDetails);
    }
  });
  
  function showProjectDetails() {
    this.classList.toggle('active');
  }
  
  // Add form validation to the contact section
  document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact form');
    
    contactForm.addEventListener('submit', validateForm);
  });
  
  function validateForm(event) {
    event.preventDefault();
    
    const nameInput = document.querySelector('#contact input[name="name"]');
    const emailInput = document.querySelector('#contact input[name="email"]');
    const messageTextarea = document.querySelector('#contact textarea[name="message"]');
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageTextarea.value.trim();
    
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
    } else {
      // Code to submit the form or display success message
      alert('Form submitted successfully!');
      
      // Clear form fields
      nameInput.value = '';
      emailInput.value = '';
      messageTextarea.value = '';
    }
  }
  