laptop = {
    "HP": 20,
    "DELL": 50,
    "MACBOOK": 12,
    "ASUS": 30,
}
laptop["TOSHIBA"] = 10

print("Input a brand: ",end="")
brand = input()
print("Input amount: ", end="")
amount = input()

laptop[brand] = amount
print("Available products: ")
for key in laptop:
    print("-", key, ":", laptop[key])
