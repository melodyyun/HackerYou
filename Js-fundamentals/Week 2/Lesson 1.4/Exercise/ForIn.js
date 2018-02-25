// values are not always in order
const clothing = {
    belt: "can't remember",
    socks: 34,
    shoes: 2,
    pants: 3,
    hat: true,
    tShirts: {
        smallSize: 3,
        mediumSize: 4,
        largeSize: 2
    }
}

for(let items in clothing){
    console.log(`There are ${clothing[items]} ${items}`);
}

const inventory = {
    apples: 2,
    oranges: 3,
    bananas: 6,
    milk: 2
}

console.log(`We have ${inventory.apples} apples, 
    We have ${inventory.oranges} oranges, 
    We have ${inventory.bananas} bananas, 
    We have ${inventory.milk} milk, `)

for(let items in inventory){
    console.log(`We have ${inventory[items]} ${items}`);
}
