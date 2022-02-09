import sys
input = sys.stdin.readline
v = int(input())
tree = [[] for _ in range(v+1)]
for _ in range(v):
    arr = list(map(int,input().rstrip().split()))
    for i in range(1,len(arr)-1,2):
        tree[arr[0]].append((arr[i],arr[i+1]))
def longest_node_search(node,visited,value):
    visited[node] = True
    result_value = value
    result_node = node
    for next_node,cost in tree[node]:
        if not visited[next_node]:
            output = longest_node_search(next_node,visited,value+cost)
            if output[1]>result_value:
                result_node = output[0]
                result_value = output[1]

    return [result_node,result_value]
visited = [False for _ in range(v+1)]
first_node,first_node_cost = longest_node_search(1,visited,0)
visited = [False for _ in range(v+1)]
result_node,result_node_cost = longest_node_search(first_node,visited,0)
print(result_node_cost)