$('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 400
});
$('#container').imagesLoaded( {
    // options...
},
function() {
    // images have loaded
});