/////////////// MAP//////////////////

var map = L.map('map').setView([48.900002, 2.28333], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

/////////////// CREATION ICONS ///////////////
//nous réalisons un fetch de la fonction  
// var oisif=document.getElementById('check1');
// oisif.addEventListener("input", function(){
var route = L.featureGroup()
let tableau = [];
	var data = {"data":1};// but ici (si on fait plusieurs fetch c'est de demander au fichier PHP de renvoyer que ce qui est demandée et pas le reste)
	fetch('../PHP/json_point_request.php', {
		method: 'post',
		body: JSON.stringify(data)
 	 })
		.then(r => r.json())
		.then(r=> {
			for (var i=0; i<r.length; i++){
                tableau.push(r[i]["longitude"]);
				var lat = r[i]["latitude"];//selection de la colonne lat
				var long =r[i]["longitude"];//selection de la colonne long
				let mark = L.marker([lat, long]);
                route.addLayer(mark);
                
				// if (r[i]["popup"]!=""){//test de popup pour voir que cela marche
				// 	mark.bindPopup(r[i]["popup"]).openPopup();
					// console.log(r[i]["popup"]);//vérifier que cela marche (j'ai mis un popup à un seul endroit si tu utilises le fichier .sql que je t'ai envoyée (tu peux aussi voir tous les colonnes SQL))
				}
				}
			)
		// .then(r => console.log(r));//inutile je pense mais bien pour voir tous les erreurs si jamais le fetch n'est pas bon (bon en général ça vient du PHP)
	// })
	

console.log(route);
route.addTo(map);
console.log(tableau);
// ////////////////////// Fonction qui créer le marqueurs ///////////////////

// function creation_marqueur(){
    
// }

// ////////////////////// Fonction qui déroule les étapes du jeu /////////////////////////////

// map.on("zoom",zoom);

// let compteur = 0;
// let mark = marqueur[compteur]

// function zoom(){
//     console.log(map.getZoom(),compteur);
//     if(compteur == marqueur.length){
//         console.log("Le jeu est finito");
//         return
//     }
//     else{
//     if(map.getZoom() >=6){
//         mark.addTo(group);
//         group.addTo(map);

//         if (malika[compteur][0] == 1){
//             console.log("test1");
//             mark.on("click",cliquer);
//         }
//         else if (malika[compteur][0] == 2){
//             console.log("test2");
//             mark.on("click",cliquercode);
//         }
//         else if (malika[compteur][0] == 3){
//             console.log("test3");
//             mark.on("click",cliquerbloquer);
//         }
//     }
//     else{
//         group.clearLayers();
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
