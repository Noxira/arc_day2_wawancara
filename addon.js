var modal = document.getElementById("popupModal");

var btn = document.getElementById("cardButton");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
modal.style.display = "block";
  }

span.onclick = function() {
    modal.style.display = "none";
  }

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    }
  }

function nim16520295() {
    document.getElementById("nama-kartu").innerHTML = "Farrel Farandieka Fibriyanto";
    document.getElementById("status-kru").innerHTML = "Status: <br /> Cakru";
    document.getElementById("catatan-kru").innerHTML = "Catatan: <br /> - pembuat website ini <br /> - belom dapet kos karena dilepas lagi <br /> - Mau masuk IF <br /> - Has the same memory as a goldfish";
    document.getElementById("nim-kartu").innerHTML = "16520295";
}

function nim16520462() {
  document.getElementById("nama-kartu").innerHTML = "Muhammad Rakha Wiratama";
  document.getElementById("status-kru").innerHTML = "Status: <br /> Cakru";
  document.getElementById("catatan-kru").innerHTML = "Catatan: <br /> - temen satu SMA author <br /> - ikut URO <br /> - ikut PKM karena disuruh dosen awkoakwoa <br /> - Sudah dapet kos <br /> - Mau masuk IF atau STI";
  document.getElementById("nim-kartu").innerHTML = "16520462";
}

function nim16520102() {
  document.getElementById("nama-kartu").innerHTML = "Naufal Bhanu Anargyarahman";
  document.getElementById("status-kru").innerHTML = "Status: <br /> Cakru";
  document.getElementById("catatan-kru").innerHTML = "Catatan: <br /> - temen satu SMA sama kartu 16620367<br /> - ikut URO <br /> - ikut PKM juga karena satu dosen sama kartu 16520462 <br /> - Sudah dapet kos <br /> - Mau masuk IF atau STI";
  document.getElementById("nim-kartu").innerHTML = "16520102";
}

function nim16520050() {
  document.getElementById("nama-kartu").innerHTML = "Febryola Kurnia Putri";
  document.getElementById("status-kru").innerHTML = "Status: <br /> Cakru";
  document.getElementById("catatan-kru").innerHTML = "Catatan: <br /> - ikut URO juga ges banyak juga URO <br /> - Sudah dapet kos juga <br /> - Mau masuk IF atau STI juga";
  document.getElementById("nim-kartu").innerHTML = "16520050";
}

function nim13519002() {
  document.getElementById("nama-kartu").innerHTML = "Steven Nataniel Kodyat <br>";
  document.getElementById("status-kru").innerHTML = "Status: <br /> Kru";
  document.getElementById("catatan-kru").innerHTML = "Catatan: <br /> -  Tubes inbound, langsung dikerjakan setelah wawan <br /> - Sudah dapet kos, I guess? (gk ditanyain pas wawan kru) <br /> - Sudah masuk IF :O";
  document.getElementById("nim-kartu").innerHTML = "13519002";
}

function nim16620367() {
  document.getElementById("nama-kartu").innerHTML = "Jeremy Evan";
  document.getElementById("status-kru").innerHTML = "Status: <br /> Cakru";
  document.getElementById("catatan-kru").innerHTML = "Catatan: <br /> - Sudah dapet kos (maapkeun gk ada lokasinya, author memory goldfish) <br /> - Mau masuk Teknik Sipil atau Lingkungan <br /> - Teman satu SMA dengan kartu 16520102";
  document.getElementById("nim-kartu").innerHTML = "16520295";
}