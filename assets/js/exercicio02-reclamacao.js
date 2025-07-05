function enviar_reclamacao () {

    let inputNome = document.querySelector ("#campo-nome");
    let nome = inputNome.value;

    let inputEmail = document.querySelector("#campo-email");
    let email = inputEmail.value;

    let inputReclamacao = document.querySelector("#campo-reclamacao");
    let reclamacao = inputReclamacao.value;

    let textarea = document.querySelector("#campo-reclamacao1");
    textarea.value = textarea.value + "\nNome: " + nome +
        "\nE-mail: " + email +
        "\nReclamação: " + reclamacao +
        "\n-------------------";

    alert("Reclamação realizada com sucesso");

}