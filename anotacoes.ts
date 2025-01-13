const impresso = (target: any, membro: string) => {
   console.log(membro);
};

class Produto {
   @impresso
   private nome: string = "Doug";
   @impresso
   getNome = () => this.nome;
}

// A decoração é definida por meio de uma função, na qual o target recupera o elemento de código que foi decorado, e membro se refere ao nome desse elemento. Internamente, o que temos é a simples impressão do nome de uma propriedade ou método anotado.

// Em seguida, temos uma classe com o atributo nome e o método getNome, ambos decorados com impresso. Sempre que o código for incluído em algum projeto, os nomes do atributo e do método serão impressos no console durante a execução.
