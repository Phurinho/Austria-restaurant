const express = require('express');
const path = require('path');
const server = express();

const { homeImgs, galleryImgs_1, galleryImgs_2, menuImgs, hotdealImgs } = require('./database.test');

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));

server.use(express.json());
server.use(express.static(path.join(__dirname, "public")));
server.use(express.urlencoded({ extended: true }))

server.get('/', (req, res) => {
    res.render('pages/home', { homeImgs });
});

server.get('/gallery', (req, res) => {
    res.render('pages/gallery', { galleryImgs_1, galleryImgs_2});
});

server.get('/menu', (req, res) => {
    res.render('pages/menu', { menuImgs, hotdealImgs });
});

server.get('/booking', (req, res) => {
    res.render('pages/booking');
});

const PORT = 5000 || 5001;

server.listen(PORT, () => {
    console.log(`Server running successfully on http://localhost:${PORT}`);
});