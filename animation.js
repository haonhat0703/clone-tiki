var row_right = document.getElementsByClassName("row-right");
var row_left = document.getElementsByClassName("row-left"); 
var list = document.getElementsByClassName("list-list");

row_right[0].addEventListener ('click', function(){
    row_right[0].classList.toggle ("hidden");
    row_left[0].classList.toggle("hidden");
    list[0].classList.toggle("trans");
});

row_left[0].addEventListener ('click', function(){
    row_right[0].classList.toggle ("hidden");
    row_left[0].classList.toggle("hidden");
    list[0].classList.toggle("trans");
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
        showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
        showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}   

////////////////////////////
setInterval(showSlide, 10000);

function showSlide() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        //setTimeout(showSlide, 10000); 
}

var hour = document.getElementById("hour");
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var cout = 60;
var hour_cout = 3;
var min_cout = 3;

setInterval(nextTime, 1000);

function nextTime(){
        if (cout+min_cout+hour_cout == 0){
            return;
        }
        cout--;
        if (cout == -1){
            cout = 59;
            min_cout--;
            if (min_cout == -1){
                min_cout = 59;
                hour_cout--;
            } 
        } 
        if (cout< 10) {
            sec.innerHTML = "0"+cout;
        } else {sec.innerHTML = ""+cout;}
        
        if (min_cout< 10) {
            min.innerHTML = "0"+min_cout;
        } else {min.innerHTML = ""+min_cout;}

        
        if (hour_cout< 10) {
            hour.innerHTML = "0"+hour_cout;
        } else {hour.innerHTML = ""+hour_cout;}
       // setTimeout(nextTime, 1000);
}

var next = document.getElementsByClassName("produit-next");
var undo = document.getElementsByClassName("produit-undo"); 
var list_po = document.getElementsByClassName("produit-trans");

next[0].addEventListener ('click', function(){
    next[0].classList.toggle ("hid");
    undo[0].classList.toggle("hid");
    list_po[0].classList.toggle("tran");
});

undo[0].addEventListener ('click', function(){
    next[0].classList.toggle ("hid");
    undo[0].classList.toggle("hid");
    list_po[0].classList.toggle("tran");
});

var hot_img = document.getElementsByClassName("hot-img");
var next = document.getElementsByClassName("next-hot");
var prev = document.getElementsByClassName("prev-hot");
var scrl = 0;
var dot = document.getElementsByClassName("dots");
var vt = 0;

next[0].addEventListener ('click', function(){
    scrl += 100;
    dot[vt].classList.toggle("dots-acctive");
    vt--;
    if (scrl > 0){scrl = -400; vt = 4;}
    dot[vt].classList.toggle("dots-acctive");
    hot_img[0].style.transform = "translateX(" + scrl + "%)";
});

prev[0].addEventListener ('click', function(){
    scrl -= 100;
    dot[vt].classList.toggle("dots-acctive");
    vt++;
    if (scrl < -400){scrl = 0; vt = 0;}
    dot[vt].classList.toggle("dots-acctive");
    hot_img[0].style.transform = "translateX(" + scrl + "%)";
});

setInterval(continue_time, 4000);
function continue_time(){
    scrl -= 100;
    dot[vt].classList.toggle("dots-acctive");
    vt++;
    if (scrl < -400){scrl = 0; vt = 0;}
    dot[vt].classList.toggle("dots-acctive");
    hot_img[0].style.transform = "translateX(" + scrl + "%)";
}
//{}
for (let i = 0; i < dot.length; i++){
    dot[i].addEventListener('click', function(){
        for (let j = 0; j < dot.length; j++){
                dot[j].classList.remove("dots-acctive");
        }
        dot[i].classList.add("dots-acctive");
        vt = i;
        scrl = (-100)*i;
        hot_img[0].style.transform = "translateX(" + scrl + "%)";
    })
}


var ndot = document.getElementsByClassName("container-dot-n");
var pdot = document.getElementsByClassName("container-dot-p");
var dot_slide = 1;
var tainer = document.getElementsByClassName("container--discount");
var container_discount = document.getElementsByClassName("discout__container");
var move_slide = 0;

ndot[0].addEventListener('click', function(){
    if (dot_slide > 4){
        return;
    }
    dot_slide++;
    if (dot_slide == 2){
        tainer[0].classList.remove("at--first");
        pdot[0].classList.remove("hid");
    } 
    if (dot_slide == 4){
        tainer[0].classList.add("at--second");
        ndot[0].classList.add("hid")
    }
    move_slide -= 100;
    container_discount[0].style.transform = "translateX(" + move_slide + "%)"; 
})

pdot[0].addEventListener('click', function(){
    if (dot_slide == 0){
        return;
    } 
    dot_slide--;
    if (dot_slide == 3){
        tainer[0].classList.remove("at--second");
        ndot[0].classList.remove("hid");
    } 
    if (dot_slide == 1){
        tainer[0].classList.add("at--first");
        pdot[0].classList.add("hid")
    }
    move_slide += 100;
    container_discount[0].style.transform = "translateX(" + move_slide + "%)"; 
})