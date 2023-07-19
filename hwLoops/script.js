// let array = [];

// while (true) {
//   let userInput = prompt("Введіть елемент (або натисніть Скасувати, щоб завершити):");

//   if (userInput === null) {
//     break;
//   }

//   array.push(userInput);
// }

// console.log(array);

// let array = [];
// let index = 0;

// while (true) {
//   let userInput = prompt("Введіть елемент (або натисніть Скасувати, щоб завершити):");

//   if (userInput === null) {
//     break;
//   }

//   array[index] = userInput;
//   index++;
// }

// console.log(array);

// let iterations = 0;

// while (true) {
//   iterations++;
  
//   if (Math.random() > 0.9) {
//     break;
//   }
// }

// alert("Кількість ітерацій: " + iterations);

// while (true) {
//     var response = prompt("Натисніть OK або Скасувати:");
//     if (response === "OK") {
//       break;
//     } else if (response === "Скасувати") {
//       continue;
//     }
//   }
  
// function sumOfArithmeticProgression(N) {
//     let sum = 0;
//     for (let i = 1; i <= N; i += 3) {
//       sum += i;
//     }
//     return sum;
//   }
  
//   const N = parseInt(prompt("Введіть значення N: "));
//   const result = sumOfArithmeticProgression(N);
//   console.log("Сума арифметичної прогресії: ", result);
  


// var length = 10;

// var result = "";
// for (var i = 0; i < length; i++) {
//     result += "# ";
// }

// console.log(result);

// let result = '';
// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     result += j;
//   }
//   result += '\n';
// }

// console.log(result);


function createChessboard(rows, columns) {
    let chessboard = "";
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if ((i + j) % 2 === 0) {
          chessboard += "#";
        } else {
          chessboard += ".";
        }
      }
      chessboard += "\n";
    }
    return chessboard;
  }
  
  const rows = 10;
  const columns = 12;
  const chessboard = createChessboard(rows, columns);
  console.log(chessboard);
  