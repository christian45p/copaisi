var readmore = [];
var text = [];
for(let i = 1; i <=9; i++){
  readmore[i]=document.querySelector('.read-more-btn'+i);
  text[i] = document.querySelector('.text'+i);
  readmore[i].addEventListener('click', (e)=>{
    text[i].classList.toggle('show-more'+i);
    if(readmore[i].innerText ==='Leer menos'){
      readmore[i].innerText = ' Leer más';
    }else{
      readmore[i].innerText = 'Leer menos';
    }
  })
}

function toggler(divId) {
  $("#" + divId).toggle();
}
function mostrarm(){
  document.getElementById('miercoles').style.display = 'block';
  document.getElementById('jueves').style.display = 'none';
  document.getElementById('viernes').style.display = 'none';
  document.getElementById('sabado').style.display = 'none';
}
function mostrarj(){
  document.getElementById('miercoles').style.display = 'none';
  document.getElementById('jueves').style.display = 'block';
  document.getElementById('viernes').style.display = 'none';
  document.getElementById('sabado').style.display = 'none';
}
function mostrarv(){
  document.getElementById('miercoles').style.display = 'none';
  document.getElementById('jueves').style.display = 'none';
  document.getElementById('viernes').style.display = 'block';
  document.getElementById('sabado').style.display = 'none';
}
function mostrars(){
  document.getElementById('miercoles').style.display = 'none';
  document.getElementById('jueves').style.display = 'none';
  document.getElementById('viernes').style.display = 'none';
  document.getElementById('sabado').style.display = 'block';
}

function botoncrono(){
  $(window).resize(function() {
    var anchopantalla=$(window).width();
    const botonm = document.getElementById('botonm');
    const botonj = document.getElementById('botonj');
    const botonv = document.getElementById('botonv');
    const botons = document.getElementById('botons');
    if(anchopantalla < 430){
      
      botonm.innerHTML = '15 dic';
      botonj.innerHTML = '16 dic';
      botonv.innerHTML = '17 dic';
      botons.innerHTML = '18 dic';
    }
    else{

      botonm.innerHTML = 'Miércoles, 15 de diciembre';
      botonj.innerHTML = 'Jueves, 16 de diciembre';
      botonv.innerHTML = 'Viernes, 17 de diciembre';
      botons.innerHTML = 'Sabado, 18 de diciembre';
    }
  });

  
}
botoncrono();
