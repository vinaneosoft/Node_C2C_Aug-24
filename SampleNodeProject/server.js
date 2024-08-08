const api= require("./api/EmployeesAPI");
const {getAllEmployees, getEmployeeById, deleteEmployeeById,addEmployee, updateEmployee}=api;
const bodyParser=require("body-parser");

const express=require("express");
const app=express();

app.listen(5000, ()=>console.log("application server started..."))

require("./config/mongodb");

app.use(function(req, res, next){
    console.log("middleware inbetween");
    //res.send("response from middleware")// req is not going to next middleware
    next(); // next middleware // request method
})

app.get("/", function(request, response){
    console.log(request);
    response.send("WELCOME TO FIRST NODE PROJECT WITH EXPRESS...........");
});

app.get("/employees/getall", async function(request, response){
    const data=await getAllEmployees();
    response.send(data);
});

app.get("/employees/get/:empId", async function(request, response){
    const data=await getEmployeeById(request.params.empId);
    response.send(data);
});

app.get("/employees/delete/:empId", async function(request, response){
    const data=await deleteEmployeeById(request.params.empId);
    response.send(data);
});



//const parser=bodyParser.urlencoded({extended:true})
app.use(bodyParser.urlencoded({extended:true})); /*we are adding middleware with use function */
app.post("/employees/add", async function(request, response){
    console.log(request.body);
    const data=await addEmployee(request.body);
    response.send(data);
});

app.post("/employees/update", async function(request, response){
    console.log(request.body); 
    const {_id, ...employee}=request.body;
    console.log(_id);
    console.log(employee);
    const data=await updateEmployee(_id ,employee);
    response.send(data);
});
