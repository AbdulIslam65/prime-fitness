const menuBtn = document.getElementById('menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});






/* Popup  */

  const popup = document.getElementById("universalPopup");
  const popupTitle = document.getElementById("popupTitle");
  const popupContent = document.getElementById("popupContent");
  const closePopup = document.getElementById("closePopup");

  // Popup show function
  function showPopup(title, content) {
    popupTitle.textContent = title;
    popupContent.innerHTML = content;
    popup.style.display = "flex";

    // Agar review stars aaye to unka function lagao
    if (title === "Leave a Review") {
      const stars = document.querySelectorAll("#popupContent .stars span");
      stars.forEach(star => {
        star.addEventListener("click", () => {
          const rating = star.getAttribute("data-star");
          stars.forEach(s => s.classList.remove("active"));
          for (let i = 0; i < rating; i++) {
            stars[i].classList.add("active");
          }
        });
      });
    }
  }

  // Shop Now buttons
  document.querySelectorAll(".shop-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      showPopup("Shop Now", `
        <p>Welcome to our shop! Choose your products and proceed to checkout.</p>
        <button>Go to Shop</button>
      `);
    });
  });

  // Book Now buttons
  document.querySelectorAll(".book-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      showPopup("Book Now", `
        <form>
          <input type="text" placeholder="Your Name" required><br><br>
          <input type="date" required><br><br>
          <button type="submit">Confirm Booking</button>
        </form>
      `);
    });
  });

  // Review link
  document.querySelector('a[href="#Review"]').addEventListener("click", (e) => {
    e.preventDefault();
    showPopup("Leave a Review", `
      <div class="stars">
        <span data-star="1">★</span>
        <span data-star="2">★</span>
        <span data-star="3">★</span>
        <span data-star="4">★</span>
        <span data-star="5">★</span>
      </div>
      <textarea placeholder="Write your feedback..." rows="4"></textarea>
      <button type="submit">Submit Review</button>
    `);
  });

  // Contact link
  document.querySelector('a[href="#ContactUs"]').addEventListener("click", (e) => {
    e.preventDefault();
    showPopup("Contact Us", `
      <p><strong>Phone:</strong> +92 300 1234567</p>
      <p><strong>Email:</strong> example@gmail.com</p>
      <p><strong>Facebook:</strong> <a href="https://facebook.com" target="_blank">Our Facebook Page</a></p>
    `);
  });

  // Close button
  closePopup.onclick = () => popup.style.display = "none";

  // Background click
  window.onclick = (e) => {
    if (e.target === popup) popup.style.display = "none";
  };







