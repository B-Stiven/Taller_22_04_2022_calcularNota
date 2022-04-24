const color=document.getElementById("fondo");
const body=document.getElementById("body");

const Outcome=document.getElementById("Outcome");


// note1.addEventListener('keypress', (event)=>{
//     event.preventDefault()
//     let codigokey = event.keyCode;
//     let valorkey = String.fromCharCode(codigokey)
//     console.log(valorkey);

//     let valor = parseFloat(valorkey);
//     console.log(valor);

//     if(valor){
//         note1.value+=valor;
            
//     }
// })


// note2.addEventListener('keypress', (event)=>{
//     event.preventDefault()
//     let codigokey = event.keyCode;
//     let valorkey = String.fromCharCode(codigokey)
//     console.log(valorkey);

//     let valor = parseFloat(valorkey);
//     console.log(valor);

//     if(valor){
//         note2.value+=valor;
//     }
// })


function hangeColor(colour){
    console.log(colour.value);
    body.style.backgroundColor=colour.value;
};


function Calculate(){
    const note1=document.getElementById("note1");
    const note2=document.getElementById("note2");
    const average=document.getElementById("average");
    const Userneme=document.getElementById("name");

    if(Number(note1.value) && Number(note2.value) && Userneme.value){
        let n1= parseFloat(note1.value);
        let n2=parseFloat(note2.value);
        
        if( n1>=1 && n1<=5){
            if( n2>=1 && n2<=5){
                let percentage_note1 = n1*0.3;
                let end_note1= n1-percentage_note1;

                let percentage_note2= n2*0.3;
                let end_note2= n2-percentage_note2;
            
                let note3=(end_note1+end_note2)/2;

                let percentage_note3=note3*0.4;

                let final_note=(percentage_note1+percentage_note2+percentage_note3);
                console.log(final_note)
                
                if(final_note==4 && final_note==5){
                    
                    Outcome.textContent="Señor-@ "+Userneme.value+" usd esta en el cuadro de honor";
                    Outcome.style.color="blue";
                    average.textContent=final_note;
                    setTimeout(() => {
                        Outcome.textContent="Resultado";
                        Outcome.style.color="black";
                    }, 5000);
                }else if(final_note==3.5 && final_note==3.9){
                    Outcome.textContent="Señor-@ "+Userneme.value+" usd Gana";
                    Outcome.style.color="green";
                    average.textContent=final_note;
                    setTimeout(() => {
                        Outcome.textContent="Resultado";
                        Outcome.style.color="black";
                    },5000);
                }else if((final_note==2 && final_note==3.4)){

                    Outcome.textContent="Señor-@ "+Userneme.value+" usd Pierde pero puede recuperar";
                    Outcome.style.color="red";
                    average.textContent=final_note;
                    setTimeout(() => {
                        Outcome.textContent="Resultado";
                        Outcome.style.color="black";
                    },5000);
                }else if((final_note<=1.9)){
                    Outcome.textContent="Señor-@ "+Userneme.value+" usd Pierde";
                    Outcome.style.color="red";
                    average.textContent=final_note;
                    setTimeout(() => {
                        Outcome.textContent="Resultado";
                        Outcome.style.color="black";
                    },5000);
                }
                

                
            }else{
                Outcome.textContent="Ingrese los campos Corretamente";
                Outcome.style.color="red";
                setTimeout(() => {
                    Outcome.textContent="Resultado";
                    Outcome.style.color="black";
                }, 5000);
                
            }
        }else{
            Outcome.textContent="Ingrese los campos Corretamente";
            Outcome.style.color="red";
                setTimeout(() => {
                    Outcome.textContent="Resultado";
                    Outcome.style.color="black";
                }, 5000);
        }
       
                    
    }else{
        Outcome.textContent="Ingrese los campos Corretamente";
        Outcome.style.color="red";
                setTimeout(() => {
                    Outcome.textContent="Resultado";
                    Outcome.style.color="black";
                }, 5000);
    }
};

