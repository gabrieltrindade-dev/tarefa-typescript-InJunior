interface IUsuario {
    nome: string;
    email: string;
    exibirInfo(): string;
}

const usuario1: IUsuario = {
    nome: 'João',
    email: 'joao@email.com',
    exibirInfo() {
        return `Nome: ${this.nome} - Email: ${this.email}`;
    }
};

const resultado = usuario1.exibirInfo();
console.log(resultado); //Nome: João - Email: joao@email.com