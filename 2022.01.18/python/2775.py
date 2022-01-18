T = int(input())
table=[]
for i in range(15):
    table.append(i);

for i in range(T):
    k = int(input())
    n = int(input())
    dp=table[:n+1]
    for j in range(k):
        for m in range(1,n+1):
            dp[m] = dp[m-1]+dp[m]
    print(dp[n])