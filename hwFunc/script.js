function temperatureConversion(temp, scale) {
    if (scale === 'C') {
      return (temp * 9/5) + 32;
    } else if (scale === 'F') {
      return (temp - 32) * 5/9;
    } else {
      return "Непідтримувана шкала";
    }
  }

  const formatColor = (r, g, b) => {
    const rHex = r.toString(16).padStart(2, '0');
    const gHex = g.toString(16).padStart(2, '0');
    const bHex = b.toString(16).padStart(2, '0');
  
    return `#${rHex}${gHex}${bHex}`;
  };

  function findApartmentLocation() {
    var totalFloors = parseInt(prompt("Введіть кількість поверхів у будинку:"));
    var apartmentsPerFloor = parseInt(prompt("Введіть кількість квартир на поверсі:"));
    var apartmentNumber = parseInt(prompt("Введіть номер квартири:"));
  
    var apartmentsPerEntrance = totalFloors * apartmentsPerFloor;
    var entranceNumber = Math.ceil(apartmentNumber / apartmentsPerEntrance);
    var floorNumber = Math.ceil((apartmentNumber % apartmentsPerEntrance) / apartmentsPerFloor);
  
    var result = {
      entrance: entranceNumber,
      floor: floorNumber
    };
  
    return result;
  }

  function credentials() {
    const name = prompt("Введіть ваше ім'я:").trim().toLowerCase().replace(/(^|\s)\S/g, function (t) { return t.toUpperCase(); });
    const surname = prompt("Введіть ваше прізвище:").trim().toLowerCase().replace(/(^|\s)\S/g, function (t) { return t.toUpperCase(); });
    const fatherName = prompt("Введіть ваше по батькові:").trim().toLowerCase().replace(/(^|\s)\S/g, function (t) { return t.toUpperCase(); });
  
    const fullName = `${name} ${surname} ${fatherName}`;
  
    console.log(fullName);
    
    return { name, surname, fatherName, fullName };
  }
  
  credentials();

  function convertToMultilineString(input) {
    var lines = input.split("\\n");
    var result = lines.join("\n");
    return result;
  }
  
  var userInput = prompt("Введіть рядок з переносами: ");
  var multilineString = convertToMultilineString(userInput);
  console.log(multilineString);
  
  