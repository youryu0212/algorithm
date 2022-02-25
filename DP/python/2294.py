from collections import deque
n,k = map(int,input().split())
coins = []
for _ in range(n):
  num = int(input())
  if num<=k:
    coins.append(num)
queue = deque()
max_num = 10**18
dp = [max_num for _ in range(k+1)]

for coin in coins:
  if coin>k: continue
  dp[coin] = 1
  queue.append(coin)
while queue:
  num = queue.popleft()
  for coin in coins:
    if coin+num >k:
      continue
    cnt = dp[coin+num]
    if (cnt == max_num):
      dp[coin+num] = dp[num]+1
      queue.append(coin+num)
    if coin+num == k:
      break
  if coin+num == k:
    break
if dp[k] == max_num:
  dp[k] = -1
print(dp[k])