var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var imageDiv = document.querySelector("#image")

// console.log(cursor)


main.addEventListener("mousemove", function (e) {
    // console.log(e)
    gsap.to(cursor, {
        duration: 0.5,
        x: e.x,
        y: e.y,
        ease: "back.out"
    })
})

imageDiv.addEventListener("mouseenter", function (e) {
    cursor.innerHTML = "View More"
    document.querySelector("#overlay").style.backgroundColor = "rgba(255, 255, 255, 0.2)"
    gsap.to(cursor, {
        scale: 2,
    })
    gsap.to("#image img", {
        scale: 1.3,
    })
})

imageDiv.addEventListener("mouseleave", function (e) {
    cursor.innerHTML = ""
    document.querySelector("#overlay").style.backgroundColor = "transparent"
    gsap.to(cursor, {
        scale: 1,
    })
        gsap.to("#image img", {
        scale: 1,
    })
})