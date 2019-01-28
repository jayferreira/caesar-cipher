function encode() {
  let desloc = parseInt(document.getElementById("chave").value);
  
  let input = document.getElementById("msg").value;
  let i;

  let numeroASC;
  let resultASC;

  let palavraComDeslocDir = "";
  for (i = 0; i < input.length; i++) { 
    numeroASC = input.charCodeAt(i);
    resultASC = (( numeroASC - 65 + desloc ) % 26) + 65;
    palavraComDeslocDir += (String.fromCharCode(resultASC));
    
    
  }
  return alert(palavraComDeslocDir);

}

function decode() {
  let input = "FDU";
  let i;
  let numeroASC;
  let desloc = 3;
  let resultASC; 
  let palavraComDeslocEsq = "";
  for (i = 0; i < input.length; i++) {
    numeroASC = input.charCodeAt(i)
    resultASC = ( numeroASC - 65 + ( desloc * -1 )) % 26 + 65 
    palavraComDeslocEsq += (String.fromCharCode(resultASC))

  }
  return alert(palavraComDeslocEsq)
}