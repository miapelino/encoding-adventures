let inputHex = document.getElementById('inputValue1');
let inputSpecial = document.getElementById('inputValue2');
let outputHex = document.getElementById('output1');
let outputSpecial = document.getElementById('output2');
let conversionType = document.getElementById('dropDown');

function hexEncoder() {
  outputHex.value = '';
  validateHexInput()
    ? outputHex.value = decToHex(parseInt(inputHex.value))
    : outputHex.value = inputInvalid(inputHex);
}

function decodeHex() {
  // let hiByte = value.slice(0,2);
  // let loByte = value.slice(2);
  outputHex.value = parseInt(inputHex.value, 16);
}

function textEncoder() {
  outputSpecial.value = '';
  validateSpecialInput()
    ? outputSpecial.value = encodeSpecial(parseInt(inputSpecial.value))
    : outputSpecial.value = inputInvalid(inputSpecial);
}

function buttonVisibility() {
  document.getElementById("int16").style.visibility = isDecimal();
  document.getElementById("hex").style.visibility = isHex();
}

const encodeSpecial = number => {
  let x = (number+8192).toString(2).padStart(14,'0');
  let loByte = ( +('0b'+x.slice(7))).toString(16).padStart(2,'0');
  let hiByte = ( +('0b'+x.slice(0,7))).toString(16).padStart(2,'0');
  return hiByte+loByte;
};

const decToHex = number => {
  if(number < 16){
    return symbolEquivalent.get(number);
  }
  //return number.toString(16);
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

const validateHexInput = () => {
  return conversionType.value==='decimalInteger'
    ?isIntegerWithinRange(inputHex)
    :isValidEncodedText(inputHex.value);
};

const validateSpecialInput = () => {
  //todo: validate special text input
  return false;
};

const inputInvalid = (input) => {
  input.focus();
  input.value = '';
  return 'invalid input';
};

const isIntegerWithinRange = (input) => {
  return !isNaN(input.value)
    && Number.isInteger(parseInt(input.value))
    && isWithinRange(parseInt(input.value));
};

const isWithinRange = value => {
  return true;
  // return value >= -8192 && value <= 8191;
};

const isValidEncodedText = value => {
  let alphaExp = /^[0-9a-zA-Z]+$/;
  console.log(value.match(alphaExp));
  return value.match(alphaExp);
};

const isDecimal = () => {
  return conversionType.value === 'decimalInteger'
    ?'visible'
    :'collapse';
};

const isHex = () => {
  return conversionType.value === 'encodedText'
    ?'visible'
    :'collapse';
};