`
1 - Object.create()         ---------> create with prototype
2 - Object.assign()         ---------> merge objects
3 - Object.fromEntries()    ---------> array → object

4 - Object.keys(obj)        ---------> keys
5 - Object.values(obj)      ---------> values
6 - Object.entries(obj)     ---------> [key,value]

7 - Object.freeze()         ---------> immutable
8 - Object.seal()           ---------> no add/remove
9 - Object.preventExtensions() ------> no add/remove

10- Object.hasOwn()         ---------> check own property
11- Object.is()             ---------> safe comparison
`
// 1 - Object.create() 
const person = {
    greet() {
        console.log("Hello");
    }
};

const user = Object.create(person);
user.name = "Shubham";

// user.greet(); // Output: Hello

// 2 - Object.assign()
const obj1 = { a: 1 };
const obj2 = { b: 2 };

const result = Object.assign({}, obj1, obj2);

// console.log(result); // Output: { a: 1, b: 2 }

// 3 - Object.fromEntries()
const entries = [
    ["name", "Shubham"],
    ["age", 25]
];

const obj_1 = Object.fromEntries(entries);

console.log(obj_1); // Output: { name: 'Shubham', age: 25 }

// 4 - Object.keys(obj)
const obj_2 = { a: 1, b: 2 };

console.log(Object.keys(obj_2)); // Output: ['a', 'b']

// 5 - Object.values(obj)
const obj_3 = { a: 1, b: 2 };
console.log(Object.values(obj_3)); // Output: [1, 2]

// 6 - Object.entries(obj)
const obj_4 = { a: 1, b: 2 };
console.log(Object.entries(obj_4)); // Output: [['a', 1], ['b', 2]]

// 7 - Object.freeze()
const obj_5 = { a: 1 };
Object.freeze(obj_5);

obj_5.a = 2; // This will not change the value of 'a'
console.log(obj_5.a); // Output: 1

// 8 - Object.seal()
const obj_6 = { a: 1 };
Object.seal(obj_6);
obj_6.a = 2; // This will change the value of 'a'
obj_6.b = 3; // This will not add a new property 'b'
console.log(obj_6); // Output: { a: 2 }

// 9 - Object.preventExtensions()
const obj_7 = { a: 1 };
Object.preventExtensions(obj_7);
obj_7.a = 2; // This will change the value of 'a'
obj_7.b = 3; // This will not add a new property 'b'
console.log(obj_7); // Output: { a: 2 }

// 10 - Object.hasOwn()
const obj_8 = { a: 1 };
console.log(Object.hasOwn(obj_8, 'a')); // Output: true
console.log(Object.hasOwn(obj_8, 'b')); // Output: false

// 11 - Object.is()
console.log(Object.is(1, 1)); // Output: true
console.log(Object.is(1, '1')); // Output: false
console.log(Object.is(NaN, NaN)); // Output: true

