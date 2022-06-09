from collections import deque

n,m = map(int,input().split())
true_member = list(map(int,input().split()))[1:]

def solution():
  q = deque()
  party_list = []
  member_attend_party_list = [[] for _ in range(n+1)]
  visited_member_arr = [False for _ in range(n+1)]
  cnt = m

  for i in range(m):
    arr = list(map(int,input().split()))[1:]
    party_list.append(arr)
    for num in arr:
      member_attend_party_list[num].append(i)

  for member in true_member:
    visited_member_arr[member] = True
    q.append(member)

  while q:
    member = q.popleft()
    for party_num in member_attend_party_list[member]:
      for target_member in party_list[party_num]:
        if visited_member_arr[target_member]:
          continue
        visited_member_arr[target_member] = True
        q.append(target_member)

  for party_members in party_list:
    for member in party_members:
      if (visited_member_arr[member]):
        cnt-=1
        break
  return cnt

print(solution())

# 방문처리배열 만들어놓고
# bfs로 탐색할껀데,
# 트루 멤버들을 초기값으로 넣어두고
# 해당 맴버가 참석하는 파티 조회하면서 전부 큐에 담기