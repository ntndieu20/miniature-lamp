//wirte a function to check if a number positive even number
//If yes, return true, Otherwise return false

//flag
function isPositiveEvenNumber(n) {
  let isValid ;  //undefined

  //checking ....
  if (n > 0 && n % 2 === 0) {
    isValid = true;
  } else  {
    isValid = false;
  }

  return isValid;
}
console.log(isPositiveEvenNumber(6))

// v2
function isPositiveEvenNumber(n) {
  let isValid = false;

  //checking ....
  if (n > 0 && n % 2 === 0) {
    isValid = true;
  }

  return isValid;
}
console.log(isPositiveEvenNumber(1));


// v3
function isPositiveEvenNumber(n) {
  if (n > 0 && n % 2 === 0) {
    return true;
  }

  return false;
}
console.log(isPositiveEvenNumber(5));


// v4
function isPositiveEvenNumber(n) {
  return n > 0 && n % 2 === 0
}
console.log(isPositiveEvenNumber(8));

