window.addEventListener("load", init);


/* segédfüggvény*/
function ID(nev){
    return document.getElementById(nev);
}
function $(nev){
   return document.querySelectorAll(nev);
}
function keszito(){
    document.getElementById("keszitok").innerHTML="Szabó Milán, Szabó Tamás, Szántai barna, Tóth Virág";
    
}

function init(){
    keszito();
}