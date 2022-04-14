from collections import deque

n,m,R = map(int,input().split())
arr = [list(map(int,input().split())) for _ in range(n)]
move = [[1, 0], [0, 1], [-1, 0], [0, -1]]

def rotate():
    q = deque()
    for depth in range(min(n,m)//2):
      r=c=depth
      for dr,dc in move:
        while True:
          nr,nc = r+dr , c+dc
          if nr < depth or nr >= n-depth or nc < depth or nc >= m-depth:
            break
          q.append(arr[r][c])
          r,c = nr,nc
      
      for _ in range(R % ((n - depth * 2) * 2 + (m - depth * 2) * 2 - 4)):
        q.appendleft(q.pop())
      
      for dr,dc in move:
        while True:
          nr,nc = r + dr, c + dc
          if nr < depth or nr >= n-depth or nc < depth or nc >= m-depth:
            break
          arr[r][c] = q.popleft()
          r,c = nr,nc

rotate()

print("\n".join(" ".join(list(map(str,arr[i]))) for i in range(n)))