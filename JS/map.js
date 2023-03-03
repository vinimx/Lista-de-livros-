function aplicarDesconto(livros){
    const porcentagemDesconto = 0.3
    desconto = livros.map(livro =>{
        return {...livro, preco: livro.preco - (livro.preco * porcentagemDesconto)}
    })
    return desconto
}