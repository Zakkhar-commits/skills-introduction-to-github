// // // // age=24
// // // // a=null
// // // // b=undefined
// // // // const Pie=3.14
// // // // isFollow = true;
// // // // console.log(Pie);

// // // // const student={
// // // //     full_name: "Rahul Kumar",
// // // //     age: 20,
// // // //     cgpa: 8.2,
// // // //     isPass: true
// // // // };

// // // // student["age"]=student["age"]+1;

// // // // console.log(student);


// // // // const product={
// // // //     full_name: "Parker Jotter Standard",
// // // //     rating: 4,
// // // //     price: 270,
// // // //     isDeal: "true",
// // // //     Discount: "15%"
// // // // }

// // // // console.log(typeof product.full_name);

// // // let a= 5;
// // // let b= 2;

// // // console.log("a=", a, "b=",b);
// // // // console.log("a+b=", a+b);
// // // // console.log("a-b=", a-b);
// // // // console.log("a*b=", a*b);
// // // // console.log("a/b=", a/b);
// // // // console.log("a % b=", a%b);

// // // // console.log("a**b=", a**b); //5^2

// // // //unary operator


// // // // console.log("++a =", a, "b++=", b++ );
// // // // console.log(b);


// // // console.log("a!==b=", a!==b);

// // // //logical operator

// // // let cond1= a<b; //true
// // // let cond2= a==5; //false

// // // console.log("!(5<2)=", !(a<b));

// // // conditional statement

// // // if statement

// // // let age=25;

// // // if (age>18) {
// // //     console.log("you can vote");
// // // }

// // // if (age<18){
// // //     console.log ("you cannot vote")
// // // }


// // // let mode = "light"
// // // let color;

// // // if (mode==="dark"){
// // //     color="black";
// // // }
// // // if (mode==="light"){
// // //     color="white"
// // // }

// // // console.log(color);

// // // if-else statement

// // // let mode = "dark"
// // // let color;

// // // if (mode==="dark"){
// // //     color="black";
// // // }
// // //     else {color="white"
// // // }

// // // console.log(color);

// // // check the number type
// // // let num= 7;

// // // if (num%2==0) {
// // //     console.log(num,"is even");
// // // }
// // // else {
// // //     console.log(num,"is odd");
// // // }

// // // let age= 25;
// // // let type;

// // // if (60>=age && age>=18) {
// // //     type="junior";
// // // } else if (age>=60) {
// // //     type="senior";
// // // } else {
// // //     type= mid_age;
// // // }

// // // console.log(type);

// // // let age= 15;
// // // age>=18 ? console.log("adult") : console.log("not adult");

// // // const expr = 'Papayas';

// // // switch (expr) {
// // //     case 'Oranges':
// // //         console.log('Oranges are $0.59 a pound.');
// // //         break;
// // //     case 'Mangoes':
// // //     case 'Papayas':
// // //         console.log('Mangoes and papayas are $2.79 a pound.');
// // //         break;
// // //     default:
// // //         console.log(`Sorry, we are out of ${expr}.`);
// // // }

// // // let num1=prompt("Enter your number");
// // // console.log(num1);
// // // if (num1%5==0){
// // //     console.log(num1, "is the multiple of 5");
// // // }

// // // let score = parseInt(prompt("Enter the score"), 10); // Convert input to an integer

// // // if (score >= 80 && score <= 100) {
// // //     console.log("Grade is A");
// // // } else if (score >= 70 && score <= 89) {
// // //     console.log("Grade is B");
// // // } else if (score >= 60 && score <= 69) {
// // //     console.log("Grade is C");
// // // } else if (score >= 50 && score <= 59) {
// // //     console.log("Grade is D");
// // // } else if (score >= 0 && score <= 49) {
// // //     console.log("Grade is F");
// // // } else {
// // //     console.log("Invalid score. Please enter a number between 0 and 100.");
// // // }

// // // for loop

// // for (let i=1; i<=5; i++){
// //     console.log("i=",i);
// // }

// //Calculate sum of 1 to 5

