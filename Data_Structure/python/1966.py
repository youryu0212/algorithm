from collections import deque
T = int(input())
for _ in range(T):
    n,m = map(int,input().split())
    importance = [0 for _ in range(10)]
    queue = deque(list(map(int,input().split())))
    for num in queue:
        importance[num]+=1
    idx = 9
    cnt = 0
    while n>0:
        while importance[idx] == 0 : idx-=1
        importance[idx]-=1
        while queue[0] != idx:
            queue.append(queue.popleft())
            m-=1
            if m==-1 : m = n-1
        queue.popleft()
        cnt += 1
        n -= 1
        if m == 0 : break
        m -= 1
        if m == -1 : m = n-1
    print(cnt)