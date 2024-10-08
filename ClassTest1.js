//Class Test:-

/* Q1 
function studentgrade(score){
    if(score >= 90 && 100){
         return "A";
    }else if(score >= 70 && 80)
    {
         return "B";
    }
    else if(score >= 50 && 60 ){
         return "C";
    }else if(score >= 30 && 40 ){
        return "D";
   }else if(score >= 10 && 30 ){
    return "F";
     }
}
let rv= studentgrade(30);
console.log(rv);
*/

/*
Q2
 let num=1;
 while(num < 50){
   if(num%2 !== 0){
    console.log(num);
   }
   num++;
 }
*/
/* Q3
const numbers=[1,2,3,4,5]
const doubled=numbers.map(num=> num*2);
console.log(doubled);

The following output is [ 2, 4, 6, 8, 10 ]
*/

/* Q5
let object ={ firstname: "shashank", lastname: "gautam" };

let newPropertyName = 'age';
let newPropertyValue = 20;

 object[newPropertyName] = newPropertyValue;
console.log(object);
*/
 /*Q6. Function which takes two parameters and returns their sum
let A=2;
let B=4;

function sum(){
    return A*B;
}
console.log(sum());
*/

/* Q7. this keyword and its method
As=> this keyword is used to bind the object to function when it is call upon.
Method of this keywords are:
1. To access properties from the local scope:-
EX
let mul={
    numb1:"10",
    num2:"20",
    num3:"30",
    
}
console.log(mul);

2. To access objects from global scope:-
Ex
let object={
    name:"shashank",
    age:20,
    address:"New Delhi",
    method:function(){
                console.log(this.name)
                return "object access to function"
            }
         }
         console.log(object.method());

const last={lastname:"gautam"}

console.log(this.last(this.lastname));


3. TO access objests from functions:-
Ex
let object={
    name:"Shashank",
    age:20,
    address:"New delhi",
    method:function(){
        console.log(this.name)
        return "object access to function"
    }
 }
 console.log(object.method());
 OUTPUT:-
         Shashank
         object access to function

4. using this alone:-
Ex
console.log(this);
*/

/*
Q7 function constructor:-
To creat a function constructor we need to creat a function skeleton for the function which has more than one objects then creat a constructor and add information or elements in it. Then use console.log() to call the constructor.
Ex
function car(brand,name,type,color,seats){
      this.comp=brand;
      this.naam=name;
      this.tarah=type;
      this.rang=color;
      this.jagah=seats;
}

let details=new car({
    brand:"Maruti Suzuki",
    name:"Alto",
    type:"Micro-Car",
    color:"White",
    seats:"4 seater"
})
console.log(details);
*/

/*
//Q9. Rotate array
function rotatearray(arr) {
    if (arr.length === 0);
    let lastElement = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1]; 
    }
    arr[0] = lastElement; 
    return arr; 
}
// Ex1.
let arr1 = [1, 2, 3, 4, 5];
console.log(rotatearray(arr1));

// Ex2.
let arr2 = [2, 3, 4, 5, 1];
console.log(rotatearray(arr2)); 
*/

