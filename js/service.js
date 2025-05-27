// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

  // ====== CATEGORY FILTERING ======
  const categoryButtons = document.querySelectorAll('.service-category');
  const serviceCards = document.querySelectorAll('.service-card');

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove 'active' class from all buttons
      categoryButtons.forEach(btn => btn.classList.remove('active'));

      // Add 'active' to the clicked button
      button.classList.add('active');

      const selectedCategory = button.getAttribute('data-category');

      serviceCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (selectedCategory === 'all' || cardCategory === selectedCategory) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ====== QUICK VIEW MODAL ======
  const quickViewButtons = document.querySelectorAll('.quick-view-btn');
  const modal = document.getElementById('quick-view-modal');
  const modalContent = modal.querySelector('.modal-content');
  const closeModal = modal.querySelector('.close-modal');

  quickViewButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();

      const card = button.closest('.service-card');

      const title = card.querySelector('h3').textContent;
      const description = card.querySelector('.service-description').textContent;
      const image = card.querySelector('img').src;

      // Populate modal
      modalContent.querySelector('h3').textContent = title;
      modalContent.querySelector('p').textContent = description;
      modalContent.querySelector('img').src = image;

      modal.style.display = 'flex';
    });
  });

  // Close modal on 'X' click
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal on outside click
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
