result = 1
cnt_arr = [0 for _ in range(10)];
for _ in range(3):
    result *= int(input())
while result:
    cnt_arr[result %10] += 1
    result //= 10
for i in range(10):
    print(cnt_arr[i])