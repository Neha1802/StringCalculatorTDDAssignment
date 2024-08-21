function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  let delimeter = ",|\n";
  if (numbers.startsWith("//")) {
    const delimeterPart = numbers.match(/\/\/(.+)\n/)[1];
    if (delimeterPart.startsWith("[")) {
      delimeter = delimeterPart
        .match(/\[(.*?)\]/g)
        .map((d) => d.slice(1, -1))
        .join("|");
    }
    else{
      delimeter = delimeterPart;
    }
    numbers = numbers.split("\n")[1];
  }
  const numArr = numbers.split(new RegExp(`[${delimeter}]`));

  //check for negative numbers and throw exception of that
  const negativeNumbers = numArr.filter((num) => parseInt(num) < 0);
  if(negativeNumbers.length > 0){
    throw new Error(`Negative numbers are not allowed: ${negativeNumbers.join(", ")}`);
  }
  return numArr.reduce((sum, num) => sum + parseInt(num), 0);
}
module.exports = add;
