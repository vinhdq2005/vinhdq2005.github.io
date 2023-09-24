laptop = {
    "HP": 20,
    "DELL": 50,
    "MACBOOK": 12,
    "ASUS": 30
}

laptop["lenovo"] = laptop["ASUS"]
del laptop["ASUS"]
print(laptop)
print("Số lượng Macbook có trong shop:", laptop["MACBOOK"])

print("Nhập thông tin: ", end="")
infor = input()

if infor.isdigit():
    i = 0
    index_value = list(laptop.values())
    index_key = list(laptop.keys())
    for value in index_value:
        if int(value) == int(infor):
            print(index_key[i])
        i += 1
else:
    print(laptop[infor])


