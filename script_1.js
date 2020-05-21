//Afficher un message dans la console
let a = "Bonjour", b = "Monde";
console.log(a + ", " + b + "!");

//Prénon avec un prompt, boite de dialogue
while (true) {
    name = prompt('Salut, quel est donc ton prénom :');

    if (name) {
      b = name; //on rajoute la lettre saisie à la suite du mot
        console.log(b);
        break;
    } else { 
    	b = b;// on rentre dans ce else si letter est vide (l'utilisateur ne saisit rien)
        break; // On quitte la boucle
    }
}
console.log(a + ", " + b + "!");