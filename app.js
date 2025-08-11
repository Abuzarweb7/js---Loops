// Q1


// let arr = ["apple", "banana", "cherry"]
// for(let i = 0; i < arr.length;i++){
//     console.log(arr [i]);
// }

// Q2

// let output = document.querySelector("#output");
// let arrColors = ["red", "green", "blue"];
// for(let i = 0 ; i < arrColors.length; i++){
//     output.innerHTML += "<p>" + arrColors [i] + "</p>";
// }

// Q3

// for(let i = 0 ; i <=10; i++){
//     console.log(i);
// }

// Q4

// let i = 5;
// while(i>=1){
//     console.log(i);
//     i--;
// }


// Q5
// let div = document.querySelector("#names");
// let nameArr = ["Ali", "Sara", "Ahmed"];
// for(let i = 0 ; i <nameArr.length;i++){
//     div.innerHTML += "<span>" +  " , "  + nameArr[i] + "</span>"
// }

// Q6

// let status =document.querySelector("#status");
// status.innerHTML = ""Loading...";



// Q7

// let sumArr = [5, 10, 15]
// let sumNum = 0;
// let sum = document.querySelector("#sum");
// for(let i = 0 ; i <sumArr.length; i++){
//     sum.innerHTML = sumNum += sumArr[i];
// }


// Q8
    // let divCities= document.querySelector("#cities");
    // let cities =["Karachi", "Lahore", "Quetta"]
   
    // for(let i =0; i<cities.length;i++){
    //     divCities.innerHTML = cities.join(" , ");
    // }


    //Q9
//    for(let i = 1 ; i<=20 ;i++){
//     if(i%2 === 0){
//         console.log(i + "is Even")
//     }
//    }


// Q10
// let max = document.querySelector("#max");
// let maxNum = 0
// let arrNum =[45, 22, 89, 100]
// for(let i =0; i<arrNum.length;i++){
//    max.innerHTML = maxNum = arrNum[i]
// }


// Q11


// let result = document.querySelector("#result");
// result.innerHTML = "Task Completed"

// Q12


// let averageTemp= document.querySelector("#averageTemp");
// let temprature = [30, 35, 32, 40];
// let sumTemp = 0
// for(let i = 0 ; i<temprature.length;i++ ){
// averageTemp.innerHTML = sumTemp += temprature[i];
// averageTemp.innerHTML = sumTemp / temprature.length + "%"
// }



// Q13
// let totalSum =document.querySelector("#totalSum");
// let sum = 0


// for(let i = 0 ; i<=100 ; i++){
//     totalSum.innerHTML= sum += i;
// }


// Q14
// let animal = document.querySelector("#animal");
// let animalArr = ["dog", "cat", "bird"];

//     animal.innerHTML = animalArr.join(" , ");

// Q15

// let title = document.querySelector("#title");
// title.innerHTML = "Welcome to JavaScript!";


// Q16


// for(let i = 1 ; i<=50 ;i++){
//     if(i%5 === 0){
// console.log(i)
//     }
// }

// Q17
// let scores = [80, 60, 90, 70];
// let highScores = document.querySelector("#highScores");
// for(let i = 0 ; i< scores.length;i++){
//     if(scores [i] >75){
//     highScores.innerHTML += scores[i]
//     }
// }

// Q18

// let message = document.querySelector("#message");
// message.innerHTML = "Updated successfully !";


// Q19



// let subjectsList = document.querySelector("#subjectsList");
// let subject = ["Math", "Science", "English"]
// for(let i = 0 ;i<subject.length;i++){
// subjectsList.innerHTML  = subject.join(" , ");
// }

// Q20

// let arrNum =[5, 10, 15, 20];
// let sum = 0
//     for(let i = 0 ; i <arrNum.length ; i++){
//          sum += arrNum[i];
      
//     }
//       console.log(sum)


// Q21

// let arr =[45, 67, 12, 89, 34];

// let max = arr[0]
// for(let i = 0;i<arr.length;i++){

// if(arr[i]>max){
//     max = arr[i]
 
// }

// }

//    console.log(max);





// Q22

// let arrEven = [3, 8, 6, 1, 9, 2];
// for(let i = 0;i<arrEven.length; i++){
//     if(arrEven[i]%2 === 0){
//         console.log(arrEven[i]);
//     }
// }

// Q23

// let arrSum =[20, 30, 40, 50];
// let sum = 0 ;
// for(let i = 0 ; i<arrSum.length;i++){
//     sum += arrSum[i]
// }
// console.log(sum);   


