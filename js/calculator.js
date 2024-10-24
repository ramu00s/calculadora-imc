function calculateImc(){
    //Aqui irei pegar os valores dos campos de Input além disso irei substituir as vírgulas por pontos
    let weight = document.getElementById('weight').value || "";  // Garante que weight seja uma string
    let height = document.getElementById('height').value || "";  // Garante que height seja uma string

    //Substitui a vírgula por ponto
    weight = weight.replace(",", ".");
    height = height.replace(",", ".");

    //Converte os valores para números e realiza o cálculo
    weight = parseFloat(weight);
    height = parseFloat(height);

    //Onde será calculado o valor do IMC e a mensagem que será exibida para o usuário
    if (!isNaN(weight) && !isNaN(height) && height > 0) {
        let imc = weight / (height * height);
        //Mensagem explicativa
        let mensagem = `Seu IMC é <strong>${imc.toFixed(2)}</strong>.`;

        //Irei adicionar nesse switch uma mensagem que mostrará a classificação do IMC do usuário
        switch (true){
            case(imc < 18.5):
                mensagem += `\nVocê está <strong>abaixo do peso</strong> (Magreza).`;
                break;
            case(imc >= 18.5 && imc <= 24.9):
                mensagem += `\nVocê está com o <strong>peso normal</strong>.`;
                break;
            case(imc >= 25 && imc <= 29.9):
                mensagem += `\nVocê está com <strong>sobrepeso</strong>.`;
                break;
            case(imc >= 30 && imc <= 39.9):
                mensagem += `\nVocê está com <strong>obesidade</strong> (Grau II).`;
                break;
            case(imc > 40):
                mensagem += `\nVocê está com <strong>obesidade grave</strong> (Grau III).`;
                break;
            default:
                mensagem += `\nNão foi possível classificar o IMC.`
        }
        
        document.getElementById("result").innerHTML = mensagem;
    } else {
        document.getElementById("result").innerHTML = "Insira valores válidos para o cálculo.";
    }
}