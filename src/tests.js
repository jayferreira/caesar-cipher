//start of the encoding tests
let finalTest1 = encode(3, 'car');
if (finalTest1 === 'fdu') {
	console.log("Passou! O resultado " + finalTest1 + " é o esperado."); 
} else {
	console.log("tentar de novo! O resultado era pra ser 'fdu', mas foi" + finalTest1 + ". You can do it");
}

let finalTest2 = encode(7, 'ABACATE');
if (finalTest2 === 'HIHJHAL') {
	console.log("Passou! O resultado 'HIHJHAL' é o esperado."); 
} else {
	console.log("tentar de novo! O resultado era pra ser:'HIHJHAL', mas foi" + finalTest2 + ". You can do it");
}

let finalTest3 = encode(3, 'ola tudo bem');
if (finalTest3 === 'rod wxgr ehp') {
	console.log("Passou! O resultado 'rod wxgr ehp' é o esperado."); 
} else {
	console.log("tentar de novo! O resultado era pra ser:'rod wxgr ehp', mas foi" + finalTest3 + ".You can do it");
}

let finalTest4 = encode(500, 'The Quick Brown Fox Jumps Over The Lazy Dog.');
if (finalTest4 === 'Znk Waoiq Hxuct Lud Pasvy Ubkx Znk Rgfe Jum.') {
	console.log("Passou! O resultado 'Znk Waoiq Hxuct Lud Pasvy Ubkx Znk Rgfe Jum.' é o esperado."); 
} else {
	console.log("tentar de novo! O resultado era pra ser:'Znk Waoiq Hxuct Lud Pasvy Ubkx Znk Rgfe Jum.', mas foi" + finalTest4 + ".You can do it");
}

//start of the decoding tests 
let decTest1 = decode(3, 'fdu');
if (decTest1 === 'car') {
	console.log("Passou! O resultado 'car' é o esperado."); 
} else {
	console.log("tentar de novo! O resultado era pra ser:'car', mas foi" + decTest1 + ".You can do it");
}

let decTest2 = decode(7, 'HIHJHAL');
if (decTest2 === 'ABACATE') {
	console.log("Passou! O resultado 'ABACATE' é o esperado."); 
} else {
	console.log("tentar de novo! O resultado era pra ser:'ABACATE', mas foi" + decTest2 + ". You can do it");
}

let decTest3 = decode(500, 'Znk Waoiq Hxuct Lud Pasvy Ubkx Znk Rgfe Jum.');
if (decTest3 === 'The Quick Brown Fox Jumps Over The Lazy Dog.') {
	console.log("Passou! O resultado 'The Quick Brown Fox Jumps Over The Lazy Dog.' é o esperado."); 
} else {
	console.log("tentar de novo! O resultado era pra ser:'The Quick Brown Fox Jumps Over The Lazy Dog.', mas foi" + decTest3 + ". You can do it");
}



//start of the tests with special characters
let specialTest1 = encode(200, '!@#$%¨&*()_+');
if (specialTest1 === '!@#$%¨&*()_+') {
	console.log("Passou! O resultado '!@#$%¨&*()_+' é o esperado."); 
} else {
	console.log("tentar de novo! O resultado era pra ser:'!@#$%¨&*()_+', mas foi" + specialTest1 + ".You can do it");
}

let specialTest2 = decode(900, '!@#$%¨&*()_+');
if (specialTest2 === '!@#$%¨&*()_+') {
	console.log("Passou! O resultado '!@#$%¨&*()_+' é o esperado."); 
} else {
	console.log("tentar de novo! O resultado era pra ser:'!@#$%¨&*()_+', mas foi" + specialTest2 + ". You can do it");
}

//start of the test with negative offset
let negativeTest1 = encode(-50, 'Olá, tudo bem? ');
if (negativeTest1 === 'Qná, vwfq dgo? ') {
	console.log("Passou! O resultado 'Qná, vwfq dgo?' é o esperado."); 
} else {
	console.log("tentar de novo! O resultado era pra ser 'Qná, vwfq dgo? ', mas foi" + negativeTest1 + ". You can do it");
}

let negativeTest2 = decode(-50, 'Qná, vwfq dgo?');
if (negativeTest2 === 'Olá, tudo bem?') {
	console.log("Passou! O resultado 'Olá, tudo bem?' é o esperado."); 
} else {
	console.log("tentar de novo! O resultado era pra ser:'Olá, tudo bem?', mas foi" + negativeTest2 + ". You can do it");
}