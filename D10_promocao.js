function solucao(precos) {
    //seu codigo aqui
    var total= 0, menor = precos[0];
    
    
    for(var x = 0; x < precos.length; x++)
    {
        if(precos[x] < menor)
            menor = precos[x];
        
        total += precos[x];
    }

    if (precos.length >= 5)
     console.log(total- menor);
    else
        console.log(total);
}

function processData(input) {
	solucao(input.trim().split(" ").filter(x => x).map(x => parseInt(x, 10)));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});