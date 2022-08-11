T = int(input())
for _ in range(T):
    n = int(input())
    if n%9 == 0 or n%3 == 2:
        print("TAK")
    else:
        print("NIE")