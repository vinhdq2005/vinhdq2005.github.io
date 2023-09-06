num_list = [5, 1, 8, 92, -1, 30]
for i in range(0, len(num_list)):
    print(num_list[i], end=" ")

# bai 1
print("\nInput a number: ", end='')
num_input = int(input())
if num_input in num_list:
    print("Number found at position", num_list.index(num_input) + 1)
else:
    print("Number not found")

# bai 2
print("Sum of all numbers: ", sum(num_list))


