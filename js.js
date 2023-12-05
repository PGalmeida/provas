function prova(){
    titulo = []
    descricao = []
    autor = []
    qtdelike = []

    for(let i = 0; i < 10; i++){
        titulo[i] = prompt('Informe o Título do post')
        descricao[i] = prompt('Informe a descrição do post')
        let aux = prompt('Informe o nome do usuário (autor)')
        while(autor.includes(aux)){
            aux = prompt('Usuário existente, insira um novo')
        }
        autor[i] = aux
        let j = Number(prompt('Informe a quantidade de likes'))
        while(j < 0){
            j = Number(prompt('Número de like negativo, insira um número positivo'))
        }
        qtdelike[i] = j
    }

    for(let i = 0; i < 5; i++){
    let usu = prompt('Informe um usuário')
    let posicao = autor.indexOf(usu)
    if(posicao == -1){
        alert('Usuário não cadastrado')
       }
       else{
       
        let opcao = Number(prompt('Escolha uma opção: \n 1.Aumentar número de likes \n 2.Diminuir número de likes'))
        switch (opcao) {
            case 1:
                let aumento = Number(prompt('Insira o quanto quer aumentar'))
                resul = qtdelike[i] + aumento
                alert(resul)
            break;
        
            case 2:
                let diminuir = Number(prompt('Insira o quanto quer diminuir'))
                resultado = qtdelike[i] - diminuir
                while(resultado < 0){
                    diminuir = Number(prompt('Insira um número menor, resultado negativo'))
                }
                resultado = diminuir

                alert(resultado)
            break;

            default:
                alert('Opção inválida')
                break;
        }
       }

    let maior = qtdelike[0]
    let menor = qtdelike[0]

    for(let i = 0;i < 10;i++){
        if(qtdelike[i] > maior){
            maior = qtdelike[i]
        }
        if(qtdelike[i] < menor){
            menor = qtdelike[i]
        }
    }
    let tituloMa = titulo[qtdelike.indexOf(maior)]
    let tituloMer = titulo[qtdelike.indexOf(menor)]
    let desMa = descricao[qtdelike.indexOf(maior)]
    let desMe = descricao[qtdelike.indexOf(menor)]
    alert(`O Título ${tituloMa} e a Descrição ${desMa} tem o maior número de like ${maior}`)
    alert(`O Título ${tituloMer} e a Descrição ${desMe} tem o menor número de like ${menor}`)
    }
      
}