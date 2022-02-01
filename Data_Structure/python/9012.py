T = int(input())
for _ in range(T):
    s = input()
    stack = []
    result = "YES"
    for char in s:
        if char =="(":
            stack.append(char)
        else:
            if not stack:
                result = "NO"
                break
            stack.pop()
    if stack:
        result = "NO"
    print(result)
