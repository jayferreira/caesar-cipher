//início dos testes de encode
let finalTest1 = encode(3, 'car');
if (finalTest1 === 'fdu') {
	console.log("funcionou certinho!! O resultado " + finalTest1 + " é o esperado."); 
} else {
	console.log("tentar de novo! O resultado era pra ser 'fdu', mas foi" + finalTest1 + ". You can do it");
}

let finalTest2 = encode(7, 'ABACATE');
if (finalTest2 === 'HIHJHAL') {
	console.log("funcionou certinho!! O resultado 'HIHJHAL' é o esperado."); 
} else {
	console.log("tentar de novo! O resultado era pra ser:'HIHJHAL', mas foi" + finalTest2 + ". You can do it");
}

let finalTest3 = encode(3, 'ola tudo bem');
if (finalTest3 === 'rod wxgr ehp') {
	console.log("funcionou certinho!! O resultado 'rod wxgr ehp' é o esperado."); 
} else {
	console.log("tentar de novo! O resultado era pra ser:'rod wxgr ehp', mas foi" + finalTest3 + ".You can do it");
}

//início dos testes de decode 

let decTest1 = decode(3, 'fdu');
if (decTest1 === 'car') {
	console.log("funcionou certinho!! O resultado 'car' é o esperado."); 
} else {
	console.log("tentar de novo! O resultado era pra ser:'car', mas foi" + decTest1 + ".You can do it");
}

let decTest2 = decode(7, 'HIHJHAL');
if (decTest2 === 'ABACATE') {
	console.log("funcionou certinho!! O resultado 'ABACATE' é o esperado."); 
} else {
	console.log("tentar de novo! O resultado era pra ser:'ABACATE', mas foi" + decTest2 + ". You can do it");
}

