type StatusRequisicao = 'sucesso' | 'erro' | 'carregando';

function mostrarMensagemStatus(status: StatusRequisicao): string {
  if (status === 'sucesso') {
    return 'Sucesso no carregamento de dados.';
  } 
  else if (status === 'erro') {
    return 'Erro no carregamento de dados.';
  } 
  else {
    return 'Aguarde... carregando dados.';
  }
}

const statusAtual: StatusRequisicao = "carregando";
const mensagem = mostrarMensagemStatus(statusAtual);
console.log(mensagem); //Aguarde... carregando dados.