import sys
input = sys.stdin.readline
n,target = map(int,input().split())
arr = list(map(int,input().split()))
result = -1
cnt = 0
def merge_sort(arr,p,r):
    if p<r:
        q = p + (r-p)//2
        merge_sort(arr,p,q)
        merge_sort(arr,q+1,r)
        merge(arr,p,q,r)
def merge(arr,p,q,r):
    global target,result,cnt
    i,j,t = p,q+1,0
    tmp = list(0 for _ in range(p,r+1))
    while i<=q and j<=r:
        if arr[i] <= arr[j]:
            tmp[t] = arr[i]
            i += 1
        else:
            tmp[t] = arr[j]
            j += 1
        t += 1
    while i<=q:
        tmp[t] = arr[i]
        t += 1
        i += 1
    while j<=r:
        tmp[t] = arr[j]
        t += 1
        j += 1
    i,t = p,0
    while i<=r:
        arr[i] = tmp[t]
        t += 1
        i += 1
        cnt += 1
        if cnt == target:
            result = " ".join(map(str,arr[:]))
            
merge_sort(arr,0,n-1)
print(result)