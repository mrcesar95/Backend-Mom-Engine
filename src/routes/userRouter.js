const { response } = require('express');
const express = require('express');
const userController = require('../controllers/userController');



const router = express.Router();

// router.get('/', (req, res) => {
// 	response.send("<h1>Hello World!</h1>")
// }),
// router.get('/', (req, res) => {
// 	response.send("<h1>Hello World!</h1>")
// }),
router.post('/singup', userController.singup);
router.get('/confirm/:token', userController.confirmAccount);
router.post('/login', userController.login)

module.exports = router;