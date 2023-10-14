import math
print("Input a:", end="")
a = int(input())
print("Input b:", end="")
b = int(input())
print("Input c:", end="")
c = int(input())

delta = (b**2) - (4*a*c)
if delta < 0:
    print("No solution")
elif delta == 0:
    print("x1 = x2 =", end="")
    print(-b/(2*a))
else:
    print("The equation has 2 solutions.")
    print("x1 =", (-b-math.sqrt(delta))/(2*a), "x2 =", (-b+math.sqrt(delta))/(2*a))