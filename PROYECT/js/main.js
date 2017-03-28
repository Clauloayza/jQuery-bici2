$(document).ready(function(){
    
    $('#btnc').click(function(){
        $('#calculador').val("");
    })
    
    $('#btnca').click(function(){
        $('#calculador').val("");
        $('#cantidad1').text("");
    })
    
    
    creaCadena('btn0', 0);
    creaCadena('btn1', 1);
    creaCadena('btn2', 2);
    creaCadena('btn3', 3);
    creaCadena('btn4', 4);
    creaCadena('btn5', 5);
    creaCadena('btn6', 6);
    creaCadena('btn7', 7);
    creaCadena('btn8', 8);
    creaCadena('btn9', 9);
    creaCadena('btnpunto', '.');
    
    creaOperacion('btndiv','/');
    creaOperacion('btnmulti','x');
    creaOperacion('btnsum','+');
    creaOperacion('btnmen','-');
});


function creaCadena(control, valor){
    $('#' + control).click(function(){
        var valActual = $('#calculador').val();
        cadena = valActual + valor;
        $('#calculador').val(cadena);
    })
}

function creaOperacion(control, operacion){
    $('#' + control).click(function(){
       valorActual = $('#calculador').val();
        $('#cantidad1').text(operacion+" "+valorActual);
        $('#calculador').val("");
    });
}
function operacionCompleta(){
    valorActual = $('#calculador').val();
    cantidadGuardada = $('#cantidad1').text();
    tipo = cantidadGuardada.split(" ");
    
    switch(tipo[0]){
        case '+':
            resultado = parseInt(valorActual) + parseInt(tipo [1]);
            $('#calculador').val(resultado);
        break;
        case '-':
            resultado = parseInt(valorActual) - parseInt(tipo [1]);
            $('#calculador').val(resultado);
        break;
        case 'x':
            resultado =  parseInt(tipo [1]) * parseInt(valorActual);
            $('#calculador').val(resultado);
        break;
        case '/':
            resultado =parseInt(tipo [1]) / parseInt(valorActual) ;
            $('#calculador').val(resultado);
        break;
    }
}

//------------------------
function calcular_total() {
	importe_total = 0
	$(".importe_linea").each(
		function(index, value) {
			importe_total = importe_total + eval($(this).val());
		}
	);
	$("#total").val(importe_total);
}
 
function nueva_linea() {
	$("#lineas").append('<input type="text" class="importe_linea" value="0"/><br/>');
}

