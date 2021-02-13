function SearchMissed(array) {
  let searched;

  // сортировка массива по возрастанию
  array.sort(function (a, b) {
    return a - b;
  });

  // поиск и возврат пропущенного числа
  for (i = 0; i<array.length; i++) {

    if((array[i+1]-array[i]) !== 1) {
      searched = array[i]+1; 
      return searched;
    }

  }

}

/* Тесты */
console.assert(SearchMissed([1,10,3,6,7,9,5,4,2]) === 8, 'В этой последовательности пропущено значение 8', SearchMissed([1,10,3,6,7,9,5,4,2]))
console.assert(SearchMissed([1,10,3,6,7,9,5,4,2,8,11,13,12,14,16,15,18]) === 17, 'В этой последовательности пропущено значение 8', SearchMissed([1,10,3,6,7,9,5,4,2,8,11,13,12,14,16,15,18]))
