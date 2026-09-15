// <!-- Script Mini untuk Counter Jumlah Obat 
function ubahJumlah(nilai) {
            var input = document.getElementById('jumlah-beli');
            var jumlahSekarang = parseInt(input.value) + nilai;
            if (jumlahSekarang >= 1) {
                input.value = jumlahSekarang;
            }
        }