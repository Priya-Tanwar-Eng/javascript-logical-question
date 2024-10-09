//for loop , while loop , do while loop, for of loop , for in loop

// for loop
for(let i = 1; i <= 10; i++){
    console.log(i)
}

// while loop
console.log("new loop");
let a = 1 ;
while(a < 9){
    console.log(a);

    a++;
}
console.log("new loop");
// do while loop

let b = 18;
do{
    console.log(b);
    b++
}while(b>19);

console.log("new loop");

//for of array

let arr = [3,6,7,4,6];
for(let value of arr){
    console.log(value);
}

console.log("new loop");

//for in loop

let object = {
    fname: "lavkush",
    lname : "Kumar",
    age : 18,
}

for (let obj in object){
    console.log(obj + ":" + object[obj]);
}

