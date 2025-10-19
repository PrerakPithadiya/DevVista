// Portfolio JavaScript
function toggleMode() {
  document.body.classList.toggle("dark");
  const btn = document.querySelector(".toggle-btn");
  btn.textContent = document.body.classList.contains("dark") ? "☀ Light Mode" : "🌙 Dark Mode";
}

// Initialize dark mode toggle on page load
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.querySelector('.toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleMode);
  }
});
