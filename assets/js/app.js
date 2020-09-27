// On Scrolling give the navbar 'on-scroll' class to have cool animation and good size

// Set Window Position Y
let scrollPosition = window.scrollY;
// Set the navbar HTML tag
let menu = document.querySelector('#menu');

// Listen to an Event to happen, such as scroll in this case.
// () => {} this is just a function, called arrow function,
// you can also use the old one, function () {}
window.addEventListener('scroll', () => {
	scrollPosition = window.scrollY;
	if (scrollPosition >= 30)
		menu.classList.add('on-scroll');
	else
		menu.classList.remove('on-scroll');
});
