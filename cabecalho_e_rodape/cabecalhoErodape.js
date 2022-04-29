$(document).ready(function() {


    var Menu = {

        body: $('.menu'),
        button: $('.button'),
        tools: $('.tools')

    };

    Menu.button.click(function () {
        Menu.body.toggleClass('menu--closed');
        Menu.body.toggleClass('menu--open');
        Menu.tools.toggleClass('tools--visible');
        Menu.tools.toggleClass('tools--hidden');
    });


});
$("#btn-login-index").click((e)=>{
    e.preventDefault()
    window.location.assign("./pagina_de_login/pagina_de_login.html");
})
$("#btn-login").click((e)=>{
    e.preventDefault()
    window.location.assign("../pagina_de_login/pagina_de_login.html");
})
$("#btn-cad-index").click((e)=>{
    e.preventDefault()
    window.location.assign("./pag_cadastro/pag_cadastro.html");
})
$("#btn-cad").click((e)=>{
    e.preventDefault()
    window.location.assign("../pag_cadastro/pag_cadastro.html");
})
$("#btn-form").click((e)=>{
    e.preventDefault()
    window.location.assign("../pag_assinaturas/assinaturas.html");
})
$("#btn-assinatura").click((e)=>{
    e.preventDefault()
    window.location.assign("../pag_assinaturas/assinaturas.html");
})
const botoesAssinatura=document.querySelectorAll(".btn-assinatura")
botoesAssinatura.forEach((botaoAssinatura) => {
    botaoAssinatura.addEventListener("click", (e) => {
        e.preventDefault();
        swal("Entendido!", "Aguarde mais informações no seu e-mail. Obrigada por escolher a FrontEnders.");
      });
    
});


