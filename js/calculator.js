function caculateImc(){
    //Aqui irei pegar os valores dos campos de Input
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    //Verificação se os valores são válidos
    if (isNaN(weight) || isNaN(height)){
        document.getElementById('result').textContent = "Por favor, insira valores válidos!";
        return;
    }

    //Onde será calculado o IMC
    const imc = weight / (height * height);

    //Exiba o resultado no parágrafo com id "result"
    document.getElementById('result').textContent = `O seu IMC é ${imc.toFixed(2)}`;
}
