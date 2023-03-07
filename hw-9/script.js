function makeProfileTimer() {
    var startTime = performance.now(); 
  
    return function() {
      var endTime = performance.now(); 
      return endTime - startTime; 
    };
  }

  var timer = makeProfileTimer();
alert('Замеряем время работы этого alert');
alert(timer()); 

function makeSaver(fn) {
    let result;
  
    return function () {
      if (result === undefined) {
        result = fn();
      }
  
      return result;
    }
  }

  var saver = makeSaver(Math.random);
  var value1 = saver(); 
  var value2 = saver(); 
  console.log(value1 === value2); 
  
  var saver2 = makeSaver(() => console.log('saved function called') || [null, undefined, false, '', 0, Math.random()][Math.ceil(Math.random()*6)]);
  var value3 = saver2();
  var value4 = saver2();
  console.log(value3 === value4); 
  
  let namePrompt = prompt.bind(window, 'Как тебя зовут?');
  let nameSaver = makeSaver(namePrompt);
  alert(`Привет! Prompt еще не было!`);
  alert(`Привет ${nameSaver()}. Только что запустился prompt, первый и последний раз`);
  alert(`Слушай, ${nameSaver()}, го пить пиво. Ведь prompt был только один раз`);
  
