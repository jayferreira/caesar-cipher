function mod(n, m) {
  return ((n % m) + m) % m;
}


function encode(offset, message) {
  
  let numeroASC = 0;
  let finalString = "";
  for (let i = 0; i < message.length; i++) {
    if (message[i].charCodeAt() == 32) {
      finalString += " ";
    }
    else {
      if (message[i].charCodeAt() >= 65 && message[i].charCodeAt() <= 90) {
        numeroASC = mod((message[i].charCodeAt() - 65 + offset), 26) + 65;
        finalString += String.fromCharCode(numeroASC);
      }
      else if (message[i].charCodeAt() >= 97 && message[i].charCodeAt() <= 122) {
        numeroASC = mod((message[i].charCodeAt() - 97 + offset), 26) + 97;
        finalString += String.fromCharCode(numeroASC);
      }
    }
  }
  return finalString;
}

function getText() {
  const offset = parseInt(document.getElementById("chave").value);
  const message = document.getElementById("msg");
  const final = encode(offset, message.value);

  message.value = final;


}

function decode(offset, message) {
  
  let numeroASC = 0;
  let finalString = "";
  for (let i = 0; i < message.length; i++) {
    if (message[i].charCodeAt() == 32) {
      finalString += " ";
    }
    else {
      if (message[i].charCodeAt() >= 65 && message[i].charCodeAt() <= 90) {
        numeroASC = mod((message[i].charCodeAt() - 65 + (offset * -1 )), 26) + 65;
        finalString += String.fromCharCode(numeroASC);
      }
      else if (message[i].charCodeAt() >= 97 && message[i].charCodeAt() <= 122) {
        numeroASC = mod((message[i].charCodeAt() - 97 + (offset * -1 )), 26) + 97;
        finalString += String.fromCharCode(numeroASC);
      }
    }
  }
  return finalString;
}

function getText2() {
  const offset = parseInt(document.getElementById("chave").value);
  const message = document.getElementById("msg").value;
  const final = decode(offset, message.value);

  message.value = final;

}