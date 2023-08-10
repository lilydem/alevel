// async function trafficLight(
//   greenElement,
//   yellowElement,
//   redElement,
//   greenTime,
//   yellowTime,
//   redTime
// ) {
//   while (true) {
//     greenElement.style.backgroundColor = "green";
//     yellowElement.style.backgroundColor = "gray";
//     redElement.style.backgroundColor = "gray";
//     await delay(greenTime);

//     greenElement.style.backgroundColor = "gray";
//     yellowElement.style.backgroundColor = "yellow";
//     redElement.style.backgroundColor = "gray";
//     await delay(yellowTime);

//     greenElement.style.backgroundColor = "gray";
//     yellowElement.style.backgroundColor = "gray";
//     redElement.style.backgroundColor = "red";
//     await delay(redTime);
//   }
// }

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// document.addEventListener('DOMContentLoaded', () => {
//     const greenElement = document.getElementById('green');
//     const yellowElement = document.getElementById('yellow');
//     const redElement = document.getElementById('red');

//     const greenTime = 3000;
//     const yellowTime = 1000;
//     const redTime = 2000;

//     trafficLight(greenElement, yellowElement, redElement, greenTime, yellowTime, redTime);
// });

// async function pedestrianLight(walkElement, stopElement, buttonElement, crossDelay) {
//     while (true) {
//         walkElement.style.backgroundColor = 'green';
//         stopElement.style.backgroundColor = 'gray';
//         await delay(crossDelay);

//         walkElement.style.backgroundColor = 'gray';
//         stopElement.style.backgroundColor = 'red';
//         await delay(2000); 

//         const buttonClickPromise = domEventPromise(buttonElement, 'click');
//         const timeoutPromise = delay(10000); 

//         await Promise.race([buttonClickPromise, timeoutPromise]);

//         walkElement.style.backgroundColor = 'gray';
//         stopElement.style.backgroundColor = 'red';
//         await delay(2000);
//     }
// }

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// function domEventPromise(element, eventName) {
//     return new Promise(resolve => {
//         element.addEventListener(eventName, resolve, { once: true });
//     });
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const walkElement = document.getElementById('walk');
//     const stopElement = document.getElementById('stop');
//     const buttonElement = document.getElementById('pedestrian-button');

//     const crossDelay = 3000; 

//     pedestrianLight(walkElement, stopElement, buttonElement, crossDelay);
// });

// async function speedtest(getPromise, count, parallel = 1) {
//     const start = Date.now();
//     const promises = [];

//     for (let i = 0; i < count; i++) {
//         const batchPromises = Array.from({ length: parallel }, getPromise);
//         promises.push(Promise.all(batchPromises));
//     }

//     await Promise.all(promises);
//     const end = Date.now();
//     const duration = end - start;

//     const parallelDuration = duration / (count * parallel);
//     const parallelSpeed = 1 / parallelDuration;

//     const queryDuration = duration / (count * parallel * parallel);
//     const querySpeed = 1 / queryDuration;

//     return {
//         duration,
//         querySpeed,
//         queryDuration,
//         parallelSpeed,
//         parallelDuration
//     };
// }

// async function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// speedtest(() => delay(1000), 10, 10).then(result => console.log(result));

// speedtest(
//     () => fetch('http://swapi.dev/api/people/1').then(res => res.json()),
//     10,
//     5
// ).then(result => console.log(result));

// async function gql(endpoint, query, variables) {
//     const response = await fetch(endpoint, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         },
//         body: JSON.stringify({ query, variables })
//     });

//     const data = await response.json();
//     return data.data;
// }

// (async () => {
//     const catQuery = `query cats($q: String){
//         CategoryFind(query: $q){
//             _id name
//         }
//     }`;
    
//     const cats = await gql("http://shop-roles.node.ed.asmer.org.ua/graphql", catQuery, { q: "[{}]" });
//     console.log(cats);
    
//     const loginQuery = `query login($login: String, $password: String){
//         login(login: $login, password: $password)
//     }`;
    
//     const token = await gql("http://shop-roles.node.ed.asmer.org.ua/graphql", loginQuery, { login: "test457", password: "123123" });
//     console.log(token);
// })();

// function jwtDecode(token) {
//     try {
//         const parts = token.split('.');
//         if (parts.length !== 3) {
//             return undefined;
//         }

//         const decoded = atob(parts[1]);
//         const data = JSON.parse(decoded);

//         return data;
//     } catch (error) {
//         return undefined;
//     }
// }

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2MzIyMDVhZWI3NGUxZjVmMmVjMWEzMjAiLCJsb2dpbiI6InRlc3Q0NTciLCJhY2wiOlsiNjMyMjA1YWViNzRlMWY1ZjJlYzFhMzIwIiwidXNlciJdfSwiaWF0IjoxNjY4MjcyMTYzfQ.rxV1ki9G6LjT2IPWcqkMeTi_1K9sb3Si8vLB6UDAGdw";
// console.log(jwtDecode(token));

// try {
//     console.log(jwtDecode());        // undefined
//     console.log(jwtDecode("дічь"));  // undefined
//     console.log(jwtDecode("ey.ey.ey")); // undefined

//     console.log('до сюди допрацювало, а значить jwtDecode не матюкався в консоль червоним кольором');
// } finally {
//     console.log('ДЗ, мабуть, закінчено');
// }
