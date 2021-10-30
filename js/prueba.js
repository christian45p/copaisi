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

