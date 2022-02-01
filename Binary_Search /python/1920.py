n = int(input())
n_arr = sorted(list(map(int,input().split())))
m = int(input())
m_arr = list(map(int,input().split()))

def search(min_idx,max_idx):
    if min_idx>max_idx:
        return 0
    half_idx = min_idx + (max_idx-min_idx)//2
    if n_arr[half_idx]>m_arr[idx]:
        result = search(min_idx,half_idx-1)
    elif n_arr[half_idx] == m_arr[idx]:
        return 1
    else:
        result = search(half_idx+1,max_idx)
    return result
result = []
for idx in range(m):
    result.append(search(0,n-1))
print("\n".join(map(str,result)))