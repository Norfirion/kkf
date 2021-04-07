window.addEventListener("load", init);


/* segédfüggvény*/
function ID(nev){
    return document.getElementById(nev);
}
function $(nev){
   return document.querySelectorAll(nev);
}
function init(){
    for (var i = 0; i < ("aside img").length; i++) {
        $("aside img")[0].addEventListener("mouseover", feladat5);
        $("aside img")[0].addEventListener("mouseout", feladat6);
}
}
function feladat5(){
    this.classList.add("kiemel");
}
function feladat6(){
    this.classList.remove("kiemel");
}
