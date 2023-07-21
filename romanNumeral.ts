type roman = [
    num: number,
    romawi: string
]

function romanNumerals (value: number): string {
    const romawi: roman[] = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I'],
    ]

    let result = ''

    for (const [num, roman] of romawi) {
        while(value >= num){
            result += roman
            value -= num
        }
    }
        
    return result
}   

console.log(romanNumerals(6)); // VI
console.log(romanNumerals(9)); // VI
console.log(romanNumerals(23)); // VI
console.log(romanNumerals(2021)); // VI
console.log(romanNumerals(1646)); // VI
