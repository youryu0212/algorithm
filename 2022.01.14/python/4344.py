for i in range(int(input())):
    arr = list(map(int,input().split()))
    n = arr[0]
    cnt = 0
    average = sum(arr[1:])/n
    for point in arr[1:]:
        if point>average:
            cnt += 1
    print(f"{(cnt/n*100):.3f}%")