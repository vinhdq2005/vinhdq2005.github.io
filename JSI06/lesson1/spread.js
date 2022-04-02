// apread
arr = [1, 2, 3, 4, 5]
arr2 = [...arr, 6, 7]

console.log(arr);

arr2[3] = 10
console.log("arr2 after change:", arr2);
console.log(arr);

obj1 = {
    name: "Do Quang Vinh",
    age: "12"
}

obj2 = {
    age: "17",
    address: "Hn"
}

obj = {...obj1, ...obj2}
console.log(obj);

// destructuring
let {name, age, address} = obj
console.log(name);