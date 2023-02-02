/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myMenu");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  }

const primaryNav = document.querySelector('.menu-items')
const navToggle = document.querySelector(".mobile-nav-toggle")
 
navToggle.addEventListener('click', ()=>{
  const visibility = primaryNav.getAttribute('data-visible')
  console.log(visibility)
  if (visibility === "false"){
    primaryNav.setAttribute("data-visible", true)
    navToggle.setAttribute("aria-expanded", true) 
  } else {
    primaryNav.setAttribute("data-visible", false)
    navToggle.setAttribute("aria-expanded", false)
  
  }



  
});
 

