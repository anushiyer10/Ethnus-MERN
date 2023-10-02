
// reverse a number


const rev = (num) => {
    let arr  = String(num)
    
    let op = []
    for(let i=0;i<arr.length;i++){
        op.push(arr[i])
    }
    op = op.reverse()
    let rev  =  op.join("")
    return rev ;
}

let given  =  123
let output  = rev(given)
let ans  =  parseInt(output)

console.log(ans);
