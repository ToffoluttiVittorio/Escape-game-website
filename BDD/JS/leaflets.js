/////////////// MAP//////////////////

var map = L.map('map').setView([48.900002, 2.28333], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


/////////// Initialisation /////////

let i = 0;
let groupMarker = L.featureGroup();
objet(i);
let tableau = [];
let inventaire = [];

function objet(i){
	var data = {"data":1};// but ici (si on fait plusieurs fetch c'est de demander au fichier PHP de renvoyer que ce qui est demandée et pas le reste)
	fetch('../PHP/json_point_request.php', {
		method: 'post',
		body: JSON.stringify(data)
 	 })
		.then(r => r.json())
		.then(r=> {

			console.log(i, "compteur");
			collecte(r[i]);
            
				// if (r[i]["popup"]!=""){//test de popup pour voir que cela marche
				// 	mark.bindPopup(r[i]["popup"]).openPopup();
					// console.log(r[i]["popup"]);//vérifier que cela marche (j'ai mis un popup à un seul endroit si tu utilises le fichier .sql que je t'ai envoyée (tu peux aussi voir tous les colonnes SQL))
				}
				
			)
}

function collecte(r){
	tableau = [];
	tableau.push(r["id_objet"]);
	tableau.push(r["longitude"]);
	tableau.push(r["latitude"]);
	tableau.push(r["ID_type"]);
	tableau.push(r["URL_image"]);
	tableau.push(r["Code"]);
	tableau.push(r["objet_suivant"]);
	tableau.push(r["popup"]);
	tableau.push(r["popupbis"]);
	tableau.push(r["objet_inventaire"]);
	jeux(tableau);
}


function jeux(tableau){

	let url = tableau[4];
	console.log(url);
	let icone = L.icon({
		iconUrl: url,
		iconSize: [50, 50]
	});

	let mark = L.marker([tableau[1], tableau[2]], {icon: icone}); 
	mark.addTo(groupMarker);

	function cliquer(){
		console.log("clique");
		alert(tableau[7]);
		groupMarker.removeEventListener("click", cliquer);
		groupMarker.clearLayers();
		map.removeEventListener("zoom", zoom);
		i = i + 1;
		objet(i);
		// document.getElementById("image").src=malika[compteur][1];
	}

	function cliquerbloquer(){
		console.log("cliquerbloquer");
		alert(tableau[8]);
		groupMarker.removeEventListener("click", cliquerbloquer);
		map.removeEventListener("zoom", zoom);
		i = i + 1;
		objet(i);
	}

	function cliquerbloquant(){
		console.log("cliquerbloquant");
		groupMarker.removeLayer(mark);
		alert(tableau[8]);
		groupMarker.addEventListener("click", cliquer)
	}

	function cliquercoder(){
		console.log("cliquercoder");
		groupMarker.removeEventListener("click", cliquercoder);
		alert(tableau[7]);
		map.removeEventListener("zoom", zoom);
		i = i + 1;
		objet(i);
	}

	function cliquercodant(){
		console.log("cliquercodant");
		groupMarker.removeLayer(mark);
		alert(tableau[8]);
		groupMarker.addEventListener("click", cliquer)
	}

	if (tableau[3] == 0){ // marqueur basique sans effet 
		console.log("test1");
		groupMarker.addEventListener("click", cliquerbloquer);
	}
	if (tableau[3] == 1){ //marqueur bloqué par un autre 
		console.log("test2")
		mark.addEventListener("click", cliquerbloquant);
	}
	if (tableau[3] == 2){ // marqueur bloquant l'objet bloqué 
		console.log("test3");
		groupMarker.addEventListener("click", cliquercoder);
	}
	if (tableau[3] == 3){ // marqueur bloqué par un code 
		mark.addEventListener("click",cliquercodant );
	}
	if (tableau[3] == 4){ // marqueur possédant le code du l'objet bloqué 
		mark.addEventListener("click", cliquer);
	}


	map.on("zoom", zoom)
	function zoom(){
		console.log(map.getZoom());

		if(tableau[0] == 10){ // Si le jeu est finis 
		    console.log("Le jeu est finito");
		    return //mettre la page de fin ici 
		}
		else{
	
		if (map.getZoom() >=10){
			groupMarker.addTo(map);
		}
		else{
			map.removeLayer(groupMarker);
		}
	}
}
}
