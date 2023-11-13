print("Input a number: ", end="")
inp_num = int(input())

def factorial(num):
    result = 1
    for i in range(1, num+1):
        result *= i
    print(num, "! = ", result)
factorial(inp_num)