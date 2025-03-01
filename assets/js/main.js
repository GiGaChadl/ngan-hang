// Trang login

let element = sessionStorage.getItem("key", "false");

function logins() {
  let username = document.getElementById("txt-username").value;
  let password = document.getElementById("txt-password").value;

  if (username === "admin" && password === "admin") {
    sessionStorage.setItem("key", "true");
    window.location.href = "./mapin.html";
  } else {
    sessionStorage.setItem("key", "false");
    let hid = document.getElementsByClassName("hidden")[0];
    hid.classList.remove("hidden");
  }
}

function adminLoginfalse() {
  if (element !== "true") {
    window.location.href = "./index.html";
  }
}

function isAdminLoginOrNot() {
  if (element === "true") {
    window.location.href = "./mapin.html";
  }
}

// Trang mã pin

let truyCap = sessionStorage.getItem("giaTriPin");

function maPin() {
  let ma = document.getElementById("pin").value;
  if (ma === "1234") {
    sessionStorage.setItem("giaTriPin", "true");
    window.location.href = "./admin.html";
  } else {
    sessionStorage.setItem("giaTriPin", "false");
    let hidd = document.getElementsByClassName("giau-ma")[0];
    hidd.classList.remove("giau-ma");
  }
}

function logOut() {
  sessionStorage.removeItem("key");
  sessionStorage.removeItem("giaTriPin");
  window.location.href = "./index.html";
}

function adminLoginPinfalse() {
  if (truyCap !== "true") {
    window.location.href = "./mapin.html";
  }
}

function isAdminLoginPinOrNot() {
  if (truyCap === "true") {
    window.location.href = "./admin.html";
  }
}

// Trang admin
let soDu = localStorage.getItem("sD");

if (soDu === null) {
  soDu = 0;
} else {
  soDu = Number(soDu);
}
document.getElementById("sodu").innerHTML = soDu;

function napTien() {
  let tienNap = Number(document.getElementsByClassName("nap")[0].value);
  if (tienNap > 0) {
    soDu += tienNap;
    localStorage.setItem("sD", soDu);
    document.getElementById("sodu").innerHTML = soDu;
  }
}

let C = document.getElementsByClassName("giau-loi-chuyen")[0];
let R = document.getElementsByClassName("giau-loi-rut")[0];

function chuyenTien() {
  let Chuyen = Number(document.getElementsByClassName("chuyen")[0].value);
  if (soDu >= Chuyen) {
    soDu -= Chuyen;
    localStorage.setItem("sD", soDu);
    document.getElementById("sodu").innerHTML = soDu;
    C.classList.add("giau-loi-chuyen");
  } else {
    C.classList.remove("giau-loi-chuyen");
    document.getElementsByClassName("giau-chuyen")[0].innerHTML =
      "Số dư không đủ";
  }
}

function rutTien() {
  let Rut = Number(document.getElementsByClassName("rut")[0].value);
  if (soDu >= Rut) {
    soDu -= Rut;
    localStorage.setItem("sD", soDu);
    document.getElementById("sodu").innerHTML = soDu;
    R.classList.add("giau-loi-rut");
  } else {
    R.classList.remove("giau-loi-rut");
    document.getElementsByClassName("giau-rut")[0].innerHTML = "Số dư không đủ";
  }
}
