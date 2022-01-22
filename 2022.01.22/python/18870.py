import sys
input = sys.stdin.readline

n = int(input())
data = list(map(int,input().split()))
sorted_data = sorted(set(data))
data_dic = {sorted_data[i] : i for i in range(len(sorted_data))}
for i in range(len(data)):
    data[i] = data_dic[data[i]]
print(" ".join(map(str,data)))