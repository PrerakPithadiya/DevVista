// Product Cards JavaScript
function toggleHeart(btn) {
  btn.classList.toggle('active');
  btn.textContent = btn.classList.contains('active') ? '❤' : '♡';
}

// Initialize product cards on page load
document.addEventListener('DOMContentLoaded', function() {
  // Add event listeners to all heart buttons
  const heartButtons = document.querySelectorAll('.icon-btn[onclick*="toggleHeart"]');
  heartButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      toggleHeart(this);
    });
  });
});
