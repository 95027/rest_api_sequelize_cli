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

// getting single employee
const singleEmployee = async (req, res, next) => {

    try {
        const singleEmp = await Employee.findOne({
            where : {
                id : req.params.id
            }
        });

        if(singleEmp){
            res.json(singleEmp);
        }
        else{
            res.json({message : 'employee not found'});
        }
        
    } catch (error) {
        next(error);
    }

}

// updating an employee
const updatingEmployeeDetails = async (req, res, next) => {
    try {
        const emp = await Employee.findOne({
            where : {
                id : req.params.id
            }
        });

        if(emp){
            // const {name, email, gender, mobile} = req.body
            await Employee.update({
                name : req.body.name,
                email : req.body.email,
                gender : req.body.gender,
                mobile : req.body.mobile,
            }, {
                where : {
                    id : req.params.id
                }
            });

            res.json({message : 'Employee details updated successfully'});
        }
        else{
            res.json({message : 'employee not found'});
        }
        
    } catch (error) {
        next(error);
    }
}

// delete an employee
const deleteEmployee = async (req, res, next) => {
    const emp = await Employee.findOne({
        where : {
            id : req.params.id
        }
    });

    if(emp){
        await Employee.destroy({
            where : {
                id : req.params.id
            }
        });
        res.json({message : 'Employ details deleted successfully'});
    }
    else{
        res.json({message : 'employee not found'});
    }
}


module.exports = {
    getEmployeeDetails,
    addEmployeeDetails,
    singleEmployee,
    updatingEmployeeDetails,
    deleteEmployee,
}