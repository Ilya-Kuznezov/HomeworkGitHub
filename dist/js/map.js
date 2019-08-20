$(document).ready(function(){
  var help = $('.price');
  var helpTop = help.offset().top;
  $(window).bind('scroll', function(){
    var windowTop = $(this).scrollTop();
    if (windowTop > helpTop) {
      $('#map').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5359.646921431828!2d37.196795585286324!3d55.61151664053169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b556d92c52e921%3A0x7069f1a444f51ab2!2z0YPQuy4g0JvQtdC90LjQvdCwLCAxMCwg0KLQvtC70YHRgtC-0L_QsNC70YzRhtC10LLQviwg0JzQvtGB0LrQstCwLCAxNDMzNTA!5e0!3m2!1sru!2sru!4v1565968701111!5m2!1sru!2sru" width="100%" height="630px" frameborder="0" style="border:0" allowfullscreen></iframe>'),
      $(window).unbind('scroll')
    }
  });
});
