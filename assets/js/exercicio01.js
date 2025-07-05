

function cadastrar () {

    let inputNome = document.querySelector ("#campo-nome");
    let nome = inputNome.value;

      let inputQuantidade = document.querySelector("#campo-quantidade");
    let quantidade = inputQuantidade.value;

    let inputPreco = document.querySelector("#campo-preco");
    let preco = inputPreco.value;

    let inputTotal = document.querySelector("campo-total")
    let Total = inputTotal.value;

    let textarea = document.querySelector("#campo-produtos");
    textarea.value = textarea.value + "\nNome: " + nome +
        "\nQuantidade: " + quantidade +
        "\nPreço: " + preco +
        "\nPreço Final: " + total +
        "\n-------------------";

    alert("Cadastro realizado com sucesso");

}

function calcularTotalProduto() {
  let inputPreco = document.querySelector("#campo-preco");
   let inputQuantidade = document.querySelector("#campo-quantidade");

   let preco = parseFloat(inputPreco.value);
    let quantidade = parseFloat(inputQuantidade.value);

    let total = preco * quantidade;
    return total;
}

function calcularTotalProduto() {
    let spanTotal = document.querySelector("#campo-total");

    let total = calcularMedia();

    if(isNaN(media) === true){
        return;
    }

    let mediaFormatada = media.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    spanMedia.innerHTML = mediaFormatada;
}

