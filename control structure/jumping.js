// break and continue

for (let i = 1; i<= 10; i++){
    if(i==5){
        break;
    }
    console.log(i);
}

console.log("new loop");

//comtinue
for (let i = 1; i<= 6; i++){
    if(i==5){
        continue;
    }
    console.log(i);
}

//ternary operator

let a = 18;

console.log(a<18 ? "yes":"no");