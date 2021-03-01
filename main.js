const salida=document.querySelector('.pantalla');
const resultado = document.querySelector(".respuesta");

let operador="";
let cont = 0;

const btn=document.querySelector('.porcentaje');
btn.addEventListener("click",function() {
    cont=1;
    document.querySelector(".operador").textContent="%"; 
});

const btn1=document.querySelector('.raiz');
btn1.addEventListener("click",function() {
    document.querySelector('.derecha').textContent="";
    cont=1;
    document.querySelector(".operador").textContent="√"; 
});

const btn2=document.querySelector('.potencia');
btn2.addEventListener("click",function(){
    cont=0;
   document.querySelector(".operador").textContent="^2";
});

const btn2_1=document.querySelector('.potenciaY');
btn2_1.addEventListener("click",function() {
    cont=1;
    document.querySelector(".operador").textContent="^";
});

const btn2_2=document.querySelector('.evaluacion');
btn2_2.addEventListener("click",function() {
    document.querySelector('.derecha').textContent="";
    cont=1;
    document.querySelector(".operador").textContent="1/";
});

const btn3=document.querySelector('.num7');
btn3.addEventListener("click",function(){
    if(cont==0){
        if (document.querySelector('.derecha').innerHTML==0) {
            document.querySelector('.derecha').textContent=7;
        } else {
            document.querySelector('.derecha').textContent+=7;
        }
    }else{
        document.querySelector('.izquierda').textContent+=7;
    }
});

const btn4=document.querySelector('.num8');
btn4.addEventListener("click",function(){
    if(cont==0){
            if (document.querySelector('.derecha').innerHTML==0) {
                document.querySelector('.derecha').textContent=8;
            } else {
                document.querySelector('.derecha').textContent+=8;
            }
        }else{
            document.querySelector('.izquierda').textContent+=8;
           
        }
});

const btn5=document.querySelector('.num9');
btn5.addEventListener("click",function(){
    if(cont==0){
            if (document.querySelector('.derecha').innerHTML==0) {
                document.querySelector('.derecha').textContent=9;
            } else {
                document.querySelector('.derecha').textContent+=9;
            }
        }else{
        document.querySelector('.izquierda').textContent+=9;
        }
});

const btn6=document.querySelector('.num6');
btn6.addEventListener("click",function(){
    if(cont==0){
            if (document.querySelector('.derecha').innerHTML==0) {
                document.querySelector('.derecha').textContent=6;
            } else {
                document.querySelector('.derecha').textContent+=6;
            }
        }else{
        document.querySelector('.izquierda').textContent+=6;
        }
});

const btn7=document.querySelector('.num5');
btn7.addEventListener("click",function(){
    if(cont==0){
            if (document.querySelector('.derecha').innerHTML==0) {
                document.querySelector('.derecha').textContent=5;
            } else {
                document.querySelector('.derecha').textContent+=5;
            }
        }else{
        document.querySelector('.izquierda').textContent+=5;
        }
});


const btn10=document.querySelector('.num4');
btn10.addEventListener("click",function(){
    if(cont==0){
            if (document.querySelector('.derecha').innerHTML==0) {
                document.querySelector('.derecha').textContent=4;
            } else {
                document.querySelector('.derecha').textContent+=4;
            }
        }else{
        document.querySelector('.izquierda').textContent+=4;
        }
});

const btn11=document.querySelector('.num3');
btn11.addEventListener("click",function(){
    if(cont==0){
            if (document.querySelector('.derecha').innerHTML==0) {
                document.querySelector('.derecha').textContent=3;
            } else {
                document.querySelector('.derecha').textContent+=3;
            }
        }else{
        document.querySelector('.izquierda').textContent+=3;
        }
});

const btn12=document.querySelector('.num2');
btn12.addEventListener("click",function(){
    if(cont==0){
            if (document.querySelector('.derecha').innerHTML==0) {
                document.querySelector('.derecha').textContent=2;
            } else {
                document.querySelector('.derecha').textContent+=2;
            }
        }else{
        document.querySelector('.izquierda').textContent+=2;
        }
});

const btn13=document.querySelector('.num1');
btn13.addEventListener("click",function(){
    if(cont==0){
            if (document.querySelector('.derecha').innerHTML==0) {
                document.querySelector('.derecha').textContent=1;
            } else {
                document.querySelector('.derecha').textContent+=1;
            }
        }else{
        document.querySelector('.izquierda').textContent+=1;
        }
});

const btn14=document.querySelector('.num0');
btn14.addEventListener("click",function(){
    if(cont==0){
        document.querySelector('.derecha').textContent+=0;
        }else{
        document.querySelector('.izquierda').textContent+=0;
        }
});


