visited = [False for _ in range(10001)]
def d(n):
    num = n
    while n:
        num += n%10
        n //= 10
    return num
for i in range(10001):
    num = d(i)
    if num<=10000 and not visited[num]:
        visited[num] = True
for i in range(len(visited)):
    if not visited[i]:
        print(i)