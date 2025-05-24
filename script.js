// Xử lý form liên hệ
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Cảm ơn bạn đã liên hệ với HomeCake! Chúng tôi sẽ phản hồi sớm.');
        form.reset();
      });
    }
  });
  //Banner
  document.addEventListener("DOMContentLoaded", function () {
  let index = 0;
  const slides = document.querySelectorAll(".slide");

  function showNextSlide() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }

  setInterval(showNextSlide, 2000); // 2 giây
});
