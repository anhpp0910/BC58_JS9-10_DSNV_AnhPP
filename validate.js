function ktRequired(nvProp, theError) {
  if (nvProp != "") {
    document.getElementById(theError).style.display = "none";
    document.getElementById(theError).innerHTML = "";
    return true;
  }
  document.getElementById(theError).style.display = "block";
  document.getElementById(theError).innerHTML = "Nhập thông tin!";
  return false;
}

function ktInputKiSo(_taiKhoan) {
  const re = /^\d+$/;
  if (re.test(_taiKhoan)) {
    document.getElementById("tbTKNV").style.display = "none";
    document.getElementById("tbTKNV").innerHTML = "";
    return true;
  }
  document.getElementById("tbTKNV").style.display = "block";
  document.getElementById("tbTKNV").innerHTML = "Chỉ được nhập số!";
  return false;
}

function ktLength(nvProp, minLength, maxLength, theError) {
  if (nvProp.length >= minLength && nvProp.length <= maxLength) {
    document.getElementById(theError).style.display = "none";
    document.getElementById(theError).innerHTML = "";
    return true;
  }
  document.getElementById(theError).style.display = "block";
  document.getElementById(
    theError
  ).innerHTML = `Nhập từ ${minLength} đến ${maxLength} kí tự!`;
  return false;
}

function ktExist(_taiKhoan, dsnv) {
  var viTri = dsnv.findIndex((nvItem) => nvItem.taiKhoan === _taiKhoan);
  if (viTri === -1) {
    document.getElementById("tbTKNV").style.display = "none";
    document.getElementById("tbTKNV").innerHTML = "";
    return true;
  }
  document.getElementById("tbTKNV").style.display = "block";
  document.getElementById("tbTKNV").innerHTML =
    "Tài khoản nhân viên đã tồn tại!";
  return false;
}

function ktTen(_hoTen) {
  const re =
    /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\ ]+$/;
  if (re.test(_hoTen)) {
    document.getElementById("tbTen").style.display = "none";
    document.getElementById("tbTen").innerHTML = "";
    return true;
  }
  document.getElementById("tbTen").style.display = "block";
  document.getElementById("tbTen").innerHTML = "Họ và tên không hợp lệ!";
  return false;
}

function ktEmail(_email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(_email)) {
    document.getElementById("tbEmail").style.display = "none";
    document.getElementById("tbEmail").innerHTML = "";
    return true;
  }
  document.getElementById("tbEmail").style.display = "block";
  document.getElementById("tbEmail").innerHTML = "Email không hợp lệ!";
  return false;
}

function ktMatKhau(_matKhau) {
  const re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
  if (re.test(_matKhau)) {
    document.getElementById("tbMatKhau").style.display = "none";
    document.getElementById("tbMatKhau").innerHTML = "";
    return true;
  }
  document.getElementById("tbMatKhau").style.display = "block";
  document.getElementById("tbMatKhau").innerHTML =
    "Mật khẩu phải chứa ít nhất 1 kí tự số, 1 kí tự in hoa, 1 kí tự đặc biệt!";
  return false;
}

function ktNgay(_ngayLam) {
  const re =
    /^(?:(0[1-9]|1[012])[\/.](0[1-9]|[12][0-9]|3[01])[\/.](19|20)[0-9]{2})$/;
  if (re.test(_ngayLam)) {
    document.getElementById("tbNgay").style.display = "none";
    document.getElementById("tbNgay").innerHTML = "";
    return true;
  }
  document.getElementById("tbNgay").style.display = "block";
  document.getElementById("tbNgay").innerHTML =
    "Nhập sai định dạng MM/DD/YYYY!";
  return false;
}

function ktChucVu(_chucVu) {
  if (_chucVu != 0) {
    document.getElementById("tbChucVu").style.display = "none";
    document.getElementById("tbChucVu").innerHTML = "";
    return true;
  }
  document.getElementById("tbChucVu").style.display = "block";
  document.getElementById("tbChucVu").innerHTML = "Chọn chức vụ!";
  return false;
}

function ktRange(nvProp, minRange, maxRange, donVi, theError) {
  if (nvProp >= minRange && nvProp <= maxRange) {
    document.getElementById(theError).style.display = "none";
    document.getElementById(theError).innerHTML = "";
    return true;
  }
  document.getElementById(theError).style.display = "block";
  document.getElementById(
    theError
  ).innerHTML = `Nhập trong phạm vi ${minRange.toLocaleString()} - ${maxRange.toLocaleString()} ${donVi}!`;
  return false;
}
