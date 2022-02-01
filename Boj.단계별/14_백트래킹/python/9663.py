N = int(input())
result = 0
visited = [False for _ in range(N)]
choose = [0 for _ in range(N)]

def search(cnt,visited,choose,N,r,c):
    global result
    if cnt == N-1:
        result += 1
        return
    visited[c] = True
    choose[r] = c
    for i in range(N):
        check_bool = False
        if visited[i]:
            continue
        for x in range(r+1):
            if r+1-x == abs(i-choose[x]):
                check_bool = True
                break
        if check_bool:
            continue
        search(cnt+1,visited,choose,N,r+1,i)
    visited[c] = False
    choose[r] = 0
for i in range(N):
    search(0,visited,choose,N,0,i)
print(result)