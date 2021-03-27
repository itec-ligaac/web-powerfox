let submit_button=document.getElementById('search_submit')
let place_name,country_code;

submit_button.addEventListener('click',(event)=>{
	    event.preventDefault();
		place_name=document.getElementById('place_name').value
		country_code=document.getElementById('country_code').value
})