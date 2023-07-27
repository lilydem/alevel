//   function displayJSONAsTable(DOM, JSONData) {
//     const table = document.createElement('table');
//     table.border = '1';

//     const headerRow = table.insertRow();
//     for (const key of Object.keys(JSONData)) {
//       const cell = document.createElement('th');
//       cell.textContent = key;
//       headerRow.appendChild(cell);
//     }

//     const dataRow = table.insertRow();
//     for (const value of Object.values(JSONData)) {
//       const cell = document.createElement('td');
//       if (typeof value === 'string' && value.includes('https://swapi.dev/api/')) {
//         const button = document.createElement('button');
//         button.textContent = 'Переглянути';
//         button.addEventListener('click', () => {
//           fetch(value)
//             .then((res) => res.json())
//             .then((data) => {
//               displayJSONAsTable(cell, data); 
//             })
//             .catch((error) => console.error('Помилка під час отримання даних:', error));
//         });
//         cell.appendChild(button);
//       } else if (Array.isArray(value) || typeof value === 'string') {
//         cell.textContent = value;
//       } else if (typeof value === 'object') {
//         displayJSONAsTable(cell, value);
//       }
//       dataRow.appendChild(cell);
//     }

//     DOM.innerHTML = ''; 
//     DOM.appendChild(table);
//   }

//   const lukeURL = 'https://swapi.dev/api/people/1/';

//   fetch(lukeURL)
//     .then((res) => res.json())
//     .then((luke) => {
//       const tableContainer = document.getElementById('table-container');
//       displayJSONAsTable(tableContainer, luke);
//     })
//     .catch((error) => console.error('Помилка під час отримання даних:', error));

// function myFetch(url) {
//     return fetch(url)
//       .then(response => response.json())
//       .then(data => data);
//   }
  
//   function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   function fetchOrDelay(apiUrl, delayTime) {
//     const apiRequest = myFetch(apiUrl);
//     const delayPromise = delay(delayTime);
  
//     return Promise.race([apiRequest, delayPromise])
//       .then(result => {
//         const isFetchResult = result !== undefined; 
//         return { isFetchResult, result };
//       });
//   }
  
//   const apiUrl = 'https://swapi.dev/api/people/1/'; 
//   const delayTime = 2000; 
  
//   fetchOrDelay(apiUrl, delayTime)
//     .then(({ isFetchResult, result }) => {
//       if (isFetchResult) {
//         console.log('Отримано результат з API:', result);
//       } else {
//         console.log(`Затримка ${delayTime} мс завершилась раніше від запиту до API`);
//       }
//     })
//     .catch(error => console.error('Помилка:', error));
  
// function confirmPromise(text) {
//     return new Promise((resolve, reject) => {
//       const result = confirm(text);
//       if (result) {
//         resolve();
//       } else {
//         reject();
//       }
//     });
//   }
  
//   confirmPromise('Проміси це складно?')
//     .then(() => console.log('не так вже й складно'))
//     .catch(() => console.log('respect за посидючість і уважність'));
  
// function promptPromise(text) {
//     return new Promise((resolve, reject) => {
//       const result = prompt(text);
//       if (result === null) {
//         reject();
//       } else {
//         resolve(result);
//       }
//     });
//   }
  
//   promptPromise("Як тебе звуть?")
//     .then(name => console.log(`Тебе звуть ${name}`))
//     .catch(() => console.log('Ну навіщо морозитися, нормально ж спілкувалися'));
