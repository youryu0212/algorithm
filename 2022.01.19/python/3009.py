x = []
y = []
answer = [0,0]
for _ in range(3):
    a,b = map(int,input().split())
    x.append(a)
    y.append(b)
for i in range(len(x)):
    if x.count(x[i]) == 1 : answer[0] = x[i]
    if y.count(y[i]) == 1 : answer[1] = y[i]
print(answer[0],answer[1])