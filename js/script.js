const navSlide = () =>{
  const burger = document.querySelector('.burger');
  const nav  = document.querySelector('.nav__links');
  const navLinks = document.querySelectorAll('.nav__links li');
  const whatSpan = document.querySelectorAll('.whatimg div span');
  const afterWhat1 = document.querySelector('.afterWhat1');
  const afterWhat2 = document.querySelector('.afterWhat2');
  const afterWhat3 = document.querySelector('.afterWhat3');
  const afterWhat4 = document.querySelector('.afterWhat4');
  
  burger.addEventListener('click', () => {
   nav.classList.toggle('nav-active');

   navLinks.forEach((link, index)=>{
    if(link.style.animation){
      link.style.animation = '';
    }else{
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5  + 0.5 }s`
    }
   })
    burger.classList.toggle('toggle');
   })

   whatSpan.forEach(e => {
     e.onclick = function () {
      if(e.innerHTML == 1){
        afterWhat1.style.setProperty('display', 'block');
        afterWhat2.style.setProperty('display', "none");
        afterWhat3.style.setProperty('display', "none")
        afterWhat4.style.setProperty('display', "none")

      }
       if(e.innerHTML == 2){
        afterWhat2.style.setProperty('display', 'block');
        afterWhat1.style.setProperty('display', "none");
        afterWhat3.style.setProperty('display', "none")
        afterWhat4.style.setProperty('display', "none")
      }
      if(e.innerHTML == 3){
        afterWhat1.style.setProperty('display', 'none');
        afterWhat2.style.setProperty('display', "none");
        afterWhat3.style.setProperty('display', "block")
        afterWhat4.style.setProperty('display', "none")

      }
       if(e.innerHTML == 4){
        afterWhat2.style.setProperty('display', 'none');
        afterWhat1.style.setProperty('display', "none");
        afterWhat3.style.setProperty('display', "none")
        afterWhat4.style.setProperty('display', "block")
      }
     }
   })

}

navSlide();