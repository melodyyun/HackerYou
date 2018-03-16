const cabinApp = {};

cabinApp.cabin = {
    bigCabin: [
        {
            title: 'Hawthorn House',
            unique: true,
            src: 'pics/cabin-big-unique-1.jpg',
            alt: 'Hawthorn Cabin',
        },
        {
            title: 'Spruce Den',
            unique: true,
            src: 'pics/cabin-big-unique-2.jpg',
            alt: 'Spruce Den Cabin',
        },
        {
            title: 'Moondance Place',
            unique: true,
            src: 'pics/cabin-big-unique-3.jpg',
            alt: 'Moondance Cabin',
        },
        {
            title: 'The Bunker',
            unique: true,
            src: 'pics/cabin-big-unique-4.jpg',
            alt: 'Bunker Cabin',
        },
        {
            title: 'Hickory Haven',
            unique: false,
            src: 'pics/cabin-big-traditional-1.jpg',
            alt: 'Hickory Haven Cabin',
        },
        {
            title: 'Cedar Retreat',
            unique: false,
            src: 'pics/cabin-big-traditional-2.jpg',
            alt: 'Cedar Retreat Cabin',
        },
        {
            title: 'Ponderosa Villa',
            unique: false,
            src: 'pics/cabin-big-traditional-3.jpg',
            alt: 'Ponderosa Cabin',
        },
        {
            title: 'Laurel Pines',
            unique: false,
            src: 'pics/cabin-big-traditional-4.jpg',
            alt: 'Laurel Pines Cabin',
        },
    ],
    smallCabin: [
        {
            title: 'Sage Cottage',
            unique: true,
            src: 'pics/cabin-small-unique-1.jpg',
            alt: 'Sage Cabin',
        },
        {
            title: 'Timber Trailer',
            unique: true,
            src: 'pics/cabin-small-unique-2.jpg',
            alt: 'Timber Falls Cabin',
        },
        {
            title: 'Aspen House',
            unique: true,
            src: 'pics/cabin-small-unique-3.jpg',
            alt: 'Aspen Cabin',
        },
        {
            title: 'Ironwood Perch',
            unique: true,
            src: 'pics/cabin-small-unique-4.jpg',
            alt: 'Ironwood Perch Cabin',
        },
        {
            title: 'Shiver Alpine Den',
            unique: false,
            src: 'pics/cabin-small-traditional-1.jpg',
            alt: 'Shiver Alpine Cabin',
        },
        {
            title: 'Totem Crest Hut',
            unique: false,
            src: 'pics/cabin-small-traditional-2.jpg',
            alt: 'Totem Crest Cabin',
        },
        {
            title: 'Arrowhead Cottage',
            unique: false,
            src: 'pics/cabin-small-traditional-3.jpg',
            alt: 'Arrowhead Cabin',
        },
        {
            title: 'Harmony Shack',
            unique: false,
            src: 'pics/cabin-small-traditional-4.jpg',
            alt: 'Harmony Cabin',
        },
    ],
};

