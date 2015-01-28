function greeting() {
	message = document.getElementById("greeting");
	var date = new Date()
	d = date.getHours()
	if (d > 4 && d < 12) {
		message.innerHTML = '<p> GOOD MORNING, MY NAME IS </p>'
	} else if (d >= 12 && d < 17) {
		message.innerHTML = '<p> GOOD AFTERNOON, MY NAME IS </p>'
	} else if (d >= 17 && d < 22) {
		message.innerHTML = '<p> GOOD EVENING, MY NAME IS </p>'
	} else {
		message.innerHTML = '<p> CHEERS, MY NAME IS </p>'
	}

}

window.onload = greeting;

