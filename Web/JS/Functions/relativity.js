/*write a function called relativityTheory().

It should accept a single mass parameter that is an integer or decimal number.

Afterward, call the relativityTheory() function */

function relativityTheory(mass){
    const c = 3e8;
    const e = mass * (c ** 2); 
    return e;
}
console.log(relativityTheory(50));