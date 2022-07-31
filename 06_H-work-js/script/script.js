// home-work-6
//  t-1

let userFirstName;
let userLastName; 
let userPassword;

const upperCaseString = (userString) => {
    const firstSymbolString = (userString[0]).toUpperCase();
    const symbolsString = (userString.slice(1)).toLowerCase();

    return firstSymbolString + symbolsString;
}

const userEnterName = () => {
    
    do{
        userFirstName = prompt("Enter your name:");
      
        if (!userFirstName || userFirstName.length < 2) {
        
            alert("Enter at least two lowercase character:");
       
        }else{
           
            break
        }
 
    }while(true);

    const upperCaseFirstName = upperCaseString(userFirstName)

    return upperCaseFirstName
};

const userEnterLastName = () => {
    
    do{
        userLastName = prompt("Enter your surname:");

        if (!userLastName || userLastName.length < 2) {
        alert("Enter at least two lowercase character:");
        }else{
            break
        }
 
    }while(true);

    const upperCaseLastName = upperCaseString(userLastName)

    return upperCaseLastName
};
    
const userEnterPassword = () => {

let userEnterPassword = null;

    do{
        userPassword = prompt("Create a password of at least 6 characters:")
        
        if (!userPassword || userPassword.length < 6) {

            alert("Please, enter at least 6 characters")
            
        }else if (!isNaN(userPassword) || userPassword.toLocaleLowerCase() === userPassword || (userPassword.toUpperCase === userPassword)) {
            
            alert("Password is not correct")
        
        }else{

            alert("Registration completed successfully");
            break
        }
    
    }while(true)
    return userPassword;
}

const resFirstName = userEnterName();
const resLastName = userEnterLastName();
const resPassword = userEnterPassword();

alert(`You are registered with the name: ${resFirstName} ${resLastName}
your password: ${resPassword} `)



// t 2

// let min = 3;
// let max =30;
const getRandomInteger = (min, max) => {

    return min + Math.round(Math.random(min) * (max + 1 - min));
}

const resRandom = getRandomInteger(3, 30);
console.log("Перемогу одержала команда №", resRandom);


//H-w-5
// t1

// const LOGIN = "Marina";
// const PASSWORD = "12Ari7";

// const userAuth = () => {
//     let userAuthEnter = false;
//     let usersAttempts = 3;
        
//     while (usersAttempts !== 0) {
//         let userLogin = prompt("Login:");
    
//         if (!userLogin) {
//         alert("Enter your login:");
//         continue;
//         }

//         let userPassword = prompt("Password:")
//         if (!userPassword) {
//             alert("Enter your password:");
//             continue;
//         }

//         if (userPassword === PASSWORD && userLogin === LOGIN){
//             userAuthEnter = true;
//             break
//         }else{
//             usersAttempts--
//             alert(`Username or password is incorrect. You have ${usersAttempts} attempts`)
//         }
//     }

//     if(userAuthEnter){
//         alert("Welcome!");
//     }else{
//         alert("The attempts are over.")
//     }
// };

// userAuth();


// t2

// const primeNumber = (num1, num2) => {
//    if (num1 <= 1){
//     alert("Error. Enter number more 1")
//    } else{

//    nextPrime:
//    for (let i = num1; i <= num2; i++){

//         for (let j = 2; j < i; j++){

//             if (i % j ===0){
//                 continue nextPrime;
//             }
//         }
//         // alert(i);
//         console.log(i);
//    }

//    }
// }
 
// primeNumber(20, 100);
