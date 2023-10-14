food = []
print("== Welcome to MindX Restaurant ==")

while True:
    print("Please choose a dish:", end=" ")
    inp_food = str(input())
    if inp_food in food:
        continue
    else:
        food.append(inp_food)
    print("Great choice! Anything else? (y/n): ", end="")
    check = str(input())
    if check == "y":
        continue
    else:
        print("Well done! Your order:")
        for i in food:
            print("-",i)
        break