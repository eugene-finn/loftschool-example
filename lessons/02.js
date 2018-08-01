/* // Объекты и массивы

var name = "Sergey";
var lastName = "Petrov";
var old = "30";
var profession = "Driver"

// Интерполяция строк
var fullName = `${name} ${lastName} (${old}, ${profession})`;

console.log(fullName);


// Объекты

var obj = { 
    name: 'Tomas',
    lastName: 'Mor',
    old: 40,
    work: 'Coder'
};

console.log(obj.name);

obj.lastName = 'Templar';
console.log('lastName');

console.log(obj.old);
console.log('work');


// Массивы

var array = ['Sergey', 'Ivan', 'Mike'];

console.log(array[1]); // Ivan

array[1] = 'Petr';

console.log(array[1]); // Petr
console.log(array.length); // 3

array.push('Alex');

for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Массив с объектами внутри

var array2 = [
    {
        name: 'Jerry',
        lastName: 'Finn'
    },
    {
        name: 'Tomas',
        lastName: 'Mor'
    },
    {
        name: 'Simon',
        lastName: 'Templar'
    }
]

for (let i = 0; i < array2.lenth; i++) { // let для незасорения глобальной области видимости
    console.log(array2[i].name);
}

// log - свойство объекта console

console {
    log: function () {
        // ....
    }
}




// Деструктурирующие присваивание 

var input = "Simon Templar";
var parts = input.split(' ');

var name = parts[0];
var lastName = parts[1];

console.log(name);
console.log(lastName);


var [a, b] = [1, 2]

*/