const countdown = document.querySelector('.countdown');

//set launch date
const launchDate = new Date('May 1, 2020 13:00:00').getTime();

//update every second
const intvl = setInterval(()=> {
	//get todays date and time (ms)
	const now = new Date().getTime();

	//distance from now to the launch date
	const distance = launchDate - now;

	//time calculations
	const days = Math.floor(distance/(1000 * 60 * 60 * 24));
	const hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
	const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	//display result
	countdown.innerHTML = `
		<div>${days}<span>Days</span></div>
		<div>${hours}<span>Hours</span></div>
		<div>${mins}<span>Minutes</span></div>
		<div>${seconds}<span>Seconds</span></div>
	`;

	//if launch date passed
	if(distance < 0){
		//stop countdown
		clearInterval(intvl);
		//style and output
		countdown.style.color = '#17a2ba';
		countdown.innerHTML = 'Launched!';
	}
}, 1000);