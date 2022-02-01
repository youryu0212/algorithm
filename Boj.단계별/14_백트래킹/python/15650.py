n,m = map(int,input().split())
def search(num,cnt,arr):
    if cnt == m:
        print(" ".join(arr))
        return
    for i in range(num+1,n+1):
        search(i,cnt+1,arr+[str(i)])

for i in range(1,n+1):
    search(i,1,[str(i)])