# cau 1
# n = int(input("input number: "))
# if n % 2 == 1:
#     print(n,"is odd number")
# else:
#     print(n,"is even number")
    
# cau 2
# a = float(input("input number: "))
# b = int(a)
# if a / b != 1:
#     print(a, "is not an integer")
# else: 
#     print(a, "is an integer")

# cau 3
# n = input("input character: ")
# if n.isdigit() == True:
#     print(n, "is a digit")
# else:
#     print(n, "is not a digit")

# cau 4
# n = int(input("input number: "))
# if n % 3 == 0:
#     if n % 5 == 0:
#         print(n, "is divisible by 3 and 5")
#     else:
#         print(n, "is divisible by 3")
# elif n % 5 == 0:
#     if n % 3 != 0:
#         print(n, "is divisible by 5")
# else:
#     print(n, "is not divisible by 3 and 5")

# cau 5
# print("Welcome to The Ultimate Sercurity System")
# username = input("Username: ")
# password = input("Password: ")
# if username == "admin":
#     if password == "12345":
#         print("You are logged in, admin.")
#     else:
#         print("Wrong username or password.")
# else:
#     print("Wrong username or password.")

# cau 6
# a = int(input("Input length 1: "))
# b = int(input("Input length 2: "))
# c = int(input("Input length 3: "))
# if a + b > c and b + c > a and a + c > b:
#     print("The 3 line segments can form a triangle.")
# else:
#     print("The 3 line segments cannot form a triangle.")

# cau7
import turtle,math
a = int(input("Input length 1: "))
b = int(input("Input length 2: "))
c = int(input("Input length 3: "))
C = math.degrees(math.acos((a**2 + b**2 - c**2)/(2*a*b)))
B = math.degrees(math.acos((a**2 + c**2 - b**2)/(2*a*c)))
A = math.degrees(math.acos((c**2 + b**2 - a**2)/(2*c*b)))
print(A, B, C)
if a + b > c and b + c > a and a + c > b:
    if a**2 + b**2 == c**2 or a**2 + c**2 == b**2 or b**2 + c**2 == a**2:
        print("The 3 line segments can form a right triangle.")
        turtle.forward(a)
        turtle.right(180-C)
        turtle.forward(b)
        turtle.right(180-A)
        turtle.forward(c)
        turtle.done()
    elif a == b == c:
        print("The 3 line segments can form an equilateral triangle.")
        turtle.forward(a)
        turtle.right(180-C)
        turtle.forward(b)
        turtle.right(180-A)
        turtle.forward(c)
        turtle.done()
    else:
        print("The 3 line segments can form a triangle.")
        turtle.forward(a)
        turtle.right(180-C)
        turtle.forward(b)
        turtle.right(180-A)
        turtle.forward(c)
        turtle.done()
else:
    print("The 3 line segments cannot form a triangle.")