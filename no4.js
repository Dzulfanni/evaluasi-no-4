var randomNumbers = [90,99,78,73,80,60,96,67,55,86,80,81,81,73,77,71,90,87,85,23,52,87,78,96,80,68]; 
const newNumber = randomNumbers.filter(a=>a>=65)
.map(a=>a=randomNumbers.length/2)
.filter(a=>a<40)
.map(a=>a=randomNumbers.length)
.reduce((acc, cr)=>(acc/2)+cr)

console.log(newNumber)