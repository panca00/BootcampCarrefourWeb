//Usando this 
/*
const maca={value:2,}
const laranja={value:3,}

function mapThis(arr,thisArg){

    return arr.map(function(item){
        return item*this.value;
    },thisArg)
}

const nums = [1,2];

console.log('this -> maca',mapThis(nums,maca));

console.log('this -> laranja',mapThis(nums,laranja));*/
//Console sem this
function map(arr){
    return arr.map(function(item){
        return item *2;
    });
}

const nums = [1,2];

console.log(map(nums));