function encode(desloc, input) {
  
  let numeroASC = 0;
  let finalString = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i].charCodeAt() == 32) {
      finalString += " ";
    }
    else {
      if (input[i].charCodeAt() >= 65 && input[i].charCodeAt() <= 90) {
        numeroASC = ((input[i].charCodeAt() - 65 + desloc) % 26) + 65;
        finalString += String.fromCharCode(numeroASC);
      }
      else if (input[i].charCodeAt() >= 97 && input[i].charCodeAt() <= 122) {
        numeroASC = ((input[i].charCodeAt() - 97 + desloc) % 26) + 97;
        finalString += String.fromCharCode(numeroASC);
      }
    }
  }
  return finalString;
}

function getText() {
  const desloc = parseInt(document.getElementById("chave").value);
  const input = document.getElementById("msg").value;
  const final = encode(desloc, input);

  document.getElementById("FraseCodificada").innerHTML = final;

console.log(desloc);
console.log(input);

}

