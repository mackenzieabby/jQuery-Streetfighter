$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu_still').hide();
    $('.ryu_ready').show();
  })
  .mouseleave(function() {
    $('.ryu_ready').hide();
    $('.ryu_still').show();
  })
  .mousedown(function() {
  	playHadouken();
  	$('.ryu_ready').hide();
  	$('.ryu_power').show();
  	$('.hadouken').finish().show()
    .animate(
  		{'left': '1020px'},500,
  		function() {
      $(this).stop();
  		$(this).hide();
  		$(this).css('left', '520px');
  	});
  })
  .mouseup(function() {
  	$('.ryu_power').hide();
  	$('.hadouken').hide();
  	$('.ryu_ready').show();
  })
  $(document).keydown(function(e) {
    if (e.keyCode == 88) {
      $('.ryu_ready').hide(); 
      $('.ryu_cool').show();
    };   
  })
  $(document).keyup(function(e) {
    if (e.keyCode == 88) {
      $('.ryu_cool').hide();
      $('.ryu_ready').show();
      $(this).stop();
    };
  });
  //Intro // // Hides Canvas //
$('.hidden').hide();
$('.developer h1').fadeIn(3000);
$('.hidden').fadeIn(6000);

});
// Sets volume, loads and plays sounds when used //
function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}