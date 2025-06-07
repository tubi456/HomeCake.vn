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
//Phân trang sản phẩm
document.addEventListener("DOMContentLoaded", function () {
  const soSanPhamMoiTrang = 10; // Số sản phẩm mỗi trang
  const danhSachSanPham = document.querySelectorAll(".product-card"); // Lấy tất cả các thẻ sản phẩm
  const tongSoSanPham = danhSachSanPham.length; // Tổng số sản phẩm
  const tongSoTrang = Math.ceil(tongSoSanPham / soSanPhamMoiTrang); // Tính tổng số trang

  // Tạo vùng chứa nút phân trang
  const khuVucPhanTrang = document.createElement("div");
  khuVucPhanTrang.className = "pagination";
  document.querySelector(".banhsinhnhatmini, .banhtiramisu, .banhtrangmieng,.banhbonglantrungmuoi").appendChild(khuVucPhanTrang);

  // Hàm hiển thị sản phẩm theo trang
  function hienThiTrang(trang) {
    const batDau = (trang - 1) * soSanPhamMoiTrang;
    const ketThuc = batDau + soSanPhamMoiTrang;

    danhSachSanPham.forEach((sanPham, chiSo) => {
      sanPham.style.display = chiSo >= batDau && chiSo < ketThuc ? "block" : "none";
    });

    hienThiNutPhanTrang(trang);
  }

  // Hàm tạo các nút phân trang
  function hienThiNutPhanTrang(trangHienTai) {
    khuVucPhanTrang.innerHTML = ""; // Xóa các nút cũ

    for (let i = 1; i <= tongSoTrang; i++) {
      const nut = document.createElement("button");
      nut.textContent = i;
      nut.className = i === trangHienTai ? "active" : "";
      nut.addEventListener("click", () => hienThiTrang(i));
      khuVucPhanTrang.appendChild(nut);
    }
  }

  hienThiTrang(1); // Mặc định hiển thị trang đầu tiên khi tải trang
});

//Tăng giảm số lượng

  function increaseQuantity() {
    var qty = document.getElementById('quantity');
    qty.value = parseInt(qty.value) + 1;
  }

  function decreaseQuantity() {
    var qty = document.getElementById('quantity');
    if (parseInt(qty.value) > 1) {
      qty.value = parseInt(qty.value) - 1;
    }
  }

// Thêm vào giỏ hàng

document.getElementById("add-to-cart").addEventListener("click", function () {
  const name = document.querySelector("h1").innerText;
  const priceText = document.querySelector(".price strong").innerText.replace(/\D/g, "");
  const price = parseInt(priceText);
  const quantity = parseInt(document.getElementById("quantity").value);
const imageRelative = document.querySelector(".left img").getAttribute("src");
const image = new URL(imageRelative, window.location.href).pathname;



  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Kiểm tra xem sản phẩm đã có trong giỏ chưa
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ name, price, quantity, image });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("🎉 Sản phẩm đã được thêm vào giỏ hàng!");
  updateCartCount(); // cập nhật số lượng hiển thị trong giỏ
});

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = cart.reduce((sum, item) => sum + item.quantity, 0);
  const countElement = document.getElementById("cart-count");
  if (countElement) countElement.innerText = `(${total})`;
}

window.onload = updateCartCount;
//Ấn nút mua ngay ở trang chi tiết sản phẩm sẽ link đến trang thanh toán
  document.getElementById('buy-now').addEventListener('click', function () {
    // Chuyển hướng sang trang thanh toán (đặt đường dẫn đúng)
    window.location.href = '../thanhtoan.html';
  });


//click chuột
document.addEventListener("DOMContentLoaded", function () {
  const navItem = document.querySelector(".dropdown .nav-item");
  const dropdownMenu = document.querySelector(".dropdown .dropdown-content");

  navItem.addEventListener("click", function (e) {
    e.stopPropagation(); // Ngăn sự kiện lan ra ngoài
    dropdownMenu.classList.toggle("show");
  });

  // Ẩn menu nếu click ra ngoài
  document.addEventListener("click", function (e) {
    if (!dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.remove("show");
    }
  });
});


