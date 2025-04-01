const inputTempo = document.getElementById("tempo");
const selectDe = document.getElementById("conversao");
const selectPara = document.getElementById("conversao2");
const resultadoTexto = document.getElementById("resultado");

function converterTempo() {
    let valor = parseFloat(inputTempo.value);
    let unidadeDe = selectDe.value;
    let unidadePara = selectPara.value;

    if (isNaN(valor) || valor <= 0) {
        resultadoTexto.textContent = "Digite um valor válido!";
        return;
    }

    const segundosPorUnidade = {
        sec: 1,
        mins: 60,
        hou: 3600,
        days: 86400,
        moth: 2592000,
        yers: 31536000
    };

    let valorEmSeg = valor * segundosPorUnidade[unidadeDe];
    let resultado = valorEmSeg / segundosPorUnidade[unidadePara];
    console.log(resultado)
    resultadoTexto.textContent = `Resultado: ${Number(resultado.toFixed(2))}`;
}

inputTempo.addEventListener("input", converterTempo);
selectDe.addEventListener("change", converterTempo);
selectPara.addEventListener("change", converterTempo);
