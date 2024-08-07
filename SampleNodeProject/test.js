let array=[123,"Hira", "Neosoft", 45000, 34, 10];


let [empId,empName, company, ...arr2]=array
console.log(empId);
console.log(empName);
console.log(company);
console.log(arr2);