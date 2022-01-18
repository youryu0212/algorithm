def ceil(n):
    if n -int(n) >0:
        return int(n)+1
    else:
        return int(n)

T = int(input())

for i in range(T):
    H,W,N = map(int,input().split())
    ho = str(ceil(N/H))
    if(int(ho)<10):
        ho = "0"+ho
    w = str(N-H*(int(ho)-1))
    print(w+ho)