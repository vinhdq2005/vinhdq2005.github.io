# Viết chương trình cho người dùng nhập vào một số rồi dùng turtle vẽ một hình tròn có bán kính đúng bằng số mà người dùng nhập vào.
import turtle
print("Input circle's radius: ", end="")
r = int(input())
turtle.circle(r)
turtle.done()