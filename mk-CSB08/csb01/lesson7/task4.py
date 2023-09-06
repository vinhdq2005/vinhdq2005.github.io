num_list = [5, 1, 8, 92, 7, 30]
even_number = []
for i in num_list:
    if i % 2 == 0:
        even_number.append(i)
print("Even numbers:", end='')
for i in range(0, len(even_number)):
    print(even_number[i], end=" ")