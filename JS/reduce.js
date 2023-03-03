function calcularValorTotalLivrosDisponiveis(livros){
    return livros.reduce((acomulador, livro) => acomulador + livro.preco, 0).toFixed(2)
}