const slidesContent = [
	'<div class="slideImgWrapper boxModel"> <amp-img class="boxModel" alt="" src="1.jpg" width="auto" height="40vw" layout="fixed-height"></amp-img> </div> <div class="slideTextContent boxModelGrid"> <h1 class="boxModel" id="textTitle">Slide 1 Lorem ipsum dolor sit amet, consectetur.</h1> <h2 class="boxModel" id="textLead">Slide 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam non excepturi e, placeat.</h2> <p class="boxModel" id="textText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, doloribus. Omnis corrupti accusamus um. Perspiciatis voluptas, ex nulla, eius ad eum dolorem qui labore quaerat unde at quibusdam natus odio, nobis quos! Quam recusandae fugiat sapiente, libero nemot.</p> </div>',
	'<div class="slideImgWrapper boxModel"> <amp-img class="boxModel" alt="" src="2.jpg" width="auto" height="40vw" layout="fixed-height"></amp-img> </div> <div class="slideTextContent boxModelGrid"> <h1 class="boxModel" id="textTitle">Slide 2 Lorem ipsum dolor sit amet, consectetur.</h1> <h2 class="boxModel" id="textLead">Slide 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam non excepturi e, placeat.</h2> <p class="boxModel" id="textText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, doloribus. Omnis corrupti accusamus molestiae.la, eaque. Rerum, maiores sit mollitia magni impedit asperiores aliquam laudantium. Perspiciatis voluptas, ex nulla, eius ad eum dolorem qui labore quaerat unde at quibusdam natus odio, nobis quos! Quam recusandae fugiat sapiente, libero nemot.</p> </div>',
	'<div class="slideImgWrapper boxModel"> <amp-img class="boxModel" alt="" src="3.jpg" width="auto" height="40vw" layout="fixed-height"></amp-img> </div> <div class="slideTextContent boxModelGrid"> <h1 class="boxModel" id="textTitle">Slide 3 Lorem ipsum dolor sit amet, consectetur.</h1> <h2 class="boxModel" id="textLead">Slide 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam non excepturi e, placeat.</h2> <p class="boxModel" id="textText">Lorem ipsum doe. Rerum, maiores sit mollitia magni impedit asperiores aliquam laudantium. Perspiciatis voluptas, ex nulla, eius ad eum dolorem qui labore quaerat unde at quibusdam natus odio, nobis quos! Quam recusandae fugiat sapiente, libero nemot.</p> </div>',
	'<div class="slideImgWrapper boxModel"> <amp-img class="boxModel" alt="" src="4.jpg" width="auto" height="40vw" layout="fixed-height"></amp-img> </div> <div class="slideTextContent boxModelGrid"> <h1 class="boxModel" id="textTitle">Slide 4 Lorem ipsum dolor sit amet, consectetur.</h1> <h2 class="boxModel" id="textLead">Slide 4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam non excepturi e, placeat.</h2> <p class="boxModel" id="textText">Lorem ipsu, tempore deleniti totam blanditiis. Nulla, eaque. Rerum, maiores sit mollitia magni impedit asperiores aliquam laudantium. Perspiciatis voluptas, ex nulla, eius ad eum dolorem qui labore quaerat unde at quibusdam natus odio, nobis quos! Quam recusandae fugiat sapiente, libero nemot.</p> </div>'
];

const totalDeSlides = slidesContent.length -1;
console.log('Total de slides:' + totalDeSlides);

const container = document.getElementById('sliderContainer');

const firstSlide = document.createElement('div');
firstSlide.className = 'slideUnit boxModelGrid';
firstSlide.innerHTML = slidesContent[0];

container.appendChild(firstSlide);

let cont = 0;
let slideAtual = 0;

container.addEventListener('click', rwdSlide);
container.addEventListener('click', fwdSlide);

function slideCreate() {
	const slide = document.createElement('div');
	slide.style.opacity = '0';
	slide.className = 'slideUnit boxModelGrid';
	slide.innerHTML = slidesContent[slideAtual];
	container.appendChild(slide);
};

