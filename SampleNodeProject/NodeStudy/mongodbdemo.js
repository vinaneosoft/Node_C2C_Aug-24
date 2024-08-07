const mongoose=require("mongoose");

const employee={
    emp_name:"kiran patil",
    emp_salary:89000
}

const newEmp={
    _id:334,
    emp_name:"poonam pawar",
    emp_salary:90000,
    emp_email:"poonam@gmail.com"
}

 mongoose.connect("mongodb+srv://root:root@cluster0.jkcmoaj.mongodb.net/nodetraining?retryWrites=true&w=majority&appName=Cluster0")
.then((res)=>{
    console.log("connected......");
    getAllEmployees();
    getEmployeeById(123);
    deleteEmployeeById(111);
    updateEmployee(123,employee);
    addEmployee(newEmp);
    }
)
.catch(err=>console.log(err))
const empSchema=new mongoose.Schema({
    _id:Number,
    emp_name :{ type: String, default:"neosoft" },
    emp_email:String,
    emp_salary:Number
});
// note : in mongodb database, collection name must be in plural form
const EmployeeModel=mongoose.model("Employee",empSchema) ;

async function getAllEmployees(){
    // find all records from collection
     const data= await EmployeeModel.find({}).exec();
     console.log(data);
     console.log("_____________");
     
}
async function getEmployeeById(empId){
  
     const data= await EmployeeModel.findById(empId).exec(); // _id
     console.log(data);
     console.log("_____________");
}

async function deleteEmployeeById(empId){
  
     const data= await EmployeeModel.deleteOne({_id:empId});
     console.log(data);
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