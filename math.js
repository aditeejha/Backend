const sum(a,b)=>a+b;
const sub(a,b)=>a-b;
const mul(a,b)=>a*b;
const div(a,b)=>a/b;
const pi=3.14;
const g=9.8;

let obj={
    sum:sum,
    sub:sub,
    mul:mul,
    div:div,
    pi:pi,
    g:g
};
module.exports={
    sum:sum,
    sub:sub,
    mul:mul,    
    div:div,
    pi:pi,
    g:g
};
//module.exports=obj;