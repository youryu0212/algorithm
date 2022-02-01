lis = ["c=","c-","dz=","d-","lj","nj","s=","z="];
N = input()
c = 0

for i in lis:
    if i in N:
        c+=N.count(i);
        N = N.replace(i,"0");
N = N.replace("0","");
print(len(N)+c)