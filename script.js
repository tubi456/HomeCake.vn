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
  document.querySelector(".banhsinhnhatmini, .banhtiramisu, .banhtrangmieng").appendChild(khuVucPhanTrang);

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

