
function getIt() {
 $('p').on('click', () => {
  alert('Hey!')
 })
}


function frameIt() {
 $('img').on('load', () => {
  $('img').addClass("tasty")
 })
}

function pressIt() {
 $(document).on('keydown', function(key) { 
  if (key.which === 71) { alert('!') } 
 }) 
}//func

function submitIt() {
 $('form').on('submit', function() {
   alert('Your form is going to be submitted now.')
 })
}

$(document).ready(function(){
 getIt();
 frameIt();
 pressIt();
});


// $("form").on("submit", function() {
//   if ($( "input:first" ).val() === "correct") {
//     alert('your form is going to be submitted now');
//     return;
//   }
//   alert("you entered the wrong value");
//   return;
// });