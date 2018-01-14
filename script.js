// keep total current links count
// keep total current read & unread count
// clear all read bookmarks

$('.title-input').on('input', enableButton);
$('.link-input').on('input', enableButton);
$('.enter-btn').on('click', addToCard);
$('.right-column').on('click', '.read', readCard);
$('.right-column').on('click', '.delete-btn', deleteCard);

function enableButton(e) {
    e.preventDefault();
    var titleInput = $('.title-input');
    var linkInput = $('.link-input');
    if(titleInput.val() && linkInput.val()) {
        $('.enter-btn').attr('disabled', false);
        $('.required-input').text('');
        validateLink(linkInput);
    } else {
        $('.enter-btn').attr('disabled', true);
        $('.required-input').text('Please fill out both fields');
    }
}

function addToCard(e){
    e.preventDefault();
    var titleInput = $('.title-input').val();
    var linkInput = $('.link-input').val();
    $('.right-column').append(`<div class="site-box">
    <h2 class="site-title">${titleInput}</h2>
    <a class="site-url" href=${linkInput}>${linkInput}</a>
    <button class="read">Mark as Read</button>
    <button class="delete-btn">Delete</button>
  </div>`);   
    $('.title-input').val('');
    $('.link-input').val('');
    $('.required-input').text('');
}

function validateLink(linkInput) {
    var linkInput = linkInput.val();
    var emailRegex =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if(emailRegex.test(linkInput) === true) {
        $('.required-input').text('');
        $('enter-btn').attr('disabled', false);
        return true;
    } else {
        $('.required-input').text('Please enter valid URL');
        $('.enter-btn').attr('disabled', true);
    }
}

function readCard() {
    $(this).parent().toggleClass('marked-read');
}

function deleteCard() {
    $(this).parent().remove();
}