//JSON iteration
//For loop
const student =[{name : "Aathish",RollNumber : "21CSA112",department : "CS"},
{name : "Ram",age : 19 ,height : 163, weight : 56 }];

for(let i=0;i<student.length;i++){
    console.log(student[i]);
};

//for in loop
for(let i in student){
    console.log(student[i]);
};

//for of loop
const body = {name : "Ram",age : 19 ,height : 163, weight : 56 };
for (let value of Object.entries(body)) {
    console.log(value);
  };

  //for each loop
  student.forEach(element => {
    console.log(element)
    
  });