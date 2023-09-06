# Viết chương trình cho người dùng nhập vào một số rồi in ra cho biết số này có phải là số chẵn hay không
print("Input a number: ", end="")
number = int(input())
if number % 2 == 0:
    print("This number is even")
else:
    print("This number is not even")