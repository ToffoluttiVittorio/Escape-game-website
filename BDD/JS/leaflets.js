/////////////// MAP//////////////////

var map = L.map('map').setView([48.900002, 2.28333], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


/////////// Initialisation /////////

let i = 0;
let groupMarker = L.featureGroup();
objet(i);
let tableau = []

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
	tableau.push(r["objet_bloquee"]);
	jeux(tableau,groupMarker);
}


function jeux(tableau, groupMarker){


	let mark = L.marker([tableau[1], tableau[2]]); ///////// faire icon avec url, opoup et tt ...
	mark.addTo(groupMarker);
	groupMarker.addEventListener("click", cliquer);

	function cliquer(){
		console.log("clique")
		groupMarker.removeEventListener("click", cliquer);
		groupMarker.clearLayers();
		map.removeEventListener("zoom", zoom)
		i = i + 1;
		objet(i);
		// document.getElementById("image").src=malika[compteur][1];

	}

	map.on("zoom", zoom)

	function zoom(){

		console.log(map.getZoom());
		console.log(tableau);
		// if(tableau["id_objet"] == 2){ // Si le jeu est finis 
		//     console.log("Le jeu est finito");
		//     return
		// }
		// else{
	
		if (map.getZoom() >=6){
			groupMarker.addLayer(mark);
			groupMarker.addTo(map);
			groupMarker.removeEventListener("click", cliquer);

	
			if (tableau[5] == 0){ // objet récupérable ou non 
				console.log("test1");

				groupMarker.addEventListener("click", cliquer);


				
			}
			else if (tableau[5] == 1){ // objet bloqué par un code
				console.log("test2");
				groupMarker.on("click",cliquercode);
			}
			else if (tableau[5] == 2){ // objet bloqué par un autre objet 
				console.log("test3");
				groupMarker.on("click",cliquerbloquer);
	
			}
		}
		else{
			groupMarker.clearLayers();
		}
	}
}




// function cliquercode(){
// 	console.log("cliquercode");

//     // document.getElementById("image").src=malika[compteur][1];
//     // group.clearLayers();
//     // mark.removeEventListener("click",cliquercode);
//     // compteur ++;
// }

// function cliquerbloquer(){
// 	console.log("cliquerbloquer");
// 	let tableaubis = [];
// 	tableaubis.push(r["id_objet"]);
// 	tableaubis.push(r["longitude"]);
// 	tableaubis.push(r["latitude"]);
// 	tableaubis.push(r["ID_type"]);
// 	tableaubis.push(r["URL_image"]);
// 	tableaubis.push(r["Code"]);
// 	tableaubis.push(r["objet_bloquee"]);
// 	objet(tableau[6]);
// }

// function cliquer2(){
// 	console.log("je rentre dans cliquer 2")
// 	groupMarker.removeLayer(markbis);
// 	mark.on("click",cliquer);
// }


