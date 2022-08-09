n = int(input())
lecture = list(map(int,input().split()))
want = list(map(int,input().split()))
lecture_cnt = [0 for _ in range(1000001)]
want_cnt = [0 for _ in range(1000001)]
unhappy = 0

for i in range(n):
    lecture_cnt[lecture[i]] += 1
    want_cnt[want[i]] += 1
for i in range(1,len(want_cnt)):
    if want_cnt[i] > lecture_cnt[i]:
        continue
    unhappy += lecture_cnt[i] - want_cnt[i]
print(unhappy)