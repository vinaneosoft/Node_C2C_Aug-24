const EmployeeModel=require("../mongodbmodel/EmployeeModel");

async function getAllEmployees(){
    return await EmployeeModel.find({}).exec();
}
async function getEmployeeById(empId){
    return await EmployeeModel.findById(empId).exec(); // _id
}
async function deleteEmployeeById(empId){
    return await EmployeeModel.deleteOne({_id:empId});
}
async function updateEmployee(empId, employee){
    const filter={_id:empId};
    const updates=employee;
    return await EmployeeModel.updateOne(filter,updates);
}
async function addEmployee(employee){
    const EmployeeDoc=new EmployeeModel(employee);
    return await EmployeeDoc.save();
}

module.exports={getAllEmployees,getEmployeeById, deleteEmployeeById,updateEmployee, addEmployee}

// module contains single file 
// EmployeesAPI. js ==> EmployeesAPI