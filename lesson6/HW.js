// Bài 1

let arrFood = []
let food1 = prompt("Vui lòng nhập đồ ăn 1:")
let food2 = prompt("Vui lòng nhập đồ ăn 2:")
let food3 = prompt("Vui lòng nhập đồ ăn 3:")

arrFood.push(food1, food2, food3)

console.log(arrFood);

// Bài 2

let student = {
    name: "Vinh",
    age: "16",
    class: "11A1",
    school: "Trường đời"
}

student.hobby = "Đá bóng"
delete student.school

console.log(student);

// Bài 3

for (i=0; i<20; i++) {
    console.log("hello");
}

let a = 0;
while (a<20) {
    a++;
    console.log("hello");
}

for (i=1; i<=5; i++) {
    console.log("hello" +i);
}

let b = 1;
while (b<=5) {
    b++;
    console.log("hello" +b);
}

for (i=20; i<=50; i++) {
    console.log(i);
}

for (i=10; i<=30; i=i+2) {
    console.log(i);
}

