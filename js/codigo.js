/*

-Juedo Damas-
Creado por: Ronald Castro t.
cod: 2018114094

*/


'use strict';

    function crearTablero(){

        const contenedor = document.querySelector(".container");
        const tablero = document.createElement('table');
    
        contenedor.appendChild(tablero);
    
        var cont = 1;
        var cont2 = 1;
    
        for(var i=1;i<=8;i++){
            if(i%2 == 0){
                //FILAS PARES, EMPIEZAN CON CUADRO NEGRO
    
                if(!document.querySelector(".filaPar")){
                    var filaPar = document.createElement('tr');
                    filaPar.id = i;
                    
                    tablero.appendChild(filaPar);
                }
    
                for(var j=1;j<=8;j++){
    
                    if(j%2 == 0){
                        let columna = document.createElement("td");
                        columna.id = j;
                        filaPar.appendChild(columna);
    
                        let cuadroBlanco = document.createElement("div");
                        cuadroBlanco.classList.add('cuadroBlanco');
                        columna.appendChild(cuadroBlanco);
    
                    }else{
                        let columna = document.createElement("td");
                        columna.id = j;
                        filaPar.appendChild(columna);
    
                        let cuadroNegro = document.createElement("div");
                        cuadroNegro.classList.add('cuadroNegro');
                        columna.appendChild(cuadroNegro);
    
                        if(i<=3){
                            let fichaNegra = document.createElement('div');
                            fichaNegra.classList.add('fichaNegra');
         
                            cuadroNegro.appendChild(fichaNegra);
                        }else if(i>=6){
                            let fichaBlanca = document.createElement('div');
                            fichaBlanca.classList.add('fichaBlanca');
    
                            cuadroNegro.appendChild(fichaBlanca);
                        }
                    }
            
                 }
            }else{
                //FILAS IMPARES - EMPIEZAN CON CUADRO BLANCO
                if(!document.querySelector(".filaImpar")){
                    var filaImpar = document.createElement('tr');
                    filaImpar.id = i;
    
                    tablero.appendChild(filaImpar);
                }
    
                for(let j=1;j<=8;j++){
    
                    if(j%2 == 0){
    
                        let columna = document.createElement("td");
                        columna.id = j;
                        filaImpar.appendChild(columna);
    
                        let cuadroNegro = document.createElement("div");
                        cuadroNegro.classList.add('cuadroNegro');
                        columna.appendChild(cuadroNegro);
    
                        if(i<=3){
                            let fichaNegra = document.createElement('div');
                            fichaNegra.classList.add('fichaNegra');
    
                            cuadroNegro.appendChild(fichaNegra);
                        }else if(i>=6){
                            let fichaBlanca = document.createElement('div');
                            fichaBlanca.classList.add('fichaBlanca');
    
                            cuadroNegro.appendChild(fichaBlanca);
                        }
    
                    }else{
                        let columna = document.createElement("td");
                        columna.id = j;
                        filaImpar.appendChild(columna);
    
                        let cuadroBlanco = document.createElement("div");
                        cuadroBlanco.classList.add('cuadroBlanco');
                        columna.appendChild(cuadroBlanco);
                    }
    
                 }
            }
        }

    }

    function ganador(){

        var conNegras=0;
        var conBlancas=0;

        
        for(let i=1; i<=8; i++){
            for(let j=1; j<=8; j++){

                if($("tr#"+i+" td#"+j+" .cuadroNegro").find(".fichaNegra").length){
                    conNegras++;
                }

                if($("tr#"+i+" td#"+j+" .cuadroNegro").find(".fichaBlanca").length){
                    conBlancas++;
                }
            }
        }

        if(conNegras==0){
            alert("GANARON LAS BLANCAS!");
            location.reload();
        }

        if(conBlancas==0){
            alert("GANARON LAS NEGRAS!");
            location.reload();
        }

    }

    crearTablero();

    var jugador = true;

    $(document).ready(function(){


            $(".fichaBlanca").on({

                mouseenter: function name(params) {
        
                    ganador();
        
                    var filFicha = $(this).parent().parent().parent().attr("id");
                    var colFicha = $(this).parent().parent().attr("id");

                    
                    let colFichaInt = parseInt(colFicha); 
                    let filFichaInt = parseInt(filFicha);
        
                    let posFilFicha = "tr#"+filFichaInt;
                    let posColFicha = "td#"+colFichaInt;
            
            
                    let filaCuadro = "tr#"+(filFichaInt-1);
                    let colCuadroDer = "td#"+(colFichaInt+1);
            
                    let filaCuadroMatar = "tr#"+(filFichaInt-2);
                    let colCuadroDerMatar = "td#"+(colFichaInt+2);
        
                    let filCuadroIzq = "tr#"+(filFichaInt-1);
                    let colCuadroIzq = "td#"+(colFichaInt-1);
        
                    let filCuadroIzqMatar = "tr#"+(filFichaInt-2);
                    let colCuadroIzqMatar = "td#"+(colFichaInt-2);
        
                    if((!filFichaInt-1)<1 || !(colFichaInt+1)>8){
        
                        if($(posFilFicha+" "+posColFicha+" .cuadroNegro .fichaBlanca").attr("class")=="fichaBlanca reina"){
        
        
                            while(!$("tr#"+fila+" td#"+columna+" .cuadroNegro").find("div").length){
                                $("tr#"+fila+" td#"+columna+" .cuadroNegro").css({"background-color": "#74FF00"});
                                fila++;
                                columna--;
                            }
        
                            
                        }
        
        
            
                        if(!$(filaCuadro+" "+colCuadroDer+" .cuadroNegro").find("div").length){
            
                            $(filaCuadro+" "+colCuadroDer+" .cuadroNegro").css({"background-color": "#74FF00"});

                        }
            
                        
                            if(!$(filaCuadroMatar+" "+colCuadroDerMatar+" .cuadroNegro").find("div").length){
            
                                if($(filaCuadro+" "+colCuadroDer+" .cuadroNegro").find("div").length){
            
                                    if($(filaCuadro+" "+colCuadroDer+" .cuadroNegro").find(".fichaNegra").length){
            
                                        $(filaCuadroMatar+" "+colCuadroDerMatar+" .cuadroNegro").css({"background-color": "#74FF00"});  

                                    }
                                }
            
                            }  
                            
        
                            if(!$(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").find("div").length){
            
                                $(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").css({"background-color": "#74FF00"});
            
                            }
        
                            if(!$(filCuadroIzqMatar+" "+colCuadroIzqMatar+" .cuadroNegro").find("div").length){
            
                                if($(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").find("div").length){
            
                                    if($(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").find(".fichaNegra").length){
            
                                        $(filCuadroIzqMatar+" "+colCuadroIzqMatar+" .cuadroNegro").css({"background-color": "#74FF00"});  

                                    }
                                }
            
                            }  
        
                    } 
                },
        
        
                 click: function name2(params) {
        

                            var filFicha = $(this).parent().parent().parent().attr("id");
                            var colFicha = $(this).parent().parent().attr("id");
                    

                        let colFichaInt = parseInt(colFicha); 
                        let filFichaInt = parseInt(filFicha);
            
                        let posFilFicha = "tr#"+filFichaInt;
                        let posColFicha = "td#"+colFichaInt;
                
                
                        let filaCuadro = "tr#"+(filFichaInt-1);
                        let colCuadroDer = "td#"+(colFichaInt+1);
                
        
                        let filaCuadroMatar = "tr#"+(filFichaInt-2);
                        let colCuadroDerMatar = "td#"+(colFichaInt+2);
        
                        let filCuadroIzq = "tr#"+(filFichaInt-1);
                        let colCuadroIzq = "td#"+(colFichaInt-1);
            
                        let filCuadroIzqMatar = "tr#"+(filFichaInt-2);
                        let colCuadroIzqMatar = "td#"+(colFichaInt-2);
                
                        
        
                        if((!filFichaInt-1)<1 || !(colFichaInt+1)>8){
                
                            if(!$(filaCuadro+" "+colCuadroDer+" .cuadroNegro").find("div").length){

                                    $(filaCuadro+" "+colCuadroDer+" .cuadroNegro").append($(posFilFicha+" "+posColFicha+" .cuadroNegro .fichaBlanca"));
                                    $(filaCuadro+" "+colCuadroDer+" .cuadroNegro").css({"background-color": "#806D00"});
        
                                    $(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").css({"background-color": "#806D00"});
                                    $(filCuadroIzqMatar+" "+colCuadroIzqMatar+" .cuadroNegro").css({"background-color": "#806D00"});

                                    jugador = false;
                                    if(!jugador){
                                        let texto = $("h3");
                                        texto.text("Turno de las: Negras");
                                        $("body").append(texto);
                                    }  
                                    
                            }
                
                            
                                if(!$(filaCuadroMatar+" "+colCuadroDerMatar+" .cuadroNegro").find("div").length){
                
                                    if($(filaCuadro+" "+colCuadroDer+" .cuadroNegro").find("div").length){
                
                                        if($(filaCuadro+" "+colCuadroDer+" .cuadroNegro").find(".fichaNegra").length){
                
                                            $(filaCuadroMatar+" "+colCuadroDerMatar+" .cuadroNegro").append($(posFilFicha+" "+posColFicha+" .cuadroNegro .fichaBlanca"));
                                            $(filaCuadroMatar+" "+colCuadroDerMatar+" .cuadroNegro").css({"background-color": "#806D00"});  //Ilumino el cuadro
        
                                            $(filCuadroIzqMatar+" "+colCuadroIzqMatar+" .cuadroNegro").css({"background-color": "#806D00"});  //Ilumino el cuadro
                                            $(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").css({"background-color": "#806D00"});
        
                                            $(filaCuadro+" "+colCuadroDer+" .cuadroNegro").find(".fichaNegra").remove();
                                            jugador = false;
                                            if(!jugador){
                                                let texto = $("h3");
                                                texto.text("Turno de las: Negras");
                                                $("body").append(texto);
                                            }  

                                        }
                                    }
                
                                }                
                        }  
                    },
                    wheel: function name3(params) {

                        var filFicha = $(this).parent().parent().parent().attr("id");
                        var colFicha = $(this).parent().parent().attr("id");
  
                    let colFichaInt = parseInt(colFicha); 
                    let filFichaInt = parseInt(filFicha);
        
                    let posFilFicha = "tr#"+filFichaInt;
                    let posColFicha = "td#"+colFichaInt;
            
            
                    let filaCuadro = "tr#"+(filFichaInt-1);
                    let colCuadroDer = "td#"+(colFichaInt+1);
            
        
                    let filaCuadroMatar = "tr#"+(filFichaInt-2);
                    let colCuadroDerMatar = "td#"+(colFichaInt+2);
        
                    let filCuadroIzq = "tr#"+(filFichaInt-1);
                    let colCuadroIzq = "td#"+(colFichaInt-1);
        
                    let filCuadroIzqMatar = "tr#"+(filFichaInt-2);
                    let colCuadroIzqMatar = "td#"+(colFichaInt-2);
            
                    
        
                    if((!filFichaInt-1)<1 || !(colFichaInt+1)>8){
            
                        if(!$(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").find("div").length){
                           
                                $(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").append($(posFilFicha+" "+posColFicha+" .cuadroNegro .fichaBlanca"));
                                $(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").css({"background-color": "#806D00"});
        
                                $(filaCuadro+" "+colCuadroDer+" .cuadroNegro").css({"background-color": "#806D00"});
                                $(filaCuadroMatar+" "+colCuadroDerMatar+" .cuadroNegro").css({"background-color": "#806D00"});
                                jugador = false;
                                if(!jugador){
                                    let texto = $("h3");
                                    texto.text("Turno de las: Negras");
                                    $("body").append(texto);
                                }  
       
                        }
            
                        
                            if(!$(filCuadroIzqMatar+" "+colCuadroIzqMatar+" .cuadroNegro").find("div").length){
            
                                if($(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").find("div").length){
            
                                    if($(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").find(".fichaNegra").length){
            
                                        $(filCuadroIzqMatar+" "+colCuadroIzqMatar+" .cuadroNegro").append($(posFilFicha+" "+posColFicha+" .cuadroNegro .fichaBlanca"));
                                        $(filCuadroIzqMatar+" "+colCuadroIzqMatar+" .cuadroNegro").css({"background-color": "#806D00"});  //Ilumino el cuadro
        
                                        $(filaCuadroMatar+" "+colCuadroDerMatar+" .cuadroNegro").css({"background-color": "#806D00"});  //Ilumino el cuadro
                                        $(filaCuadro+" "+colCuadroDer+" .cuadroNegro").css({"background-color": "#806D00"});  //Ilumino el cuadro
        
                                        $(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").find(".fichaNegra").remove();
                                        jugador = false;
                                        if(!jugador){
                                            let texto = $("h3");
                                            texto.text("Turno de las: Negras");
                                            $("body").append(texto);
                                        }  
                                    }
                                }
            
                            }                
                    } 
                        
                    },
                    mouseleave:function name4(params) {
        
                        var filFicha = $(this).parent().parent().parent().attr("id");
                        var colFicha = $(this).parent().parent().attr("id");

                        
                        let colFichaInt = parseInt(colFicha); 
                        let filFichaInt = parseInt(filFicha);
            
                        let posFilFicha = "tr#"+filFichaInt;
                        let posColFicha = "td#"+colFichaInt;
                
                
                        let filaCuadro = "tr#"+(filFichaInt-1);
                        let colCuadroDer = "td#"+(colFichaInt+1);
                
                        
                        let filaCuadroMatar = "tr#"+(filFichaInt-2);
                        let colCuadroDerMatar = "td#"+(colFichaInt+2);
                
                        let filCuadroIzq = "tr#"+(filFichaInt-1);
                        let colCuadroIzq = "td#"+(colFichaInt-1);
            
                        let filCuadroIzqMatar = "tr#"+(filFichaInt-2);
                        let colCuadroIzqMatar = "td#"+(colFichaInt-2);
        
                        if((!filFichaInt-1)<1 || !(colFichaInt+1)>8){
        
                
                            if(!$(filaCuadro+" "+colCuadroDer+" .cuadroNegro").find("div").length){
                
                                $(filaCuadro+" "+colCuadroDer+" .cuadroNegro").css({"background-color": "#806D00"});

                            }
                
                            
                                if(!$(filaCuadroMatar+" "+colCuadroDerMatar+" .cuadroNegro").find("div").length){
                
                                    if($(filaCuadro+" "+colCuadroDer+" .cuadroNegro").find("div").length){
                
                                        if($(filaCuadro+" "+colCuadroDer+" .cuadroNegro").find(".fichaNegra").length){
                
                                            $(filaCuadroMatar+" "+colCuadroDerMatar+" .cuadroNegro").css({"background-color": "#806D00"});  

                                        }
                                    }
                
                                }
        
                                if(!$(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").find("div").length){
            
                                    $(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").css({"background-color": "#806D00"});
                
                                }
        
                                
                                if(!$(filCuadroIzqMatar+" "+colCuadroIzqMatar+" .cuadroNegro").find("div").length){
            
                                    if($(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").find("div").length){
                
                                        if($(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").find(".fichaNegra").length){
                
                                            $(filCuadroIzqMatar+" "+colCuadroIzqMatar+" .cuadroNegro").css({"background-color": "#806D00"}); 

                                        }
                                    }
                
                                } 
        
                        }  
        
                    }
                    
                    
              });


////////////////////////////////////////////////////////////////////////////////////


        $(".fichaNegra").on({

            mouseenter: function name(params) {

    
                var filFicha = $(this).parent().parent().parent().attr("id");
                var colFicha = $(this).parent().parent().attr("id");

                
                let colFichaInt = parseInt(colFicha); 
                let filFichaInt = parseInt(filFicha); 
    
                let posFilFicha = "tr#"+filFichaInt;
                let posColFicha = "td#"+colFichaInt;
        
        
                let filaCuadro = "tr#"+(filFichaInt+1);
                let colCuadroDer = "td#"+(colFichaInt+1);
        
                let filaCuadroMatar = "tr#"+(filFichaInt+2);
                let colCuadroDerMatar = "td#"+(colFichaInt+2);
    
                let filCuadroIzq = "tr#"+(filFichaInt+1);
                let colCuadroIzq = "td#"+(colFichaInt-1);
    
                let filCuadroIzqMatar = "tr#"+(filFichaInt+2);
                let colCuadroIzqMatar = "td#"+(colFichaInt-2);
    
                if((!filFichaInt-1)<1 || !(colFichaInt+1)>8){
    
        
                    if(!$(filaCuadro+" "+colCuadroDer+" .cuadroNegro").find("div").length){
        
                        $(filaCuadro+" "+colCuadroDer+" .cuadroNegro").css({"background-color": "#74FF00"});

                    }
        
                    
                        if(!$(filaCuadroMatar+" "+colCuadroDerMatar+" .cuadroNegro").find("div").length){
        
                            if($(filaCuadro+" "+colCuadroDer+" .cuadroNegro").find("div").length){
        
                                if($(filaCuadro+" "+colCuadroDer+" .cuadroNegro").find(".fichaBlanca").length){
        
                                    $(filaCuadroMatar+" "+colCuadroDerMatar+" .cuadroNegro").css({"background-color": "#74FF00"});  //Ilumino el cuadro

                                }
                            }
        
                        }  
                        
    
                        if(!$(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").find("div").length){
        
                            $(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").css({"background-color": "#74FF00"});

                        }
    
                        if(!$(filCuadroIzqMatar+" "+colCuadroIzqMatar+" .cuadroNegro").find("div").length){
        
                            if($(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").find("div").length){
        
                                if($(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").find(".fichaBlanca").length){
        
                                    $(filCuadroIzqMatar+" "+colCuadroIzqMatar+" .cuadroNegro").css({"background-color": "#74FF00"});  //Ilumino el cuadro

                                }
                            }
        
                        }  
    
                } 
            },
    
    
             click: function name2(params) {
    
        
                        var filFicha = $(this).parent().parent().parent().attr("id");
                        var colFicha = $(this).parent().parent().attr("id");
                
                    
                    let colFichaInt = parseInt(colFicha); 
                    let filFichaInt = parseInt(filFicha); 
        
                    let posFilFicha = "tr#"+filFichaInt;
                    let posColFicha = "td#"+colFichaInt;
            
            
                    let filaCuadro = "tr#"+(filFichaInt+1);
                    let colCuadroDer = "td#"+(colFichaInt+1);
            
                    let filaCuadroMatar = "tr#"+(filFichaInt+2);
                    let colCuadroDerMatar = "td#"+(colFichaInt+2);
        
                    let filCuadroIzq = "tr#"+(filFichaInt+1);
                    let colCuadroIzq = "td#"+(colFichaInt-1);
        
                    let filCuadroIzqMatar = "tr#"+(filFichaInt+2);
                    let colCuadroIzqMatar = "td#"+(colFichaInt-2);
            
                    
    
                    if((!filFichaInt-1)<1 || !(colFichaInt+1)>8){
            
                        if(!$(filaCuadro+" "+colCuadroDer+" .cuadroNegro").find("div").length){
                           
    
                                $(filaCuadro+" "+colCuadroDer+" .cuadroNegro").append($(posFilFicha+" "+posColFicha+" .cuadroNegro .fichaNegra"));
                                $(filaCuadro+" "+colCuadroDer+" .cuadroNegro").css({"background-color": "#806D00"});
                                
                                $(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").css({"background-color": "#806D00"});
                                $(filCuadroIzqMatar+" "+colCuadroIzqMatar+" .cuadroNegro").css({"background-color": "#806D00"});
                                jugador=true;
                                if(jugador){
                                    let texto = $("h3");
                                    texto.text("Turno de las: Blancas");
                                    $("body").append(texto);
                                }  
                        }
            
                        
                            if(!$(filaCuadroMatar+" "+colCuadroDerMatar+" .cuadroNegro").find("div").length){
            
                                if($(filaCuadro+" "+colCuadroDer+" .cuadroNegro").find("div").length){
            
                                    if($(filaCuadro+" "+colCuadroDer+" .cuadroNegro").find(".fichaBlanca").length){
            
                                        $(filaCuadroMatar+" "+colCuadroDerMatar+" .cuadroNegro").append($(posFilFicha+" "+posColFicha+" .cuadroNegro .fichaNegra"));
                                        $(filaCuadroMatar+" "+colCuadroDerMatar+" .cuadroNegro").css({"background-color": "#806D00"});  //Ilumino el cuadro
    
                                        $(filCuadroIzqMatar+" "+colCuadroIzqMatar+" .cuadroNegro").css({"background-color": "#806D00"});  //Ilumino el cuadro
                                        $(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").css({"background-color": "#806D00"});  //Ilumino el cuadro
    
                                        $(filaCuadro+" "+colCuadroDer+" .cuadroNegro").find(".fichaBlanca").remove();
                                        jugador=true;
                                        if(jugador){
                                            let texto = $("h3");
                                            texto.text("Turno de las: Blancas");
                                            $("body").append(texto);
                                        }  
  
                                    }
                                }
            
                            }                
                    }  
                },
                wheel: function name3(params) {
    
 
                    var filFicha = $(this).parent().parent().parent().attr("id");
                    var colFicha = $(this).parent().parent().attr("id");
            
                
                let colFichaInt = parseInt(colFicha); 
                let filFichaInt = parseInt(filFicha); 
    
                let posFilFicha = "tr#"+filFichaInt;
                let posColFicha = "td#"+colFichaInt;
        
        
                let filaCuadro = "tr#"+(filFichaInt+1);
                let colCuadroDer = "td#"+(colFichaInt+1);
        
                let filaCuadroMatar = "tr#"+(filFichaInt+2);
                let colCuadroDerMatar = "td#"+(colFichaInt+2);
    
                let filCuadroIzq = "tr#"+(filFichaInt+1);
                let colCuadroIzq = "td#"+(colFichaInt-1);
    
                let filCuadroIzqMatar = "tr#"+(filFichaInt+2);
                let colCuadroIzqMatar = "td#"+(colFichaInt-2);
        
                
    
                if((!filFichaInt-1)<1 || !(colFichaInt+1)>8){
        
                    if(!$(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").find("div").length){
                       
                            $(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").append($(posFilFicha+" "+posColFicha+" .cuadroNegro .fichaNegra"));
                            $(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").css({"background-color": "#806D00"});
    
                            $(filaCuadro+" "+colCuadroDer+" .cuadroNegro").css({"background-color": "#806D00"});
                            $(filaCuadroMatar+" "+colCuadroDerMatar+" .cuadroNegro").css({"background-color": "#806D00"});
                            jugador=true;
                            if(jugador){
                                let texto = $("h3");
                                texto.text("Turno de las: Blancas");
                                $("body").append(texto);
                            }  
         
                    }
        
                    
                        if(!$(filCuadroIzqMatar+" "+colCuadroIzqMatar+" .cuadroNegro").find("div").length){
        
                            if($(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").find("div").length){
        
                                if($(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").find(".fichaBlanca").length){
        
                                    $(filCuadroIzqMatar+" "+colCuadroIzqMatar+" .cuadroNegro").append($(posFilFicha+" "+posColFicha+" .cuadroNegro .fichaNegra"));
                                    $(filCuadroIzqMatar+" "+colCuadroIzqMatar+" .cuadroNegro").css({"background-color": "#806D00"});  //Ilumino el cuadro
    
                                    $(filaCuadroMatar+" "+colCuadroDerMatar+" .cuadroNegro").css({"background-color": "#806D00"});  //Ilumino el cuadro
                                    $(filaCuadro+" "+colCuadroDer+" .cuadroNegro").css({"background-color": "#806D00"});
    
                                    $(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").find(".fichaBlanca").remove();
                                    jugador=true;
                                    if(jugador){
                                        let texto = $("h3");
                                        texto.text("Turno de las: Blancas");
                                        $("body").append(texto);
                                    }  
                                }
                            }
        
                        }                
                } 
                    
                },
                mouseleave:function name4(params) {
    
                    var filFicha = $(this).parent().parent().parent().attr("id");
                    var colFicha = $(this).parent().parent().attr("id");

                    
                    let colFichaInt = parseInt(colFicha); 
                    let filFichaInt = parseInt(filFicha); 
        
                    let posFilFicha = "tr#"+filFichaInt;
                    let posColFicha = "td#"+colFichaInt;
            
            
                    let filaCuadro = "tr#"+(filFichaInt+1);
                    let colCuadroDer = "td#"+(colFichaInt+1);
            
                    let filaCuadroMatar = "tr#"+(filFichaInt+2);
                    let colCuadroDerMatar = "td#"+(colFichaInt+2);
        
                    let filCuadroIzq = "tr#"+(filFichaInt+1);
                    let colCuadroIzq = "td#"+(colFichaInt-1);
        
                    let filCuadroIzqMatar = "tr#"+(filFichaInt+2);
                    let colCuadroIzqMatar = "td#"+(colFichaInt-2);
    
                    if((!filFichaInt-1)<1 || !(colFichaInt+1)>8){
    
            
                        if(!$(filaCuadro+" "+colCuadroDer+" .cuadroNegro").find("div").length){
            
                            $(filaCuadro+" "+colCuadroDer+" .cuadroNegro").css({"background-color": "#806D00"});
                        }
            
                        
                            if(!$(filaCuadroMatar+" "+colCuadroDerMatar+" .cuadroNegro").find("div").length){
            
                                if($(filaCuadro+" "+colCuadroDer+" .cuadroNegro").find("div").length){
            
                                    if($(filaCuadro+" "+colCuadroDer+" .cuadroNegro").find(".fichaNegra").length){
            
                                        $(filaCuadroMatar+" "+colCuadroDerMatar+" .cuadroNegro").css({"background-color": "#806D00"});
                                    }
                                }
            
                            }
    
                            if(!$(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").find("div").length){
        
                                $(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").css({"background-color": "#806D00"});
                            }
    
                            
                            if(!$(filCuadroIzqMatar+" "+colCuadroIzqMatar+" .cuadroNegro").find("div").length){
        
                                if($(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").find("div").length){
            
                                    if($(filCuadroIzq+" "+colCuadroIzq+" .cuadroNegro").find(".fichaNegra").length){
            
                                        $(filCuadroIzqMatar+" "+colCuadroIzqMatar+" .cuadroNegro").css({"background-color": "#806D00"});  //Ilumino el cuadro
                                    }
                                }
            
                            } 
                    }  
                }
          });
});