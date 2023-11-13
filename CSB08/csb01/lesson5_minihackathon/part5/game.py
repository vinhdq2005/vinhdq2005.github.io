import random

print("== FREAKING MATH CONSOLE ==")
print("Give correct answers to get scores.")
ops = ["+", "-", "*", "/"]
score = 0

while True:
    a = random.randint(1, 50)
    b = random.randint(1, 50)
    operator = random.choice(ops)
    c = random.randint(1, 100)
    correct_answer = eval(str(a) + operator + str(b))
    print(a, operator, b, "=", c)
    print("1 for true, 0 for False: ", end="")
    player = input()
    if c == correct_answer and player == "1":
        score += 1
        print("score: ", score)
    elif c != correct_answer and player == "0":
        score += 1
        print("score: ", score)
    else:
        print("incorrect.")
        break
    
print("== GAME OVER ==")
print("Your total score is ", score)