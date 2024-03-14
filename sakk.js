function sakktabla(){
    const tarolo=document.querySelector("#tabla")
    let table = "<table>";
    for (let i = 0; i < 8; i++ ) {
         let sorok = "<tr>"
            for (let j = 0; j < 8; j++){
                sorok+= `<td>&nbsp;</td>`
            }
        sorok+="</tr>";  
        console.log(sorok)
        table+=sorok
    }
    table += "</table>";
    console.log(table)
    tarolo.innerHTML=table
}
sakktabla()
function szinek(){
    const paratlansorok=document.querySelectorAll("tr:nth-child(odd) td:nth-child(even)")
    for (let index = 0; index < paratlansorok.length;i++){
        paratlansorok[index].style.backgroundColor="lightgrey"
    }



    const parossorok=document.querySelectorAll("tr:nth-child(even) td:nth-child(odd)")
    for (let index = 0; index < parossorok.length;i++ ){
        parososorok[index].style.backgroundColor="lightgrey"
    }
}



function babuk(){
    const mezok = document.querySelectorAll("#table td");
    for (let i = 0; i < mezok.length; i++ ){
        mezok[i].addEventListener("click", function(){
            if (this.querySelector("img")) {
                this.innerHTML = ""; 
            } else {
                this.innerHTML = `<img src="babu.png" alt="kép">`;
            }
        });
    }
}