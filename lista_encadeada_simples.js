//estrutura que "cria" um tipo de dado chamado "no" que possui duas informações, valor e proximo
class no{
    constructor(valor){
        //valor representa o dado a ser armazenado
        this.valor = valor;
        //proximo armazana a informação da posição do proximo no da lista
        this.proximo = null;
    }
}

//classe que define os metodos de manipulação da lista encadeada
class listaencadeada{
    constructor(){
        //o tamanho da lista inicia com 0 itens
        this.tamanho = 0;
        //o primeiro item no inicio é null pois não ha dados ainda
        this.primeiro = null;
    }


//método insere um nó na lista passando como parametro o dado e a posição
 insere(valor, indice){
    //aumenta o tamamnho da lista em um item
    this.tamanho++;
    //objeto criado a partir da clasee no
    let inserido = new no(valor);
    //se o indice definido pelo usuario for 0, 
    if (indice === 0){
        inserido.proximo = this.primeiro;
        this.primeiro = inserido;
    }else{
        let alvo = this.primeiro;
        for(let i = 0; i < indice - 1; i++)
        alvo = alvo.proximo;

        inserido.proximo = alvo.proximo;
        alvo.proximo = inserido;
    }
}


 remove(indice){
        this.tamanho--;

        if(indice === 0){
            let removido = this.primeiro;
            this.primeiro = removido.proximo;
            return removido;
        }else{
            let alvo = this.primeiro;
            for(let i = 0; i < indice - 1; i++)
            alvo = alvo.proximo;

            let removido = alvo.proximo;
            alvo.proximo = removido.proximo;
            return removido.valor;
        }
    }


    mostratudo(){
        for(let i = 0; i<this.tamanho; i++){
            return console.log(this.primeiro) 
        }
    }

}



let jogos = new listaencadeada();

jogos.insere('GTA V', 0);
jogos.insere('CUPHEAD', 1);
jogos.insere('FIFA', 2);
jogos.insere('PES', 3);
jogos.insere('NFS', 4);
jogos.mostratudo();