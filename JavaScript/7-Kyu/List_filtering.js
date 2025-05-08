function filter_list(l) {
  
  l = l.filter(element => typeof element === "number");

  return l
}
