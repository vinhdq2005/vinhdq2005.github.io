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

print("Total value of available brands:")
for key in laptop_price:
    print("-", key, ":", laptop_price[key]*laptop_amount[key])