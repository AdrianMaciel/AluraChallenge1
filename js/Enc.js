var txt=document.getElementById("texto");
var bot=document.getElementById("boton");
var res=document.getElementById("resultado");

//main
bot.addEventListener("click",v1);
//end
function v1(){
    verificar(1);
}

function encriptar(){
    for(i=0;i<comp.length;i++){
        if(comp[i]=="a"){
            comp[i]="ai";
        }
        if(comp[i]=="e"){
            comp[i]="enter";
        }
        if(comp[i]=="i"){
            comp[i]="imes";
        }
        if(comp[i]=="o"){
            comp[i]="ober";
        }
        if(comp[i]=="u"){
            comp[i]="ufat";
        }
        res.textContent+=comp[i];
    }
}