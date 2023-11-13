colors = ['red', 'blue', 'green', 'yellow']
for i in range(0, len(colors)):
    print(colors[i], end=" ")
    
# bai 1
print("\nInput position: ", end='')
position = int(input())
print("Color at position 2:", colors[position - 1])

# bai 2
print("Item to delete:", end=' ')
item_delete = input()
if item_delete.isdigit() == True:
    colors.pop(int(item_delete)-1)
else:
    colors.remove(item_delete)
for i in range(0, len(colors)):
    print(colors[i], end=" ")
    
# bai 3
import turtle
width(5)
turtle.forward(100)
turtle.done()