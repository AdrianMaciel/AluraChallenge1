var comp;

function verificar(a){
    var letras=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
    if(a==1){
        comp=txt.value.split("");
        res.textContent="";
    }
    if(a==2){
        comp=dtxt.value.split("");
        deres.textContent="";
    }
    for(i=0;i<comp.length;i++){
        for(j=0;j<letras.length;j++){
            if(comp[i]==letras[j]){
                break;
            }
        }
        if(j==letras.length){
            alert("solo se aceptan letras en minuscula");
            return;
        }
    }
    if(a==1){
        encriptar();
    }
    if(a==2){
        desencriptar();
    }
}