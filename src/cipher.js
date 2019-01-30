function encode() {
  let desloc = parseInt(document.getElementById("chave").value);
  let input = document.getElementById("msg").value;
  let resultASC = 0;
  let palavraComDeslocDir = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i].charCodeAt() == 32) {
      palavraComDeslocDir += " ";
    }
    else {
      if (input[i].charCodeAt() >= 65 && input[i].charCodeAt() <= 90) {
        resultASC = ((input[i].charCodeAt() - 65 + desloc) % 26) + 65;
        palavraComDeslocDir += String.fromCharCode(resultASC);
      }
      else if (input[i].charCodeAt() >= 97 && input[i].charCodeAt() <= 122) {
        resultASC = ((input[i].charCodeAt() - 97 + desloc) % 26) + 97;
        palavraComDeslocDir += String.fromCharCode(resultASC);
      }
    }
  }
  document.getElementById("FraseCodificada").innerHTML = palavraComDeslocDir;
}

function decode() {
  let desloc = parseInt(document.getElementById("chaveD").value);
  let input = document.getElementById("msgD").value;
  let resultASC = 0;
  let palavradecodificada = " ";  
  for (let i = 0; i < input.length; i++) {
    if (input[i].charCodeAt() == 32) {
    }
    else {
      if (input[i].charCodeAt() >= 65 && input[i].charCodeAt() <= 90) {
        resultASC = ((input[i].charCodeAt() - 65 + desloc) % 26) + 65;
        palavradecodificada += String.fromCharCode(resultASC);
      }
      else if (input[i].charCodeAt() >= 97 && input[i].charCodeAt() <= 122) {
        resultASC = ((input[i].charCodeAt() - 97 + desloc) % 26) + 97;
        palavradecodificada += String.fromCharCode(resultASC);
      }
    }
  }
  document.getElementById("FraseDecodificada").innerHTML = palavradecodificada;
}