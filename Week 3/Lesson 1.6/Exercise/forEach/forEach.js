const shows =[
    'blacklist',
    'brooklyn99',
    'the good place',
    'stranger things',
    'dark',
    'black mirror',
    'paw patrol'
];

//old way

// for(let i = 0; i < shows.length; i++){
//     console.log(shows[i]);
// };

//.forEach()
shows.forEach((show)=> {
    console.log(show);
});
// show stands for the individual items in the array

//.map()

const secondSeason = shows.map((show, index)=>{
    return `Second season of ${show} ${index}`; 
});

console.log(secondSeason);


const colours = [{
    css: 'darkcyan',
    hex: '008b8b'
},
{
    css: 'white',
    hex: 'ffffff'
}
];

const cssKeywords = colours.map((colourObj)=>{
    return colourObj.css;
});

console.log(cssKeywords);