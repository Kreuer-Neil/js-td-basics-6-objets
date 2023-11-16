/*****************************
 * 027 - OBJETS - CODING CHALLENGE 4
 */

/*
Souvenons-nous du premier challenge de code où Mark et John comparaient leurs BMIs.
Implémentons à présent la même fonctionnalité avec des objets, des propriétés et des méthodes.
1. Pour chacun, crée un objet avec
    - les propriétés pour leur nom complet, leur poids et leur taille
    - une méthode qui calcule le BMI
        (enregistre le BMI dans l'objet et, en plus, le retourne à partir de la méthode)
2. Affiche dans la console qui a le BMI le plus élevé avec le nom complet et le BMI.
    N'oublie pas qu'il pourrait y avoir un ex æquo.

Rappel: BMI = poids / taille^2 = poids / (taille * taille). (poids en kg and taille en mètres).

BONNE CHANCE 😀
*/



function initPersonne(nom,prenom,taille,poids) {

    return {
        nom : nom,
        prenom : prenom,
        taille : taille,
        poids : poids,

        calculImc() {
            return this.poids / Math.pow(this.taille,2);
        }
    }
}

const p1 = initPersonne("Jonnie", "Jean", 1.70,49);
const p2 = initPersonne("Z", "MA", 1.82,86);

const people = [];
people.push(p1,p2);

for (const person of people) {
    console.log(person.calculImc());
}

for (let i = 0; i < people.length; i++) {
    console.log(people[i].calculImc());
}

let j = 0;
while (j<people.length) {
    console.log(people[j].calculImc());
    j++;
}


people.forEach(function (p) {console.log(this);});

people.forEach(p => console.log(p));
