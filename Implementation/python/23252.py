T = int(input())
for _ in range(T):
    a,b,c = map(int,input().split())
    if c == 0:
        if a== 0 and b%2 == 1:
            print("No")
        elif a%2 == 0 :
            print("Yes")
        else:
            print("No")
    else:
        if a == c:
            print("Yes")
        elif a < c :
            print("No")
        else:
            x = a-c
            if x%2 == 0 :
                print("Yes")
            else:
                print("No")