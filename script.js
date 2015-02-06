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

$('#sudokuClick').click(function(e) {
    $('#sudokuPic').lightbox_me({
        centered: true, 
        onLoad: function() { 
            $('#snakePic').find('input:first').focus()
            }
        });
    e.preventDefault();
});

$('#snakeClick').click(function(e) {
    $('#snakePic').lightbox_me({
        centered: true, 
        onLoad: function() { 
            $('#snakePic').find('input:first').focus()
            }
        });
    e.preventDefault();
});

$('#tetrisClick').click(function(e) {
    $('#tetrisPic').lightbox_me({
        centered: true, 
        onLoad: function() { 
            $('#tetrisPic').find('input:first').focus()
            }
        });
    e.preventDefault();
});


// $("#lighter").hide();

// $("#lighter").lightbox_me();