var arrNombresLista = ["metano", "etano", "propano", "butano", "pentano", "hexano", "heptano", "octano", "nonano", "decano", "undecano", "duodecano"]
var arrNom = ["vacio", "vacio", "vacio", "vacio", "vacio", "vacio", "vacio", "vacio", "vacio", "vacio", "vacio", "vacio"]
var arrEstr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var arrEstrBool = [false, false, false, false, false, false, false, false, false, false, false, false]
var arrNomBool = [false, false, false, false, false, false, false, false, false, false, false, false]

var contador = 0
var nomIncorrecto = false
var estrIncorrecto = false
var correctCards = 0

var $progress = $('#progressBar')
$progress.css('width', '0%')
var progressBar = 0


// Function to Compare Two Arrays
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
        progressBar++
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

// Game 2

var correctEquations = 0

function checkEquations() {

    // Input 1
    if ($("#input-1").val() == 'CH4') {
        correctEquations++
        $("#input-1").removeClass('invalid')
        $("#input-1").addClass('valid')
    } else {
        $("#input-1").removeClass('valid');
        $("#input-1").addClass('invalid');
    }

    // Input 2
    if ($("#input-2").val() == '7O2') {
        correctEquations++
        $("#input-2").removeClass('invalid')
        $("#input-2").addClass('valid')
    } else {
        $("#input-2").removeClass('valid');
        $("#input-2").addClass('invalid');
    }

    // Input 3
    if ($("#input-3").val() == 'CH2') {
        correctEquations++
        $("#input-3").removeClass('invalid')
        $("#input-3").addClass('valid')
    } else {
        $("#input-3").removeClass('valid');
        $("#input-3").addClass('invalid');
    }

    // Input 4
    if ($("#input-4").val() == '4O2') {
        correctEquations++
        $("#input-4").removeClass('invalid')
        $("#input-4").addClass('valid')
    } else {
        $("#input-4").removeClass('valid');
        $("#input-4").addClass('invalid');
    }

    // Input 5
    if ($("#input-5").val() == '2H3C') {
        correctEquations++
        $("#input-5").removeClass('invalid')
        $("#input-5").addClass('valid')
    } else {
        $("#input-5").removeClass('valid');
        $("#input-5").addClass('invalid');
    }

    // Input 6
    if ($("#input-6").val() == 'CH3') {
        correctEquations++
        $("#input-6").removeClass('invalid')
        $("#input-6").addClass('valid')
    } else {
        $("#input-6").removeClass('valid');
        $("#input-6").addClass('invalid');
    }

    // Input 7
    if ($("#input-7").val() == 'CH2') {
        correctEquations++
        $("#input-7").removeClass('invalid')
        $("#input-7").addClass('valid')
    } else {
        $("#input-7").removeClass('valid');
        $("#input-7").addClass('invalid');
    }

    //Input 8 
    if ($("#input-8").val() == 'CH2') {
        correctEquations++
        $("#input-8").removeClass('invalid')
        $("#input-8").addClass('valid')
    } else {
        $("#input-8").removeClass('valid');
        $("#input-8").addClass('invalid');
    }

    //Input 9
    if ($("#input-9").val() == '8O2') {
        correctEquations++
        $("#input-9").removeClass('invalid')
        $("#input-9").addClass('valid')
    } else {
        $("#input-9").removeClass('valid');
        $("#input-9").addClass('invalid');
    }

    //Input 10
    if ($("#input-10").val() == '2H3C') {
        correctEquations++
        $("#input-10").removeClass('invalid')
        $("#input-10").addClass('valid')
    } else {
        $("#input-10").removeClass('valid');
        $("#input-10").addClass('invalid');
    }

    //Input 11 
    if ($("#input-11").val() == 'CH3') {
        correctEquations++
        $("#input-11").removeClass('invalid')
        $("#input-11").addClass('valid')
    } else {
        $("#input-11").removeClass('valid');
        $("#input-11").addClass('invalid');
    }

    //Input 12 
    if ($("#input-12").val() == 'CH2') {
        correctEquations++
        $("#input-12").removeClass('invalid')
        $("#input-12").addClass('valid')
    } else {
        $("#input-12").removeClass('valid');
        $("#input-12").addClass('invalid');
    }

    //Input 13 
    if ($("#input-13").val() == '11O2') {
        correctEquations++
        $("#input-13").removeClass('invalid')
        $("#input-13").addClass('valid')
    } else {
        $("#input-13").removeClass('valid');
        $("#input-13").addClass('invalid');
    }

    //Input 14 
    if ($("#input-14").val() == '2H3C') {
        correctEquations++
        $("#input-14").removeClass('invalid')
        $("#input-14").addClass('valid')
    } else {
        $("#input-14").removeClass('valid');
        $("#input-14").addClass('invalid');
    }

    //Input 15
    if ($("#input-15").val() == '25O2') {
        correctEquations++
        $("#input-15").removeClass('invalid')
        $("#input-15").addClass('valid')
    } else {
        $("#input-15").removeClass('valid');
        $("#input-15").addClass('invalid');
    }

    //Input 16 
    if ($("#input-16").val() == 'H3C') {
        correctEquations++
        $("#input-16").removeClass('invalid')
        $("#input-16").addClass('valid')
    } else {
        $("#input-16").removeClass('valid');
        $("#input-16").addClass('invalid');
    }

    //Input 17 
    if ($("#input-17").val() == 'CH3') {
        correctEquations++
        $("#input-17").removeClass('invalid')
        $("#input-17").addClass('valid')
    } else {
        $("#input-17").removeClass('valid');
        $("#input-17").addClass('invalid');
    }

    //Input 18
    if ($("#input-18").val() == '14O2') {
        correctEquations++
        $("#input-18").removeClass('invalid')
        $("#input-18").addClass('valid')
    } else {
        $("#input-18").removeClass('valid');
        $("#input-18").addClass('invalid');
    }

    //Input 19
    if ($("#input-19").val() == '2H3C') {
        correctEquations++
        $("#input-19").removeClass('invalid')
        $("#input-19").addClass('valid')
    } else {
        $("#input-19").removeClass('valid');
        $("#input-19").addClass('invalid');
    }

    //Input 20
    if ($("#input-20").val() == 'CH2') {
        correctEquations++
        $("#input-20").removeClass('invalid')
        $("#input-20").addClass('valid')
    } else {
        $("#input-20").removeClass('valid');
        $("#input-20").addClass('invalid');
    }

    //Input 21 
    if ($("#input-21").val() == 'CH3') {
        correctEquations++
        $("#input-21").removeClass('invalid')
        $("#input-21").addClass('valid')
    } else {
        $("#input-21").removeClass('valid');
        $("#input-21").addClass('invalid');
    }

    //Input 22 
    if ($("#input-22").val() == '31O2') {
        correctEquations++
        $("#input-22").removeClass('invalid')
        $("#input-22").addClass('valid')
    } else {
        $("#input-22").removeClass('valid');
        $("#input-22").addClass('invalid');
    }

    if (correctEquations == 22) {
        alert("Ganaste")
        progressBar++
        correctEquations = 0
    } else {
        correctEquations = 0
        alert("Revisa tus respuestas")
    }
}

// Game 3


// Initialize Image Picker
$(document).ready(function() {
    $("select").imagepicker({
        limit: 5,
        selected: checkSelectedImages
    })


    // Function Called When Images Have Been Picked
    function checkSelectedImages() {

        // Array With Correct Images
        var correctImages = ["2", "4", "6", "8", "10"]

        // Create New Arrays
        var selectedImages = []
            // Stack Selected Images in Array
        selectedImages.push($(this).val())
            // Sort Array of Selected Images
        selectedImages = selectedImages.sort()

        // Check If Both Arrays Match 
        if (correctImages.equals(selectedImages[0])) {
            alert("Has Ganado!")
            progressBar++
            console.log(progressBar)
        } else if (!correctImages.equals(selectedImages[0]) && selectedImages[0].length == 5) {
            alert("Perdiste!")
        }
    }
})

$(document).ready(function() {

    if (progressBar == 1) {
        $progress.css({ 'width': '33%' })
    } else if (progressBar == 2) {
        $progress.css({ 'width': '99%' })
    } else if (progressBar == 3) {
        $progress.css({ 'width': '100%' })
    }
})
