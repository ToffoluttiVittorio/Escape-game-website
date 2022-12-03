// /////////////// MAP//////////////////

// var map = L.map('map').setView([48.900002, 2.28333], 5);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);



// ///////////////////// Créations des variables qui stockeront les marqueurs et leurs caractéristiques associées ///////////////


// let groupMarker = L.featureGroup()
// let tableau = new Array();


// /////////////////// Fonction qui créer l'objet en mettant toutes ses caractéristiques dans un tableau en utilisant fetch ////////////////


// function objet(i){
// 	var data = {"data":1};// but ici (si on fait plusieurs fetch c'est de demander au fichier PHP de renvoyer que ce qui est demandée et pas le reste)
// 	fetch('../PHP/json_point_request.php', {
// 		method: 'post',
// 		body: JSON.stringify(data)
//  	 })
// 		.then(r => r.json())
// 		.then(r=> {

// 			// for (var i=0; i<r.length; i++){
// 				var long =r[i]["longitude"];//selection de la colonne long
// 				var lat = r[i]["latitude"];//selection de la colonne lat
// 				let mark = L.marker([long, lat]);
//                 groupMarker.addLayer(mark);

// 				tableau.push(r[i]["id_objet"]);
// 				tableau.push(r[i]["longitude"]);
// 				tableau.push(r[i]["latitude"]);
// 				tableau.push(r[i]["ID_type"]);
// 				tableau.push(r[i]["URL_image"]);
// 				tableau.push(r[i]["Code"]);
// 				tableau.push(r[i]["objet_bloquee"]);

                
// 				// if (r[i]["popup"]!=""){//test de popup pour voir que cela marche
// 				// 	mark.bindPopup(r[i]["popup"]).openPopup();
// 					// console.log(r[i]["popup"]);//vérifier que cela marche (j'ai mis un popup à un seul endroit si tu utilises le fichier .sql que je t'ai envoyée (tu peux aussi voir tous les colonnes SQL))
// 				}
				
// 			)
// }

// ///////////////////////////////// Initialisation du jeu ///////////////////////////////

// objet(0); // On initialise le jeu en créant le 1er objet (=marqueur)

// console.log(tableau);


// let tab = [3,4];
// tab.push(5);

// //console.log(tab);
// //console.log(tab[1]);

// // ////////////////////// Fonction qui déroule les étapes du jeu /////////////////////////////

// map.on("zoom",zoom);

// function zoom(){
//     console.log(map.getZoom());
//     if(tableau["id_objet"] == 2){ // Si le jeu est finis 
//         console.log("Le jeu est finito");
//         return
//     }
//     else{
//     if(map.getZoom() >=6){
//         groupMarker.addTo(map);

//         // if (malika[compteur][0] == 1){
//         //     console.log("test1");
//         //     mark.on("click",cliquer);
//         // }
//         // else if (malika[compteur][0] == 2){
//         //     console.log("test2");
//         //     mark.on("click",cliquercode);
//         // }
//         // else if (malika[compteur][0] == 3){
//         //     console.log("test3");
//         //     mark.on("click",cliquerbloquer);
//         // }
//     }
//     else{
//         groupMarker.clearLayers();
//     }
// }
// }

// function cliquer(){
//     document.getElementById("image").src=malika[compteur][1];
//     group.clearLayers();
//     mark.removeEventListener("click",cliquer);
//     compteur ++;
//     mark = L.marker([44, 2.28], {icon: test2});
// }

// function cliquercode(){
//     document.getElementById("image").src=malika[compteur][1];
//     group.clearLayers();
//     mark.removeEventListener("click",cliquercode);
//     compteur ++;
// }

// function cliquerbloquer(){

// }


//////////////// MORT ////////////////////////

/////////////// MAP//////////////////

// var map = L.map('map').setView([48.900002, 2.28333], 5);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// ////////////////// ZOOM ////////////////////

// map.on("zoom",zoom);

// let jeux = 0;
// let groupMarker = L.featureGroup();
// let tableau = [];


// function zoom(){
// 	var data = {"data":1};// but ici (si on fait plusieurs fetch c'est de demander au fichier PHP de renvoyer que ce qui est demandée et pas le reste)
// 	fetch('../PHP/json_point_request.php', {
// 		method: 'post',
// 		body: JSON.stringify(data)
//  	 })
// 		.then(r => r.json())
// 		.then(r=> {

