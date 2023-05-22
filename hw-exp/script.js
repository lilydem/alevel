// assign: evaluation
// var a = 5;  
// var b, c;

// b = a * 5;  
// b = c = b/2; 
// Дослідіть код, знайдіть вирази у ньому. Розставте дужки так, щоб код не змінив своєї поведінки (працював так само як і зараз). Поясніть, як і в якому порядку обчислюються вирази та вирази.

// Number: age
// За допомогою prompt запитати у користувача його вік та підрахувати рік народження. Рік народження вивести за допомогою alert.
// let age = prompt("Please enter your age:");
// let currentYear = new Date().getFullYear();
// let birthYear = currentYear - age;

// alert("Your birth year is: " + birthYear);

// Number: temperature
// За допомогою prompt запитати у користувача температуру в градусах Цельсія та перевести їх у Фаренгейти та/або навпаки.
// let celsius = prompt("Enter the temperature in Celsius:");
// let fahrenheit = (celsius * 9/5) + 32;
// alert(`The temperature in Fahrenheit is: ${fahrenheit.toFixed(2)}`);

// let fahrenheit = prompt("Enter the temperature in Fahrenheit:");
// let celsius = (fahrenheit - 32) * 5/9;
// alert(`The temperature in Celsius is: ${celsius.toFixed(2)}`);


// Number: divide
// Зробіть калькулятор для розрахунку поділу націло двох чисел. Використовуйте Math.floor або альтернативи.
// let a = prompt("Enter a number")
// let b = prompt("Enter b number")
// function divide(a, b) {
//     return Math.floor(a / b);
//   }  
// alert(divide(a, b))

// Number: currency
// Напишіть код, який обчислює обмін валют за курсом, заданим за допомогою константи const rate = КУРС ВАЛЮТИ Вважайте значення в одній валюті за допомогою 'prompt', після чого помножіть/поділіть це число на 'rate'. Виведіть результат, використовуючи alert. Обмежте кількість знаків після коми двома (нас не хвилюють дрібні частини центів/копійок)
// const rate = 37.6; 
// const input = prompt('Введіть суму в гривні');
// const exchange = input / rate;
// const roundedExchange = exchange.toFixed(2);
// alert(roundedExchange);

// Number: RGB
// За допомогою prompt організуйте введення трьох констант red, green, blue у десятковій системі. Створіть із них CSS-колір у форматі #RRGGBB використовуючи шістнадцяткову систему числення. Значення менше 16ти поки що можна не враховувати.

// Number: flats
// Зробіть калькулятор, який дозволить вам виходячи з інформації про кількість поверхів у будинку та кількість квартир на поверсі знаходити під'їзд та поверх певної квартири за її номером. Наприклад для 9поверхового будинку по 4 квартири на поверх 81 квартира знаходиться на 3-му поверсі третього під'їзду. Користувач повинен вводити за допомогою prompt кiлькiсть поверхiв, кiлькiсть квартир на поверсi та номер квартири. Код повинен видавати пiд'їзд та поверх по номеру квартири.
var floor = parseInt(prompt("Введіть кількість поверхів у будинку:"));
var floorapt = parseInt(prompt("Введіть кількість квартир на поверсі:"));
var apt = parseInt(prompt("Введіть номер квартири:"));
var enter = Math.ceil(apt / (floor * floorapt));
var floornum = Math.ceil((apt % (floor * floorapt)) / floorapt);

alert("Квартира з номером " + apt + " знаходиться на " + floornum + "-му поверсі " + enter + "-го під'їзду.");
