/*document.body.onload = function(){
  alert('Page finished loading');
}*/

$(document).ready(function(){

  $('ul li a').hover(function(e){
    $(this).addClass('hover');
  }, function(){
    $(this).removeClass('hover');
  });

  $('html').show('slow');

})
