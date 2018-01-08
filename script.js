// display error when 1/2 inputs blank
// valid URL only
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
    } else {
        $('.enter-btn').attr('disabled', true);
    }
}

function addToCard(e){
    e.preventDefault();
    var titleInput = $('.title-input').val();
    var linkInput = $('.link-input').val();
    $('.title-input').val('');
    $('.link-input').val('');
    $('.right-column').append(`<div class="site-box">
    <h2 class="site-title">${titleInput}</h2>
    <a class="site-url" href=${linkInput}>${linkInput}</a>
    <button class="read">Read</button>
    <button class="delete-btn">Delete</button>
  </div>`);
}

function readCard() {
    $(this).parent().toggleClass('card-read');
}

function deleteCard() {
    $(this).parent().remove();
}