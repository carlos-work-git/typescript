console.log("From ./modulo_5_classes/classes.js")
console.log('"sourceMap": true" on tsconfig.json')
console.log('')

class Data {

    dia: number
    public mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }

}

const aniversario = new Data(3,11,1991)
console.log(aniversario)

const casamento = new Data // posso omitir os "()"
casamento.ano = 2017
console.log(casamento)



class DataEsperta {

    constructor(
        public dia: number = 1, 
        public mes: number = 1, 
        public ano: number = 1970 ) {
    
    }

}

const aniversarioEsperto = new DataEsperta(3,11,1991)
console.log(aniversarioEsperto)

const casamentoEsperto = new DataEsperta // posso omitir os "()"
casamentoEsperto.ano = 2017
console.log(casamentoEsperto)

/* 
Desafio Produto
Atributos: nome, preco e desconto.
Criar o construtor
Obs 1.: Desconto é opcional (valor padrão 0)
Obs 2.: Criar dois produtos: passando 2 e 3 params
*/

console.log('')

class Produto {
    constructor(
        public nome: string,
        public preco: number,
        public desconto: number = 0,
    ) {}

    // Criar método precoComDesconto
    // Quais são os parâmetros e o retorno?
    // Alterar método resumo para mostrar o preço com desconto

    public resumo(): string {
        return `Produto: "${this.nome}" custa R$${this.precoComDesconto()}, ${this.desconto*100}% Off`
    }

    public precoComDesconto = () => (this.preco - (this.desconto * this.preco)).toFixed(2)

}

const manteiga = new Produto("Margarina Qualy", 6)
console.log(manteiga.resumo())
console.log('')

const geladeira = new Produto("Brastemp", 3000, 0.1)
console.log(geladeira.resumo())
console.log(geladeira.precoComDesconto())

console.log('')


class Carro {
    private velocidadeAtual: number = 0

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 200
        ){}
    
    private alterarVelocidade(delta: number): number {
       
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima
    
        if(velocidadeValida) {
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }

        return this.velocidadeAtual
    }

    public acelerar(): number {
        return this.alterarVelocidade(5)
    }

    public frear(): number {
        return this.alterarVelocidade(-5)
    }

}

const carro1 = new Carro('ford', 'ka', 185)

Array(50).fill(0).forEach(()=>carro1.acelerar())
console.log("Velocidade Atual: " + carro1.acelerar())

Array(20).fill(0).forEach(()=>carro1.frear())
console.log("Velocidade Atual: " + carro1.frear())