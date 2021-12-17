from math import nan
import random

arr = ["red", "blue", "yellow", "green", "purple", "orange", "pink", "maroon"]


def intersection(lst1, lst2):
    lst3 = [value for value in lst1 if value in lst2]
    return lst3


def check_list(arr1, arr2):
    matches = intersection(arr1, arr2)
    bad_order = len(matches)
    good_color_count = 0
    if matches != []:
        for i in range(0, len(arr1)):
            if arr1[i] == arr2[i]:
                good_color_count += 1
                bad_order -= 1
    else:
        good_color_count = 0
        bad_order = 0
    return good_color_count, bad_order


def play_turn():
    secret_code = random.sample(arr, k=4)
    i = 1
    while i < 10:
        guess = input("Give 4 colors: ")
        first_try = guess.split(', ')
        i += 1
        print(first_try)
        print(check_list(first_try, secret_code))

        if check_list(first_try, secret_code) == (4, 4):
            break

    print(first_try)
    print(secret_code)
    print(check_list(first_try, secret_code))


play_turn()
