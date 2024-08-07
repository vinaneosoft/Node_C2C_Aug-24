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
       // getEmployeeById(122); // pass id available in table
        // deleteEmployeeById(111)
        //updateEmployee(122, employee) // id : whose data to update, updations
        addEmployee(newEmp);
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
    const response=await connection.query(`delete from employees where emp_id=${empId}`);
    console.log(response);
    console.log("_____________"); 
}
async function updateEmployee(empId, employee){
    const response=await connection.query(`update employees 
                                    set emp_name=${employee.empName},
                                        emp_email=${employee.empEmail},
                                        emp_salary=${employee.empSalary} where emp_id=${empId}`);
    console.log(response);
    console.log("_____________"); 
}

async function addEmployee(employee){
    const response=await connection.query(`insert into employees
         values(${employee.empId}, ${employee.empName}, ${employee.empSalary}, ${employee.empEmail})`);
    console.log(response);
    console.log("_____________"); 
}


