// a = prompt("Nhập tuổi của bạn: ");

// if (a < 18) {
//   console.log("Bạn là trẻ con");
// } else if (a <= 30) {
//   console.log("Bạn là người lớn");
// } else {
//   console.log("Bạn là đã già");
// }

function hoatDong(day) {
    console.log("Thứ: " + day);
    console.log("Đánh răng");
    console.log("Ăn sáng");
    console.log("Học");
}

hoatDong(2)
hoatDong(3)
hoatDong(4)

function tinhHieu(a,b) {
    console.log(`Hiệu của ${a} trừ ${b} là ${a-b}`);
}

tinhHieu(5,10)

function tinhTich(a,b) {
    console.log(`Tích của ${a} nhân ${b} là ${a*b}`);
}

tinhTich(5,0)

function tinhThuong(a,b) {
    if (b==0) {
        console.log("Không thỏa mãn");
    } else {
        console.log(`Thương của ${a} chia ${b} là ${a/b}`);
    }
}

tinhThuong(15,2)