/* 1. Realizar un programa que dado 2 números imprima por consola si el primer numero es
 mayor que el segundo. */

function esMayor(num1, num2){
    if (num1>num2){
        console.log("El primer numero es mayor que el segundo")
    }else{
        console.log("El primer numero no es mayor que el segundo")
    }
}

esMayor(5,4)
esMayor(4,5)
esMayor(4,4) 

// 2. Realizar un programa que dado 2 números imprima por consola si los numeros son
// iguales o si son diferentes.


function sonIguales(num1, num2){
    if (num1===num2){
        console.log("Los números son iguales")
    }else{
        console.log("Los números son diferentes")
    }
}

sonIguales(5,5)
sonIguales(1,2)

// 3. Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros
// es el mas grande o si son iguales.

function cualEsMasGrande(num1, num2){
    if(num1>num2){
        console.log(num1 + " es el número más grande")
    }else if(num2>num1){
        console.log(num2 + " es el número más grande")
    }else{
        console.log("Los números son iguales")
    }
}

cualEsMasGrande(5, 1)
cualEsMasGrande(10, 3)
cualEsMasGrande(2, 2)

// 4. Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el mas
// chico.

function cualEsElMasChico(num1,num2,num3){
    if(num1<num2 && num1<num3){
        console.log(`${num1} es el numero más chico.`)
    }else if(num2<num1 && num2<num3){
        console.log(`${num2} es el numero más chico.`)
    }else if(num3<num1 && num3<num2){  
        console.log(`${num3} es el numero más chico.`)
    }else{
        console.log("Los números son iguales")
    }
}

cualEsElMasChico(1,2,3)
cualEsElMasChico(6,4,5)
cualEsElMasChico(9,8,7)
cualEsElMasChico(7,7,7)

// 5. Realizar un programa que dado 2 objetos representando personas con las propiedades
// nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual
// es la de mayor edad.

function cualEsMasAltayEdad(persona1, persona2){
    if(persona1.altura>persona2.altura){
        console.log(`${persona1.nombre} es más alt@ que ${persona2.nombre}`)
    }else if(persona2.altura>persona1.altura){
        console.log(`${persona2.nombre} es más alt@ que ${persona1.nombre}`)
    }else if(persona1.altura==persona1.altura){
        console.log(`${persona2.nombre} y ${persona1.nombre} miden lo mismo`)
    }

    if(persona1.edad>persona2.edad){
        console.log(`${persona1.nombre} es mayor que ${persona2.nombre}`)
    }else if(persona2.edad>persona1.edad){
        console.log(`${persona2.nombre} es mayor que ${persona1.nombre}`)
    }else if(persona1.edad==persona1.edad){
        console.log(`${persona2.nombre} y ${persona1.nombre} tienen la misma edad`)
    }
}
let persona1 = {
    nombre: "Diego",
    edad: 27,
    altura: 1.70
}

let persona2 = {
    nombre: "Paula",
    edad: 25,
    altura: 1.65
}

cualEsMasAltayEdad(persona1, persona2)

// 6. Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión
// y permita determinar si estas capacitado para conducir. La persona deberá cumplir con
// una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como
// mínimo.


function puedeConducir(){
    let nombre = prompt("Por favor ingresar su nombre:")
    let edad = prompt("Por favor ingresar su edad:")
    let altura = prompt("Por favor ingresar su altura (en centimetros):")
    let vision = prompt("De 1 a 10, ¿Cómo considera su vision?")

    if(edad>=18 && altura>=150 && vision>=8){
        console.log(`${nombre}, estas capacitado para conducir`)
    }else{
        console.log(`${nombre}, no estas capacitado para conducir`)
    }
}

// Para probar la funcion por favor quitar el comentario
// puedeConducir()    


// 7. Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip
//     o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu
//     mismo nombre tienen ingreso libre así como también los que posean un pase vip,
//     mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en
//     caso afirmativo mostrar mismo mensaje de bienvenida. Y por ultimo de no tener el
//     mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso
//     afirmativo solicitar dinero disponible, si posee $1000 o mas, mostrar mensaje de venta
//     de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en
//     caso contrario a no querer comprar, mostrar mensaje de despedida.

