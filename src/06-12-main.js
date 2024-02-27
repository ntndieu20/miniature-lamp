// Bài tập coding 3: Bài toán gọi taxi
// Bài toán gọi taxi
// Viết hàm getTaxiCount(passengersCount) nhận vào là số hành khách và trả về là số taxi cần gọi để chở hết số khách đó.

// Yêu cầu:

// Khi số khách lớn hơn 4, ưu tiên dùng xe 7 chỗ

// Nếu số khách nhỏ hơn hoặc bằng 4 thì dùng xe 4 chỗ

// Trả về con số duy nhất là tổng của cả 2 loại xe taxi cần phải gọi.


// Ví dụ:

// getTaxiCount(3) --> 1 xe 4 chỗ

// getTaxiCount(6) --> 1 xe 7 chỗ

// getTaxiCount(10) --> 2 xe vì 1 xe 7 chỗ và 1 xe 4 chỗ

// getTaxiCount(20) --> 3 xe 7 chỗ

// Happy coding!

function getTaxiCount(passengersCount) {
  // your code here
   if(passengersCount <= 0) return 1;

  if(passengersCount <= 7){
    return 1;
  } else{
    return (Math.ceil(passengersCount / 7));
  }
}
console.log(getTaxiCount(7));


function getMaxDigit(n) {
  // your code here
  if(n < 0 && n > 1000) return -1;
  
  let one = 0;
  let two = 0;
  let three = 0;
  let max = 0
  
  const number  = n.toString().length
  if(number == 1){
      return max = n;
  } else if(number == 2){
       one = n % 10;
       two = Math.trunc((n % 100) / 10);
       max = one;
       if(two > max){
           max = two;
       }
       return max;
  } else{
      one = n % 10;
      two = Math.trunc((n % 100) / 10);
      three = Math.trunc(n / 100);
      max = one;
      if(two > max){
           max = two;
      }
      if(three > max){
          max = three;
      }
      return max;
  }
}
console.log(getMaxDigit(1));
console.log(getMaxDigit(12));
console.log(getMaxDigit(123));
console.log(getMaxDigit(921));


function compareNumbers(a, b) {
  // your code here
  if(a > b) return 1;
  if(a == b) return 0;
  if( a < b ) return -1;
}
console.log(compareNumbers(3, 5));
console.log(compareNumbers(9, 7));
console.log(compareNumbers(7, 7));



function isSymmetricNumber(n) {
  // your code here
  if(n < 0 && n > 999) return false;
  
  let one = 0;
  let two = 0;
  let three = 0;
  let is = false;
  if( n < 10){
      return true;
  }else if(n < 100 && n > 10) {
      one = n % 10;
      two = Math.trunc( n / 10);
      if( one == two ){
          return is = true;
      }
  } else {
      one = n % 10;
      two = Math.trunc( n / 10);
      three = Math.trunc( n / 100);
      if( one == three || (one == two && one == three)){
          return is = true
      }
  }
  
}
console.log(isSymmetricNumber(-10));
console.log(isSymmetricNumber(111));
console.log(isSymmetricNumber(121));
