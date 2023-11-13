laptop = {
    "HP": 600,
    "DELL": 650,
    "MACBOOK": 1200,
    "ASUS": 400,
}

print("Input a brand: ", end="")
brand = input()
print("Input amount to buy: ", end="")
amount = int(input())

print("Total price: ", laptop[brand]*amount)