import sys
input = sys.stdin.readline
def merge_sort(arr,p,r):
    if (p<r):
        q = p+ (r-p)//2
        merge_sort(arr,p,q)
        merge_sort(arr,q+1,r)
        merge(arr,p,q,r)
        
def merge(A,p,q,r):
    global answer,target,cnt
    i ,j,t = p,q+1,0
    tmp = [0 for _ in range(p,r+1)]
    while (i<=q and j<=r):
        if (arr[i] <= arr[j]):
            tmp[t] = arr[i]
            i += 1
        else:
            tmp[t] = arr[j]
            j += 1
        t += 1
        
    while (i <= q):
        tmp[t] = arr[i]
        i += 1
        t += 1
        
    while (j <= r):
        tmp[t] = arr[j]
        t += 1
        j += 1
    i = p;
    t = 0;
    while (i<=r):
        arr[i] = tmp[t]
        cnt += 1
        if cnt == target:
            answer = tmp[t]
        i += 1
        t += 1


n,k = map(int,input().split())
arr = list(map(int,input().split()))
cnt = 0
answer = -1
target = k
merge_sort(arr,0,n-1);
print(answer)