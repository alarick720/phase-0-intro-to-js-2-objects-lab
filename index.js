const employee = {
    name: "Alarick",
    streetAddress: "12132 Value Drive"
}

// function updateEmployeeWithKeyAndValue(employee, key, value) {

//     employee[key] = value;
//     return employee;
// }
 

const streetAddress = "11 Broadway"; 
  updateEmployeeWithKeyAndValue (employee, "streetAdress", streetAddress);

  function updateEmployeeWithKeyAndValue (employee, key, value) {
    const newemployee = {...employee};
    newemployee[key] = value;
    return newemployee
  }
  function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key]=value;
    return employee

  }
  function deleteFromEmployeeByKey(employee, key){
const newemployee = {...employee};
delete newemployee[key]
return newemployee
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key){
   delete employee[key]
    return employee;

  }
function value(value){

}












  
     
 



 
  
  
  



  







