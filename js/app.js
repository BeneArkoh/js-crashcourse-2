let a = 10;
let b = 6;

//basic operators
console.log(a + b);
console.log(a * b);
console.log(a - b);
console.log(a / b);
console.log(a % b);

///urinary operator

console.log(a++);
console.log(a);
console.log(++a);
console.log(a--);
console.log(a);
console.log(--a);

//comparison
//let a = 10;
//let b = 6;
let c = "10";
console.log(a < b);
console.log(a > b);
console.log(a == b);
console.log(a == c);
console.log(a === c);

// control flow
let score =80;

if (score >= 80) { 
    console.log("you had A");
  }  else if (score>= 75) {
    console.log("you had B+");
  } else if (score >=70){
 console.log("score 70>= B");
  }else if (score >= 65){
 console.log("you score C+");
     
  }else if (score >= 60){
      console.log("you had C");
  }else if (score >= 55){
      console.log("you had D+");
  }else if(score >= 50){
      console.log("you had D");

  }

  const gender = "Male";

  switch (gender) {
      case "Male":
          console.log("Go to the male wash");
          break;
          case "Female":
            console.log("Go to the female washroom"):
           break;
              default:
            console.log("No washroomfor you");
            break;

{
for(let count =1; count <10; count++){
console.log(count);
}

let count = 1;

while (a<20){
console.log(a);
a++
}