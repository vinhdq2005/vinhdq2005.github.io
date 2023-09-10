print("Input a number: ",end="")
num = int(input())

def check_number(a):
    if a % 2 == 0:
        return True
    return False
if check_number(num):
    print("This number is even")
else:
    print("this number is not even")