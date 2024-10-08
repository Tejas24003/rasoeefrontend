
var slide = document.querySelector("#page2")
var a = -400;
slide.addEventListener("mousemove" , function(a){
    gsap.to(slide,{
        y:-1000,
        
         duration:.6,
        delay:.5,  
      })
 

})





