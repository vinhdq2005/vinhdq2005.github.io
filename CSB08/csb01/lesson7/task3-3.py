num_list = []
print("Input the list of numbers.Enter 0 to finish.")

while True:
    num_input = int(input())
    if num_input != 0:
        num_list.append(num_input)
    else:
        break

print("Sum of numbers in list: ", sum(num_list))