
function ubahUkuranTeks(ukuran) {
  let body = document.body;

  switch (ukuran) {
    case 'besar':
      body.style.fontSize = '1.15em';
      break;
    case 'normal':
      body.style.fontSize = '1em';
      break;
    case 'kecil':
      body.style.fontSize = '0.9em';
      break;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollTopBtn");

  // Tampilkan tombol saat scroll ke bawah
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  // Scroll ke atas saat tombol diklik
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

// Validasi Form Upload
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formUpload');
  
  // Jika form ditemukan di halaman
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nama = document.getElementById('nama').value.trim();
      const judul = document.getElementById('judul').value.trim();
      const deskripsi = document.getElementById('deskripsi').value.trim();
      const izin = document.getElementById('izin').checked;

      if (!nama) {
        alert('Mohon isi Nama Pengunggah.');
        return;
      }
      if (!judul) {
        alert('Mohon isi Judul Konten.');
        return;
      }
      if (!deskripsi) {
        alert('Mohon isi Deskripsi Singkat.');
        return;
      }
      if (!izin) {
        alert('Mohon centang kotak "Saya pemilik asli konten ini".');
        return;
      }

      alert('Terima kasih! Resep Anda berhasil diupload.');
      form.reset();
    });
  }
});
