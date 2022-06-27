n = int(input())
arr = ["SK" for _ in range(n+1)]
arr[1] = "SK"
if (n>=2):
  arr[2] = "CY"
for i in range(5,n+1):
  if "CY" not in [arr[i-1],arr[i-3],arr[i-4]]:
    arr[i] = "CY"
print(arr[n])