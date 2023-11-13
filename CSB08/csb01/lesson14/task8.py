print("Input a number: ", end="")
inp_num = int(input())

num1 = 1
num2 = 1
print("First", inp_num, "Fibonacci numbers:", num1, num2, end=" ")
for i in range(2, inp_num):
    fibonacci = num1 + num2
    num1 = num2
    num2 = fibonacci
    print(fibonacci, end=" ")
print(fibonacci)