// Generates random number
const generateRandomNumber = (num) =>Math.floor(Math.random() * num);

// Store the 'prophesy' in an array
let fortuneCookie = []

//Creates an object with it's properties
const prophesyBuilder = {
  elements: ['fire', 'water', 'wind', 'earth'],
  fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
  advice: ['go out and eat', 'stay home', 'play more', 'trust no one']
}

// Iterate over the object
for(let prop in prophesyBuilder) {
  let optionIdx = generateRandomNumber(prophesyBuilder[prop].length)

  // use the object's properties to customize the message being added to fortuneCookie  
  switch(prop) {
    case 'elements':
      fortuneCookie.push(`Your are blessed with the "${prophesyBuilder[prop][optionIdx]}" element.`)
      break
    case 'fortuneOutput':
      fortuneCookie.push(`You are having: "${prophesyBuilder[prop][optionIdx]}".`)
      break
    case 'advice':
      fortuneCookie.push(`You should: "${prophesyBuilder[prop][optionIdx]}".`)
      break
    default:
      fortuneCookie.push('There is not enough info.')
  }
}

createProphesy = () => fortuneCookie.join('\n');
  
createProphesy(fortuneCookie);