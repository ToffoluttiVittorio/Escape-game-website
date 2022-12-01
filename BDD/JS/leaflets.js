var map = L.map('map').setView([48.245, 2.0345], 13);
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
//nous réalisons un fetch de la fonction  
var oisif=document.getElementById('check1');
oisif.addEventListener("input", function(){
	var data = {"data":1};// but ici (si on fait plusieurs fetch c'est de demander au fichier PHP de renvoyer que ce qui est demandée et pas le reste)
	fetch('../PHP/json_point_request.php', {
		method: 'post',
		body: JSON.stringify(data)
 	 })
		.then(r => r.json())
		.then(r=> {
			for (var i=0; i<r.length; i++){
				var lat = r[i]["lat"];//selection de la colonne lat
				var long =r[i]["long"];//selection de la colonne long
				var mark = L.marker([lat, long]).addTo(map);
				if (r[i]["popup"]!=""){//test de popup pour voir que cela marche
					mark.bindPopup(r[i]["popup"]).openPopup();
					console.log(r[i]["popup"]);//vérifier que cela marche (j'ai mis un popup à un seul endroit si tu utilises le fichier .sql que je t'ai envoyée (tu peux aussi voir tous les colonnes SQL))
				}
				}
			})
		.then(r => console.log(r));//inutile je pense mais bien pour voir tous les erreurs si jamais le fetch n'est pas bon (bon en général ça vient du PHP)
	})
