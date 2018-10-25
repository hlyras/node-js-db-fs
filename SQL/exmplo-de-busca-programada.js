var teste = [  
   {  
      "nome":"Danilo",
      "sobrenome":"santos",
      "cpf":"7675676",
      "telefone":"6765765",
      "endereco":"teste"
   },
   {  
      "nome":"Fernando",
      "sobrenome":"santos",
      "cpf":"7675676",
      "telefone":"6765765",
      "endereco":"teste"
   },
   {  
      "nome":"Sara",
      "sobrenome":"santos",
      "cpf":"7675676",
      "telefone":"6765765",
      "endereco":"teste"
   }
]



// var dado = [];
// for(i=0;i<teste.length;i++){
//    if(teste[i].nome.toLowerCase().substring(teste[i].nome.length - 1, teste[i].nome.length) == "a"){
//       console.log(teste[i].nome.toLowerCase().substring(teste[i].nome.length - 1, teste[i].nome.length));
//       dado.push(teste[i]);
//    }
// }

var filtro = "an";
var tabela = teste;
var dados = [];
function filtrar(){
   var nomeFiltro = filtro;
   for(var i in tabela){
      var conteudo = tabela[i].nome;
      var corresponde = conteudo.toLowerCase().indexOf(nomeFiltro) >= 0;
      // console.log(corresponde);
      if(corresponde){
         dados.push(tabela[i]);
      }
   }
}
filtrar();
console.log(dados);
// console.log(dado);