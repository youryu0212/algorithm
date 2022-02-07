n = input()
m = int(input())
if m != 0:
    broken_button = set(input().split())

result = abs(int(n)-100)
if m != 10 and m != 0:
    for num in range(900000):
        digit_bool = True
        for digit in str(num):
            if digit in broken_button:
                digit_bool = False
                break
        if not digit_bool: continue
        track_cnt = len(str(num)) + abs(num-int(n))
        result = min(track_cnt,result)
if m == 0:
    result = min(result,len(n))
print(result)