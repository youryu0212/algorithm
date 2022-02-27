n,k = map(int,input().split())
coins = [int(input()) for _ in range(n)]
cnt = 0
for i in range(len(coins)-1,-1,-1):
  if k==0 : break
  if coins[i] >k : continue
  cnt += k//coins[i]
  k %= coins[i]
print(cnt)