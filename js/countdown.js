const year = new Date().getFullYear();
const fourthOfJuly = new Date(year, 12,4).getTime();
const fourthOfJulyNextYear = new Date(year + 1, 6, 4).getTime();
const month = new Date().getMonth();

// countdown
let timer = setInterval(function() {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  let diff;
  if(month > 6) {
    diff = fourthOfJuly - today;
  }




  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>DIAS</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>HORAS</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>MINUTOS</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>SEGS</div> \
</div>";

}, 1000);

