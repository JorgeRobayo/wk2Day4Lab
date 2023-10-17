// 1.   Write an function that contains an if/else statement for the following requirements:
// - If student gets 80 or higher: console log  You did a good job
// - If students get 70 or above: console log Keep trying
// - If students get 60 or above: console log ehhhh
// - If students get 55 or above: console log Not to good
// // - Any grade lower than 55 is Bad Grade But You'll Get Em Next Time

//=====================================SOLUTIONS=========================================

// function functionGrade(grade){
//     if (grade >= 80){
//         console.log(" You did a good job")
//     }
//     else if(grade >= 70){
//         console.log(" keep trying")
//     }
//     else if(grade >= 60){
//         console.log(" Ehhhh")
//     }
//     else if(grade >= 55){
//         console.log(" Not good")
//     }
//     else if(grade < 55){
//         console.log(" Bad grade but you will get em next time")
//     }
// }
//     functionGrade(25)

//================================================================

// 2.   Write a function that prints out multiples of 10 up to a given input (argument)

// ============================SOLUTIONS=============================

// function multiplesOf10(givenInput){
//     for(let i = 10; i <= givenInput; i += 10)
//     console.log(i)
// }

// multiplesOf10(50)

// =====================================================================

// 3.   Write a function that takes bill amount and item price and says how many quarters they'd get in return
// bill amount and the price of the product 

// ===============================SOLUTIONS================================
//Not sure if it is the correct answer but it works lol

// function quarters (billAmount, itemPrice){
//     let exchange = billAmount - itemPrice
//     let change = ((exchange - Math.floor(exchange)) / 0.25)
//     console.log(change)
//     console.log(exchange)
// }

// quarters(50, 20.25)

// ==============================================================================

//4.    Write a function that prints out how many bills you would recieve in change after paying a certain amount.  
// Return in as large denominations as possible. Parameters should be amount paid and amount cost

// ===================================SOLUTIONS=================================

function billReturn (amountPaid, amountCost){
    // let billDenomination = [100, 50, 20, 10, 5, 1]
    let difference = (amountPaid - amountCost)
    let tenBills = (Math.floor(difference/10));
    difference %= 10;
    let fiveBills = (Math.floor(difference / 5));
    let oneBills = difference;
    console.log("$10 bills " + tenBills)
    console.log("$5 bills " + fiveBills)
    console.log("$1 bills " + oneBills)
}

billReturn(1000, 60)

//=======================================================================

// 5.   Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// =============================SOLUTIONS================================

// This solution works but prints numbers twice beacuse code repeats issue might be "i" as a parameter.
// function fizzBuzz (i){
//     for (let i = 1; i <= 100; i ++ ){
//         if (i % 3 == 0) console.log(i +" Fizz");
//         else if (i % 5 == 0) console.log(i + " Buzz");
//         else (i % 3 == 0 && i % 5 == 0); console.log(i + " FizzBuzz");
//     // console.log(i)
// }
//  }

//  fizzBuzz(100)

// similar issue but  doesnt repeat Fizz and Buzz for repeated numbers, only prints number instead
// function fizzBuzz (limit){
//         for (let i = 1; i <= limit; i ++ ){
//             if (i % 3 == 0 && i % 5 == 0); console.log(i + " FizzBuzz");
//             if (i % 3 == 0) console.log(i +" Fizz");
//             else if (i % 5 == 0) console.log(i + " Buzz");
//             else console.log(i)
//     }
//      }
    
//      fizzBuzz(100)

// Numbers repeat but there is an explanation instead
// function fizzBuzz(limit) {
//     for (let i = 1; i <= limit; i++) {
//         if (i % 3 == 0 && i % 5 == 0); console.log(i + " FizzBuzz");
//         if (i % 3 == 0) console.log(i + " Fizz");
//         else if (i % 5 == 0) console.log(i + " Buzz");
//         else console.log(i + " both divisible by 5 and 3")
//     }
// }

// fizzBuzz(100)


