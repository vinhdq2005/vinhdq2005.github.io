laptop_price = {
    "HP": 600,
    "DELL": 650,
    "MACBOOK": 1200,
    "ASUS": 400,
}
laptop_amount = {
    "HP": 20,
    "DELL": 50,
    "MACBOOK": 12,
    "ASUS": 30,
}

print("Input a brand: ", end="")
brand = input()
print("Input amount to buy: ", end="")
amount = int(input())

print("Total price: ", laptop_price[brand]*amount)

laptop_amount[brand] = laptop_amount[brand] - amount

print("Available products:")
for key in laptop_amount:
    print("-", key, ":", laptop_amount[key])