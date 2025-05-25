var tl = gsap.timeline()


var menu = document.querySelector("#main i")
var cross = document.querySelector("#full i")


// menu.addEventListener("click", function () {
//     tl.to("#full", {
//         right: 0,
//         duration: 1,
//     })
//     tl.from("#full h4", {
//         x: 150,
//         duration: 0.5,
//         stagger: 0.3,
//         opacity: 0,
//     })
//     tl.from("#full i", {
//         opacity: 0,
//     })
// })

tl.to("#full", {
    right: 0,
    duration: 1,
})
tl.from("#full h4", {
    x: 150,
    duration: 0.5,
    stagger: 0.3,
    opacity: 0,
})
tl.from("#full i", {
    opacity: 0,
})
tl.pause()



menu.addEventListener("click", function () {
    tl.play()
})
cross.addEventListener("click", function () {
    tl.reverse()
})