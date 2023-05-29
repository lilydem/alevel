// Number: odd
// За допомогою prompt дізнайтесь число, введене користувачем. За допомогою if перевірте, чи число коректно перетворено з рядка. У разі помилки виведіть повідомлення Виведіть парне число чи ні, використовуючи if.
// let userInput = prompt("Введіть число:");
// let number = parseInt(userInput);

// if (!isNaN(number)) {
//   console.log("Число коректно перетворено з рядка.");

//   if (number % 2 === 0) {
//     console.log("Введене число є парним.");
//   } else {
//     console.log("Введене число не є парним.");
//   }
// } else {
//   console.log("Помилка: Введено некоректне число.");
// }

// String: lexics
// Запитайте у користувача текст і перевірте його на наявність некоректного слова або кількох некоректних слів. Використовуйте метод indexOf (або includes) рядки:
// "123".indexOf("23") //повертає 1 - позицію підрядка "23" до "123"
// "abcdef".indexOf("ef") // 4
// "12345".indexOf("some bad word") // -1 - не знайдено

// let userInput = prompt("Будь ласка, введіть текст:");
// let badWords = ["bad", "wrong"];
// let hasBadWords = false;

// for (const word of badWords) {
//   if (userInput.indexOf(word) !== -1) {
//     hasBadWords = true;
//     break;
//   }
// }

// if (hasBadWords) {
//   console.log("Текст містить некоректні слова.");
// } else {
//   console.log("Текст не містить некоректних слів.");
// }
// Boolean
// Напишіть код, який запитує ті чи інші питання з відповіддю "так"/"ні" за допомогою confirm, і зберігає відповіді в змінних.
// var name = prompt("Як вас звати?");

// var ageQuestion = "Чи вам більше 18 років?";
// var ageAnswer = prompt(ageQuestion + " (так/ні)").toLowerCase();
// while (ageAnswer !== "так" && ageAnswer !== "ні") {
//   ageAnswer = prompt("Будь ласка, введіть 'так' або 'ні'").toLowerCase();
// }
// var age = ageAnswer === "так";

// var citizenshipQuestion = "Чи є у вас громадянство?";
// var citizenshipAnswer = prompt(citizenshipQuestion + " (так/ні)").toLowerCase();
// while (citizenshipAnswer !== "так" && citizenshipAnswer !== "ні") {
//   citizenshipAnswer = prompt("Будь ласка, введіть 'так' або 'ні'").toLowerCase();
// }
// var hasCitizenship = citizenshipAnswer === "так";

// console.log("Ім'я: " + name);
// console.log(ageQuestion + " " + age);
// console.log(citizenshipQuestion + " " + hasCitizenship);

// if (age) {
//   console.log("Вам більше 18 років");
// } else {
//   console.log("Вам менше 18 років");
// }

// if (hasCitizenship) {
//   console.log("Ви маєте громадянство");
// } else {
//   console.log("Ви не маєте громадянства");
// }

// if (age && hasCitizenship) {
//   alert("Ви можете проголосувати на виборах");
// }

// var genderQuestion = "Ваша стать?";
// var isFemale = confirm(genderQuestion + " (OK - жінка, Cancel - чоловік)");

// if (isFemale) {
//   alert("Ви жінка");
// } else {
//   alert("Ви чоловік");
// }

// Boolean: if
// Розширте попереднє завдання умовами за отриманими змінними умовами (if-else). Наприклад, якщо ви питаєте стать користувача з допомогою confirm, то за умовою зробіть alert("Ви жінка") та alert("Ви чоловік")
// Comparison: sizes
// Зробіть переклад переклад з нашої системи розмірів до американської чи будь-якої на вибір. Використовуйте prompt, умови порівняння та alert.
// var ukrainianSize = prompt("Введіть розмір одягу за українською системою:"); 
// var usSize;

// if (ukrainianSize === "XS") {
//   usSize = "2";
// } else if (ukrainianSize === "S") {
//   usSize = "4";
// } else if (ukrainianSize === "M") {
//   usSize = "6";
// } else if (ukrainianSize === "L") {
//   usSize = "8";
// } else if (ukrainianSize === "XL") {
//   usSize = "10";
// } else if (ukrainianSize === "XXL") {
//   usSize = "12";
// } else {
//   alert("Невідомий розмір. Будь ласка, перевірте правильність введених даних.");
// }

// if (usSize) {
//   alert("Розмір одягу в американській системі: " + usSize);
// }

