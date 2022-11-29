var map = L.map('map').setView([48.245, 2.0345], 13);
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
//nous réalisons un fetch de la fonction  
var data;
fetch('../PHP/json_point_request.php', {
    method: 'post',
    body: data
  })
	.then(r => r.json())
	.then(r=> data=JSON.parse(r))
	.then(r => {console.log(r)})
	.catch(console.error);
console.log(data);