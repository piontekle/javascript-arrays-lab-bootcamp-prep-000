var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var moreKittens = [...kittens, name];
  return moreKittens
}

function prependKitten(name) {
 moreKittens = [name, ...kittens]
  return moreKittens
}

function removeLastKitten() {
  kittens.slice(-1)
  return kittens
}

function removeFirstKitten() {
  kittens.slice(1)
  return kittens
}