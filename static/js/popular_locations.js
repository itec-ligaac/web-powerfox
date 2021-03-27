let submit_button = document.getElementById('search_submit')
let place_name, country_code;

submit_button.addEventListener('click', (event) => {
    event.preventDefault();
    place_name = document.getElementById('place_name').value
    country_code = document.getElementById('country_code').value
    	if(country_code)url_for_touristic_sites=`https://api.opentripmap.com/0.1/en/places/geoname?name=${place_name}&country=${country_code}&apikey=5ae2e3f221c38a28845f05b6917871d13396edb6ce5f956e7175989e`
	    else url_for_touristic_sites= `https://api.opentripmap.com/0.1/en/places/geoname?name=${place_name}&apikey=5ae2e3f221c38a28845f05b6917871d13396edb6ce5f956e7175989e`
	    fetch(url_for_touristic_sites, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            long=data.lon;
            lang=data.lat;
            urls=`https://api.opentripmap.com/0.1/en/places/radius?radius=5000&lon=${long}&lat=${lang}&rate=3&limit=20&apikey=5ae2e3f221c38a28845f05b6917871d13396edb6ce5f956e7175989e`
            fetch(urls, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => response.json())
        .then(data => {

        	cards_galery=document.getElementById('cards')
        	cards_galery.innerHTML=''
        	for(let i=0;i<20;i++){
        	console.log(data.features[i].properties)
        	name=data.features[i].properties.name;
        	description=data.features[i].properties.kinds;
        	distance_from_city=data.features[i].properties.dist;
        	rate=data.features[i].properties.rate;
        	 let card= document.createElement('div');
        	 c_card_title=document.createElement('h1');
        	 c_description=document.createElement('p');
        	 c_card_dist_from_city= document.createElement('p');
        	 c_card_rate=document.createElement('p');
        	 c_card_title.innerHTML= name
        	 c_description.innerHTML= description
        	 c_card_dist_from_city.innerHTML= distance_from_city
        	 c_card_rate.innerHTML= rate
        	 cards_galery.appendChild(card)
        	 card.appendChild(c_card_title)
        	 card.appendChild(c_description)
        	 card.appendChild(c_card_dist_from_city)
        	 card.appendChild(c_card_rate)
        	 // console.log(name)
        	}
        })
        })
})