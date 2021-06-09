function solucao(joao, andre) {
    // Escreva seu codigo aqui
    var jogador1 = 'JOAO';
    var jogador2 = 'ANDRE';
    var empate = 'EMPATE';
    
        switch (joao){
            case 'PEDRA':
                {
                    if(andre == 'PAPEL')
                        console.log(jogador2);
                    else if(andre == 'TESOURA')
                        console.log(jogador1);
                    else
                        console.log(empate);
                break;
                }
            case 'PAPEL':
                {
                     if(andre == 'PEDRA')
                        console.log(jogador1);
                    else if(andre == 'TESOURA')
                        console.log(jogador2);
                    else
                        console.log(empate);
                break;
                }
            case 'TESOURA':
                {
                    if(andre == 'PAPEL')
                        console.log(jogador1);
                    else if(andre == 'PEDRA')
                        console.log(jogador2);
                    else
                        console.log(empate);
                break;
                }
        }
}


function processData(input) {
  const pairs = input.trim().split(" ");
  const j = pairs[0];
  const a = pairs[1];
  solucao(j, a);
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
