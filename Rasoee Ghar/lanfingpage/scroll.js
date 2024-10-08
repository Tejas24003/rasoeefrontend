gsap.to("nav",{
    backgroundColor:"rgba(0,0,0,.6)",
    scrollTrigger:{
        trigger: ".upperpage",
        scroller:"body",
        
        start:"top 15%",
        end:"top 12%"
       
    }
  
    
})
gsap.from(".aboutwrite h2",{
    x:-50,
    duration:.7,
    opacity:0,
   
    scrollTrigger:{
        trigger: ".aboutus",
        scroller:"body",
        markers:false,
        start:"top 35%",
        end:"top 12%",
        
       
    }
  
    
})
gsap.from(".aboutimg img ",{
    x:50,
    duration:1,
    opacity:0,
    stagger:.3,
    scrollTrigger:{
        trigger: ".aboutus",
        scroller:"body",
        markers:false,
        start:"top 35%",
        end:"top 12%"
       
    }
  
    
})
// animation for how we work
gsap.from(".about .card ",{
    y:-50,
    duration:.8,
    opacity:0,
    stagger:.2,
    scrollTrigger:{
        trigger: ".line",
        scroller:"body",
        markers:false,
        start:"top 43%",
        end:"top 12%"
       
    }
  
    
})
// testimonial animation
gsap.from(" .center .test1 ",{
    y:-100,
    duration:1,
    opacity:0,
    stagger:.7,
   
     scrollTrigger:{
        trigger: ".testimonials",
        scroller:"body",
        markers:false,
        start:"top 35%",
        end:"top 12%"
       
    }
  
    
})
gsap.from(" #footrasoee span ",{
    y:-50,
    duration:.8,
    opacity:0,
    stagger:.2,
    scrollTrigger:{
        trigger: "footer",
        scroller:"body",
        markers:false,
        start:"top 50%",
        end:"top 12%"
       
    }
  
    
})
gsap.from(" #footrasoee i ",{
    rotate:280,
    duration:1,
    opacity:0,
    delay:.8,
     scrollTrigger:{
        trigger: "footer",
        scroller:"body",
        markers:false,
        start:"top 50%",
        end:"top 12%"
       
    }
  
    
})
gsap.from(" .attachment-large ",{
    rotate:-5,
    duration:1,
 scrollTrigger:{
        trigger: "footer",
        scroller:"body",
        markers:false,
        start:"top 60%",
        end:"top 12%"
       
    }
  
    
})

var menu = document.querySelector("#nav-i")
var cross = document.querySelector("#full-i")


var tl =  gsap.timeline()


tl.from("#full a",{
    x:150,
    duration:.7,
    stagger:0.2 ,
    opacity:0,
   
  
})

tl.pause()
menu.addEventListener("click",function(){
    tl.play()
})
cross.addEventListener("click",function(){
    tl.reverse()
})