const express = require("express");
const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('router working');

router.get('/',homeController.home);
router.use('/users', require('./users'));
router.post('/add-task',homeController.addTask);

module.exports = router;