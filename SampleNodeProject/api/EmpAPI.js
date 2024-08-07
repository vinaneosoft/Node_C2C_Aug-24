const connection=require("../config/mysqldb");  // require custom module
async function getAllEmployees(){
    // find all records from collection
    const [result]=await connection.query('SELECT * from employees');
    return result;
}

/* use ur table  and primary key column of ur table*/
async function getEmployeeById(empId){
    const [result]=await connection.query(`SELECT * from employees where emp_id=${empId}`);
    return result;
}
async function deleteEmployeeById(empId){
    const response=await connection.query(`delete from employees where emp_id=${empId}`);
    return response;
}
async function updateEmployee(empId, employee){
    const response=await connection.query(`update employees 
                                    set emp_name=${employee.empName},
                                        emp_email=${employee.empEmail},
                                        emp_salary=${employee.empSalary} where emp_id=${empId}`);
   return response; 
}

async function addEmployee(employee){
    const response=await connection.query(`insert into employees
         values(${employee.empId}, ${employee.empName}, ${employee.empSalary}, ${employee.empEmail})`);
   return response;
}


module.exports={getAllEmployees, getEmployeeById, deleteEmployeeById, updateEmployee, addEmployee}