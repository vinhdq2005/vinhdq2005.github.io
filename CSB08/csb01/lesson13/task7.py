num_list = [5, 1, 8, 92, -1, 30, 45 ,72, 24, 22]

for i in num_list:
    print(i, end=" ")
print("\n")

def sort(list):
    length = len(list)
    for i in range(length-1, 0, -1):
        for k in range(i):
            if list[k] > list[k+1]:
                first_num = list[k]
                list[k] = list[k+1]
                list[k+1] = first_num
    return list
sort(num_list)

print("Sorted list:")
for k in num_list:
    print(k, end=" ")