const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let selected = 0;

/* Ajout des Dots */
for (let i = 0; i < slides.length; i++) {
	const divDots = document.querySelector('.dots');
	const divDot = document.createElement("div");
	divDot.className = "dot dot"+i;
	if ( i === 0 ){divDot.className = "dot " + "dot"+i + " dot_selected";}
	divDots.append(divDot);
}

function slideElement (selected){

	/* Créations des éléments du Slide */
	const imageSlide = document.querySelector('.banner-img');
	imageSlide.src = slides[selected].image;
	const tagLineSlide = document.querySelector('.description');
	tagLineSlide.innerHTML = slides[selected].tagLine;

}


/* Event Listener sur les flèches */
const arrowR = document.getElementById('arrowR');
arrowR.addEventListener('click', slideRight);
function slideRight(){
	++selected;
	if (selected === slides.length){
		selected = 0;
	}
	slideElement(selected);

	/* Changement dot_selected Right */
	let divDotSelected = document.querySelector('.dot_selected');
	divDotSelected.className = "dot dot"+(selected-1);
	if (selected === 0) {divDotSelected.className = "dot dot"+(slides.length-1);}
	divDotSelected = document.querySelector('.dot'+selected);
	divDotSelected.className = "dot " + "dot"+ selected + " dot_selected" ;
}

const arrowL = document.getElementById('arrowL');
arrowL.addEventListener('click', slideLeft);
function slideLeft(){
	--selected;
	if (selected < 0){
		selected = slides.length-1;
	}
	slideElement(selected);

	/* Changement dot_selected Left */
	let divDotSelected = document.querySelector('.dot_selected');
	divDotSelected.className = "dot dot"+(selected+1);
	if (selected === (slides.length-1)) {divDotSelected.className = "dot dot0";}
	divDotSelected = document.querySelector('.dot'+selected);
	divDotSelected.className = "dot " + "dot"+ selected + " dot_selected" ;
}