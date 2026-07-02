1)Object.keys():-
let student = {name:"tejas", age:18};

console.log(Object.keys(student));

2)object.values():-
let student = {name:"tejas", age:18};

console.log(Object.values(student));

3)Object.entries():-
let student = {name:"tejas", age:18, rollno:12};

console.log(Object.entries(student));

4)Object.fromEntries():-
let arr = [["name","tejas"],["age",18]];

console.log(Object.fromEntries(arr));

5)Object.assign():-
let obj1 = {a:1};
let obj2 = {b:2};

console.log(Object.assign(obj1, obj2));

6)Object.freeze():-
let obj = {name:"Tejas"};
Object.freeze(obj);

obj.name= "aniket";
console.log(obj);

7)Object.seal():-
let student = {
    name:"tejas",
    age: 18
};
Object.seal(student);
student.age = 20;
console.log(student);
    
8)Object.hasOwn():-
let obj = {name:"tejas"};

console.log(Object.hasOwn(obj,"name"));

9)hasOwnProperty():-
let student = {
    name: "Tejas",
    age: 18
};
console.log(student.hasOwnproperty("name"));
console.log(student.hasOwnproperty("age"));

10)Object.create():-
let student = {greet(){return "hello";}};
let user= Object.create(student);

console.log(user.greet());

11)Object.getPrototypeOf():-
let student = {
    name:"Tejas",
    age:18
};
console.log(Object.getPrototypeOf(student));

12)Object.setPrototypeOf():-
let animal = {eat(){return "Eating";}};
let dog = {};

Object.setPrototypeOf(dog, animal);

console.log(dog.eat());

13)Object.is():
console.log(Object.is(9,9));

14)Object.defineProperty():-
let student = {};

Object.defineProperty(student,"name",{
  value:"Tejas"
});

console.log(student.name);

15)Object.defineProperties():-
let student = {};

Object.defineProperties(student,{
  name:{
    value:"Tejas"
  },
  age:{
    value:20
}
});

console.log(student.name);
console.log(student.age);

16)Object.getOwnPropertyNames():-
let student = {
    name:"Tejas",
    age:18
};
console.log(Object.getOwnPropertyNames(student));

17)Object.getOwnPropertySymbols():-
let id = symbol("id");

let student = {
    name:"Tejas",
    [id]:101
};
let symbols=
Object.getOwnPropertySymbols(student);
console.log(student[symbols[0]]);

18)Object.preventExtensions():-
let student = {name:"Tejas"};

Object.preventExtensions(student);
student.age = 20;

console.log(student);

19)Object.isExtensible():-
let student = {};

console.log(Object.isExtensible(student));

20)Object.isFrozen():-
let obj = {name:"Tejas"};

Object.freeze(obj);

console.log(Object.isFrozen(obj));

21)Object.isSealed():-*/
let obj = {name:"Tejas"};

Object.seal(obj);

console.log(Object.isSealed(obj));



    







