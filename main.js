//& Question 1 :
function oneToten() {
    let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for (let i = 0; i < num.length; i++) {
        let count = num[i];
        if (!(count % 3 == 0)) {
            console.log(count);
        }
    }
}
// oneToten()

//****************************************************************/

//& Question 2 :
function handred() {
    let num = 0;
    let i = 0;
    while (i <= 100) {
        num += i
        i++
    }
    console.log(num);
}
// handred()

//****************************************************************/

//& Question 3 :
function array() {
    let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    num.forEach(element => {
        console.log(element);
    });
}
// array()

//****************************************************************/

//& Question 4 :
/*forEach Only with array*/
function each() {
    let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    num.forEach(element => {
        console.log(element);
    });
}
// each()
/*forOf with any iterable*/
function of() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (const nums of array) {
        console.log(nums);
    }
}
// of()
//****************************************************************/

//& Question 5 :
function info() {
    const person = {
        name: 'magdy Mohamed',
        age: 21,
        occupation: 'Front-end Developer',
    }
    const { name, age, occupation } = person
    console.log(`my name is ${name}, i'm ${age} years old and i'm a ${occupation}`);
}
// info();

//****************************************************************/

//& Question 6 :
function arrays() {
    let arr1 = [1, 2, 3, 4, 5]
    let arr2 = [6, 7, 8, 9, 10]
    console.log(...arr1, ...arr2);
}
// arrays()

//****************************************************************/

//& Question 7 :
function add(a, b) {
    let z = a + b;
    console.log(z);
    return a, b;
}
// add(5, 3)

//****************************************************************/

//& Question 8 :
// primitive data
function primitive() {
    let a = 5;
    let b = a;
    a = 10;
    console.log(a);
    console.log(b);
}
// primitive();

// non-primitive data
function nonPrimitive() {
    let a = [1, 2, 3];
    let b = a;
    a.push(4);
    console.log(a);
    console.log(b);
}
// nonPrimitive();

//****************************************************************/

//& Question 9 :
//housing
function housing() {
    let house = {
        name: "House",
        price: 1000000,
        location: "New York",
    }
    console.log(house);
    house.price = 2000000;
    house.location = "Cairo";
    console.log(house);
}
// housing();
//(TDZ)
function Ture() {
    let x = 10;
    console.log(x);
}
// Ture()

function False() {
    console.log(x);
    let x = 10;
}
// False()

//****************************************************************/

//& Question 10 :
function counter() {
    let count = 0;
    return function () {
        count += 1;
        return count;
    }
}
function num() {
    let counter1 = counter();
    console.log("counter1", counter1());
    console.log("counter2", counter1());
    console.log("counter3", counter1());
    console.log("counter4", counter1());
    console.log("counter5", counter1());
}
// num()
//****************************************************************/

//& Question 11 :
function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise!");
        }, 3000);
    });
}
// promise().then((message) => {
//     console.log(message);
// });
//****************************************************************/

//& Question 12 :
async function async() {
    const res = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise!");
        }, 3000);
    });
    return res
}
// async().then((message) => {
//     console.log(message);
// });
//****************************************************************/

//& Question 13 :
function promise() {
    return new Promise((resolve, reject) => {
        let num = +window.prompt("Enter a number: ", "");
        if (num > 5) {
            resolve("Greater than 5");
        } else {
            reject("Less than 5");
        }
    });
}
//     promise().then((message) => {
//     console.log(message);
// });
//****************************************************************/

//& Question 14 :
function multipulChain() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("One");
        }, 1000);
    });
}
function second() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Two");
        }, 2000);
    });
}
function third() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Three");
        }, 3000);
    });
}
// multipulChain().then((message) => {
//     console.log(message);
//     second().then((message) => {
//         console.log(message);
//         third().then((message) => {
//             console.log(message);
//         });
//     });
// });
//****************************************************************/

//& Question 15 :
async function multipulChain() {
    try {
        const message1 = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("One");
            }, 1000);
        });
        console.log(message1);
        const message2 = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Two");
            }, 2000);
        });
        console.log(message2);
        const message3 = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Three");
            }, 3000)
        })
        console.log(message3);
    } catch (error) {
        console.log(error, "error");
    }
}
// multipulChain();

