// let character: string;
// let age: number;
// let isLoggedIn: boolean;


// let devs: string[] = []
// devs.push('Pelumi')


// let mixed: (string | number | boolean)[] = [];
// mixed.push('Pelumi')
// mixed.push(50)
// mixed.push(true);
// console.log(mixed);

// let uid: string|number;
// uid = 'Kayode'
// uid = 30

// // Objects
// let ninjaOne: object;
// ninjaOne = {name: 'Pelumi', age: 30};

// let ninjaTwo: {
//     name: string,
//     age: number,
//     beltColor: string
// }

// ninjaTwo = {name: 'Farmo', age: 30, beltColor: 'black'}




// Any'

// let age: any = 25;

// age = true
// console.log(age)
// age = 'Hello World'
// console.log(age)
// age = { name: 'Kayode' }
// console.log(age)

// let mixed: any[] = [];

// mixed.push(5)
// mixed.push('Titilope')
// mixed.push(false)

// console.log(mixed);

// let ninja: { name: any, age: any }

// ninja = { name: 'Pelumi', age: 30 }

// console.log(ninja);

// ninja = { name: false, age: '30' }

// console.log(ninja); 


// let greet: Function;

// greet = () => {
//     console.log('Hello Again World')
// }

// greet()

// const add = (a: number, b: number, c?: number | string) => {
//     console.log(a + b)
//     console.log(c);
// }

// add(5, 5)

// const minus = (a: number, b: number) => {
//     return a - b
// }

// let result = minus(10, 5)

// console.log(result);  


// type StringorNum = string | number;
// type objWithName = { name: string, uid: StringorNum }


// const logDetails = (uid: StringorNum, item: string) => {
//     console.log(`${item} has an uid of ${uid}`)
// }

// const greet = (user: objWithName) => {
//     console.log(`${user.name} says hello to you`)
// } 


// example 1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

// example 2
let calc: (a: number, b: number, c: string) => number

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'Add') {
        return numOne + numTwo
    } else {
        return numOne - numTwo
    }
}

// example 3
let logDetails: (obj: { name: string, age: number }) => void;

logDetails = (devs: { name: string, age: number }) => {
    console.log(`${devs.name} is ${devs.age} years old`)
}