function somaNumeros(arr){
    return arr.reduce(function(prev,current){
        return prev-current;
    },0);
}

const arr=[40,2,5,4,9,2];

//console.log(somaNumeros(arr));

// 
const lista = [
    {
        name: 'sabao', preco:30,
    },
    {
        name: 'ceral',preco:12,
    },
    {
        name:'toalha',preco:30,
    },
];


const saldoDisp = 100;

function calculaSaldo(saldoDisp,lista){

    return lista.reduce(function(prev,current){
        return prev-current.preco;
    },saldoDisp)
}

console.log(calculaSaldo(saldoDisp,lista));