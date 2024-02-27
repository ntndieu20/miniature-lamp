//Bài tập coding 1: Viết hàm lấy giá vé tương ứng theo số tuổi

// Khi khách hàng vào tham quan khu du lịch, tuỳ thuộc vào độ tuổi mà có giá vé khác nhau.

// Hãy viết một hàm nhận vào số tuổi của khách hàng, trả về giá vé tương ứng.

// Bảng giá như sau:

// Dưới 6 tuổi hoặc từ 70 tuổi trở lên là được FREE (trả về 0)

// Từ 6 - 12 tuổi giá vé là 20.000 VND

// Trên 12 tuổi thì đồng giá 50.000 VND

// Viết hàm function getTicketPrice(age)  để giúp mình lấy được giá tiền khi biết tuổi của khách hàng nhé.

// Trả về là một con số nguyên:

// -1 nếu dữ liệu không hợp lệ

// 0 nếu free

// các giá tiền nếu tuổi hợp lệ

// Giả sử người sống thọ nhất là 125 tuổi.

function getTicketPrice(age) {
  const freeTicket = age >= 70 || age < 6;
  const childTicket = age >= 6 && age <= 12;
  const nomarlTicket = age > 12 && age < 70;
  
  switch (age){
      case 'freeTicket':
        return 0;
      case 'childTicket': 
      return 20000;
      case 'nomarlTicket': 
      return 50000;
      default :
          return '-1';
  }
}
console.log(getTicketPrice('nomarlTicket'));


//Say hello bằng nhiều ngôn ngữ
// Viết hàm sayHello(languageCode) nhận vào languageCode và trả về câu xin chào của ngôn ngữ tương ứng.

// languageCode = 'en' --> Hello

// languageCode = 'vi' --> Xin chào

// languageCode = 'fr' --> Bonjour

// languageCode = 'cn' --> Nǐn hǎo

// languageCode = 'ja' --> Konnichiwa

// languageCode = 'ko' --> Anyoung haseyo

// Trường hợp không truyền languageCode hoặc languageCode không hợp lệ thì trả về mặc định "Hello"

function sayHello(languageCode) {
  switch (languageCode) {
    case 'en':
      return 'Hello';
    case 'vi':
      return 'Xin chào';
    case 'fr':
      return 'Bonjour';
    case 'cn':
      return 'Nǐn hǎo';
    case 'ja':
      return 'Konnichiwa';
    case 'ko':
      return 'Anyoung haseyo';
    default:
      return 'Hello';
  }
}

// Example usage:
let greeting = sayHello('ko')
console.log(greeting);

