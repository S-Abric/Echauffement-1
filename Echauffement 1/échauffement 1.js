var nom = prompt("Comment t'appelles-tu?");

if ((nom.length > 1) && (nom.length < 10)){
 alert("Bonjour " + nom + "!")
}
else{
  alert("Recommence!")
}