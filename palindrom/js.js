function isPalindrome(str) {
  // меняем регистр букв и убираем пробелы у оригинальной строки
  let Original = str.toLowerCase().replace(/\s/g, '');

  // переворачиваем строку, меняем регистр букв и удаляем пробелы
  let Reverse = str.split('').reverse().join('').toLowerCase().replace(/\s/g, '');

  // сравнение оригинальной и перевернутой строки
  if (Original == Reverse) {
    return true;
  }
    
  return false;  
}

/* Тесты */
console.assert(isPalindrome('racecar') === true, '"racecar" является палиндромом, функция должна принимать значение true');
console.assert(isPalindrome('table') === false, '"table" не является палиндромом, функция должна принимать значение false');
console.assert(isPalindrome('А роза упала на лапу Азора') === true, '"А роза упала на лапу Азора" является палиндромом, функция должна принимать значение true');