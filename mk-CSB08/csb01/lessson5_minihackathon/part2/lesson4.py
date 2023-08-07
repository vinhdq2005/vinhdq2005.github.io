# Viết chương trình dùng turtle vẽ một hình đa giác, đa giác này có số cạnh do người dùng nhập vào.
import turtle
print("Input number of edges: ", end="")
edges = int(input())
for i in range(edges):
    turtle.forward(100)
    turtle.right(360/edges)
    turtle.done