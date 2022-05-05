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
    //se o indice definido pelo usuario for 0, o no inserido receve nulo no seu atributo proximo, 
    //que indica que não ha proximo elemento, em seguida o primeiro elemento se torna o elemento inserido.
    if (indice === 0){
        inserido.proximo = this.primeiro;
        this.primeiro = inserido;
    }
    //Senão, a variavel auxiliar alvo recebe os dados do primeiro item da lista e no laço for as variáveis vão
    //mudando de posição até o fim da lista, numa especie de "empurrão"
    else{
        let alvo = this.primeiro;
        for(let i = 0; i < indice - 1; i++)
        alvo = alvo.proximo;

        inserido.proximo = alvo.proximo;
        alvo.proximo = inserido;
    }
}


 remove(indice){
     //Diminui o tamanho da lista em um item
        this.tamanho--;
        //Se o indice for 0, o item removido recebe o valor nulo e o ponteiro primeiro 
        //recebe o endereço que era antes do item que estava na segunda posição
        if(indice === 0){
            let removido = this.primeiro;
            this.primeiro = removido.proximo;
            return removido;
        }
        //Senao a variavel auxiliar alvo recebe o endereço nulo e no laço for as variaveis vao trocando de posição
        //numa especie de puxão
        else{
            let alvo = this.primeiro;
            for(let i = 0; i < indice - 1; i++)
            alvo = alvo.proximo;

            let removido = alvo.proximo;
            alvo.proximo = removido.proximo;
            return removido.valor;
        }
    }

    //metodo ainda em fase de implementação, que tem como objetivo retornar a lista completa
    mostratudo(){
        for(let i = 0; i<this.tamanho; i++){
            return console.log(this.primeiro) 
        }
    }

}


//Objeto jogos é uma instancia da classe listaencadeada
let jogos = new listaencadeada();

//objeto chama o metodo insere algumas vezes e passa como parametro um dado, nesse caso o nome de um jogo, e a posição onde esse dado
//estara na lista encadeada
jogos.insere('GTA V', 0);
jogos.insere('CUPHEAD', 1);
jogos.insere('FIFA', 2);
jogos.insere('PES', 3);
jogos.insere('NFS', 4);
//objeto chama o metodo que gera no console do navegador a lista completa
jogos.mostratudo();