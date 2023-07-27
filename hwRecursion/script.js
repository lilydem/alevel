// function htmlTree(node) {
//     if (!node.tagName) {
//         return '';
//     }

//     let htmlString = `<${node.tagName}`;

//     if (node.attrs) {
//         for (const [attrName, attrValue] of Object.entries(node.attrs)) {
//             htmlString += ` ${attrName}='${attrValue}'`;
//         }
//     }

//     if (!node.children || node.children.length === 0) {
//         htmlString += '/>';
//     } else {
//         htmlString += '>';

//         for (const childNode of node.children) {
//             htmlString += htmlTree(childNode);
//         }

//         htmlString += `</${node.tagName}>`;
//     }

//     return htmlString;
// }

// const table = {
//     tagName: 'table',
//     attrs: {
//         border: "1",
//     },
//     children: [
//         {
//             tagName: 'tr',
//             children: [
//                 {
//                     tagName: "td",
//                     children: ["1x1"],
//                 },
//                 {
//                     tagName: "td",
//                     children: ["1x2"],
//                 },
//             ],
//         },
//         {
//             tagName: 'tr',
//             children: [
//                 {
//                     tagName: "td",
//                     children: ["2x1"],
//                 },
//                 {
//                     tagName: "td",
//                     children: ["2x2"],
//                 },
//             ],
//         },
//     ],
// };

// document.write(htmlTree(table));

// const table = {
//     tag: "table",
//     children: [
//         {
//             tag: "tr",
//             children: [
//                 {
//                     tag: "td",
//                     text: "Row 1, Cell 1"
//                 },
//                 {
//                     tag: "td",
//                     text: "Row 1, Cell 2"
//                 }
//             ]
//         },
//         {
//             tag: "tr",
//             children: [
//                 {
//                     tag: "td",
//                     text: "Row 2, Cell 1"
//                 },
//                 {
//                     tag: "td",
//                     text: "Row 2, Cell 2"
//                 }
//             ]
//         }
//     ]
// };

// function domTree(parent, data) {
//     if (!data || !data.tag) {
//         return;
//     }

//     const element = document.createElement(data.tag);

//     if (data.text) {
//         const textNode = document.createTextNode(data.text);
//         element.appendChild(textNode);
//     }

//     if (data.children && data.children.length > 0) {
//         data.children.forEach(child => {
//             domTree(element, child);
//         });
//     }

//     parent.appendChild(element);
// }

// domTree(document.body, table);


// function deepCopy(obj) {
//     if (typeof obj !== 'object' || obj === null) {
//       return obj; 
//     }
  
    
//     if (Array.isArray(obj)) {
//       return obj.map((item) => deepCopy(item)); 
//     }
  
    
//     const newObj = {};
//     for (const key in obj) {
//       if (Object.hasOwnProperty.call(obj, key)) {
//         newObj[key] = deepCopy(obj[key]);
//       }
//     }
//     return newObj;
//   }
  
  
//   const arr = [1, "string", null, undefined, {a: 15, b: 10, c: [1, 2, 3, 4], d: undefined, e: true }, true, false];
//   const arr2 = deepCopy(arr);
//   console.log(arr2);
  
//   const table = {a: 1, b: "hello", c: [1, 2, 3], d: {x: 10, y: 20}};
//   const table2 = deepCopy(table);
//   console.log(table2);
  
// function stringify(obj) {
//     if (obj === null || obj === undefined) {
//       return "null";
//     }
  
//     if (typeof obj === "string") {
//       return `"${obj}"`;
//     }
  
//     if (typeof obj === "number" || typeof obj === "boolean") {
//       return obj.toString();
//     }
  
//     if (Array.isArray(obj)) {
//       const elements = obj.map((element) => stringify(element));
//       return `[${elements.join(",")}]`;
//     }
  
//     if (typeof obj === "object") {
//       const properties = Object.keys(obj).map((key) => `"${key}":${stringify(obj[key])}`);
//       return `{${properties.join(",")}}`;
//     }
  
//     return undefined;
//   }

//   const obj = { name: "John", age: 30, isStudent: true, hobbies: ["reading", "coding"] };

//   const jsonString = stringify(obj);
//   console.log(jsonString);

//   const parsedObj = JSON.parse(jsonString);
//   console.log(parsedObj);

// function getElementById(idToFind) {
//     function walker(parent) {
//       for (const child of parent.children) {
//         if (child.id === idToFind) {
//           throw child;
//         }
  
//         if (child.children.length > 0) {
//           walker(child); 
//         }
//       }
//     }
  
//     try {
//       walker(document.body);
//     } catch (element) {
//       return element; 
//     }
  
//     return null; 
//   }

//   try {
//     const element = getElementById("your_element_id");
//     console.log("Знайдений елемент:", element);
//   } catch (error) {
//     console.error("Елемент з вказаним id не знайдено:", error);
//   }
  