function encode( ) {
  let desloc = parseInt(document.getElementById("chave").value);  
  let input = document.getElementById("msg").value;
  let i;

  let numeroASC;
  let resultASC;

  let palavraComDeslocDir = "";
  for (i = 0; i < input.length; i++) { 
    numeroASC = input.charCodeAt(i);
    resultASC = (( numeroASC - 65 + desloc ) % 26) + 65;
    resultASC = (String.fromCharCode(resultASC));
    palavraComDeslocDir += resultASC;
           
  }

  let codificada = document.getElementById("FraseCodificada").
  codificada.innerHTML = codificada;

}

function decode() {
  let desloc = parseInt(document.getElementById("chaveD").value);
  let input = getElementById("msgD").value;

  let i;
  let numeroASC;  
  let resultASC; 
  let palavraComDeslocEsq = "";
  for (i = 0; i < input.length; i++) {
    numeroASC = input.charCodeAt(i)
    resultASC = ( numeroASC - 65 + ( desloc * -1 )) % 26 + 65 
    palavraComDeslocEsq += (String.fromCharCode(resultASC))

  }
  
}