// 			// for (var i=0; i<r.length; i++){
// 				var long =r[0]["longitude"];//selection de la colonne long
// 				var lat = r[0]["latitude"];//selection de la colonne lat
// 				let mark = L.marker([long, lat]);
//                 groupMarker.addLayer(mark);

// 				tableau.push(r[0]["id_objet"]);
// 				tableau.push(r[0]["longitude"]);
// 				tableau.push(r[0]["latitude"]);
// 				tableau.push(r[0]["ID_type"]);
// 				tableau.push(r[0]["URL_image"]);
// 				tableau.push(r[0]["Code"]);
// 				tableau.push(r[0]["objet_bloquee"]);

// 				jouer(tableau,groupMarker)

                
// 				// if (r[i]["popup"]!=""){//test de popup pour voir que cela marche
// 				// 	mark.bindPopup(r[i]["popup"]).openPopup();
// 					// console.log(r[i]["popup"]);//vérifier que cela marche (j'ai mis un popup à un seul endroit si tu utilises le fichier .sql que je t'ai envoyée (tu peux aussi voir tous les colonnes SQL))
// 				}
				
// 			)
// }

// function jouer(tableau,groupMarker){
//     console.log(map.getZoom());
//     if(tableau[0] == 2){ // Si le jeu est finis 
//         console.log("Le jeu est finito");
//         return
//     }
//     else{
//     if(map.getZoom() >=6){
//         groupMarker.addTo(map);

//         if (tableau[4] == 0){
//             console.log("test1");
//             groupMarker.on("click",cliquer);
//         }
//         else if (tableau[4] == 1){
//             console.log("test2");
//             groupMarker.on("click",cliquercode);
//         }
//         else if (tableau[4] == 2){
//             console.log("test3");
//             groupMarker.on("click",cliquerbloquer);
//         }
//     }
//     else{
//         groupMarker.clearLayers();
//     }
// 	}
// }

// function cliquer(){
//     document.getElementById("image").src=malika[compteur][1];
//     group.clearLayers();
//     mark.removeEventListener("click",cliquer);
//     compteur ++;
//     mark = L.marker([44, 2.28], {icon: test2});
// }

// function cliquercode(){
//     document.getElementById("image").src=malika[compteur][1];
//     group.clearLayers();
//     mark.removeEventListener("click",cliquercode);
//     compteur ++;
// }

// function cliquerbloquer(){

// }



////////////////////// MORT 2.0 /////////////////

/////////////// MAP//////////////////

// let map = L.map('map').setView([48.900002, 2.28333], 5);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// ////////////////////////// JEUX /////////////////////////////////


// let groupMarker = L.featureGroup();
// let tableau = [];


// function objet(){
// 	var data = {"data":1};// but ici (si on fait plusieurs fetch c'est de demander au fichier PHP de renvoyer que ce qui est demandée et pas le reste)
// 	fetch('../PHP/json_point_request.php', {
// 		method: 'post',
// 		body: JSON.stringify(data)
//  	 })
// 		.then(r => r.json())
// 		.then(r=> {

// 			// // for (var i=0; i<r.length; i++){
// 			// 	let tableau = [];
// 				console.log(1);
				
// 				var long =r[0]["longitude"];//selection de la colonne long
// 				var lat = r[0]["latitude"];//selection de la colonne lat
// 				let mark = L.marker([long, lat]);
//                 groupMarker.addLayer(mark);
// 				groupMarker.addTo(map);
// 				tableau.push(r[0]["id_objet"]);
// 				tableau.push(r[0]["longitude"]);
// 				tableau.push(r[0]["latitude"]);
// 				tableau.push(r[0]["ID_type"]);
// 				tableau.push(r[0]["URL_image"]);
// 				tableau.push(r[0]["Code"]);
// 				tableau.push(r[0]["objet_bloquee"]);

// 				map.on("zoom",zoom);

// 				zoom(tableau);

// 				function zoom(tableau){	
// 					console.log(map.getZoom());
// 					console.log(tableau);
// 					groupMarker.addTo(map);
					
// 					if(tableau[0] == 2){ // Si le jeu est finis 
// 						console.log("Le jeu est finito");
// 						return
// 					}
// 					else{
// 					if(map.getZoom() >=6){

// 						// groupMarker.addTo(map);
				
