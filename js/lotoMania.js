let dezenas = []

//inserir no array dezenas os 100 números
for (const x of Array(100).keys()){
        dezenas.push(x)
    } 
//função para escolha de números aleatórios em um array
    const escolherDezenas = (arr, num = 1) => {
        const res = [];
    
        for(let i = 0; i < num; ){
           const random = Math.floor(Math.random() * arr.length);
           if(res.indexOf(arr[random]) !== -1){
              continue;
           };
           res.push(arr[random]);
           i++;
        };
        return res;
     };


var dezenasParaJogar = escolherDezenas(dezenas, 50)
console.log(dezenasParaJogar.sort(function (a, b){
    return a - b 
    }));
