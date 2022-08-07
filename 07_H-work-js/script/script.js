// home-work-7
//  t- 1

const makeTimeList = () => {
    let end = false;

    const timeList = {};

    do{
        let userTime = prompt("Add time:");
        let userEvent = prompt("Add event:");

        if (!userTime || !userEvent){
            end = true
        }else{
            timeList[userTime] = userEvent
            alert("Event added")
        }
    }while(!end)

    return timeList
}

let timeMaker = makeTimeList();

console.log(timeMaker);


// t2

const salaries = {
    director: 3200,
    manager: 2800,
    coach: 2200,
    junior: 1800,
  };
  
  const getSalariesTotal = (salaries) => {
    let total = 0;
    for (let employee in salaries) {
      console.log(`employee`, employee);
      console.log(`salaries[employee]`, salaries[employee])
      total += salaries[employee];
    }
  
    return total;
  };
  
  
  const totalResult = getSalariesTotal(salaries);
  console.log(`totalResult`, totalResult)

// МЕТОДЫ ОБЪЕКТА

// const dog = {
//     name: "Rex",
//     voice: function () {
//       console.log("woof!");
//     },
//     answer: function () {
//       alert("Hi Rex!");
//     },
//   };
  
//   const cat = {
//     name: "Kitty",
//     voice: function () {
//       console.log("meow!");
//     },
//     answer: function () {
//       alert("Hi Kitty!");
//     },
//   };
  
//   const human = {
//     name: "Jack",
//     voice: function () {
//       console.log("Hello");
//     },
//     answer: function () {
//       alert("Hi human!");
//     },
//   }
  
//   cat.voice();
//   dog.voice();
//   human.voice();
//   human.answer();
//   cat.answer();
//   dog.answer();