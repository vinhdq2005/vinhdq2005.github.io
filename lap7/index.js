// Bài 1
let a = prompt("sô bạn muốn: ")
let b = ""

for (i = 1; i <= a; i++) {
    for (k = 0; k <= a-i; k++) {
        b += " "
    }

    for (j = 1; j <= i*2-1; j++) {
        b += "*"
    }
    b += "\n"
}

console.log(b);

// Bài 2
let myArray = [9,7,9,0,7,8,378,123,546]

for (i = 0; i < myArray.length; i++) {
    if (myArray[i]%2==0 && myArray[i]==0) {
        console.log(myArray[i]+" so chan va bang khong");
    } if (myArray[i]==0) {
        console.log(myArray[i]+" bang 0");
    } if (myArray[i]%2==0) {
        console.log(myArray[i]+" la so chan");
    } else {
        console.log(myArray[i]+" k phai la so chan");
    }
}

// Bài 3

let myAnswer = []

let c = prompt("Bạn đã ăn cơm chưa: ")
if (c == "yes" ) {
    e = prompt("Bạn ăn có no không: ")
    myAnswer.push("bạn đã ăn sáng")
    if (e == "yes") {
        alert("oke")
        myAnswer.push(" và bạn cảm thấy no rồi")
    } if (e == "no") {
        f = prompt("Bạn có muốn ăn gì thêm không: ")
        myAnswer.push(" nhưng bạn chưa no (ăn gì mà lắm thế)")
        if (f == "yes") {
            alert("muốn thì tự xuống bếp mà làm")
            myAnswer.push(" sau đó bạn tự mò xuống bếp lấy đồ ăn")
        } if (f == "no") {
            alert("không ăn thì thôi")
            myAnswer.push(" nhưng bạn lười nên không muốn ăn nữa")
        }

    }
} if (c == "no") {
    d = prompt("Bạn có muốn ăn sườn không: ")
    myAnswer.push("Bạn chưa ăn sáng")
    if (d == "yes") {
        alert("Có làm thì mới có ăn, không làm mà đòi có ăn thì...")
        myAnswer.push(" bạn muốn ăn nhưng mà lười nên không nấu")
    } if (d == "no") {
        alert("không ăn thì cút")
        myAnswer.push(" bạn không muốn ăn")
    }
}

alert(myAnswer)
