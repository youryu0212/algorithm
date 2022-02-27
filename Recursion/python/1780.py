n = int(input())
arr = [list(map(int,input().split())) for _ in range(n)]
result = [0, 0, 0]

def search (x,y,n):
    num = arr[x][y]
    flag = False
    for i in range(n):
        for j in range(n):
            if arr[x+i][y+j] != num:
                flag = True
                break
        if flag:
            break
    if flag:
        next = n//3
        search(x,y,next)
        search(x,y+next,next)
        search(x,y+next*2,next)
        search(x+next,y,next)
        search(x+next,y+next,next)
        search(x+next,y+next*2,next)
        search(x+next*2,y,next)
        search(x+next*2,y+next,next)
        search(x+next*2,y+next*2,next)
    else:
        result[num+1] += 1
search(0,0,n)
print("\n".join(map(str,result)))