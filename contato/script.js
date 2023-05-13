let form = document.querySelector("#contato");
let campo = document.querySelector(".requesito");

function nomavalido (){
    if(campos[0].value.lenght < 3)
    {
        console.log("nome deve ter 3 caracteres no minimo")
    }
    else
    {
        console.log("nome valido")
    }

}