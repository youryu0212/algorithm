const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const cases = input.slice(3).map(row=>row.split(' ').map(Number));

const convert = (idx) => {
    arr[idx-1] = arr[idx-1] === 0 ? 1 : 0
    return;
}


const changeSwitch = ({gender,num}) => {
    const temp = num;
    if (gender === 1){
        while(num <= N){
            convert(num);
            num += temp;
        }
    }
    else{
        let [left,right] = [num-1,num-1];
        while (left>=0 && right<N && arr[left] === arr[right]){
            left--;
            right++;
        }
        left++;
        right--;
        while (left<=right){
            convert(++left);
        }
    }
    return;
}

for (const [gender, num] of cases){
    changeSwitch({gender,num});
}

const print = (arr) => {
    const answer = [];
    let temp = [];
    for (const num of arr){
        temp.push(num);
        if (temp.length===20){
            answer.push(temp.join(" "));
            temp = [];
        }
    }
    if (temp.length){
        answer.push(temp.join(" "));
    }
    console.log(answer.join("\n"));
}

print(arr);
