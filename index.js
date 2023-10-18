var dsnv = [];

var dataJson = localStorage.getItem("DSNV_LOCAL");
if (dataJson != null) {
  var dsnv = JSON.parse(dataJson).map(
    (nvItem) =>
      new NhanVien(
        nvItem.taiKhoan,
        nvItem.hoTen,
        nvItem.email,
        nvItem.matKhau,
        nvItem.ngayLam,
        nvItem.luongCoBan,
        nvItem.chucVu,
        nvItem.gioLam
      )
  );
  renderDSNV(dsnv);
}

function themNV() {
  var taiKhoan = document.getElementById("tknv").value;
  var hoTen = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var matKhau = document.getElementById("password").value;
  var ngayLam = document.getElementById("datepicker").value;
  var luongCoBan = Number(document.getElementById("luongCB").value);
  var chucVu = document.getElementById("chucVu").value;
  var gioLam = Number(document.getElementById("gioLam").value);
  var nhanVienItem = new NhanVien(
    taiKhoan,
    hoTen,
    email,
    matKhau,
    ngayLam,
    luongCoBan,
    chucVu,
    gioLam
  );
  // validation
  // taiKhoan
  var isValid =
    ktRequired(taiKhoan, "tbTKNV") &&
    ktInputKiSo(taiKhoan) &&
    ktLength(taiKhoan, 4, 6, "tbTKNV") &&
    ktExist(taiKhoan, dsnv);
  // hoTen
  isValid &= ktRequired(hoTen, "tbTen") && ktTen(hoTen);
  // email
  isValid &= ktRequired(email, "tbEmail") && ktEmail(email);
  // matKhau
  isValid &=
    ktRequired(matKhau, "tbMatKhau") &&
    ktLength(matKhau, 6, 10, "tbMatKhau") &&
    ktMatKhau(matKhau);
  // ngayLam
  isValid &= ktRequired(ngayLam, "tbNgay") && ktNgay(ngayLam);
  // luongCoBan
  isValid &=
    ktRequired(luongCoBan, "tbLuongCB") &&
    ktRange(luongCoBan, 1000000, 20000000, "VND", "tbLuongCB");
  // chucVu
  isValid &= ktChucVu(chucVu);
  // gioLam
  isValid &=
    ktRequired(gioLam, "tbGioLam") &&
    ktRange(gioLam, 80, 200, "giờ", "tbGioLam");
  if (isValid) {
    dsnv.push(nhanVienItem);
    // save dsnv data in localStorage
    var dataJson = JSON.stringify(dsnv);
    localStorage.setItem("DSNV_LOCAL", dataJson);
    renderDSNV(dsnv);
    clearFields();
  }
}

function xoaNV(_taiKhoan) {
  var viTri = dsnv.findIndex((nvItem) => nvItem.taiKhoan === _taiKhoan);
  dsnv.splice(viTri, 1);
  // lưu thông tin vào localStorage
  var dataJson = JSON.stringify(dsnv);
  localStorage.setItem("DSNV_LOCAL", dataJson);
  renderDSNV(dsnv);
}

function capNhatNV(_taiKhoan) {
  document.getElementById("btnThemNV").disabled = true;
  document.getElementById("btnCapNhat").disabled = false;
  var viTri = dsnv.findIndex((nvItem) => nvItem.taiKhoan === _taiKhoan);
  var targetNV = dsnv[viTri];
  document.getElementById("tknv").readOnly = true;
  document.getElementById("tknv").value = targetNV.taiKhoan;
  document.getElementById("name").value = targetNV.hoTen;
  document.getElementById("email").value = targetNV.email;
  document.getElementById("password").value = targetNV.matKhau;
  document.getElementById("datepicker").value = targetNV.ngayLam;
  document.getElementById("luongCB").value = targetNV.luongCoBan;
  document.getElementById("chucVu").value = targetNV.chucVu;
  document.getElementById("gioLam").value = targetNV.gioLam;
}

function xacNhanCapNhatNV() {
  // tìm vị trí dựa vào taiKhoan => return viTri
  var taiKhoan = document.getElementById("tknv").value;
  var viTri = dsnv.findIndex((nvItem) => nvItem.taiKhoan === taiKhoan);
  // lấy thông tin user từ form dưới dạng object
  var hoTen = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var matKhau = document.getElementById("password").value;
  var ngayLam = document.getElementById("datepicker").value;
  var luongCoBan = Number(document.getElementById("luongCB").value);
  var chucVu = document.getElementById("chucVu").value;
  var gioLam = Number(document.getElementById("gioLam").value);
  targetNV = new NhanVien(
    taiKhoan,
    hoTen,
    email,
    matKhau,
    ngayLam,
    luongCoBan,
    chucVu,
    gioLam
  );
  // validation
  // hoTen
  var isValid = ktRequired(hoTen, "tbTen") && ktTen(hoTen);
  // email
  isValid &= ktRequired(email, "tbEmail") && ktEmail(email);
  // matKhau
  isValid &=
    ktRequired(matKhau, "tbMatKhau") &&
    ktLength(matKhau, 6, 10, "tbMatKhau") &&
    ktMatKhau(matKhau);
  // ngayLam
  isValid &= ktRequired(ngayLam, "tbNgay") && ktNgay(ngayLam);
  // luongCoBan
  isValid &=
    ktRequired(luongCoBan, "tbLuongCB") &&
    ktRange(luongCoBan, 1000000, 20000000, "VND", "tbLuongCB");
  // chucVu
  isValid &= ktChucVu(chucVu);
  // gioLam
  isValid &=
    ktRequired(gioLam, "tbGioLam") &&
    ktRange(gioLam, 80, 200, "giờ", "tbGioLam");
  // update dsnv[viTri]
  if (isValid) {
    dsnv[viTri] = targetNV;
    // save dsnv data in localStorage
    var dataJson = JSON.stringify(dsnv);
    localStorage.setItem("DSNV_LOCAL", dataJson);
    renderDSNV(dsnv);
    // close modal when update success
    $("#myModal").modal("hide");
    clearFields();
    document.getElementById("tknv").readOnly = false;
    document.getElementById("btnThemNV").disabled = false;
    document.getElementById("btnCapNhat").disabled = true;
  }
}

// delete input, error tip and enable/disable button when close modal by click button Đóng
function dongModal() {
  clearFields();
  clearErrors();
  document.getElementById("tknv").readOnly = false;
  document.getElementById("btnThemNV").disabled = false;
  document.getElementById("btnCapNhat").disabled = true;
}

function timNV() {
  var searchName = document.getElementById("searchName").value;
  var mangNVSearch = dsnv.filter(
    (nvItem) => nvItem.xepLoai().includes(searchName) === true
  );
  if (searchName !== "") {
    renderDSNV(mangNVSearch);
  } else renderDSNV(dsnv);
}
