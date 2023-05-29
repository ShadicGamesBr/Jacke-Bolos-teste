var borda = document.getElementsByClassName("foto")
for(i = 0; i < borda.length; i++ ){
    borda[i].addEventListener("mouseenter", entrar)
    borda[i].addEventListener("mouseout", sair)
}

function entrar(){
    this.style.transform = "scale(1.1)"
}
function sair(){
    this.style.transform = "scale(1.0)"
}
