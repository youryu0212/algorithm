n = int(input())
nums = [int(input()) for _ in range(n)]
stack = []
idx = 0
result = []
for i in range(1,n+1):
    stack.append(i)
    result.append("+")
    while stack and stack[-1] == nums[idx]:
        idx+=1
        result.append("-")
        stack.pop()
if stack: result = "NO"
else : result = "\n".join(map(str,result))
print(result)