let slides = document.querySelectorAll(".carousel-item");
let dots = document.querySelectorAll(".dot")
let nextSlide = document.getElementById("next");
let prevSlide = document.getElementById("prev");
// console.log(slides, dots);

var currSlide = 1;

carousel(currSlide);

prevSlide.addEventListener("click",function(){
    carousel(currSlide -= 1);
})

nextSlide.addEventListener("click", function(){
    carousel(currSlide += 1)
})

dots.forEach(function(dot){
    dot.addEventListener("click", function(){
        console.log(this.getAttribute("data-bs-slide-to"));
        // currSlide = this.getAttribute("data-bs-slide-to")
        carousel(currSlide = this.getAttribute("data-bs-slide-to"))
    })
})


function carousel(slide){
    for(let i = 0 ; i < slides.length ; i++){
        slides[i].style.display = "none";
    }
    dots.forEach(function(dot){
        dot.classList.remove("active");
    })
    if(slide > slides.length){
        currSlide = 1;
    }else if(slide < 1){
        currSlide = slides.length;
    }
    slides[currSlide-1].style.display = "block";
    dots[currSlide-1].classList.add("active");
}