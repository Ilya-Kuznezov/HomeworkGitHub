$(document).ready(function(){
  $('#offer-form').on('submit', function(event) {
    event.preventDefault();
    $.ajax({
      url: 'mail.php',
      tupe: 'POST',
      data: $(this).serialize(),
      success: function(data) {
        $('.success').html(alert('Спасибо за заявку, скоро мы вам перезвоним.'));
        $('form :input').val('');
      }
      
    })

  });
});
