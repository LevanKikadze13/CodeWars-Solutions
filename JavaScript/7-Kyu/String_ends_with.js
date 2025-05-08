function highAndLow(numbers){
  let arr = numbers.split(" ").map(element => +element)

  return Math.max(...arr) + " " + Math.min(...arr)


}
