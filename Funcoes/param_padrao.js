
/**************************************************************************** 
 *          
 *        Nome_do_arquivo: param_padrao.js
 * 
 *        Descrição: Antes e depois do ES2015
 * 
 *        Data: 17-03-2020  
 * 
*****************************************************************************/

//estrategia 1 para gerar valor padrao

/**************************************************************************
 *    A estrategia é usar o operador "||". Caso o valor de um lado seja falso,
 * deve-se utilizar o valor já definido pelo programador como padrao
 *      
 *
***************************************************************************/

function soma1(a, b, c){

    a = a || 1                          //Caso "a" seja falso, o valor 1 é o padrão
    b = b || 1                          //Caso "b" seja falso, o valor 1 é o padrão
    c = c || 1                          //Caso "c" seja falso, o valor 1 é o padrão

    return a + b + c
}


console.log(soma1())                     //Resultado -> 3
console.log(soma1(3))                    //Resultado -> 5
console.log(soma1(2,3))                  //Resultado -> 6

/**************************************************************************
 * O problema está aqui, eu queria que o resultado final fosse 0, mas 
 * como o 0 é considerado um valor falso, o operador || utiliza o valor 1 
 * para efetuar a soma. Resultado em 3.
 **************************************************************************/ 

console.log(soma1(0,0,0))                //Resultado -> 3



//Estrategia 2 , 3 , 4 para gerar um valor padrão

function soma2(a, b ,c){         
    //sintaxe do operador ternario...
    // condição ? true : false             
    a = a !== undefined ? a : 1                  //Gerando um valor padrão(1) caso o a não seja informado
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c                         //Melhor solução

    return a + b + c
}

console.log("---------")
console.log(soma2())                            //Resultado -> 3
console.log(soma2(0,0,0))                       //Resultado -> 0


//Valor padroa do Es2015

function soma3(a = 1, b = 2, c = 3){
    return a + b + c
}

console.log(soma3(3))                           //Resultado -> 8