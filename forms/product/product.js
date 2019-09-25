let nums = [123, 433, 54326, 2234, 1919, 1123, 1928, 3374, 23, 190, 33874]
let k = 0
let product = 1
function prod(a, b) {
  let answer = a * b
  return answer
  }
  
while (k < nums.length) {
  product = prod(product, nums[k])
  console.log(product)
  k++
  }

    
    
