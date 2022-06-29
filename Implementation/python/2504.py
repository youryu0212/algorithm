def correct_bracket (s,dictionary,bracket):
  stack = [];
  arr = list(s)[::-1]
  while arr:
    top = arr.pop()
    if stack and stack[-1] not in dictionary and stack[-1] not in bracket:
      stack.pop()
    if stack and top in dictionary and dictionary[top] == stack[-1]:
      stack.pop()
      continue
    stack.append(top)
  if stack:
    return False
  return True


def check_bracket (arr,dictionary,bracket) :
  for i in range(len(arr)):
    if arr[i] not in dictionary:
      continue

    value_arr = []
    arr[i]
    cnt = 0
    
    while arr:
      cnt+=1
      j = i-cnt
      left = arr[j]
      if left not in dictionary and left not in bracket:
        value_arr.append(left)
        continue


      value = sum(value_arr) or 1

      if left == "(":
        return value*2,i,j
      return value*3,i,j
  return [0,0,0]


def solution():
  s = input()
  dictionary = {
    ")" : "(",
    "]" : "["
  }
  bracket = ["[","("]
  if not correct_bracket(s,dictionary,bracket):
    return 0
  
  arr = list(s)
  
  while len(arr)>1:
    value,right,left = check_bracket(arr,dictionary,bracket)
    if (value == right == left == 0):
      break
    arr = arr[:left] + [value] + arr[right+1:]
  return sum(arr)
answer = solution()
print(answer)
