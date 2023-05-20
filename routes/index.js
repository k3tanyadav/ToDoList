const express = require("express");
const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('router working');

//handle http requests via functions defined in the home_controller file
router.get('/',homeController.home);
router.get('/delete-task',homeController.deleteTask);
router.get('/modify-task',homeController.modifyTask);
router.post('/add-task',homeController.addTask);

module.exports = router;