t = int(input())
for _ in range(t):
    sx, sy , ex, ey = map(int,input().split())
    n = int(input())
    cnt = 0
    for i in range(n):
        (x,y,r) = map(int,input().split())
        if ((sx-x)**2 + (sy-y)**2)<r**2 and ((ex-x)**2 + (ey-y)**2)<r**2:
            continue
        if ((sx-x)**2 + (sy-y)**2)<r**2 :
            cnt+=1
        elif ((ex-x)**2 + (ey-y)**2)<r**2:
            cnt += 1
    print(cnt)