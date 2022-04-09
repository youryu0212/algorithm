n,m = map(int,input().split())

# n! / ((n-m)! * m!)
dp = [0 for _ in range(101)]
def fac(i):
    if i<=1:
        dp[i] = 1
    if dp[i]:
        return dp[i]
    dp[i] = fac(i-1)*i
    return dp[i]
print(fac(n)//(dp[n-m] * dp[m]))