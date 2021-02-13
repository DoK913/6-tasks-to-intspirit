function  uniqueEl(arr) {
  // сортировка массива по возрастанию
  const sorted = arr.sort(function (a, b) {
    return a - b;
  });
  
  // проверка массива на наличие элемента без дубликата
  const filtered = sorted.filter(function ( currentValue, index, array ) {
    // условие проверки - элемент должен быть НЕ равен предыдущему и следующему элементу массива
    return array[index] !== array[index+1] && array[index] !== array[index-1];
  });

  // приведение к типу "number" от типа "object" и возврат найденного элемента
  return Number(filtered);  
}

/* Тесты */
console.assert(uniqueEl([1,9,50,2,8,60,3,13,9,40,3,8,1,50,2,40,60]) === 13, 'Something went wrong, right result is 13');
console.assert(uniqueEl([3,6,7,3,6,1,7]) === 1, 'Something went wrong, right result is 1');
console.assert(uniqueEl([12,2,3,5,10,12,3,800,10,2,5]) === 800, 'Something went wrong, right result is 800');


