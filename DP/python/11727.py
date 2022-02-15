n = int(input())
dp = {}
dp[1] = 1
dp[2] = 3

def search(n):
  if n in dp: return dp[n]
  dp[n] = (search(n-1) + search(n-2)*2)%10007
  return dp[n]
print(search(n))