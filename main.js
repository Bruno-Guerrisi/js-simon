/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

/* generazione array con 5 numeri diversi */
const arrayRandNuber = [];

do {

    let number = randomNumber(0, 100);

    if (arrayRandNuber.includes(number)) {

    } else {
        arrayRandNuber.push(number);
    }
    
} while (arrayRandNuber.length < 5);


/* inserimento dei 5 numeri nell'html */
const stampNumber = document.querySelector('.number');

stampNumber.innerHTML += `Hai 30 secondi per memorizzare i numeri: <br>${arrayRandNuber}`;


/* inserimento e verifica dei numeri */
let verifyNumber = 0;

const arrayVerifyNumber = [];
const arrayErrorNumber = [];

/* variabili per l'inseriento dei 5 numeri nell'html */
const stampCurrectNumber = document.querySelector('.currect-number');
const stampErrorNumber = document.querySelector('.error-number');

let timer = 30000;

setTimeout(() => {

    stampNumber.innerHTML = 'Ricorderai tutti i numeri?';

}, timer);

setTimeout(() => {

    arrayRandNuber.forEach((element, i) => {

        do {

            verifyNumber=parseInt(prompt(`Inserire il ${i + 1} numero `))

        } while (isNaN(verifyNumber));

        if (arrayRandNuber.includes(verifyNumber)) {

            arrayVerifyNumber.push(verifyNumber);
        } 
        else {

            arrayErrorNumber.push(verifyNumber);
        }
    });

    if (arrayErrorNumber != 0) {
        /* inserimento dei 5 numeri nell'html */
        stampCurrectNumber.innerHTML = `Hai indovinato: ${arrayVerifyNumber}`;
        stampErrorNumber.innerHTML = `Hai sbagliato: ${arrayErrorNumber}`;
    }
    else{

        stampCurrectNumber.innerHTML = `Hai vinto indovinando i numeri: ${arrayVerifyNumber}`;
    }

}, timer + 1000);


/* funzioni */
function randomNumber(min, max) {
    return number = Math.floor(Math.random() * (max - min + 1))+min;
}