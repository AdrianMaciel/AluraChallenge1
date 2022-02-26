var dtxt=document.getElementById("texto2");
var dbot=document.getElementById("boton2");
var deres=document.getElementById("resultado2");

//main
dbot.addEventListener("click",v2);
//end
function v2(){
    verificar(2);
}

function desencriptar(){
    for(i=0;i<comp.length;i++){
        if((comp[i]=="a")&&(comp[i+1]=="i")){
            comp[i]="a";
            comp[i+1]="";
        }
        if((comp[i]=="e")&&(comp[i+1]=="n")&&(comp[i+2]=="t")&&(comp[i+3]=="e")&&(comp[i+4]=="r")){
            comp[i]="e";
            comp[i+1]="";
            comp[i+2]="";
            comp[i+3]="";
            comp[i+4]="";
        }
        if((comp[i]=="i")&&(comp[i+1]=="m")&&(comp[i+2]=="e")&&(comp[i+3]=="s")){
            comp[i]="i";
            comp[i+1]="";
            comp[i+2]="";
            comp[i+3]="";
        }
        if((comp[i]=="o")&&(comp[i+1]=="b")&&(comp[i+2]=="e")&&(comp[i+3]=="r")){
            comp[i]="o";
            comp[i+1]="";
            comp[i+2]="";
            comp[i+3]="";
        }
        if((comp[i]=="u")&&(comp[i+1]=="f")&&(comp[i+2]=="a")&&(comp[i+3]=="t")){
            comp[i]="u";
            comp[i+1]="";
            comp[i+2]="";
            comp[i+3]="";
        }
        deres.textContent+=comp[i];
    }
}