// // let sum=0;
// // let n=prompt("enter your number");
// // for (let i=1; i<=n; i++){
// //     sum=sum+i;
// // }
// // console.log("sum=",sum);
// // console.log("Loop has ended");

// // let i=1;
// // while (i<=5) {
// //     console.log("i=",i);
// //     i=i+1;  
// // }

// // let i=1;
// // do {
// //     console.log("i=",i);
// //     i++;
// // } while (i<=10);

// // for-of Loop

// // let str="ApnaCollege"
// // let size=0;

// // for (let i of str) {
// //     console.log("i=",i);
// //     size++;
// // }

// // console.log("string size=", size);

// // //for-in Loop
// // let student= {
// //     name:"rahul kumar",
// //     age:20,
// //     cgpa: 7.5,
// //     isPass: true,
// // };

// // for (let key in student){
// //     console.log("Key=", key, "value", student[key]);
// // }

// // for (let key in student){
// //     console.log("key=", key, "value", student[key]);
// // }


// // let i=0;

// // for(i=0;i<=100;i++){
// //     if (i%2==0){;
// //     console.log("num=",i);}
// // };

// // let gameNum= 25;
// // let userNum= prompt("Enter you Guess:");

// // while(userNum != gameNum){
// //     userNum= prompt("you entered wrong number, Guess again:");
// // }

// // console.log("congratulations, you entered the right number");

// //String

// // let str1="ApnaCollege";
// // let str2="Zakkhar";

// // console.log(str1.length);
// // console.log(str2[0]);

// //Template Literals

// // let obj= {
// //     item: "pen",
// //     price: 10,
// // };
// // let output=`the cost of ${obj.item} is ${obj.price} rupees`;
// // console.log(output);

// //escape chacracter

// // console.log("apna \ncollege");
// // let str= "apna\tcollege";
// // console.log(str.length);

// //string methods in JS

// // let str="zakkhar";
// // let newstr=str.toLowerCase(str);
// // console.log(newstr);

// // let str1="zakkhar  khan  JS";
// // let str2= "DTC";
// // // let newstr=str1.concat(str2);
// // // let repstr=str1.replace("zakkhar", "Zak");
// // // let slstr= str1.slice(0,7);

// //practice question

// // let full_name= prompt("enter your full name");Vb
// // // let user_name=`@${full_name}${full_name.length}`;
// // let user_name="@"+full_name+full_name.length;
// // console.log(user_name);

// //Arrays

// // let heroes=["ironman","Hulk","Thor","Batman"];
// // let marks=[96,75,48,83,66];
// // let info=["rahul",86,"delhi"];

// // for(i=0;i<=heroes.length;i++){
// //     console.log(heroes[i]);
// // }

// // for(let mark of marks){
// //     console.log(mark);
// // }
// // let sum = 0;
// // let marks = [86, 97, 44, 37, 76, 60];

// // for (let i = 0; i < marks.length; i++) {
// //     sum = marks[i] + sum;
// // }

// // let avg=sum/marks.length;
// // console.log(`Avg marks of the class is ${avg}`);

// // let items=[250,645,300,900,50];
// // let i=0;

// // for(let val of items){
// //     console.log(`value at index ${i}=${val}`);
// //     let offer=val/10;
// //     items[i]=items[i]-offer;
// //     console.log(`value after offer= ${items[i]}`);
// //     i++
// // }

// // let heroes=["ironman","Hulk","Thor","Batman"];
// // let marks = [1,2,3,4,5,6,7];
// // marks.splice(3,1);
// // console.log(marks);

// // let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// // companies.splice(2,1,"Ola");
// // companies.push("amazon");
// // console.log(companies);

// // console.log("hello!");

// // "abc".toUpperCase()
// // "xyz".toUpperCase()

// // [1,2,3].push(4);

// // function myfunction(msg,n){
// //     console.log(msg,n);
// // }
// // myfunction("Apna Colelge", 100);

// // function sum(x,y){
// //     s=x+y;
// //     return s;
// // }
// // let val=sum(4,5);
// // console.log(val);

