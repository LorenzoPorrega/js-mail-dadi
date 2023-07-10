/*Consegna:
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Usiamo un input in html per inserire la mail da cercare.
*/

const input = document.getElementById("InputEmail");
const permittedEmails = ["fake.email@gmail.com", "sus.email@hotmail.it", "permitted.email@yahoo.it"];
const buttonClick = document.getElementById("submit-button");
const form = document.getElementById("email-form")
const container = document.querySelector(".container")

buttonClick.addEventListener('click', function () {
  
  for (i = 0; i < permittedEmails.length; i++){
    const email = input.value;

    if (email !== permittedEmails[i]) {
      console.log("You can't use that email to register");
      form.classList.add("d-none");
      column.innerHTML = `<h1 class="b-5 fw-bold fs-1 text-center">L'email è sbagliata :c</h1>`;
    }
    else{
      console.log("That's good");
      form.classList.add("d-none");
      container.innerHTML = `<div class="row justify-content-center mb-4"><div class="col-6"><h1 class="b-5 fw-bold fs-1 text-center">L'email <span class="fst-italic">${permittedEmails[i]}</span> è giusta!</h1></div></div><div class="row justify-content-center"><div class="col-6 d-flex justify-content-center"><a class="btn btn-primary" href="./dadi.html" role="button">Rolla i dadi!</a></div></div>`
      i = permittedEmails.lenght
    }
  }
});

/*Unused email filer found online
const check_email = '[a-zA-Z0-9]{0,}([.]?[a-zA-Z0-9]{1,})[@](.com|.it)';
*/