const btn15=document.querySelector('.suma');
btn15.addEventListener("click",function(){
    cont=1;
    document.querySelector(".operador").textContent="+";
});

const btn16=document.querySelector('.resta');
btn16.addEventListener("click",function(){
    cont=1;
    document.querySelector(".operador").textContent="-";
});

const btn17=document.querySelector('.multiplicacion');
btn17.addEventListener("click",function(){
    cont=1;
    document.querySelector(".operador").textContent="X";
});

const btn18=document.querySelector('.divicion');
btn18.addEventListener("click",function(){
    cont=1;
    document.querySelector(".operador").textContent="÷";
});

const btn19=document.querySelector('.limpiar');
btn19.addEventListener("click",function(){
    cont=0;
    document.querySelector('.derecha').textContent="";
    document.querySelector(".operador").textContent="";
    document.querySelector('.izquierda').textContent="";
    document.querySelector(".respuesta").textContent="";
    resultado.classList.add('ocultame');
    btn_19_1.disabled=false;
    document.querySelector('.pantalla').classList.add('texto_1');
    document.querySelector('.pantalla').classList.remove('texto_2');
});

const btn_19_1=document.querySelector('.borra');
btn_19_1.addEventListener("click", function () {
    
        if(cont==0){
            const resultado =document.querySelector('.derecha').textContent.slice(0,-1);  
            document.querySelector('.derecha').textContent = resultado; 
            if (resultado=="") {
                document.querySelector('.derecha').textContent = 0;
            }
        } else if (cont == 1) {
            const resultado = document.querySelector('.izquierda').textContent.slice(0, -1);
            document.querySelector('.izquierda').textContent = resultado;
            cont = 2;
        }else if (cont == 2){
            cont = 0;
            const res1 = document.querySelector(".operador").textContent.slice(0, -1);
            document.querySelector('.operador').textContent = res1;
          
        }    
});

const btn_19_2=document.querySelector('.negative');
btn_19_2.addEventListener("click",function() {
    if (cont == 0) {
        document.querySelector('.derecha').textContent="-";
    }else{
        document.querySelector('.izquierda').textContent="-";
    }
});

const btn_19_3=document.querySelector('.doble');
btn_19_3.addEventListener("click",function() {
   if (cont==0) {
       document.querySelector('.derecha').textContent+=".";
   } else {
       document.querySelector('.izquierda').textContent+=".";
   } 
});
const btn20=document.querySelector('.resultado');
btn20.addEventListener("click", function () {
    
let operador=document.querySelector(".operador").innerHTML;
let number_1=document.querySelector(".derecha").innerHTML;
let number_2=document.querySelector(".izquierda").innerHTML;

document.querySelector('.pantalla').classList.remove('texto_1');
document.querySelector('.pantalla').classList.add('texto_2');
    //console.log(typeof parseFloat(number_1));
    btn_19_1.disabled = true;
    resultado.classList.remove('ocultame');
    
    switch (operador) {
            case "÷":
            resultado.textContent = (number_1 / number_2).toFixed(2);
            verificar_Resultado(resultado);
            break;
    
            case "X":
            resultado.textContent = (number_1 * number_2).toFixed(2);
            verificar_Resultado(resultado);
            break;
        
            case "+":    
            resultado.textContent = (parseFloat(number_1) + parseFloat(number_2));
            verificar_Resultado(resultado);
            break;
        
            case "-":
            resultado.textContent = (number_1 - number_2).toFixed(2);
            verificar_Resultado(resultado);
            break;
        
            case "%":
            resultado.textContent = ((number_1 / 100) * number_2).toFixed(2); 
            verificar_Resultado(resultado);
            break;

            case "√":
            resultado.textContent = (Math.sqrt(number_2)).toFixed(2); 
            verificar_Resultado(resultado);
            break;
            
            case "^2":
            resultado.textContent = (Math.pow(number_1, 2)).toFixed(2); 
            verificar_Resultado(resultado);
            break;
            
            case "^":
            resultado.textContent = (Math.pow(number_1, number_2)).toFixed(2); 
            verificar_Resultado(resultado);
            break;

            case "1/":
            resultado.textContent = (1 / number_2).toFixed(2);
            verificar_Resultado(resultado);
            break; 

            default:
            resultado.textContent = "Error";
            verificar_Resultado(resultado);
            break;
    }
    
});

function verificar_Resultado(resultado) {
    if (resultado.innerHTML.length < 7) {
        resultado.style.overflowX = "hidden";
        //console.log(typeof resultado.innerHTML);
    } else {
        resultado.style.overflowX = "scroll";
        resultado.style.fontWeight = "100";
        //console.log(typeof resultado.innerHTML);
    }
}






