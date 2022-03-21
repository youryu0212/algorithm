from itertools import combinations
while True:
    data = list(map(int,input().split()))
    if data == [0]:
        break
    for nums in list(combinations(data[1:],6)):
        print(" ".join(map(str,nums)))
    print()