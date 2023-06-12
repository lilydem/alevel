// Confirms
// Збережіть у масив відповіді на запитання, задані за допомогою confirm. Використовуйте літеральний (декларативний) синтаксис масивів ([....,....,....])
// const answers = [];
// const question = "Ви любите полуницю?";
// const response = confirm(question);
// answers.push(response);
// console.log(answers);

// Prompts
// Збережіть у масив відповіді запитаннь, задані з допомогою prompts. Використовуйте доступ до масиву за індексом та присвоєння (arr[....] = ....)
// let answers = [];

// answers[0] = prompt("Запитання 1:");
// answers[1] = prompt("Запитання 2:");
// answers[2] = prompt("Запитання 3:");

// Item access
// Попросіть користувача ввести (prompt) індекс у масиві. Виведіть значення елемента за цим індексом. Спробуйте також ввести індекс "length".
// let array = [1, 2, 3, 4, 5];

// let index = prompt("Введіть індекс у масиві:");

// if (!isNaN(index)) {
//   index = parseInt(index);

//   if (index >= 0 && index < array.length) {
//     console.log("Значення елемента за індексом " + index + ": " + array[index]);
//   } else if (index === "length") {
//     console.log("Довжина масиву: " + array.length);
//   } else {
//     console.log("Недійсний індекс.");
//   }
// } else {
//   console.log("Будь ласка, введіть число для індексу.");
// }

// Item change
// Попросіть користувача ввести (prompt) індекс у масиві, а також значення для цього індексу. Присвойте у введений індекс введене значення
// var array = [];

// var index = prompt("Введіть індекс у масиві:");
// var value = prompt("Введіть значення для цього індексу:");

// array[index] = value;

// console.log(array);

// Multiply table
const arr = [
    [0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4],
    [0, 2, 4, 6, 8],
    [0, 3, 6, 9, 12],
    [0, 4, 8, 12, 16]
  ];


// Multiply table slice
// Використовуючи slice, створіть масив масивів (іншу таблицю/матрицю) з таблиці множення, в якій не буде нулів

// IndexOf Word
// Запитайте у користувача рядок із кількох слів. Запитайте в нього потрібне слово. Виведіть, яким за рахунком є це слово у рядку з кількох слів. Якщо слово не знайдено, виведіть повідомлення про це (а не -1)
// var sentence = prompt("Введіть рядок із кількох слів:");

// var word = prompt("Введіть слово, яке потрібно знайти:");

// var wordsArray = sentence.split(" ");

// var wordIndex = wordsArray.indexOf(word) + 1;

// if (wordIndex !== 0) {
//     console.log("слово знаходиться на позиції: " + wordIndex);
// } else {
//     console.log("слово не знайдено");
// }


// Reverse
// Додайте до масиву п'ять введених користувачем через prompt елементів (використовуйте push). Створіть інший масив із цими ж елементами в зворотньому напрямку. Для цього витягайте елементи з першого масиву використовуючи pop, додайте їх до другого використовуючи push.
// Створюємо перший масив
// var array1 = [];

// for (var i = 0; i < 5; i++) {
//   var userInput = prompt('Введіть елемент:');
//   array1.push(userInput);
// }

// var array2 = [];

// while (array1.length > 0) {
//   var poppedElement = array1.pop();
//   array2.push(poppedElement);
// }

// console.log('Перший масив:', array1);
// console.log('Другий масив:', array2);


// Reverse 2
// Переверніть другий масив із попереднього завдання ще раз (послідовність буде як у першому масиві), використовуючи shift та unshift.

// var array1 = [];

// for (var i = 0; i < 5; i++) {
//   var userInput = prompt('Введіть елемент:');
//   array1.push(userInput);
// }

// var array2 = [];

// while (array1.length > 0) {
//   var poppedElement = array1.pop();
//   array2.push(poppedElement);
// }

// var reversedArray2 = [];
// while (array2.length > 0) {
//   var shiftedElement = array2.shift();
//   reversedArray2.unshift(shiftedElement);
// }

// console.log('Перший масив:', array1);
// console.log('Другий масив (попередня послідовність):', array2);
// console.log('Другий масив (перевернута послідовність):', reversedArray2);

// Copy
// Скопіюйте масив створений у завданні Multiply table неглибоко

// const arrCopy = [...arr];


// Deep Copy
// Скопіюйте масив, створений у Multiply table, включаючи вкладені масиви (глибока копія). Не треба шукати якесь складне готове рiшення, зробiть це максимально простим чином за умови, що вам треба скопiювати 6 масивiв - загальний масив та п'ять масивiв у ньому;

// const arrCopy = arr.map(innerArray => [...innerArray]);
// console.log(arrCopy)

// Array Equals
// Створіть код, в якому буде дві змінні з масивами (arr і arr2), які рівні один одному (arr1 === arr2)

// Flat
// Зберіть усі елементи всіх вкладених масивів із завдання Multiply table в один масив. Його довжина повинна дорівнювати 25. Використовуйте spread-оператор
// const flattenedArr = [...arr[0], ...arr[1], ...arr[2], ...arr[3], ...arr[4]];

// console.log(flattenedArr.length); 
// console.log(flattenedArr); 

// Destruct
// Вийміть першу, п'яту та дев'яту літеру з рядка, введеного користувачем, використовуючи деструктуризацію. Виведіть їх
// const input = prompt("Введіть рядок:");
// const [first, , , , fifth, , , , ninth] = input;

// console.log("Перша літера: " + first);
// console.log("П'ята літера: " + fifth);
// console.log("Дев'ята літера: " + ninth);

// Destruct default
// Вийміть другу, четверту та п'яту літеру з рядка, введеного користувачем, використовуючи деструктуризацію. Якщо у рядку таких букв не виявиться задайте змінним значення за умовчанням ! (знак оклику). Виведіть ці змінні
// const input = prompt("Введіть рядок:");
// const [, second = '!', , fourth = '!', fifth = '!'] = input;

// console.log("Друга літера:" + second);
// console.log("Четверта літера:" + fourth);
// console.log("П'ята літера:" + fifth);

// Multiply table rest
// Реалізуйте завдання Multiply table slice, використовуючи оператор rest при деструктуризації. Використовуйте вкладену деструктуризацію. Після отримання чотирьох обрізаних вкладених масивів - зберіть загальний масив без нулів

// For Alert
// Є масив ["John", "Paul", "George", "Ringo"]. Виведіть кожне ім'я окремим alert(), використовуючи цикл for .... of
// const names = ["John", "Paul", "George", "Ringo"];

// for (const name of names) {
//   alert(name);
// }

// const currencies = ["USD", "EUR", "GBP", "UAH"];
// let str = "<select>";

// for (const currency of currencies) {
//   str += `<option>${currency}</option>`;
// }

// str += "</select>";
// document.write(str);


// const names = ["John", "Paul", "George", "Ringo"];
// let str = "<table>";

// for (const name of names) {
//   str += `<td>${name}</td>`;
// }

// str += "</table>";
// document.write(str);

// const names = ["John", "Paul", "George", "Ringo"];
// let str = "<table>";

// for (const name of names) {
//   str += "<tr>";
//   str += `<td>${name}</td>`;
//   str += "</tr>";
// }

// str += "</table>";
// document.write(str);
