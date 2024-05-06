window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");
import "../sass/style.scss";
import "@fortawesome/fontawesome-free/js/all.js";

$(function() {
    $('.thumbnail-2').hover(function() {
        $(this).find('.project-category').hide();
        $(this).find('.caption-2').slideDown(300);
    },
    function(){
        $(this).find('.caption-2').slideUp(300);
        $(this).find('.project-category').show();
    })
})

var date = new Date();
var year = date.getFullYear();
document.getElementById("copyright-year").innerHTML = year;