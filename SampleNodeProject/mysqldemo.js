var mysql = require('mysql2/promise');

/* this object is for updation */
const employee={
    empName:"hari pawar",
    empSalary:90000,
    empEmail:"pawar@gmail.com"
}

/* this object is for creating new employee */
const newEmp={
    empId:334,
    empName:"poonam pawar",
    empSalary:90000,
    empEmail:"poonam@gmail.com"
}
var connection = await mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    database : 'nodetraining'  // use sql mini project database here
  });

connection.connect().then((success)=>{
    console.log("connected....");
    console.log(success);
}).catch((err)=>console.log(err));

/* use ur table  */
function getAllEmployees(){
    // find all records from collection
    connection.query('SELECT * from employees', function (error, results) {
        console.log(error);
        console.log(results);
      });  
     console.log("_____________"); 
}

async function getEmployeeById(empId){
    // find all records from collection
     const data= await EmployeeModel.findById(empId).exec(); // _id
     console.log(data);
     console.log("_____________");
}

async function deleteEmployeeById(empId){
    // find all records from collection
     const data= await EmployeeModel.deleteOne({_id:empId});
     console.log(data);
     console.log("_____________");
}

async function updateEmployee(empId, employee){
    // find all records from collection
    const filter={_id:empId};
    const updates=employee;
     const data= await EmployeeModel.updateOne(filter,updates)
     console.log(data);
     console.log("_____________");
}

async function addEmployee(employee){
    const EmployeeDoc=new EmployeeModel(employee);
    const res=await EmployeeDoc.save();
    console.log("inserted...", res);
    console.log("_____________");
}

async function getAllEmployees2(){
    const result = await new Promise((resolve, reject)=>{
        connection.query('SELECT * from employees',  (error, results)=>{
            if(error)
                return reject(error);
            return resolve(results);
        });
    });
    console.log(result);
}

