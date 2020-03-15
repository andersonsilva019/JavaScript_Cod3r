
/** ***************************************************************
 *      Nome do arquivo: param_return_opcionais.js
 * 
 *      Descrição: Mostrando como os parametros e retorno são opcionais
 * 
 *      Criado: 15-03-2020
 *      
 * ****************************************************************/ 


 //Não é uma boa prática, mas é valida
function area(largura, altura){

    const area = largura*altura
    
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m2`)
    } else {
        return area
    }
}

console.log(area(10,3))