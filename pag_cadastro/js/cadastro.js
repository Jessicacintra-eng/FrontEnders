$("#forms").submit((e) => {
    e.preventDefault();
    validarSenha();
})

function visualizacao() {
    if ($("#cadastro-one").hasClass("visible")) {
        $("#cadastro-one").addClass("invisible")
        $("#cadastro-two").removeClass("invisible")
        $("#cadastro-two").addClass("visible")
    }
}

$("#confirmaSenha").hide()
function validarSenha() {
    const senha = document.getElementById('password').value;
    const confirmaSenha = document.getElementById('password-two').value;
    if (senha !== confirmaSenha) {
        $("#confirmaSenha").show()
    } else if (senha === confirmaSenha) {
        visualizacao()
    }
}

$(document).ready(function () {
    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#rua").val("");
        $("#bairro").val("");
        $("#cidade").val("");
        $("#estado").val("");
    }

    $("#cep").blur(function () {
        const cep = $(this).val().replace(/\D/g, '');
        if (cep != "") {
        const validacep = /^[0-9]{8}$/;
            if (validacep.test(cep)) {
              $("#rua").val("...");
              $("#bairro").val("...");
              $("#cidade").val("...");
              $("#estado").val("...");
            $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {

                 if (!("erro" in dados)) {
                  
                    $("#rua").val(dados.logradouro);
                    $("#bairro").val(dados.bairro);
                    $("#cidade").val(dados.localidade);
                    $("#estado").val(dados.uf);
                } else {
                
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
            });
            }else {       
                limpa_formulário_cep()
                alert("Formato de CEP inválido.");
            }
        }else {
            limpa_formulário_cep();
        }
    });
});