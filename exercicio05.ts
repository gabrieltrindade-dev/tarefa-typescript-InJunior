type Genero = 'masculino' | 'feminino';

interface IPessoa {
  nome: string;
  idade: number;
  genero: Genero;
}

function apresentarPessoa(pessoa: IPessoa): string {
  return `${pessoa.nome} tem ${pessoa.idade} anos e se identifica como ${pessoa.genero}.`;
}

const pessoa1: IPessoa = {
  nome: "Maria",
  idade: 30,
  genero: "feminino"
};

const apresentacao = apresentarPessoa(pessoa1);
console.log(apresentacao); //Maria tem 30 anos e se identifica como feminino.
