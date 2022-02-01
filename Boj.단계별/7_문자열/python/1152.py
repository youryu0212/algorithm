s = input().split()
result = len(s)
if s and s[0] == "":
    result -= 1
if s and s[-1] == "":
    result -= 1
print(result)