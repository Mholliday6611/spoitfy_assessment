// changePossibilities(amount,amount): Your quirky boss collects rare, old coins. 
// They found out you're a programmer and asked you to solve something they've been wondering for a long time. 

// Write a function that, given an amount of money and an array of coin denominations, 
// computes the number of ways to make the amount of money with coins of the available denominations. 

// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), 
// your program would output 4—the number of ways to make 4¢ with those denominations: 

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

function changePossibilities(amount,denominations){
	let ways =[]

	for(let i =0 ; i<denominations.length; i++){
		let a = 0
		let way = []
		while(a < amount){
			way.push(denominations[i])
			a += denominations[i]
		}

		if(a==amount){
			ways.push(way)
		}

		for(let j =denominations.length-1; j>i; j--){
			let a = 0
			a += denominations[j]
			let way = []
			way.push(denominations[j])
			while(a < amount){
				way.push(denominations[i])
				a += denominations[i]
			}
			
			if(a==amount){
				ways.push(way)
			}

		}
	}

	return(ways)

}

console.log(changePossibilities(4, [1,2,3]))