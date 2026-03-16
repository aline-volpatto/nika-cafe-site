const botao = document.getElementById("btn-topo");

window.addEventListener("scroll", function(){

  if(window.scrollY > 300){
    botao.style.display = "block";
  } else {
    botao.style.display = "none";
  }

});

botao.addEventListener("click", function(){

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});



const form = document.querySelector("#form-contato");

if(form){

form.addEventListener("submit", function(event){

event.preventDefault();

alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");

form.reset();

});

}
