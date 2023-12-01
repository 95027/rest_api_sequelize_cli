const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/EmployeeController');


router.post('/addEmployee', employeeController.addEmployeeDetails);
router.get('/getEmployees', employeeController.getEmployeeDetails);


module.exports = router;