function mod(n, m) {
  return ((n % m) + m) % m;
}


function encode(desloc, input) {
  
  let numeroASC = 0;
  let finalString = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i].charCodeAt() == 32) {
      finalString += " ";
    }
    else {
      if (input[i].charCodeAt() >= 65 && input[i].charCodeAt() <= 90) {
        numeroASC = mod((input[i].charCodeAt() - 65 + desloc), 26) + 65;
        finalString += String.fromCharCode(numeroASC);
      }
      else if (input[i].charCodeAt() >= 97 && input[i].charCodeAt() <= 122) {
        numeroASC = mod((input[i].charCodeAt() - 97 + desloc), 26) + 97;
        finalString += String.fromCharCode(numeroASC);
      }
    }
  }
  return finalString;
}

function getText() {
  const desloc = parseInt(document.getElementById("chave").value);
  const input = document.getElementById("msg");
  const final = encode(desloc, input.value);

  input.value = final;


}

function decode(desloc, input) {
  
  let numeroASC = 0;
  let finalString = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i].charCodeAt() == 32) {
      finalString += " ";
    }
    else {
      if (input[i].charCodeAt() >= 65 && input[i].charCodeAt() <= 90) {
        numeroASC = mod((input[i].charCodeAt() - 65 + (desloc * -1 )), 26) + 65;
        finalString += String.fromCharCode(numeroASC);
      }
      else if (input[i].charCodeAt() >= 97 && input[i].charCodeAt() <= 122) {
        numeroASC = mod((input[i].charCodeAt() - 97 + (desloc * -1 )), 26) + 97;
        finalString += String.fromCharCode(numeroASC);
      }
    }
  }
  return finalString;
}

function getText2() {
  const desloc = parseInt(document.getElementById("chave").value);
  const input = document.getElementById("msg").value;
  const final = decode(desloc, input.value);

  input.value = final;

}