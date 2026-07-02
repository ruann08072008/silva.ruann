// exiba os resultados armazenados no array

 let faturamento=(1200, 850, 980, 1500, 760, 1320, 1100);
    console.log(faturamento);
    //informe quantos dias de vendas foram registrados
    console.log(faturamento.length);
    //exiba o faturamento do primeiro dia de vendas
    console.log(faturamento[0]);
    //exiba o faturamento do último dia de vendas
    console.log(faturamento [faturamento.length - 1]);
    //parte 2
    //calcule o faturamento total da semana
    let soma = 0;
    for(let valor of faturamento){
    soma += valor 
    }
     //calcule a média de faturamento da semana
     let media = soma / faturamento.length;
    //exiba os resultados
    console.log(soma);
    console.log(media);
    //parte 3
    //utilizando estruturas de repetição e condicionais
     //Descubra o maior e o menor faturamento da semanass
     let maior = faturamento[0];
     let menor = faturamento[0]
    //exiba esses valores 
    for(let valor of faturamento){
        if(valor > maior){
            maior = valor;
        }
        if(valor < menor){
            menor = valor;
        }
    }
    console.log(maior);
    console.log(menor);
    //vendas acima da media 
    //crie um novo array chamado acima da media 
    let acimadamedia = [];
    //armazene apenas os valores que ficam da media 
    //exiba o novo array
    for (let valor of faturamento){
        if(valor > media){
            acimadamedia.push(valor);[]
        }
    }
        console.log(acimadamedia);
    


