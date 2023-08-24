var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function (dets) {
    // console.log(dets.x);
    // console.log(dets.y);
    crsr.style.left = dets.x +40+ "px"
    crsr.style.top = dets.y + "px"
})

document.addEventListener("mousemove", function (dets) {
    // console.log(dets.x);
    // console.log(dets.y);
    blur.style.left = dets.x - 200 + "px"
    blur.style.top = dets.y - 200 + "px"
})


gsap.to("#nav", {
    backgroundColor: "#000",
    height: "129px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers : true,
        start: "top -8%",
        end: "top -10%",
        scrub: 1
    }
})



gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers : true,
        start: "top -35%",
        end: "top -70%",
        scrub: 1
    }
})

var h4all = document.querySelectorAll("#nav h4") 
h4all.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        crsr.style.scale = 4
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })

    ele.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})


var navimg = document.querySelectorAll("#nav img") 
navimg.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        crsr.style.scale = 4
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })

    ele.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})

var arrow = document.querySelectorAll("#arrow") 
arrow.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        crsr.style.scale = 4
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })

    ele.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})

var arrow = document.querySelectorAll(".ele") 
arrow.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        crsr.style.scale = 4
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })

    ele.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})

var footer = document.querySelectorAll("#f1 img, #f2 h2, #f3 h2, #f4 h2") 
footer.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        crsr.style.scale = 4
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })

    ele.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})



// gsap.from("#about-us img, #about-us-in",{
//     y:50,
//     opacity:0,
//     duration:1,
//     stagger:0.4,
//     scrollTrigger : {
//         trigger:"#about-us",
//         scroller: "body",
//         markers: true,
//         start: "top 60%",
//         end: "top 58%",
//         scrub:3
//     }
// })



// gsap.from(".card",{
//     scale:0.8,
//     opacity:0,
//     duration:1,
//     stagger:0.4,
//     scrollTrigger : {
//         trigger:".card",
//         scroller: "body",
//         markers: true,
//         start: "top 70%",
//         end: "top 65%",
//         scrub:1
//     }
// })

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger: {
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start: "top 90%,",
        end:"top 85%",
        scrub:4
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger: {
        trigger:"#colon2",
        scroller:"body",
        // markers:true,
        start: "top 90%,",
        end:"top 85%",
        scrub:4
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger: {
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start: "top 90%,",
        end:"top 85%",
        scrub:3
    }
})

