let boutonjouer = document.getElementById("boutonjouer");
let joueur = document.getElementById('joueur');

boutonjouer.addEventListener("click", clickjouer);


function clickjouer(e){
    console.log(joueur.value);
}

