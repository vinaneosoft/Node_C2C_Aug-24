const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://root:root@cluster0.jkcmoaj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then((res)=>{
    console.log("connected......");
    getAllEmployees();
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
     const response= await EmployeeModel.find({}).exec();
     console.log(response);
}