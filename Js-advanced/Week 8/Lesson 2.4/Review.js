//step 1 create an app object
const artApp = {
	//apiKey:`xVqiyldx` - another way to saving the key
};

//global variable
artApp.apiKey = `xVqiyldx`;



artApp.displayArt = (listOfArt) => { 
	$('#artwork').empty();
	console.log(listOfArt);
	listOfArt.forEach((artPiece)=>{
		const pieceOfArt = `<div>
								<h2>${artPiece.title}</h2>
								<img src='${artPiece.webImage.url}' alt='${artPiece.longTitle}'>
								<p>${artPiece.principalOrFirstMaker}</p>
							</div>`
		$('#artwork').append(pieceOfArt);
	});
}

//step 3 use ajax to get info from api
artApp.getArt = (query='monkey') =>{
	$.ajax({
		url:`https://www.rijksmuseum.nl/api/en/collection`,
		method: `GET`,
		dataType: `jsonp`,
		data:{
			key: artApp.apiKey,
			format: `jsonp`,
			q: query //query (not all documentation will accept this)
		}
	}).then((res) => { //response or result of ajax response
		// console.log(res);
		const artObjects = res.artObjects.filter((piece)=>{
			if(piece.hasImage === true){
				return piece;
			}
		});
		artApp.displayArt(artObjects);
	});
};

artApp.updateAnimal = (updatedText) => {
	$('h1 span').text(updatedText);
}

//step 2 create init function
artApp.init = () => {
	artApp.getArt();
	$('select').on('change', function () {
		const userInput = $(this).val();
		const animalText = $(this).find(':selected').text();
		console.log(animalText);
		artApp.getArt(userInput);
		artApp.updateAnimal(animalText);
	});
}

//step 4 document.ready
$(function () {
	artApp.init();
});