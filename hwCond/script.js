let a = 10
{
    let b = 20
    {
        let c = 30
        //які тут будуть значення змінних a, b, c, d 10,20,30,undefined        
        b++
        a *= 10
    }
    {
        let c = 50
        //які тут будуть значення змінних a, b, c, d 100,21,50,undefined
        b += 500
    }
    {
        const a = 100500
        const d = "value"
        //які тут будуть значення змінних a, b, c, d 100500,521,undefined,value
        {
            let a = -50
            b     = 1000
            //які тут будуть значення змінних a, b, c, d -50,1000,undefined,value
        }
        //які тут будуть значення змінних a, b, c, d 100500,1000,undefined,value
    }
    //які тут будуть значення змінних a, b, c, d 100,1000,undefined,undefined
}
//які тут будуть значення змінних a, b, c, d 100, undefined

// var age = +prompt("Скільки вам років?", "");

// if (age > 0 && age < 18) {
//     alert("школяр");
// } else if (age >= 18 && age < 30) {
//     alert("молодь");
// } else if (age >= 30 && age < 45) {
//     alert("зрілість");
// } else if (age >= 45 && age < 60) {
//     alert("захід сонця");
// } else if (age >= 60) {
//     alert("як пенсія?");
// } else if (age < 0) {
//     alert("ти шо жартуєш?");
// } else {
//     alert("чи кіборг, чи KERNESS");
// }

// let color = prompt("Введіть колір","");
// if (color === "red") {
//      document.write("<div style='background-color: red;'>червоний</div>");
// } else if (color === "black") {
//      document.write("<div style='background-color: black; color: white;'>чорний</div>");
// } else if (color === "blue") {
//      document.write("<div style='background-color: blue;'>синій</div>");
// } else if (color === "green") {
//      document.write("<div style='background-color: green;'>зелений</div>");
// } else {
//      document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
// }

const noSwitch = (key, cases, defaultKey = 'default') => {
    if (key in cases) {
      return cases[key]();
    } else if (defaultKey in cases) {
      return cases[defaultKey]();
    }
  };

  const drink = prompt("Що ви любите пити?");
noSwitch(drink, {
  воду: () => console.log('Найздоровіший вибір!'),
  чай() {
    console.log('Смачна та корисна штука. Не перестарайтеся з цукром');
  },
  пиво: () => console.log('Добре влітку, та в міру'),
  віскі: function () {
    console.log('Та ви, батечку, естет! Не забудьте лід і сигару');
  },
  default() {
    console.log('шото я не зрозумів');
  }
});