// 						if (tableau[4] == 0){
// 							console.log("test1");
// 							groupMarker.on("click",cliquer);
// 						}
// 						else if (tableau[4] == 1){
// 							console.log("test2");
// 							groupMarker.on("click",cliquercode);
// 						}
// 						else if (tableau[4] == 2){
// 							console.log("test3");
// 							groupMarker.on("click",cliquerbloquer);
// 						}
// 					}
// 					else{
// 						groupMarker.clearLayers();
// 					}
// 					}
// 				}

                
// 				}
				
// 			)
// }






// // function cliquer(){
// //     document.getElementById("image").src=malika[compteur][1];
// //     group.clearLayers();
// //     mark.removeEventListener("click",cliquer);
// //     compteur ++;
// //     mark = L.marker([44, 2.28], {icon: test2});
// // }

// // function cliquercode(){
// //     document.getElementById("image").src=malika[compteur][1];
// //     group.clearLayers();
// //     mark.removeEventListener("click",cliquercode);
// //     compteur ++;
// // }

// // function cliquerbloquer(){

// // }

// objet();



////////////////////////////////// MORT 3 ///////////////////////////////

/////////////// MAP//////////////////

var map = L.map('map').setView([48.900002, 2.28333], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);




/////////////////// Fonction qui créer l'objet en mettant toutes ses caractéristiques dans un tableau en utilisant fetch ////////////////


let tableau = [];
let groupMarker = L.featureGroup();

function objet(i){
	var data = {"data":1};// but ici (si on fait plusieurs fetch c'est de demander au fichier PHP de renvoyer que ce qui est demandée et pas le reste)
	fetch('../PHP/json_point_request.php', {
		method: 'post',
		body: JSON.stringify(data)
 	 })
		.then(r => r.json())
		.then(r=> {

			// // for (var i=0; i<r.length; i++){
			// 	var long =r[i]["longitude"];//selection de la colonne long
			// 	var lat = r[i]["latitude"];//selection de la colonne lat
			// 	let mark = L.marker([long, lat]);
            //     groupMarker.addLayer(mark);

			affichecoord(r[0]);
			// console.log(r[i]);

                
				// if (r[i]["popup"]!=""){//test de popup pour voir que cela marche
				// 	mark.bindPopup(r[i]["popup"]).openPopup();
					// console.log(r[i]["popup"]);//vérifier que cela marche (j'ai mis un popup à un seul endroit si tu utilises le fichier .sql que je t'ai envoyée (tu peux aussi voir tous les colonnes SQL))
				}
				
			)
}


objet(0); // On initialise le jeu en créant le 1er objet (=marqueur)


function affichecoord(r){
	tableau.push(r["id_objet"]);
	tableau.push(r["longitude"]);
	tableau.push(r["latitude"]);
	tableau.push(r["ID_type"]);
	tableau.push(r["URL_image"]);
	tableau.push(r["Code"]);
	tableau.push(r["objet_bloquee"]);

	amer(tableau)
}

function amer(tableau){
	console.log(tableau);
	let mark = L.marker([tableau[1], tableau[2]]);

	map.on("zoom",zoom)

	function zoom(){
		groupMarker.addLayer(mark);
		console.log(map.getZoom());
	
		// if(tableau["id_objet"] == 2){ // Si le jeu est finis 
		//     console.log("Le jeu est finito");
		//     return
		// }
		// else{
		if(map.getZoom() >=6){
			groupMarker.addTo(map);
	
			if (tableau[3] == 0){
			    console.log("test1");
			    mark.on("click",cliquer);
			}
			else if (tableau[3] == 1){
			    console.log("test2");
			    mark.on("click",cliquercode);
			}
			else if (tableau[3] == 2){
			    console.log("test3");
			    mark.on("click",cliquerbloquer);
			}
		}
		else{
		    groupMarker.clearLayers();
		}
	}
}

function cliquer(){
	console.log("clique");
	groupMarker.clearLayers();
    // document.getElementById("image").src=malika[compteur][1];
    // group.clearLayers();
    // mark.removeEventListener("click",cliquer);
    // compteur ++;
    // mark = L.marker([44, 2.28], {icon: test2});
}

function cliquercode(){
	console.log("cliquercode");
    // document.getElementById("image").src=malika[compteur][1];
    // group.clearLayers();
    // mark.removeEventListener("click",cliquercode);
    // compteur ++;
}

function cliquerbloquer(){
	console.log("cliquerbloquer")
}