//------------------
//Re size canvas
//------------------
cabinApp.canvasSize = () =>{
    const canvas = $('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerWidth;
}

//------------------------
//Sound data + color data
//------------------------


const keyData = {

    q: {
        sound: new Howl({
            src: ['sounds/bubbles.mp3']
        }),
        color: '#1abc9c'
    },
    w: {
        sound: new Howl({
            src: ['sounds/clay.mp3']
        }),
        color: '#2ecc71'
    },
    e: {
        sound: new Howl({
            src: ['sounds/confetti.mp3']
        }),
        color: '#3498db'
    },
    r: {
        sound: new Howl({
            src: ['sounds/corona.mp3']
        }),
        color: '#9b59b6'
    },
    t: {
        sound: new Howl({
            src: ['sounds/dotted-spiral.mp3']
        }),
        color: '#34495e'
    },
    y: {
        sound: new Howl({
            src: ['sounds/flash-1.mp3']
        }),
        color: '#16a085'
    },
    u: {
        sound: new Howl({
            src: ['sounds/flash-2.mp3']
        }),
        color: '#27ae60'
    },
    i: {
        sound: new Howl({
            src: ['sounds/flash-3.mp3']
        }),
        color: '#2980b9'
    },
    o: {
        sound: new Howl({
            src: ['sounds/glimmer.mp3']
        }),
        color: '#8e44ad'
    },
    p: {
        sound: new Howl({
            src: ['sounds/moon.mp3']
        }),
        color: '#2c3e50'
    },
    a: {
        sound: new Howl({
            src: ['sounds/pinwheel.mp3']
        }),
        color: '#f1c40f'
    },
    s: {
        sound: new Howl({
            src: ['sounds/piston-1.mp3']
        }),
        color: '#e67e22'
    },
    d: {
        sound: new Howl({
            src: ['sounds/piston-2.mp3']
        }),
        color: '#e74c3c'
    },
    f: {
        sound: new Howl({
            src: ['sounds/prism-1.mp3']
        }),
        color: '#95a5a6'
    },
    g: {
        sound: new Howl({
            src: ['sounds/prism-2.mp3']
        }),
        color: '#f39c12'
    },
    h: {
        sound: new Howl({
            src: ['sounds/prism-3.mp3']
        }),
        color: '#d35400'
    },
    j: {
        sound: new Howl({
            src: ['sounds/splits.mp3']
        }),
        color: '#1abc9c'
    },
    k: {
        sound: new Howl({
            src: ['sounds/squiggle.mp3']
        }),
        color: '#2ecc71'
    },
    l: {
        sound: new Howl({
            src: ['sounds/strike.mp3']
        }),
        color: '#3498db'
    },
    z: {
        sound: new Howl({
            src: ['sounds/suspension.mp3']
        }),
        color: '#9b59b6'
    },
    x: {
        sound: new Howl({
            src: ['sounds/timer.mp3']
        }),
        color: '#34495e'
    },
    c: {
        sound: new Howl({
            src: ['sounds/ufo.mp3']
        }),
        color: '#16a085'
    },
    v: {
        sound: new Howl({
            src: ['sounds/veil.mp3']
        }),
        color: '#27ae60'
    },
    b: {
        sound: new Howl({
            src: ['sounds/wipe.mp3']
        }),
        color: '#2980b9'
    },
    n: {
        sound: new Howl({
            src: ['sounds/zig-zag.mp3']
        }),
        color: '#8e44ad'
    },
    m: {
        sound: new Howl({
            src: ['sounds/moon.mp3']
        }),
        color: '#2c3e50'
    }
}
// //-------------
// //file loader
// //-------------
// themeApp.changeCanvas = (canvasID) =>{
//     $('canvas').attr("id", canvasID);
// }
//-------------------
//change instruction
//-------------------
// themeApp.changeInstruction = (text) =>{
//     $('#instruction').text(text);
// };

//--------------
// change theme
//--------------

// themeApp.changeTheme = (userInput) =>{
//     if (userInput === 'snow'){
//         context.clearRect(0, 0, canvas.width, canvas.height);
//         console.log('snow');
//         themeApp.changeInstruction('Let it snow');
//         themeApp.changeCanvas('snowCanvas');
//     }else if (userInput === 'space'){
//         context.clearRect(0, 0, canvas.width, canvas.height);
//         console.log('space');
//         themeApp.changeInstruction('SPAAAAACCCEEE!!!!');
//         themeApp.changeCanvas('spaceCanvas');
//     }else{
//         console.log('color');
//         context.clearRect(0, 0, canvas.width, canvas.height);
//         themeApp.changeInstruction('Press ↓');
//         themeApp.changeCanvas('myCanvas');
//     }
// }

// cabinApp.randomNum = (maxNum) => {
//     return Math.floor(Math.random() * (maxNum + 1));
// };

cabinApp.displayCabin = (cabin) => {
    console.log(cabin);
    $('#result').append(`
    <div class='cabinImg'>
        <h1>${cabin.title}<h1>
        <img src='${cabin.src}' alt='${cabin.alt}'>
    </div>
    `);
};

cabinApp.choice = (userInput1, userInput2) => {
    const cabinSizeChoice = cabinApp.cabin[userInput1];
    const cabinUniqChoice = cabinSizeChoice.filter((res) => {
        if (res.unique == userInput2) {
            cabinApp.displayCabin(res);
            return res;
        };
    });
};

cabinApp.init = () =>{
    cabinApp.canvasSize();
    $('input[type=text]').focus();
    $('form').on('submit', function (e) {
        e.preventDefault();
        $('#result').empty();
        $('#instruction').fadeOut();
        $('#inspiration').fadeIn();
        const cabinSize =  $('input[name=size]:checked').val();
        const unique = $.parseJSON($('input[name=uniqueness]:checked').val());
        cabinApp.choice(cabinSize, unique);
    });

};

$(function () {
    cabinApp.init();
});