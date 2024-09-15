const memesArr = [
	{ img: './1.jpg', descript: 'Мы не рекламируемся...' },
	{ img: './2.jpg', descript: 'Это повторится.' },
	{ img: './3.jpg', descript: 'Мем с Ярушиным' },
	{ img: './4.jpg', descript: 'Какой же он...' },
];

let selects = document.getElementsByClassName('select');
let image = document.getElementById('image');
let description = document.getElementById('description');
const sliderContainer = document.querySelector('.slider-container');


function handleSelect(event) {
	var index = event.currentTarget.getAttribute('data-index');
	

	// Удаляем класс 'select-outline' у всех элементов
	for (let i = 0; i < selects.length; i++) {
		selects[i].classList.remove('circle-outline');
        selects[i].classList.add('circle');
	}

    description.textContent = memesArr[index].descript;

	// Добавляем класс 'select-outline' только к кликнутому элементу
	event.currentTarget.classList.add('circle-outline');
    event.currentTarget.classList.remove('circle');

    // sliderContainer.style.transform = `translateX(${index * 100}%)`;
    image.src = memesArr[index].img;
}

for (let i = 0; i < selects.length; i++) {
	selects[i].addEventListener('click', (event) => handleSelect(event));
}



console.log({ selects });
