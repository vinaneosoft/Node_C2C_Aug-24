const empSchema=new mongoose.Schema({
    _id:Number,
    emp_name :{ type: String, default:"neosoft" },
    emp_email:String,
    emp_salary:Number
});

const EmployeeModel=mongoose.model("Employee",empSchema);

module.exports=EmployeeModel;