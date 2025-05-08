function nbDig(n, d) {
  let count = 0;
  const regex = new RegExp(d, "g"); // compile once outside the loop

  while (n >= 0) {
    const squareStr = (n ** 2).toString();
    const matches = squareStr.match(regex);
    count += matches ? matches.length : 0;
    n--;
  }

  return count;
}
