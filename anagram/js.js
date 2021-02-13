// функция приведения строк к общему виду
function razbor(s) {
  return s.toLowerCase().split('').sort().join('')
}

function isAnagram(s1, s2, checkedFn) {
  //проверка двух строк
  return checkedFn(s1) === checkedFn(s2);
}

/* Тесты */
console.assert( isAnagram('friend','Finder', razbor ) === true, 'Actual result: true!');
console.assert( isAnagram('hello', 'bye', razbor ) === false, 'Actual result: false!' );
console.assert( razbor('Ba') === 'ab', 'Actual result: "ab"' );
console.assert( razbor('adc') === 'acd', 'Actual result: "acd"' );
console.assert( razbor('abc') === 'abc', 'Actual result: "abc"' );
console.assert( razbor('aBC') === 'abc', 'Actual result: "abc"' );

