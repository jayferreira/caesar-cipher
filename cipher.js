function mod(n, m) {
  return ((n % m) + m) % m;
}   

document.getElementById("btn-chypher").addEventListener("click", () => {
  let message = document.getElementById("user-input").value;
  let offset = parseInt(document.getElementById("key").value);
  let choosen = document.getElementById("rd-decode").checked;
  cypher(message, offset, choosen);
})

function cypher(message, offset, choosen) {
  let asciiCode = 0;
  let finalString = "";

  if (choosen == true) {
    offset = offset * -1;
  }
  for (let char of message) {
    if (char.charCodeAt() == 32) {
      finalString += " ";
    }
    else if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
      asciiCode = mod((char.charCodeAt() - 65 + offset), 26) + 65;
      finalString += String.fromCharCode(asciiCode);
    }
    else if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
      asciiCode = mod((char.charCodeAt() - 97 + offset), 26) + 97;
      finalString += String.fromCharCode(asciiCode);
    }
    else {
      finalString += char;
    }
  }
  let final = document.getElementById("user-input");
  final.value = finalString;
}

const copyBtn = document.getElementById("copy-btn").addEventListener("click", () => {
  let message = document.getElementById("user-input");
  message.select();
  document.execCommand("copy");
})


