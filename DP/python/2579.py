n = int(input())
points = [int(input()) for _ in range(n)]
dp = [[0,0] for _ in range(n+1)]

dp[0][0] = points[0]
dp[0][1] = 0
if n>=2:
  dp[1][0] = points[1]
  dp[1][1] = dp[0][0] + points[1]

def search(i):
  if dp[i][0] : return dp[i]
  dp[i][0] = max(search(i-2)) + points[i]
  dp[i][1] = search(i-1)[0] + points[i]
  return dp[i]
print(max(search(n-1)))
