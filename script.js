 $('.enter-btn').on('click', submitInput);

function submitInput() {
    var titleInput = $('.title-input').val();
    var linkInput = $('.link-input').val();
    $('form')[0].reset();
    addBox(titleInput, linkInput);
}


function addBox(titleInput, linkInput) {
    var newBox = $('.right-column').append(`<div class="site-box">
    <h2 class="site-title">${titleInput}</h2>
    <p class="site-url">${linkInput}</p>
    <button class="read">Read</button>
    <button class="delete-btn">Delete</button>
  </div>`);
}


$('.right-column').on('click', function(event) {
    if(event.target.matches('.read')) {
        readLink(event);
    }
    if(event.target.matches('.delete-btn')) {
        deleteLink(event);
    }
});
function readLink(event) {
    event.target.classList.add('read-red');
    event.target.parentNode.style.backgroundColor = '#F2F4F4';
}
function deleteLink(event) {
    event.target.parentNode.remove();
}


