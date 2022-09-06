// home-work-8
//  t- 1


// countTrue([true, false, false, true, false]); // -> 2
// countTrue([false, false, false, false]); // -> 0
// countTrue([]); // -> 0

const countTrue = (value) => {
    const res = [];

    for (let findTrue of value){

        if (findTrue === true){
            res.push(findTrue)
        }
    }

    return res.length
}

const finalResult = countTrue([true, false, false, true, false]);
// const finalResult = countTrue([false, false, false, false]);
// const finalResult = countTrue([]);

console.log('Кількість значень true в масиві:', finalResult);

//  t- 2

const getOccurrencesCount = (items) => {
    
    const occurrencesCount = {};

    for (let elem of items){

        if(!occurrencesCount[elem]){
            occurrencesCount[elem] = 1
        }else{
            occurrencesCount[elem] +=1
        }
        // console.log(occurrencesCount);
    }

    return occurrencesCount;
}

// const showResult = getOccurrencesCount(["a", "v", "a", "b", "b"]);
const showResult = getOccurrencesCount([
    "apples",
    "oranges",
    "pears",
    "pears",
    "apples",
    "oranges",
    "oranges",
    "pears",
  ]);
console.log('Кількість входжень:', showResult);


//  t-3

// findExcess([0, 1, 2]); // -> 1
// findExcess([1, 2, 3]); // -> 2
// findExcess([2, 6, 8, 10, 3]); // -> 3
// findExcess([0, 0, 3, 0, 0]); // -> 3
// findExcess([1, 1, 0, 1, 1]); // -> 0

const findExcess = (integers) => {

    let evenArray = []
    let oddArray = []
    
    for (let num of integers){

        // num % 2 == 0 ? evenArray.push(num) : oddArray.push(num)

        if(num % 2 == 0){
            evenArray.push(num) 
        }else{
            oddArray.push(num)
        }
    }

    if(evenArray.length > oddArray.length){
        return oddArray[0]
    }else{
        return evenArray[0]
    }
}

// const integer = findExcess([1, 2, 3, 5, 7])
// const integer2 = findExcess([2, 6, 8, 10, 3])
// const integer3 = findExcess([0, 1, 2])
const integer = findExcess([0, 0, 3, 0, 0]); 
const integer2 = findExcess([1, 1, 0, 1, 1]); 
console.log('Зайве число:', integer);
console.log('Зайве число:', integer2);
// console.log('Зайве число:', integer3);
