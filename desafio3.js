class Hero {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipo) {
        case "mago":
          ataque = "magia";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
        default:
          ataque = "ataque desconhecido";
      }
  
      console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso
  const heroi1 = new Hero("Herói Mágico", 25, "mago");
  const heroi2 = new Hero("Herói Guerreiro", 30, "guerreiro");
  const heroi3 = new Hero("Herói Monge", 28, "monge");
  const heroi4 = new Hero("Herói Ninja", 22, "ninja");
  
  heroi1.atacar(); // Saída esperada: "o mago atacou usando magia"
  heroi2.atacar(); // Saída esperada: "o guerreiro atacou usando espada"
  heroi3.atacar(); // Saída esperada: "o monge atacou usando artes marciais"
  heroi4.atacar(); // Saída esperada: "o ninja atacou usando shuriken"
  