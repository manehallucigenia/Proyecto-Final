let botones = document.querySelector('.botones');
let boton = document.querySelectorAll('span');
let botonCambiar = document.querySelector('.botonCambiar');
let valor = document.getElementById('valor');
let body = document.querySelector('body');

for(let i=0; i<boton.length; i++){
    boton[i].addEventListener("click", function(){
        if(this.innerHTML=="="){
            valor.innerHTML=eval(valor.innerHTML);
        }
        else{
            if(this.innerHTML=="Limpiar"){
                valor.innerHTML="";
            }
            else{
                valor.innerHTML+=this.innerHTML;
            }
        }
    })
}

botonCambiar.onclick=function(){
    body.classList.toggle('oscuro');
}