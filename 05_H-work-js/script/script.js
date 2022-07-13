//H-w-5
// t1

const LOGIN = "Marina";
const PASSWORD = "12Ari7";

const userAuth = () => {
    let userAuthEnter = false;
    let usersAttempts = 3;
        
    while (usersAttempts !== 0) {
        let userLogin = prompt("Login:");
    
        if (!userLogin) {
        alert("Enter your login:");
        continue;
        }

        let userPassword = prompt("Password:")
        if (!userPassword) {
            alert("Enter your password:");
            continue;
        }

        if (userPassword === PASSWORD && userLogin === LOGIN){
            userAuthEnter = true;
            break
        }else{
            usersAttempts--
            alert(`Username or password is incorrect. You have ${usersAttempts} attempts`)
        }
    }

    if(userAuthEnter){
        alert("Welcome!");
    }else{
        alert("The attempts are over.")
    }
};

userAuth();


// t2

const primeNumber = (num1, num2) => {
   if (num1 <= 1){
    alert("Error. Enter number more 1")
   } else{

   nextPrime:
   for (let i = num1; i <= num2; i++){

        for (let j = 2; j < i; j++){

            if (i % j ===0){
                continue nextPrime;
            }
        }
        // alert(i);
        console.log(i);
   }

   }
}
 
primeNumber(20, 100);

