n,m,r,c,k = map(int,input().split())
arr = [0 for _ in range(7)]
graph = [list(map(int,input().split())) for _ in range(n)]
moves = [[],[0,1],[0,-1],[-1,0],[1,0]];
dice = {"top":6,"bottom":1,"front":5,"back":2,"left":4,"right":3}
orders = list(map(int,input().split()))

def check_range (r,c):
  if r<0 or c<0 or r>=n or c>=m:
    return False
  return True

def turn_dice(d):
  top,bottom,front,back,left,right = dice["top"],dice["bottom"],dice["front"],dice["back"],dice["left"],dice["right"]
  if d == 1:
    dice["top"] = left
    dice["bottom"] = right
    dice["front"] = front
    dice["back"] = back
    dice["left"] = bottom
    dice["right"] = top
  if d == 2:
    dice["top"] = right
    dice["bottom"] = left
    dice["front"] = front
    dice["back"] = back
    dice["left"] = top
    dice["right"] = bottom
  if d == 3:
    dice["top"] = front
    dice["bottom"] = back
    dice["front"] = bottom
    dice["back"] = top
    dice["left"] = left
    dice["right"] = right
  if d == 4:
    dice["top"] = back
    dice["bottom"] = front
    dice["front"] = top
    dice["back"] = bottom
    dice["left"] = left
    dice["right"] = right

def change_num (r,c):
  bottom = dice["bottom"]
  if graph[r][c] == 0:
    graph[r][c] = arr[bottom]
    return
  graph[r][c], arr[bottom] = 0,graph[r][c]

change_num(r,c)
for order in orders:
  move = moves[order]
  nr,nc = r+move[0], c+move[1]
  if not check_range(nr,nc):
    continue
  turn_dice(order)
  change_num(nr,nc)
  print(arr[dice["top"]])
  r,c = nr,nc
  