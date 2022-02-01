x = int(input())
y = int(input())

result = [0,(x>0 and y>0), (x<0 and y>0), (x<0 and y<0), (x>0 and y<0)];
for i in range(len(result)):
    if result[i]:
        print(i)
        break