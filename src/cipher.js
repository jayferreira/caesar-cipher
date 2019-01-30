function encode() {
  let desloc = parseInt(document.getElementById("chave").value);  
  let input = document.getElementById("msg").value;
  console.log(input);
  
  let numeroASC = 0;
  let resultASC = 0;
  let palavraComDeslocDir = "";
  

  for (let i = 0; i < input.length; i++){ 

    if(input[i].charCodeAt() == 32){
      palavraComDeslocDir += " ";
    }

  else{ 
  
    if(input[i].charCodeAt() >= 65 && input[i].charCodeAt() <= 90){
        resultASC = ((input[i].charCodeAt() - 65 + desloc) % 26) + 65;
        palavraComDeslocDir += String.fromCharCode(resultASC);    
        
    }
     

    else if(input[i].charCodeAt() >= 97 && input[i].charCodeAt() <= 122){
      resultASC = ((input[i].charCodeAt() - 97 + desloc) % 26) + 97;
      palavraComDeslocDir += String.fromCharCode(resultASC); 

    }
   }
  }
   document.getElementById("FraseCodificada").innerHTML = palavraComDeslocDir;
  }