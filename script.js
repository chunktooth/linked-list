
  
$('.enter-btn').on('click', function () {
  event.preventDefault();
  var siteInput = $('.title-input').val();
  $('.site-title').text(siteInput);
  var linkInput = $('.link-input').val();
  $('.site-url').text(linkInput);
  $(':input').val('');
});

$('.site-url').on('click', function () {
  ('.read-btn').addClass('read').prop('disabled');
});

// change .site-url from on 'click' to 'keyup'