class Prestamo{

    constructor(usuario, monto, cuotas){
        this.usuario = usuario;
        this.monto = monto;
        this.cuotas = cuotas;

    }
    get valor_total_cuotas(){
        console.log("el valor de sus cuotas sería de:", (monto / cuotas));

    }

    get valor_intereses(){
       if(cuotas == 3){
        console.log("el valor de sus intereses sería del 5%, quedando en cuotas de ", (total * 0.5));
       }
       else if(cuotas == 6){
        console.log("el valor de sus intereses sería del 7%, quedando en cuotas de ", (total * 0.7))
       }
       else if(cuotas == 9){
        console.log("el valor de sus intereses sería del 9%, quedando en cuotas de ", (total * 0.9))
       }
       else{
        console.log("error en el valor de las cuotas")
       }

       
    }

}

let lista_prestamos = [];

for(let i = 0; i < 3; i ++){
    let usuario = prompt("¿Es un usuario registrado en nuestro sitio?");
    let monto = parseInt(prompt("¿cual es el monto que desea?"));
    let cuotas = parseInt(prompt("elija entre 3, 6 y 9 cuotas"));
    let total = new Prestamo(usuario , monto , cuotas);

    lista_prestamos.push(total);

}

console.log(lista_prestamos);


function mayores_prestamos(total){
    return total.monto >= 100000
}


let prestamo_mayor = lista_prestamos.filter(mayores_prestamos);
console.log("los mayores prestamos de hoy serían " , prestamo_mayor);

/*no pude añadir a tiempo el resto de métodos como calcular intereses de acuerdo a las cuotas, tuve muy poco tiempo por trabajo y otras cuestiones personales, mil disculpas! me enfoque realmente en añadir arrays y en modificarlos de acuerdo al filter*/