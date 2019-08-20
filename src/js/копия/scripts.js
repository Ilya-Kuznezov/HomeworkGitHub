$(document).ready(function(){
  // активация WOW
  new WOW().init();
  var modal = $('#modal');
  var modal2 = $('#modal2');
  var close2 = $('#close2');
 

  // валидация форм
  $('#offer-form').validate({

    errorElement: "div",
    errorClass: "invalid",
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 16
      },
      phone: {
        required: true,
      }
    },
    messages: {
      username: {
        required: "Укажите имя",
        minlength: jQuery.validator.format("Осталось символов: {0}"),
        maxlength: jQuery.validator.format("максимальное количество символов: {0}")
      },
      phone: {
        required: "Укажите телефон"
      }
    },
    submitHandler: function (){
      event.preventDefault();
      $.ajax({
        url: 'mail.php',
        tupe: 'POST',
        data: $('#offer-form').serialize(),
        success: function(data) {
 
          modal.addClass('modal_active');
          close.on('click', function() {
            modal.removeClass('modal_active');
          })
          $('form :input').val('');
        }
      });
    },
  });

  $('#brif-form').validate({
    submitHandler: function (){
      // $('#brif-form').on('submit', function(event) {
      event.preventDefault();
      $.ajax({
        url: 'mail.php',
        tupe: 'POST',
        data: $('#brif-form').serialize(),
        success: function(data) {
          var modal = $('#modal2');
          var close = $('#close2');
          modal.addClass('modal_active');
          close.on('click', function() {
            modal.removeClass('modal_active');
          })
          $('form :input').val('');
        }
      })
    // });
    },
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 16
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
      }
    },
    messages: {
      username: {
        required: "Укажите имя",
        minlength: jQuery.validator.format("Осталось символов: {0}"),
        maxlength: jQuery.validator.format("максимальное количество символов: {0}")
      },
      phone: {
        required: "Укажите телефон"
      },
      email: {
        required: "Заполните поле",
        email: "Введите корректный E-mail"
      }
    } 
  });

  $('#modal-form').validate({
    submitHandler: function (){
      event.preventDefault();
      $.ajax({
        url: 'mail.php',
        tupe: 'POST',
        data: $('#modal-form').serialize(),
        success: function(data) {

          modal.removeClass('modal_active');
          modal2.addClass('modal2_active');
          close2.on('click', function() {
            modal2.removeClass('modal2_active');
          })
          
          $('form :input').val('');
        }
      })
    },
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 16
      },
      phone: {
        required: true,
      }
    },
    messages: {
      username: {
        required: "Укажите имя",
        minlength: jQuery.validator.format("Осталось символов: {0}"),
        maxlength: jQuery.validator.format("максимальное количество символов: {0}")
      },
      phone: {
        required: "Укажите телефон"
      },
    },
   
  });

   // маска для телефона
   $('.phone').mask('+7 (999) 999-99-99'); 

  // $('#offer-form').on('submit', function(event) {
  //   event.preventDefault();
  //   $.ajax({
  //     url: 'mail.php',
  //     tupe: 'POST',
  //     data: $(this).serialize(),
  //     success: function(data) {
  //       $('.success').html(alert('Спасибо за заявку, скоро мы вам перезвоним.'));
  //       /* $('form :input').val(''); */
  //     }
  //   })
  // });

  // $('#brif-form').on('submit', function(event) {
  //   event.preventDefault();
  //   $.ajax({
  //     url: 'mail.php',
  //     tupe: 'POST',
  //     data: $(this).serialize(),
  //     success: function(data) {
  //       $('.success').html(alert('Спасибо за заявку, скоро мы вам перезвоним.'));
  //       /* $('form :input').val(''); */
  //     }
  //   })
  // });

});