// //sum function
// // function sum(a,b){
// //     return a+b;
// // }

// // const x = 5;

// // const arrowsum=(a,b)=>{
// //     console.log(a+b);
// // };

// // const arrowmul=(a,b)=>{
// //     console.log(a*b);
// // };

// // const printhello=()=> {
// //     console.log("Hello");
// // };


// // function countvowels(str){
// //     let count=0;
// //     for(const char of str){
// //         if (
// //            char === "a" || 
// //            char === "e" || 
// //            char === "i" || 
// //            char === "o" || 
// //            char === "u"
// //         ) {
// //           count ++
// //     }
// // }
// //     return count;
// // }

// // const countvow=(str)=>{
// //     let count=0;
// //     for (const char of str){
// //         if (
// //             char == "a" ||
// //             char === "e" || 
// //             char === "i" || 
// //             char === "o" || 
// //             char === "u"
// //         ) {
// //             count ++;
// //         }
// //     }
// //         return count;
// // };

// // let nums=[2,3,4,5,6];

// // nums.forEach((num)=>{
// //     console.log(num*num);
// // });

// // let nums=[2,3,4,5,6];

// // let newArr= nums.map((val) => {
// //    return val*2;
// // });

// // console.log(newArr);

// // let nums=[1,2,3,4,5,6];

// // let newArr= nums.filter((val)=>{
// //     return val%2===0;
// // })
// // console.log(newArr);


// // let nums=[1,2,3,4,5,6];

// // const output=nums.reduce((res, curr)=>{
// // return res+curr;
// // });

// // console.log(output);

// // let marks = [89, 72, 90, 93, 96, 99];

// // const greater = marks.filter((val) => {
// //     return val > 90;
// // });

// // console.log(greater);

// // let n = prompt("Enter a number"); // Get the input from the user
// // n = parseInt(n); // Convert the input to an integer

// // let arr = [];
// // for (let i = 1; i <= n; i++) {
// //     arr[i - 1] = i; // Fill the array with numbers from 1 to n
// // }
// // console.log(arr);

// // let sum = arr.reduce((res, curr) => {
// //     return res + curr; // Accumulate the sum of array elements
// // }); // Start the initial value of the accumulator as 0

// // console.log(sum); // Print the total sum

// // let product=arr.reduce((res, curr)=>{
// //     return res*curr;
// // });

// // console.log(product);

// // console.dir(document.body);
// // console.log(document.body);

// // let headings=document.getElementsByClassName("heading-class");
// // console.dir(heading);
// // console.log(heading);

// // let elments=document.querySelector(".myheading-class")
// // console.dir(elements);

// // let h2=document.querySelector("h2");
// // console.dir(h2.innerText);
// // h2.innerText=h2.innerText+" from Zakkhar";

// // let para=document.querySelector("div");
// // console.log(para.setAttribute("class","newClass"));

// let newBtn= document.createElement("button");
// newBtn.innerText="clickme";
// console.log(newBtn);

// let div=document.querySelector("div");
// div.append(newBtn);

// let newHeading=document.createElement("h1")
// newHeading.innerHTML="<i>I'm new</i>";

// document.querySelector("body").prepend(newHeading);



// create a Button
// let newBtn=document.createElement("button");
// newBtn.innerText="click me";
// newBtn.style.color="white";
// newBtn.style.backgroundColor="red";

// document.querySelector("body").prepend(newBtn);


//Q2
// let btn1=document.querySelector("#btn1");

// btn1.onclick=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientx, evt.clienty);
// };

// btn1.addEventListener("click", ()=>{
//     console.log("button1 was clicked");
// });

// let modebtn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let currmode = "light";

// modebtn.addEventListener("click", () => {
//     if (currmode === "light") {
//         currmode = "dark";
//         body.classList.remove("light");
//         body.classList.add("dark");
//     } else {
//         currmode = "light";
//         body.classList.remove("dark");
//         body.classList.add("light");
//     }
//     console.log(currmode);
// });

//ROCK PAPER SCISSOR

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});





