function Calculadora(){
    let Operac = prompt("Digite a operação desejada (+, -, * ou /).");
    let Valor1 = prompt("Digite o primeiro valor.");
    let Valor2 = prompt("Digite o segundo valor.");
    let Result;
    switch(Operac){
        case '+':
            Result = Number(Valor1) + Number(Valor2);
            alert(`Resultado: ${Result}.`);
        break;
        case '-':
            Result = Number(Valor1) - Number(Valor2);
            alert(`Resultado: ${Result}.`);
        break;
        case '*':
            Result = Number(Valor1) * Number(Valor2);
            alert(`Resultado: ${Result}.`);
        break;
        case '/':
            Result = Number(Valor1) / Number(Valor2);
            alert(`Resultado: ${Result}.`);
        break;
    }
}
function Banco(){
    let Saldo = prompt("Digite o saldo da conta.");
    let Valor = prompt("Digite o valor da compra.");
    if(Number(Saldo) >= Number(Valor)){
        alert(`A compra foi realizada com sucesso. O seu novo saldo é de R$${Number(Saldo)-Number(Valor)}.`);
    }
    else{
        alert(`A compra não foi realizada. Saldo insuficiente. A compra te deixaria com um saldo negativo de R$${Number(Saldo)-Number(Valor)}`);
    }
}
function Media(){
    let Max = prompt("Digite quantos números deseja digitar.");
    let Sum = 0;
    for(let i = 0;i<Number(Max);i++){
        let num = prompt(`Digite o número ${i}.`);
        Sum = Number(Sum) + Number(num);
    }

    Sum = Number(Sum) / Number(Max);
    alert(`A média dos números é igual a ${Sum}.`);
}
function SomIm(){
    let Min = prompt("Digite o número mínimo.");
    let Max = prompt("Digite o número máximo.");
    let Sum = 0;
    let Aux = Min;

    if(Max<Min){
        Aux = Min;
        Min = Max;
        Max = Aux;
        Aux = Min;
    }
    
    if(Number(Min)%2 == 0){
        Min = Number(Min) + 1;
    }

    while(Number(Min)<=Number(Max)){
        Sum = Number(Sum) + Number(Min);
        Min = Number(Min) + 2;
    }

    alert(`A soma dos números ímpares entre ${Aux} e ${Max} é igual a ${Sum}.`);
}
