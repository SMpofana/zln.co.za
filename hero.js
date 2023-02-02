//Header Hero Section
window.onload = function(){
    const track = document.querySelector(".carousel__track");
    const slides = Array.from(track.children)
    const nextButton = document.querySelector(".carousel__button--right");
    const prevButton = document.querySelector(".carousel__button--left");
    const dotNav = document.querySelector(".carousel__nav");
    const dots = Array.from(dotNav.children);
    // const totalSlides = slides.length;
    const interval = 5000;
    let time ;

    //Automate header

  
    addActive = function(slide) {slide.classList.add('current-slide')},
    removeActive = function(slide) {slide.classList.remove('current-slide')};
   
    
    setInterval(function (){
      for (var i = 0; i < slides.length; i++){
        if (i + 1 == slides.length) {
          addActive(slides[0]);
          slides[0].style.zIndex = 100;
          setTimeout(removeActive, 350, slides[i]); //Doesn't be worked in IE-9
          break;
        }
        if (slides[i].classList.contains('current-slide')) { 
          slides[i].removeAttribute('style');
          setTimeout(removeActive, 350, slides[i]); //Doesn't be worked in IE-9
          addActive(slides[i + 1]);
          break;
        }
      } 
    }, interval);

    // const slideWidth = slides[0].getBoundingClientRect().width;


    // console.log(slides[0])
   

    // const setSlidePosition = (slide, index) =>{
    //     slide.style.left = slideWidth * index + "px"
    // }

    // slides.forEach(setSlidePosition)

    const moveToSlide = (track, currentSlide, targetSlide) =>{
        track.style.transform = 'translateX(-'+ targetSlide.style.left +')';
        currentSlide.classList.remove("current-slide");
        targetSlide.classList.add("current-slide");
        
    }

    const updateDots = (currentDot, targetDot) =>{
        currentDot.classList.remove('current-slide');
        targetDot.classList.add('current-slide')
    }

    const hideShowArrows = (slides, prevButton, nextButton, targetIndex) =>{
        if(targetIndex === 0){
            prevButton.classList.add('is-hidden');
            nextButton.classList.remove('is-hidden')
        }else if(targetIndex === slides.length - 1){
            prevButton.classList.remove('is-hidden')
            nextButton.classList.add('is-hidden')
        }else {
            prevButton.classList.remove('is-hidden')
            nextButton.classList.remove('is-hidden')
        }
    }
    //When I click left

    prevButton.addEventListener('click', e =>{
        const currentSlide = track.querySelector(".current-slide");
        const prevSlide = currentSlide.previousElementSibling;
        const currentDot = dotNav.querySelector(".current-slide");
        const prevDot = currentDot.previousElementSibling;
        const prevIndex = slides.findIndex(slide => slide === prevSlide)

        moveToSlide(track, currentSlide, prevSlide)
        updateDots(currentDot, prevDot);
        hideShowArrows(slides, prevButton, nextButton, prevIndex)

    })

    //click on right button
    nextButton.addEventListener('click', e =>{
        //find current slide
        const currentSlide = track.querySelector(".current-slide");
            
        const nextSlide = currentSlide.nextElementSibling;
        const currentDot = dotNav.querySelector(".current-slide");
        const nextDot = currentDot.nextElementSibling;
        const nextIndex = slides.findIndex(slide => slide === nextSlide)

    
        //move to next slide when you click right
        moveToSlide(track, currentSlide, nextSlide);
        updateDots(currentDot, nextDot); 
        hideShowArrows(slides, prevButton, nextButton, nextIndex)   
    })


    //Auotomate Carousel
    // track.addEventListener('mouseover',()=>{
    //     headerloop(false);
    //     console.log("loop stopped")
    // })

    // track.addEventListener('mouseout',()=>{
    //     headerloop(true);
    //     console.log("loop started")
    // }) 
    

    



//Our work tabs
const tabs = document.querySelector(".tabs-container")
const tabHeader = tabs.querySelector(".tab-header");
const tabBody = tabs.querySelector(".tab-body");
const tabHeaderNodes = tabs.querySelectorAll(".tab-header>.heading")
const tabBodyNodes = tabs.querySelectorAll(".tab-body>.tab-content");
const tabInterval = 5000


// let activeHeader = "business"

for(let i=0; i<tabHeaderNodes.length; i++){

    console.log("work tab active")
    
    tabHeaderNodes[i].addEventListener("click", (e) =>{
        console.log("tab cliked")
        tabHeader.querySelector(".active").classList.remove("active");
        tabHeaderNodes[i].classList.add("active");
        tabBody.querySelector(".active").classList.remove("active");
        tabBodyNodes[i].classList.add("active");
        // tabHeaderNodes[i].style.left = `calc(calc(calc(25% - 5px) * ${i}) + 10px)`;
       
       
    });

    console.log(tabHeaderNodes[i].id)

    if(tabHeaderNodes[i].id == 'business'){
                
        console.log("business work active")
        setInterval(function (){
            for (var i = 0; i < busSlides.length; i++){
                if (i + 1 == busSlides.length) {
                busAddActive(busSlides[0]);
                busSlides[0].style.zIndex = 100;
                setTimeout(busRemoveActive, 350, busSlides[i]); //Doesn't be worked in IE-9
                break;
                }
                if (busSlides[i].classList.contains('current-item')) { 
                busSlides[i].removeAttribute('style');
                setTimeout(busRemoveActive, 350, busSlides[i]); //Doesn't be worked in IE-9
                busAddActive(busSlides[i + 1]);
                break;
                    }
                } 
            }, tabInterval);
            

    }else{
        console.log("home work active")
        setInterval(function (){
            for (var i = 0; i < homeSlides.length; i++){
                if (i + 1 == homeSlides.length) {
                homeAddActive(homeSlides[0]);
                homeSlides[0].style.zIndex = 100;
                setTimeout(homeRemoveActive, 350, homeSlides[i]); //Doesn't be worked in IE-9
                break;
                }
                if (homeSlides[i].classList.contains('current-item')) { 
                homeSlides[i].removeAttribute('style');
                setTimeout(homeRemoveActive, 350, homeSlides[i]); //Doesn't be worked in IE-9
                busAddActive(homeSlides[i + 1]);
                break;
                    }
                } 
            }, tabInterval);

    }


}

//Our work carousel automation - business
const busTrack = document.querySelector(".carousel__inner");
const busSlides = Array.from(busTrack.children)

busAddActive = function(busSlide) {busSlide.classList.add('current-item')};
busRemoveActive = function(busSlide) {busSlide.classList.remove('current-item')};




//Our work carousel automation - home

const homeTrack = document.querySelector(".home__carousel__inner");
const homeSlides = Array.from(homeTrack.children);

homeAddActive = function(homeSlide){homeSlide.classList.add('current-item')};
homeRemoveActive = function(homeSlide){homeSlide.classList.remove('current-item')};

//About us
const aboutTrack = document.querySelector(".card-container")
const cards = Array.from(aboutTrack.children)
const solutionsTrack = document.querySelector(".solution-container")
const solutions = Array.from(solutionsTrack.children)

cardAddActive = function(card){card.classList.add('small-screen')};
cardRemoveActive = function(card){card.classList.remove('small-screen')};

solutionAddActive = function(soltution){soltution.classList.add('active')};
solutionRemoveActive = function(soltution){soltution.classList.remove('active')};

let width = window.innerWidth
console.log(width)
if ( width < 560 ){
    setInterval(function (){
        for (var i = 0; i < cards.length; i++){
            if (i + 1 == cards.length) {
            cardAddActive(cards[0]);
            cards[0].style.zIndex = 100;
            setTimeout(cardRemoveActive, 350, cards[i]); //Doesn't be worked in IE-9
            break;
            }
            if (cards[i].classList.contains('small-screen')) { 
            cards[i].removeAttribute('style');
            setTimeout(cardRemoveActive, 350, cards[i]); //Doesn't be worked in IE-9
            cardAddActive(cards[i + 1]);
            break;
                }
            } 
        }, tabInterval);

        setInterval(function (){
            for (var i = 0; i < solutions.length; i++){
                if (i + 1 == solutions.length) {
                solutionAddActive(solutions[0]);
                solutions[0].style.zIndex = 100;
                setTimeout(solutionRemoveActive, 350, solutions[i]); //Doesn't be worked in IE-9
                break;
                }
                if (solutions[i].classList.contains('active')) { 
                    solutions[i].removeAttribute('style');
                setTimeout(solutionRemoveActive, 350, solutions[i]); //Doesn't be worked in IE-9
                solutionAddActive(solutions[i + 1]);
                break;
                    }
                } 
            }, tabInterval);
    console.log("Small window")
}else{
    console.log("Wider screen")

}

//Contact form

const contactForm = document.querySelector(".form-container");
const formHeader = contactForm.querySelector(".form-header");
const formBody = contactForm.querySelector(".form-body");
const formHeaderNodes = contactForm.querySelectorAll(".form-header>.heading");
const formBodyNodes = contactForm.querySelectorAll(".form-body>.form-section");

console.log(formBodyNodes)

for(let i=0; i<formHeaderNodes.length; i++){

    formHeaderNodes[i].addEventListener("click", (e) =>{
        console.log( formHeaderNodes[i])
        formHeader.querySelector(".active").classList.remove("active");
        formHeaderNodes[i].classList.add("active");
        formBody.querySelector(".active").classList.remove("active");
        formBodyNodes[i].classList.add("active")
    })

}




} 



 
