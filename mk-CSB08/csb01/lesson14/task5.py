phone = {
    "Iphone 12": 28000000,
    "Samsung N10": 16000000,
    "Oppo 93": 7500000,
    "Vsmart": 7400000,
    "Vivo": 4200000
}

# chuong trinh 1
print("Chuong trinh 1:")
print("Input name of a phone: ",end="")
inp_phone = input()
print("Price of", inp_phone, ":", phone[inp_phone])

# chuong trinh 2
print("Chuong trinh 2:")
print("Input your budget: ", end="")
inp_price = int(input())

print("Phones that fit your budget:")
for i in phone:
    if phone[i] <= inp_price:
        print("-", i, ":", phone[i])
        