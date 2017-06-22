//A folyamat állása.
function changeProgress( progress ) {
    
    if ( !progress ) {
        progress = document.querySelector( ".progress-value").value;
    }
    
    //A replace-ban megadott reguláris kifejezés azt mondja, hogy ami nem(^) szám, azt
    //cseréld az üres("") karakterre. A "g"-jelentése, hogy globálisan, azaz mindenhol a paraméterben.
    //A pont azt jelenti a reguláris kifejezésekben, hogy bármilyen karakter, ezért, hogy karakterként //értelmezze(mint pont), elé kell tenni egy backslash "\"-t, védőkaraktert.
    progress = progress.replace( /,/g, "." );    //Vessző kicserélése pontra
    progress = progress.replace( /[^0-9\.]/g, "" );
    
    //Debug-oláshoz használjuk ezt
    console.log( progress );
    
    // Egész számmáalakítás
    //progress = parseInt( progress, 10 );
    
    //Tört számmá aléakítás
    progress = parseFloat( progress );
    
    if ( !progress || isNaN(progress) ) {
        return;
    }
    
    var bar=document.querySelector(".progress .progress-bar");
    bar.style.width = progress + "%";
    
}