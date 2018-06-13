// decodeString(s): Given an encoded string, return its corresponding decoded string. 

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times.
// Note: k is guaranteed to be a positive integer. 

// For s = "4[ab]", the output should be decodeString(s) = "abababab" 
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

function decodeString(s){
	let multiplier = []
	let char = []

	for(let i = 0; i< s.length; i++){
		if(!isNaN(parseInt(s[i]))){

			multiplier.push(parseInt(s[i]))

		}else if(s[i] !== "[" && s[i] !== "]"){
			char.push(s[i])
		}
	}

	let decoded = []
	for(let i=char.length-1; i>(-1); i--){
		let x = char[i]

		for(let j =1; j<multiplier[i];j++){
			x += char[i]
		}
		if(i !== 0){
			char[i-1]+= x
		}
		decoded.push(x)
	}

	return(decoded[decoded.length-1])
}

console.log(decodeString("4[ab]"))
console.log(decodeString("2[b3[a]]"))
console.log(decodeString("5[f2[b3[a]]]"))