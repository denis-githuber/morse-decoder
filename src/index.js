const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
   // write your solution here
   
   let split = expr.match(/.{1,10}/g); 

   let mapToArr = split.map(element => {

     let decodTen = element.replace(/10/g, '.');
     let decodEleven = decodTen.replace(/11/g, '-');
     let decodZero = decodEleven.replace(/00/g, '');

     if (decodZero == '**********') {
       return ' ';
     } else {
       return MORSE_TABLE[decodZero]
     }
   })

   return mapToArr.join('');
}

module.exports = {
    decode
}