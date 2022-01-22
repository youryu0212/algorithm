import sys
from collections import Counter

N = int(sys.stdin.readline());
lis = []
for _ in range(N):
    lis.append(int(sys.stdin.readline()))
lis = sorted(lis);
c = Counter(lis).most_common()
sys.stdout.write(str((round(sum(lis)/N)))+'\n')
sys.stdout.write(str(lis[N//2])+'\n')
if len(c)>1 and c[0][1] == c[1][1]:
    sys.stdout.write(str(c[1][0])+'\n')
else:
    sys.stdout.write(str(c[0][0])+'\n')

sys.stdout.write(str(lis[-1]-lis[0]))