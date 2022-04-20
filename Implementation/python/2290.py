# 첫번째줄 : ( 2 3 5 6 7 8 9 0)
# 두번째줄 ~ S개 줄 : S+2번째에 : 1,2,3,4,7,8,9,0
# 두번째줄 ~ S개 줄 : 0번째에 : 4,5,6,8,9,0
# S+1 번째 (가로) : 2,3,4,5,6,8,9

# S+1번째 4번째 자리 : 1,3,4,5,6,7,8,9,0
# S+1번째 ~s개 줄 첫번째 자리 : 2,6,8,0
# 마지막줄 : 2,3,5,6,8,9,0


s,n = input().split()

one = [2,3,5,6,7,8,9,0]
two_three = [4,8,9,0]
two = [5,6]
three = [1,2,3,7]

four = [2,3,4,5,6,8,9]

five_six = [6,8,0]
five = [2]
six = [1,3,4,5,7,9]
seven = [2,3,5,6,8,9,0]

result = ""
def row (result,arr):
  for char in n:
    if int(char) in arr:
      result += " "
      result += "-"*int(s)
      result += " "
    else:
      result += " "*(2+int(s))
    result += " "
  result += "\n"  
  return result

def column (result,arr,arr2,arr3):
  for _ in range(int(s)):
    for char in n:
      if int(char) in arr:
        result += "|"
        result += " " * int(s)
        result += "|"
        result += " "
        continue
      if int(char) in arr2:
        result += "|"
        result += " " * int(s)
        result += " "
        result += " "
        continue
      if int(char) in arr3:
        result += " "
        result += " " * (int(s))
        result += "|"
        result += " "
        continue
      result += " " * (int(s)+1)
    result += "\n"
  return result

result = row(result,one)
result = column(result,two_three,two,three)
result = row(result,four)
result = column(result,five_six,five,six)
result = row(result,seven)
print(result)