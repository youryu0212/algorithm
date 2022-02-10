n,m = map(int,input().split())
dic = {}
for _ in range(n):
  dic[input()] = 1;
for _ in range(m):
  s = input()
  if s in dic:
    dic[s] = 2;
cnt = 0
answer = []
for s in dic.keys():
  if dic[s] ==2:
    cnt+=1
    answer.append(s)
answer.sort()
print(cnt)
print("\n".join(answer))