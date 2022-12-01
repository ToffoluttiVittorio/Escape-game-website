var map = L.map('map').setView([48.245, 2.0345], 13);
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
//nous réalisons un fetch de la fonction  
var oisif=document.getElementById('check1');
oisif.addEventListener("input", function(){
	var data = {"data":1};
	fetch('../PHP/json_point_request.php', {
		method: 'post',
		body: JSON.stringify(data)
 	 })
		.then(r => r.json())
		.then(r=> {
			for (var i=0; i<r.length; i++){
				var lat = r[i]["lat"];
				var long =r[i]["long"];
				var mark = L.marker([lat, long]).addTo(map);
				if (r[i]["popup"]!=""){
					mark.bindPopup(r[i]["popup"]).openPopup();
					console.log(r[i]["popup"]);
				}
				}
			})
		.then(r => console.log(r));
	})
