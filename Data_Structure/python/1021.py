from collections import deque

n,m = map(int,input().split())
target = list(map(int,input().split()))
def solution(n,m,target):
    queue = deque([i for i in range(1,n+1)])
    cnt = 0
    for i in range(m):
        while queue[0] != target[i]:
            if (len(queue)-1)//2 >= queue.index(target[i]):
                queue.append(queue.popleft())
            else:
                queue.appendleft(queue.pop())
            cnt += 1
        queue.popleft()
    return cnt
result = solution(n,m,target)
print(result)