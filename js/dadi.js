/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
BONUS: far inserire 3 numeri all’utente, generare per il pc 3 numeri, e dopo aver 
calcolato la somma dei numeri dell’utente e dei numeri del pc, capire chi ha vinto
in base alla somma maggiore.
*/

/*
I establish various variable linking to DOM elements to then extract values,
monitor actions on the website and print in HTML action and math-related results.
*/
let buttonClick = document.getElementById("submit-button");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
const divPrint = document.querySelector(".div-print");
let divResult = document.querySelector(".result")

/*
I add and EventListener to run a function after the user has input 3 numbers,
from 1 to 6 mimicking dice-throwing, and after they clicked the button.
*/
buttonClick.addEventListener('click', function (){
    //I establish an array to populate with user given dice throw values
    let userArray = [];

    //I grab the three dice throws values and print them in console to check
    const userRoll1 = parseInt(option1.value);
    const userRoll2 = parseInt(option2.value);
    const userRoll3 = parseInt(option3.value);
    console.log(userRoll1);
    console.log(userRoll2);
    console.log(userRoll3);

    //I push the user given values in a single array and print the array to check
    userArray.push(userRoll1);
    userArray.push(userRoll2);
    userArray.push(userRoll3);    
    console.log(userArray);
    
    //I sum the 3 userArray number items into one integer and print it in console to check
    let userSum = 0;
    for (i = 0; i < userArray.length; i++){
        userSum += userArray[i];
    }
    console.log(userSum);

    /*
    I do the same four steps illustrated about for the program dice-throws however
    this time the 3 dice throw value are randomly generated with a Math.Random method
    resulting in 3 array items as integers.
    */
    let computerArray = [];

    for (i = 0; i < 3; i++){
        let computerRoll = (Math.floor(Math.random () * 6) + 1);
        computerArray.push(computerRoll);
    }
    console.log(computerArray);

    let computerSum = 0;

    for (i = 0; i < computerArray.length; i++){
        computerSum += computerArray[i];
    }
    console.log(computerSum);

    //classList.add NOT WORKING
    //divPrint.classList.add = ("d-none");

    /*
    Here I print in the HTML, deleting all of the previous tags and text, the user
    given values and their sum, the program generated values and their sum, and I print
    a success or fail message depending if respectively the user has a greater sum than
    the program generated sum or viceversa.
    */
    divPrint.innerHTML = `<div class="mb-4 fs-4">
                            <span>Hai tirato: <span class="fw-bold">${userRoll1}</span>, <span class="fw-bold">${userRoll2}</span> e <span class="fw-bold">${userRoll3}</span>.</span>
                            <span class="d-block">Hai totalizzato un punteggio dei dadi di <span class="fw-bold">${userSum}</span>.</span>
                        </div>
                        <div class="mb-4 fs-4">
                            <span>Il programma ha tirato: <span class="fw-bold">${computerArray[0]}</span>, <span class="fw-bold">${computerArray[1]}</span> e <span class="fw-bold">${computerArray[2]}</span>.</span>
                            <span class="d-block">Il programma ha totalizzato un punteggio di <span class="fw-bold">${computerSum}</span>
                        </div>`
    
    if(computerSum > userSum){
        divResult.innerHTML = `<div class="mb-4 mt-4">
                                <h2 class="fw-bold">Spiacenti, ha vinto il programma con una somma dei dadi maggiore!</h2>
                            </div>`
    }
    else{
        divResult.innerHTML = `<div class="mb-4 mt-4">
                                <h2 class="fw-bold">Congratulazioni, hai vinto con una somma dei dadi maggiore al programma!</h2>
                            </div>`
    }
});
