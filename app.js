const producto = 'Monitor 20 Pulgadas';   

//Eliminar el inicio 
console.log(producto.trimStart()); //Elimina todos los espacios en blanco del inicio 
console.log(producto.trimEnd()); //Elimina todos los espacios en blanco del final 

//Los métodos en javascript se pueden encadenar, es decir, colocar uno junto al otro
console.log(producto.trimStart()).trimEnd(); //Cortar en ambas direcciones 

// Slice permite extraer una parte de la cadena

console.log( producto.slice(0, 10)); //Iniciar en 0 y cortar hasta 10
console.log( producto.slice(8)); //Cortar desde el 8 hasta el fin
console.log( producto.slice(2, 10)); //Cortar desde el 2 hasta el 10
//Replace 
 
console.log(producto.replace("20", "24")); 
console.log(producto.replace('Pulgadas', '"'));

//.to Uppercase permite cambiar un texto a todo mayusculas

console.log(producto.toUpperCase());

const numero = 8;

for (let i = 1; i <= numero; i++){
    let num = "";
    for (let j = 1; j <= i; j++){
        num +="-";
    }
    console.log(num);
}

