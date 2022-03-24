arr = [list(map(int,input().split())) for _ in range(9)]
board_range = 9
target = []
for i in range(board_range):
  for j in range(board_range):
    if arr[i][j] == 0:
      target.append((i,j))

def board_check(num,r,c):
  
  if not row_check(num,r): return False
  if not col_check(num,c): return False
  if not square_check(num,r,c): return False
  return True
  

def row_check(num,r):
  for i in range(board_range):
    if num == arr[r][i]: return False
  return True


def col_check(num,c):
  for i in range(board_range):
    if num == arr[i][c]: return False
  return True


def square_check(num,r,c):
  start_r,start_c = (r//3)*3, (c//3)*3
  for i in range(3):
    for j in range(3):
      if num == arr[start_r+i][start_c+j]: return False
  return True

def render():
  for i in range(board_range):
    print(" ".join(map(str,arr[i])))
      

def search(depth):
  if depth == len(target):
    render()
    exit()
  r,c = target[depth]
  for num in range(1,10):
    if board_check(num,r,c):
      arr[r][c] = num
      search(depth+1)
      arr[r][c] = 0
search(0)