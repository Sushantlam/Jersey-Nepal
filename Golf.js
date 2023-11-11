var blur= document.querySelector("#blurcursor")
var curosr= document.querySelector("#cursor")

var tl= gsap.timeline()
document.addEventListener("mousemove", function(dets){
    blur.style.left= dets.x-100+"px"
    blur.style.top= dets.y-100+"px"
    curosr.style.left= dets.x+"px"
    curosr.style.top= dets.y+"px"
    console.log(dets.x);
})

tl.from("#nav img, #nav h3",{
    y:-80,
    opacity:0,
    duration: 0.5,
    delay: 0.3,
    stagger: 0.3
})

tl.from("#page1 h2",{
    x:10,
    opacity:0,
    duration:0.2,
    delay:1,
    opacity:0,
    // stagger:0.3
})

tl.from("#page1 h3",{
    x:-30,
    opacity:0,
    duration:0.2,
    delay:0.3,
    opacity:0,
    stagger:0.3
})

tl.from("#page1 p",{
    y:60,
    opacity:0,
    duration:0.8,
    delay:0.3,
    opacity:0,
    
})

gsap.to("#nav",{
    backgroundColor:"black",
    duration: 1,
    height: "100px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub:1,
    }
})

//top bata 50% mathi gayesi black huna suru huncha ani sab 88% pugesi purei black huncha 
gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        markers: true,
        start: "top -50%",
        end: "top -88%",
        scrub:1,
    }
})

// gsap.from(".cards", {
//     scale: 0.5,
//     opacity:0,
//     duration: 1,
//     stagger: 0.1,
//     scrollTrigger: {
//       trigger: "#card1",
//       scroller: "body",
//        markers:true,
//       start: "top 90%",
//       end: "top 65%",
//       scrub: 0.2,
//     },
//   });