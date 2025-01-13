class Pessoa{
   private registro: number;
   protected nome: string;
   constructor(registro: number, nome: string){
      this.registro = registro;
      this.nome = nome;
   }
   exibir(): void {
      console.log(this.registro + ": " + this.nome);
   }    	
}

class Profissional extends Pessoa{
   private profissao: string;
   constructor(registro: number, nome: string, profissao: string){
      super(registro,nome);
      this.profissao = profissao;
   }
   exibir(): void{
      super.exibir();
      console.log("Trabalha como " + this.profissao)
   }
}

let p = new Profissional(1,"Ana","Balconista");
p.exibir();
