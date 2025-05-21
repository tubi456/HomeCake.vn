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
  
