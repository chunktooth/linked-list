// most recent JS


$('.enter-btn').on('click', function() {
    var titleInput = $('.title-input').val();
    var linkInput = $('.link-input').val();
    event.preventDefault();
    $('.site-title').text(titleInput);
    $('.site-url').text(linkInput);
    $(':input').val('');
});

$('.read').on('click', function() {
    $(this).toggleClass('read-red');
});


// find better way to restore default values!!!
$('.delete-btn').on('click', function() {
  var siteTitle = $('.site-title');
  var siteUrl = $('.site-url');
  $(siteTitle).text('The Website Title');
  $(siteUrl).text('www.thewebsiteurl.com');
});






// change .site-url from on 'click' to 'keyup'