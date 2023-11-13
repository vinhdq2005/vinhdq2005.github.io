colors = ['red', 'blue', 'green', 'yellow']
for i in range(0, len(colors)):
    print(colors[i], end=" ")

print("\nInput a new color: ", end="")
new_color = input()
colors.append(new_color)
print("New color list: ")
for i in range(0, len(colors)):
    print(colors[i], end=" ")