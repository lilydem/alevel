const dacshund = {
  color: "black",
  size: "schmol",
  volume: "loud",
};

const key1 = prompt("Введіть назву першого ключа:");
if (key1 in dacshund) {
  console.log(`Ключ вже існує!`);
} else {
  const value1 = prompt(`Введіть значення для ключа "${key1}":`);

  dacshund[key1] = value1;
}
const key2 = prompt("Введіть назву другого ключа:");
if (key2 in dacshund) {
  console.log(`Ключ вже існує!`);
} else {
  const value2 = prompt(`Введіть значення для ключа "${key2}":`);

  dacshund[key2] = value2;
}
console.log("Початковий об'єкт dacshund:", dacshund);

const dacshundCopy = { ...dacshund };

console.log("Копія об'єкта dacshund:", dacshundCopy);

var json_structure = {
  tagName: "body",
  children: [
    {
      tagName: "div",
      children: [
        {
          tagName: "span",
          children: ["Enter a data please:"],
        },
        {
          tagName: "br",
        },
        {
          tagName: "input",
          attrs: {
            type: "text",
            id: "name",
          },
        },
        {
          tagName: "input",
          attrs: {
            type: "text",
            id: "surname",
          },
        },
      ],
    },
    {
      tagName: "div",
      children: [
        {
          tagName: "button",
          attrs: {
            id: "ok",
          },
          children: ["OK"],
        },
        {
          tagName: "button",
          attrs: {
            id: "cancel",
          },
          children: ["Cancel"],
        },
      ],
    },
  ],
};

var second_button_text = json_structure.children[1].children[1].children[0];
console.log(second_button_text);
var second_input_id = json_structure.children[0].children[3].attrs.id;
console.log(second_input_id);

var userInput = prompt("Введіть значення атрибута id для кнопки 'OK':");

json_structure.children[1].children[0].attrs.id = userInput;

console.log(json_structure);

var {
  children: [
    {
      children: [spanText],
    },
    {
      children: [
        {
          children: [, secondButtonText],
        },
        {
          attrs: { id: secondInputId },
        },
      ],
    },
  ],
} = json_structure;

console.log("Значення тексту у тезі span:", spanText); 
console.log("Значення тексту в другій кнопці:", secondButtonText); 
console.log("Значення атрибуту id у другому input:", secondInputId);

let arr = [1, 2, 3, 4, 5, "a", "b", "c"];

let [even1, even2, ...oddArr] = arr.filter((num) => typeof num === "number");

let odd1, odd2, odd3;
[odd1, odd2, odd3] = oddArr;

let lettersArr = arr.filter((elem) => typeof elem === "string");

console.log("Even Numbers:", even1, even2);
console.log("Odd Numbers:", odd1, odd2, odd3);
console.log("Letters Array:", lettersArr);


let arr2 = [1, "abc"];

let [number, str] = arr2;

let [s1, s2, s3] = str.split("");

console.log("Number:", number);
console.log("s1:", s1);
console.log("s2:", s2);
console.log("s3:", s3);

let obj = {
    name: 'Ivan',
    surname: 'Petrov',
    children: [
      { name: 'Maria' },
      { name: 'Nikolay' }
    ]
  };
  
  let { children: [{ name: name1 }, { name: name2 }] } = obj;
  
  console.log('name1:', name1);
  console.log('name2:', name2);

  
  let arr3 = [1, 2, 3, 4, 5, 6, 7, 10];

  let [a, b, ...rest] = arr3;
  let length = arr3.length;
  
  console.log('a:', a);
  console.log('b:', b);
  console.log('length:', length);
  