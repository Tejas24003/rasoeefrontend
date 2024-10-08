gsap.from('nav h4',{
  y:-10,
  duration:.5,
  delay:.5,
 opacity:0,

})
gsap.from('nav h6',{
    y:-10,
    duration:.5,
    delay:.5,
   opacity:0,
  
  })
  gsap.from('nav h1',{
    y:10,
    duration:.5,
    delay:.5,
   opacity:0,
  
  })
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('animContainer'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://lottie.host/e11a9584-ded8-462d-a82e-50709ded2ffc/8J2TWiDfWz.json' // lottie file path
  })

  var slide = document.querySelector("#clickd")
var a = -400;
slide.addEventListener("click" , function(a){
    gsap.to('#vegnon',{
        x:0,
      
         duration:.6,
        delay:.5,  
        
      })
      gsap.to('#clickd',{
        color:"green",
      })
      gsap.to('#noclick',{
        color:"#212529",
      })
 

})
var slide = document.querySelector("#noclick")
var a = -400;
slide.addEventListener("click" , function(a){
    gsap.to('#vegnon',{
        x:"-50%",
        
         duration:.6,
        delay:.5,  
      })

      gsap.to('#clickd',{
        color:"#212529",
      })
      gsap.to('#noclick',{
        color:"red",
      })
 

})

// location javascript
const showDetails = document.querySelector(".showDetails");
let apiEndpoint = "https://api.opencagedata.com/geocode/v1/json";
let apikey = "a83f041117f24e74b2e235ba14f797f7";
// api to get user address
const getuserCurrentAddress = async ( latitude, longitude) =>{
  // console.log(latitude);
  let query = '${latitude},${longitude}';
  let apiurl = '${apiEndpoint}?key=${apikey}&q= ${query}&pretty=1' ;
  try{
   const res = await fetch(apiurl);
   const data = await res.json();
   console.log(data);
   }catch(error){
    console.log(error);
     }
};
document.querySelector('.geoBtn').addEventListener('click',() =>{
if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(
    (position) =>{
      console.log(position);
      const { latitude, longitude} = position.coords;
     


      showDetails.textContent = ( longitude,latitude),( latitude,longitude);
      getuserCurrentAddress(latitude, longitude);
    },
    (error) =>{
      showDetails.textContent = error.message;

  }
)
}


})