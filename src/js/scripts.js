$(document).ready(function(){
  
  new WOW().init(); // активация WOW

  var modal = $('#modal');
  var modal2 = $('#modal2');
  var close2 = $('#close2');

  $("#offer-form").validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      phone: {
        required: true
      }
    },
    messages: {
      username: {
        required: "Укажите ваше имя",
        minlength: jQuery.validator.format("осталось символов - 1"),
        maxlength: "Максимальное число символов - 15"
      },
      phone: "Укажите номер телефона"
    },
    submitHandler: function () {
        event.preventDefault();
        $.ajax({
          url: 'mail.php',
          type: 'POST',
          data: $('#offer-form').serialize(),
          success: function (data) {
            modal2.addClass('modal2_active');
            close2.on('click', function() {
              modal2.removeClass('modal2_active');
            });
            $('form :input').val('');
          }
      });
    },
    errorClass: "invalid",
    errorElement: "div",
  });

  $("#brif-form").validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true
      }
    },
  messages: {
    username: {
      required: "Укажите ваше имя",
      minlength: jQuery.validator.format("Осталось символов - 1"),
      maxlength: "Максимальное число символов - 15"
    },
    email: {
      required: "Заполните поле",
      email: "Введите корректный email"
    },
    phone: {
      required: "Укажите номер телефона",
    },
  },
  submitHandler: function () {
    /* $('#offer-form').on('submit', function (event) { */
    event.preventDefault();
    $.ajax({
      url: 'mail.php',
      type: 'POST',
      data: $('#brif-form').serialize(),
      success: function (data) {
        modal2.addClass('modal2_active');
        close2.on('click', function() {
          modal2.removeClass('modal2_active');
        });
        $('form :input').val('');
      }
      /* }); */
    });
  },
    errorClass: "invalid",
    errorElement: "div",
  });
$("#modal-form").validate({
  rules: {
    username: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    phone: {
      required: true
    }
  },
  messages: {
    username: {
      required: "Укажите ваше имя",
      minlength: jQuery.validator.format("Осталось символов - 1"),
      maxlength: "Максимальное число символов - 15"
    },
    phone: {
      required: "Укажите номер телефона"
    }
  },
  submitHandler: function () {
    /* $('#offer-form').on('submit', function (event) { */
    event.preventDefault();
    $.ajax({
      url: 'mail.php',
      type: 'POST',
      data: $('#modal-form').serialize(),
      success: function (data) {
        modal.removeClass('modal_active');
        modal2.addClass('modal2_active');
        close2.on('click', function() {
          modal2.removeClass('modal2_active');
        });
        $('form :input').val('');
      }
      /* }); */
    });
  },
  errorClass: "invalid",
  errorElement: "div",
});

  $('.phone').mask('+7 (999) 999-99-99');
});