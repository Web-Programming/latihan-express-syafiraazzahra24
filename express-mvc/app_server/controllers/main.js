const index = (req, res) => {
    res.render('index', { title: 'Express' });
};


//buat controller untuk halaman kontak
//buat variabel baru 
const kontak = (req, res) => {
    res.render('kontak', { title: 'Express' });
};

module.exports = { index, kontak }; //export untuk router ke halaman lain
