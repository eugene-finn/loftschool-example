/* ДЗ 6 - Асинхронность и работа с сетью */

/*
 Задание 1:

 Функция должна возвращать Promise, который должен быть разрешен через указанное количество секунду

 Пример:
   delayPromise(3) // вернет promise, который будет разрешен через 3 секунды
 */
function delayPromise(seconds) {
}

/*
 Задание 2:

 2.1: Функция должна вернуть Promise, который должен быть разрешен с массивом городов в качестве значения

 Массив городов пожно получить отправив асинхронный запрос по адресу
 https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json

 2.2: Элементы полученного массива должны быть отсортированы по имени города

 Пример:
   loadAndSortTowns().then(towns => console.log(towns)) // должна вывести в консоль отсортированный массив городов
 */
function loadAndSortTowns() {
}

export {
    delayPromise,
    loadAndSortTowns
};
/* ДЗ 6 - Асинхронность и работа с сетью */

/*
 Задание 1:

 Функция должна возвращать Promise, 
 // который должен быть разрешен через указанное количество секунду

 Пример:
   delayPromise(3) // вернет promise, который будет разрешен через 3 секунды
 */
function delayPromise(seconds) {
  return new Promise(function (resolved) {
    setTimeout(resolved, seconds * 1000);
  });
}

// почему этот вариант не правильный?
// function delayPromise(seconds) {
//   setTimeout(function () {
//     return new Promise
//   }, seconds);
// }

/*
 Задание 2:

 2.1: Функция должна вернуть Promise, который должен быть разрешен с массивом городов
  в качестве значения

 Массив городов пожно получить отправив асинхронный запрос по адресу
 https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json

 2.2: Элементы полученного массива должны быть отсортированы по имени города

 Пример:
   loadAndSortTowns().then(towns => console.log(towns)) // должна вывести в консоль отсортированный массив городов
 */

function loadAndSortTowns() {
  return new Promise(function (resolve, reject) {
    fetch('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json')
      .then(resp => {
        return resp.json();
      })
      .then(towns => {
        let sortTowns = towns.sort((a, b) => {
          return a.name > b.name ? 1 : -1;
        })
        resolve(sortTowns);
      })
      .catch((e) => reject(e));
  })
}



export {
  delayPromise,
  loadAndSortTowns
};
