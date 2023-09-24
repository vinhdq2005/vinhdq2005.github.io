char = [
    {'Name': 'Tackle', 'Minimum level': 1, 'Damage': 5, 'Hit rate': 0.3},
    {'Name': 'Quick Attack', 'Minimum level': 2, 'Damage': 3, 'Hit rate': 0.5},
    {'Name': 'Strong Kick', 'Minimum level': 4, 'Damage': 9, 'Hit rate': 0.2},
]

for i in range(0, len(char)):
    print("Skill", i+1, char[i]["Name"])
    
print("Choose skill by number: ", end="")
inp_skill = int(input())


if char[inp_skill-1]["Minimum level"] < 2:
    print("You choose", char[inp_skill - 1]["Name"])
    print("Damage:", char[inp_skill - 1]["Damage"])
else:
    print("You choose", char[inp_skill - 1]["Name"])
    print("Cannot deploy. Required level", char[inp_skill-1]["Minimum level"])
