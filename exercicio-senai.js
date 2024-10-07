let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

function calculaMédia(atletas){
  
  for (let i = 0; i < atletas.length; i++){
    let total = 0;

    atletas[i].notas.sort((a, b) => b - a);

    atletas[i].notas.slice(1, 4);

    atletas[i].notas.forEach(nota => {
      total = total + nota;
    });

    let todasAsNotas = atletas[i].notas.join(`, `)
    let media = total / atletas[i].notas.length

    console.log(`Atleta: ${atletas[i].nome}`);
    console.log(`Notas Obtidas: ${todasAsNotas}`)
    console.log(`Média Válida: ${media}`)
    console.log("---------------")
  };
};

console.log(calculaMédia(atletas));