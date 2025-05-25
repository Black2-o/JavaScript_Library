// gsap.to("#box1", {
//     duration: 3,
//     x: 100,
//     y: 50,
//     rotation: 30,
//     delay: 1,
//     borderRadius: "50%",
//     backgroundColor: "#CB0404",
//     scale: 0.75
// })

// gsap.from("#box2", {
//     duration: 3,
//     x: 800,
//     // rotation: 360,
//     delay: 1,
//     backgroundColor: "white",
// })



// gsap.from("h1", {
//     color:"red",
//     duration: 2,
//     delay: 1,
//     opacity: 0,
//     y: 30,
//     stagger: -1,
// })


// gsap.to("#box1", {
//     x: 1200,
//     duration: 3,
//     delay: 1,
//     rotate: 360,
//     repeat: -1,
//     yoyo: true,
// })




// gsap.to("#box1", {
//     x: 1200,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
// })

// gsap.to("#box2", {
//     x: 1200,
//     duration: 2,
//     delay: 3,
//     rotate: 360,
// })
// gsap.to("#box3", {
//     x: 1200,
//     duration: 2,
//     delay: 5,
//     rotate: 360,
// })





var tl = gsap.timeline()


// tl.to("#box1", {
//     duration: 2,
//     x: 1200,
//     rotate: 360,
//     delay: 1,
// })
// tl.to("#box2", {
//     duration: 2,
//     x: 1200,
//     rotate: 360,
//     delay: 1,
// })
// tl.to("#box3", {
//     duration: 2,
//     x: 1200,
//     rotate: 360,
//     delay: 1,
// })


tl.from("h2", {
    y: -30,
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
})
tl.from("h4", {
    y: -30,
    opacity: 0,
    duration: 1.5,
    stagger: 0.5,
})

tl.from("h1", {
    y: 30,
    opacity: 0,
    duration: 2,
    delay: 0.5,
    scale: 0.9,
})