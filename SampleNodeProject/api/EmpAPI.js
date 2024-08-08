const makeConnection=require("../config/mysqldb");  // undefined connection
async function getAllEmployees(){
    const connection=await makeConnection();
    const [result]=await connection.query('SELECT * from employees'); // error bcz undefined.query
    connection.release();
    return result;
}

/* use ur table  and primary key column of ur table*/
async function getEmployeeById(empId){
    const connection=await makeConnection();
    const [result]=await connection.query(`SELECT * from employees where emp_id=${empId}`);
    connection.release();
    return result;
}
async function deleteEmployeeById(empId){
    const connection=await makeConnection();
    const response=await connection.query(`delete from employees where emp_id=${empId}`);
    connection.release();
    return response;
}
async function updateEmployee(empId, employee){
    const connection=await makeConnection();
    const response=await connection.query(`update employees 
                                    set emp_name=${employee.empName},
                                        emp_email=${employee.empEmail},
                                        emp_salary=${employee.empSalary} where emp_id=${empId}`);
    connection.release();
    return response; 
}

async function addEmployee(employee){
    const connection=await makeConnection();
    const response=await connection.query(`insert into employees
         values(${employee.empId}, ${employee.empName}, ${employee.empSalary}, ${employee.empEmail})`);
    connection.release();
    return response;
}


module.exports={getAllEmployees, getEmployeeById, deleteEmployeeById, updateEmployee, addEmployee}