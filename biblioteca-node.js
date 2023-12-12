const input = require('readline-sync');

class Livro {
    constructor(titulo, autor, anoLancamento, quantidade){
        this.titulo = titulo
        this.autor = autor
        this.anoLancamento = anoLancamento
        this.quantidade = quantidade
        this.disponibilidade = this.quantidade <= 0 ? 'Não Disponível':'Disponível';
    }

}


const livro1 = new Livro ('O Senhor dos Anéis', 'J.R.R. Tolkien', '1954', 34)
const livro2 = new Livro ('1984','George Orwell','1949', 23)
const livro3 = new Livro ('Dom Quixote', 'Miguel de Cervantes', 1605, 0)

const livros = [livro1, livro2, livro3];


const entrada = input.question('Bem Vindo a Biblioteca, digite "1" se voce for um cliente ou digite "2" se voce e um ADM: ') 

if (entrada == '1') {
    for(let i =0; i <= livros.length -1; i++){
        console.log(`\n${livros[i].titulo}`);
    }
    
    const selecaoUsuario = input.question('\ndigite o numero que representa o livro que voce deseja alugar?: ')
    console.log(`\nTitulo: ${livros[selecaoUsuario-1].titulo} \nAutor: ${livros[selecaoUsuario-1].autor} \nAno de Lançamento: ${livros[selecaoUsuario-1].anoLancamento} \nDisponibilidade: ${livros[selecaoUsuario-1].disponibilidade}`);
    
} 

else if (entrada == '2'){
    console.log('cadastrar livro');
}


