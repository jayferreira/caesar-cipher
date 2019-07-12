// start of the encoding tests
let finalTest1 = cypher('car', 3, false);
if (finalTest1 === 'fdu') {
	console.log("Encode with offset 3 ok"); 
} else {
	console.log("Try again. Expected result 'fdu', but it was" + finalTest1 + ". You can do it");
}

let finalTest2 = cypher('ABACATE', 7, false);
if (finalTest2 === 'HIHJHAL') {
	console.log("Encode with offset 7 ok"); 
} else {
	console.log("Try again. Expected result:'HIHJHAL', but it was" + finalTest2 + ". You can do it");
}

let finalTest3 = cypher('ola tudo bem', 3 , false);
if (finalTest3 === 'rod wxgr ehp') {
	console.log("Encode with offset 3 ok"); 
} else {
	console.log("Try again. Expected result:'rod wxgr ehp', but it was" + finalTest3 + ".You can do it");
}

let finalTest4 = cypher('The Quick Brown Fox Jumps Over The Lazy Dog.', 500, false);
if (finalTest4 === 'Znk Waoiq Hxuct Lud Pasvy Ubkx Znk Rgfe Jum.') {
	console.log("Encode with offset 500 ok"); 
} else {
	console.log("Try again. Expected result:'Znk Waoiq Hxuct Lud Pasvy Ubkx Znk Rgfe Jum.', but it was" + finalTest4 + ".You can do it");
}

// //start of the decoding tests 
let decTest1 = cypher('fdu', 3, true);
if (decTest1 === 'car') {
	console.log("Decode with offset 3 ok"); 
} else {
	console.log("Try again. Expected result:'car', but it was" + decTest1 + ".You can do it");
}

let decTest2 = cypher('HIHJHAL', 7, true);
if (decTest2 === 'ABACATE') {
	console.log("Decode with offset 7 ok"); 
} else {
	console.log("Try again. Expected result:'ABACATE', but it was" + decTest2 + ". You can do it");
}

let decTest3 = cypher('Znk Waoiq Hxuct Lud Pasvy Ubkx Znk Rgfe Jum.', 500, true );
if (decTest3 === 'The Quick Brown Fox Jumps Over The Lazy Dog.') {
	console.log("Decode with offset 500 ok"); 
} else {
	console.log("Try again. Expected result:'The Quick Brown Fox Jumps Over The Lazy Dog.', but it was" + decTest3 + ". You can do it");
}

// //start of the tests with special characters
let specialTest1 = cypher('!@#$%¨&*()_+', 200);
if (specialTest1 === '!@#$%¨&*()_+') {
	console.log("Encode, special characters with offset 200 ok"); 
} else {
	console.log("Try again. Expected result:'!@#$%¨&*()_+', but it was" + specialTest1 + ".You can do it");
}

let specialTest2 = cypher('!@#$%¨&*()_+',900);
if (specialTest2 === '!@#$%¨&*()_+') {
	console.log("Encode, special characters with offset 900 ok"); 
} else {
	console.log("Try again. Expected result:'!@#$%¨&*()_+', but it was" + specialTest2 + ". You can do it");
}

// //start of the test with negative offset
let negativeTest1 = cypher('Olá, tudo bem? ', -50, false);
if (negativeTest1 === 'Qná, vwfq dgo? ') {
	console.log("Encode with negative offset ok"); 
} else {
	console.log("Try again. Expected result 'Qná, vwfq dgo? ', but it was" + negativeTest1 + ". You can do it");
}

let negativeTest2 = cypher('Qná, vwfq dgo?', -50, true);
if (negativeTest2 === 'Olá, tudo bem?') {
	console.log("Decode with negative offset ok"); 
} else {
	console.log("Try again. Expected result:'Olá, tudo bem?', but it was" + negativeTest2 + ". You can do it");
}