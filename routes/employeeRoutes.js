const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/EmployeeController');


router.post('/addEmployee', employeeController.addEmployeeDetails);
router.get('/getEmployees', employeeController.getEmployeeDetails);
router.get('/singleEmployee/:id', employeeController.singleEmployee); 
router.put('/updateEmployee/:id', employeeController.updatingEmployeeDetails); 
router.delete('/deleteEmployee/:id', employeeController.deleteEmployee); 


module.exports = router;