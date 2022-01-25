n,m = map(int,input().split())
def search(start,arr,n,m):
    cnt = len(arr)
    if cnt==m:
        print(" ".join(map(str,arr)))
        return
    for i in range(start,n+1):
        if i>=arr[-1]:
            search(i,arr+[i],n,m)
for i in range(1,n+1):
    search(i,[i],n,m)