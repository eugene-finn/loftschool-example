/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        let item = array[i];

        fn(item, i, array);

        // item – очередной элемент массива.
        // i – его номер.
        // arr – массив, который перебирается.
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    var newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push(fn(array[i], i, array) );
    }

    return newArray;

}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива,
 который будет передан в параметре array

*/
function reduce(array, fn, initial) {
  
    var previousValue = initial || array[0], 
        index = initial ? 0 : 1;

    for (; index < array.length; index++) {

        // previousValue – последний результат вызова функции, он же «промежуточный результат».
        // currentItem – текущий элемент массива, элементы перебираются по очереди слева - направо.
        // index – номер текущего элемента.
        // array – обрабатываемый массив.

        previousValue = fn(previousValue, array[index], index, array);
    }

    return previousValue

}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать
 их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    var array = [];

    for (var key in obj) {
        array.push( key.toUpperCase() );
    }

    return array;

}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
    var newArray = [];
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
