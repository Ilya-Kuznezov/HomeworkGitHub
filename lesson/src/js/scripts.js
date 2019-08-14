$(document).ready(function(){
  // активация WOW
  new WOW().init();

  // маска для телефона
  $('.phone').mask('+7 (999) 999-99-99'); 

  // валидация форм
  $('#offer-form').validate({
    submitHandler: function (){
      // $('#brif-form').on('submit', function(event) {
      event.preventDefault();
      $.ajax({
        url: 'mail.php',
        tupe: 'POST',
        data: $('#offer-form').serialize(),
        success: function(data) {
          $('.success').html(alert('Спасибо за заявку, скоро мы вам перезвоним.'));
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
    } 
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
          $('.success').html(alert('Спасибо за заявку, скоро мы вам перезвоним.'));
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
      // $('#brif-form').on('submit', function(event) {
      event.preventDefault();
      $.ajax({
        url: 'mail.php',
        tupe: 'POST',
        data: $('#madal-form').serialize(),
        success: function(data) {
          $('.success').html(alert('Спасибо за заявку, скоро мы вам перезвоним.'));
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
    } 
  });

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


  // маска для телефона
  $('.phone').mask('+7 (999) 999-99-99'); 

});
