

function solucao(tempo, distancia) {
	//seu codigo aqui
    if(tempo < 5)
    {
        console.log(600);
    } 
    else if(tempo >=5 && tempo <=60)
    {
        console.log((100*tempo) + (50*distancia));    
    }
    else
    {
        if(distancia < 100)
        {
            console.log(200* distancia);
        }else{
            console.log(150* distancia);
        }
        
    }
}

function processData(input) {
    const {tempo, distancia} = JSON.parse(input);
    solucao(tempo, distancia);
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