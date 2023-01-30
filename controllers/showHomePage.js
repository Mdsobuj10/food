const {readFileSync} = require('fs');
const path = require('path');

const  showhome = (req, res) =>{

    const slider = readFileSync(path.join(__dirname, '../db/slider.json'));

    res.render('index',{
        slider : JSON.parse(slider.toString())
    });
}
const  menuPage = (req, res) =>{
    res.render('menu');
}
const  archivePage = (req, res) =>{
    res.render('archive');
}

const  locationPage = (req, res) =>{
    res.render('location');
}

const  newsPage = (req, res) =>{
    res.render('news');
}

const  staffPage = (req, res) =>{

     const staff = readFileSync(path.join(__dirname, '../db/db.json'))
    res.render('staff', {
        staff : JSON.parse(staff.toString())
    });
}

const  reservationPage = (req, res) =>{
    res.render('reservation');
}
const  galleryPage = (req, res) =>{
    res.render('reservation');
}

module.exports = {
    showhome, 
    menuPage,
    galleryPage,
    staffPage,
    archivePage,
    reservationPage,
    locationPage,
    newsPage
}