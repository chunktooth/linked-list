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


// $('.delete-btn')on('click', function() {
//   var linkInput = $('.link-input').val();
//   $(linkInput).remove();
// })

// change .site-url from on 'click' to 'keyup'