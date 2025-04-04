// Side Navigation Bar for small Screen
var menuicon=document.getElementById("menuicon")
var sidebar=document.getElementById("sidebar")

menuicon.addEventListener("click",function() {
    sidebar.style.left=0
})
var cancel=document.getElementById("cancel")

cancel.addEventListener("click",function(){
    sidebar.style.left="-50%"
})


//  offer closing in the top 
var offer_close=document.getElementById("offer_close")
var X_close=document.getElementById("X_close")
    X_close.addEventListener("click",function(){
        offer_close.style.display="none"
    })



// New Arival & Most Wanted

var arrival = document.getElementById("new")
var most = document.getElementById("most")
var newarrival = document.getElementById("newarrival")
var mostwanted = document.getElementById("MostWanted")

arrival.addEventListener("click",function()
{
    newarrival.scrollIntoView({behavior:"smooth"})
})

most.addEventListener("click",function()
{
    mostwanted.scrollIntoView({behavior:"smooth"})
})



// New Arival & Most Wanted for sidee nav

var arrival = document.getElementById("neww")
var most = document.getElementById("mostt")
var newarrival = document.getElementById("newarrival")
var mostwanted = document.getElementById("MostWanted")
 
arrival.addEventListener("click",function()
{
    newarrival.scrollIntoView({behavior:"smooth"})
})

most.addEventListener("click",function()
{
    mostwanted.scrollIntoView({behavior:"smooth"})
})


// Like  Button

document.querySelectorAll('.like1').forEach(like => {
    like.addEventListener('click', function () {
        this.classList.add('hidden');
        this.nextElementSibling.classList.remove('hidden');
    });
});

document.querySelectorAll('.red1').forEach(red => {
    red.addEventListener('click', function () {
        this.classList.add('hidden');
        this.previousElementSibling.classList.remove('hidden');
    });
});


// Offer Image

let currentIndex = 0;
const images = document.querySelectorAll('#image-slider img');

function showNextImage() {
    // Hide current image by changing opacity and moving to the left
    images[currentIndex].classList.remove('opacity-100', 'translate-x-0');
    images[currentIndex].classList.add('opacity-0', 'translate-x-full');

    // Move to the next image
    currentIndex = (currentIndex + 1) % images.length;

    // Show next image by changing opacity and sliding from the right
    images[currentIndex].classList.remove('opacity-0', 'translate-x-full');
    images[currentIndex].classList.add('opacity-100', 'translate-x-0');
}

// Initially show the first image (default)
images[currentIndex].classList.add('opacity-100', 'translate-x-0');

// Change the image every 3 seconds
setInterval(showNextImage, 3000);



