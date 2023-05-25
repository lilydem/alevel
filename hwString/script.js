// String: greeting
// Запитайте у користувача ім'я та привітайте його за допомогою alert.
// let yourName = prompt("Введіть ім'я") 
// alert("Привіт, " + yourName + " !") 

// String: gopni4ek
// Попросіть користувача ввести рядок через 'prompt'. Використовуючи split та join зробіть що б після будь-якої коми слід було слово блін, .
// let user_input = prompt("Введіть рядок:");
// let words = user_input.split(" ");
// let result = words
//   .map((word) => (word.endsWith(",") ? word + " блін" : word))
//   .join(" ");
// alert(result);

// String: capitalize
// Перетворіть рядок, введений користувачем, таким чином, щоб перша літера ставала великою, а решта - маленькими:
// let str = prompt("Введіть рядок:");
// let result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// console.log(result); 

// String: word count
// Порахуйте кількість слів у рядку. Використовуйте розбиття за пробілами. Довжина масиву називається так само, як і довжина рядка.
// function countWords(string) {
//     var words = string.split(" ");
//     return words.length;
//   }
  
//   let inputString = prompt("Введіть рядок:");
//   let wordCount = countWords(inputString);
//   console.log("Кількість слів: " + wordCount);
  
// String: credentials
// Запитайте у користувача ПІБ, використовуючи prompt тричі. Викиньте зайві пробiли, використовуючи .trim
// Використовуючи String: capitalize зробіть так, щоб кожне слово у ПІБ було з великої літери, а решта - маленькі
// Об'єднайте ці три рядки в один змінний fullName і виведіть кудись (alert, console.log). Не забудьте пробiли між словами.
// let firstName = prompt("Введіть своє ім'я:");
// let lastName = prompt("Введіть своє прізвище:");
// let middleName = prompt("Введіть своє по батькові:");

// let capitalizedFirstName = firstName.trim().charAt(0).toUpperCase() + firstName.trim().slice(1).toLowerCase();
// let capitalizedLastName = lastName.trim().charAt(0).toUpperCase() + lastName.trim().slice(1).toLowerCase();
// let capitalizedMiddleName = middleName.trim().charAt(0).toUpperCase() + middleName.trim().slice(1).toLowerCase();

// let fullName = capitalizedLastName + ' ' + capitalizedFirstName + ' ' + capitalizedMiddleName;

// console.log(fullName);


// String: beer
// Не використовуючи .replace замініть слово пиво у рядку на слово чай
// let str = "Було жарко. Василь пив пиво вприкуску з креветками";
// let result = str.replace(/пиво/g, "чай");
// console.log(result); // "Було жарко. Василь пив чай уприкуску з креветками"

// String: no tag
// Знайдіть у рядку HTML тег. Видаліть, тобто виріжте його - створіть інший рядок, в якому будуть всі символи до тега і після нього Тег може бути будь-яким. split і join не використовуйте, натомість використовуйте indexOf і slice. .replace не використовуйте
// let str = "якийсь текст, в якому є один тег <br/> і всяке інше";
// let startTag = "<";
// let endTag = ">";
// let startIndex = str.indexOf(startTag);
// let endIndex = str.indexOf(endTag, startIndex + 1);
// let result = str.slice(0, startIndex) + str.slice(endIndex + 1);

// console.log(result);

// String: big tag
// На основі попереднього завдання зробіть тег великими літерами. replace, split і join не використовуйте, натомість використовуйте indexOf і slice,
// let str = "якийсь текст у якому є один тег <br/> і всяке інше";
// let startTag = "<";
// let endTag = ">";
// let startIndex = str.indexOf(startTag);
// let endIndex = str.indexOf(endTag, startIndex + 1);
// let tag = str.slice(startIndex, endIndex + 1);
// let result = str.slice(0, startIndex) + tag.toUpperCase() + str.slice(endIndex + 1);

// console.log(result);

// String: new line
// Попросіть користувача ввести рядок черезprompt. prompt не дозволяє вводити рядкові рядки. Дамо користувачеві таку можливість - Користувач може вводити \n як маркер нового рядка.
// Використовуючи split та join зробіть цей рядок воістину багаторядковим і виведіть в консоль або через alert.
// let userInput = prompt("Введіть рядок з маркерами нового рядка (\\n):");
// let formattedString = userInput.split("\\n").join("\n");
// console.log(formattedString);

// String: youtube
// Нехай користувач введе будь-який текст із посиланням на youtube. Використовуючи регулярний вираз вийміть із посилання ідентифікатор видосу і створіть рядок із вбудованим блоком HTML. Додайте блок на сторінку.
// оголосіть константу з регулярним виразом
// використовуйте метод match, який поверне вам масив
// вийміть із масиву елемент із ідентифікатором відео
// вивчіть HTML код вбудовування відео на сторінку на youtube.
// використовуючи інтерполяцію рядків, вклейте ідентифікатор відео в HTML код вбудовування відео
// використовуючи document.write відправте отриманий рядок на сторінку.

// let youtubeLink = prompt("Введіть посилання на YouTube відео:");

// let regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|[^#]*[?&]v=|youtu\.be\/|[^#]*#t=([^&#]+)|\/videos\/|embed\/|[^#\s]*[?&]list=))([a-zA-Z0-9_-]{11})/i;
// let match = youtubeLink.match(regex);

// if (match) {
//   let videoId = match[1];
//   let embedHtml = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
//   document.write(embedHtml);
// } else {
//   document.write("Посилання на YouTube відео не знайдено.");
// }
