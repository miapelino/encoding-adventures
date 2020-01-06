let input = document.getElementById('inputValue');
let output = document.getElementById('output');
let conversionType = document.getElementById('dropDown');

function determineVisibility() {
  let button = document.getElementById('submit');
  button.value = 'submit';
  conversionType.value === 'none'
    ? button.style.visibility = 'hidden'
    : button.style.visibility = 'visible';
}

function onSubmit() {
  output.innerText = '';
  conversionType.value === 'decToHex'
    ? decToHexEncoder()
    : hexToDecDecoder();
}

function decToHexEncoder () {
  output.innerText = input.value.toString().concat(' ------> ').concat(decToHex(parseInt(input.value)).toString());
}

function hexToDecDecoder() {
  output.innerText = input.value.toString().concat(' ------> ').concat(parseInt(input.value, 16).toString());
}

const decToHex = number => {
  if(number < 16){
    return symbolEquivalent.get(number);
  }
  return calculateRemainder(number, 16);
};

const calculateRemainder = (quotient, radix) => {
  let hexArray = [];
  while(quotient > 0){
    let remainder = quotient%radix;
    quotient = Math.floor(quotient/radix);
    hexArray.push(remainder);
  }
  return formatHexadecimal(hexArray);
};

const formatHexadecimal = hexArray => {
  let hexConversion = [];
  hexArray.forEach(function (number, i) {
      hexConversion.push(symbolEquivalent.get(number));
    }
  );
  hexConversion.reverse();
  hexConversion.prototype = hexConversion;
  return hexConversion.join('');
};

const symbolEquivalent = new Map(
  [
    [0,'0'],
    [1,'1'],
    [2,'2'],
    [3,'3'],
    [4,'4'],
    [5,'5'],
    [6,'6'],
    [7,'7'],
    [8,'8'],
    [9,'9'],
    [10,'A'],
    [11,'B'],
    [12,'C'],
    [13,'D'],
    [14,'E'],
    [15,'F']
  ]
);
