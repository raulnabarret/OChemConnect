$(document).ready(function() {

    $('.button-collapse').sideNav()

    $('.carousel').carousel()
    $('.carousel.carousel-slider').carousel({ full_width: true })

    $(init)

    function init() {

        $('.card-drag').draggable({
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        })

        $('.card-drop').droppable({
        	accept: '#cardPile div',
      		hoverClass: 'hovered',
      		// drop: handleCardDrop
        })
    }

})
