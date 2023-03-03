let livros = []
const apiBase = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivrosDaApi()

async function getBuscarLivrosDaApi(){
    const res = await fetch(apiBase)
    livros = await res.json()
    let desconto = aplicarDesconto(livros)
    exibirLivros(livros)
}