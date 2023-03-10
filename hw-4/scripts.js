// 1 Даний об'єкт з містами та країнами. Вивести масив значення в якому будуть рядки перетворені на цей формат: <Столиця> - це <Країна>.
const obj = {
  Kyiv: "Ukraine",
  London: "UK",
  Rome: "Italy",
  Crimea: "Ukraine",
};

for (const key in obj) {
  console.log(key, "- це", obj[key]);
}

// 2 Створити функцію яка виведе багатовимірний масив A. Даний масив містить список інших масивів B. Масиви B повинні містити по 3 значення. Та вивести його максимальне значення
let arrayA = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

arrayA.forEach((element) => {
  console.log(element);
  console.log(Math.max(...element));
});
// 3 Створити об'єкт із назвами днів тижня. Де ключами будуть uk і en, a значенням властивості uk буде масив із назвами днів тижня українською, а en - англійською. Після написати функцію яка буде виводити в консоль назву дня тижня, користуючись вище створеним об'єктом. Усі дні тижня починаються з 1 і закінчуються цифрою 7 (1- понеділок, 7 - неділя). Функція отримує змінну lang – назву мови дня тижня та змінну day – число дня тижня.
const weekdays = {
  uk: [
    0,
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П`ятниця",
    "Субота",
    "Неділя",
  ],
  en: [
    0,
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
};

console.log(weekdays["uk"][1], weekdays["en"][1]);

function searchDay(lang, day) {
  console.log(weekdays[lang][day]);
}

searchDay("uk", 6);

// 4 Створіть функцію, яка повертає суму двох найменших позитивних чисел із масиву мінімум 4 позитивних цілих чисел. Не передаються числа з плаваючою комою або непозитивні цілі числа.
function counter(number1, number2, number3, number4, number5) {
  if (
    isNaN(number1, number2, number3, number4, number5) ||
    number1 <= 0 ||
    number2 <= 0 ||
    number3 <= 0 ||
    number4 <= 0 ||
    number5 <= 0 ||
    number1 % 1 !== 0 ||
    number2 % 1 !== 0 ||
    number3 % 1 !== 0 ||
    number4 % 1 !== 0 ||
    number5 % 1 !== 0
  ) {
    console.log("invalid number");
    return 0;
  }

  let array = [number1, number2, number3, number4, number5];

  let min1 = Math.min.apply(null, array);
  let array2 = array.splice(Math.min.apply(null, array));
  let min2 = Math.min.apply(null, array2);
  let result = min1 + min2;

  console.log(`Result: ${result}`);
}

counter(1, 2, 3, 4, 5);


// 5 Даний масив одиниць і нулів, перетворіть еквівалентне двійкове значення ціле число.
// Наприклад: [0, 0, 0, 1] розглядається як 0001 двійкове уявлення 1.
const binary = [0,1,0,1,1,0,0]

function binaryConvert(arr) {

let res = '';

for (let i of binary) {
    res += i
}
return parseInt(res, 2)
}

console.log(binaryConvert (binary))