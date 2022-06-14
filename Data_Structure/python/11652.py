from collections import defaultdict

n = int(input())
dict = defaultdict(int)

for _ in range(n):
  num = int(input())
  dict[num] += 1
arr = dict.items()
answer = sorted(arr,key=lambda x:(-x[1],x[0]))[0][0]
print(answer);