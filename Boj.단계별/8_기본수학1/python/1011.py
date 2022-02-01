import sys
input = sys.stdin.readline
for _ in range(int(input())):
    x,y = map(int,input().split())
    dis = y-x
    base = 1
    num = 1
    cnt = 1
    while num<dis:
        base += 1
        num = base*base
        cnt += 2
    if num-base+1 > dis:
        cnt -= 1
    print(cnt)