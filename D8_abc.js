

function solucao(letra, palavras) {
	//seu codigo aqui
    var cont = 0;
    
    for(var x = 0; x < palavras.length; x++)
    {
        if(palavras[x].substring(0,1) != letra)
            cont++;
    }
    
    console.log(cont);
    
}

function processData(input) {
	const {letra, palavras} = JSON.parse(input)[0];
    solucao(letra, palavras);
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