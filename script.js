// Ciao ragazzi,
//     esercizio di oggi: Biglietto del treno
// cartella / repo js - biglietto - treno
// Il programma dovrà chiedere all'utente il numero di chilometri (numero interno) che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km(0.21 € al km)
//     - va applicato uno sconto del 20 % per i minorenni
//         - va applicato uno sconto del 40 % per gli over 65.
//             - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// Bonus:
// Controllare che gli input di utenti siano numeri
// Buon lavoro! 

let kmVal = (0.21);
console.log(kmVal);
const age = prompt("Gentile cliente, benvenuto su SedaTrain: per acquistare il titolo di viaggio è innanzitutto necessario conoscere la tua età. Quanti anni hai?");
const trip = prompt('Perfetto! Ora parliamo del tuo viaggio: quanti chilometri dovrai percorrere?');
const numAge = parseInt(age);
const tripInteger = parseInt(trip);

if (isNaN(numAge) || isNaN(tripInteger)) {
    message = ('Errore! Inserisci un valore numerico per favore! Ricarica la pagina!');
} else {
    console.log(`L'età è ${numAge} e i chilometri del viaggio sono ${tripInteger}`);
}

let tripPrice = kmVal * tripInteger;
let discount = 0;

if (numAge <= 18) {
    discount = tripPrice * 0.2; 
    let finalPrice = (tripPrice - discount).toFixed(2);
    message = `Gentile cliente, il costo del biglietto è ${finalPrice} euro/cent`;
} else if (numAge >= 65) {
    discount = tripPrice * 0.4; 
    let finalPrice = (tripPrice - discount).toFixed(2);
    message = `Gentile cliente, il costo del biglietto è ${finalPrice} euro/cent`;
} else {
    let finalPrice = (tripPrice - discount).toFixed(2);
    message = `Gentile cliente, il costo del biglietto è ${finalPrice} euro/cent`;
}
console.log(message);