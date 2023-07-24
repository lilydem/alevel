// function createPerson (name, surname){
//     return {name, surname, getFullName(){
//         return `${person.name} ${person.surname} ${person.fatherName ? person.fatherName : ''}`;
//     }}
// }

// const a = createPerson("Вася", "Пупкін")
// const b = createPerson("Ганна", "Іванова")
// const c = createPerson("Єлизавета", "Петрова")

// console.log(a.getFullName()) //Вася Пупкін
// a.fatherName = 'Іванович'    
// console.log(a.getFullName()) //Вася Іванович Пупкін

// console.log(b.getFullName()) //Ганна Іванова

function createPersonClosure (name, surname){
    let age = 5;
    let fatherName = 'Іванович';
    const person = {
        name,
        surname,
        age,
        fatherName,
    }
    function getName() {return `${person.name}`};
    function getSurname(){return `${person.surname}`}
    function getFatherName(){return `${person.fatherName}`}
    function getAge(){return `${person.age}`}
    function setName(newName){
        if(newName[0]===newName[0].toUpperCase()){
            person.name=newName
        }
    }
    function setSurname(newSurname){
        if(newSurname[0]===newSurname[0].toUpperCase()){
            person.surname=newSurname
        }
    }
    function setFatherName(newFatherName){
        if(newFatherName[0]===newFatherName[0].toUpperCase()){
            person.fatherName=newFatherName
        }
    }
    function setAge(newAge){
        if(0 < newAge && newAge <= 100){
            person.age=newAge
        }
    }
    return {
    getName,
    getSurname,
    getFatherName,
    getAge,
    getFullName(){return `${person.name} ${person.surname} ${person.fatherName}`},
    setName,
    setSurname,
    setFatherName,
    setAge,
    setFullName(newFullname){
        const FullNameArray = newFullname.split(' ')
        console.log(FullNameArray)
        setName(FullNameArray[1])
        setSurname(FullNameArray[0])
        setFatherName(FullNameArray[2])
    }
   }
}

// function createPersonClosureDestruct{

// }


// function isSorted(...params) {
//     const arr = [];
//     let prev = null;
//     for (const arg of params) {
//         if (typeof arg === "number" && arg > prev) {
//             prev = arg;
//             arr.push(arg);
//         } 
//         else 
//             {return false}
//     }
//     return true
// }

// console.log(isSorted(1,2,3,4,5,6,7,8));
// console.log(isSorted(1,2,8, 'sdsds'));
// console.log(isSorted(1,2,3,4,146,7,8));

// function personForm{
    
// }
const person = createPersonClosure('Valera', 'Valer')
function createInput(name) {
    const PascalName = name.charAt(0).toUpperCase() + name.slice(1);

    let div = document.createElement('div');
    let input = document.createElement('input');
    let label = document.createElement('label');
    input.type = name === "age" ? 'number' : 'text';
    input.name = name;
    input.value = person[`get${PascalName}`]();
    if (name === "age") { input.min = 0; input.max = 100; }
    label.setAttribute('for', name);
    label.innerText = name;
    div.appendChild(label);
    div.appendChild(input);
    console.log(PascalName);

    if (name === 'fullName') {
        input.oninput = function (e) {
            const fullNameArray = input.value.split(' ');
            person.setName(fullNameArray[0]);
            person.setSurname(fullNameArray[1]);
            person.setFatherName(fullNameArray[2]);
        };
    } else {
        input.oninput = function (e) {
            person[`set${PascalName}`](input.value);
        };
    }

    return div;
}

document.addEventListener('DOMContentLoaded', ()=>{ 
    let name = createInput('name');
    document.body.appendChild(name);
    let surname = createInput('surname', person.getSurname());
    document.body.appendChild(surname);
    let age = createInput('age', person.getAge());
    document.body.appendChild(age);
    let fullname = createInput('fullName', person.getFullName());
    document.body.appendChild(fullname);
})
