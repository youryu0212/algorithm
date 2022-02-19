n = int(input())
arr = sorted(map(int,input().split()))
m = int(input())
target = list(map(int,input().split()))

def search (min_num,max_num,target_num):
    if min_num >= max_num: return "0"
    mid_num = min_num + (max_num-min_num)//2
    if arr[mid_num] == target_num : return "1"
    if arr[mid_num] > target_num : return search(min_num,mid_num,target_num)
    return search(mid_num+1,max_num,target_num)
result = []
for i in range(len(target)):
    result.append(search(0,len(arr),target[i]))
print(" ".join(result))