n = int(input())
nums = list(map(int,input().split()))
def cal(arr):
  total = 0
  for i in range(len(arr)-1):
    total += abs(arr[i] - arr[i+1])
  return total

def permutation(arr,r):
  result = 0
  arr = sorted(arr)
  visited = [0 for _ in range(len(arr))]
  def generate(selected,visited,result):
    if len(selected) == r:
      return cal(selected)
    for i in range(len(arr)):
      if not visited[i]:
        selected.append(arr[i])
        visited[i] = 1
        result = max(result,generate(selected,visited,result))
        visited[i] = 0
        selected.pop()
    return result
  result = generate([],visited,result)
  return result
print(permutation(nums,n))