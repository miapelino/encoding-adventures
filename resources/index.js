let inputHex = document.getElementById('inputValue1');
let outputHex = document.getElementById('output1');
let conversionType = document.getElementById('dropDown');

function decToHexEncoder() {
  outputHex.innerText = '';
  outputHex.innerText = inputHex.value.toString().concat(' ------> ').concat(decToHex(parseInt(inputHex.value)).toString());
}

function buttonVisibility() {
  document.getElementById("int16").style.visibility = isDecimal();
  document.getElementById("hex").style.visibility = isHex();
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

const isDecimal = () => {
  return conversionType.value === 'decToHex'
    ?'visible'
    :'collapse';
};

const isHex = () => {
  return conversionType.value === 'hexToDec'
    ?'visible'
    :'collapse';
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
