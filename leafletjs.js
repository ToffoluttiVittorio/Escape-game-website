/////////////// MAP//////////////////

var map = L.map('map').setView([48.900002, 2.28333], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



////////////OBJET////////////////////

let liste = [1, 260.3, "toto", "a"];

let message = "Le code est 0987654321";

let test = L.icon({
    iconUrl: 'img/dollar.png',

    iconSize:     [38, 50], // size of the icon
    // iconAnchor:   [48, 2.28], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

let testblock = L.icon({
    iconUrl: 'img/dollar.png',

    iconSize:     [38, 50], // size of the icon
    // iconAnchor:   [48, 2.28], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

let code = L.icon({
    iconUrl: 'img/code.png',

    iconSize:     [40, 50], // size of the icon
    // iconAnchor:   [48, 2.28], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

let block = L.icon({
    iconUrl: 'img/cadena.png',

    iconSize:     [50, 50], // size of the icon
    // iconAnchor:   [48, 2.28], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

map.on("zoom",zoom);
function zoom(){
    if(map.getZoom() = 7){

        let blockl = L.marker([48.896359, 2.386587], {icon: block}).addTo(map).on("click",cliquer2);
        let codel = L.marker([48.856, 2.35], {icon: code}).addTo(map).on("click",cliquer);
        const testl = L.marker([48, 2.28], {icon: test}).addTo(map).on("click",cliquer);
        
        
        function cliquer(){

            //alert(message);
            console.log("bravo");
            
            map.removeLayer(testl);
            //map.removeLayer(codel);
            //map.removeLayer(blockl);
            map.removeEventListener("zoom",zoom);
        }   

        
        function cliquer2(){
            if (liste.indexOf("a") != -1){
                // blockl = testblockl
                map.removeLayer(blockl);
                map.removeEventListener("zoom",zoom);
                let testblockl = L.marker([48.896359, 2.386587], {icon: testblock}).addTo(map);
                console.log("clique2 marche");
            }
            else{
                blockl.bindPopup("Le reuf, trouve des indices.");
        }
        
    }
    }   
    else{console.log("non",map.getZoom())
}
}