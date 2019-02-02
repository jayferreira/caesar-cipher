function mod(n, m) {
  return ((n % m) + m) % m;
}


function encode(offset, message) {
  
  let asciiCode = 0;
  let finalString = "";
  for (let i = 0; i < message.length; i++) {
    if (message[i].charCodeAt() == 32) {
      finalString += " ";
    }
    else if (message[i].charCodeAt() >= 65 && message[i].charCodeAt() <= 90) {
      asciiCode = mod((message[i].charCodeAt() - 65 + offset), 26) + 65;
      finalString += String.fromCharCode(asciiCode);
    }
    else if (message[i].charCodeAt() >= 97 && message[i].charCodeAt() <= 122) {
      asciiCode = mod((message[i].charCodeAt() - 97 + offset), 26) + 97;
      finalString += String.fromCharCode(asciiCode);
    }
    else {
      finalString += message[i];
    }
    
  }
  return finalString;
} 

function getText() {
  const offset = parseInt(document.getElementById("key").value);
  let message = document.getElementById("userInput");
  const final = encode(offset, message.value);
  message.value = final;
  message.select();
  message = document.execCommand("copy");
}

function decode(offset, message) {
  
  let asciiCode = 0;
  let finalString = "";
  for (let i = 0; i < message.length; i++) {
    if (message[i].charCodeAt() == 32) {
      finalString += " ";
    }
    else if (message[i].charCodeAt() >= 65 && message[i].charCodeAt() <= 90) {
      asciiCode = mod((message[i].charCodeAt() - 65 + (offset * -1 )), 26) + 65;
      finalString += String.fromCharCode(asciiCode);
    }
    else if (message[i].charCodeAt() >= 97 && message[i].charCodeAt() <= 122) {
      asciiCode = mod((message[i].charCodeAt() - 97 + (offset * -1 )), 26) + 97;
      finalString += String.fromCharCode(asciiCode);
    }
    else {
      finalString += message[i];
    }
  }
  return finalString;
}
  
  

function getText2() {
  const offset = parseInt(document.getElementById("keyD").value);
  let message = document.getElementById("userInputD");
  const final = decode(offset, message.value);

  message.value = final;
  message.select();
  message = document.execCommand("copy");
}