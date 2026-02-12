//!--------------------------------------------

//* Two type of Memory

//? 1) Stack ( Primitive )
//? 2) heap ( Non-Primitive )

//*......... Example for stack memory ( GIve copy of the same it cannot be changed from another varibles )

let youtubeName = "dipanshubisht";
let anotherName = youtubeName;
anotherName = "demokumar";

// console.table([youtubeName, anotherName]);

//*........ Example for heap memory

let objOne = {
  email: "demo@gmail.con",
  pass: "password",
};

let objTwo = objOne;
objTwo.email = "dipanshu@gmail.com";

// console.table([objOne, objTwo]);

//? If i change the value then it change the both values because the in the heap memory it store the object in a memory that the objOne and objTwo take reference not have write to store the exact values from the references.

// TODO : To handle this situation we can give me the whole copy for this to both have write to change the values according to that....

let object2 = JSON.parse(JSON.stringify(objOne));
object2.email = "random@gmail.com";

// console.table([objOne, object2]);
