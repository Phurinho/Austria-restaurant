const express = require('express');
const path = require('path');
const server = express();
const allmenu = require("./database/menu.json");
const homeImgs = require("./database/home.json");
const hotdealImgs = require("./database/hotdeal.json");
const menu_book = require("./database/menu_book.json");
const send_WhatsApp = require('./api/sendWhatsapp');
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));

server.use(express.json());
server.use(express.static(path.join(__dirname, "public")));
server.use(express.urlencoded({ extended: true }))

server.get('/', (req, res) => {
    res.render('pages/home', { homeImgs: homeImgs.HomeImgs });
});


server.use('/api', send_WhatsApp);
// server.get('/gallery', (req, res) => {
//     res.render('pages/gallery', { galleryImgs_1, galleryImgs_2});
// });`

server.get('/menu', (req, res) => {
    res.render('pages/menu', { 
        hotdealImgs: hotdealImgs.HotDealImgs,
        allmenu: allmenu.AllMenu,
        menu_book: menu_book.MenuBook,
    });
});

server.get('/booking', (req, res) => {
    res.render('pages/booking', { menu_book: menu_book.MenuBook });
});

server.get('/contact', (req, res) => {
    res.render('pages/contact');
});

const PORT = 5000 || 5001;

server.listen(PORT, () => {
    console.log(`Server running successfully on http://localhost:${PORT}`);
});