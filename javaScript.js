function calculo_salario(){

    //Captura de datos
    var salario =Number(document.getElementById("puesto").value);
    var horas_extras =Number(document.getElementById("extras").value);
    var nombre =document.getElementById("nombre").value;
    
    if(salario>0&&nombre!==""){//valiadacion de los campos minimos para realizar el calculo
    
        var liquido=salario+250+(horas_extras*15.75);//calculo del salario liquido

    //Incercion de los valores en el HTML
    document.getElementById('nombreSalida').innerHTML ="Nombre: "+nombre;
    document.getElementById('salarioLiquido').innerHTML ="Salario Liquido: Q"+ liquido;
    }
    
    //Mensajes de error al faltar informacion
    else if(nombre==""){alert("Por favor ingrese su nombre")}
    else if(salario==0){alert("Por favor seleccione el puesto")}
    
}