def my_pow(a,b,c):
    if b==1:
        return a%c
    num = my_pow(a,b//2,c)
    if b%2 ==0:
        return (num*num)%c
    return (num*num*a)%c

a,b,c = map(int,input().split())
print(my_pow(a,b,c))