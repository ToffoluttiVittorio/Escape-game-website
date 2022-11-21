let joueur=document.getElementById('joueur');
let nom=document.getElementById('nom');
let tableau=document.getElementById('tableau_joueurs');
joueur.addEventListener('click',function(event){
    event.preventDefault();});
nom.addEventListener('input',function(event){
    console.log(event);
    console.log(nom.value);
});
// tentative de récupération de ce qui a été fait sur PHP avec le code de PHP_tablo
function ajx(e){
    fetch('../PHP/PHP_tablo.php', {
      method: 'post',
      body: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(r => r.json())
    .then(r => {
      tableau.innerText = r[0];
      console.log(r);
    })
  }
  