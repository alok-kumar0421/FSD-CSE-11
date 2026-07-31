export function sum(...num){
    const sum = num.reduce((s,i)=>(s+i));
    return sum;
}

export const add = (...num)=>{
    let s=0;
    for(let i of num){
        s=s+i;
    }
    return s
}


// export {sum,add}; ye bhi sahi hai