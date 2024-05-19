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

// Adding and deleting active class in navbar items
var pathname = window.location.pathname;
$('.navbar-nav > li > a[href="'+pathname+'"]').addClass('active');
console.log(pathname);

if(pathname == '/blog-details.html' || pathname == '/add-blog.html') {
    $('.navbar-nav > li > a[href="/blog.html"]').addClass('active');
}

if(pathname == '/project-details.html') {
    $('.navbar-nav > li > a[href="/projects.html"]').addClass('active');
}

var date = new Date();
var year = date.getFullYear();
document.getElementById("copyright-year").innerHTML = year;