const api= require("./api/EmployeesAPI");
const {getAllEmployees}=api;

const express=require("express");
const app=express();

app.listen(5000, ()=>console.log("application server started..."))

require("./config/mongodb");

app.get("/", function(request, response){
    console.log(request);
    response.send("WELCOME TO FIRST NODE PROJECT WITH EXPRESS...........");
});

app.get("/employees/getall", function(request, response){
    const data=getAllEmployees();
    response.send(data);
});