// // hello

// let firstVariable;

// firstVariable = 'Hello World!';

// console.log(firstVariable);

// // let userName = 'Natalia';

// // console.log(userName);

// let wight;

// wight = 77;

// console.log('wight', wight);

// let height;

// height = wight;

// console.log('height', height);

// const number = 12; 

// console.log('type of number', typeof number, number);

// const string = 'Hello!';

// console.log('type of string', typeof string, string);

// // Home work-2

// let userName = 'Diana';
// let userSurname = 'Amazon';
// let userAge = '30';
// console.log(userName, userSurname, userAge, 'years old');

// let newUser = 'KingArthur';
// var onlineUser = 'Merlin';
// console.log(newUser, onlineUser);

// let listProducts = 'Dress, Shoes, Jeans, T-shirt, Sneakers'
// console.log(listProducts);

// let employeeSalary = 5000000;
// let salary = '77000000 £ GBP';
// console.log('your salary', employeeSalary, 'mine salary', salary);

// let leftMouse = 55;
// console.log('x=', leftMouse, 'px');

// let topMouse = 77;
// console.log('y=', topMouse, 'px');

// let z_indexMouse = 2;
// console.log('z-index =', z_indexMouse)

// Home work-3 
// 1
// alert('Hello!');

// alert(5577);

// 2
// const message = 'Happy New life!';
// alert(message);

// // 3
// const userMage = prompt('What is your name?');
// console.log('userMage', userMage)

// alert('Hello ' + userMage + '!');

// // 4
// let userMoneyAmount = 77777;

// const amountToAdd = Number(prompt('How much to add ?'));
// userMoneyAmount = userMoneyAmount + amountToAdd;

// alert('Now in your wallet:' + userMoneyAmount);

// // 5

// const isAdmin = confirm('Are you admin?');
// console.log('isAdmin', isAdmin);

// if (isAdmin) {
//     alert('Welcome!');
// }

// // 5,5

// const userNikName = prompt('What is your name?');
// const usersAge = prompt('How old are you?')

// const isConfirmed = confirm(
//     `Are you really ${userNikName}, ${usersAge} years old`
// );

// if (isConfirmed) {
//     alert('Your data saved!')
// }
// Home-work3
// t1
const number1 = Number(prompt("Введіть значення числа 1"));
const number2 = Number(prompt("Введіть значення числа 2"));

if (number1 > number2){
    alert("Число " + number1 + " більше ніж число " + number2);
} else if(number1 < number2){
    alert("Число " + number1 + " менше ніж число " + number2);
} else if(number1 === number2){
    alert("Числа " + number1 + " та " + number2 + " рівні");
}
   
// t2

alert("Calculator");

const numb1 = Number(prompt("Enter first number"));
const act = prompt("Enter action (+ - * /)");
const numb2 = Number(prompt("Enter second number"));

switch (act) {
    case "+":
        alert(numb1 + numb2)
        break;

    case "-":
        alert(numb1 - numb2)
        break;

    case "*":
        alert(numb1 * numb2)
        break;

    case "/":
        alert(numb1 / numb2)
        break;
}

// t3

alert("Access to roller coasters")

let permission = confirm("Have you permission?");
let userAgeM = Number(prompt("Please, enter your age"));

if(userAgeM >= 18 && userAgeM <= 60){
    alert("Welcome");
} else if(userAgeM < 12){
    alert("Entry denied!");
} else if (userAgeM > 80){
   alert("This is dangerous for you. Entry denied!");
} else if(userAgeM < 18 && userAgeM >=12){
     alert("Submit your permit and welcome with your parents!");
} else if(userAgeM < 80 && userAgeM > 60){
    alert("Enter your permit and welcome");
}




