# Viết chương trình cho người dùng nhập vào một số rồi in ra cho biết số này có lớn hơn 13 hay không
print("Input a number: ", end="")
number = int(input())
if number <= 13:
    print("This number is not larger than 13")
else:
    print("This number is larger than 13")