function ingresar(){
    let nombre = prompt("Por favor ingresar su nombre:")
    let pase = prompt("Por favor ingrese el tipo de su pase: (normal o vip)")
    let posee = prompt("Posee ya una entrada?")

    if(nombre == "Diego" || pase == "vip"){
        console.log("Bienvenido, puede pasar")
    }else if(posee == "si"){
        let desea = prompt("Desea utilizar su entrada?")
        if(desea=="si"){
            console.log("Bienvenido, puede pasar") 
        }else{
            console.log("Puede utilizar su entrada cuando usted desee") 
        }
    }else{
        let deseaComprar= prompt("¿Desea comprar una entrada?")
        if(deseaComprar=="si"){
            let cantidadDinero = prompt("¿Cuanto dinero tiene disponible?")
            if(cantidadDinero>= 1000){
                console.log("Gracias por su compra, bienvenido, disfrute el evento");
            }else{
                console.log("La venta no se ha podido realizar")
            }
        }else{
            console.log("Hasta luego, que tenga un buen dia");
        }
    }
}
// Para probar la funcion por favor quitar el comentario
// ingresar() 


// 8. Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable
// llamada numeroIncognita y que permita en 3 intentos adivinar el numero. El usuario
// deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá
// guardar en una variable llamada numeroIngresado, y en cada intento deberás
// mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a
// intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de
// adivinar, un mensaje que diga: “Ganaste, haz adivinado el numero.” No te preocupes si
// usas mucho código repetido, mas adelante veraz como realizar este juego de manera
// mas eficiente.

function adivinaElNumero() {
    let numeroIncognita = Math.ceil(Math.random()*10) 
    console.log(numeroIncognita);
    let numeroIngresado = prompt(`Adivina el numero!
    Ingresa un numero entre 1 y 10:`)
    

    if(numeroIncognita==numeroIngresado){
        console.log("Ganaste, haz adivinado el numero.")
    }else if(numeroIngresado>numeroIncognita){
        numeroIngresado=prompt("“Intento 2: el numero ingresado es mayor, vuelve a intentarlo:”")
        if (numeroIncognita==numeroIngresado) {
            console.log("Ganaste, haz adivinado el numero.")
        }else if (numeroIngresado>numeroIncognita) {
            numeroIngresado=prompt("“Intento 3: el numero ingresado es mayor, vuelve a intentarlo:”")
            if (numeroIncognita==numeroIngresado) {
                console.log("Ganaste, haz adivinado el numero.")
            }else{
                console.log(`Perdiste, el numero era ${numeroIncognita}`)
            }
        }else if (numeroIngresado<numeroIncognita) {
            numeroIngresado=prompt("“Intento 3: el numero ingresado es menor, vuelve a intentarlo:”")
            if (numeroIncognita==numeroIngresado) {
                console.log("Ganaste, haz adivinado el numero.")
            }else{
                console.log(`Perdiste, el numero era ${numeroIncognita}`)
            }
        }
    }else if(numeroIngresado<numeroIncognita){
        numeroIngresado=prompt("“Intento 2: el numero ingresado es menor, vuelve a intentarlo:”")
        if (numeroIncognita==numeroIngresado) {
            console.log("Ganaste, haz adivinado el numero.")
        }else if (numeroIngresado>numeroIncognita) {
            numeroIngresado=prompt("“Intento 3: el numero ingresado es mayor, vuelve a intentarlo:”")
            if (numeroIncognita==numeroIngresado) {
                console.log("Ganaste, haz adivinado el numero.")
            }else{
                console.log(`Perdiste, el numero era ${numeroIncognita}`)
            }
        }else if (numeroIngresado<numeroIncognita) {
            numeroIngresado=prompt("“Intento 3: el numero ingresado es menor, vuelve a intentarlo:”")
            if (numeroIncognita==numeroIngresado) {
                console.log("Ganaste, haz adivinado el numero.")
            }else{
                console.log(`Perdiste, el numero era ${numeroIncognita}`)
            }
        }
    }
}

// Para probar la funcion por favor quitar el comentario
// adivinaElNumero()


// 9. Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12
//     años), adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de
//     45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje
//     preguntando si en realidad tiene esa edad.


function queEres(){
    let edad = prompt("Por favor ingresa tu edad:")

    if (edad<=12) {
        console.log("Eres un infante")
    } else if (edad>12 && edad<=18) {
        console.log("Eres un adolescente")
    } else if (edad>18 && edad<=45) {
        console.log("Eres un adulto joven")
    } else if (edad>45 && edad<100) {
        console.log("Eres un anciano")
    }else {
        console.log("¿En realidad tienes esa edad?")
    }
}
 // Para probar la funcion por favor quitar el comentario
