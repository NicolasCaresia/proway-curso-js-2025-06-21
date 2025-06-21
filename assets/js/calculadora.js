//function para que serve???? contém um trecho de código que tem um objetivo de resolver algum problema 
function realizarSoma() {
    //Pegar o campo (input) que contém o id="campo-numero1"
    let inputNumero1 = document.querySelector("#campo-numero1");
    //Pegar o valor (número digitado) do campo numero 1
    let numero1 = parseInt(inputNumero1.value);


    let inputNumero2 = document.querySelector("#campo-numero2");
    let numero2 = parseInt(inputNumero2.value);


    alert("Soma: " + (numero1 + numero2))
}

function apresentarVariaveis(){
    let nome = "Pedro";
    let sobrenome = "Carlos";

    let idade = 20;

    let salarioBase = 1800.20;

    let empregado = false; // falso => false, verdadeiro => true

    //comentario em linha 
    /* comentario em bloco (pq pode conter várias linhas */

    /*
        Tipos de dados:
            string => armazenar texto
            int => inteiro
            float => numeros reais
            boolean => tipo lógico(verdadeiro,falso)
    */


    // adicionar 15 reais de aumento para o pedro 

    let aumento = 15.00

    let salario = salarioBase + aumento;

    alert("Nome: " + nome + "\nSalario: " + salario)
}

function apresentarIdade(){
    let dataNascimento = new Date(1996, 7, 15);
    let anoNascimento = dataNascimento.getFullYear();

    let dataHoraAtual = new Date();
    let anoAtual = dataHoraAtual.getFullYear(); // 2025

    //calcular idade
    let idade = anoAtual - anoNascimento;



    console.log("Idade: " + idade);

    if(idade <= 17){
        console.log("Menor de idade")
    } else {
        console.log("Adulto")
    }
}
