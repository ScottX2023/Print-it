const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector('.arrow_left');


arrowLeft.addEventListener('click', function() {
  console.log("Left arrow click");
});


const arrowRight = document.querySelector('.arrow_right');


arrowRight.addEventListener('click', function() {
  console.log("Right arrow click");
});


const dots = document.querySelectorAll('.dot');

function updateActiveDot() {
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('dot_selected');
    } else {
      dot.classList.remove('dot_selected');
    }
  });
}
