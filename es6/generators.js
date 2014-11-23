//Simple generator that returns 3 items on demand
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

var number = numberGenerator();
console.log(number.next().value); //1
console.log(number.next().value); //2
console.log(number.next().value); //3

//Create a generator that returns infinite numbers
function* infiniteNumbers() {
	for (var i = 0;true;i++) {
		yield i;
	}
}


//Create a generator that can take a specific amount from a collection
function* take(coll, number) {
	var i = 0;
	for (var i of coll) {
		if (number === i++) {
			return;
		}
		yield i;
	}
}

//Use the generators to grab 100 numbers
for (var number of take(infiniteNumbers(), 100)) {
	console.log(number);
}