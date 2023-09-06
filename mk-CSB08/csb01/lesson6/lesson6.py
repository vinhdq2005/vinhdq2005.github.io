animals = ["dog", "cat", "bird", "fish"]
print(len(animals)) #do dai
print(animals[0])
print(animals[1:4]) #cat 1 list
animals.append("dolphin") #them phan tu
print(animals)
animals.remove("cat") #xoa phan tu
print(animals)
animals.pop(2) # xoa phan tu dua tren index
print(animals)

# vong lap
for i in range(len(animals)):
    print(i)

fruits = ('apple', 'banana', 'orange', 'cherry') # tuple
print(fruits)
print(len(fruits))
print(fruits[1])

a = fruits.index('banana')
print(a)
print(fruits[1:4])
for item in fruits:
    print(item)
    
# chuyen tuple sang list

new_list = list(fruits)
print(new_list)

new_tuple = tuple(animals)
print(new_tuple)

list = ['game', 'sport']
print(tuple(list))