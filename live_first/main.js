//chiediamo all'utente la sua età e comunichiamogli l'anno di nascita
const currentYears = 2021;


//richiesta
const userAger = prompt("Quanti anni hai?");


//calcolo eta 
const yob = currentYears - userAger;

// messaggio con età corretta

/* scrittura in console */
console.log("Sei nato nel " + yob);

/* scrittura a schermo */
document.getElementById("text").innerHTML = "Sei nato nel " + yob;