function validaArray(arr,num){
    try{
        if(!arr && !num) throw new ReferenceError('Envie os parâmetros');

        if(typeof arr !=='object') throw new TypeError('Array precisa ser do tipo object');

        if(typeof num !=='number') throw new TypeError('Array precisa ser do tipo number');

        if( arr.length !== num) throw new RangeError('Tamanho Inválido!');
        return arr;    
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("É um ReferenceError");
            console.log(e.name);
            console.log(e.stack);
            console.log(e.mensage);
        }
        else if(e instanceof TypeError){
            console.log("É um TypeError");
            console.log(e.name);
            console.log(e.stack);
            console.log(e.mensage);
        }
        else if(e instanceof RangeError){
            console.log("É um TypeError");
            console.log(e.name);
            console.log(e.stack);
            console.log(e.mensage);
        }
        else{
            console.log("Tipo de erro não esperado:"+e);
        }
    }


}
console.log(validaArray());