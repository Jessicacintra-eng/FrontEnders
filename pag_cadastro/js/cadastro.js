const form = document.getElementById('forms');
const senha = document.getElementById('password');
const senhaDois = document.getElementById('password-two');
const rg = document.getElementById('rg');
const cpf = document.getElementById('cpf');
const cep = document.getElementById('cep');


form.addEventListener('submit', (event) => {
    event.preventDefault()
   
    validarImputs();
})

function validarImputs() {

    if(senha.value !== senhaDois.value) { 
       const msg = document.getElementById('small')
       msg.innerHTML = "As senhas não conferem";    
    } else if (senha.value === senhaDois.value){
       document.getElementById("demo").addEventListener("click", redirecionamento());
    }
}

function redirecionamento() {
   window.location.href =  "../pag_cadastro/pag_cadastro_segurario.html"
  }