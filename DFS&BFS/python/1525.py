from collections import deque
import sys
input = sys.stdin.readline
arr = [list(map(int,input().split())) for _ in range(3)]
answer = -1
def make_string (arr):
  s = ""
  for i in range(3):
    s += "".join(map(str,arr[i]))
  return s

def range_check (r,c):
  if r<0 or c<0 or r>=3 or c>=3:
    return False
  return True

def zero_search(arr):
  for i in range(3):
    for j in range(3):
      if arr[i][j] == 0:
        return [i,j]

moves = [(-1,0),(0,1),(1,0),(0,-1)]
q = deque()
s = make_string(arr)
if s != "123456780":
  q.append((arr,0))
else:
  answer = 0

visited = set()
while q:
  arr_,cnt = q.popleft()
  r,c = zero_search(arr_)
  flag = False
  for move in moves:
    nr,nc = r + move[0], c+move[1]
    if not range_check(nr,nc): continue
    next_arr = [[arr_[i][j] for j in range(3)] for i in range(3)]
    next_arr[r][c], next_arr[nr][nc] = next_arr[nr][nc], next_arr[r][c]
    s = make_string(next_arr)
    if s == "123456780":
      answer = cnt+1
      flag = True
      break
    if s in visited:
      continue
    visited.add(s)
    q.append((next_arr,cnt+1))
  if flag:
    break
print(answer)