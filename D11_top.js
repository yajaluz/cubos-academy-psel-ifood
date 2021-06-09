function solucao(produtos) {
	//seu codigo aqui
    
    var totalTop= 0, totalGeral = 0;
    
    //for (var item in produtos) 
    for(var x = 0; x < produtos.length; x++)
    {
        if(produtos[x].preco > 10000)//[item]
            totalTop += produtos[x].preco;
        
        totalGeral+= produtos[x].preco;
    }
    
    console.log('{ totalTop: '+ totalTop + ', percentual:', totalTop/totalGeral, '}')
}

function processData(input) {
	solucao(JSON.parse(input));
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
