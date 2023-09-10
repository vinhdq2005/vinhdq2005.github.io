# bai 1
# def is_int(num):
#     if type(num) == int:
#         print(f'{int(num)} is an integer')
#     else:
#         print(f'{num} is not an integer')
# print("Input number:", end=" ")
# num_input = input()
# is_int(num_input)

# bai 2
# print("Input number: ", end="")
# num = int(input())

# def is_prime(a):
#     if a <= 1:
#         return False
#     for i in range (2, a):
#         if a % i == 0:
#             return False
#     return True

# if is_prime(num):
#     print(num, "is a prime")
# else:
#     print(num, "is not a prime")

# bai 3
# print("Input number: ", end="")
# num = int(input())

def is_prime(a):
    if a <= 0:
        print("Not found")
    else:
        print(a)
        i = 0
        k = 0
        while i == a:
            k += 1
            for j in range (2, k):
                if k % j == 0:
                    i += 1
                    print(k) 
is_prime(2)