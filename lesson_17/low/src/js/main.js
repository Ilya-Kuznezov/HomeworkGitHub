var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');
var close2 = document.querySelector('#close2');

button.addEventListener('click', function(){
  modal.classList.add('modal_active');
});

close.addEventListener('click', function() {
  modal.classList.remove('modal_active');
})

close2.addEventListener('click', function() {
  modal.classList.remove('modal_active');
})