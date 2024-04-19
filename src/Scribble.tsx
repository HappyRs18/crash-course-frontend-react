// let animalList = [
//   new Animal("Dog", 4),
//   new Animal("Ape", 2),
//   new Animal("Cat", 4),
// ];

// // Add to list
// animalList.push(new Animal("Cat2", 3));

// // Remove
// // Method #1 - Remove by predicate
// animalList = animalList.filter((x) => x.countLegs === 4);

// // Method #2 - Remove at index
// const indexToRemoveAt: number = animalList.findIndex((x) => x.countLegs === 3);
// animalList.splice(indexToRemoveAt, 1);

// // Method #3 - Remove first element
// animalList.shift();

// // Method #4 - Remove last element
// animalList.pop();

// // Predicate Functions
// // C# -> some -> Any
// animalList.some((x) => x.countLegs === 3);

// // C# -> find -> FirstOrDefault
// const foundEntry = animalList.find((x) => x.countLegs === 3);

// // C# -> every -> All
// const allEntriesHasPredicateTrue = animalList.every((x) => x.countLegs > 1);

// // C# -> where -> filter
// const allEntriesWithLegsGreaterThanTwo = animalList.filter(
//   (x) => x.countLegs > 2
// );

// // C# -> map -> select / foreach
// const allEntriesWithLegsGreaterThanTwo = animalList.map((x) => x.name); //output ["Dog", "Ape", "Cat"]

// const someAnimal = new Animal("Test", 10);

// const objectKeys = Object.keys(someAnimal);
// const objectValues = Object.values(someAnimal);

// const objectEntries = Object.entries(someAnimal);

// // Iterate objects
// for (const [key, value] of objectEntries) {
// }
