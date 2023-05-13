alert("Seja Bem-Vindo!")

document.getElementById("btn-claro").addEventListener("click", function(){
    document.querySelector(".container1").setAttribute("class", "tema1")
})

document.getElementById("btn-escuro").addEventListener("click", function(){
    document.querySelector(".container1").setAttribute("class", "tema2")
})