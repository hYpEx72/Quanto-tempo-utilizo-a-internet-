
// Base de dados da pesquisa
const dadosPesquisa = {
    mediaNacionalDiaria: 4,
    alertaSaude: 6,

    sugestoes: [
        {
            limite: 2,
            mensagem: "Parabéns! Seu uso está equilibrado. Você tem mais tempo livre para hobbies e descanso."
        },
        {
            limite: 5,
            mensagem: "Atenção. Você está na média nacional, mas já gasta quase um dia inteiro da sua semana olhando para a tela."
        },
        {
            limite: 24,
            mensagem: "Cuidado! Seu uso é considerado muito alto. Isso pode afetar seu sono, foco e saúde mental. Que tal um detox digital?"
        }
    ]
};

// Capturando os elementos HTML
const botao = document.getElementById("calcular");
const campoHoras = document.getElementById("horas");
const resultado = document.getElementById("resultado");

// Função executada ao clicar no botão
botao.addEventListener("click", function() {

    // Pegando o valor digitado
    const horas = Number(campoHoras.value);

    // Verificando se o valor é válido
    if (campoHoras.value === "" || horas < 0 || horas > 24) {
        resultado.innerText = "Digite um valor entre 0 e 24 horas.";
        return;
    }

    // Calculando o tempo semanal e mensal
    const semanal = horas * 7;
    const mensal = horas * 30;

    // Comparando com a média nacional
    let comparacao = "";

    if (horas > dadosPesquisa.mediaNacionalDiaria) {
        comparacao = "Seu uso está acima da média nacional de " +
        dadosPesquisa.mediaNacionalDiaria + " horas por dia.";
    } else if (horas < dadosPesquisa.mediaNacionalDiaria) {
        comparacao = "Seu uso está abaixo da média nacional de " +
        dadosPesquisa.mediaNacionalDiaria + " horas por dia.";
    } else {
        comparacao = "Seu uso está exatamente na média nacional.";
    }

    // Escolhendo a mensagem de reflexão
    let mensagem = "";

    if (horas <= dadosPesquisa.sugestoes[0].limite) {
        mensagem = dadosPesquisa.sugestoes[0].mensagem;

    } else if (horas <= dadosPesquisa.sugestoes[1].limite) {
        mensagem = dadosPesquisa.sugestoes[1].mensagem;

    } else {
        mensagem = dadosPesquisa.sugestoes[2].mensagem;
    }

    // Verificando o alerta de saúde
    let alerta = "";

    if (horas >= dadosPesquisa.alertaSaude) {
        alerta = " Atenção: você atingiu ou ultrapassou o limite de alerta de " +
        dadosPesquisa.alertaSaude + " horas diárias.";
    }

    // Exibindo o resultado na tela
    resultado.innerHTML =
        "<h2>Seu resultado:</h2>" +
        "<p>Você passa <strong>" + semanal +
        " horas por semana</strong> nas redes sociais.</p>" +

        "<p>Isso representa <strong>" + mensal +
        " horas por mês</strong>.</p>" +

        "<p>" + comparacao + "</p>" +

        "<p>" + mensagem + "</p>" +

        "<p>" + alerta + "</p>";
});
