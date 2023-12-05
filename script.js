principal()
let principal = () => {
    let vetAlbuns = []
    let vetFigurinhas = []
    let opcao
    do {
        opcao = Number(prompt(`ENTRE \n 1. Cadastrar um álbum
                                     \n 2. Cadastrar uma figurinha
                                     \n 3. Venda de figurinha
                                     \n 4. troca de figurinha
                                     \n 5. calcular quantidade
                                     \n 6. mostrar maior quantidade de figurinha
                                     \n 7. sair`
                    ))

        switch(opcao){
            case 1: cadastraAlbuns(vetAlbuns)
                break
            case 2: cadastraFigurinhas(vetAlbuns, vetFigurinhas)
                break
            case 3: vendaFigurinha(vetFigurinhas)
                break
            case 4: trocaFigurinha(vetFigurinhas)
                break
            case 5: calcularQuantidade(vetFigurinhas)
                break
            case 6: mostrar(vetAlbuns, vetFigurinhas)
                break
            case 7: alert(`Programa será encerrado`)
                break
            default: alert(`Opção inválida`)
        }
    } while (opcao != 7);
}

let cadastraAlbuns = (vetAlbuns) => {
        let novoAlbum = {
            id: Number(prompt('Id do Álbum')),
            nome: prompt('Nome do Álbum'),
            empresa: prompt('Empresa do Álbum')
        }
        while (vetAlbuns.some((alb) => alb.id == novoAlbum.id)){
            novoAlbum.id = Number(prompt('id já existe, informe um novo'))
        }
        while (vetAlbuns.some((nom) => nom.nome == novoAlbum.nome)){
            novoAlbum.nome = Number(prompt('Nome já existe, informe um novo'))
        }
        vetAlbuns.push(novoAlbum)
}

let cadastraFigurinhas = (vetAlbuns, vetFigurinhas) => {
    if(vetAlbuns.id === 0){
        alert(`Não há álbuns cadastrados`)
    }
    else{
        let novaFigurinha = {
            qtde: 0,
            numero: Number(prompt(`Número da figurinha`)),
            nome_fig: prompt('Nome da figurinha'),
            time: Number('Time da figurinha'),
            qtde: Number(prompt(`Quantidade de figurinha`)),
            idALbum: Number(prompt('id do álbum'))
        }
        while(!vetAlbuns.some((alb) => alb.id == novaFigurinha.idALbum)){
            novaFigurinha.idALbum = Number(prompt('Álbum não existe. Digite novamente'))
        }
        while (vetFigurinhas.some((num) => num.numero == novaFigurinha.numero)){
            novaFigurinha.numero = Number(prompt('número de figuranha já existe, informe um novo'))
        }
        vetFigurinhas.push(novaFigurinha)
    }
}

let vendaFigurinha = (vetFigurinhas) => {
    if(vetFigurinhas === 0){
        alert(`Não há figurinhas cadastradas`)
    }
    else{
        let objVenda = {
            num_fig: Number(prompt('Número da figurinha')),
            id_alb: Number(prompt('id do álbum'))
        }
        let achou = false 
        for(let i=0;i<vetFigurinhas.length;i++){
            if (vetFigurinhas[i].idALbum == objVenda.id_alb 
                && vetFigurinhas[i].numero == objVenda.num_fig){
                achou = true 
                if (vetFigurinhas[i].qtde >= vetFigurinhas[i].qtde-1){
                    vetFigurinhas[i].qtde = vetFigurinhas[i].qtde - 1
                }
                else {
                    alert('Estoque insuficiente para esta venda')
                }
            }
        }
        if(!achou){
            alert('figurinha não encontrada')
        }
    }
}

let trocaFigurinha = (vetFigurinhas) => {
    if(vetFigurinhas === 0){
        alert(`Não há figurinhas cadastradas`)
    }
    else{
        let objTroca = {
            num_fig1: Number(prompt('Número da figurinha 1')),
            num_fig2: Number(prompt('Número da figurinha 2')),
            id_alb1: Number(prompt('id do álbum 1')),
            id_alb2: Number(prompt('id do álbum 2'))
        }
        let achou = false 
        for(let i=0;i<vetFigurinhas.length;i++){
            if (vetFigurinhas[i].idALbum == objTroca.id_alb1 && vetFigurinhas[i].idALbum == objTroca.id_alb2
                && vetFigurinhas[i].numero == objVenda.num_fig1 && vetFigurinhas[i].numero == objVenda.num_fig2){
                achou = true 
                if (vetFigurinhas[i].qtde >= vetFigurinhas[i].qtde-1){
                    vetFigurinhas[i].qtde = vetFigurinhas[i].qtde - 1
                }
                else {
                    alert('Estoque insuficiente para esta venda')
                }
            }
        }
        if(!achou){
            alert('figurinha ou álbum não encontrado')
        }
    }
}

let calcularQuantidade = (vetFigurinhas) => {
    if(vetFigurinhas === 0){
        alert(`Não há figurinhas cadastradas`)
    }else{
        let calculo = 0
        for (let i = 1; i < vetFigurinhas.length; i++) {
            calculo = calculo + vetFigurinhas.qtde
        }
        alert(`O total de figurinhas é de ${calculo}`)
    }
}

let mostrar = (vetAlbuns, vetFigurinhas) => {
    let maisVotado = vetFigurinhas[0];
    for (let i = 1; i < vetFigurinhas.length; i++) {
        if (vetFigurinhas[i].qtde > maisVotado.qtde) {
            maisVotado = vetFigurinhas[i] && vetAlbuns[i];
        }
    }
    alert(`O figurinha com maior quantidade é o  ${maisVotado.nome_fig}, com o número ${maisVotado.numero} 
    da empresa ${maisVotado.empresa} com o álbum ${maisVotado.nome}`);
}