from collections import deque
import sys
input = sys.stdin.readline

orders = ["L","R","D","S"]
for _ in range(int(input())):
    visited = [False for _ in range(10000)]
    q = deque()
    n, target = map(int,input().split())
    q.append(['',n])
    visited[n] = True
    check_bool=False
    while q:
        track,num = q.popleft()
        for order in orders:
            if order == "L":
                x = (num%1000)*10 + num//1000
            elif order == "R":
                x = (num%10)*1000 + num//10
            elif order =="D":
                x = (num*2)%10000
            else:
                x = num-1
                if x == -1:
                    x = 9999
            if visited[x]:
                continue
            if x == target:
                print(track+order)
                check_bool=True
                break
            visited[x] = True
            q.append([track+order,x])
        if check_bool:
            break