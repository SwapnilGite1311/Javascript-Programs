console.log("Hello World");

let stud ={
    name:"Swapnil",
    age:18,
    year:"TY"
};

console.log(stud);

let person={
    name:"Mr.x",
    age:21,
    city:"Sinnar",
    display: function()
    {
        return(this.name);
    }
};
console.log("Name :",person.display());

var a = 5;
var b = 8;

console.log("Addition : ",a+b);
console.log("Subtraction : ",b-a);