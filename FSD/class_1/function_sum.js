export function sum(...num){ //Isliye Rest Parameter ka use tab karte hain jab hume nahi pata hota kitne arguments aayenge.
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