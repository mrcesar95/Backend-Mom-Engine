const express = require('express');
const userController = require('../controllers/userController');



const router = express.Router();

router.post('/singup', userController.singup);
router.get('/confirm/:token', userController.confirmAccount);
router.post('/login', userController.login)

module.exports = router;