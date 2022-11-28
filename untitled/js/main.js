const plaintextAlphabet = [];
let cryptotextAlphabet = "zyxwvutsrqponmlkjihgfedcba";
let plaintext = "abcdefghijklmnopqrstuvwxyz";
let cryptotext = "";

//Builds Alphabet
for (let i = 0; i < 26; i++) {
  let char = String.fromCharCode(97+i);
  plaintextAlphabet.push(char);
}

let plaintextAlphabetLength = plaintextAlphabet.length;

function encrypt(plaintext, plaintextAlphabet, cryptotextAlphabet) {
  let cryptotext = "";
  for (let i = 0; i < plaintext.length; i++) {
    if (plaintext.substring(i, i+1) == (" ")) {
      cryptotext += " ";
    }
    else {
      cryptotext += cryptotextAlphabet.substring(plaintextAlphabet.indexOf(plaintext.substring(i, i+1)), plaintextAlphabet.indexOf(plaintext.substring(i, i+1))+1);
    }
  }
  return cryptotext;
}

function atbash(plaintextAlphabet) {
  let cyrptotextAlphabet = "";

  for (let i = 0; i < -(plaintextAlphabetLength); i--) {
    cryptotextAlphabet += plaintextAlphabet.slice(i-1,1)
  }
  return cryptotextAlphabet;
}

function caesar(plaintextAlphabet, shiftValue) {
  let cryptotextAlphabet = "";

  for (let i = 0; i < plaintextAlphabetLength; i++) {
      cryptotextAlphabet += plaintextAlphabet.at(i-shiftValue);
  }
  return cryptotextAlphabet
}

function rote()
document.getElementById("print").innerHTML = caesar(plaintextAlphabet, 4);

