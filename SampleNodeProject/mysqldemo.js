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

var connection ;
async function makeConnection(){
     connection = await mysql.createConnection({
        host     : '127.0.0.1',
        user     : 'root',
        database : 'nodetraining'  // use sql mini project database here
      }); 

    connection.connect().then((success)=>{
        console.log("connected....");
        //getAllEmployees();
        getEmployeeById(122); // pass id available in table
    }).catch((err)=>console.log(err));
}
makeConnection();

/* use ur table  */
async function getAllEmployees(){
    // find all records from collection
    const [result]=await connection.query('SELECT * from employees');
    console.log(result);
    console.log("_____________"); 
}

/* use ur table  and primary key column of ur table*/
async function getEmployeeById(empId){
    const [result]=await connection.query(`SELECT * from employees where emp_id=${empId}`);
    console.log(result);
    console.log("_____________"); 
}
async function deleteEmployeeById(empId){
    const [result]=await connection.query(`delete from employees where emp_id=${empId}`);
    console.log(result);
    console.log("_____________"); 
}
async function updateEmployee(empId, employee){
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


