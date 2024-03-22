// Smooth scroll to anchor links
const navLinks = document.querySelectorAll('a[href^="#"]');
for (const link of navLinks) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href');
  document.querySelector(targetId).scrollIntoView({
    behavior: 'smooth'
  });
}

// Add active class to the navigation link corresponding to the current section
window.addEventListener('scroll', highlightActiveLink);

function highlightActiveLink() {
  const sections = document.querySelectorAll('section');
  for (const section of sections) {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    if (window.pageYOffset >= top && window.pageYOffset < top + height) {
      const sectionId = section.getAttribute('id');
      const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
      removeActiveClass();
      activeLink.classList.add('active');
    }
  }
}

function removeActiveClass() {
  const activeLink = document.querySelector('.active');
  if (activeLink) {
    activeLink.classList.remove('active');
  }
}
