n,m = map(int,input().split())
board = [list(input()) for _ in range(n)]
result = 10**18*9
for i in range(n-7):
    for j in range(m-7):
        idx1 = 0 # 맨 왼쪽 위가 블랙이라 가정
        idx2 = 0 # 맨 왼쪽 위가 화이트라 가정
        for r in range(i,i+8):
            for c in range(j,j+8):
                if (r+c)%2 == 0:
                    if board[r][c] == "W" : idx1 += 1
                    else: idx2 += 1
                else:
                    if board[r][c] == "B" : idx1 += 1
                    else: idx2+=1
        result = min(result,idx1,idx2)
print(result)