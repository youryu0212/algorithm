data = [6,2,5,5,4,5,6,3,7,6]
n = int(input())
def search(num,target,cnt,arr):
    if target-num<(6-cnt)*2 + 4:
        return 0
    if cnt==4:
        result = int(arr[0]+arr[1]) + int(arr[2]+arr[3])
        if result<100 and data[result%10] + data[result//10] + num + 4 == target:
            print(f'{arr[0]}{arr[1]}+{arr[2]}{arr[3]}={result//10}{result%10}')
            exit()
        return
    for i in range(len(data)):
        search(num+data[i],target,cnt+1,arr+[str(i)])
        
search(0,n,0,[])
print("impossible")