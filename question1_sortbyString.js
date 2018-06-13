 // sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. 
 // You can assume t will not have repetitive characters. 
 // For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

 function sortByStrings(s,t){
 	let sortedString = []

 	for(let i = 0; i<t.length; i++){
 		let currentChar = t[i]
 		for(let j=0; j<s.length; j++){
 			if(s[j]==t[i]){
 				sortedString.push(s[j])
 			}
 		}
 	}
 	if(sortedString.length == 0){
 		console.log("There are no letters in t that match s :(")
 	}
 	else if(sortedString.length !== s.length){
 		console.log("t Does not include all the letters in s")
 		return sortedString.join("")
 	}else{
 		return sortedString.join("")
 	}
 }

 console.log(sortByStrings("taccccc","dogc"))