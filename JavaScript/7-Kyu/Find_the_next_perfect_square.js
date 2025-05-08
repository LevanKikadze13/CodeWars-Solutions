function findNextSquare(sq) {
  if(Math.sqrt(sq)%1 === 0){
    while(Math.sqrt(sq + 1)%1 != 0){
        sq += 1
    }
    return sq + 1
}
return -1
}
