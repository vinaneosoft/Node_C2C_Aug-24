

const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://root:root@cluster0.jkcmoaj.mongodb.net/nodetraining?retryWrites=true&w=majority&appName=Cluster0")
.then((success)=>{console.log("connected......")
    require("../mongodbmodel/EmployeeModel"); // what schema and models we are using
})
.catch(err=>console.log(err))