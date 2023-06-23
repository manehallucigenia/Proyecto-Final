var rows=5;
var columns=5;
var actual;
var otro;
var movimientos=0;


window.onload=function(){
    // inicializar el tablero 5x5
    for(let r=0; r<rows; r++){
        for(let c=0; c<columns; c++){
            let elemento=document.createElement("img");
            elemento.src="./images/blank.jpg";
            // Funcionalidad de arrastre
            elemento.addEventListener("dragstart",dragStart); //haga clic en la imagen para arrastrar
            elemento.addEventListener("dragover",dragOver); //arrastrar una imagen
            elemento.addEventListener("dragenter",dragEnter); //arrastrar una imagen a otra
            elemento.addEventListener("dragleave",dragLeave);//arrastrar una imagen lejos de otra
            elemento.addEventListener("drop",dragDrop); //colocar una imagen sobre otra
            elemento.addEventListener("dragend",dragEnd); //después de completar el arrastre
            document.getElementById("tablero").append(elemento);
        }
    }
    //piezas
    let piezas=[];
    for(let i=1; i<=rows*columns; i++){
        piezas.push(i.toString());
    }
    piezas.reverse();
    for(let i=0; i<piezas.length; i++){
        let j=Math.floor(Math.random()*piezas.length);
        //intercambio
        let tmp=piezas[i];
        piezas[i]=piezas[j];
        piezas[j]=tmp;
    }
    for(let i=0; i<piezas.length; i++){
        let elemento=document.createElement("img");
        elemento.src="./images/" + piezas[i] + ".jpg";
        //funcionalidad de arrastre
        elemento.addEventListener("dragstart",dragStart);
        elemento.addEventListener("dragover",dragOver);
        elemento.addEventListener("dragenter",dragEnter);
        elemento.addEventListener("dragleave",dragLeave);
        elemento.addEventListener("drop",dragDrop);
        elemento.addEventListener("dragend",dragEnd);
        document.getElementById("piezas").append(elemento);
    }
}
    //arrastrar elementos
    function dragStart(){
        actual = this; //imagen en la que se hizo clic para arrastrar
    }
    function dragEnter(e){
        e.preventDefault();
    }
    function dragLeave(){


    }
    function dragDrop(){
        otro=this; //imagen que se esta dejando caer
    }
    function dragEnd(){
        if(actual.src.includes("blank")){
            return;
        }
        let actualImg=actual.src;
        let otroImg=otro.src;
        actual.src=otroImg;
        otro.src=actualImg;
        movimientos+=1;
        document.getElementById("movimientos").innerText=movimientos;
    }


