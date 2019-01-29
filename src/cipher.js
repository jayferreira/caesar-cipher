function encode() {
  let desloc = parseInt(document.getElementById("chave").value);  
  let input = document.getElementById("msg").value;
  console.log(input);
  
  let numeroASC 
  let resultASC;
  let palavraComDeslocDir = "";

  for (let i = 0; i < input.length; i++){ 
    numeroASC = input.charCodeAt(i);
    console.log(numeroASC);
    resultASC = (( numeroASC - 65 + desloc ) % 26) + 65;
    palavraComDeslocDir += (String.fromCharCode(resultASC));
    
           
  }

  document.getElementById("FraseCodificada").innerHTML = palavraComDeslocDir;
 
}

function decode() {
  let desloc = parseInt(document.getElementById("chaveD").value);
  let input = getElementById("msgD").value;
  console.log(input);

  let numeroASC;  
  let resultASC; 
  let palavraComDeslocEsq = "";
  for (let i = 0; i < input.length; i++) {
    numeroASC = input.charCodeAt(i);
    resultASC = ( numeroASC - 65 + ( desloc * -1 )) % 26 + 65;
    palavraComDeslocEsq += (String.fromCharCode(resultASC))

  }
  
  document.getElementById("FraseDecodificada").innerHTML = palavraComDeslocEsq;

}