// queEres()


// 10. Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2
// jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de
// algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho
// trampa.

function piedraPapelOTijera() {
    let jugador1 = prompt("Jugador 1: 1, 2 3! ¿Piedra, papel o tijera?")
    let jugador2 = prompt("Jugador 2: 1, 2 3! ¿Piedra, papel o tijera?")

    if(jugador1==jugador2){
        return "Empate"
    }else if (jugador1=="piedra"&&jugador2=="tijera" || jugador1=="papel"&&jugador2=="piedra" || jugador1=="tijera"&&jugador2=="papel") {
        return "Gana el jugador 1"
    }else if (jugador2=="piedra"&&jugador1=="tijera" || jugador2=="papel"&&jugador1=="piedra" || jugador2=="tijera"&&jugador1=="papel") {
        return "Gana el jugador 2"
    }else{
        return "Uno de los jugadores ha hecho trampa"
    }
}

 // Para probar la funcion por favor quitar el comentario
// console.log(piedraPapelOTijera())


// 11. Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar
// por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de color,
// Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol, Rojo:
// El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor: Excelente
// elección, no lo teníamos pensado.

function colores(color){

    switch (color) {
        case "Blanco":
            console.log("Falta de color") 
            break;
        case "Negro":
            console.log("Falta de color") 
            break;
        case "Verde":
            console.log("El color de la naturaleza") 
            break;
        case "Azul":
            console.log("El color del agua") 
            break;
        case "Amarillo":
            console.log("El color del sol") 
            break;
        case "Rojo":
            console.log("El color del fuego") 
            break;
        case "Marron":
            console.log("El color de la tierra") 
            break;
        default: 
            console.log("Excelente elección, no lo teníamos pensado.")
            break;
    }

}

colores("Aguamarina")

// 12. Realizar un programa que permita el ingreso de 2 valores numéricos y una operación.
// Según sea la operación ingresada (suma, resta, multiplicación, división) el programa
// deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber
// elegido división realizar la operación siempre que sea posible o mostrar un mensaje de
// ERROR si el divisor ingresado fue 0.


function calculadora(num1, num2, operacion){
    if (operacion=="suma") {
        return num1+num2;
    }
    if (operacion=="resta") {
        return num1-num2
    }
    if (operacion=="multiplicacion") {
        return num1*num2
    }
    if (operacion="division" && num2 != 0) {
        return num1/num2
    }else if (operacion="division" && num2 == 0) {
        return "ERROR"
    }
}

console.log(calculadora(5,5,"suma"))
console.log(calculadora(5,5,"resta"))
console.log(calculadora(5,5,"multiplicacion"))
console.log(calculadora(5,5,"division"))
console.log(calculadora(5,0,"division"))


// 13. Crear un programa que permita ingresar todos los datos de tu documento nacional de
// identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y
// pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni
// con todos los datos ingresados y mostrarlos por consola con console.table() mas un
// mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos,
// mostrar un mensaje que diga: vuelva a intentarlo en 1 mes.


function datos(){
    let numeroCedula = prompt("Numero de cédula:")
    let nombres = prompt("Nombre(s):")
    let apellidos = prompt("Apellidos:")
    let nacimiento = prompt("Fecha de nacimiento")
    let lugar = prompt("Lugar de Nacimiento")
    let estatura= prompt("Estatura:")
    let grupoSRH= prompt("Grupo sanguineo - RH:")
    let sexo = prompt("Sexo:")

    let correctos = prompt(`Numero de cédula: ${numeroCedula}
Nombre(s): ${nombres}
Apellidos: ${apellidos}
Fecha de nacimiento: ${nacimiento}
Lugar de nacimiento: ${lugar}
Estatura: ${estatura}
Grupo sanguineo - RH: ${grupoSRH}
Sexo: ${sexo}
        
¿Son correctos estos datos?`)

        if (correctos=="si") {
            let DNI = {
                "Numero de cédula": numeroCedula,
                "Nombre(s)": nombres,
                "Apellidos": apellidos,
                "Fecha de nacimiento": nacimiento,
                "Lugar de nacimiento": lugar,
                "Estatura": estatura,
                "Grupo sanguineo - RH": grupoSRH,
                "Sexo": sexo
            }
            console.table(DNI)
            console.log("El registro ha sido exitoso");
        }else{
            console.log("Por favor vuelva a intentarlo en 1 mes.")
        }
}

datos()