interface IFuncionario {
    registro: number;
    nome: string;
    getSalario:() => number;
}

class Gerente implements IFuncionario { 
    registro: number;
    nome: string;

    constructor(registro: number, nome: string) { 
        this.registro = registro;
        this.nome = nome;
    }

    getSalario = () => 20000;
}

let emp: IFuncionario = new Gerente(1, "Steve");
console.log(emp.getSalario());
