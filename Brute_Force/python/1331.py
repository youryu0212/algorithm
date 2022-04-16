moves = [(-2,-1),(-2,1),(-1,2),(1,2),(2,1),(2,-1),(1,-2),(-1,-2)]
visited = [[0 for _ in range(7)] for _ in range(7)]
result = False
lr,lc = False,False
for i in range(36):
    knight = input()
    r = int(knight[1])
    c = ord(knight[0])-ord("A")
    check_point = False
    if visited[r][c] or result == "Invalid":
        result = "Invalid"
        continue
    visited[r][c] = True
    if not lr and not lc :
        start_r,start_c = r,c
        lr,lc = r,c
        continue
    for move in moves:
        if r ==move[0]+lr and c == move[1]+lc :
            lr,lc = r,c
            check_point = True
            break
    if not check_point:
        result = "Invalid"
        continue
if not result:
    for move in moves:
        if start_r == move[0] + lr and start_c == move[1] + lc:
            result = "Valid"
    if not result:
        result = "Invalid"
        
print(result)