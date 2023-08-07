# Viết chương trình in ra một dãy số từ 0 đến n, n > 0 do người dùng nhập vào.
print("Input a number: ", end="")
number = int(input())
if number > 0:
    for i in range(0, number+1):
        print(i)
else:
    print("khong thoa man")