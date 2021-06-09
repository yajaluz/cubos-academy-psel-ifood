

function solucao(obj) {
	//seu codigo aqui
    var val = Object.values(obj);
    
    if(!val[0] || val[1] <= val[3] && !val[4])
        console.log('ACESSO NEGADO');
    else 
        if(val[2] || val[1] < 18)
            console.log('MEIA');
        else 
            console.log('INTEIRA');
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
