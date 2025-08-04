interface ILivro {
  titulo: string;
  autor: string;
  anoPublicacao: number;
}

function resumirLivro(livro: ILivro): string {
  return `O livro '${livro.titulo}' foi escrito por ${livro.autor} em ${livro.anoPublicacao}.`;
}

const livro: ILivro = {
  titulo: "Dom Casmurro",
  autor: "Machado de Assis",
  anoPublicacao: 1899
};

let fraseLivro = resumirLivro(livro);
console.log(fraseLivro); //O livro 'Dom Casmurro' foi escrito por Machado de Assis em 1899.