var code_tape=document.getElementById("nom");
var champ=document.getElementById("champ");
var verify=document.getElementById("OK");
var code;
code_tape.addEventListener("submit",function(code_tap){
    code_tap.preventDefault();
    console.log(champ.value);
    fetch('../PHP/PHP_code.php', {
		method: 'post',
		body: JSON.stringify(champ.value)
 	 })
		.then(r => r.json())
		.then(r=> {
            code=(r[0]);
            if (champ.value==r[0]["code_objet"]){
                verify.innerText="OK";
                }
			})
		.then(r => console.log(r));
})
champ.addEventListener("input",function(){
    console.log(champ.value);
})
console.log(code);