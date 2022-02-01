import sys
input = sys.stdin.readline
k = int(input())
stack = []
for _ in range(k):
  num = int(input())
  if num == 0:
    if stack:
      stack.pop()
    continue
  stack.append(num)
print(sum(stack))