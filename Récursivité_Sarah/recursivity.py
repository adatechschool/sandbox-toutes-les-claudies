# #1: somme
#
# def sum_list(l):
#     if len(l) == 1:
#         return l[0]
#     return l[0]+sum_list(l[1:])


# print(sum_list([1, 2, 3, 4, 5, 6]))

# 1st call: sum_list([1, 2, 3, 4, 5, 6])
# 2nd call : 1 + sum_list([2, 3, 4, 5, 6])
# 3rd call : 1 + 2 + sum_list([3, 4, 5, 6])
# 4th call : 1 + 2 + 3 + sum_list([4, 5, 6])
# 5th call : 1 + 2 + 3 + 4 + sum_list([5, 6])
# 6th call : 1 + 2 + 3 + 4 + 5 + sum_list([6])

# return of 6th call: 6
# return of 5th call : 1 + 2 + 3 + 4 + 11
# return of 4th call : 1 + 2 + 3 + 15
# return of 3th call : 1 + 2 + 18
# return of 2nd call : 1 + 20
# return of 1st call : 21

# la même chose en pas récursif :
# list = [1, 2, 3, 4, 5, 6]

# total_list = sum(list)
# print(total_list)


# 2: suite de fibonacci
# def fibonacci(n):
#     if n == 0 or n == 1:
#         return n
#     return fibonacci(n-2)+fibonacci(n-1)

# print(fibonacci(18))

# 3: factoriel
def fact(n):
    if n == 0 or n == 1:
        return 1
    return n*fact(n-1)


print(fact(6))
