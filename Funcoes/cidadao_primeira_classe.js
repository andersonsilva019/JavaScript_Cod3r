
/** *******************************************************
 *      Nome do arquivo: Cidadao_primeira_classe.js
 * 
 *      Descrição: Posso fazer tudo isso com funções
 * 
 *      Criado: 15-03-2020
 *      
 * ********************************************************/ 

//Criando uma função de forma literal
function fun1(){}

//Armazenar um função em variavel
const fun2 = function (){}

//Armazenar um função dentro de um array
const array = [function (a , b){return a + b}, fun1, fun2]
console.log(array[0](4,2))

//Armazer em um atributo de objeto
const obj = {}
obj.falar = function (){return 'Hello Wolrd'}
console.log(obj.falar())


//Passar função como parametro
function run (fun){
    fun()
}

run(function (){ return console.log('Executando uma função passada por param')})

// Uma função pode retornar/conter uma função

function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)                    //Posso usar dessa formafsdfs
const result_soma = soma(2,3)   //Posso armazenar o resultado da função em uma const
result_soma(4)                  //Passo um valor para a função de dentro
