def make_dict(keyList, valueList):
  matrix = [
    keyList,
    valueList,
  ]

  key_value_pairs = list(zip(*matrix))
  dictionary = {x[0]:x[1] for x in key_value_pairs}

  return dictionary

print(make_dict(['A', 'B', 'C'], [1,2,3,4,5]))
