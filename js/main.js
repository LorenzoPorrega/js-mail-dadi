const input = document.getElementById("InputEmail");
const permittedEmails = ["fake.email@gmail.com", "sus.email@hotmail.it"];
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
      container.innerHTML = `<div class="row justify-content-center mb-4"><div class="col-6"><h1 class="b-5 fw-bold fs-1 text-center">L'email ${permittedEmails[i]} è giusta!</h1></div></div><div class="row justify-content-center"><div class="col-6 d-flex justify-content-center"><a class="btn btn-primary" href="./dadi.html" role="button">Rolla i dadi!</a></div></div>`
      i = permittedEmails.lenght
    }
  }
});



/*
const check_email = '[a-zA-Z0-9]{0,}([.]?[a-zA-Z0-9]{1,})[@](.com|.it)';
*/
