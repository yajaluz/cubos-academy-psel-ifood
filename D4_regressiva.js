

function solucao(numero) {
	//seu codigo aqui
    if(numero >= 0)
    {
        while(numero >= 0)
        {
            console.log(numero);
            numero--;
        }
        console.log('KABUM');
        
    }
    
}

function processData(input) {
	solucao(parseInt(input, 10));
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
