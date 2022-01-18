n = int(input())
i = 1
cnt = 1
if n == 1:
    print(1)
else:
    while n>1:
        cnt +=1
        n -= 6*i
        i+=1
    print(cnt)