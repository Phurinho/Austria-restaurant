const express = require('express');
const path = require('path');
const server = express();

const { homeImgs, galleryImgs_1, galleryImgs_2, menuImgs } = require('./database.test');

server.set("view engine", "ejs");

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
    res.render('pages/menu', { menuImgs });
});

const PORT = 5000 || 5001;

server.listen(PORT, () => {
    console.log(`Server running successfully on port: ${PORT}`);
});