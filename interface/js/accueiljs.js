let boutonjouer = document.getElementById("boutonjouer");
let joueur = document.getElementById('joueur');

boutonjouer.addEventListener("click", clickjouer);


function clickjouer(){
    location.href = "leaflet.html";
    console.log(joueur.value);
    let id_joueur={"joueur":joueur.value};
    fetch('../BDD/PHP/insc_joueurs.php', {
        method: 'post',
        body: JSON.stringify(id_joueur)
      })
}

