laptop_amount = {
    "HP": 20,
    "DELL": 50,
    "MACBOOK": 12,
    "ASUS": 30,
}

laptop_price = {
    "HP": 600,
    "DELL": 650,
    "MACBOOK": 1200,
    "ASUS": 400,
}
total = 0
for key in laptop_amount:
    total += (laptop_amount[key]*laptop_price[key])
print("Total value of available items:", total)

