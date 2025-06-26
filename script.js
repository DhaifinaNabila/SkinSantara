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
