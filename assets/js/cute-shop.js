// CuTe Shop JavaScript
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartIcon() {
  document.getElementById('cart-count').innerText = cart.length;
}

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartIcon();
  updateCart();
  scrollToCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
  updateCartIcon();
}

function updateCart() {
  const itemsBox = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  itemsBox.innerHTML = '';
  let total = 0;

  if (cart.length === 0) {
    itemsBox.innerHTML = '<p class="text-center text-muted">Cart is empty.</p>';
  }

  cart.forEach((item, i) => {
    total += item.price;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
    <span>${item.name}</span>
    <div>
      ₹${item.price}
      <button class="remove-btn" onclick="removeItem(${i})">×</button>
    </div>
  `;
    itemsBox.appendChild(div);
  });

  totalEl.innerText = total;
}

function scrollToCart() {
  document.getElementById('cart-section').scrollIntoView({ behavior: 'smooth' });
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', function() {
  updateCart();
  updateCartIcon();
  
  // Add checkout form event listener
  document.querySelector('.checkout-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Order placed! Thank you for Shopping 💖");
    cart = [];
    localStorage.removeItem('cart');
    updateCart();
    updateCartIcon();
    this.reset();
  });
});
