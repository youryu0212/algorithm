dic = {
  ")":"(",
  "}":"{",
  "]":"[",
}
open_parentheses = ["(","[","{"]
close_parentheses = [")","]","}"]
result = ""
while True:
  stack = []
  s = input()
  if s ==".":
    break
  check = "yes"
  for char in s:
    if char in open_parentheses:
      stack.append(char)
      continue
    if char in close_parentheses :
      if not stack or dic[char]!= stack[-1]:
        check = "no"
        break
      stack.pop()
  if stack:
    check = "no"
  result += check + "\n"
print(result)