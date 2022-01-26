from collections import deque

s = int(input())
queue = deque()
cost_arr = [[False for _ in range(s+10)] for _ in range(s+1)]
cost_arr[1][0] = 0
queue.append([1,0])
while queue:
    cnt, clip_board = queue.popleft()
    now_cnt = cost_arr[cnt][clip_board]
    if not cost_arr[cnt][cnt]:
        cost_arr[cnt][cnt] =  now_cnt + 1
        queue.append([cnt,cnt])
    if cnt+clip_board <= s and not cost_arr[cnt+clip_board][clip_board]:
        cost_arr[cnt+clip_board][clip_board] = now_cnt + 1
        queue.append([cnt+clip_board,clip_board])
        if cnt+clip_board == s:
            print(cost_arr[cnt+clip_board][clip_board])
            break
    if cnt-1 > 1 and not cost_arr[cnt-1][clip_board]:
        cost_arr[cnt-1][clip_board] = now_cnt + 1
        queue.append([cnt-1,clip_board])
        if cnt-1 == s:
            print(cost_arr[cnt-1][clip_board])
            break