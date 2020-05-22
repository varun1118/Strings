let p="varun"
let str="this is ${p}'s string"
let str1="this is\
a varun \
world wide famous"
console.log(str)
let arr=[1,2,true,[4,5],false]
for(let val of arr){
    console.log(val)
}
for(let index in arr){
    console.log(index)
}
let omit=arr.splice(2,arr.length+100)
console.log(omit)