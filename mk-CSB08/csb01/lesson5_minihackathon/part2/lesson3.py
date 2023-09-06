# Viết chương trình in ra một dãy số lẻ từ 1 đến n, n > 0 do người dùng nhập vào.
print("Input a number: ", end="")
number = int(input())
if number > 0:
    for i in range(1, number + 1,2):
        print(i)
else:
    print("khong thoa man")