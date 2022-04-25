$("#link-esqueci").click((e) => {
    e.preventDefault();

    if ($("#caixa-login").hasClass("visible")) {
        $("#caixa-login").addClass("invisible")
        $("#caixa-esqueci").removeClass("invisible")
        $("#caixa-esqueci").addClass("visible")
    }
})

$("#exampleInputEmail1").focus(function() {
    this.value=''
    $(".span").addClass("invisible")
})



$("#btn-recuperar").click((e) => {

    e.preventDefault();
    const email = $("#exampleInputEmail1").val()
    console.log(email)
    if (email.indexOf('@') != -1 && email.indexOf('@') >= 5) {
        $(".span").hide()
        if ($("#recsucess").hasClass("invisible")) {
            $("#caixa-esqueci").removeClass("visible")
            $("#caixa-esqueci").addClass("invisible")
            $("#recsucess").removeClass("invisible")
            $("#recsucess").addClass("visible")
        }
    } else {
        $(".span").removeClass("invisible")
    }
})
$(".span-reenvio").hide()
$("#btn-reenvio").click((e) => {
    e.preventDefault();
    $(".span-reenvio").show()
})
$(".span-usuario-senha").hide()
$("#btn-entrar").click((e) => {
    e.preventDefault();
    if (validacredenciais()) {
        window.location.assign("../pagina_de_funcionalidades/funcionalidade.html");
    } else {
        $(".span-usuario-senha").show()
    }

})
$("input[name=user]").focus(() => {
    $(".span-usuario-senha").hide()
})
$("input[type=password]").focus(function(){
    this.value=''
    $(".span-usuario-senha").hide()
})

function validacredenciais() {
    const usuario = $("input[name=user]").val()
    const senha = $("input[type=password").val()
    if (usuario == "jessica" && senha == "1234") {
        return true
    } else {
        return false
    }
}
$("#btn-login").click((e) => {
    e.preventDefault();
    window.location.assign("./pagina_de_login.html");
})