import sys
input = sys.stdin.readline
n,c = map(int,input().split())
arr = sorted([int(input()) for _ in range(n)])

def search(arr,min_distance,max_distance,target):
    if min_distance>max_distance:
        return 0
    result = 0
    while max_distance>= min_distance:
        mid_distance = min_distance + (max_distance-min_distance)//2
        now_pos = arr[0]
        cnt = 1
        for i in range(1,len(arr)):
            if arr[i] >= now_pos + mid_distance:
                cnt += 1
                now_pos = arr[i]
        if cnt>=target:
            result = mid_distance
            min_distance = mid_distance+1
        else:
            max_distance = mid_distance-1
    return result
        
answer = search(arr,1,arr[-1]-arr[0],c)
print(answer)