// Ternary
// Запитайте у користувача стать (confirm). Виведіть за допомогою alert "Ви чоловік" або "Ви жінка". Використовуйте тернарний оператор.
// var gender = prompt("Введіть вашу стать (чоловік або жінка):");

// var message = (gender === "чоловік") ? "Ви чоловік" : "Ви жінка";

// alert(message);

// Prompt: or
// Для завдання Number: age використовуючи АБО || вивести повідомлення про помилку (alert) якщо користувач не введе вік або натисне скасування (тобто prompt видасть порожній рядок або null, що інтерпретується як false).
// let age = prompt("Please enter your age:") || "";

// if (age === "") {
//   alert("Error: No age entered. Please try again.");
// } else {
//   let currentYear = new Date().getFullYear();
//   let birthYear = currentYear - age;
//   alert("Your birth year is: " + birthYear);
// }

// Confirm: or this days
// За допомогою цього ж трюку (використання АБО для запуску альтернативи) зробіть примхливого робота, який у confirm запитує "шопінг?", а у разі відмови - виводити alert "ти - бяка".
    // var response = confirm("Шопінг?");

    // if (response || response === null) {
    //   alert("Чудово! Поїдемо в магазин.");
    // } else {
    //   alert("Ти - бяка!");
    // }

// Default: or
// Попросіть користувача ввести ПІБ в три різні змінні. Використовуючи АБО || додайте рядки за промовчанням, які будуть зберігатися у внутрішніх змінних якщо користувач ввів порожній рядок або натиснув "Скасувати". Наприклад, якщо ви на кроці введення прізвища натиснете Escape, прізвище буде "Іванов"
// let lastName = prompt("Введіть прізвище:") || "Іванов";
// let firstName = prompt("Введіть ім'я:") || "Іван";
// let middleName = prompt("Введіть по батькові:") || "Іванович";

// Default: if
// Зробіть те саме за допомогою if та else
// let lastName = prompt("Введіть прізвище:");
// if (!lastName) {
//   lastName = "Іванов";
// }

// let firstName = prompt("Введіть ім'я:");
// if (!firstName) {
//   firstName = "Іван";
// }

// let middleName = prompt("Введіть по батькові:");
// if (!middleName) {
//   middleName = "Іванович";
// }

// Login and password
// Напишіть код, який запитує логін, перевіряє його на вірність, якщо логін вірний, просить ввести пароль і перевіряє його. В разі розбіжності логіну чи пароля виводити alert з текстом помилки. У разі успішного логіну – alert з привітанням. Правильні логін: admin та пароль: qwerty. Використовуйте вкладені if та else.
// var login = prompt("Введіть логін:");

// if (login === "admin") {
//   var password = prompt("Введіть пароль:");

//   if (password === "qwerty") {
//     alert("Логін та пароль вірні! Вітаємо, " + login + "!");
//   } else {
//     alert("Помилка: неправильний пароль!");
//   }
// } else {
//   alert("Помилка: неправильний логін!");
// }

// Currency exchange
// Попросіть користувача ввести валюту (наприклад, usd, eur, інші валюти додати до смаку) за допомогою prompt.
// Також поцікавтеся купити чи продати він бажає (використовуйте confirm).
// За допомогою декількох if та тернарного оператора всередині кожного з if задайте змінну rate, визначальну курс конкретної валюти на купівлю чи продаж. Зверніть увагу на місце оголошення змінної rate - вона має бути доступна в коді після всіх цих if.
// Попросіть користувача ввести суму на обмін
// Порахуйте та виведіть результат шляхом множення або поділу на rate
// Дайте можливість користувачеві вводити назви валют у будь-якому регістрі (UsD, eUR). Для цього в if використовуйте toUpperCase (або toLowerCase)
// Scissors
// Зробіть гру "камінь-ножиці-папір". Користувач вводить свій варіант через prompt, програма генерує свій варіант через Math.random() і виводить через alert. Наступний alert виводить ім'я переможця чи "нічия"
// Додаткове завдання
// Зліпити всі завдання в один текст, таким чином, щоб спочатку відбувалося введення назви завдання, а потім за допомогою if запускався код конкретного завдання
// Завдання на чорний пояс
// Зробіть гру "камінь-ножиці-папір", як описано вище, користуючись логічними операціями (&&, ||, !), не використовуючи if. Завдання має бути вирішене одним виразом (окрiм декларування змiнних - let та const не є виразами)