function rwdSlide(el) {
	if (el.target.id === 'leftSlideArrowBtn') {
		console.log('iniciar');
		console.log('btn left');
		console.log(container.children[1]);
		container.children[1].style.animationName = '';
		container.children[1].style.animationName = 'fadeOutRight';
		container.children[1].style.animationDelay = '0.3s';
		container.children[1].querySelector('.slideImgWrapper').style.animationName = 'fadeOutRight';
		container.children[1].querySelector('.slideImgWrapper').style.animationDelay = '0.1s';
		container.children[1].querySelector('#textTitle').style.animationName = 'fadeOutRight';
		container.children[1].querySelector('#textTitle').style.animationDelay = '0.2s';
		container.children[1].querySelector('#textLead').style.animationName = 'fadeOutRight';
		container.children[1].querySelector('#textLead').style.animationDelay = '0.1s';
		container.children[1].querySelector('#textText').style.animationName = 'fadeOutRight';
		container.children[1].querySelector('#textText').style.animationDelay = '0.1s';
		setTimeout(function() {
			container.children[1].remove();
		}, 900);
		if (slideAtual === 0) {
			slideAtual = totalDeSlides;
		} else {
			slideAtual -= 1;
		}
		console.log(slideAtual);
		setTimeout(slideCreate(), 910);
		setTimeout(function() {
			container.children[1].style.animationName = '';
			container.children[1].style.animationName = 'fadeInLeft';
			container.children[1].style.animationDelay = '0s';
			container.children[1].querySelector('.slideImgWrapper').style.animationName = 'fadeInLeft';
			container.children[1].querySelector('.slideImgWrapper').style.animationDelay = '0.5s';
			container.children[1].querySelector('#textTitle').style.animationName = 'fadeInLeft';
			container.children[1].querySelector('#textTitle').style.animationDelay = '0.4s';
			container.children[1].querySelector('#textLead').style.animationName = 'fadeInLeft';
			container.children[1].querySelector('#textLead').style.animationDelay = '0.4s';
			container.children[1].querySelector('#textText').style.animationName = 'fadeInLeft';
			container.children[1].querySelector('#textText').style.animationDelay = '0.3s';
		}, 910);
	} else {
		console.log('out left');
	}
};

function fwdSlide(el) {
	if (el.target.id === 'rightSlideArrowBtn') {
		console.log('iniciar');
		console.log('btn left');
		console.log(container.children[1]);
		container.children[1].style.animationName = '';
		container.children[1].style.animationName = 'fadeOutLeft';
		container.children[1].style.animationDelay = '0.3s';
		container.children[1].querySelector('.slideImgWrapper').style.animationName = 'fadeOutLeft';
		container.children[1].querySelector('.slideImgWrapper').style.animationDelay = '0.1s';
		container.children[1].querySelector('#textTitle').style.animationName = 'fadeOutLeft';
		container.children[1].querySelector('#textTitle').style.animationDelay = '0.4s';
		container.children[1].querySelector('#textLead').style.animationName = 'fadeOutLeft';
		container.children[1].querySelector('#textLead').style.animationDelay = '0.1s';
		container.children[1].querySelector('#textText').style.animationName = 'fadeOutLeft';
		container.children[1].querySelector('#textText').style.animationDelay = '0.1s';
		setTimeout(function() {
			container.children[1].remove();
		}, 900);
		if (slideAtual === totalDeSlides) {
			slideAtual = 0;
		} else {
			slideAtual += 1;
		};
		console.log(slideAtual);
		setTimeout(slideCreate(), 910);
		setTimeout(function() {
			container.children[1].style.animationName = '';
			container.children[1].style.animationName = 'fadeInRight';
			container.children[1].style.animationDelay = '0s';
			container.children[1].querySelector('.slideImgWrapper').style.animationName = 'fadeInRight';
			container.children[1].querySelector('.slideImgWrapper').style.animationDelay = '0.5s';
			container.children[1].querySelector('#textTitle').style.animationName = 'fadeInRight';
			container.children[1].querySelector('#textTitle').style.animationDelay = '0.3s';
			container.children[1].querySelector('#textLead').style.animationName = 'fadeInRight';
			container.children[1].querySelector('#textLead').style.animationDelay = '0.4s';
			container.children[1].querySelector('#textText').style.animationName = 'fadeInRight';
			container.children[1].querySelector('#textText').style.animationDelay = '0.3s';
		}, 910);
	} else {
		console.log('out right');
	};
};