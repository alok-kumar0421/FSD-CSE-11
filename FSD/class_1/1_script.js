const student={
    name:'Alok',
    roll:345,
    college:'Abes Engineering College'
}

const new_Student={ // destrucring
    ...student,
    sec:'A' // if i want to add new any info
}

console.log(new_Student.name)
console.log(new_Student.college)