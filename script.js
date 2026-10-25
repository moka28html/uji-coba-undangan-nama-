// EDIT bagian ini sesuai acara sebelum website dibagikan.
const pengaturan = {
  tanggal: "Rabu 28 Oktober 2026", // ganti tanggal
  waktu: "Pukul 18:00 Wita - selesai", // ganti waktu
  tempat: "Isi nama tempat dan alamat lengkap di sini", // ganti lokasi
  maps: "https://maps.google.com/", // ganti dengan tautan lokasi Google Maps
  whatsapp: "6281234567890", // ganti nomor panitia: kode negara, tanpa + atau 0 di depan
  pesan: "Halo, saya ingin mengonfirmasi kehadiran pada acara Syukuran Wisuda dan Ulang Tahun."
};
document.getElementById("tanggalAcara").textContent = pengaturan.tanggal;
document.getElementById("waktuAcara").textContent = pengaturan.waktu;
document.getElementById("tempatAcara").textContent = pengaturan.tempat;
document.getElementById("mapsButton").href = pengaturan.maps;
const params = new URLSearchParams(location.search);
const namaTamu = (params.get("to") || "").trim();
document.getElementById("namaTamu").textContent = namaTamu || "Bapak/Ibu/Saudara/i";
const pesan = encodeURIComponent(pengaturan.pesan + (namaTamu ? " Nama tamu: " + namaTamu + "." : ""));
document.getElementById("rsvpButton").href = `https://wa.me/${pengaturan.whatsapp}?text=${pesan}`;
