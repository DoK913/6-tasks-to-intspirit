function StringTransform(s) {
  let newS = "";
  let count = 0;

  // цикл перебора всех элементов строкового массива
  for (let i = 0; i < s.length; i++) {
    count++;

    // условие формирования строки нового вида
    if (s[i] !== s[i+1]) {
      newS += s[i] + count;
      count = 0;
    }
    
  }
  
  return newS;
}

/* Тесты */
console.assert(StringTransform("aaabbdcccccf") !== NaN, 'The output of StringTransform: a3b2d1c5f1');
console.assert(StringTransform("aaabbdcccccf") !== undefined, 'The output of StringTransform: a3b2d1c5f1');
console.assert(StringTransform("aaabbdcccccf") === "a3b2d1c5f1", 'The output of StringTransform: a3b2d1c5f1');
console.assert(StringTransform("aadddaaabbbbf") === "a2d3a3b4f1", 'The output of StringTransform: a2d3a3b4f1');