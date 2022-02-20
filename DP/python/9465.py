result = []
T = int(input())
for _ in range(T):
    n = int(input())
    data = [list(map(int,input().split())) for _ in range(2)]
    if n>=2:
        data[0][1] += data[1][0]
        data[1][1] += data[0][0]
    for i in range(2,n):
        data[0][i] += max(data[1][i-1],data[1][i-2])
        data[1][i] += max(data[0][i-1],data[0][i-2])
    result.append(max(data[0][-1],data[1][-1]))
print("\n".join(map(str,result)))