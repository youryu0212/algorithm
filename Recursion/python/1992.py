n = int(input())
arr = [list(input()) for _ in range(n)]

def search(x,y,n):
    info = arr[x][y]
    flag = False
    result = []
    for i in range(n):
        for j in range(n):
            if info != arr[x+i][y+j]:
                flag = True
                break
        if flag:
            break
    if flag:
        next = n//2
        result.append("(")
        result.append(search(x,y,next))
        result.append(search(x,y+next,next))
        result.append(search(x+next,y,next))
        result.append(search(x+next,y+next,next))
        result.append(")")
    else:
        return info
    return "".join(result)
print(search(0,0,n))