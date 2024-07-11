// script.js
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('nav ul li h3');
    const content = document.querySelector('.container');

    navItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const section = event.target.textContent.toLowerCase();
            loadContent(section);
        });
    });

    function loadContent(section) {
        let contentHTML = '';
        switch(section) {
            case 'home':
                contentHTML = `
                    <div class="konten">
                        <div class="user">
                            <img src="images/photo6.png" alt="">
                            <div>
                                <p>Nicholas</p>
                                <span>29 Mei 1987, 08.19 AM</span>
                            </div>
                        </div>
                        <div class="nulis">
                            <a href="#"><img src="images/feed-image-1.png"></a>
                            <textarea rows="" placeholder=" "></textarea>
                        </div>
                        <div>
                            <h2 class="feed"><strong>Berapa modal pertamamu saat kamu memulai usaha pertama?</strong></h2>
                            <p class="isi">100 ribu, plus the power of kevevet. Tahun lalu pas covid, jualan peyek ikutan surut. Ditambah lagi harga minyak goreng yang terus naik tapi tidak mau turun-turun. Mulai harga 28.000/2L, ditunggu beberapa bulan malah semakin nembus 50.000++/2L
                            Tabungan udah habis, tapi duit tinggal 100 ribu saja. Langsung ajak istri berembuk, nyari ide jualan apa yang ngga perlu pake minyak goreng. Akhirnya diputuskan buat usaha bubur ayam, karena ngga perlu pakai minyak goreng. Langsung sat set sat set, buka grup Facebook LANGSUNG ENAK (LE), buka cookpad daftar yang premium, YouTube cari resep dari para penjual bubur dan resep dari selebritis chef. Terus diambil kelebihannya dari tiap-tiap resep. Setengah hari full survey, langsung sat set sat set lagi lakuin trial error. Hasilnya? Error! Coba terus sampe 3x, baru bisa jadi lebih baik dan lebih enak hasilnya.
                            Hari kedua Langsung eksekusi jualan, pake alat seadanya yang ada di rumah kontrakan. Pake meja kayu biasa, tutupin pake banner. Wadah topping pake toples seadanya. Buburnya juga ngga pake dandang, tapi pake termos bekas. Eehh, ga sampe 2 minggu kok mejanya jatuh kesenggol motor pas mau ngirim pesanan. Langsung lemes dengkulnya 😂😂😂</p>
                        </div>
                    </div>`;
                break;
            case 'qna':
                contentHTML = '<h2>QnA Section</h2><p>Here will be the questions and answers section.</p>';
                break;
            case 'group':
                contentHTML = '<h2>Group Section</h2><p>Here will be the group section.</p>';
                break;
            case 'notifications':
                contentHTML = '<h2>Notifications Section</h2><p>Here will be the notifications section.</p>';
                break;
            default:
                contentHTML = '<h2>Welcome to Quo-Run</h2><p>Select a section to view content.</p>';
                break;
        }
        content.innerHTML = contentHTML;
    }
});
