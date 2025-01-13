//Elas devem indicar o tipo de retorno ou utilizar void quando não ocorre o retorno de um valor.




function digaAlo(): void {
   console.log("Alo mundo");
}

function somarV1(x: number, y: number): number {
   return x + y;
}

let somarV2 = (x: number, y: number): number => {
   return x + y;
}

let somarV3 = (x: number, y: number) => x + y;
