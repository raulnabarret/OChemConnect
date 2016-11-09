var arrNombresLista = ["metano", "etano", "propano", "butano", "pentano", "hexano", "heptano", "octano", "nonano", "decano", "undecano", "duodecano"];
var arrNom = ["vacio", "vacio", "vacio", "vacio", "vacio", "vacio", "vacio", "vacio", "vacio", "vacio", "vacio", "vacio"];
var arrEstr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var arrEstrBool = [false, false, false, false, false, false, false, false, false, false, false, false];
var arrNomBool = [false, false, false, false, false, false, false, false, false, false, false, false];

var contador = 0;
var nomIncorrecto = false;
var estrIncorrecto = false;
var correctCards = 0;

Array.prototype.equals = function(array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l = this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;
        } else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}

$(document).ready(function() {

    $('.button-collapse').sideNav()

    $('.carousel').carousel()
    $('.carousel.carousel-slider').carousel({ full_width: true })


    // GAME 1

    $(init)

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

        ui.draggable.addClass('indigo lighten-5')
        ui.draggable.draggable('disable')

        $(this).droppable('disable')
        ui.draggable.position({ of: $(this), my: 'left top', at: 'left top' })
        ui.draggable.draggable('option', 'revert', false)

        arrNom[contador] = cardName;
        arrNomBool[contador] = true;

        contador++;

    }

    function handleCardEstrDrop(event, ui) {
        var slotStructure = $(this).data('estructura')
        var cardStructure = ui.draggable.data('estructura')

        ui.draggable.addClass('indigo lighten-5')
        ui.draggable.draggable('disable')

        $(this).droppable('disable')
        ui.draggable.position({ of: $(this), my: 'left top', at: 'left top' })
        ui.draggable.draggable('option', 'revert', false)

        arrEstr[slotStructure - 1] = cardStructure;
        arrEstrBool[slotStructure - 1] = true;

    }

    // GAME 2

    function myFunction() {
        console.log("hola")
    }

})

function checar() {
    for ($x = 0; $x < 12; $x++) {
        if (arrEstrBool[$x] == true) {
            if (arrEstr[$x] == $x + 1) {
                var el = document.getElementById("card-estr-" + arrNombresLista[$x]);
                removeClass(el, 'indigo.lighten-5');
                addClass(el, 'correct');
                correctCards++;
            } else {
                var incorrectCard = arrEstr[$x];
                var el = document.getElementById("card-estr-" + arrNombresLista[incorrectCard - 1]);
                removeClass(el, 'indigo.lighten-5');
                addClass(el, 'incorrect');

                estrIncorrecto = true;
            }
        }

        if (arrNomBool[$x] == true) {
            if (arrNom[$x] == arrNombresLista[$x]) {
                var el = document.getElementById("card-nom-" + arrNombresLista[$x]);
                removeClass(el, 'indigo.lighten-5');
                addClass(el, 'correct');
                correctCards++;
            } else {
                var el = document.getElementById("card-nom-" + arrNom[$x]);
                removeClass(el, 'indigo.lighten-5');
                addClass(el, 'incorrect');

                nomIncorrecto = true;
            }
        }
    }
    $('body, html').animate({ scrollTop: 900 }, 800);

    if (estrIncorrecto == false && nomIncorrecto == false && correctCards == 24) {
        alert("Todo esta correcto!")
    }
}

function hasClass(ele, cls) {
    return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
    if (!this.hasClass(ele, cls)) ele.className += " " + cls;
}

function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}

// Game 3

$(document).ready(function() {

    // Initialize Image
    $("select").imagepicker({
        limit: 5,
        selected: selectedImages
    })

    function selectedImages() {

        var correcto = ["2", "4", "6", "8", "10"]

        var miArray = []
        miArray.push($(this).val())
        miArray = miArray.sort()

        console.log(miArray[0])

        if (correcto.equals(miArray[0])) {
            alert("asdasdas")
        }

    }

})
