function calcular(){
    var valor = parseInt(document.getElementById('valor').value);//buscar um valor 
    var  texto = ''//crei  um texto vazio que vai ser atualizado com a tabuada
    
    if (calcular.length === 0){
        alert ('Ensira um numero para fazer o calculo!');
    }
    for(var i = 1; i <= 20; i++){//adicionei sequencialmente ao texto  vazio  o resultado de cada calculo , o parseInt serve para converter string em numero
        texto = texto + i.toString() + //toString permite o valor de i num texto
        'x' + valor.toString() + 
        '=' + (valor*i).toString() +
         '<br>';
    }

    document.getElementById('resultado').innerHTML = texto;//Apresentei o texto completo da tabuada
}

