//Padrão de nomenclatura para uma função js é camel case
function limpar_campos() {
    let inputNome = document.querySelector("#campo-nome");

    //Definir o valor do campo como uma string vazia, ou seja, limpar o campo
    inputNome.value = "";

    let inputSobrenome = document.querySelector("#campo-sobrenome");
    inputSobrenome.value = "";

    let inputIdade = document.querySelector("#campo-idade");
    inputIdade.value = "";

    let inputClasse = document.querySelector("#campo-classe");
    inputClasse.value = "";

    let inputModalidade = document.querySelector("input[name='modalidade']:checked");
    //necessário validar que o usuario escolheu alguma modalidade, caso contrario
    //a limpeza nao funcionara para os demais campos
    if (inputModalidade !== null) {
        inputModalidade.checked = false;
    }

    let inputEstrangeiro = document.querySelector("#campo-estrangeiro");
    inputEstrangeiro.checked = false;

}

function calcularMedia() {
    let inputNota1 = document.querySelector("#campo-nota1");
    let inputNota2 = document.querySelector("#campo-nota2");
    let inputNota3 = document.querySelector("#campo-nota3");

    let nota1 = parseFloat(inputNota1.value);
    let nota2 = parseFloat(inputNota2.value);
    let nota3 = parseFloat(inputNota3.value);

    let media = (nota1 + nota2 + nota3) / 3;
    return media;
}

function preencherCampoMedia() {
    let spanMedia = document.querySelector("#media-valor");

    let media = calcularMedia();

    if(isNaN(media) === true){
        return;
    }

    let mediaFormatada = media.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    spanMedia.innerHTML = mediaFormatada;
}

function cadastrar() {
    let inputNome = document.querySelector("#campo-nome");
    let nome = inputNome.value;

    let inputSobrenome = document.querySelector("#campo-sobrenome");
    let sobrenome = inputSobrenome.value;

    let inputIdade = document.querySelector("#campo-idade");
    let idade = inputIdade.value;

    let inputClasse = document.querySelector("#campo-classe");
    let classe = inputClasse.value;

    let campoModalidade = document.querySelector("input[name='modalidade']:checked");
    if (campoModalidade === null) {
        alert("Escolha uma modalidade");
        return; //encerra uma execução da função
    }

    let modalidade = campoModalidade.value;

    let campoEstrangeiro = document.querySelector("#campo-estrangeiro");
    let estrangeiro = campoEstrangeiro.checked;

    let media = calcularMedia();
    let statusMedia = "";
    if (media >= 6.00){
        statusMedia = "Aprovado";
    }else{
        statusMedia = "Reprovado";
    }

    let textarea = document.querySelector("#campo-alunos");
    textarea.value = textarea.value + "\nNome: " + nome +
        "\nSobrenome: " + sobrenome +
        "\nMédia: " + media +
        "\nStatus " + statusMedia +
        "\nIdade: " + idade +
        "\nClasse: " + classe +
        "\nModalidade: " + modalidade +
        "\nEstrangeiro: " + estrangeiro + "\n-------------------";

    alert("Cadastro realizado com sucesso");

}