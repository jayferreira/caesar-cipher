function cifra() {
  var input = "CAR";
  var i;
  var numeroASC; 
  var desloc = 3;
  var resultASC;
  var palavraCodificada = [];
  var palavraComDeslocamento = [];
  for (i = 0; i < input.length; i++) { 
    numeroASC = input.charCodeAt(i)
    resultASC = ( numeroASC - 65 + desloc ) % 26 + 65
    palavraComDeslocamento.push(String.fromCharCode(resultASC))
    
    
  }
  return alert(palavraComDeslocamento);

}