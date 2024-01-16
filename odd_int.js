const findOdd = (xs) => xs.reduce((a, b) => a ^ b);


function findOdd(A) {
  //happy coding!
  let counter = {}
  
  for (let i=0; i<A.length; i++) {
    if (Object.keys(counter).includes(String(A[i]))) {
      counter[A[i]] += 1
    }
    else {
      counter[A[i]] = 1
    }
  }
  console.log(counter)
  for (let key in counter) {
    if (counter[key] %2 != 0) {
      return Number(key)
    }
  }
}
