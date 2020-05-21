// Un prompt s'affiche avec la question suivante
let n = prompt("De quel nombre veux-tu calculer la factorielle ?");

// Utilisateur rentre un nombre (par ex 4)
function factorielle(n) {
	if (n == 0) return 1;
	else return n*factorielle(n-1);
}

// Dans la console le résultat suivant est affiché
console.log(factorielle(n));

