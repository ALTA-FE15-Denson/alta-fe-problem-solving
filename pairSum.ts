function pairSum(arr: number[], target: number): number[] {
    // your code here
    let index: number[] = []

    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j <= arr.length; j++){
            let sum = arr[i] + arr[j]
            
            if(sum == target){
                index.push(i,j)
            }
        }
    }

    return  index
  }
  
  
  console.log(pairSum([1, 2, 3, 4, 6], 6)) // [1, 3]
  console.log(pairSum([2, 5, 9, 11], 11))  // [0, 2]
  console.log(pairSum([1, 3, 5, 7], 12))   // [2, 3]
  console.log(pairSum([1, 4, 6, 8], 10))   // [1, 2]
  console.log(pairSum([1, 5, 6, 7], 6))    // [0, 1]