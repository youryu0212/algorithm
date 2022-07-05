n = int(input())
name_list = set();
for _ in range(n):
  name_,order = input().split()
  if order == "enter":
    name_list.add(name_)
  else:
    name_list.remove(name_)
print("\n".join(sorted(name_list,reverse=True)))