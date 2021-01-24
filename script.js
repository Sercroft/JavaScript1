class Libros{
    constructor(titulo, autor, año, genero){
        this.titulo = titulo
        this.autor = autor
        this.año = año
        this.genero = genero
    }

    info(){
        return(`Título: ${this.titulo}, Autor: ${this.autor}, Año: ${this.año} y Género: ${this.genero}`)
    }

    getAutor(){
        return this.autor
    }

    getGenero(){
        return this.genero
    }
}

let libros = []
while(libros.length<3){
    let titulo = prompt('Título:')
    let autor  = prompt('Autor:')
    let año    = prompt('Año:')
    let genero = prompt('Género:').toLowerCase()

    if(titulo != '' && autor != '' && !isNaN(año) && año.length== 4 && (genero == 'aventura' || genero == 'terror' || genero == 'fantasía')){
        libros.push(new Libros(titulo, autor, año, genero)) //Introducir datos a un array
    }
}

const mostrar_libros = () =>{
    console.log(libros)
}


const mostrar_autores = () =>{
   let autores = [] 
   for(const libro of libros){
        autores.push(libro.getAutor())
    }
    console.log(autores.sort())//ordenar alfabeticamente un array
}

const mostrar_genero = () =>{
    const genero = prompt('Digita el género a buscar:')
    for(const libro of libros){
       if(libro.getGenero() == genero){
            console.log(libro.info())
       }
    }
}

mostrar_libros()
mostrar_autores()
mostrar_genero()
