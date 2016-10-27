$(document).ready(function() {

    $('.button-collapse').sideNav()

    $('.carousel').carousel()
    $('.carousel.carousel-slider').carousel({ full_width: true })

    $(init)

    var correctCards = 0

    function init() {

        $('.card-nom-drag').draggable({
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        })

        $('#card-nom-metano').data('nombre', 'metano')
        $('#card-nom-etano').data('nombre', 'etano')
        $('#card-nom-propano').data('nombre', 'propano')
        $('#card-nom-butano').data('nombre', 'butano')
        $('#card-nom-pentano').data('nombre', 'pentano')
        $('#card-nom-hexano').data('nombre', 'hexano')
        $('#card-nom-heptano').data('nombre', 'heptano')
        $('#card-nom-octano').data('nombre', 'octano')
        $('#card-nom-nonano').data('nombre', 'nonano')
        $('#card-nom-decano').data('nombre', 'decano')
        $('#card-nom-undecano').data('nombre', 'undecano')
        $('#card-nom-duodecano').data('nombre', 'duodecano')

        $('.card-estr-drag').draggable({
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        })

        $('#card-estr-metano').data('estructura', '1')
        $('#card-estr-etano').data('estructura', '2')
        $('#card-estr-propano').data('estructura', '3')
        $('#card-estr-butano').data('estructura', '4')
        $('#card-estr-pentano').data('estructura', '5')
        $('#card-estr-hexano').data('estructura', '6')
        $('#card-estr-heptano').data('estructura', '7')
        $('#card-estr-octano').data('estructura', '8')
        $('#card-estr-nonano').data('estructura', '9')
        $('#card-estr-decano').data('estructura', '10')
        $('#card-estr-undecano').data('estructura', '11')
        $('#card-estr-duodecano').data('estructura', '12')

        $('.slot-nom-drop').droppable({
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardNomDrop
        })

        $('#slot-nom-metano').data('nombre', 'metano')
        $('#slot-nom-etano').data('nombre', 'etano')
        $('#slot-nom-propano').data('nombre', 'propano')
        $('#slot-nom-butano').data('nombre', 'butano')
        $('#slot-nom-pentano').data('nombre', 'pentano')
        $('#slot-nom-hexano').data('nombre', 'hexano')
        $('#slot-nom-heptano').data('nombre', 'heptano')
        $('#slot-nom-octano').data('nombre', 'octano')
        $('#slot-nom-nonano').data('nombre', 'nonano')
        $('#slot-nom-decano').data('nombre', 'decano')
        $('#slot-nom-undecano').data('nombre', 'undecano')
        $('#slot-nom-duodecano').data('nombre', 'duodecano')

        $('.slot-estr-drop').droppable({
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardEstrDrop
        })        

        $('#slot-estr-metano').data('estructura', '1')
        $('#slot-estr-etano').data('estructura', '2')
        $('#slot-estr-propano').data('estructura', '3')
        $('#slot-estr-butano').data('estructura', '4')
        $('#slot-estr-pentano').data('estructura', '5')
        $('#slot-estr-hexano').data('estructura', '6')
        $('#slot-estr-heptano').data('estructura', '7')
        $('#slot-estr-octano').data('estructura', '8')
        $('#slot-estr-nonano').data('estructura', '9')
        $('#slot-estr-decano').data('estructura', '10')
        $('#slot-estr-undecano').data('estructura', '11')
        $('#slot-estr-duodecano').data('estructura', '12')
    }

    function handleCardNomDrop(event, ui) {
        var slotName = $(this).data('nombre')
        var cardName = ui.draggable.data('nombre')

        if (slotName == cardName) {
            ui.draggable.addClass('green')
            ui.draggable.draggable('disable')

            $(this).droppable('disable')
            ui.draggable.position({ of: $(this), my: 'left top', at: 'left top' })
            ui.draggable.draggable('option', 'revert', false)
            correctCards++
        }

    }

    function handleCardEstrDrop(event, ui) {
        var slotStructure = $(this).data('estructura')
        var cardStructure = ui.draggable.data('estructura')

        if (slotStructure == cardStructure) {
            ui.draggable.addClass('green')
            ui.draggable.draggable('disable')

            $(this).droppable('disable')
            ui.draggable.position({ of: $(this), my: 'left top', at: 'left top' })
            ui.draggable.draggable('option', 'revert', false)
            correctCards++
        }

    }

})
