// Criando uma função para representar o herói
function Heroi(nome, idade, tipo) {
    this.nome = nome; // Nome do herói
    this.idade = idade; // Idade do herói
    this.tipo = tipo; // Tipo do herói
  
    // Função para o herói atacar
    this.atacar = function () {
      let ataque;
  
      // Verifica o tipo do herói para decidir o ataque
      if (this.tipo === "mago") {
        ataque = "magia";
      } else if (this.tipo === "guerreiro") {
        ataque = "espada";
      } else if (this.tipo === "monge") {
        ataque = "artes marciais";
      } else if (this.tipo === "ninja") {
        ataque = "shuriken";
      } else {
        ataque = "um ataque desconhecido";
      }
  
      // Exibe a mensagem
      console.log("O " + this.tipo + " atacou usando " + ataque + ".");
    };
  }
  
  // Criando heróis
  let heroi1 = new Heroi("Arthas", 30, "guerreiro");
  let heroi2 = new Heroi("Gandalf", 150, "mago");
  let heroi3 = new Heroi("Bruce", 40, "monge");
  let heroi4 = new Heroi("Naruto", 17, "ninja");
  
  // Fazendo os heróis atacarem
  heroi1.atacar(); // Guerreiro atacou usando espada
  heroi2.atacar(); // Mago atacou usando magia
  heroi3.atacar(); // Monge atacou usando artes marciais
  heroi4.atacar(); // Ninja atacou usando shuriken
  