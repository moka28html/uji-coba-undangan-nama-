UNDANGAN DIGITAL SYUKURAN WISUDA DAN ULANG TAHUN

CARA MEMBUKA DI VS CODE
1. Ekstrak file ZIP.
2. Buka VS Code > File > Open Folder, pilih folder proyek.
3. Pasang ekstensi Live Server.
4. Klik kanan index.html > Open with Live Server.

STRUKTUR
index.html = halaman undangan
style.css = desain website responsif
script.js = pengaturan acara, nama tamu, Maps, WhatsApp
assets/background.png = gambar poster yang Anda kirim

EDIT INFORMASI
Buka script.js dan ubah tanggal, waktu, tempat, maps, dan whatsapp.
Nomor WhatsApp harus memakai kode negara tanpa tanda +, misalnya 6281234567890.
Ganti contoh tautan Google Maps dengan lokasi acara yang benar.

NAMA TAMU DINAMIS
Contoh lokal:
http://127.0.0.1:5500/?to=Josua%20Moka
http://127.0.0.1:5500/?to=Maria%20Bani

Setelah hosting, tambahkan ?to=Nama%20Tamu di akhir alamat website.
Teks setelah to= akan tampil sebagai nama penerima pada kartu undangan.

CATATAN
Poster yang diberikan sudah memuat foto dan nama wisudawati serta anak, sehingga bagian
tersebut tetap menjadi bagian dari gambar. Nama tamu undangan yang berubah otomatis
ditampilkan pada kartu putih di bawah poster. Untuk mengganti poster, timpa
assets/background.png dengan gambar baru yang memakai nama file sama.

Tanggal dan tempat di script.js masih contoh dan wajib disesuaikan.
Musik belum ditambahkan karena file audio belum diberikan. Browser biasanya membutuhkan
interaksi pengunjung sebelum musik boleh berbunyi otomatis.
