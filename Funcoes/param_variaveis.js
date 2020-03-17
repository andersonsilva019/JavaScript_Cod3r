
/**************************************************************************** 
 *          
 *        Nome_do_arquivo: param_variaveis.js
 * 
 *        Descrição: 
 * 
 *        Data: 17-03-2020  
 * 
*****************************************************************************/


/***************************************************************************** 
 *      Mostrando como uma função sem parametro pode receber parametros 
 * 
 * ---------
 * 
 * Quando a função é declarada sem parametro, existe um array interno da função
 * que fica vazio.Tenho a opção de pegar todos os parametros passados(quando chamo
 * a função) e fazer alguma operação com eles. Nesse exemplo, os valores que são 
 * passados, são armazenados no arguments e retorno a soma de todos os elementos 
 * do array.
 ***************************************************************************/ 
function soma(){

    let soma = 0                    //Declarando uma variavel
    for(i in arguments){            //Percorrendo os elemento do array interno
        soma += arguments[i]        //Arguments é um array interno de uma função
    }

    return soma
}

console.log(soma())                 //Resultado -> 0
console.log(soma(1))                //Resultado -> 1
console.log(soma(1,2,3))            //Resultado -> 6