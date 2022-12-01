/////////////// MAP//////////////////

var map = L.map('map').setView([48.900002, 2.28333], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

/////////////// CREATION ICONS ///////////////

let test1 = L.icon({
    iconUrl: '../img/dollar.png',
    iconSize: [38, 50]
});

let marker1 = L.marker([48, 2.28], {icon: test1});

let test2 = L.icon({
    iconUrl: '../img/code.png',
    iconSize: [38, 50]
});

let marker2 = L.marker([44, 2.28], {icon: test2});

// let test3 = L.icon({
//     iconUrl: 'img/dollar.png',
//     iconSize: [38, 50],
// });

// let blk1 = L.icon({
//     iconUrl: 'img/code.png',
//     iconSize: [38, 50],
// });

// let blk2 = L.icon({
//     iconUrl: 'img/cadena.png',
//     iconSize: [38, 50],
// });


// let groupMarker = L.FeatureGroup();
// let icons = [mark1, mark2];
// let blocke = ["", blk1, blk2];
// let source = ["img/arsenal.jpg","img/pb.jpg","img/arriere_flamme.jpg"];
// let imgcompteur = ['', 'img/code.png', 'img/cadena.png'];
// let compteur = 0;
// let compteurblock = 0;


let marqueur = [marker1, marker2];
let group = L.featureGroup()
let malika = [[1, '../img/dollar.png'],[2, '../img/.png']];


////////////////////// Fonction qui créer le marqueurs ///////////////////

function creation_marqueur(){
    
}

////////////////////// Fonction qui déroule les étapes du jeu /////////////////////////////

map.on("zoom",zoom);

let compteur = 0;
let mark = marqueur[compteur]

function zoom(){
    console.log(map.getZoom(),compteur);
    if(compteur == marqueur.length){
        console.log("Le jeu est finito");
        return
    }
    else{
    if(map.getZoom() >=6){
        mark.addTo(group);
        group.addTo(map);

        if (malika[compteur][0] == 1){
            console.log("test1");
            mark.on("click",cliquer);
        }
        else if (malika[compteur][0] == 2){
            console.log("test2");
            mark.on("click",cliquercode);
        }
        else if (malika[compteur][0] == 3){
            console.log("test3");
            mark.on("click",cliquerbloquer);
        }
    }
    else{
        group.clearLayers();
    }
}
}

function cliquer(){
    document.getElementById("image").src=malika[compteur][1];
    group.clearLayers();
    mark.removeEventListener("click",cliquer);
    compteur ++;
    mark = L.marker([44, 2.28], {icon: test2});
}

function cliquercode(){
    document.getElementById("image").src=malika[compteur][1];
    group.clearLayers();
    mark.removeEventListener("click",cliquercode);
    compteur ++;
}

function cliquerbloquer(){

}