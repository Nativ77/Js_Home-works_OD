// h_work-09

// t-1

const data = [
    {
      name: "John",
      age: 24,
      position: "senior",
      isActive: false,
    },
    {
      name: "Peter",
      age: 33,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sam",
      age: 29,
      position: "junior",
      isActive: true,
    },
    {
      name: "Mary",
      age: 24,
      position: "middle",
      isActive: false,
    },
    {
      name: "Steve",
      age: 23,
      position: "middle",
      isActive: true,
    },
    {
      name: "Kate",
      age: 31,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sally",
      age: 19,
      position: "junior",
      isActive: false,
    },
    {
      name: "Jack",
      age: 19,
      position: "middle",
      isActive: true,
    },
    {
      name: "Ann",
      age: 19,
      position: "middle",
      isActive: true,
    }
  ];

  const filterData = (dataArray, objectToFilter) => {
    let result = dataArray.filter(item => {

        // console.log('keys:', Object.keys(objectToFilter))

        return Object.keys(objectToFilter).every(key => {

            return item[key] === objectToFilter[key]
        })
    });
    return result;
  }

let resFiltered = filterData(data, {age: 19, position: 'middle'})
// let resFiltered = filterData(data, { age: 23 });
// let resFiltered = filterData(data, { age: 24 });

  console.log(resFiltered);

  //t-2

const isNegative = (number) => number < 0;
const increment = (number) => number + 1;
const logger = (element, index, array) => {
  console.log(`In array [${array}] on position ${index}: ${element}`);
};

const ownForEach = (arr, logger) => {

    for(let num of arr){
        logger(num, arr.indexOf(num), arr) 
    }
}

ownForEach([1, 2, 3], logger)

// let arr = [1, 2, 3]
// let test1 = arr.forEach((num) => logger(num, arr.indexOf(num), arr))

const ownMap =(arr, increment) => {
    let arrClone = []

    for(let num of arr){
        arrClone.push(increment(num))
    }
return arrClone

}

let resOwnMap = ownMap([1, 2, 3], increment)
console.log(resOwnMap);

// let arr2 = [1, 2, 3];
// let test2 = arr2.map((num) => increment(num))
// console.log(test2)

const ownFilter = (arr, isNegative) => {
    let arrClone = []

    for(let num of arr){

        if(isNegative(num) === true){
            
            arrClone.push(num)
        }

    }

    return arrClone
} 

let resOwnFilter = ownFilter([-2, 4, -1], isNegative);
console.log(resOwnFilter)

// let arr3 = [-2, 4, -1];
// let test3 = arr3.filter((num) => isNegative(num))