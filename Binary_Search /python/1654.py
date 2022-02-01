import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**6)
k,n = map(int,input().split())
arr = [int(input()) for _ in range(k)]
result = 0
def search(min_num,max_num):
    global result
    if min_num>max_num : return
    half_num = min_num + (max_num-min_num)//2
    cnt = 0
    for num in arr:
        cnt += num//half_num
    if cnt>=n:
        result = half_num
        search(half_num+1,max_num)
    else:
        search(min_num,half_num-1)
search(1,max(arr))
print(result)