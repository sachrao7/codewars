function queueTime(customers, n) {
  //TODO
  // fill an array of n of 0. representing the total time of each till. which will be 0
  
  // for each customer, add it to the Minnimum of the queue
  
  // return the highest sum
  
  let tills = Array(n).fill(0)
  
  customers.forEach ( (customer) => {
    let minIndex = tills.indexOf(Math.min(...tills))
    tills[minIndex] += customer
  })
  console.log(tills)
  return Math.max(...tills)
}
