n,m = map(int,input().split())
A = []
B = []

for _ in range(n):
    A.append(list(map(int,input().split())))
m,k = map(int,input().split())
for _ in range(m):
    B.append(list(map(int,input().split())))
result = [[0 for _ in range(k)] for _ in range(n)]
for r in range(n):
    for c in range(k):
        for i in range(m):
            result[r][c] += A[r][i] * B[i][c]
for i in range(n):
    print(" ".join(map(str,result[i])))