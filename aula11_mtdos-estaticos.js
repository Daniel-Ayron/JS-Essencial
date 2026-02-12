// AULA 11  Métodos Estáticos
// Métodos estáticos são aqueles que se relacionam com a classe no geral, não dependendo
// de um objeto. Portanto, esse método não é instanciado, ou seja, não possui 'new'.
// Por não se relacionar com o objeto, mas com a classe, métodos asssim não têm acesso a dados
// do construtor.

class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    // Esses aqui são métodos de instancia, aqueles que só funcionam para instâncias.
    // Instanciar é criar um novo objeto através do molde da classe, usando 'new'.
    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }

    // Através do termo static eu declaro um método estático.
    static trocarPilhas(){ 
        console.log('As pilhas de todos os controles foram trocadas!');
    }
    // Métodos estáticos se relacionam com a classe INTEIRA, e não são instanciados.
}

const controle1 = new ControleRemoto('LGTV');
controle1.aumentarVolume(); // método de instância.
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

ControleRemoto.trocarPilhas() // método estático.
// Como não usei uma instancia (new), esse método não tem acesso aos parâmetros da classe,
// é como se o construtor não existisse e portanto não existisse 'tv', nem 'volume'.