const express = require('express');
const {showhome, staffPage, menuPage, locationPage, galleryPage, newsPage, reservationPage, archivePage} =require('../controllers/showHomePage');

/* router 
init
 */

const router = express.Router();

// router
router.get('/', showhome);
router.get('/menu', menuPage);
router.get('/archive', archivePage);
router.get('/location', locationPage);
router.get('/news', newsPage);
router.get('/staff', staffPage);
router.get('/gallery', galleryPage);
router.get('/reservation', reservationPage);




module.exports = router;