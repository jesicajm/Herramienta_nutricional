$(document).ready(()=>{
//menu pantallas pequeñas//
  $('#menuButton').on('click',()=>{
    $('.container-fluid').addClass('container-fluid-active');
    $('.menu-pp').show();	
  });

   $('#dropdownMenuButton').on('click',()=>{
   	$('.menu-pp').hide();
    $('.container-fluid').removeClass('container-fluid-active');	
  });

  $('#botonMenuUsuario').on('click',()=>{
   $('.menuUsuario').toggle();
  });
 
  $('.usuario').on('click',()=>{
   $('.dropdown-menu-pp').toggle();
  });

 /*$(document).click(()=>{
    ('.menu-pp').hide();
  });*/

//clientes//

  $('.botonClientes').on('click',()=>{
  	$('.botonClientes').addClass('botonClientes-click');
  });

//tareas//
  
  $('.boton-tareas').click(function(){
  	$('.boton-tareas').removeClass('botonTareas-active')
    $(this).addClass('botonTareas-active')
  });
   
//consulta nutricional//
  $('.indicadores-salud').click(function(){
  	$('.indicadores-salud').removeClass('botonIndicadoressaludActive')
    $(this).addClass('botonIndicadoressaludActive')
  });

  $('#boton-imc').click(function(){
  	$('#calorias').hide()
    $('#riesgo').hide()
    $('#imc').show();
  });

  $('#boton-riesgo').click(function(){
    $('#imc').hide()
    $('#calorias').hide()
    $('#riesgo').show()
    $('#riesgo').css('display','flex')
 });

  $('#boton-caloricas').click(function(){
    $('#imc').hide()
    $('#riesgo').hide()  
    $('#calorias').show()
    $('#calorias').css('display','flex');
 });

//plan de alimentacion//
  $('.boton-semana').click(function(){
  	$('.boton-semana').removeClass('boton-semanaActive')
    $(this).addClass('boton-semanaActive')
  });

$('.boton-dias').click(function(){
  	$('.boton-dias').removeClass('boton-diasActive')
    $(this).addClass('boton-diasActive')
  });

$('#navbarDropdown').click(function(){
  	$('#navbarDropdown').addClass('boton-menup-active')
  });
 
});