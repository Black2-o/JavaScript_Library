var intialPath = `M 10 100 Q 250 100 499 100`


var finalPath = `M 10 100 Q 250 100 499 100`


var string = document.querySelector("#string")


// string.addEventListener("mouseenter", function(dest) {
//     console.log(dest)
// })



string.addEventListener("mousemove", function(dest) {
    path = `M 10 100 Q ${dest.x} ${dest.y} 499 100`,
    console.log(path)
    gsap.to("#string svg path", {
        attr: {d: path},
        duration: 0.3,
        ease: "power3.out",
    })
})

string.addEventListener("mouseleave", function(dest) {
    gsap.to("#string svg path", {
        attr: {d: finalPath},
        duration: 1.5,
        ease: "elastic.out(1, 0.2),",
    })
})
