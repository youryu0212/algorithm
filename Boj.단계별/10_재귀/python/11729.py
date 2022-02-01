n = int(input());
def hanoi(n,start,end,way_point):
  if n == 1:
    print(start,end)
    return
  hanoi(n-1,start,way_point,end)
  print(start,end)
  hanoi(n-1,way_point,end,start)
print(2**n-1)
hanoi(n,1,3,2)