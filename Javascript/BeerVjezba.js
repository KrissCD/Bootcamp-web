function beer() {
    for (let i = 99; i > 1; i--) {
        let bottleWord = "bottles";
        let next = i - 1;
        let nextBottleWord = next === 1 ? "bottle" : "bottles";

        console.log(`${i} ${bottleWord} of beer on the wall, ${i} ${bottleWord} of beer.`);
        console.log(`Take one down and pass it around, ${next} ${nextBottleWord} of beer on the wall.\n`);
    }
    console.log("1 bottle of beer on the wall, 1 bottle of beer.");
    console.log("Take one down and pass it around, no more bottles of beer on the wall.\n");

    console.log("No more bottles of beer on the wall, no more bottles of beer.");
    console.log("Go to the store and buy some more");
}

beer()