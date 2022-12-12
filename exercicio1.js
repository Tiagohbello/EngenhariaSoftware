class Book {
    constructor(titulo, descricao, autor){
        this.titulo = titulo;
        this.descricao = descricao;
        this.autor = autor;
        this.id = this.titulo + '-' + this.autor ;
    }

}

class Biblioteca{
    constructor(){
        this.books = [];
    }

    addBook(livro){

        this.books.push(livro);
        return livro
    }

    getBooks(){
        if (this.books.length === 0){
            return('Não há livros na sua biblioteca ainda')
        }
        else{
            return(this.books)
        }

    }

    removeBookById(id){
        var livro = 0
        for (livro in this.books){
            if (this.books[livro].id === id){
                this.books.splice(livro, 1)
            }
        }
        return this.books
    }
    
    getBookById(id){
        var livro = 0
        for (livro in this.books){
            if (this.books[livro].id === id){
                return this.books[livro]
            }
            else{
                return 'Não foi encontrado nenhum livro com esse Id'
            }
        }

    }

    updateBookById(id, data){
        var armazena ;
        var livro = 0
        for (livro in this.books){
            if (this.books[livro].id === id){
                 armazena = this.books[livro]
            }
            
        }
        if (armazena){
            if (data['titulo']){
                armazena.titulo = data['titulo']
            }
            if (data['descricao']){
                armazena.descricao = data['descricao']
            }
            if (data['autor']){
                armazena.autor = data['autor']
            }
            return armazena
        }
        else{
            return 'Não foi encontrado nenhum livro com esse Id'
        }
        
        
        
    }
    


}


let hobbit = new Book('hobbit', 'numa toca no chao', 'tolkien');
let recursao = new Book('recurssao', 'efeito mandela', 'blake');
let jogosVorazes = new Book('jogos Vorazes', 'jovens se matando', 'collins');


let bookshelf = new Biblioteca();


console.log(bookshelf.addBook(hobbit));
console.log(bookshelf.addBook(recursao));
console.log(bookshelf.addBook(jogosVorazes));

let livros = bookshelf.getBooks()


console.log('#################################')

console.log(bookshelf.getBookById('jogos Vorazes'))

console.log('##################################')

console.log(bookshelf.updateBookById('hobbit-tolkien', {'descricao': 'o livro fala sobre a aventura de um hobbit', 'titulo': 'O hobbit'}))

