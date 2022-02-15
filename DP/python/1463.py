dp = {1:0, 2:1,3:1}
n = int(input())

def check(n):
    if n in dp:
        return dp[n]
    result = 1 + min(check(n//2)+(n%2), check(n//3)+(n%3))
    dp[n] = result
    return result
print(check(n))