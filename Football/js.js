function getResult(t1, t2, tr1, tr2) {
    // объявление переменной для проверки на малый или большой приз
    let conditionViktory = t1 - t2 === tr1 - tr2;

    // проверка на малый или большой приз
    if (conditionViktory) {
        
        if (t1 === tr1 && t2 === tr2) {
            return 2;
        }

        return 1;
    } 

    // проверка на малый приз или поражение
    if (t1 > t2 && tr1 > tr2) {
        return 1;
    }
    
    return 0;
}

/* Тесты в соответствии с примерами из задания */
console.assert(getResult(1,2,3,2) === 0, 'Тут должен быть 0, а не: %s', getResult(1,2,3,2))
console.assert(getResult(2,1,1,2) === 0, 'Тут должен быть 0, а не: %s', getResult(2,1,1,2))
console.assert(getResult(5,4,1,1) === 0, 'Тут должен быть 0, а не: %s', getResult(5,4,1,1))
console.assert(getResult(1,2,2,3) === 1, 'Здесь единица, а не: %s', getResult(1,2,2,3))
console.assert(getResult(3,2,5,2) === 1, 'Здесь единица, а не: %s', getResult(3,2,5,2))
console.assert(getResult(2,2,3,3) === 1, 'Здесь единица, а не: %s', getResult(2,2,3,3))
console.assert(getResult(2,2,2,2) === 2, 'Тут двоечка, а не: %s', getResult(2,2,2,2))
console.assert(getResult(3,2,3,2) === 2, 'Тут двоечка, а не: %s', getResult(3,2,3,2))
