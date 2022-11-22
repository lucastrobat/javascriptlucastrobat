/*se iran agregando los productos a un array de objetos, almacenados de forma local*/
let carro = [];

let btn_compra = document.querySelectorAll(".botoncompra");

console.log(btn_compra)

for(let boton of btn_compra){
    boton.addEventListener("click" , agregar_a_carrito)

}
/*la mayor parte de la entrega pasa a través de este evento click, sería el eje principal de la funcionalidad añadida al fragmento de mi e-commerce*/
function agregar_a_carrito(e){
    

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;

    console.log(hijo);
    console.log(padre);
    console.log(abuelo);

    let nombre_producto = padre.querySelector("h3").textContent;
    let precio_producto = padre.querySelector("p").textContent;
    let img_producto = padre.querySelector("img").src;

  

    let producto = {
        nombre: nombre_producto,
        precio: precio_producto,
        img: img_producto,
        cantidad: 1

    }

    carro.push(producto);
    

    let carro_JSON = JSON.stringify(carro);
    /*console.log(carro_JSON);*/

    localStorage.setItem("carrito" , carro_JSON);

    let recuperar_carro = localStorage.getItem("carrito");
    recuperar_carro = JSON.parse(recuperar_carro);
    console.log(recuperar_carro);

    mostrar_carrito(producto);

}


/*se guarda el array en local storage, se convierte, se rehusa para el carrito de productos en forma de display, con interactividad de poder borrarlo*/
function mostrar_carrito( producto ){

    let fila = document.createElement("tr");
    fila.innerHTML = `<td><img src="${producto.img}"></td>
                      <td>${producto.nombre}</td>
                      <td>${producto.cantidad}</td>
                      <td>${producto.precio}</td>
                      <td><button class="btn btn-danger borrar_elemento">Borrar</td>`;

    console.log (fila);

    let tabla = document.getElementById("tbody");

    tabla.append(fila);
    
    let btn_borrar = document.querySelectorAll(".borrar_elemento");


    for( let boton of btn_borrar){

        boton.addEventListener("click" , borrar_producto);
    }


}
function borrar_producto(e){

    
    let borrar = e.target.parentNode.parentNode;

    borrar.remove();

}
/*se iran incorporando todas las demas pages de la página web Gaming Spot para la siguiente entrega, junto con funcionalidades como registro de usuario, filtros de búsqueda, sistema de búsqueda, descuentos y demás*/