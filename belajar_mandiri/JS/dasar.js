function nama() {   

let nama = document.getElementById("nama").value;
document.getElementById("hasil.nama").innerHTML = "nama: " + nama;
}


function kelas() {

let kelas = document.getElementById("kelas").value;
document.getElementById("hasil.kelas").innerHTML = "kelas: " + kelas;
}

function jurusan() {

let jurusan = document.getElementById("jurusan").value;
document.getElementById("hasil.jurusan").innerHTML = "jurusan: " + jurusan;
}

alert("Selamat datang di website saya");
let usia = prompt("Masukkan usia Anda");
if (usia >= 18) {
    confirm("silahkan melanjutkan");
    } else {
    alert("Anda belum dewasa");

    window.location.href = "https://www.google.com";
 }
 


