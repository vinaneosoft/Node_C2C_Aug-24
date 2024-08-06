const mongoose=require("mongoose");

 mongoose.connect("mongodb+srv://root:root@cluster0.jkcmoaj.mongodb.net/nodetraining?retryWrites=true&w=majority&appName=Cluster0")
.then((res)=>{
    console.log("connected......");
    getAllEmployees();
    getEmployeeById(123);
    deleteEmployeeById(111);
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
}
async function getEmployeeById(empId){
    // find all records from collection
     const data= await EmployeeModel.findById(empId).exec();
     console.log(data);
}

async function deleteEmployeeById(empId){
    // find all records from collection
     const data= await EmployeeModel.deleteOne({_id:empId});
     console.log(data);
}
