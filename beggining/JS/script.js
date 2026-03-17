"use strict";

// alert(3
//             +1
//             +7
//         );
//         [1, 2].forEach(alert);

// let admin,  names;
//  names = "Jhon";
//  admin = names;
//  alert(admin);


//  let myHeading = document.querySelector('h1');
//  let myButton = document.querySelector("button")
//  myHeading.textContent="Hello Js World"







//  const myImage = document.querySelector('img');

//  myImage.addEventListener("click", () => {
//     const mySrc = myImage.getAttribute("src");
//      if (mySrc === "../image/download.jpg"){
//         myImage.setAttribute("src", "../image/images.jpg");
//      } else {
//        myImage.setAttribute("src", "../image/images (2).jpg");
//      }
//     });





// const setUserName = () => {
//    const myName = prompt("please enter your name");
//    localStorage.setItem("name", myName);
//    myHeading.textContent = `mozilla is cool, ${myName}`;
// }
// if(!localStorage.getItem('name')){
//    setUserName();
// } else{
//    const storedName = localStorage.getItem("name");
//   myHeading.textContent = `Mozilla is cool, ${storedName}`;
// }

// myButton.addEventListener("click", () => {
//   setUserName();
// });

// let num;
// console.log(num.value);









//  console.log('hello');
//  let person = {
//    name: 'adugna',
//    age: 25
//  };

//  console.log(person)

//  person.name="Bog"
 
//  console.log(person)

//  person['age'] = 30;

//  console.log(person)












function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);