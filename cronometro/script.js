let hr=min=seg=ms="0" + 0, iniciarTempoizador;

const botoniniciar=document.querySelector(".iniciar"),
botondetener=document.querySelector(".detener"),
botonreiniciar=document.querySelector(".reiniciar");

botoniniciar.addEventListener("click", iniciar);
botondetener.addEventListener("click", detener);
botonreiniciar.addEventListener("click", reiniciar);

function iniciar(){
    botoniniciar.classList.add("active");
    botondetener.classList.add("stopActive");
    iniciarTempoizador=setInterval(() => {
        ms++;
        ms=ms < 10 ? "0" + ms : ms;
        if(ms ==100){
            seg++;
            seg=seg < 10 ? "0" + seg : seg;
            ms="0" +0;
        }
        if(seg == 100){
            min++;
            min=min < 10 ? "0" + min : min;
            seg="0" +0;
        }
        if(hr == 100){
            hr++;
            hr=hr < 10 ? "0" + hr : hr;
            min="0" +0;
        }
        ponerValor();

    },10);
}
function detener(){
    botoniniciar.classList.remove("active");
    botoniniciar.classList.remove("stopActive");
    clearInterval(iniciarTempoizador);
}
function reiniciar(){
    botoniniciar.classList.remove("active");
    botoniniciar.classList.remove("stopActive");
    clearInterval(iniciarTempoizador);
    hr=min=seg=ms="0" + 0;
    ponerValor();
}
function ponerValor(){
    document.querySelector('.milisegundos'). innerHTML=ms;
    document.querySelector('.segundos'). innerHTML=seg;
    document.querySelector('.minuto'). innerHTML=min;
    document.querySelector('.hora'). innerHTML=hr;
}