n = int(input())

dp = [0 for _ in range(n+1)]
def fac(n):
  if n<=2: return n
  if dp[n] : return dp[n]
  dp[n] = fac(n-1)*n
  return dp[n]

num = fac(n)
result = 0
while num:
  next_ = num%10
  if (next_):
    break
  result += 1
  num//=10
print(result)