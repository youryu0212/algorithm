for _ in range(int(input())):
    r,s = input().split()
    new_s = ""
    for char in s:
        for _ in range(int(r)):
            new_s += char
    print(new_s)