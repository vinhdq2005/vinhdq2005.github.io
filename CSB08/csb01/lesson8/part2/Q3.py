print("Input a number: ", end="")
input_num = int(input())

def print_fibo(n):
    num1 = 1
    num2 = 1
    print("First 5 Fibonacci numbers: ", num1, num2, end=" ")
    for i in range(2, n):
        fibonacci = num1 + num2
        num1 = num2
        num2 = fibonacci
        print(fibonacci, end=" ")
        
print_fibo(input_num)