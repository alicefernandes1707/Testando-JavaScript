//alert('Oi, arquivo separado');
/*document.getElementById("texto").innerHTML="Meu primeiro programa em <b>JavaScript</b>"
//...............................................................................................//
document.getElementById("Q1").innerHTML="Estou apredendo <b>JavaScript</b>!"
document.getElementById("Q2").innerHTML="Meu curso é no <i>SENAI</i>."
//...............................................................................................//
document.write("Olá, alunos!");
document.write("<h2>Aprendendo JavaScript</h2>");
document.write("Resultado: " + (10 +20));
//...............................................................................................//
alert("Bem-vindo ao nosso site!")
//...............................................................................................//
console.log("Olá, mundo!");
console.log("Bem-vindo ao JavaScript");
console.log(20+20+20+7);
console.log("...................................");
//...............................................................................................//
var nome = "Alice";
var idade = 19;
console.log(nome);
console.log(idade);
console.log("...................................");
//...............................................................................................//
let cidade = "Imperatriz"
cidade = "São Luís"
console.log(cidade);
console.log("...................................");
//...............................................................................................//
const pi = 3.14;
console.log(pi);
console.log("...................................");
//...............................................................................................//

let nome1 = "Alice";
let sobrenome = "Lima";

let nomeCompleto = nome1 + " " + sobrenome;
console.log(nomeCompleto);
console.log("...................................");
//...............................................................................................//

let frase1 = "Estou aprendendo ";
let frase2 = "JavaScript";

let resultado =frase1.concat(frase2);
console.log(resultado);
console.log("...................................");
//...............................................................................................//

let f1 = "Eu gosto de ";
let f2 = "Hambúrguer e batata frita ";
let f3 = "com Coca-cola";

let resultado1 =f1.concat(f2).concat(f3);
console.log(resultado1);
console.log("...................................");
//...............................................................................................//


let preco = 25;
let quant = 4;
let desconto = 20;

let total = preco * quant;
let valorFinal = total - desconto;
let parcela = valorFinal/4;

console.log("Total: " + total);
console.log("Valor: " + valorFinal);
console.log("Parcela: " + parcela);
console.log("...................................");
//...............................................................................................//

let p1= 15;
let q1= 6;
let d1= 10;

let total1 = p1 * q1;
let vf = total1 - d1;
let parc = vf/2;

console.log(total1);
console.log(vf);
console.log(parc);
console.log("...................................");
//...............................................................................................//

let p2= 40;
let q2= 3;
let d2= 30;

let total2 = p2 * q2;
let vf2 = total2 - d2;
let parc2 = vf2/3;

console.log(total2);
console.log(vf2);
console.log(parc2);
console.log("...................................");
//...............................................................................................//
function saudacao() {
    console.log("Olá, seja bem-vindo!")
}
saudacao();
//...............................................................................................//
function saudacoes(nome) {
    console.log("Olá, " + nome);
}
saudacoes("Maria");
saudacoes("Pedro");
saudacoes("Carlos");
//...............................................................................................//
function somar(n1, n2) {
    return n1 + n2;
}
let resposta = soma (10, 20);
console.log(resposta);
//...............................................................................................//
*/
/*
function verficarIdade(idade){
    if (idade>=18){
        return "Maior de idade";
    }else{
        return "Menor de idade";
    }
}
console.log(verficarIdade(20));
console.log(verficarIdade(15));

function mediaTotal(num1, num2) {
    let mediaTotal =(num1 + num2)/2
    return mediaTotal;
}
console.log (mediaTotal(10,9));
*/
/*
 // Primeira questão//

 let nomeProduto = "Shampoo";
 let valorProduto = 89;
 let marca = "Kérastase";

 console.log("Um " + nomeProduto + " da marca " + marca + " custa " + valorProduto + " reais");

 let nomeVisitante = "Alice";
 let destino = "Zhōngguó";

 alert("Huānyíng " + nomeVisitante +" Nín yǐ dǐdá " + destino);
*/

let estudante = {
    nome: "Carlos",
    idade: 20,
    curso: "Informática"
};
console.log(estudante);
console.log("...................................");

const carro = {
    marca:"Toyota",
    modelo: "Corolla",
    acelerar (){
        console.log("Acelerando!");
    },
    buzinar(){
        console.log("Biiiiiiiii!");
    }
};
carro.acelerar();
carro.buzinar();
console.log("...................................");

