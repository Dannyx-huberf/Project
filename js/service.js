document.addEventListener('DOMContentLoaded', function() {
  // ===== SERVICE FILTERING =====
  const filterButtons = document.querySelectorAll('.service-category');
  const serviceCards = document.querySelectorAll('.service-card');
  const gridContainer = document.querySelector('.grid-container');
  
  // Initialize Isotope for filtering
  let iso = new Isotope(gridContainer, {
    itemSelector: '.service-card',
    layoutMode: 'fitRows',
    stagger: 30,
    transitionDuration: '0.6s',
    hiddenStyle: {
      opacity: 0,
      transform: 'translateY(20px)'
    },
    visibleStyle: {
      opacity: 1,
      transform: 'translateY(0)'
    }
  });
  
  // Filter items on button click
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      this.classList.add('active');
      
      // Get filter value
      const filterValue = this.getAttribute('data-category');
      
      // Filter items
      if (filterValue === 'all') {
        iso.arrange({ filter: '*' });
      } else {
        iso.arrange({ filter: `[data-category="${filterValue}"]` });
      }
      
      // Animate items
      serviceCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.opacity = 0;
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
          }, 200);
        }
      });
    });
  });
  
  // ===== QUICK VIEW MODAL =====
  const quickViewBtns = document.querySelectorAll('.quick-view-btn');
  const modal = document.querySelector('.quick-view-modal');
  const closeModal = document.querySelector('.close-modal');
  const modalBody = document.querySelector('.modal-body');
  
  // Open modal with service details
  quickViewBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const card = this.closest('.service-card');
      const title = card.querySelector('h3').textContent;
      const desc = card.querySelector('.service-description').textContent;
      const price = card.querySelector('.price').textContent;
      const turnaround = card.querySelector('.turnaround').textContent;
      const imgSrc = card.querySelector('img').src;
      const imgAlt = card.querySelector('img').alt;
      
      // Populate modal
      modalBody.innerHTML = `
        <h2>${title}</h2>
        <img src="${imgSrc}" alt="${imgAlt}" class="modal-service-image">
        <p>${desc}</p>
        <div class="modal-meta">
          <p><strong>Price:</strong> ${price}</p>
          <p><strong>Turnaround:</strong> ${turnaround}</p>
        </div>
        <a href="contact.html" class="btn primary-btn modal-action-btn">Request Quote</a>
      `;
      // Show modal
      modal.classList.add('active');
    });
  });
  // Close modal
  closeModal.addEventListener('click', function() {
    modal.classList.remove('active');
  });  
  // Close modal on outside click
  modal.addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.remove('active');
    }
  }); 
  // Close modal on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
    }}
  )});   
