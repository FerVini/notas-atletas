
class Atleta {
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    
    calculaCategoria(){
        if(this.idade >= 9 && this.idade <= 11){
            return "Infantil"
        } else if(this.idade >= 12 && this.idade <= 13){
            return "Juvenil"
        } else if(this.idade >= 14 && this.idade <=15){
            return "Intermediário"
        } else if(this.idade >= 16 && this.idade <= 30){
            return "Adulto"
        }
        
        return "Sem categoria"
    }
    
    calculaIMC(){
        let imc = this.peso / (this.altura * this.altura)
        
        return imc
    }
    
    calcularMediaValida(){
        for (let i = 0; i < atletas.length; i++){
            let total = 0;
            
            atletas[i].notas.sort((a, b) => b - a);
            
            atletas[i].notas.slice(1, 4);
            
            atletas[i].notas.forEach(nota => {
                total = total + nota;
            });
            
            let media = total / atletas[i].notas.length
            
            return media
        };
        return media
    }
    
    obtemNomeAtleta(){
        return `Nome: ${this.nome}`
    }
    
    obtemIdadeAtleta(){
        return `Idade: ${this.idade}`
    }
    
    obtemPesoAtleta(){
        return `Peso: ${this.peso}`
    }
    
    obtemNotasAtletas(){
        return `Notas: ${this.notas.join(', ')}`
    }
    
    obtemCategoria(){
        return `Categoria: ${this.cartegoria}`
    }
    
    obtemIMC(){
        return `IMC: ${this.calculaIMC()}`
    }
    
    obtemMediaValida(){
        return `Média válida: ${this.calcularMediaValida()}`
    }
}
    const atleta = new Atleta("Cesar Abascal",
        30, 80, 1.70,
        [10, 9.34, 8.42, 10, 7.88]);

        console.log(atleta)