// Q24
// let arrMultiply =[2, 4, 6, 8, 10]
// let mulitply =[];
// for(let i = 0 ;i<arrMultiply.length; i++){
// mulitply.push(arrMultiply[i]*3);
// }
// console.log(mulitply);



// Q25
// let greaterNum =[1, 3, 5, 7, 9];
// for(let i = 0 ;i<greaterNum.length;i++){
//     if(greaterNum[i]>4){
//         console.log(greaterNum[i]);
//     }
// } 

// Q26
// let devisableNum =[10, 15, 20, 25, 30]
// for(let i =0 ; i<devisableNum.length; i++){
//     if(devisableNum[i]%5 === 0){
//         console.log(devisableNum[i]);
//     }
// }


// Q27


    // let arrNum =[10, 20, 30, 40, 25]
    // for(let i = 0; i<arrNum.length; i++){
    //     if(arrNum[i] === 25){
    //         console.log(`yes this is ${arrNum[i]} in array `);
    //     }
        
    // }
 









// Q28

// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]
// let arr3 = [];
// for(let i = 0 ;i<arr1.length; i++){
//     arr3.push(arr1[i] + arr2[i])
// }
// console.log(arr3);

// Q29


// let numbers = [10, 99, 23, 87, 56];
// let maxNum = 0;
// let secondLargerNum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > maxNum) {
//     secondLargerNum = maxNum;
//     maxNum = numbers[i];
//   } else if (numbers[i] > secondLargerNum && numbers[i] < maxNum) {
//     secondLargerNum = numbers[i];
//   }

// }
// console.log(secondLargerNum);





// Q30


// let arrReverse = [1, 2, 3, 4, 5];
// for(let i = arrReverse.length -1 ;i>= 0 ; i--){
//     console.log(arrReverse[i]);
// } 





// Q31


// for (let i = 2; i <= 50; i++) {
//   let primeNum = true;
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (primeNum) {
//     console.log(i);
//   }  
// }
// Q32

// let arrNumbar = [11, 4, 99, 2, 47];
// let smallerNum = arrNumbar[0];
// let largestNum =arrNumbar[0];
// let largerAndSmaller = 0;
// for(let i = 0; i<arrNumbar.length; i++){

//     if(arrNumbar[i] <smallerNum){
//     smallerNum = arrNumbar[i];
// }
// else if(arrNumbar[i] < largestNum){
// largestNum = arrNumbar[i];
// }

// }
// largerAndSmaller =largestNum-smallerNum;
// console.log(largerAndSmaller);










// Q33



// let arrNums = [0, -1, -5, 6, 8, -3];
// for(let i = 0; i<arrNums.length; i++){
//     if(arrNums[i] < 0 ){
//         console.log(`negative num ${arrNums[i]}`);
//     }
// }





// Q34


// let nums = [1,2,4,6,9,11,17,14,23,28,30]
// for(let i = 0;i<nums.length; i++){
//     if(nums[i]%2 === 1){
//         console.log(`${nums[i]} is Odd`);
//     }
   
// }


// Q35
// let arrNums = [0, 1, 0, 3, 0, 5]
// for(let i = 0; i<arrNums.length; i++){
//     if(arrNums[i] > 0 ){
//         console.log(`Non Zero  nums  ${arrNums[i]}`);
//     }
// }




// Q36


// let arrNums = [1, 2, 3, 4, 5, 6];


// for(let i =0; i<arrNums.length;i++){
//     if(i === 0){
//         let temp = arrNums[i]
//         arrNums[i] = arrNums[arrNums.length -1] 
//         arrNums[arrNums.length -1] = temp
//        console.log(arrNums);

//     }
// }


// for(let i =0 )






// Q37

// let evenNums = [2, 4, 6, 8];
// for(let i = 0; i<evenNums.length ;i++){
//     if(evenNums[i]%2 === 0 ){
//         console.log(` Even Number ${evenNums[i]}`);
//     }
// }


// Q38
// let arr = [5, 10, 15, 20, 25];
// let sum = 0
// let count = 0;
// for(let i = 0; i<arr.length;i++){

//  sum +=arr[i];
//  }
//   let avarge = sum/arr.length
//  for(let i = 0; i<arr.length;i++){
// if(arr[i] >= avarge){
//     count++;
// }
//  }

// console.log(avarge);





// Q39

// const nums = [2, 2, 2, 2, 2];
// let allEqualNums = true;
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] !== nums[0]) {
//     allEqualNums = false;
//     break;
//   }
// }
// console.log(allEqualNums);