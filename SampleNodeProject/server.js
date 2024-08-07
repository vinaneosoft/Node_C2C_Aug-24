const api= require("./api/EmployeesAPI");
const {getAllEmployees, getEmployeeById, deleteEmployeeById}=api;

const express=require("express");
const app=express();

app.listen(5000, ()=>console.log("application server started..."))

require("./config/mongodb");

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