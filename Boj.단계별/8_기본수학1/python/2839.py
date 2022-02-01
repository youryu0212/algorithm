N = int(input())

c = -1
for i in range(N//5,-1,-1):
    n = N - i*5
    if n%5 == 0 and i != 0:
        c = i
        break;
    elif n%3 ==0:
        c = i+(n//3)
        break;
print(c)