for _ in range(int(input())):
    point = 1
    result = 0
    for char in input():
        cur = char
        if cur=="X":
            point = 1
            continue
        result += point
        point += 1
    print(result)