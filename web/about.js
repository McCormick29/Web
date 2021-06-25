console.log("hello world");


let form = document.querySelector('form#contact')
form.addEventListener('submit', handleSubmit)

function handleSubmit(evt) {
	evt.preventDefault();
	alert("Form submission succesful")
	// console.log('form submit');
}



function userCompliment(evt) {
alert('Great job!')
}


const compliment = document.querySelector('content#img');
compliment.addEventListener('mouseover',userCompliment)