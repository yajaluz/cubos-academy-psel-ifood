

function solucao(ano) {
	//seu codigo aqui
    var val = ano
    
    if(ano > 2021){
        while(val > 2021)
        {
           if (val == 2022 ||val == 2024)
                break;

           val -= 4;
        } 
        
       if (val == 2022)
           console.log('COPA');
       else if(val == 2024)
            console.log('JOGOS');
       else
            console.log('MEH');
            
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
