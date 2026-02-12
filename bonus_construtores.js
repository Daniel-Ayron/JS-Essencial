class Personagem {
  constructor(nomeRecebido, vidaRecebida) {
    // 'this' diz: "No objeto que estou criando AGORA, 
    // defina a propriedade 'nome' como o valor que recebi"
    this.nome = nomeRecebido; 
    this.vida = vidaRecebida;
  }

  saudar() {
    console.log(`Olá, eu sou o ${this.nome}!`);
  }
}

const heroi = new Personagem('Jairo', 100);
const vilao = new Personagem('Goblin', 30);

heroi.saudar(); // O 'this' aqui entende que é o 'Jairo'
vilao.saudar(); // O 'this' aqui entende que é o 'Goblin'

// Classe: É o manual de instruções (o molde).
// Constructor: É o momento em que o objeto nasce. É aqui que você passa os dados iniciais.
// this: É o "eu" do objeto. Ele aponta para as propriedades do próprio 
// objeto que está executando o código.
// new: É o comando que ativa o molde para fabricar um objeto novo