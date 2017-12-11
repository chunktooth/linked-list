$('.enter-btn').on('click', function() {
  var titleInput = $('.title-input').val();
  var linkInput = $('.link-input').val();
  event.preventDefault();
  $('.site-title').text(titleInput);
  $('.site-url').text(linkInput);
  console.log(titleInput + linkInput);
  $(':input').val('');
});

  $('.read').on('click', function() {
    $(this).toggleClass('read-red')
  });


// $('.site-url').on('click', function () {
//   ('.read-btn').addClass('read').prop('disabled');
// });

// change .site-url from on 'click' to 'keyup'