let produto ={
    name: "Celular",
    preco: 2800.00,

    exibirInfo: function(){
        console.log("Produto: " + this.name);
        console.log("Preço: " + this.preco);
    }
};

produto.exibirInfo();
console.log("...................................");

let CARRO  = {
    Marca: "Toyota",
    Modelo: "Corolla",
    Velocidade: 0,

    Acelerar: function() {
        this.Velocidade = this.Velocidade + 20;
        console.log("Velocidade: " + this.Velocidade);
    },
    Frear: function() {
        this.Velocidade = 0;
        console.log("Carro parado!");
    }
};
console.log("...................................");

let CELULAR  = {
    Marca: "Xiaomi",
    Modelo: "RedMi note 14",
    Carregamento: 20,

    Ligar: function() {
        console.log("Celular ligado!");
    },
    Carregar: function() {
        this.Carregamento += 20;
        console.log("Carregando: " + this.Carregamento + "%");
    },
    Desligar: function() {
        console.log("Celular desligado!");
    }
};
CELULAR.Ligar();
CELULAR.Carregar();
CELULAR.Desligar();
console.log("...................................");

let Ventilador  = {
    Marca: "Mondial",
    Velocidade: 0,

    Ligar: function() {
        this.Velocidade = 3;
        console.log("Ventilador ligado!");
        console.log("Velocidade: " + this.Velocidade);
    }
};
Ventilador.Ligar();
console.log("...................................");

let Livro  = {
    Título: "Dom Casmurro",
    Páginas: 256,

    exibirDados: function(){
        console.log("Título: " + this.Título);
        console.log("Páginas: " + this.Páginas);
    }
};
Livro.exibirDados();
console.log("...................................");

let BANCO  = {
    titular: "Carlos",
    banco: "Banco do Brasil",
    numeroConta: "12345-6",
    saldo: 1000,
    deposito: 200,
    saque: 150,

    Depositar: function() {
        this.saldo = this.saldo + this.deposito;
        console.log("Deposito: " + this.saldo);
    },
    Sacar: function() {
        this.saldo = this.saldo - this.saque;
        console.log("Deposito: " + this.saldo);
    },
    Consultar: function() {
        console.log("Nome: " + this.titular);
        console.log("Saldo: " + this.saldo);
    }
};
BANCO.Depositar();
BANCO.Sacar();
BANCO.Consultar();
console.log("...................................");

let frutas =["Maçã", "Banana", "Uva"];
frutas.push("Laranja")
console.log(frutas);
console.log("...................................");

let cores = ["Vermelho","Azul", "Verde"];
cores.push("Amarelo", "Roxo")
console.log(cores);
console.log("...................................");

let bolo = ["chocolate", "morango", "paçoca"];
console.log(bolo.join(" - "));
console.log("...................................");

let aluno =["Nome1", "Nome2", "Nome3"];
console.log(aluno.join(" - "));
console.log("...................................");

let salgados =["Pastel", "Bolinha de queijo", "Cachorro-quente"];
salgados.pop("Cachorro-quente");
console.log(salgados);
console.log("...................................");

let comida = ["Salada", "Batata frita", "Hamburguer"];
salgados.shift();
console.log(comida);
console.log("...................................");

const lista1 = ["Arroz", "Feijão", "Salada"];
const lista2 = ["Carne", "Batata frita", "Coca-cola"];
const lista3 = ["Pavê de oreo", "Sorvete"]

const superLista = lista1.concat(lista2).concat(lista3);
console.log(superLista);
console.log("...................................");

let pizza = ["Calabreza", "Quatro-queijos", "Carne-seca", "Portuguesa"];
pizza.splice(1,2);
console.log(pizza);
console.log("...................................");

let sorvete = ["Azul", "Choco-menta", "Banana"];
sorvete.sort();
console.log(sorvete)
console.log("...................................");

let produtos = [];
produtos.push("Água sanitaria", "Vassoura", "Bucha", "Detergente", "Palha de aço");
let RESULTADOS = produtos.join(" - ");
console.log(RESULTADOS);
console.log("...................................");

let mercado = ["Arroz", "feijão", "Leite"];
mercado.push("Café", "Açúcar");
mercado.pop();

let novosProdutos = ["Macarrão", "Óleo"];

let estoque = mercado.concat(novosProdutos);
console.log(mercado);
console.log(novosProdutos);
console.log(estoque);