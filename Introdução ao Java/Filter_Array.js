function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item%2===0;
}

const array = [1,2,43,23,22,55,43,23,44,50];

console.log(filtraPares(array));

