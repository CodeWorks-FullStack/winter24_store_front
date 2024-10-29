console.log('👻')

// #region data examples

// SIMPLE data types (Primitives)
let string = "Boo!"
let bool = true
let number = 13
let nothing
let knownNothing = null

// COMPLEX data types (Reference) types

// Arrays are a collection of data, organized by position (INDEX)
let numArray = [1, 2, 3]
let stringArray = ['hi', 'boo!', 'aaaaaaah']
let boolArray = [true, true, false,]
let mixedArray = [1, 'boo!', false]

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// Objects are a collection of data, organized by KEY : VALUE pairs

let numberObject = {
  first: 1,
  second: 25,
  third: 100
}

let alphabet = {
  a: 1,
  z: 26,
  b: 2,
  y: 25
}

let instructor = {
  name: 'Mick',
  dogs: 3,
  wearsCrocs: true
}

let instructor2 = {
  name: 'Ryan',
  dogs: 0,
  wearsCrocs: false
}

let home = {
  name: 'The Eagles',
  points: 0,
  totalWins: 5,
  players: 11
}

let away = {
  name: 'The Falcons',
  points: 1,
  totalWins: 4,
  players: ['Birdman', 'Egghead', 'sharp feet']
}

let teams = [
  {
    team: 1,
    name: 'eagles',
    players: ['🦅', '🐓', '🕊️']
  }, {
    team: 2,
    name: 'falcons',
    players: ['🐦', '🦃', '🐤']
  }
]

// console.log(teams[1].name)
// console.log(teams[2].name) // FIXME Cannot read properties of undefined (reading 'name') - teams[2] is not defined

// #endregion ---


// #region 🗃️ STATE -----

const itemsForSale = [
  {
    name: '10ft Skeleton',
    price: 249.75,
    quantity: 0
  },
  {
    name: 'pumpkin',
    price: 5.50,
    quantity: 0
  },
  {
    name: 'Vampire Teeth',
    price: 2.99,
    quantity: 0
  },
  {
    name: 'Ghost Costume',
    price: 13.99,
    quantity: 0
  },
]
console.table(itemsForSale)

// #endregion -------

// #region 🧠 Logic Functions (any function that modifies the "State")
// NOTE get in the habit of changing data first, THEN drawing that data to the Document


function addVampireTeeth() {
  // itemsForSale[0].quantity += 1
  let vampTeeth = itemsForSale[0]
  vampTeeth.quantity += 1
  console.log('vampTeeth', vampTeeth)
}

function addSkeleton() {
  let selectedItem = itemsForSale[1]
  selectedItem.quantity += 1
  console.log('selectedItem', selectedItem)
}

function addItem(itemIndex) { // when we call the function, we will pass a number
  // debugger
  let selectedItem = itemsForSale[itemIndex]
  selectedItem.quantity += 1
  console.log('selectedItem', selectedItem)
}


function addItemByName(itemName) {
  // NOTE for loop, used to repeat code
  for (let i = 0; i < itemsForSale.length; i++) {
    // console.log('REPEAT ME', i);
    let item = itemsForSale[i]
    // console.log('item', item);

    // if (item.name == '10ft Skeleton') {
    if (item.name == itemName) {
      item.quantity += 1
      console.table([item]); // trick the table for better formatting
    }
  }
  drawCart()
}

function calculateCartTotal() {
  let total = 0
  for (let i = 0; i < itemsForSale.length; i++) {
    let item = itemsForSale[i]
    total += item.price * item.quantity
  }
  console.log('total', total)
  return total // give the value of the variable BACK to the "Caller" of the function
}

function checkout() {
  const cartTotal = calculateCartTotal()
  const confirmed = confirm(`Are you sure you want to checkout for a total of: ${cartTotal}`)
  if (confirmed) {
    for (let i = 0; i < itemsForSale.length; i++) {
      let item = itemsForSale[i]
      item.quantity = 0
    }
    drawCart()
  }
}


//  #endregion --------


// #region 🖌️ Visualizers (Functions that "draw" to the document)

function drawCart() {
  let content = ''
  for (let i = 0; i < itemsForSale.length; i++) {
    let item = itemsForSale[i]
    if (item.quantity > 0) {
      content += `
    <p class="d-flex justify-content-between">
      <span>${item.quantity}x ${item.name}</span>
      <span class="text-success"><i class="mdi mdi-currency-usd"></i>${item.price * item.quantity}</span>
    </p>`
    }
  }
  console.log('content', content);
  const cartElm = document.getElementById('cart-display')
  cartElm.innerHTML = content
  drawTotal()
}

function drawTotal() {
  let cartTotal = calculateCartTotal()
  const totalElm = document.getElementById('cart-total')
  totalElm.innerText = cartTotal.toFixed(2)
}


// #endregion ----------