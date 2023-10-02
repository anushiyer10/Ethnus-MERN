// sort a  string

let  input = "bdghafjlgt"

let arr = [] 
for(let i=0;i<input.length;i++){
    arr.push(input[i])
}
let output = arr.sort().join("")

console.log(output)
