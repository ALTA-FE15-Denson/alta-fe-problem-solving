// k itu berapa yang di ambil

function findMaxSumSubArray(key: number, arr: number[]): number {
    // your code here
    let result = 0
    
    for(let i = 0; i < arr.length; i++){
        let sum = 0
        for(let j = i; j < key + i; j++){
            sum += arr[j]
        }
        if (result < sum){
            result = sum
        }
    }

    return result   
    
  }
  console.log(findMaxSumSubArray(3, [2, 1, 5, 1, 3, 2])) // 9
  console.log(findMaxSumSubArray(2, [2, 3, 4, 1, 5]))    // 7
  console.log(findMaxSumSubArray(2, [2, 1, 4, 1, 1]))    // 5
  console.log(findMaxSumSubArray(3, [2, 1, 4, 1, 1]))    // 7
  console.log(findMaxSumSubArray(4, [2, 1, 4, 1, 1]))    // 8
  
  