# cau 2: Viết chương trình tính nghiệm của phương trình bậc hai, nhận vào 3 số a, b, c,do người dùng nhập vào, là 3 hệ số của một phương trình bậc hai (ax^2 + bx + c) và trả về nghiệm của phương trình bậc hai này.
import math
print("Phuong trinh co dang ax^2 + bx + c")
print("Nhap a: ", end="")
a = int(input())
print("Nhap b: ", end="")
b = int(input())
print("Nhap c: ", end="")
c = int(input())

delta = (b**2) - (4*a*c)
if delta < 0:
    print("Phuong trinh vo nghiem")
elif delta == 0:
    print("Phuong trinh co 2 nghiem trung nhau x1 = x2 =", -(b/2*a))
else:
    print("Phuong trinh co 2 nghiem phan biet:")
    print("x1 =", -(b-math.sqrt(delta))/(2*a))
    print("x2 =", -(b+math.sqrt(delta))/(2*a))