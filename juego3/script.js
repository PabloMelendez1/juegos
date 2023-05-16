
let arrayPalabras =["COMUNICACIÓN", "LENGUAJE", "LENGUA", "HABLA", "FONEÉTICA", "HIATO"];
let ayudas = [
    "Es el proceso de transmisión de información.",
    "Es la capacidad o facultad desarrollada en el ser humano para poder comunicarse.",
    "Se refiere al habla que los humanos usamos para la comunicación.",
    "Es el acto en el cual a través de actos de defonación o escritura utiliza la lengua para comunicarse.",
    "Estudia los sonidos del habla humana y sus características acústicas y articulatorias.",
    "Es una combinación de dos vocales que se pronuncian por separado en una palabra"
]
let cantPalabrasJugadas = 0;


let intentosRestantes = 5;

let posActual;

let arrayPalabraActual = [];

let cantidadAcertadas = 0;

let divsPalabraActual = [];


let totalQueDebeAcertar;


function cargarNuevaPalabra(){
  
    cantPalabrasJugadas++;
    if(cantPalabrasJugadas>6){
     
        arrayPalabras =["COMUNICACIÓN", "LENGUAJE", "LENGUA", "HABLA", "FONÉTICA", "HIATO"];
        ayudas = [
            "Es el proceso de transmisión de información.",
            "Es la capacidad o facultad desarrollada en el ser humano para poder comunicarse.",
            "Se refiere al habla que los humanos usamos para la comunicación.",
            "Es el acto en el cual a través de actos de defonación o escritura utiliza la lengua para comunicarse.",
            "Estudia los sonidos del habla humana y sus características acústicas y articulatorias.",
            "Es una combinación de dos vocales que se pronuncian por separado en una palabra"
        ]
    }

    
    posActual = Math.floor(Math.random()*arrayPalabras.length);

    
    let palabra = arrayPalabras[posActual];
    totalQueDebeAcertar = palabra.length;
    cantidadAcertadas = 0;

    arrayPalabraActual = palabra.split('');

  
    document.getElementById("palabra").innerHTML = "";
    document.getElementById("letrasIngresadas").innerHTML = "";

 
    for(i=0;i<palabra.length;i++){
        var divLetra = document.createElement("div");
        divLetra.className = "letra";
        document.getElementById("palabra").appendChild(divLetra);
    }

    divsPalabraActual = document.getElementsByClassName("letra");

    intentosRestantes = 5;
    document.getElementById("intentos").innerHTML = intentosRestantes;

    document.getElementById("ayuda").innerHTML = ayudas[posActual];

   
    arrayPalabras.splice(posActual,1);
    ayudas.splice(posActual,1);

}


cargarNuevaPalabra();


document.addEventListener("keydown", event => {
   
    if(isLetter(event.key)){
       
        let letrasIngresadas = document.getElementById("letrasIngresadas").innerHTML;
        letrasIngresadas = letrasIngresadas.split('');
        
       
        if(letrasIngresadas.lastIndexOf(event.key.toUpperCase()) === -1){
           
            let acerto = false;

           
            for(i=0;i<arrayPalabraActual.length;i++){
                if(arrayPalabraActual[i] == event.key.toUpperCase()){//acertó
                    divsPalabraActual[i].innerHTML = event.key.toUpperCase();
                    acerto = true;
                   
                    cantidadAcertadas = cantidadAcertadas + 1;
                }
            }
        
            if(acerto==true){
                
                if(totalQueDebeAcertar == cantidadAcertadas){
                  
                    for(i=0;i<arrayPalabraActual.length;i++){
                        divsPalabraActual[i].className="letra pintar";
                    }
                }
            }else{
              
                intentosRestantes = intentosRestantes - 1;
                document.getElementById("intentos").innerHTML = intentosRestantes;

                if(intentosRestantes<=0){
                    for(i=0;i<arrayPalabraActual.length;i++){
                        divsPalabraActual[i].className="letra pintarError";
                    }
                }
            }

            document.getElementById("letrasIngresadas").innerHTML += event.key.toLocaleUpperCase() + " - ";
        }
    }
});

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}