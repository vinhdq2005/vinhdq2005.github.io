num_list = []
print("Input the list of numbers.Enter 0 to finish.")

while True:
    num_input = int(input())
    if num_input != 0 and num_input % 2 == 0:
        num_list.append(num_input)
    elif:
        break

print("Even numbers:", end='')
for i in range(0, len(num_list)):
    print(num_list[i], end=" ")