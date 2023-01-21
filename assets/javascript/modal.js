// Get the modal
let modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img1 = document.getElementById('myImg1');
let img2 = document.getElementById('myImg2');
let img3 = document.getElementById('myImg3');
let img4 = document.getElementById('myImg4');
let img5 = document.getElementById('myImg5');
let img6 = document.getElementById('myImg6');
let img7 = document.getElementById('myImg7');
let img8 = document.getElementById('myImg8');
let img9 = document.getElementById('myImg9');

let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");


function modalizer(img) {
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
}}

modalizer(img1);
modalizer(img2);
modalizer(img3);
modalizer(img4);
modalizer(img5);
modalizer(img6);
modalizer(img7);
modalizer(img8);
modalizer(img9);

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
