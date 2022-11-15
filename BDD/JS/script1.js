let joueur=document.getElementById('joueur');
let nom=document.getElementById('nom');
joueur.addEventListener('click',function(event){
    event.preventDefault();});
nom.addEventListener('input',function(event){
    console.log(event);
    console.log(nom.value);
});