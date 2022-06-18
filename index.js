
window.onload = function(){
    welcome();
    document.getElementById("block1").addEventListener('click', f1 );
    document.getElementById("block2").addEventListener('click', f2 );
    document.getElementById("block3").addEventListener('click', f3 );
    document.getElementById("block4").addEventListener('click', f4 );
    document.getElementById("block5").addEventListener('click', f5 );
    document.getElementById("block6").addEventListener('click', f6 );
    document.getElementById("block7").addEventListener('click', f7 );
    document.getElementById("block8").addEventListener('click', f8 );
    document.getElementById("block9").addEventListener('click', f9 );
    document.getElementById("block0").addEventListener('click', f0 );
    document.getElementById("dot").addEventListener('click', fDot );
    document.getElementById("ans").addEventListener('click', fEquals );
    document.getElementById("plus").addEventListener('click', addition);
    document.getElementById("minus").addEventListener('click', subtract);
    document.getElementById("multiply").addEventListener('click', multiply);
    document.getElementById("divide").addEventListener('click', division);
    document.getElementById("clr").addEventListener('click', clear);
    document.getElementById("submit").addEventListener('click', displayName);
}

function welcome(){
    setTimeout(() => {
        document.getElementById("display").value = "";
    }, 3000);
    
}

function clear(){
    document.getElementById("display").value = "";
}

function addition(){
    fEquals();
    document.getElementById("display").value = document.getElementById("display").value+" + ";

}
function subtract(){
    document.getElementById("display").value = document.getElementById("display").value+" - ";

}

function multiply(){
    fEquals();
    document.getElementById("display").value = document.getElementById("display").value+" x ";

}

function division(){
    document.getElementById("display").value = document.getElementById("display").value+" ÷ ";

}

function f1(){
    document .getElementById("display").value =document.getElementById("display").value+"1";
}

function f2(){
    document .getElementById("display").value =document.getElementById("display").value+"2";
}

function f3(){
    document .getElementById("display").value =document.getElementById("display").value+"3";
}

function f4(){
    document .getElementById("display").value =document.getElementById("display").value+"4";
}

function f5(){
    document .getElementById("display").value =document.getElementById("display").value+"5";
}

function f6(){
    document .getElementById("display").value =document.getElementById("display").value+"6";
}

function f7(){
    document .getElementById("display").value =document.getElementById("display").value+"7";
}

function f8(){
    document .getElementById("display").value =document.getElementById("display").value+"8";
}

function f9(){
    document .getElementById("display").value =document.getElementById("display").value+"9";
}

function f0(){
    document .getElementById("display").value =document.getElementById("display").value+"0";
}

function fDot(){
    document .getElementById("display").value =document.getElementById("display").value+".";
}

function fEquals(){
    var str1 = document.getElementById("display").value;
    var array = str1.split(" ");
    if(array[1] == "+"){
        
    document.getElementById("display").value = parseFloat(array[0]) + parseFloat (array[array.length-1]);
    }
    
    if(array[1] == "-"){
        document.getElementById("display").value = parseFloat(array[0]) - parseFloat (array[array.length-1]);
    }

    if(array[1] == "x"){
        document.getElementById("display").value = parseFloat(array[0]) * parseFloat (array[array.length-1]);
    }

    if(array[1] == "÷"){
        if(array[array.length-1] == "0" & array[0] != "0"){
            document.getElementById("display").value = "Infinity";
        }

        if(array[array.length-1] == "0" && array[0] == "0"){
            document.getElementById("display").value = "NaN";
        }
        else{
        document.getElementById("display").value = parseFloat(array[0]) / parseFloat (array[array.length-1]);
        }
    }

    
}
function displayName(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("last").value;
    alert(""+a+" "+b);

}














