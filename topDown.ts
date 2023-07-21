function fiboTopDown(n: number): number{
    if (n == 0 || n == 1){
        return n
            }

    const topOne = fiboTopDown(n - 1)
    const topTwo = fiboTopDown(n - 2)

    return topOne + topTwo
    
}

console.log(fiboTopDown(0));
console.log(fiboTopDown(1));
console.log(fiboTopDown(3));
console.log(fiboTopDown(3));
console.log(fiboTopDown(5));
console.log(fiboTopDown(6));
console.log(fiboTopDown(7));
console.log(fiboTopDown(9));
console.log(fiboTopDown(10));
