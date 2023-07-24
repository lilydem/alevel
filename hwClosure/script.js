// function makeProfileTimer() {
//     const start = performance.now();
    
//     return function() {
//       const end = performance.now();
//       return end - start;
//     }
//   }
  
  
//   const timer = makeProfileTimer();
//   alert('Вимiрюємо час роботи цього alert');
//   alert(`Час роботи цього alert: ${timer()} мс`);
  
//   const timer2 = makeProfileTimer();
//   prompt('');
//   alert(`Час роботи двох аlert та одного prompt: ${timer()} мс`);
//   alert(`Час роботи prompt та попереднього alert: ${timer2()} мс`);
  
//   function makeSaver(fn) {
//     let result; 
  
//     return function () {
//       if (!result) {
//         result = fn();
//       }
//       return result;
//     };
//   }
  
// let saver = makeSaver(Math.random);
// let value1 = saver();
// let value2 = saver();
// console.log(`Random: ${value1} === ${value2}`); 

// let namePrompt = prompt.bind(window, 'Як тебе звуть?');
// let nameSaver = makeSaver(namePrompt);
// alert(`Привіт! Prompt ще не було!`);
// alert(`Привіт ${nameSaver()}. Щойно запустився prompt, перший та останній раз`);
// alert(`Слухай, ${nameSaver()}, го пити пиво. Адже prompt був лише один раз`);

// function myBind(fn, context, ...defaults) {
//     return function (...args) {
//       const bindedArgs = args.map((arg, index) => (args[index] === undefined ? defaults.shift() : arg));
//       return fn.apply(context, bindedArgs);
//     };
//   }  


// let pow5 = myBind(Math.pow, Math, 5);
// let cube = myBind(Math.pow, Math, 3);
// let chessMin = myBind(Math.min, Math, 4, 5, 8, 9);
// let zeroPrompt = myBind(prompt, window, "0");
// let bindedJoiner = myBind((...params) => params.join(''), null, 'b', 'e', 'f');

// console.log(pow5(2)); // 32
// console.log(pow5(4)); // 1024
// console.log(cube(3)); // 27

// console.log(chessMin(-1, -5, 3, 15)); // -5

// let someNumber = zeroPrompt("Введіть число"); // Prompt відобразить "Введіть число" зі значенням за замовчуванням "0".

// console.log(bindedJoiner('a', 'c', 'd')); // 'abcdef'
// console.log(bindedJoiner('1', '2', '3')); // '1b23ef'


// function checkResult(original, validator) {
//     function wrapper(...params) {
//       const result = original.apply(null, params);
  
//       if (validator(result)) {
//         return result;
//       } else {
//         return wrapper.apply(null, params);
//       }
//     }
  
//     return wrapper;
//   }
  
  
//   const numberPrompt = checkResult(prompt, (x) => !isNaN(+x));
//   const number = +numberPrompt("Введіть число", "0");
  
//   const gamePrompt = checkResult(prompt, (x) =>
//     ["камень", "ножиці", "папір"].includes(x.toLowerCase())
//   );
//   const turn = gamePrompt("Введіть щось зі списку: 'камень', 'ножиці', 'папір'");
    
//   function RandomHigh() {
//     return checkResult(
//       () => Math.random() * 0.5 + 0.5,
//       (x) => x >= 0.5 && x <= 1
//     )();
//   }
  
//   function AlwaysSayYes() {
//     return checkResult(confirm, (result) => result)();
//   }
  
//   function respectMe() {
//     return checkResult(prompt, (input) => input.trim() !== "")(
//       "Введіть щось у поле:"
//     );
//   }
  
