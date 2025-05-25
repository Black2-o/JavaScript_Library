// gsap.from("#page1 #box", {
//     scale: 0,
//     delay: 1,
//     duration: 1,
//     rotate: 360,
// })
// gsap.from("#page2 #box", {
//     scale: 0,
//     duration: 3,
//     rotate: 360,
//     scrollTrigger: {
//         trigger:"#page2 #box",
//         scroller: "body",
//         markers: true, 
//         start: "top 60%",
//         end: "bottom 20%",
//     },
// })


// gsap.from("#page2 h1",{
//     opacity: 0,
//     duration: 2,
//     x: 500,
//     scrollTrigger: {
//         trigger: "#page2 h1",
//         scroller: "body",
//         markers: true,
//         start: "top 50%",
//     }
    
// })

// gsap.from("#page2 h2",{
//     opacity: 0,
//     duration: 2,
//     x: -500,
//     scrollTrigger: {
//         trigger: "#page2 h2",
//         scroller: "body",
//         markers: true,
//         start: "top 50%",
//     }
    
// })

// gsap.from("#page2 #box",{
//     sclae: 0,
//     opacity: 0,
//     duration: 2,
//     rotate: 720,
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers: true,
//         start: "top 60%",
//         end: "top 20%",
//         scrub: 2,
//         pin: true,
//     }
// })


gsap.to("#page2 h1",{
    transform: "translateX(-200%)",
    duration: 2,
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end:" top -200%",
        scrub: 3,
        pin: true,
    }
})