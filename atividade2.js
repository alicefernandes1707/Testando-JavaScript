//01°) Questão
let alunos = ["nome", "idade", "curso"];
console.log(alunos[0] + ", " + alunos[2]);
console.log("--------------------------------------------------");

//02°) Questão
let produtos = {
    nome: "Chocolate", 
    preco: 7.50,
compra1: function(){
    console.log("Produto: " + this.nome);
    console.log("Preço: " + this.preco);
},
compra2: function (){
    this.preco = 8
    console.log("Produto: " + this.nome);
    console.log("Novo preço: " + this.preco);
}
};
produtos.compra1();
produtos.compra2();
console.log("--------------------------------------------------");

//03°) Questão
let cachorro = {
    nome: "Chico", 
    raca: "Chihuahua",
latir: function(){
    console.log("Au au!");
}
};
cachorro.latir();
console.log("--------------------------------------------------");