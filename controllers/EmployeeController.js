const {Employee} = require('../models');

// getting all employess
const getEmployeeDetails = async (req, res, next) => {
    try {
        const allEmp = await Employee.findAll();
        res.json(allEmp); 
    } catch (error) {
        next(error);
    }
}

// creating new employee
const addEmployeeDetails =async (req, res, next) => {
    try {
        const {name, email, gender, mobile} = req.body;

        const newEmp = await Employee.create({name, email, gender, mobile});
        res.status(201).json(newEmp);
        
    } catch (error) {
        next(error);
    }
}



module.exports = {
    getEmployeeDetails,
    addEmployeeDetails,
}