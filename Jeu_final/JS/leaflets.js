/////////////// MAP//////////////////

var map = L.map('map').setView([48.900002, 2.28333], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


/////////// INITIALISATION /////////

let i = 0;                          //   inititialisation des étapes du jeu
let groupMarker = L.featureGroup(); //   groupe de marqueur en variable global 
let tableau = [];                   //   initialisation du tableau de caractéristique
let inventaire = [];                //   div de l'inventaire html pour lui ajouter des éléments
objet(i);                           //   Lancement du jeu 


/////////////// TIMER //////////////////////

var temps=60;
const timer=document.getElementById("timer");
setInterval(chronometre,5000);
function chronometre(){

	timer.innerText=temps+" min restantes";
	var long=Math.ceil(temps/60*1000);
	temps --;
	let temps_conc= {"val":long};
	console.log(JSON.stringify(temps_conc));

	fetch('../PHP/envoyer_score.php', {
		method: 'post',
		body: JSON.stringify(temps_conc)
	  })
	// .then(r => r.json())
	.then(r => {
		console.log(r)
	})

	if(temps<=0){
		alert("T'es trop mauvais! Fais mieux la prochaine fois!!!");
		location.href = "page_accueil_test.html";
		return;
	}
}


////////////////// JEUX ////////////////

function objet(i){           // fonction fetch qui va chercher ligne par ligne (=étape =objet)
	var data = {"data":1};   // but ici (si on fait plusieurs fetch c'est de demander au fichier PHP de renvoyer que ce qui est demandée et pas le reste)
	fetch('../PHP/json_point_request.php', {
		method: 'post',
		body: JSON.stringify(data)
 	 })
		.then(r => r.json())
		.then(r=> {
			if (i == 10){                            // fin du jeu si on arive au 10e objet 
				alert("Bien joué !");
				location.href = "HTML/Fin_heureuse"; // redirige vers la page de fin 
				return;
			}
			collecte(r[i]);                          // Suite du jeu 
        }
	)
}

function collecte(r){ // On met les toutes les caractéristiques de l'objet dans un tableau 
	tableau = [];
	tableau.push(r["id_objet"]);  	     // tableau[0] : id de l'objet
	tableau.push(r["longitude"]);        // tableau[1] : longitude de l'objet
	tableau.push(r["latitude"]);         // tableau[2] : latitude de l'objet
	tableau.push(r["ID_type"]);          // tableau[3] : type de l'objet (si bloqué ou codé)
	tableau.push(r["URL_image"]);        // tableau[4] : url de l'image de l'objet
	tableau.push(r["Code"]);			 // tableau[5] : code associé si l'objet délivre un code 
	tableau.push(r["grid_position"]);    // tableau[6] : sa position dans l'inventaire si objet récupérable
	tableau.push(r["popup"]);            // tableau[7] : le popup associé à l'objet
	tableau.push(r["popupbis"]);         // tableau[8] : le popup associé à l'objet d'après si bloqué
	tableau.push(r["objet_inventaire"]); // tableau[9] : url de l'image associé à l'objet récupérable
	jeux(tableau);                       // Suite du jeu 
}

function jeux(tableau){   // Associe les différentes fonctions "clique" aux objets

	let url = tableau[4]; // url de l'image de l'objet 
	let icone = L.icon({  // création de l'icone 
		iconUrl: url,
		iconSize: [50, 50]
	});
	let mark = L.marker([tableau[1], tableau[2]], {icon: icone}); // création du marqueur associé
	mark.addTo(groupMarker);                                      // on l'ajoute dans le groupMarker

	function input(tableau){  // Fonction qui met l'objet dans la div inventaire, si objet récupérable
		if (tableau[9] != 0){
			let inv = document.getElementById("inventaire");
			let obj = document.createElement('img');
			obj.type = 'image';
			obj.src = tableau[9];
			let grid = tableau[6];
			obj.style = "grid-row: "+grid+"; width: 15vw; height: 15vh;margin-auto;"
			inventaire.push("arbre");
			inv.appendChild(obj);
		}
	}

	function cliquer(){  // fonction clique qui fait passer à l'étape suivante
		alert(tableau[7]);
		groupMarker.removeEventListener("click", cliquer);
		groupMarker.clearLayers();
		map.removeEventListener("zoom", zoom);
		i = i + 1;
		objet(i);
	}

	function cliquerbloquer(){   // Fonction clique pour objet bloqué par un autre objet
		alert(tableau[8]);
		groupMarker.removeEventListener("click", cliquerbloquer);
		map.removeEventListener("zoom", zoom);
		i = i + 1;
		objet(i);
	}

	function cliquerbloquant(){  // Fonction clique pour objet bloquant un objet bloqué 
		input(tableau)
		groupMarker.removeLayer(mark);
		alert(tableau[8]);
		groupMarker.addEventListener("click", cliquer)
	}

	function cliquercoder(){	// Fonction clique pour un objet bloqué par un code 
		groupMarker.removeEventListener("click", cliquercoder);
		alert(tableau[7]);
		map.removeEventListener("zoom", zoom);
		i = i + 1;
		objet(i);
	}

	function cliquercodant(){  // Fonction clique pour un objet possédant un code 
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

								// Liste de if pour associer les fonctions "clique" aux objet 
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

	map.on("zoom", zoom) // Fonction zoom associé à la map pour faire apparaître ou non les marqueurs
	function zoom(){
		if (map.getZoom() >=6){ ///le mettre à 15 pour le jeu 
			groupMarker.addTo(map);
		}
		else{
			map.removeLayer(groupMarker);
		}
	}
}

// FIN 