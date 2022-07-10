x,y,w,s = map(int,input().split())

dis = (x+y) * w
if (x+y) %2 == 0:
  dis = min(dis,max(x,y)*s)
else:
  dis = min(dis,(max(x,y)-1 ) *s + w)
dis = min(dis,min(x,y)*s + abs(x-y) * w)
print(dis)