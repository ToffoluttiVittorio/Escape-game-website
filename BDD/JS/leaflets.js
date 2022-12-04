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

// timer
var temps=60;
const timer=document.getElementById("timer");
setInterval(chronometre,60000);
function chronometre(){
	temps --;
	timer.innerText=temps+" min restantes";
	let temps_conc=new FormData();
	temps_conc.append('temps',temps);
	fetch('page.php', {
		method: 'post',
		body: temps_conc
	  })
	if(temps<=0){
		alert("T'es trop mauvais! Fais mieux la prochaine fois!!!");
		location.href = "page_accueil_test.html";
		return;
	}
}


function objet(i){
	var data = {"data":1};// but ici (si on fait plusieurs fetch c'est de demander au fichier PHP de renvoyer que ce qui est demandée et pas le reste)
	fetch('../PHP/json_point_request.php', {
		method: 'post',
		body: JSON.stringify(data)
 	 })
		.then(r => r.json())
		.then(r=> {

			console.log(i, "compteur");
			if (i == 10){

				alert("Bien joué !");
				location.href = "page_accueil_test.html";
				return;
			}
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
	let icone = L.icon({
		iconUrl: url,
		iconSize: [50, 50]
	});


	let mark = L.marker([tableau[1], tableau[2]], {icon: icone}); 
	mark.addTo(groupMarker);

	function input(tableau){
		if (tableau[9] != 0){
			console.count();
			let inv = document.getElementById("inventaire");
			let obj = document.createElement('img');
			obj.type = 'image';
			obj.src = tableau[9];
			obj.style = "grid-row: 2/3; width: 11vw; height: 17vh;"
			inventaire.push("arbre");
			inv.appendChild(obj);
		}
	}

	function cliquer(){
		input(tableau);
		alert(tableau[7]);
		groupMarker.removeEventListener("click", cliquer);
		groupMarker.clearLayers();
		map.removeEventListener("zoom", zoom);
		i = i + 1;
		objet(i);
	}

	function cliquerbloquer(){
		alert(tableau[8]);
		groupMarker.removeEventListener("click", cliquerbloquer);
		map.removeEventListener("zoom", zoom);
		i = i + 1;
		objet(i);
	}

	function cliquerbloquant(){
		input(tableau);
		groupMarker.removeLayer(mark);
		alert(tableau[8]);
		groupMarker.addEventListener("click", cliquer)
	}

	function cliquercoder(){
		groupMarker.removeEventListener("click", cliquercoder);
		alert(tableau[7]);
		map.removeEventListener("zoom", zoom);
		i = i + 1;
		objet(i);
	}

	function cliquercodant(){
		groupMarker.removeLayer(mark);
		let popup = document.createElement('div');
		alert(tableau[8]);

		groupMarker.bindPopup(popup);

		popup.innerHTML = '<div> <p>'+tableau[10]+'</p> <form><p><input type="text" name="code" id="code" placeholder="Trouve le code ..."></p>'
		+ '<p><input type="submit" value="vérifier" id="ok"></p> </form> </div>';
		popup.addEventListener('submit', function(event){validform(event); })

		function validform(e){
			e.preventDefault();
			var code = document.getElementById('code').value;
			if (code == 2525){
				groupMarker.unbindPopup(popup);
				groupMarker.removeEventListener('submit', function(event){validform(event); });
				groupMarker.clearLayers();
				cliquer()
			}
		}
	}

	if (tableau[3] == 0){ 
		groupMarker.addEventListener("click", cliquerbloquer);
	}
	if (tableau[3] == 1){ 
		mark.addEventListener("click", cliquerbloquant);
	}
	if (tableau[3] == 2){ 
		groupMarker.addEventListener("click", cliquercoder);
	}
	if (tableau[3] == 3){ 
		mark.addEventListener("click",cliquercodant );
	}
	if (tableau[3] == 4){ 
		mark.addEventListener("click", cliquer);
	}

	map.on("zoom", zoom)
	function zoom(){

		if (map.getZoom() >=6){
			groupMarker.addTo(map);
		}
		else{
			map.removeLayer(groupMarker);
		}
	}
}


