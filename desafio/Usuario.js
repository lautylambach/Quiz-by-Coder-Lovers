       


class Usuario{
    constructor(nombre,apellido,libros,mascota){
        this.nombre=nombre
        this.apellido= apellido
        this.libros=libros
        this.mascotas=mascota
    }
    getFullName(fullName){
        return fullName =`${this.nombre} ${this.apellido}`
    }
    addMascota(nuevaMascota){
        this.mascotas.push(nuevaMascota)
    }
    countMascotas(){
       return this.mascotas.length
    }
    addBook(nombre,autor){
        const nuevoLibro ={nombre: nombre, autor:autor}
        this.libros.push(nuevoLibro)
    }
    getBooksNames(){
        
        for(let libro of this.libros) {
            nombresLibros.push(libro.nombre)
            
        }
        console.log(nombresLibros)
    }

}

const usuario1= new Usuario('Lautaro','Lambach', [{nombre:'bajo la misma estrella',autor:'Jhon green'}, {nombre:'ciudades de papel',autor:'jhon green'}],['perro','gato'])
const nombresLibros= []


console.log(usuario1.getFullName())


console.log(usuario1.mascotas)
usuario1.addMascota('pez dorado')
console.log(usuario1.mascotas)
console.log(usuario1.countMascotas())

console.table(usuario1.libros)
usuario1.addBook('buscando a alaska', 'jhon green')
console.table(usuario1.libros)
usuario1.getBooksNames()






