var boton = document.getElementById("calcular")//toma el boton calcular
boton.addEventListener('click', devolverValor)//le agrega el escuchador
//si se le hace clik, se ejecuta la funcion

function devolverValor(){  //va a devolver el valor de: 1er imput x la cantidad
    var pasePorDia = document.getElementById("pase_dia")//tomar el primer input

    var precioDia = pasePorDia.value * 30//calculo 

    var resumen = document.getElementById('pase1')
    resumen.textContent=('Total por items: Pase por día $' +  precioDia)

    var resultado= document.getElementById('suma-total')
    resultado.textContent = ('$' + precioDia)



    var paseTodosLosDias = document.getElementById("pase_completo")

    var precioBoletoCompleto = paseTodosLosDias.value * 50

    var resumen2 = document.getElementById("pase2")
    resumen2.textContent= ('Total por items: Pase por día $' + precioBoletoCompleto)

    var resultado2 = document.getElementById('suma-total')
    resultado2.textContent= ('$' + precioBoletoCompleto)


    var pasePorDosDias= document.getElementById('pase_dosdias')
    
    var precioDosDias = pasePorDosDias.value * 45

    var resumen3= document.getElementById('pase3')
    resumen3.textContent= ('Total por items: Pase por día $' + precioDosDias)

    var resultado3=document.getElementById('suma-total')
    resultado3.textContent = ('$' + precioDosDias)
    
    var sumar = (precioDia + precioDosDias + precioBoletoCompleto)
       
    var resultadoTotal = document.getElementById('suma-total')
    resultadoTotal.textContent = ('$' + sumar)
    
}




