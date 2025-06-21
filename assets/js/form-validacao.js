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
    if(campoModalidade === null){
        alert("Escolha uma modalidade");
        return; //encerra uma execução da função
    }

    let modalidade = campoModalidade.value;

    let campoEstrangeiro = document.querySelector("#campo-estrangeiro");
    let estrangeiro = campoEstrangeiro.checked;

    alert(
        "\nNome: " + nome +
        "\nSobrenome: " + sobrenome +
        "\nIdade: " + idade +
        "\nClasse: " + classe +
        "\nModalidade: " + modalidade +
        "\nEstrangeiro: " + estrangeiro
    );
    
}