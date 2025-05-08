function digitalRoot(n) {
  let number = n.toString()
  const calculateDigitalRoot  = (number) =>{
    if(number.length === 1){
        return +number
    }
    else{
        let sum = 0 
        for(let i = 0; i < number.length; i++){
            sum += +number[i]
        }
        return calculateDigitalRoot(sum.toString())
    }
  }
  return calculateDigitalRoot(number)
}


