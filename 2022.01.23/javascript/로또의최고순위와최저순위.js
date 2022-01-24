function solution(lottos, win_nums) {
  return lottos.reduce((result,cur) => {if(win_nums.includes(cur)){result[0]++,result[1]++}; if(cur ===0) result[1]++;return result },[0,0]).reduce((answer,cur)=>{answer.unshift((cur&&7-cur)||6); return answer},[])
}