function renderDSNV(dsnv) {
  var htmls = "";
  for (var i = 0; i < dsnv.length; i++) {
    var targetNV = dsnv[i];
    htmls += `
    <tr>
        <th>${targetNV.taiKhoan}</th>
        <th>${targetNV.hoTen}</th>
        <th>${targetNV.email}</th>
        <th>${targetNV.ngayLam}</th>
        <th>${targetNV.chucVu}</th>
        <th>${targetNV.tongLuong()}</th>
        <th>${targetNV.xepLoai()}</th>
        <th>
        <button class="btn btn-success" data-toggle="modal"
        data-target="#myModal" onclick="capNhatNV('${
          targetNV.taiKhoan
        }')">Cập nhật</button>
        <button class="btn btn-danger" onclick="xoaNV('${
          targetNV.taiKhoan
        }')">Xoá</button>
        </th>
    </tr>
    `;
  }
  document.getElementById("tableDanhSach").innerHTML = htmls;
}

function clearFields() {
  document.getElementById("tknv").value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("datepicker").value = "";
  document.getElementById("luongCB").value = "";
  document.getElementById("chucVu").value = "";
  document.getElementById("gioLam").value = "";
}

function clearErrors() {
  document.getElementById("tbTKNV").style.display = "none";
  document.getElementById("tbTKNV").innerHTML = "";
  document.getElementById("tbTen").style.display = "none";
  document.getElementById("tbTen").innerHTML = "";
  document.getElementById("tbEmail").style.display = "none";
  document.getElementById("tbEmail").innerHTML = "";
  document.getElementById("tbMatKhau").style.display = "none";
  document.getElementById("tbMatKhau").innerHTML = "";
  document.getElementById("tbNgay").style.display = "none";
  document.getElementById("tbNgay").innerHTML = "";
  document.getElementById("tbLuongCB").style.display = "none";
  document.getElementById("tbLuongCB").innerHTML = "";
  document.getElementById("tbChucVu").style.display = "none";
  document.getElementById("tbChucVu").innerHTML = "";
  document.getElementById("tbGioLam").style.display = "none";
  document.getElementById("tbGioLam").innerHTML = "";
}
