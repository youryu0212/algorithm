while True:
    a,b,c = sorted(map(int,input().split()))
    if a == b == c == 0: break
    if a*a + b*b == c*c : print("right")
    else : print("wrong")