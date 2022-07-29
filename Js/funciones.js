 function mayor_four(){
   //se dan valores a variables desde el formularioo principal
   var n1 = parseInt(document.formularioo.n1.value);
   var n2 = parseInt(document.formularioo.n2.value);
   var n3 = parseInt(document.formularioo.n3.value);
   var n4 = parseInt(document.formularioo.n4.value);


 /*condiciones para hayar
    mayor menor de 4 numeros
 */
   if(n1>n2 & n1>n3 & n1>n4){
    document.formularioo.resulatado.value=(""+n1+"<br>");
   }else if(n2<n1 & n2<n3 & n2<n4){
        document.formularioo.resultadoo.value=(""+n2+"<br>");
     }
     else if(n3<n1 & n3<n2 & n3<n4){
        document.formularioo.resutado.value=(""+n3+"<br>");
     }
    else if(n4<n1 & n4<n2 & n4<n3){
        document.formularioo.value=(""+n4+"<br>");
     }
   
  else if(n2>n1 & n2>n3 & n2>n4){
    document.formularioo.resulatado.value=(""+n2+"<br>");
  }else if(n1<n2 & n1<n3 & n2<n4){
        document.formularioo.resultadoo.value=(""+n1+"");
     }
     else if(n3<n1 & n3<n2 & n3<n4){
        document.formularioo(""+n3+"");
     }
     else if(n4<n1 & n4<n2 & n4<n3){
        document.formularioo(""+n4+"");
     }
   

  else if(n3>n1 & n3>n2 & n3>n4){
    document.formularioo(""+n3+"<br>");
  }else if(n1<n3 & n1<n2 & n2<n4){
        document.formularioo(""+n1+"");
     }
     else if(n2<n1 & n2<n3 & n2<n4){
        document.formularioo(""+n2+"");
     }
     else if(n4<n1 & n4<n2 & n4<n1){
        document.formularioo(""+n4+"");
     } 
   
   else if(n4>n1 & n4>n2 & n4>n3){
    document.formularioo(""+n4+"<br>");
   }else if(n1<n2 & n1<n3 & n2<n4){
        document.formularioo(""+n1+"");
     }
     else if(n2<n1 & n2<n3 & n2<n4){
        document.formularioo(""+n2+"");
     }
     else if(n3<n1 & n3<n2 & n3<n1){
        document.formularioo(""+n3+"");
     } 
    }



/******************funcion para menor mayor intermedio ********************************************/



function  mayor_i(){
   //se dan valores a variables desde el formulario principal
    var n1 = parseInt(document.formulario.n1.value);
    var n2 = parseInt(document.formulario.n2.value);
    var n3 = parseInt(document.formulario.n3.value);
   /*condicion para comparar numeros
   mayor menor intermedio desde linea 11
   hasta la linea 83
   */
   if( n1<n2 & n2<n3){
     document.formulario.resultadoo.value=(""+n1+"");
     document.formulario.resultadooo.value=(""+n2+"");
     document.formulario.resultado.value=(""+n3+"");
   }
   else if(n1<n3 & n3<n2){
     document.formulario.resultadoo.value=(""+n1+"")
     document.formulario.resultadooo.value=(""+n3+"");
     document.formulario.resultado.value=(""+n2+"");
   } 
   else if(n2<n1 & n1<n3){
     document.formulario.resultadoo.value=(""+n2+"")
     document.formulario.resultadooo.value=(""+n1+"");
     document.formulario.resultado.value=(""+n3+"");
   }
   else if(n2<n3 & n3<n1){
     document.formulario.resultadoo.value=(""+n2+"")
     document.formulario.resultadooo.value=(""+n3+"");
     document.formulario.resultado.value=(""+n1+"");
   }
   else if(n3<n1 & n1<n2){
     document.formulario.resultadoo.value=(""+n3+"")
     document.formulario.resultadooo.value=(""+n1+"");
     document.formulario.resutado.value=(""+n2+"");
   }
   else if(n3<n2 & n2<n1){
     document.formulario.resultadoo.value=(""+n3+"")
     document.formulario.resultadooo.value=(""+n2+"");
     document.formulario.resultado.value=(""+n1+"");
   }
   /*condicionales para el
    caso de haber numeros iguales 
    desde la linea 45 hasta linea 83
   */
   else if(n1==n2 & n2==n3){
    document.formulario.value= alert("los numeros son iguales");

   }
   else if (n1==n3 ){
     document.formulario.value=("es igual el numero "+n1+"y el numero "+n3+"");
     if(n1>n2){
       document.formulario.resultadoo.value=(" "+n2+"");
       document.formulario.resultadooo.value=("intermedio no hay");
       document.formulario.resultado.value=(" "+n1+"");
     }
     if(n1<n2){
       document.formulario.resultadoo.value=(" "+n1+"");
       document.formulario.resultadooo.value=("intermedio no hay");
       document.formulario.resultado.value=(" "+n2+"");
     }
   }
   else if(n2==n1){
     document.formulario.value=("es igual el numero"+n2+"y el numero"+n1+"");
     if(n2<n3){
       document.formulario.resultadoo.value=(" "+n2+"");
       document.formulario.resultadooo.value=("intermedio no hay");
       document.formulario.resultado.value=(" "+n3+"");
 
     }
     if(n2>n3){
       document.formulario.resultadoo.value=(" "+n3+"");
       document.formulario.resultadooo.value=("intermedio no hay");
       document.formulario.resultado.value=(" "+n2+"");
     }
   }
   else if(n2==n3){
     if(n2<n1){
       document.formulario.resultadoo.value=(" "+n2+"");
       document.formulario.resultadooo.value=("intermedio no hay");
       document.formulario.resultado.value=(" "+n1+"");
     }
     if(n2>n1){
       document.formulario.resultadoo.value=(" "+n1+"");
       document.formulario.resultadooo.value=("intermedio no hay");
       document.formulario.resultado.value=(" "+n2+"");
     }
   }
 }
