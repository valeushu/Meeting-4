function mayor() {
    let resul=0;
    var num1 = parseInt(document.getElementById("n1").value) ;
    var num2 = parseInt(document.getElementById("n2").value) ;

    if (num1>= num2) {
        resul = num1 ;
        
    } else {
        resul = num2 ;    
    }
    console.log(resul);
    alert("El numero mayor es " + resul);
}