const express = require('express');
const path = require('path');
const server = express();

const { homeImgs } = require('./public/js/database.test');

server.set("view engine", "ejs");

server.use(express.json());
server.use(express.static(path.join(__dirname, "public")));
server.use(express.urlencoded({ extended: true }))

server.get('/', (req, res) => {
    res.render('pages/home', { homeImgs: homeImgs });
});

server.get('/gallery', (req, res) => {
    res.render('pages/gallery');
});

server.get('/menu', (req, res) => {
    res.render('pages/menu');
});

const PORT = 5050 || 5051;

server.listen(PORT, () => {
    console.log(`Server running successfully on port: ${PORT}`);
});