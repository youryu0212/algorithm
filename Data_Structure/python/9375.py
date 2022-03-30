from collections import defaultdict
t = int(input())
for _ in range(t):
  clothes = defaultdict(set)
  n = int(input())
  for _ in range(n):
    a,b = list(input().split())
    clothes[b].add(a)
  result = 1
  for key,value in clothes.items():
    result *= len(value)+1
  print(result-1)